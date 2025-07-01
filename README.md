# Product Requirements Document (PRD)

## Product Name
**What's Cookin**

## Overview
What's Cookin is a modern, interactive web application that helps users discover, plan, and enjoy recipes in a fun and personalized way. The app leverages user preferences, mood, weather, and more to recommend recipes, streamline meal planning, and simplify shopping.

## Goals & Objectives
- Personalized Recipe Discovery: Recommend recipes based on user preferences, mood, weather, allergens, and more.
- Meal Planning: Allow users to plan meals for the week and generate shopping lists.
- Community Engagement: Enable users to rate, comment, and share recipes.
- Seamless Experience: Fast, responsive, and beautiful UI using shadcn UI and React.
- Scalable & Secure: Built on Next.js, deployed on Vercel, with Supabase for authentication and data storage.

## Target Audience
- Home cooks seeking inspiration
- People with dietary restrictions/allergies
- Busy individuals/families needing meal planning
- Foodies who enjoy sharing and rating recipes

## Features

### 1. Recipe Search & Recommendations
- Filter by cuisine, allergens, mood, weather, price, ingredients, time to prep/cook, and previous interactions.
- Smart recommendations based on user profile and context (e.g., weather API integration).

### 2. Recipe Details
- Step-by-step cooking guide
- Ingredients list
- Nutrition info (if available)
- User ratings and comments

### 3. User Accounts
- Sign up/login via Supabase Auth (email, OAuth)
- Save/favorite recipes
- View history and previous interactions

### 4. Meal Planning
- Add recipes to a meal plan/calendar
- Generate and export shopping lists

### 5. Community & Social
- Rate and comment on recipes
- Share recipes via social links

### 6. User-Submitted Recipes
- Users can create and submit their own recipes.
- Submitted recipes can include images, ingredients, steps, and tags.
- Option for community moderation or admin approval (future consideration).

## Technical Requirements
- Frontend: Next.js (React), shadcn UI for components, deployed on Vercel
- Backend/Database: Supabase (Postgres, Auth, Storage)
- APIs: Weather API, optional nutrition API
- Authentication: Supabase Auth
- Hosting: Vercel

## User Stories
1. As a user, I want to search for recipes by cuisine, mood, or ingredients so I can find something that fits my needs.
2. As a user, I want to save and favorite recipes so I can easily find them later.
3. As a user, I want to plan my meals for the week and generate a shopping list.
4. As a user, I want to rate and comment on recipes to share my feedback.
5. As a user, I want personalized recommendations based on my preferences and context.
6. As a user, I want to submit my own recipes and share them with the community.

## Success Metrics
- Number of active users
- Number of recipes saved/favorited
- Engagement (comments, ratings)
- Meal plans created
- Retention rate

## Milestones
1. MVP Launch: Core search, recipe details, user accounts, save/favorite, meal planning, shopping list, user-submitted recipes
2. V1.1: Ratings/comments, weather-based recommendations, social sharing
3. V1.2: Nutrition info, advanced filters, improved recommendations

---

# Deployment information

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
