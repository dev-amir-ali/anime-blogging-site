import { MOCK_CATEGORIES, MOCK_POSTS } from '@/lib/mock-data';
import { PostCard } from '@/components/post-card';
import { notFound } from 'next/navigation';

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = MOCK_CATEGORIES.find((c) => c.slug === params.slug);
  if (!category) {
    notFound();
  }

  const posts = MOCK_POSTS.filter((p) => p.category.id === category.id);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center py-12 border-b-2 border-primary/20 mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
          {category.name}
        </h1>
        <p className="mt-2 text-lg max-w-2xl mx-auto text-foreground/80">
          {category.description}
        </p>
      </div>

      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-xl text-muted-foreground">No posts in this category yet. Be the first to write one!</p>
        </div>
      )}
    </div>
  );
}
