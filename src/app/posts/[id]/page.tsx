import { MOCK_POSTS } from '@/lib/mock-data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';

export default function PostPage({ params }: { params: { id: string } }) {
  const post = MOCK_POSTS.find((p) => p.id === params.id);
  if (!post) {
    notFound();
  }

  const formattedDate = format(new Date(post.createdAt), 'MMMM d, yyyy');

  return (
    <article className="container max-w-4xl mx-auto py-12 px-4">
      <div className="text-center mb-8">
        <Link href={`/category/${post.category.slug}`}>
            <Badge variant="default" className="text-sm">{post.category.name}</Badge>
        </Link>
        <h1 className="font-headline text-4xl md:text-5xl font-extrabold mt-4">{post.title}</h1>
        <div className="flex justify-center items-center gap-4 mt-6 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={post.author.avatarUrl} alt={post.author.name} />
              <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <Link href={`/users/${post.author.id}`} className="font-semibold hover:text-primary">{post.author.name}</Link>
          </div>
          <span>•</span>
          <time dateTime={post.createdAt}>{formattedDate}</time>
        </div>
      </div>

      <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-8 shadow-lg">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover"
          data-ai-hint={post.hint}
          priority
        />
      </div>

      <div className="text-lg space-y-6 text-foreground/90">
        <p>{post.content}</p>
        <p>This is where more of the blog post content would go. We're using placeholder text for now, but imagine a rich, detailed article filling this space, complete with more images, quotes, and detailed analysis. The AI would generate several paragraphs of content here, making it easy for users to create high-quality posts quickly.</p>
        <h2 className="font-headline text-3xl font-bold text-primary pt-4">A Deeper Dive</h2>
        <p>The AI can be prompted to expand on specific points, creating sub-headings and detailed sections. This allows for a structured and easy-to-read blog post that keeps readers engaged from start to finish.</p>
      </div>

      <div className="mt-12">
        <h3 className="font-headline text-xl font-semibold mb-4">Keywords</h3>
        <div className="flex flex-wrap gap-2">
          {post.keywords.map((keyword) => (
            <Badge key={keyword} variant="outline">{keyword}</Badge>
          ))}
        </div>
      </div>
    </article>
  );
}
