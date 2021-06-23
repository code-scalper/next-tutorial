import HeadInfo from "../components/HeadInfo";
import photoStyle from "../styles/Photos.module.css";
import Image from "next/image";
import Link from "next/link";
const photos = ({ photos }) => {
  return (
    <div className={photoStyle.content}>
      <HeadInfo title="Scalper Blog Photo" />
      <h2>photo page!</h2>
      <ul>
        {photos.map((photo) => (
          <li key={photo.id}>
            <Link href={`/photos/${photo.id}`}>
              <a>
                <Image
                  src={photo.thumbnailUrl}
                  width={100}
                  height={100}
                  alt={photo.title}
                />
              </a>
            </Link>

            <span>{photo.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos?_start=0&_end=10`
  );
  const photos = await res.json();

  return {
    props: {
      photos,
    },
  };
};

export default photos;
