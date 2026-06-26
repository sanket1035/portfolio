import React, { useEffect, useState } from 'react';
import { GitPullRequest, Award, Globe, ExternalLink, BookOpen, Users, Calendar, Eye, Star, GitFork } from 'lucide-react';
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

export const OpenSource: React.FC = () => {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

  const username = portfolioData.socials.github.split('/').pop() || 'sanket1035';

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
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
    <section id="opensource" className="py-20 px-6 border-t border-brand-border/40 bg-brand-bg relative overflow-hidden">
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-brand-accent-glow/5 blur-[150px] pointer-events-none rounded-full"></div>
      
      <div className="max-w-6xl w-full mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-[10px] tracking-widest text-brand-accent uppercase font-bold flex items-center justify-center gap-1.5">
            <GitPullRequest size={12} />
            Development & Community
          </p>
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-brand-primary tracking-tight mt-3 uppercase">
            Open Source & GitHub
          </h2>
          <div className="h-1 w-16 bg-brand-accent mx-auto mt-4 rounded-full shadow-lg shadow-brand-accent/50"></div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Stats, Heatmap, and Programs (7 columns) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-brand-card border border-brand-border shadow-sm hover:border-brand-accent/25 transition-all">
                <p className="text-[10px] text-brand-text-muted font-mono uppercase tracking-wider">Repos</p>
                <h3 className="font-heading font-bold text-base text-brand-primary mt-1 flex items-center gap-1.5">
                  <BookOpen size={14} className="text-brand-accent" />
                  {loading ? '...' : stats?.public_repos ?? '14'}
                </h3>
              </div>

              <div className="p-4 rounded-xl bg-brand-card border border-brand-border shadow-sm hover:border-brand-accent/25 transition-all">
                <p className="text-[10px] text-brand-text-muted font-mono uppercase tracking-wider">Followers</p>
                <h3 className="font-heading font-bold text-base text-brand-primary mt-1 flex items-center gap-1.5">
                  <Users size={14} className="text-brand-accent" />
                  {loading ? '...' : stats?.followers ?? '16'}
                </h3>
              </div>

              <div className="p-4 rounded-xl bg-brand-card border border-brand-border shadow-sm hover:border-brand-accent/25 transition-all">
                <p className="text-[10px] text-brand-text-muted font-mono uppercase tracking-wider">PRs Merged</p>
                <h3 className="font-heading font-bold text-base text-brand-primary mt-1 flex items-center gap-1.5">
                  <GitPullRequest size={14} className="text-brand-accent" />
                  {portfolioData.openSource.mergedPRsCount}
                </h3>
              </div>

              <div className="p-4 rounded-xl bg-brand-card border border-brand-border shadow-sm hover:border-brand-accent/25 transition-all">
                <p className="text-[10px] text-brand-text-muted font-mono uppercase tracking-wider">Profile Status</p>
                <h3 className="font-heading font-bold text-xs text-brand-primary mt-1 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Active
                </h3>
              </div>
            </div>

            {/* Contributions Heatmap */}
            <div className="p-5 rounded-xl bg-brand-card border border-brand-border shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-heading font-semibold text-xs md:text-sm text-brand-primary uppercase tracking-wide flex items-center gap-1.5">
                  <Calendar size={14} className="text-brand-accent" />
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

            {/* Programs Card */}
            <div className="p-5 rounded-xl bg-brand-card border border-brand-border shadow-md space-y-4">
              <h3 className="font-heading font-bold text-xs md:text-sm text-brand-primary flex items-center gap-2 uppercase tracking-wide">
                <Award className="text-brand-accent" size={16} />
                Open Source Programs & Fellowships
              </h3>
              <div className="space-y-3.5">
                {portfolioData.openSource.programs.map((program, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-brand-bg/50 border border-brand-border/60 flex items-start gap-4 hover:border-brand-accent/30 hover:bg-brand-card/30 transition-all duration-300"
                  >
                    {program.image ? (
                      <img
                        src={program.image}
                        alt={program.programName}
                        className="w-12 h-12 rounded-lg object-cover border border-brand-border/60 shrink-0 mt-0.5"
                      />
                    ) : (
                      <div className="p-2.5 rounded-lg bg-brand-border/50 text-brand-accent shrink-0 mt-0.5">
                        <Globe size={18} />
                      </div>
                    )}
                    <div className="space-y-1">
                      <h4 className="font-heading font-bold text-xs md:text-sm text-brand-primary flex items-center gap-2">
                        {program.programName}
                        <span className="text-[9px] font-mono font-medium bg-brand-border px-2 py-0.5 rounded text-brand-text-muted">
                          {program.year}
                        </span>
                      </h4>
                      <p className="text-[10px] font-mono font-semibold text-brand-accent uppercase tracking-wider">{program.role}</p>
                      <p className="text-xs text-brand-text-muted leading-relaxed">
                        {program.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Top Repositories & Logs Timeline (5 columns) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Repos Header & Cards */}
            <div className="space-y-4">
              <h4 className="font-heading font-bold text-xs md:text-sm text-brand-primary uppercase tracking-wider flex items-center gap-1.5">
                <Eye size={14} className="text-brand-accent" />
                Active Repositories
              </h4>

              <div className="grid gap-3.5">
                {repos.slice(0, 4).map((repo) => (
                  <a
                    key={repo.name}
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 rounded-xl bg-brand-card border border-brand-border hover:border-brand-accent/40 shadow-sm transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <h5 className="font-heading font-semibold text-xs md:text-sm text-brand-primary group-hover:text-brand-accent transition-colors flex items-center gap-1.5">
                        <span className="text-brand-text-muted/70 font-mono text-xs font-medium">&gt;_</span>
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

            {/* Commit Log */}
            <div className="p-5 rounded-xl bg-brand-card border border-brand-border shadow-md">
              <h4 className="font-heading font-semibold text-xs md:text-sm text-brand-primary uppercase tracking-wide mb-4 flex items-center gap-1.5">
                <GitPullRequest size={14} className="text-brand-accent" />
                Recent Timeline Logs
              </h4>
              <div className="space-y-4 relative border-l border-brand-border/80 pl-4 ml-2">
                {portfolioData.openSource.contributionsTimeline.map((item, idx) => {
                  const [datePart, descPart] = item.split(': ');
                  return (
                    <div key={idx} className="relative text-xs">
                      <span className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full border border-brand-accent bg-brand-bg"></span>
                      <span className="font-mono text-brand-text-muted mr-2 block sm:inline">{datePart}</span>
                      <span className="text-brand-primary font-medium">{descPart}</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

        {/* Action button */}
        <div className="pt-8 flex justify-center">
          <a
            href={portfolioData.socials.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl border border-brand-border bg-brand-card/40 hover:bg-brand-card hover:border-brand-accent/50 text-xs font-semibold text-brand-text transition-all cursor-pointer font-mono tracking-widest uppercase"
          >
            Explore Complete Profile
            <ExternalLink size={12} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default OpenSource;
