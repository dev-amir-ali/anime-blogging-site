import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MOCK_COMMENTS } from "@/lib/mock-data";
import { MoreHorizontal } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ManageCommentsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">My Comments</h1>
        <p className="text-muted-foreground">Approve, reply to, or delete comments on your posts.</p>
      </div>
      <Card>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Comment</TableHead>
                <TableHead className="hidden md:table-cell">In Response To</TableHead>
                <TableHead className="hidden md:table-cell">Submitted</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {MOCK_COMMENTS.map((comment) => (
                <TableRow key={comment.id}>
                  <TableCell>
                    <div className="flex items-start gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={comment.author.avatarUrl} alt={comment.author.name} data-ai-hint="anime avatar" />
                        <AvatarFallback>{comment.author.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{comment.author.name}</p>
                        <p className="text-muted-foreground line-clamp-2">{comment.content}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell font-medium">
                    <Link href={`/posts/${comment.post.id}`} className="hover:underline">
                      {comment.post.title}
                    </Link>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button aria-haspopup="true" size="icon" variant="ghost">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Approve</DropdownMenuItem>
                        <DropdownMenuItem>Reply</DropdownMenuItem>
                        <DropdownMenuItem>Mark as Spam</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive focus:text-destructive focus:bg-destructive/10">Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
