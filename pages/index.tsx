import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <div>안녕하세요 내용물입니다.</div>
    </Layout>
  );
};

export default Home;
