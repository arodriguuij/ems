import { TitleSubtitle } from '@/components/TitleSubtitle';
import Portrail from '@/components/Portrail';

import Layout from '@/layouts/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <>
        <Portrail />
        <TitleSubtitle
          title='Tratamientos Medicina Estética y Antiedad'
          subtitle='Descubre nuestra amplica gama de tratamientos de belleza y estéica para todo tipo de pieles'
        />
        <ul role='list'>
          <li
            className={`px-4 py-40 sm:px-0 flex justify-center bg-indigo-300`}
          >
            <Link href={`/facial/`}>Tratamientos Faciales</Link>
          </li>
          <li
            className={`px-4 py-40 sm:px-0 flex justify-center bg-indigo-500`}
          >
            <Link href={`/facial/`}>Tratamientos Corporales</Link>
          </li>
        </ul>
        <br />
        <li className={`px-4 py-40 sm:px-0 flex justify-center bg-indigo-300`}>
          <Link href={`/facial/`}>Tratamiento Destacado</Link>
        </li>
      </>
    </Layout>
  );
}
