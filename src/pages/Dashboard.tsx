import React, { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { Terminal, GitBranch, Code2, Users, Activity, Zap, LogOut, Settings, Plus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Project {
  id: string;
  name: string;
  repo_url: string;
  host: string;
  created_at: string;
}

interface Profile {
  full_name: string | null;
  github_username: string | null;
  company: string | null;
}

const Dashboard = () => {
  const { user, signOut, loading } = useAuth();
  const [projects, setProjects] = useState<Project[]>([]);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loadingData, setLoadingData] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    if (user) {
      loadUserData();
    }
  }, [user]);

  const loadUserData = async () => {
    try {
      // Load user profile
      const { data: profileData } = await supabase
        .from('profiles')
        .select('full_name, github_username, company')
        .eq('user_id', user?.id)
        .single();

      if (profileData) {
        setProfile(profileData);
      }

      // Load user projects
      const { data: projectsData } = await supabase
        .from('projects')
        .select('*')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false });

      if (projectsData) {
        setProjects(projectsData);
      }
    } catch (error: any) {
      toast({
        title: "Error loading data",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoadingData(false);
    }
  };

  if (loading || loadingData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <Terminal className="h-8 w-8 animate-pulse text-terminal-green mx-auto" />
          <p className="text-foreground/60">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-terminal-green/20 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Terminal className="h-6 w-6 text-terminal-green" />
                <span className="text-xl font-bold font-mono">
                  <span className="text-terminal-green">Gitswhy</span>
                  <span className="text-terminal-blue">OS</span>
                </span>
              </div>
              <Badge variant="outline" className="text-terminal-blue border-terminal-blue/20">
                Dashboard
              </Badge>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Button variant="outline" size="sm" onClick={signOut}>
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Welcome Section */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">
            Welcome back{profile?.full_name ? `, ${profile.full_name}` : ''}!
          </h1>
          <p className="text-foreground/60">
            Manage your repositories and analyze your code with GitswuyOS.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-terminal-green/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
              <GitBranch className="h-4 w-4 text-terminal-green" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{projects.length}</div>
              <p className="text-xs text-foreground/60">
                +0 from last month
              </p>
            </CardContent>
          </Card>

          <Card className="border-terminal-blue/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Code Analysis</CardTitle>
              <Activity className="h-4 w-4 text-terminal-blue" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs text-foreground/60">
                Commits analyzed
              </p>
            </CardContent>
          </Card>

          <Card className="border-accent/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Since</CardTitle>
              <Zap className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {user.created_at ? new Date(user.created_at).toLocaleDateString() : 'Today'}
              </div>
              <p className="text-xs text-foreground/60">
                Member since
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Projects Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Your Projects</h2>
            <Button variant="terminal">
              <Plus className="h-4 w-4 mr-2" />
              Add Project
            </Button>
          </div>

          {projects.length === 0 ? (
            <Card className="border-dashed border-terminal-green/20">
              <CardContent className="flex flex-col items-center justify-center py-12 space-y-4">
                <Code2 className="h-12 w-12 text-foreground/40" />
                <div className="text-center space-y-2">
                  <h3 className="text-lg font-semibold">No projects yet</h3>
                  <p className="text-foreground/60 max-w-md">
                    Get started by connecting your first repository to analyze your code and understand your development patterns.
                  </p>
                </div>
                <Button variant="terminal">
                  <Plus className="h-4 w-4 mr-2" />
                  Connect Repository
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <Card key={project.id} className="border-terminal-green/20 hover:border-terminal-green/40 transition-colors cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg truncate">{project.name}</CardTitle>
                      <Badge variant="outline" className="text-xs">
                        {project.host}
                      </Badge>
                    </div>
                    <CardDescription className="truncate">
                      {project.repo_url}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-foreground/60">
                      <span>Created: {new Date(project.created_at).toLocaleDateString()}</span>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;