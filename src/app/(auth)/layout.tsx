import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { cn } from "@/lib/utils";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body className={cn('min-h-screen bg-background font-body antialiased')}>
      <div className="flex  min-h-screen flex-col">
        <SiteHeader />
        <main className="flex justify-center items-center p-20 w-full">{children}</main>
        <SiteFooter />
      </div>
    </body>
  );
}
