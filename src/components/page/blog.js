// Blog.js
import React from 'react';
import './Blog.css';

function Blog() {
  return (
    <div className="blog">
      <header>
        <h1>My Blog</h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="posts">
          <h2>Latest Posts</h2>
          <Article title="Post 1" date="January 1, 2022">
            This is the content of post 1.
          </Article>
          <Article title="Post 2" date="January 5, 2022">
            This is the content of post 2.
          </Article>
          {/* add more articles here */}
        </section>
        <aside className="sidebar">
          <h2>Categories</h2>
          <ul>
            <li><a href="#">Category 1</a></li>
            <li><a href="#">Category 2</a></li>
            <li><a href="#">Category 3</a></li>
          </ul>
        </aside>
      </main>
      <footer>
        <p>&copy; 2022 My Blog</p>
      </footer>
    </div>
  );
}

function Article({ title, date, children }) {
  return (
    <article>
      <h3>{title}</h3>
      <p>{children}</p>
      <p>Posted on {date}</p>
    </article>
  );
}

export default Blog;