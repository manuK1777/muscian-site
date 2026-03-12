import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const CONTENT_DIR = path.join(process.cwd(), 'content');

export type MarkdownPage = {
  data: Record<string, any>;
  contentHtml: string;
};

export async function getMarkdownPage(slug: string): Promise<MarkdownPage> {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  const file = await fs.readFile(filePath, 'utf8');
  const { data, content } = matter(file);

  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();

  return { data, contentHtml };
}
