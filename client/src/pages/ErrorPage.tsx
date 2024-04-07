import { Button } from '@/components/UI';

export const ErrorPage = () => {
  return (
    <section className='h-screen flex flex-col justify-center items-center gap-4'>
      <h1 className='text-2xl text-center sm:text-[2rem]'>
        Ops. Something wrong :(
      </h1>
      <p className='text-center'>
        The page you are looking for cannot be found. Please check the URL.
      </p>
      <Button label='Return to main' isLink path='/' />
    </section>
  );
};
