'use client';
import Image from 'next/image';
import S from './style.module.scss';
import { useSearchParams } from 'next/navigation';

interface lang {
  [key: string]: string;
}
export default function StepVideo({ num, text, source: gif }: { num: number; text: lang; source: string }) {
  const lang = useSearchParams().get('lang');
  return (
    <div className={S.stepVideo}>
      <div>
        <p>Step {num}</p>
        <p>{text[lang === 'ko' ? 'ko' : 'en']}</p>
      </div>
      <Image src={gif} alt={gif} width={400} height={225} />
    </div>
  );
}
