import React from 'react';
import { Download, FileText, Calendar, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const ResumeView: React.FC = () => {
  return (
    <section id="resume" className="py-16 px-6 border-t border-brand-border/40 bg-brand-bg">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-brand-primary tracking-tight">
            Curriculum Vitae
          </h2>
          <div className="h-1 w-12 bg-brand-accent mx-auto mt-4 rounded-full"></div>
          <div className="flex justify-center items-center gap-1.5 text-brand-text-muted mt-4 text-sm">
            <Calendar size={14} className="text-brand-accent" />
            <span>Last Updated: {portfolioData.lastUpdatedResume}</span>
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-10 items-stretch">
          {/* Highlights & Download Actions */}
          <div className="md:col-span-2 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="font-heading font-bold text-xl text-brand-primary">
                Resume Overview
              </h3>
              <p className="font-sans text-sm md:text-base text-brand-text-muted leading-relaxed">
                Recruiters and hiring managers can download a single-page PDF containing a complete log of academic scores, internship credentials, and full technology descriptions.
              </p>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="p-2 rounded-lg bg-brand-border text-brand-accent shrink-0 h-9 w-9 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-sm text-brand-text">PICT Credentials</h4>
                    <p className="text-xs text-brand-text-muted leading-snug">
                      Academic details, AI & Data Science coursework, and grades (8.9/10 GPA).
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="p-2 rounded-lg bg-brand-border text-brand-accent shrink-0 h-9 w-9 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-sm text-brand-text">Core Projects</h4>
                    <p className="text-xs text-brand-text-muted leading-snug">
                      Developer outlines for PlaceTrack AI, Algonix, and Carbonomics AI.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="p-2 rounded-lg bg-brand-border text-brand-accent shrink-0 h-9 w-9 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-sm text-brand-text">Open Source Timeline</h4>
                    <p className="text-xs text-brand-text-muted leading-snug">
                      Program roles and documentation contributions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Download button */}
            <div className="space-y-4">
              <a
                href={portfolioData.resumeUrl}
                download
                className="w-full px-6 py-4 rounded-xl bg-brand-primary text-brand-bg font-bold text-sm transition-all hover:opacity-90 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-brand-primary/10"
              >
                <Download size={16} />
                Download PDF Resume
              </a>

              <a
                href={portfolioData.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full px-6 py-3.5 rounded-xl border border-brand-border bg-brand-card/50 hover:bg-brand-card hover:border-brand-accent/50 text-brand-text font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <ExternalLink size={14} className="text-brand-accent" />
                Open PDF in New Tab
              </a>
            </div>
          </div>

          {/* PDF Preview Window */}
          <div className="md:col-span-3 min-h-[450px] md:min-h-[550px] rounded-2xl border border-brand-border bg-brand-card shadow-xl overflow-hidden flex flex-col justify-between">
            <div className="bg-brand-border/40 px-4 py-3 border-b border-brand-border flex items-center justify-between text-xs text-brand-text-muted">
              <span className="flex items-center gap-1.5 font-medium">
                <FileText size={14} className="text-brand-accent" />
                {portfolioData.name}_Resume.pdf
              </span>
              <span>PDF Embed</span>
            </div>
            
            {/* Native PDF view frame */}
            <iframe
              src={`${portfolioData.resumeUrl}#toolbar=0`}
              title="Sanket Chaudhari Resume Preview"
              className="flex-1 w-full h-full bg-brand-bg border-none"
              style={{ minHeight: '400px' }}
            >
              <div className="p-8 text-center text-brand-text-muted">
                PDF Preview not supported in this browser. Please use the download button on the left to view the resume.
              </div>
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ResumeView;
