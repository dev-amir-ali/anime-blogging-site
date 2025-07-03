import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { CategoryCard } from '@/components/category-card';
import { MOCK_CATEGORIES } from '@/lib/mock-data';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center py-20">
        <h1 className="font-headline text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">
          Unleash Your Inner Otaku
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-foreground/80">
          Create, share, and discover amazing anime blog posts. Powered by AI, inspired by passion.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/dashboard/posts/create">
              Create Your First Post <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-16">
        <h2 className="font-headline text-3xl font-bold text-center mb-10">Explore Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {MOCK_CATEGORIES.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>
    </div>
  );
}
