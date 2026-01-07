import Head from "next/head";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import PostList from "../components/PostList";

export default function Home({ posts }) {
  const [search, setSearch] = useState("");

  // Filter posts by title only
  const filteredPosts = (posts || []).filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container" style={{ padding: "20px" }}>
      <Head>
        <title>Posts List with Search | Next.js Assessment</title>
      </Head>

      <h1>Posts List with Search | Next.js Assessment</h1>
      <SearchBar value={search} onChange={setSearch} />
      <PostList posts={filteredPosts} />
    </div>
  );
}

// Server-side fetching
export async function getServerSideProps() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();

    return { props: { posts } };
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return { props: { posts: [] } };
  }
}
