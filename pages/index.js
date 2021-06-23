import Head from "next/head";
import indexStyle from "../styles/Index.module.css";

export default function Home({ posts }) {
  console.log(posts);
  return (
    <div className={indexStyle.content}>
      <h2>Recent Posts</h2>
      <ul className={indexStyle.posts}>
        {posts.map((post) => (
          <li key={post.id}>
            <p>{post.title}</p>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

const API_URL = `https://jsonplaceholder.typicode.com/posts?_start=0&_end=10`;
// const API_URL = `http://localhost:8000/api/posts`;

// export const getServerSideProps = async () => {
//   const res = await fetch(API_URL);
//   const posts = await res.json();

//   return {
//     props: {
//       posts,
//     },
//   };
// };
export const getStaticProps = async () => {
  const res = await fetch(API_URL);
  const posts = await res.json();

  return {
    props: {
      posts,
    },
    revalidate: 20,
  };
};
