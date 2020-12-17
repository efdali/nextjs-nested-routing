import { useRouter } from 'next/router';

function Blog() {
  const { category, slug } = useRouter().query;
  return (
    <h1>
      Blog - {category} - {slug}
    </h1>
  );
}

export default Blog;
