import styled from '@emotion/styled';
import type { NextPage } from 'next';
import Layout from '../components/layout';

const MainItem = styled.div({
  backgroundColor: 'pink',
  width: '100%',
  height: 50,
  marginBottom: 10,
});

const MainItems = styled.div({
  display: 'grid',
});

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
