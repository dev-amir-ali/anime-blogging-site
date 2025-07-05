import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PostCard } from "@/components/post-card";
import { MOCK_POSTS, MOCK_COMMENTS } from "@/lib/mock-data";
import { Activity, ArrowRight, FileText, Users, MessageSquare, PlusCircle, User, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatDistanceToNow } from "date-fns";

export default function DashboardPage() {
    const userPosts = MOCK_POSTS.slice(0, 2);

    const recentActivities = [
        {
            user: { name: 'Itachi_Fan', avatar: 'https://placehold.co/100x100.png' },
            action: 'commented on',
            post: 'Top 5 Fights in Naruto...',
            time: '5h ago'
        },
        {
            user: { name: 'SurveyCorpsStan', avatar: 'https://placehold.co/100x100.png' },
            action: 'commented on',
            post: 'The Unsettling Philosophy...',
            time: '1d ago'
        },
        {
            user: { name: 'AsunaBestGirl', avatar: 'https://placehold.co/100x100.png' },
            action: 'started following you',
            post: null,
            time: '2d ago'
        },
    ]

    return (
        <div className="space-y-8">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold font-headline">Welcome back, GojoSensei!</h1>
                <p className="text-muted-foreground">Here's a snapshot of your blog's performance.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
                        <FileText className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">12</div>
                        <p className="text-xs text-muted-foreground">+2 this month</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Views</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+2350</div>
                        <p className="text-xs text-muted-foreground">+180.1% from last month</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Comments</CardTitle>
                        <MessageSquare className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+{MOCK_COMMENTS.length}</div>
                        <p className="text-xs text-muted-foreground">+5 this week</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Engagement</CardTitle>
                        <Activity className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+573</div>
                        <p className="text-xs text-muted-foreground">Likes & Comments</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                     <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl font-bold font-headline">Recent Posts</h2>
                        <Button variant="outline" asChild>
                            <Link href="/dashboard/posts">View All <ArrowRight className="ml-2 h-4 w-4" /></Link>
                        </Button>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                        {userPosts.map((post) => (
                            <PostCard key={post.id} post={post} />
                        ))}
                    </div>
                </div>

                <div className="lg:col-span-1 space-y-8">
                    <Card>
                        <CardHeader>
                            <CardTitle className="font-headline text-lg">Quick Actions</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-2">
                            <Button asChild><Link href="/dashboard/posts/create"><PlusCircle className="mr-2"/>New Post</Link></Button>
                            <Button variant="outline" asChild><Link href="/dashboard/profile"><User className="mr-2"/>Edit Profile</Link></Button>
                            <Button variant="ghost" asChild><Link href="/"><ExternalLink className="mr-2"/>View Blog</Link></Button>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                            <CardTitle className="font-headline text-lg">Recent Activity</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                           {recentActivities.map((activity, index) => (
                               <div key={index} className="flex items-start gap-3">
                                   <Avatar className="h-8 w-8">
                                       <AvatarImage src={activity.user.avatar} alt={activity.user.name} data-ai-hint="anime avatar"/>
                                       <AvatarFallback>{activity.user.name.charAt(0)}</AvatarFallback>
                                   </Avatar>
                                   <div className="text-sm">
                                       <p className="text-foreground">
                                           <span className="font-semibold">{activity.user.name}</span> {activity.action} {activity.post && <span className="font-semibold text-primary">{activity.post}</span>}
                                       </p>
                                       <p className="text-xs text-muted-foreground">{activity.time}</p>
                                   </div>
                               </div>
                           ))}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
