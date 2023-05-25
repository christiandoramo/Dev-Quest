import { useEffect, useState } from "react";

async function getPosts() {
  const resp = await fetch("http://localhost:3000/json/posts.json");
  return await resp.json();
}

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const posts = await getPosts();
      setPosts(posts.data);
    }
  }, []);

  return (
    <section>
      <ol>
        {posts.map((post, index) => {
          <li key={index}>
            <img src={post.image}></img>
            <h2>{post.title}</h2>
          </li>;
        })}
      </ol>
    </section>
  );
};

export { PostsList };
