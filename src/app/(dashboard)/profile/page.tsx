import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Settings</h1>
        <p className="text-muted-foreground">Manage your account settings, profile, and site appearance.</p>
      </div>
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
        </TabsList>
        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Public Profile</CardTitle>
              <CardDescription>This information will be displayed publicly on your profile page.</CardDescription>
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
                <Label htmlFor="bio">Bio</Label>
                <Textarea id="bio" placeholder="Tell us a little about yourself" defaultValue="Throughout heaven and earth, I alone am the honored one." />
              </div>
              <div className="flex justify-end">
                <Button>Save Profile</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Account Settings</CardTitle>
              <CardDescription>Manage your account security and data.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="gojo@jjk.com" disabled />
                <p className="text-xs text-muted-foreground">Email address cannot be changed.</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" />
              </div>
              <div className="flex justify-end">
                <Button>Update Password</Button>
              </div>
              <div className="border-t pt-6">
                <CardTitle className="font-headline text-lg text-destructive">Danger Zone</CardTitle>
                <CardDescription className="text-destructive/80">
                  Deleting your account is a permanent action and cannot be undone.
                </CardDescription>
                <div className="mt-4 flex justify-end">
                  <Button variant="destructive">Delete My Account</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="appearance">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Appearance</CardTitle>
              <CardDescription>Customize the look and feel of the application.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <Label className="text-base">Theme</Label>
                  <p className="text-sm text-muted-foreground">
                    Select between light and dark mode.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span>Light</span>
                  <Switch id="theme-switch" />
                  <span>Dark</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
