import Link from 'next/link';
import { FlameKindling, Twitter, Instagram, Github } from 'lucide-react';

export function SiteFooter() {
  return (
    <footer className="bg-sidebar text-sidebar-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Branding */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <FlameKindling className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold font-headline">Anime Blog AI</span>
            </Link>
            <p className="text-sm text-sidebar-foreground/70">
              The ultimate blogging platform for anime lovers, powered by AI. Create, share, and discover.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-sidebar-foreground/70 hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-sm text-sidebar-foreground/70 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-sidebar-foreground/70 hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/dashboard" className="text-sm text-sidebar-foreground/70 hover:text-primary transition-colors">Dashboard</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Top Categories</h3>
            <ul className="space-y-2">
              <li><Link href="/category/shonen" className="text-sm text-sidebar-foreground/70 hover:text-primary transition-colors">Shonen</Link></li>
              <li><Link href="/category/shojo" className="text-sm text-sidebar-foreground/70 hover:text-primary transition-colors">Shojo</Link></li>
              <li><Link href="/category/isekai" className="text-sm text-sidebar-foreground/70 hover:text-primary transition-colors">Isekai</Link></li>
              <li><Link href="/category/slice-of-life" className="text-sm text-sidebar-foreground/70 hover:text-primary transition-colors">Slice of Life</Link></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex items-center gap-4">
              <a href="#" className="text-sidebar-foreground/70 hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-sidebar-foreground/70 hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-sidebar-foreground/70 hover:text-primary transition-colors">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-sidebar-border/50 text-center text-sm text-sidebar-foreground/60">
          <p>&copy; {new Date().getFullYear()} Anime Blog AI. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
