import { GetStaticPaths, GetStaticProps } from 'next';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface AboutProps {}

const StyledAbout = styled.div`
  color: pink;
`;

export function About({name}: AboutProps) {
  return (
    <StyledAbout>
      <h1>Welcome to { name}!</h1>
    </StyledAbout>
  );
}

export const getStaticProps: GetStaticProps<AboutProps> = async (context) =>{
  return {
    props:{
      name: "Arthek"
    }
  }
}

export default About;
