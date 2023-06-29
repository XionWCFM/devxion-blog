import Image from 'next/image';

export const runtime = 'edge';
export default function Home() {
  return (
    <main>
      <div className=" h-[5000px]">안녕하세요</div>
    </main>
  );
}
