import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: '100' } },
      { params: { id: '200' } },
      { params: { id: '300' } },
    ],
    fallback: false, // false or 'blocking'
  };
};

export default function Page(props: any) {
  return <div>어엄준식</div>;
}
