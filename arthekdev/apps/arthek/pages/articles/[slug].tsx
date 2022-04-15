/* eslint-disable @typescript-eslint/no-unused-vars */
import { readdirSync } from "fs";
import { GetStaticPaths, GetStaticProps } from "next";
import { join } from "path";
import { ParsedUrlQuery } from "querystring";
import styled from "styled-components";
import tw from "tailwind-styled-components"

/* eslint-disable-next-line */
export interface ArticleProps extends ParsedUrlQuery {
  slug: string;

}
//Define a viariable that holds the path to article folder
const POSTS_PATH = join(process.cwd(), '_articles')

const StyledArticle = styled.div`
  color: pink;
`;
const ArticleContainer = tw(StyledArticle)`
   flex
`

export function Article(props: ArticleProps) {
  return (
    <ArticleContainer>
      <h1>Visting, {props.slug}!</h1>
    </ArticleContainer>
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
  //use file system to read
  const paths = readdirSync(POSTS_PATH).map((path)=>path.replace(/\.mdx?$/, ''))
  .map((slug)=>({params: { slug}}))
  return {
    paths,
    fallback: false,
  }
}

export default Article;