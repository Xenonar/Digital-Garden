/* eslint-disable @typescript-eslint/no-unused-vars */
import { readdirSync } from "fs";
import { GetStaticPaths, GetStaticProps } from "next";
import { join } from "path";
import { ParsedUrlQuery } from "querystring";
import styled from "styled-components";
import tw from "tailwind-styled-components"
import { getParsedFileContentBySlug, markdown} from '@arthekdev/markdown'
import { MDXRemote } from 'next-mdx-remote'

/* eslint-disable-next-line */
export interface ArticleProps extends ParsedUrlQuery {
  slug: string;
  frontMatter: any;

}
//Define a viariable that holds the path to article folder
const POSTS_PATH = join(process.cwd(), '_articles')

const ArticleContainer = tw.div`
    prose
    prose-lg
`
const Container = tw.div`
    m-6
`
const Title = tw.div`
    text-2xl
`
const Subtitle = tw.div`
    text-xl
`

export function Article(props: ArticleProps) {
  return (
      <Container>
        <ArticleContainer>
            <Title> Visting, {props.frontMatter.title}! </Title>
            <Subtitle>by {props.frontMatter.author.name}</Subtitle>
        </ArticleContainer>
        <hr/>
        <MDXRemote {...props.html} />
    </Container>
  );
}
export const getStaticProps: GetStaticProps<ArticleProps> = async ({params}:{params: ArticleProps}) =>{
    // 1. parse the content of our markdown and seperate it into frontmatter and content

    const articleMarkdownContent = getParsedFileContentBySlug(params.slug, POSTS_PATH)
    // 2. convert markdown content => HTML by pass down the content
    const renderHTML = await markdown(articleMarkdownContent.content)
 
    return {
    props:{
      frontMatter: articleMarkdownContent.frontMatter,
      html: renderHTML
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