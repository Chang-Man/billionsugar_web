import styled from '@emotion/styled';
import Head from 'next/head';
import { ReactElement } from 'react';

interface LayoutProps {
  title?: string;
  children: ReactElement;
  seoTitle?: string;
}

const Header = styled.div({
  width: '100%',
  backgroundColor: '#1C1B1F',
  height: 50,
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
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
