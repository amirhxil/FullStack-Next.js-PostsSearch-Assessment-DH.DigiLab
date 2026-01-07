# Next.js Posts Search

A simple **Next.js** project that fetches posts from a public API using `getServerSideProps` and allows client-side filtering by title. Built with reusable components for clarity and maintainability.


## Features

- Fetches posts from [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts) on the **server-side** using `getServerSideProps`.
- Client-side **search filtering** by post title.
- Clean **component structure**:
  - `SearchBar` for input
  - `PostList` for displaying posts
- Handles API fetch errors gracefully.


## Project Structure

nextjs-posts-search/
├── pages/
│ └── index.js # Main page with SSR and filtering
├── components/
│ ├── SearchBar.js # Search input component
│ └── PostList.js # Posts display component
├── package.json
├── .gitignore
└── README.md


## Installation

1. Clone the repository:
git clone https://github.com/yourusername/nextjs-posts-search.git
cd nextjs-posts-search

2. install dependencies:
npm install

3. Start development server:
npm run dev

4. Open in browser:
http://localhost:3000


## Usage

- Type in the search bar to filter posts by title only.
- The page is server-rendered for fast loading and SEO-friendly.


## Technologies Used

- Next.js – React framework with SSR
- React Hooks (useState)
- Fetch API for server-side data
- Simple CSS styling


## Notes

This project is intended as a small assessment project for full-stack interviews. Designed to demonstrate knowledge of:
- Next.js data fetching
- Client-side filtering
- Component separation and clean code