"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";
import { Menu, Settings, Home, Calendar, ShoppingCart, Heart as HeartIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { useRouter } from "next/navigation";
import { ModeToggle } from "@/components/ui/mode-toggle"

export default function Header() {
  const [authOpen, setAuthOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");
  const [user, setUser] = useState<any>(null);
  const [authError, setAuthError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    supabase.auth.getUser().then(({ data }) => setUser(data.user ?? null));
    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setAuthError("");
    if (authMode === "login") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) setAuthError(error.message);
      else setAuthOpen(false);
    } else {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) setAuthError(error.message);
      else setAuthOpen(false);
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    router.push("/");
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 bg-card/80 ${scrolled ? "border-b border-border shadow-sm" : ""} backdrop-blur h-16 flex items-center justify-center`}>
      <div className="w-full flex flex-row justify-between items-center py-3 px-2 sm:px-4">
        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold tracking-tight">What&apos;s Cookin</span>
        </div>
        {/* Desktop Nav */}
        <div className="hidden sm:flex flex-row items-center gap-4">
          <Link href="/">
            <Button variant="ghost" className="text-base font-normal">Recipes</Button>
          </Link>
          <Link href="/meal-plan">
            <Button variant="ghost" className="text-base font-normal">Meal Plan</Button>
          </Link>
          <Link href="/shopping-list">
            <Button variant="ghost" className="text-base font-normal">Shopping List</Button>
          </Link>
          <Link href="/favorites">
            <Button variant="ghost" className="text-base font-normal">My Favorites</Button>
          </Link>
          <ModeToggle />
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Settings">
                  <Settings className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="px-3 py-2 text-xs text-muted-foreground">Signed in as</div>
                <div className="px-3 pb-2 text-sm font-medium truncate">{user.email}</div>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="text-destructive cursor-pointer">Logout</DropdownMenuItem>
                {/* Future: <DropdownMenuItem>Profile</DropdownMenuItem> */}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Dialog open={authOpen} onOpenChange={setAuthOpen}>
              <DialogTrigger asChild>
                <Button variant="default">Sign Up / Login</Button>
              </DialogTrigger>
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
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
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
          )}
        </div>
        {/* Mobile Nav Sheet */}
        <div className="flex sm:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-64 flex flex-col h-full">
              <div className="flex flex-col gap-2 p-4 flex-1 overflow-y-auto">
                <span className="text-2xl font-bold tracking-tight mb-2">What&apos;s Cookin</span>
                <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start text-base font-normal flex items-center gap-2">
                    <Home className="w-5 h-5" /> Recipes
                  </Button>
                </Link>
                <Link href="/meal-plan" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start text-base font-normal flex items-center gap-2">
                    <Calendar className="w-5 h-5" /> Meal Plan
                  </Button>
                </Link>
                <Link href="/shopping-list" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start text-base font-normal flex items-center gap-2">
                    <ShoppingCart className="w-5 h-5" /> Shopping List
                  </Button>
                </Link>
                <Link href="/favorites" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start text-base font-normal flex items-center gap-2">
                    <HeartIcon className="w-5 h-5" /> My Favorites
                  </Button>
                </Link>
                <div className="border-t my-2" />
              </div>
              <div className="p-4 border-t">
                <ModeToggle />
                {user ? (
                  <>
                    <span className="block text-sm font-medium truncate max-w-[180px] mb-2">{user.user_metadata?.full_name || user.user_metadata?.name || user.email}</span>
                    <Button variant="outline" onClick={async () => { await handleLogout(); setMobileMenuOpen(false); }} className="w-full">Logout</Button>
                  </>
                ) : (
                  <Dialog open={authOpen} onOpenChange={setAuthOpen}>
                    <DialogTrigger asChild>
                      <Button variant="default" className="w-full">Sign Up / Login</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>{authMode === "login" ? "Login" : "Sign Up"}</DialogTitle>
                      </DialogHeader>
                      <form onSubmit={handleAuth} className="space-y-4 mt-4">
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="password">Password</Label>
                          <Input
                            id="password"
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
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
} 