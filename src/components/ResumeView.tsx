import { portfolioData as d } from '../data/portfolioData';
import Title from './Title';

export const ResumeView = () => (
  <section id="resume" className="section">
    <div className="wrap">
      <Title text="Curriculum Vitae" />
      <div style={{ display: 'grid', gap: '3rem' }} className="resume-grid">
        <div style={{ display: 'grid', gap: '1.25rem', alignContent: 'center' }}>
          <p className="mono-label muted">Last Updated: {d.lastUpdatedResume}</p>
          <a className="pill" href={d.resumeUrl} download><span>Download PDF Resume</span></a>
          <a className="ulink" href={d.resumeUrl} target="_blank" rel="noreferrer">Open PDF in New Tab ↗</a>
        </div>
        <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', border: '1px solid var(--border)', background: 'var(--card)', boxShadow: '0 30px 80px -20px rgba(0,0,0,.5)' }}>
          <p className="mono-label muted" style={{ padding: '.9rem 1.1rem', borderBottom: '1px solid var(--border)' }}>{d.name}_Resume.pdf</p>
          <iframe src={`${d.resumeUrl}#toolbar=0`} title="Sanket Chaudhari Resume Preview" loading="lazy"
            style={{ width: '100%', height: 'min(80vh, 640px)', border: 0, background: 'var(--background)' }}>
            PDF Preview not supported in this browser. Please use the download button to view the resume.
          </iframe>
        </div>
      </div>
    </div>
  </section>
);
export default ResumeView;
