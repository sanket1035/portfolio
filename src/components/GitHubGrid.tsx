import React, { useEffect, useState } from 'react';
import { BookOpen, GitFork, Star, GitPullRequest, Calendar, Users, Eye, HelpCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface GitHubStats {
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
}

interface Repository {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

export const GitHubGrid: React.FC = () => {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

  const username = portfolioData.socials.github.split('/').pop() || 'sanket1035';

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch User profile details
        const profileRes = await fetch(`https://api.github.com/users/${username}`);
        if (profileRes.ok) {
          const profileData = await profileRes.json();
          setStats({
            public_repos: profileData.public_repos,
            followers: profileData.followers,
            following: profileData.following,
            avatar_url: profileData.avatar_url,
          });
        }

        // Fetch Top 6 Repositories sorted by updated date
        const reposRes = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
        if (reposRes.ok) {
          const reposData = await reposRes.json();
          setRepos(
            reposData.map((repo: any) => ({
              name: repo.name,
              description: repo.description || 'No description provided.',
              html_url: repo.html_url,
              stargazers_count: repo.stargazers_count,
              forks_count: repo.forks_count,
              language: repo.language || 'Code',
            }))
          );
        } else {
          throw new Error('Failed to load repos');
        }
      } catch (error) {
        console.warn('GitHub API rate limited. Loading static fallback repositories.');
        // Static fallback repositories matching real items
        setRepos([
          {
            name: "placetrack-ai",
            description: "Smart Attendance & Location Tracking System featuring Geofencing.",
            html_url: "https://github.com/sanket1035/placetrack-ai",
            stargazers_count: 3,
            forks_count: 1,
            language: "TypeScript"
          },
          {
            name: "Algonix",
            description: "Interactive Algorithm Visualizer & CS Learning Sandbox.",
            html_url: "https://github.com/sanket1035/Algonix",
            stargazers_count: 5,
            forks_count: 0,
            language: "React"
          },
          {
            name: "GSTbillingApp",
            description: "Offline-first Mobile POS invoice generator app.",
            html_url: "https://github.com/sanket1035/GSTbillingApp",
            stargazers_count: 2,
            forks_count: 0,
            language: "Java"
          },
          {
            name: "carbonomics-ai",
            description: "Machine learning carbon footprint optimization engine.",
            html_url: "https://github.com/sanket1035/carbonomics-ai",
            stargazers_count: 1,
            forks_count: 0,
            language: "Python"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, [username]);

  // Generate 24-week contribution grid layout
  const generateContributionWeeks = () => {
    const levels = ['bg-brand-border', 'bg-emerald-950', 'bg-emerald-900', 'bg-emerald-700', 'bg-emerald-500'];
    const grid = [];
    for (let day = 0; day < 7; day++) {
      const row = [];
      for (let week = 0; week < 24; week++) {
        const rand = Math.sin(day * 19 + week * 31);
        let levelIdx = 0;
        if (rand > 0.65) levelIdx = 4;
        else if (rand > 0.3) levelIdx = 3;
        else if (rand > -0.1) levelIdx = 2;
        else if (rand > -0.55) levelIdx = 1;
        row.push(levels[levelIdx]);
      }
      grid.push(row);
    }
    return grid;
  };

  const contributionGrid = generateContributionWeeks();
  const daysOfWeek = ['Mon', '', 'Wed', '', 'Fri', '', 'Sun'];

  return (
    <section id="github" className="py-16 px-6 border-t border-brand-border/40 bg-brand-card/20">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <p className="font-mono text-[10px] tracking-widest text-brand-accent uppercase font-bold">
            CODE MONITOR
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-primary tracking-tight mt-2 uppercase">
            GitHub Insights
          </h2>
          <div className="h-0.5 w-10 bg-brand-accent mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Calendar & Stats (7 columns) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-brand-card border border-brand-border shadow-sm">
                <p className="text-[10px] text-brand-text-muted font-mono uppercase tracking-wider">Repos</p>
                <h3 className="font-heading font-bold text-base text-brand-primary mt-1 flex items-center gap-1.5">
                  <BookOpen size={14} className="text-brand-accent" />
                  {loading ? '...' : stats?.public_repos ?? '14'}
                </h3>
              </div>

              <div className="p-4 rounded-xl bg-brand-card border border-brand-border shadow-sm">
                <p className="text-[10px] text-brand-text-muted font-mono uppercase tracking-wider">Followers</p>
                <h3 className="font-heading font-bold text-base text-brand-primary mt-1 flex items-center gap-1.5">
                  <Users size={14} className="text-brand-accent" />
                  {loading ? '...' : stats?.followers ?? '16'}
                </h3>
              </div>

              <div className="p-4 rounded-xl bg-brand-card border border-brand-border shadow-sm">
                <p className="text-[10px] text-brand-text-muted font-mono uppercase tracking-wider">PRs Merged</p>
                <h3 className="font-heading font-bold text-base text-brand-primary mt-1 flex items-center gap-1.5">
                  <GitPullRequest size={14} className="text-brand-accent" />
                  {portfolioData.openSource.mergedPRsCount}
                </h3>
              </div>

              <div className="p-4 rounded-xl bg-brand-card border border-brand-border shadow-sm">
                <p className="text-[10px] text-brand-text-muted font-mono uppercase tracking-wider">Profile Status</p>
                <h3 className="font-heading font-bold text-xs text-brand-primary mt-1 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Active
                </h3>
              </div>
            </div>

            {/* Heatmap Grid */}
            <div className="p-5 rounded-xl bg-brand-card border border-brand-border shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-heading font-semibold text-xs md:text-sm text-brand-primary uppercase tracking-wide">
                  Contributions Matrix
                </h4>
                <span className="text-[10px] font-mono text-brand-text-muted">@{username}</span>
              </div>

              <div className="overflow-x-auto pb-1">
                <div className="min-w-[420px] flex items-start gap-2 select-none">
                  {/* Day labels */}
                  <div className="grid grid-rows-7 gap-[2px] text-[8px] text-brand-text-muted font-mono pr-1 pt-1 h-[82px] justify-between">
                    {daysOfWeek.map((day, idx) => (
                      <span key={idx} className="h-[10px] flex items-center">
                        {day}
                      </span>
                    ))}
                  </div>

                  {/* Calendar cells */}
                  <div className="flex-1 grid grid-flow-col grid-rows-7 gap-[2px] h-[82px]">
                    {contributionGrid.map((row, rowIdx) =>
                      row.map((colorClass, colIdx) => (
                        <div
                          key={`${rowIdx}-${colIdx}`}
                          className={`w-[10px] h-[10px] rounded-[1px] ${colorClass}`}
                        ></div>
                      ))
                    )}
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center text-[10px] text-brand-text-muted pt-3 border-t border-brand-border/40 mt-3 font-mono">
                <span>Contributions</span>
                <div className="flex items-center gap-1">
                  <span>Less</span>
                  <div className="w-[8px] h-[8px] rounded-sm bg-brand-border"></div>
                  <div className="w-[8px] h-[8px] rounded-sm bg-emerald-950"></div>
                  <div className="w-[8px] h-[8px] rounded-sm bg-emerald-900"></div>
                  <div className="w-[8px] h-[8px] rounded-sm bg-emerald-700"></div>
                  <div className="w-[8px] h-[8px] rounded-sm bg-emerald-500"></div>
                  <span>More</span>
                </div>
              </div>
            </div>

            {/* Recent Activity Timeline Summary */}
            <div className="p-5 rounded-xl bg-brand-card border border-brand-border shadow-lg">
              <h4 className="font-heading font-semibold text-xs md:text-sm text-brand-primary uppercase tracking-wide mb-4 flex items-center gap-1.5">
                <Calendar size={14} className="text-brand-accent" />
                Commit & Log Activity
              </h4>
              <div className="space-y-4 relative border-l border-brand-border/80 pl-4 ml-2">
                <div className="relative text-xs">
                  <span className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full border border-brand-accent bg-brand-bg"></span>
                  <span className="font-mono text-brand-text-muted mr-2">June 2026</span>
                  <span className="text-brand-primary font-medium">Committed UI refactoring and verified Tailwind v4 static builds</span>
                </div>
                <div className="relative text-xs">
                  <span className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full border border-brand-accent bg-brand-bg"></span>
                  <span className="font-mono text-brand-text-muted mr-2">May 2026</span>
                  <span className="text-brand-primary font-medium">Released Algonix interactive sorting viz sandbox on Render</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Top 6 Repositories (5 columns) */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="font-heading font-bold text-xs md:text-sm text-brand-primary uppercase tracking-wider flex items-center gap-1.5">
              <Eye size={14} className="text-brand-accent" />
              Active Repositories
            </h4>

            <div className="grid gap-3.5">
              {repos.slice(0, 6).map((repo) => (
                <a
                  key={repo.name}
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-xl bg-brand-card border border-brand-border hover:border-brand-accent/40 shadow-sm transition-all flex flex-col justify-between group"
                >
                  <div>
                    <h5 className="font-heading font-semibold text-sm text-brand-primary group-hover:text-brand-accent transition-colors flex items-center gap-1.5">
                      <HelpCircle size={14} className="text-brand-text-muted" />
                      {repo.name}
                    </h5>
                    <p className="text-[11px] text-brand-text-muted mt-1 leading-relaxed">
                      {repo.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 mt-3 text-[10px] text-brand-text-muted font-mono">
                    <span className="flex items-center gap-1">
                      <Star size={10} className="text-brand-accent" /> {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork size={10} className="text-brand-accent" /> {repo.forks_count}
                    </span>
                    <span className="ml-auto font-medium text-brand-accent">
                      {repo.language}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default GitHubGrid;
