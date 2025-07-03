import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarTrigger,
  SidebarInset,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { DashboardNav } from '@/components/dashboard/dashboard-nav';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { LogOut, Settings, FlameKindling } from 'lucide-react';
import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="border-b border-sidebar-border">
          <div className="flex items-center gap-3">
             <Link href="/" className="flex items-center space-x-2">
                <FlameKindling className="h-6 w-6 text-primary" />
                <span className="font-bold font-headline text-sidebar-foreground">
                    Anime Blog AI
                </span>
             </Link>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <div className="flex flex-col gap-2 p-2">
             <div className="flex items-center gap-3 rounded-md bg-sidebar-accent p-2">
                <Avatar className="h-10 w-10">
                    <AvatarImage src="https://placehold.co/100x100.png" alt="User" data-ai-hint="anime avatar" />
                    <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                    <span className="font-semibold text-sidebar-accent-foreground">GojoSensei</span>
                    <span className="text-xs text-sidebar-accent-foreground/70">Pro Member</span>
                </div>
             </div>
          </div>
          <DashboardNav />
        </SidebarContent>
        <SidebarFooter className="border-t border-sidebar-border">
          <div className="flex items-center justify-between">
              <Button variant="ghost" size="icon" className="text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground" asChild>
                <Link href="/dashboard/profile" title="Settings"><Settings /></Link>
              </Button>
              <Button variant="ghost" size="icon" className="text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground" asChild>
                <Link href="/" title="Log Out"><LogOut /></Link>
              </Button>
          </div>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-16 items-center gap-4 border-b bg-background/95 px-6 sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-40">
           <SidebarTrigger className="md:hidden" />
           <div className="flex-1">
             {/* The title can be dynamic based on the page */}
           </div>
        </header>
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
