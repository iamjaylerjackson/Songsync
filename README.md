SongSync – Music Player Web App

SongSync is a simple modern music player web application built with React, Vite, and TailwindCSS.
The goal of the project is to create a clean and responsive music browsing interface where users can discover songs and preview them directly in the browser, for free.

This project was developed as part of a Frontend Capstone project, focusing on building a functional UI, integrating a public API, and implementing navigation between pages.

Project Overview

The application allows users to:

Discover songs from an online music API

Browse songs in a responsive grid layout

Click a song to open a Now Playing page

Play or pause the song preview

Navigate through the application using a responsive navigation bar

The UI is inspired by modern music platforms such as Spotify and Apple Music, with a simple and clean layout.

Features Implemented
Landing Page

The landing page introduces the platform and allows users to begin exploring music.

It includes:

Application branding

Navigation menu

A call-to-action button that leads users to the music dashboard

Music Dashboard

The dashboard fetches songs from the Deezer API and displays them in a grid layout.

Features:

Song cover artwork

Song title

Artist name

Responsive layout for desktop and mobile

When a user clicks a song card, they are redirected to the Now Playing page.

Now Playing Page

The Now Playing page displays the selected song and allows users to preview it.

It includes:

Large album artwork

Song title and artist

Audio player preview

Music control buttons

Controls include:

Previous button

Play / Pause toggle button

Next button

The play button dynamically changes to pause while the song is playing.

Navigation Bar

The navigation bar appears across pages and provides quick navigation between sections.

Features:

Clickable logo that returns to the homepage

Navigation links

Responsive mobile layout with menu icon

Technologies Used

The project was built using the following technologies:

React
Used to build reusable UI components and manage application state.

Vite
Used as the development environment for fast builds and hot reloading.

TailwindCSS
Used for styling and responsive layouts.

React Router
Used for page navigation between:

Landing Page

Dashboard

Now Playing

Deezer API
Used to fetch music data such as songs, artists, and album covers.

API Integration

The application fetches music data using the Deezer API through a public proxy.

Example request:

https://striveschool-api.herokuapp.com/api/deezer/search?q=pop

The API returns a list of songs including:

Song title

Artist name

Album artwork

Preview audio file

These results are displayed dynamically in the dashboard.

Challenges Faced

During development several issues were encountered and resolved.

CORS API Restrictions

The Deezer API blocks some direct browser requests.
This was solved by using a public proxy API that allows browser requests.

React Router Navigation

Initially the logo navigation did not work correctly because a lowercase HTML <link> element was used instead of the React Router <Link> component.

Changing it to the proper component fixed the issue.

Tailwind Installation Issues

The latest version of Tailwind caused initialization problems with the project environment.

The issue was resolved by installing TailwindCSS version 3, which works smoothly with the Vite setup.

React Strict Mode

React Strict Mode caused some functions to execute twice during development, which made debugging API requests confusing. This behavior is normal and only occurs in development mode.

Project Structure
src
├── assets
│ ├── play.svg
│ ├── pause.svg
│ ├── next.svg
│ └── previous.svg
│
├── components
│ ├── Navbar.jsx
│
├── pages
│ ├── Landing.jsx
│ ├── Dashboard.jsx
│ └── NowPlaying.jsx
│
├── services
│ └── deezerApi.js
│
├── App.jsx
└── main.jsx
Installation

To run the project locally:

1. Clone the repository
   git clone https://github.com/yourusername/songsync-music-player.git
2. Install dependencies
   npm install
3. Start the development server
   npm run dev

The project will run on:

http://localhost:5173
Future Improvements

Possible improvements for the project include:

Search functionality for songs and artists

Music progress bar

Playlist creation

Dark mode UI

Background blur effect based on album artwork

Full track playback instead of preview clips
