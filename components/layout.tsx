import styled from '@emotion/styled';
import Head from 'next/head';
import { ReactElement } from 'react';

interface LayoutProps {
  title?: string;
  children: ReactElement;
  seoTitle?: string;
}

const Header = styled.div({
  backgroundColor: 'black',
  height: 50,
});

export default function Layout({ title, seoTitle, children }: LayoutProps) {
  return (
    <div>
      <Head>
        <title>{seoTitle ? `${title} | BillionSugar` : 'BillionSugar'}</title>
      </Head>
      <Header />
      <div>{children}</div>
    </div>
  );
}

export function cls(...classnames: string[]) {
  return classnames.join('');
}
