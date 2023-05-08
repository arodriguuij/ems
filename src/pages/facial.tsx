import Link from 'next/link';
import Layout from '@/layouts/Layout';
import { TitleSubtitle } from '@/components/TitleSubtitle';
import { Button } from '@/components/Button';
import { useState } from 'react';
import {
  TRATAMIENTOS,
  TRATAMIENTOS_CORPORALES,
  TRATAMIENTOS_FACIALES,
} from '@/constants/constants';

type ITratamtientos = 'faciales' | 'corporales';

export default function Facial() {
  const [tratamiento, setTratamiento] = useState<ITratamtientos>('faciales');

  const handleTratamientoClick = (_tratamiento: ITratamtientos) => {
    setTratamiento(_tratamiento);
  };
  return (
    <Layout>
      <>
        <TitleSubtitle
          title='Tratamientos Faciales'
          subtitle='Descubre nuestra amplia gama de tratamientos de belleza y mestética paratodo tipos de pieles.'
        />

        <ul role='list' className='grid grid-cols-2 gap-4 py-6'>
          {TRATAMIENTOS.map(({ key, value }) => (
            <li className='px-4 py-0 sm:px-0 flex justify-center'>
              <Button
                onClick={() => handleTratamientoClick(key)}
                variant={tratamiento === key ? 'solid' : 'outline'}
              >
                {value}
              </Button>
            </li>
          ))}
        </ul>

        <div className='relative'>
          <div
            className='absolute inset-0 flex items-center'
            aria-hidden='true'
          >
            <div className='w-full border-t border-gray-300' />
          </div>
        </div>

        {tratamiento === 'faciales' && (
          <>
            <ul role='list' className='grid grid-cols-2 gap-4 py-6'>
              {TRATAMIENTOS_FACIALES.map(({ key, value }) => (
                <li className='px-2 py-0 sm:px-0 flex justify-left text-sm'>
                  <Link href={`/facial/${key}`}>{value}</Link>
                </li>
              ))}
            </ul>
            <ul role='list'>
              {TRATAMIENTOS_FACIALES.map(({ key, value }, index) => (
                <li
                  className={`px-4 py-32 sm:px-0 flex justify-center ${
                    index % 2 == 0 ? 'bg-indigo-300' : ''
                  }`}
                >
                  <Link href={`/facial/${key}`}>{value}</Link>
                </li>
              ))}
            </ul>
          </>
        )}
        {tratamiento === 'corporales' && (
          <>
            <ul role='list' className='grid grid-cols-2 gap-4 py-6'>
              {TRATAMIENTOS_CORPORALES.map(({ key, value }) => (
                <li className='px-2 py-0 sm:px-0 flex justify-left text-sm'>
                  <Link href={`/corporal/${key}`}>{value}</Link>
                </li>
              ))}
            </ul>
            <ul role='list'>
              {TRATAMIENTOS_CORPORALES.map(({ key, value }, index) => (
                <li
                  className={`px-4 py-32 sm:px-0 flex justify-center ${
                    index % 2 == 0 ? 'bg-indigo-300' : ''
                  }`}
                >
                  <Link href={`/corporal/${key}`}>{value}</Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </>
    </Layout>
  );
}
