export default function PostList({ posts }) {
  if (!posts || posts.length === 0) {
    return <p>No posts found.</p>;
  }

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id} className="post-item">
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}
