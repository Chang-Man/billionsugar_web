import styled from '@emotion/styled';
import type { NextPage } from 'next';
import Layout from '../components/layout';
import facepaint from 'facepaint';
import BookItem from '../components/bookItem';

const MainItems = styled.div((props) =>
  mq({
    display: 'grid',
    gridTemplateColumns: ['1fr', '1fr 1fr', '1fr 1fr 1fr'],
    gridGap: 15,
  }),
);

const breakpoints = [576, 768, 992, 1200];

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

const dummy = [
  { title: 'string', id: 1, image: 'string', price: 5000, author: 'author0' },
  { title: 'string', id: 2, image: 'string', price: 25000, author: 'author1' },
  { title: 'string', id: 3, image: 'string', price: 15000, author: 'author2' },
];

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <MainItems>
        {dummy.map((item) => (
          <BookItem key={item.id} id={item.id} title={item.title} image={item.image} price={item.price} author={item.author} />
        ))}
      </MainItems>
    </Layout>
  );
};

export default Home;
