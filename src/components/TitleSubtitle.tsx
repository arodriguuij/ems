import { Container } from '@/components/Container';

interface ITitleSubtitle {
  title: string;
  subtitle: string;
}
export function TitleSubtitle({ title, subtitle }: ITitleSubtitle) {
  return (
    <div className='overflow-hidden py-6 sm:py-32 lg:pb-32 xl:pb-36'>
      <Container>
        <div className='lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20'>
          <div className='relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6'>
            <h1 className='text-3xl font-medium tracking-tight text-gray-900'>
              {title}
            </h1>
            <div className='relative'>
              <div
                className='absolute inset-0 flex items-center'
                aria-hidden='true'
              >
                <div className='w-full border-t border-gray-300' />
              </div>
            </div>
            <p className='mt-6 text-lg text-gray-600'>{subtitle}</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
