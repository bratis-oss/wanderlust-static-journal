
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { Post } from '@/data/posts';

/**
 * Procesa el contenido de markdown y extrae el frontmatter y el contenido HTML
 */
export async function markdownToHtml(markdown: string) {
  const processedContent = await remark()
    .use(html)
    .process(markdown);
  return processedContent.toString();
}

/**
 * Convierte un archivo markdown a un objeto Post utilizando gray-matter
 */
export function markdownToPost(filePath: string, fileContents: string): Post {
  // Usa gray-matter para analizar el frontmatter del markdown
  const matterResult = matter(fileContents);
  
  // Extraer los datos del frontmatter
  const { data, content } = matterResult;
  
  // Definir explícitamente el tipo para las propiedades frontmatter
  interface FrontMatter {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    coverImage: string;
    date: string;
    author: string;
    destination: string;
    readingTime: string;
    featured?: boolean;
    categories?: string[];
    subcategory?: string;
    tags?: string[];
  }
  
  // Construir el objeto Post con validaciones de tipo
  const post: Post = {
    id: (data.id as string) || '',
    title: (data.title as string) || '',
    slug: (data.slug as string) || '',
    excerpt: (data.excerpt as string) || '',
    coverImage: (data.coverImage as string) || '',
    date: (data.date as string) || '',
    author: (data.author as string) || '',
    destination: (data.destination as string) || '',
    readingTime: (data.readingTime as string) || '',
    content: content || '',
    featured: data.featured as boolean | undefined,
    categories: data.categories as string[] | undefined,
    subcategory: data.subcategory as string | undefined,
    tags: data.tags as string[] | undefined,
  };

  return post;
}
