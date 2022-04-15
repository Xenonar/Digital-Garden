import { readFileSync } from "fs";
import * as matter from "gray-matter";
import { join } from "path";

export function getParsedFileContentBySlug(filename:string, postsPath: string)
{

  //get the file and read the file
  const postFilePath = join(postsPath, `${filename}.md`);
  const fileContent = readFileSync(postFilePath)

  const {data, content} = matter(fileContent)
  return {
    frontMatter: data,
    content
  }
} 
export function markdown(): string {
  return 'markdown';
}
