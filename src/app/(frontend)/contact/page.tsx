import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, Twitter, Instagram } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="font-headline text-5xl md:text-6xl font-bold text-primary">
          Get In Touch
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-foreground/80">
          Have a question, a suggestion, or just want to say hi? We'd love to hear from you!
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Send us a message</CardTitle>
            <CardDescription>Fill out the form and we'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" placeholder="Your Name" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your.email@example.com" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message here..." required className="min-h-[150px]" />
              </div>
              <Button type="submit" className="w-full">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
        
        <div className="space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-foreground/90">
                    <div className="flex items-center gap-4">
                        <Mail className="h-6 w-6 text-primary" />
                        <a href="mailto:hello@animeblog.ai" className="hover:underline">hello@animeblog.ai</a>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-xl">Follow Us</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center gap-6">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Twitter className="h-7 w-7" />
                        <span className="sr-only">Twitter</span>
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Instagram className="h-7 w-7" />
                        <span className="sr-only">Instagram</span>
                    </a>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
