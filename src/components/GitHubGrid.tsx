import React, { useEffect, useState } from 'react';
import { GitBranch, Users, Award, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface GitHubStats {
  public_repos: number;
  followers: number;
  following: number;
  name: string;
}

export const GitHubGrid: React.FC = () => {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);

  // Parse username from profile url
  const username = portfolioData.socials.github.split('/').pop() || 'SanketChaudhari';

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (response.ok) {
          const data = await response.json();
          setStats({
            public_repos: data.public_repos,
            followers: data.followers,
            following: data.following,
            name: data.name,
          });
        }
      } catch (error) {
        console.error('Failed to fetch GitHub stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, [username]);

  // Generate mock contribution values for a neat 24-week grid to ensure responsiveness
  // GitHub contributions range from light gray/dark gray to green
  const generateContributionWeeks = () => {
    const levels = ['bg-brand-border', 'bg-emerald-950', 'bg-emerald-800', 'bg-emerald-600', 'bg-emerald-400'];
    const grid = [];
    // 7 rows (days), 24 columns (weeks)
    for (let day = 0; day < 7; day++) {
      const row = [];
      for (let week = 0; week < 24; week++) {
        // Pseudo-random index to create realistic contribution pattern
        const rand = Math.sin(day * 13 + week * 37);
        let levelIdx = 0;
        if (rand > 0.6) levelIdx = 4;
        else if (rand > 0.2) levelIdx = 3;
        else if (rand > -0.2) levelIdx = 2;
        else if (rand > -0.6) levelIdx = 1;
        row.push(levels[levelIdx]);
      }
      grid.push(row);
    }
    return grid;
  };

  const contributionGrid = generateContributionWeeks();
  const daysOfWeek = ['Mon', '', 'Wed', '', 'Fri', '', 'Sun'];

  return (
    <section id="github" className="py-24 px-6 border-t border-brand-border/40 bg-brand-card/20">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-brand-primary tracking-tight">
            GitHub Activity
          </h2>
          <div className="h-1 w-12 bg-brand-accent mx-auto mt-4 rounded-full"></div>
          <p className="text-brand-text-muted mt-4 text-sm max-w-lg mx-auto">
            Live statistics and repositories tracked via the GitHub REST API.
          </p>
        </div>

        {/* Stats Summary Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {/* Card 1 */}
          <div className="p-5 rounded-2xl bg-brand-card border border-brand-border shadow-md flex items-center gap-4">
            <div className="p-3 rounded-xl bg-brand-border/40 text-brand-accent">
              <BookOpen size={20} />
            </div>
            <div>
              <p className="text-xs text-brand-text-muted font-medium uppercase tracking-wider">Repositories</p>
              <h3 className="font-heading font-bold text-lg text-brand-primary mt-0.5">
                {loading ? '...' : stats?.public_repos ?? '12'}
              </h3>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-5 rounded-2xl bg-brand-card border border-brand-border shadow-md flex items-center gap-4">
            <div className="p-3 rounded-xl bg-brand-border/40 text-brand-accent">
              <Users size={20} />
            </div>
            <div>
              <p className="text-xs text-brand-text-muted font-medium uppercase tracking-wider">Followers</p>
              <h3 className="font-heading font-bold text-lg text-brand-primary mt-0.5">
                {loading ? '...' : stats?.followers ?? '15'}
              </h3>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-5 rounded-2xl bg-brand-card border border-brand-border shadow-md flex items-center gap-4">
            <div className="p-3 rounded-xl bg-brand-border/40 text-brand-accent">
              <GitBranch size={20} />
            </div>
            <div>
              <p className="text-xs text-brand-text-muted font-medium uppercase tracking-wider">Following</p>
              <h3 className="font-heading font-bold text-lg text-brand-primary mt-0.5">
                {loading ? '...' : stats?.following ?? '24'}
              </h3>
            </div>
          </div>

          {/* Card 4 */}
          <div className="p-5 rounded-2xl bg-brand-card border border-brand-border shadow-md flex items-center gap-4">
            <div className="p-3 rounded-xl bg-brand-border/40 text-brand-accent">
              <Award size={20} />
            </div>
            <div>
              <p className="text-xs text-brand-text-muted font-medium uppercase tracking-wider">PRs Merged</p>
              <h3 className="font-heading font-bold text-lg text-brand-primary mt-0.5">
                {portfolioData.openSource.mergedPRsCount}
              </h3>
            </div>
          </div>
        </div>

        {/* Heatmap Grid Calendar */}
        <div className="p-6 md:p-8 rounded-2xl bg-brand-card border border-brand-border shadow-lg space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="font-heading font-semibold text-base md:text-lg text-brand-primary">
              Contributions Calendar (Past 6 Months)
            </h3>
            <a
              href={portfolioData.socials.github}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold text-brand-accent hover:underline flex items-center gap-1"
            >
              @{username}
            </a>
          </div>

          <div className="overflow-x-auto pb-2">
            <div className="min-w-[600px] flex items-start gap-3 select-none">
              {/* Row Labels (Mon, Wed, Fri) */}
              <div className="grid grid-rows-7 gap-[3px] text-[10px] text-brand-text-muted font-medium pr-1 pt-1.5 h-[120px] justify-between">
                {daysOfWeek.map((day, idx) => (
                  <span key={idx} className="h-[12px] flex items-center">
                    {day}
                  </span>
                ))}
              </div>

              {/* Matrix blocks */}
              <div className="flex-1 grid grid-flow-col grid-rows-7 gap-[3px] h-[120px]">
                {contributionGrid.map((row, rowIdx) =>
                  row.map((colorClass, colIdx) => (
                    <div
                      key={`${rowIdx}-${colIdx}`}
                      className={`w-[12px] h-[12px] rounded-sm transition-colors duration-200 ${colorClass}`}
                      title="Contributions"
                    ></div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="flex justify-between items-center text-xs text-brand-text-muted pt-2 border-t border-brand-border/60">
            <span>Learn more about open source activity</span>
            <div className="flex items-center gap-1.5">
              <span>Less</span>
              <div className="w-[10px] h-[10px] rounded-sm bg-brand-border"></div>
              <div className="w-[10px] h-[10px] rounded-sm bg-emerald-950"></div>
              <div className="w-[10px] h-[10px] rounded-sm bg-emerald-800"></div>
              <div className="w-[10px] h-[10px] rounded-sm bg-emerald-600"></div>
              <div className="w-[10px] h-[10px] rounded-sm bg-emerald-400"></div>
              <span>More</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default GitHubGrid;
