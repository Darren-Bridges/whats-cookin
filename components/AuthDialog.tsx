"use client";
import React, { useState, useCallback, useRef, forwardRef, useImperativeHandle } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabaseClient";

export interface AuthDialogHandle {
  open: () => void;
}

export const AuthDialog = forwardRef<AuthDialogHandle>((_props, ref) => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");
  const [authError, setAuthError] = useState("");
  const [loading, setLoading] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => setOpen(true),
  }));

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setAuthError("");
    if (authMode === "login") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) setAuthError(error.message);
      else setOpen(false);
    } else {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) setAuthError(error.message);
      else setOpen(false);
    }
    setLoading(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{authMode === "login" ? "Login" : "Sign Up"}</DialogTitle>
          <DialogDescription>
            {authMode === "login"
              ? "Enter your email and password to log in."
              : "Create an account to unlock all features."}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleAuth} className="space-y-4 mt-4">
          <div>
            <Label htmlFor="auth-email">Email</Label>
            <Input
              id="auth-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="auth-password">Password</Label>
            <Input
              id="auth-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {authError && <div className="text-destructive text-sm">{authError}</div>}
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Loading..." : authMode === "login" ? "Login" : "Sign Up"}
          </Button>
        </form>
        <div className="text-center mt-2">
          {authMode === "login" ? (
            <span>
              Don&apos;t have an account?{' '}
              <button className="text-primary underline" onClick={() => setAuthMode("signup")}>Sign Up</button>
            </span>
          ) : (
            <span>
              Already have an account?{' '}
              <button className="text-primary underline" onClick={() => setAuthMode("login")}>Login</button>
            </span>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
});
AuthDialog.displayName = "AuthDialog"; 