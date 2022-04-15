import { readFileSync } from "fs";
import * as matter from "gray-matter";
import { join } from "path";
import { serialize } from "next-mdx-remote/serialize";


export function getParsedFileContentBySlug(filename:string, postsPath: string)
{

  //get the file and read the file
  const postFilePath = join(postsPath, `${filename}.mdx`);
  const fileContent = readFileSync(postFilePath)

  const {data, content} = matter(fileContent)
  return {
    frontMatter: data,
    content
  }
} 
export function markdown(markdownContent: string){
  return serialize(markdownContent || '');
}
