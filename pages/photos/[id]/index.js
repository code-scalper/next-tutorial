import Image from "next/image";
import Link from "next/link";
const index = ({ photo }) => {
  const { id, url, title } = photo;
  return (
    <div>
      <h2>{title}</h2>
      <Image src={url} width={400} height={400} alt={title} />
      <br />
      <Link href="/photos">Go Back!</Link>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
  const photo = await res.json();
  return {
    props: {
      photo,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos?_start=0&_end=10`
  );
  const photos = await res.json();
  const ids = photos.map((photo) => photo.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};

export default index;
