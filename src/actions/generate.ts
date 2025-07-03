'use server';

import { generateBlogPost } from '@/ai/flows/generate-blog-post';
import { z } from 'zod';

const generateActionSchema = z.object({
  topic: z.string().min(10, 'Please provide a more detailed topic.'),
});

type FormState = {
  success: boolean;
  message: string;
  data?: {
    title: string;
    content: string;
    keywords: string[];
  };
};

export async function generatePostAction(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = generateActionSchema.safeParse({
    topic: formData.get('topic'),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: 'Invalid topic provided.',
    };
  }

  try {
    const result = await generateBlogPost({ topic: validatedFields.data.topic });
    return {
      success: true,
      message: 'Blog post generated successfully!',
      data: result,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: 'Failed to generate blog post. Please try again.',
    };
  }
}
