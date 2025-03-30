
import { Post } from "@/data/posts";

// Function to parse frontmatter from markdown
export function parseFrontmatter(markdown: string): { 
  frontmatter: Partial<Post>;
  content: string;
} {
  const frontmatterRegex = /---\n([\s\S]*?)\n---/;
  const match = markdown.match(frontmatterRegex);
  
  if (!match) {
    return {
      frontmatter: {},
      content: markdown
    };
  }
  
  const frontmatterString = match[1];
  const content = markdown.replace(frontmatterRegex, '').trim();
  
  const frontmatter: Partial<Post> = {};
  const lines = frontmatterString.split('\n');
  
  for (const line of lines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex !== -1) {
      const key = line.slice(0, colonIndex).trim();
      let value = line.slice(colonIndex + 1).trim();
      
      // Handle array values like categories and tags
      if (value.startsWith('[') && value.endsWith(']')) {
        value = value.slice(1, -1);
        frontmatter[key as keyof Post] = value.split(',').map(item => item.trim()) as unknown as Post[keyof Post];
      } 
      // Handle boolean values
      else if (value === 'true' || value === 'false') {
        frontmatter[key as keyof Post] = (value === 'true') as unknown as Post[keyof Post];
      } 
      // Handle other types
      else {
        frontmatter[key as keyof Post] = value as unknown as Post[keyof Post];
      }
    }
  }
  
  return { frontmatter, content };
}

// Function to convert markdown to HTML
export function markdownToHtml(markdown: string): string {
  // Simple markdown to HTML conversion
  // This is a basic implementation - in a production app,
  // you would use a library like marked or remark

  // Convert headers
  let html = markdown
    .replace(/^# (.*$)/gm, '<h1>$1</h1>')
    .replace(/^## (.*$)/gm, '<h2>$1</h2>')
    .replace(/^### (.*$)/gm, '<h3>$1</h3>')
    .replace(/^#### (.*$)/gm, '<h4>$1</h4>');
  
  // Convert paragraphs
  html = html.replace(/^\s*(\n)?(.+)/gm, function(m) {
    return /\<(\/)?(h|ul|ol|li|blockquote|pre|img)/.test(m) ? m : '<p>' + m + '</p>';
  });
  
  // Convert bold
  html = html.replace(/\*\*(.*)\*\*/gm, '<strong>$1</strong>');
  
  // Convert emphasis
  html = html.replace(/\*(.*)\*/gm, '<em>$1</em>');
  
  // Convert links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/gm, '<a href="$2">$1</a>');
  
  // Convert unordered lists
  html = html.replace(/^\s*-\s(.*)/gm, '<li>$1</li>');
  html = html.replace(/<li>(.*)<\/li>/gm, function(m, content) {
    return '<ul><li>' + content + '</li></ul>';
  });
  
  // Clean up
  html = html.replace(/<\/ul>\s?<ul>/g, '');
  
  return html;
}

// Function to load a post from markdown file
export async function loadMarkdownPost(filePath: string): Promise<Post> {
  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(`Failed to load markdown file: ${filePath}`);
    }
    
    const markdown = await response.text();
    const { frontmatter, content } = parseFrontmatter(markdown);
    const htmlContent = markdownToHtml(content);
    
    // Generate an ID if not provided
    const id = frontmatter.id || Date.now().toString();
    
    return {
      id,
      title: frontmatter.title || 'Untitled Post',
      slug: frontmatter.slug || id,
      excerpt: frontmatter.excerpt || '',
      content: htmlContent,
      coverImage: frontmatter.coverImage || 'https://via.placeholder.com/1200x800',
      date: frontmatter.date || new Date().toLocaleDateString(),
      author: frontmatter.author || 'Anonymous',
      destination: frontmatter.destination || 'Global',
      featured: frontmatter.featured || false,
      readingTime: frontmatter.readingTime || '5 min read',
      categories: frontmatter.categories as string[] || [],
      tags: frontmatter.tags as string[] || []
    };
  } catch (error) {
    console.error('Error loading markdown post:', error);
    throw error;
  }
}

// Function to load all markdown posts from a directory
export async function loadAllMarkdownPosts(directoryPath: string): Promise<Post[]> {
  try {
    // In a real implementation, this would scan a directory
    // For now, we'll simulate with a fixed list
    const postPaths = [
      `${directoryPath}/post1.md`,
      `${directoryPath}/post2.md`,
      // Add more as needed
    ];
    
    const posts = await Promise.all(
      postPaths.map(path => loadMarkdownPost(path))
    );
    
    return posts;
  } catch (error) {
    console.error('Error loading all markdown posts:', error);
    return [];
  }
}
