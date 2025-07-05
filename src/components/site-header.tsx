import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FlameKindling } from 'lucide-react';

export function SiteHeader() {
  const isLoggedIn = false; // Mock auth state

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <FlameKindling className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline sm:inline-block">
            Anime Blog AI
          </span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2 md:space-x-4">
            <Link href="/about" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary hidden md:inline-block">
               About
           </Link>
            <Link href="/contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary hidden md:inline-block">
               Contact
           </Link>
            {isLoggedIn ? (
              <>
                <Button asChild variant="ghost">
                  <Link href="/dashboard">Dashboard</Link>
                </Button>
                {/* User Profile Dropdown would go here */}
              </>
            ) : (
              <>
                <Button asChild variant="ghost">
                  <Link href="/login">Log In</Link>
                </Button>
                <Button asChild>
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
