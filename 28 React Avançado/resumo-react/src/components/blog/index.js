import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MeuLink } from "../link";

const portaAtual = 3000;

async function getPosts() {
  const resp = await fetch(`http://localhost:${portaAtual}/json/posts.json`);
  // porta pode variar
  return await resp.json();
}

export const PostsList = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts().then((posts) => {
      setPosts(posts.data);
    });
  }, []);

  return (
    <>
      {" "}
      <MeuLink link="/">Voltar para Cards</MeuLink>
      <ul>
        {posts.map((post, index) => (
          // quando se usa { } é necessário usar return
          // caso se use  ( ) já retorna automaticamente
          <li key={index}>
            <Link to={`/posts/${post.id}`}>
              <img src={post.image} alt={post.title} />
              <h2>{post.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
