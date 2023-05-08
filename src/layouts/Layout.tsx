import Head from 'next/head';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { ReactNode } from 'react';

interface ILayout {
  children: ReactNode;
}
export default function Layout({ children }: ILayout) {
  return (
    <>
      <Head>
        <title>Dra. Elvira Morgado</title>
        <meta
          name='description'
          content='Aesthetic Medicine by Elvira Morgado Sanchez'
        />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
