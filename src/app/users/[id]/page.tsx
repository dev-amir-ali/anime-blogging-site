import { MOCK_POSTS, MOCK_USERS } from '@/lib/mock-data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { PostCard } from '@/components/post-card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function UserProfilePage({ params }: { params: { id: string } }) {
  const user = MOCK_USERS.find((u) => u.id === params.id);
  if (!user) {
    notFound();
  }

  const userPosts = MOCK_POSTS.filter((p) => p.author.id === user.id);

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="flex flex-col md:flex-row items-center gap-8 py-12 border-b-2 border-primary/20 mb-12">
        <Avatar className="h-32 w-32 border-4 border-primary">
          <AvatarImage src={user.avatarUrl} alt={user.name} />
          <AvatarFallback className="text-4xl">{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="text-center md:text-left">
          <h1 className="font-headline text-4xl font-bold">{user.name}</h1>
          <p className="mt-2 text-lg text-muted-foreground max-w-xl">{user.bio}</p>
        </div>
      </header>
      
      <main>
        <h2 className="font-headline text-3xl font-bold mb-8">Posts by {user.name}</h2>
        {userPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {userPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-card rounded-lg">
            <p className="text-xl text-muted-foreground">{user.name} hasn't posted anything yet.</p>
          </div>
        )}
      </main>
    </div>
  );
}
