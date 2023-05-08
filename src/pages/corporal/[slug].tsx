import { TitleSubtitle } from '@/components/TitleSubtitle';
import { TRATAMIENTOS_CORPORALES } from '@/constants/constants';
import Layout from '@/layouts/Layout';
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';

type ICorporalUrl = {
  slug: string;
};

export const getStaticPaths: GetStaticPaths<ICorporalUrl> = async () => {
  return {
    paths: TRATAMIENTOS_CORPORALES.map(({ key }) => ({
      params: { slug: `${key}` },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  ICorporalUrl,
  ICorporalUrl
> = async ({ params }) => {
  return {
    props: {
      slug: params!.slug,
    },
  };
};

export default function Contact(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <Layout>
      <>
        <TitleSubtitle title={props.slug} subtitle='' />
      </>
    </Layout>
  );
}
