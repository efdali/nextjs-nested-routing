import { useRouter } from 'next/router';

function Category() {
  const { category } = useRouter().query;
  return <h1>Category - {category}</h1>;
}

export default Category;
