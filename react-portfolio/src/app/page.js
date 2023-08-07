import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 text-brand-text">
      <h1 className="text-9xl">Hi. My name is Xander.</h1>
      <button className='transition duration-300 bg-brand-secondary hover:bg-brand-tertiary hover:scale-110 text-3xl p-3 my-5 rounded-xl'>About Me</button>
    </main>
  )
}
