import styled from '@emotion/styled';
import Link from 'next/link';

interface bookItemProps {
  title: string;
  id: number;
  image: string;
  price: number;
  author: string;
}

export default function BookItem({ title, id, image, price, author }: bookItemProps) {
  return (
    <Link href={`/books/${id}`}>
      <BookContainer>
        <BookImg
          src={
            'https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000'
          }
        />
        <TitleContainer>
          <span>{title}</span>
          <div />
        </TitleContainer>
        <AuthorContainer>
          <span>{author}</span>
        </AuthorContainer>
        <PriceContainer>
          <div></div>
          <span>{price}</span>
        </PriceContainer>
      </BookContainer>
    </Link>
  );
}

const BookContainer = styled.a({
  width: '100%',
  background: '#FFFFFF',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.25)',
  borderRadius: '16px',
  display: 'flex',
  flexDirection: 'column',
  padding: 10,
});

const BookImg = styled.img({
  width: '100%',
  height: '26vh',
  borderRadius: '12px',
  objectFit: 'cover',
});

const TitleContainer = styled.div({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: 10,
});

const AuthorContainer = styled.div({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: 10,
});

const PriceContainer = styled.div({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: 10,
});
