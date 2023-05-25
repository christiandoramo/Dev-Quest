import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MeuLink } from "../../link";

const portaAtual = 3000;

async function getPost(id) {
  const resp = await fetch(
    `http://localhost:${portaAtual}/json/post-${id}.json`
  );
  return await resp.json();
}

export const PostDetails = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();
  useEffect(() => {
    getPost(id).then((post) => {
      console.log(post);
      setPost(post.data);
    });
  }, []);

  return (
    <div>
      <MeuLink>Voltar</MeuLink>
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <p>{post.text}</p>
    </div>
  );
};
