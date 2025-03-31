
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, 
  GraduationCap, 
  FileText, 
  BookOpen, 
  Settings,
  LayoutDashboard,
  Mail
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold">Admin Dashboard</h1>
          <Button onClick={() => navigate("/")} variant="outline" className="mt-4 md:mt-0">
            View Website
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <LayoutDashboard size={16} />
              <span className="hidden md:inline">Overview</span>
            </TabsTrigger>
            <TabsTrigger value="qualifications" className="flex items-center gap-2">
              <GraduationCap size={16} />
              <span className="hidden md:inline">Qualifications</span>
            </TabsTrigger>
            <TabsTrigger value="work" className="flex items-center gap-2">
              <Briefcase size={16} />
              <span className="hidden md:inline">Work</span>
            </TabsTrigger>
            <TabsTrigger value="case-studies" className="flex items-center gap-2">
              <FileText size={16} />
              <span className="hidden md:inline">Case Studies</span>
            </TabsTrigger>
            <TabsTrigger value="blog-posts" className="flex items-center gap-2">
              <BookOpen size={16} />
              <span className="hidden md:inline">Blog Posts</span>
            </TabsTrigger>
            <TabsTrigger value="messages" className="flex items-center gap-2">
              <Mail size={16} />
              <span className="hidden md:inline">Messages</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings size={16} />
              <span className="hidden md:inline">Settings</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="text-primary" size={20} />
                    Qualifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">--</p>
                  <p className="text-sm text-foreground/70">Total qualifications</p>
                  <Button 
                    variant="outline" 
                    className="mt-4 w-full"
                    onClick={() => setActiveTab("qualifications")}
                  >
                    Manage Qualifications
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="text-primary" size={20} />
                    Work Experience
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">--</p>
                  <p className="text-sm text-foreground/70">Total work entries</p>
                  <Button 
                    variant="outline" 
                    className="mt-4 w-full"
                    onClick={() => setActiveTab("work")}
                  >
                    Manage Work Experience
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="text-primary" size={20} />
                    Case Studies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">--</p>
                  <p className="text-sm text-foreground/70">Total case studies</p>
                  <Button 
                    variant="outline" 
                    className="mt-4 w-full"
                    onClick={() => setActiveTab("case-studies")}
                  >
                    Manage Case Studies
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="text-primary" size={20} />
                    Blog Posts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">--</p>
                  <p className="text-sm text-foreground/70">Total blog posts</p>
                  <Button 
                    variant="outline" 
                    className="mt-4 w-full"
                    onClick={() => setActiveTab("blog-posts")}
                  >
                    Manage Blog Posts
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="text-primary" size={20} />
                    Contact Messages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">--</p>
                  <p className="text-sm text-foreground/70">Total messages</p>
                  <Button 
                    variant="outline" 
                    className="mt-4 w-full"
                    onClick={() => setActiveTab("messages")}
                  >
                    View Messages
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="text-primary" size={20} />
                    Website Settings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/70">Configure your website settings</p>
                  <Button 
                    variant="outline" 
                    className="mt-4 w-full"
                    onClick={() => setActiveTab("settings")}
                  >
                    Manage Settings
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="qualifications">
            <Card>
              <CardHeader>
                <CardTitle>Qualifications</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 mb-4">
                  Manage your educational qualifications and certifications.
                </p>
                <p className="text-center py-10 text-foreground/50">
                  Content management interface to be implemented
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="work">
            <Card>
              <CardHeader>
                <CardTitle>Work Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 mb-4">
                  Manage your professional work experience.
                </p>
                <p className="text-center py-10 text-foreground/50">
                  Content management interface to be implemented
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="case-studies">
            <Card>
              <CardHeader>
                <CardTitle>Case Studies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 mb-4">
                  Manage your case studies and portfolio projects.
                </p>
                <p className="text-center py-10 text-foreground/50">
                  Content management interface to be implemented
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="blog-posts">
            <Card>
              <CardHeader>
                <CardTitle>Blog Posts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 mb-4">
                  Manage your blog posts and articles.
                </p>
                <p className="text-center py-10 text-foreground/50">
                  Content management interface to be implemented
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="messages">
            <Card>
              <CardHeader>
                <CardTitle>Contact Messages</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 mb-4">
                  View and manage messages from your contact form.
                </p>
                <p className="text-center py-10 text-foreground/50">
                  Content management interface to be implemented
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Website Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 mb-4">
                  Configure global website settings and section visibility.
                </p>
                <p className="text-center py-10 text-foreground/50">
                  Content management interface to be implemented
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
