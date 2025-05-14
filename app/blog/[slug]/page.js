import React from "react";

export default function BlogPostPage({ params }) {
  return (
    <main>
      <h1>Blog Post: {params.slug}</h1>
      <p>
        This is the blog post page for <strong>{params.slug}</strong>.
      </p>
    </main>
  );
}
