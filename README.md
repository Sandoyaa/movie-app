# Movie Discovery Mobile App

A modern movie discovery mobile application built with React Native, Expo SDK 54, and TMDB API.

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | React Native + Expo SDK 54 |
| **Navigation** | Expo Router (file-based, Stack + Bottom Tabs) |
| **Styling** | NativeWind v4 (Tailwind CSS for React Native) |
| **Data Source** | TMDB API (The Movie Database) |
| **Backend** | Appwrite (trending search tracking) |
| **Data Fetching** | Custom `useFetch` hook |
| **Language** | TypeScript 5.9 |

## Implemented Screens and Features

- **Home tab** — Popular movies list with poster grid, ratings, and loading/error states
- **Search tab** — Movie search with trending queries tracked via Appwrite
- **Saved tab** — Saved movies collection
- **Profile tab** — User profile page
- **Movie Detail screen** — Full movie page with poster, overview, genres, budget, revenue, runtime, and production companies

## Project Structure

```
app/
  _layout.tsx               # Root layout (Stack navigator)
  global.css                # Tailwind CSS imports
  (tabs)/
    _layout.tsx             # Bottom tab bar (Home, Search, Saved, Profile)
    index.tsx               # Home tab — popular movies grid
    search.tsx              # Search tab — movie search with trending
    saved.tsx               # Saved tab — bookmarked movies
    profile.tsx             # Profile tab — user info
  movies/
    [id].tsx                # Movie detail screen (dynamic route)

components/
  SearchBar.tsx             # Search input with icon

services/
  api.ts                    # TMDB API calls (fetchMovies, fetchMovieDetails)
  useFetch.ts               # Generic data-fetching hook with loading/error/refetch

interfaces/
  interfaces.d.ts           # Movie, MovieDetails, TrendingMovie types

constants/
  icons.ts                  # PNG icon barrel exports
  images.ts                 # PNG image barrel exports

assets/
  icons/                    # PNG icons (arrow, home, logo, person, play, save, search, star)
  images/                   # Background images (bg, highlight, logo, rankingGradient)
```

## Getting Started

```bash
npm install
```

Add your TMDB API key to the environment:

```env
EXPO_PUBLIC_MOVIE_API_KEY=your_tmdb_bearer_token
```

```bash
npx expo start      # Start Expo dev server (scan QR with Expo Go)
```