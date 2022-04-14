import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import styled from "styled-components";

/* eslint-disable-next-line */
export interface ArticleProps extends ParsedUrlQuery {
  slug: string;

}

const StyledArticle = styled.div`
  color: pink;
`;

export function Article(props: ArticleProps) {
  return (
    <StyledArticle>
      <h1>Visting, {props.slug}!</h1>
    </StyledArticle>
  );
}
export const getStaticProps: GetStaticProps<ArticleProps> = async ({params}:{params: ArticleProps}) =>{
  return {
    props:{
      slug: params.slug,
    }
  }
}
export const getStaticPaths:GetStaticPaths<ArticleProps> =async () => {
  return {
    paths:[
      {
        params:{
          slug: 'page1'
        }
      }
    ],
    fallback: false,
  }
}

export default Article;
