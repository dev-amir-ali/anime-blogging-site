'use server';

/**
 * @fileOverview An AI agent for generating blog post content from a topic.
 *
 * - generateBlogPost - A function that generates blog post content.
 * - GenerateBlogPostInput - The input type for the generateBlogPost function.
 * - GenerateBlogPostOutput - The return type for the generateBlogPost function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateBlogPostInputSchema = z.object({
  topic: z.string().describe('The topic of the blog post to generate.'),
});
export type GenerateBlogPostInput = z.infer<typeof GenerateBlogPostInputSchema>;

const GenerateBlogPostOutputSchema = z.object({
  title: z.string().describe('The title of the blog post.'),
  content: z.string().describe('The generated content of the blog post.'),
  keywords: z.array(z.string()).describe('Suggested keywords for the blog post.'),
});
export type GenerateBlogPostOutput = z.infer<typeof GenerateBlogPostOutputSchema>;

export async function generateBlogPost(input: GenerateBlogPostInput): Promise<GenerateBlogPostOutput> {
  return generateBlogPostFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateBlogPostPrompt',
  input: {schema: GenerateBlogPostInputSchema},
  output: {schema: GenerateBlogPostOutputSchema},
  prompt: `You are an expert blog post writer specializing in anime content.

You will generate a blog post based on the given topic, including a title, content, and suggested keywords.

Topic: {{{topic}}}

Please generate a blog post with a title, content, and suggested keywords related to the topic. The blog post should be engaging and informative. The keywords should be relevant to the topic and helpful for search engine optimization.

Make sure the generated blog post is modern, attractive, responsive and perfect for an anime blogging website. use the saturated purple (#A020F0) , light purple (#E6D6FC) and Deep Pink (#FF1493) color combination as well as 'Poppins' and 'PT Sans' fonts

Output the result in JSON format.
`,
});

const generateBlogPostFlow = ai.defineFlow(
  {
    name: 'generateBlogPostFlow',
    inputSchema: GenerateBlogPostInputSchema,
    outputSchema: GenerateBlogPostOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
