import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ProfilePage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold font-headline">Your Profile</h1>
                <p className="text-muted-foreground">Manage your account settings and profile information.</p>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">Profile Information</CardTitle>
                    <CardDescription>Update your public profile details here.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <Label>Profile Picture</Label>
                        <div className="flex items-center gap-4">
                            <Avatar className="h-20 w-20">
                                <AvatarImage src="https://placehold.co/100x100.png" alt="User" data-ai-hint="anime avatar" />
                                <AvatarFallback>U</AvatarFallback>
                            </Avatar>
                            <Button variant="outline">Change Picture</Button>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="name">Username</Label>
                        <Input id="name" defaultValue="GojoSensei" />
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue="gojo@jjk.com" disabled />
                         <p className="text-xs text-muted-foreground">Email address cannot be changed.</p>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="bio">Bio</Label>
                        <Textarea id="bio" placeholder="Tell us a little about yourself" defaultValue="Throughout heaven and earth, I alone am the honored one." />
                    </div>
                    <div className="flex justify-end">
                        <Button>Save Changes</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
