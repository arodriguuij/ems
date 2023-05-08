import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';
import Layout from '@/layouts/Layout';
import { TRATAMIENTOS_FACIALES } from '@/constants/constants';
import { TitleSubtitle } from '@/components/TitleSubtitle';

type IFacialUrl = {
  slug: string;
};

export const getStaticPaths: GetStaticPaths<IFacialUrl> = async () => {
  return {
    paths: TRATAMIENTOS_FACIALES.map(({ key }) => ({
      params: { slug: `${key}` },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IFacialUrl, IFacialUrl> = async ({
  params,
}) => {
  return {
    props: {
      slug: params!.slug,
    },
  };
};

export default function Facial(
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
