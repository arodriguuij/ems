import { Container } from '@/components/Container';
import { Logomark } from '@/components/Logo';
import { NavLinks } from '@/components/NavLinks';

export function Footer() {
  return (
    <footer className='border-t border-gray-200'>
      <Container>
        <div className='flex flex-col items-start justify-between gap-y-12 pb-6 pt-16 lg:flex-row lg:items-center lg:py-16'>
          <div>
            <div className='flex items-center text-gray-900'>
              <Logomark className='h-10 w-10 flex-none fill-cyan-500' />
              <div className='ml-4'>
                <p className='text-base font-semibold'>EMS</p>
                <p className='mt-1 text-sm'>
                  Aesthetic Medicine by Dra. Elvira Morgado
                </p>
              </div>
            </div>
            <nav className='mt-11 flex gap-8'>
              <NavLinks />
            </nav>
          </div>
        </div>
      </Container>
    </footer>
  );
}
