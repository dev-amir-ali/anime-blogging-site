import { FlameKindling, Users, Wand2 } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="font-headline text-5xl md:text-6xl font-bold text-primary">
          About Anime Blog AI
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-foreground/80">
          Fusing a passion for anime with the power of artificial intelligence to revolutionize content creation.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-16 items-center py-12">
        <div className="space-y-4">
          <h2 className="font-headline text-3xl font-bold text-primary">Our Mission</h2>
          <p className="text-lg text-foreground/90">
            Our mission is to empower anime fans, from casual viewers to dedicated otakus, to share their passion and insights with the world. We believe that everyone has a unique perspective, but not everyone has the time or writing experience to craft compelling blog posts.
          </p>
          <p className="text-foreground/80">
            Anime Blog AI bridges that gap. We provide a platform where your ideas can be transformed into well-structured, engaging, and beautifully formatted articles using cutting-edge AI. We handle the hard parts of writing, so you can focus on what you love: anime.
          </p>
        </div>
        <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
          <Image
            src="https://placehold.co/600x400.png"
            alt="Anime community concept"
            fill
            className="object-cover"
            data-ai-hint="anime community"
          />
        </div>
      </section>

      <section className="py-20 bg-card rounded-lg px-8">
        <h2 className="font-headline text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="flex flex-col items-center">
            <div className="p-4 bg-primary rounded-full mb-4">
              <FlameKindling className="h-10 w-10 text-primary-foreground" />
            </div>
            <h3 className="font-headline text-2xl font-semibold mb-2">1. Spark an Idea</h3>
            <p className="text-muted-foreground">
              Simply provide a topic or a brief idea for your blog post. It can be anything from "Top 5 Demon Slayer Arcs" to "The Symbolism of Flowers in Shojo Anime."
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="p-4 bg-accent rounded-full mb-4">
              <Wand2 className="h-10 w-10 text-accent-foreground" />
            </div>
            <h3 className="font-headline text-2xl font-semibold mb-2">2. AI-Powered Magic</h3>
            <p className="text-muted-foreground">
              Our advanced AI gets to work, generating a complete draft including a title, engaging content, and relevant keywords for SEO.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="p-4 bg-secondary rounded-full mb-4">
              <Users className="h-10 w-10 text-secondary-foreground" />
            </div>
            <h3 className="font-headline text-2xl font-semibold mb-2">3. Publish & Share</h3>
            <p className="text-muted-foreground">
              Review and refine the generated post in our intuitive editor. Once you're happy, publish it and share your passion with our growing community of anime lovers.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
