import Head from 'next/head';
import { ReactElement } from 'react';

interface LayoutProps {
  title?: string;
  children: ReactElement;
  seoTitle?: string;
}
export default function Layout({ title, seoTitle, children }: LayoutProps) {
  return (
    <div>
      <Head>
        <title>{seoTitle ? `${title} | BillionSugar` : 'BillionSugar'}</title>
      </Head>
      <div className="bg-black shadow-lg w-full h-14 justify-center text-lg px-10 font-medium fixed text-gray-800 border-b top-0 flex items-center"></div>
      <div className="h-screen pt-14">{children}</div>
    </div>
  );
}

export function cls(...classnames: string[]) {
  return classnames.join('');
}
