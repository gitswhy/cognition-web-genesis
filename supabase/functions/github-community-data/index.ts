import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface GitHubIssue {
  id: number;
  title: string;
  state: string;
  labels: { name: string; color: string }[];
  user: { login: string; avatar_url: string };
  created_at: string;
  comments: number;
  html_url: string;
  body?: string;
}

interface GitHubContributor {
  login: string;
  contributions: number;
  avatar_url: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const GITHUB_TOKEN = Deno.env.get('GITHUB_TOKEN');
    if (!GITHUB_TOKEN) {
      throw new Error('GitHub token not configured');
    }

    const headers = {
      'Authorization': `Bearer ${GITHUB_TOKEN}`,
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'Gitswhy-Community-Bot',
    };

    // Fetch GitHub issues from gitswhy/reflexcore repository
    const issuesResponse = await fetch(
      'https://api.github.com/repos/gitswhy/reflexcore/issues?state=open&per_page=10&sort=created&direction=desc',
      { headers }
    );

    if (!issuesResponse.ok) {
      console.error('GitHub Issues API error:', issuesResponse.status, await issuesResponse.text());
      throw new Error(`GitHub API error: ${issuesResponse.status}`);
    }

    const issues: GitHubIssue[] = await issuesResponse.json();

    // Fetch contributors
    const contributorsResponse = await fetch(
      'https://api.github.com/repos/gitswhy/reflexcore/contributors?per_page=10',
      { headers }
    );

    let contributors: GitHubContributor[] = [];
    if (contributorsResponse.ok) {
      contributors = await contributorsResponse.json();
    }

    // Fetch repository stats
    const repoResponse = await fetch(
      'https://api.github.com/repos/gitswhy/reflexcore',
      { headers }
    );

    let repoStats = { open_issues_count: 0 };
    if (repoResponse.ok) {
      repoStats = await repoResponse.json();
    }

    // Transform data to match our interface
    const transformedIssues = issues.map(issue => ({
      id: issue.id,
      title: issue.title,
      state: issue.state,
      labels: issue.labels.map(label => ({
        name: label.name,
        color: `#${label.color}`
      })),
      author: {
        login: issue.user.login,
        avatar_url: issue.user.avatar_url
      },
      createdAt: issue.created_at,
      comments: issue.comments,
      url: issue.html_url,
      body: issue.body || ''
    }));

    const stats = {
      contributors: contributors.length,
      openIssues: repoStats.open_issues_count,
      discordMembers: 0 // Will be updated when Discord token is added
    };

    const responseData = {
      issues: transformedIssues,
      stats,
      contributors: contributors.slice(0, 8) // Limit to top 8 contributors
    };

    return new Response(JSON.stringify(responseData), {
      headers: { 
        ...corsHeaders,
        'Content-Type': 'application/json' 
      },
    });

  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Failed to fetch GitHub data',
        details: error.message 
      }),
      {
        status: 500,
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json' 
        },
      }
    );
  }
});