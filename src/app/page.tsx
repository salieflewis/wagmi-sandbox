import { Example, Header } from '@/client';

export default function Home() {
  return (
    <>
      <Header />
      <div className='flex justify-center'>
        <Example />
      </div>
    </>
  );
}
