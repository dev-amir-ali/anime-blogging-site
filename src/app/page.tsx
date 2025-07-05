import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Users, BotMessageSquare } from 'lucide-react';
import { CategoryCard } from '@/components/category-card';
import { MOCK_CATEGORIES, MOCK_POSTS } from '@/lib/mock-data';
import { PostCard } from '@/components/post-card';

export default function Home() {
  const featuredPosts = MOCK_POSTS.slice(0, 3);
  const topCategories = MOCK_CATEGORIES.slice(0, 4);

  return (
    <>
      {/* Hero Section */}
      <section className="text-center py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <h1 className="font-headline text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">
            Unleash Your Inner Otaku
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-foreground/80">
            Create, share, and discover amazing anime blog posts. Powered by AI, inspired by passion.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/dashboard/posts/create">
                Create Your First Post <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
             <Button size="lg" variant="outline" asChild>
                <Link href="#featured-posts">
                  Explore Posts
                </Link>
              </Button>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section id="featured-posts" className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">Latest From The Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
         <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">The Future of Anime Blogging is Here</h2>
                <p className="text-lg text-muted-foreground mb-12">
                  We provide the tools to make content creation effortless, so you can focus on sharing your passion for anime.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div className="p-6">
                      <BotMessageSquare className="mx-auto h-12 w-12 text-primary mb-4" />
                      <h3 className="font-headline text-2xl font-semibold mb-2">AI-Powered Content</h3>
                      <p className="text-muted-foreground">Turn your thoughts into polished articles in seconds. Our AI handles the structure, grammar, and flow.</p>
                  </div>
                   <div className="p-6">
                      <CheckCircle className="mx-auto h-12 w-12 text-primary mb-4" />
                      <h3 className="font-headline text-2xl font-semibold mb-2">Simple & Intuitive</h3>
                      <p className="text-muted-foreground">An easy-to-use editor lets you refine AI content or write from scratch. No complex tools, just pure creativity.</p>
                  </div>
                   <div className="p-6">
                      <Users className="mx-auto h-12 w-12 text-primary mb-4" />
                      <h3 className="font-headline text-2xl font-semibold mb-2">Vibrant Community</h3>
                      <p className="text-muted-foreground">Connect with fellow anime fans, discover new series, and share your passion with a dedicated audience.</p>
                  </div>
              </div>
         </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-10">Explore Top Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {topCategories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
              <h2 className="font-headline text-4xl font-bold mb-4">Ready to Join the Community?</h2>
              <p className="text-xl max-w-2xl mx-auto text-primary-foreground/80 mb-8">
                  Create your account today and start publishing your first AI-assisted anime blog post in minutes.
              </p>
              <Button size="lg" variant="secondary" asChild>
                  <Link href="/signup">
                      Sign Up for Free <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
              </Button>
          </div>
      </section>
    </>
  );
}
