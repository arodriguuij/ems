import Link from 'next/link';
import Layout from '@/layouts/Layout';

export default function Corporal() {
  return (
    <Layout>
      <>
        <p>Corporal</p>

        {Array.from(Array(10).keys()).map((elt) => (
          <div
            className='my-4 w-full rounded-md border-2 border-gray-400 px-2 py-1'
            key={elt}
          >
            <Link
              href={`/corporal/corporal-${elt}`}
            >{`Corporal - ${elt}`}</Link>
          </div>
        ))}
      </>
    </Layout>
  );
}
