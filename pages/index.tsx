import styled from '@emotion/styled';
import type { NextPage } from 'next';
import Layout from '../components/layout';
import facepaint from 'facepaint';

const MainItem = styled.div({
  backgroundColor: 'pink',
  width: '100%',
  height: 50,
  marginBottom: 10,
});

const MainItems = styled.div({
  display: 'grid',
});

const breakpoints = [576, 768, 992, 1200];

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <MainItems>
        <MainItem />
        <MainItem />
        <MainItem />
        <MainItem />
      </MainItems>
    </Layout>
  );
};

export default Home;
