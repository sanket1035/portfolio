import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Gamepad2 } from 'lucide-react';
// @ts-ignore
import AntigravitySnake from '../components/AntigravitySnake';

export const SnakeGamePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <article className="min-h-screen pt-28 pb-24 px-6 max-w-2xl mx-auto font-sans flex flex-col items-center">
      {/* Back button */}
      <div className="w-full text-left mb-6">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-sm text-brand-text-muted hover:text-brand-accent transition-colors cursor-pointer group font-mono"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>
      </div>

      {/* Title Header */}
      <div className="space-y-3 mb-8 text-center">
        <div className="inline-flex p-3 rounded-full bg-brand-accent-glow text-brand-accent border border-brand-accent/20">
          <Gamepad2 size={32} />
        </div>
        <h1 className="font-heading font-extrabold text-2xl md:text-4xl text-brand-primary tracking-tight">
          Anti-gravity Snake
        </h1>
        <p className="text-xs text-brand-text-muted max-w-sm mx-auto leading-relaxed">
          A physics-bending spin on the classic arcade game. Re-steer, avoid the borders, and adapt to shifting forces!
        </p>
      </div>

      {/* Snake Component Container */}
      <div className="w-full py-4 bg-brand-card/20 border border-brand-border/40 rounded-3xl p-6 shadow-2xl backdrop-blur relative overflow-hidden">
        <AntigravitySnake />
      </div>

      {/* Instructions Card */}
      <div className="w-full mt-8 p-5 rounded-2xl bg-brand-card/45 border border-brand-border/60 text-brand-text-muted text-xs leading-relaxed space-y-3 max-w-[420px] font-mono">
        <h3 className="font-bold text-brand-accent uppercase tracking-wider text-[10px]">How to Play</h3>
        <ul className="list-disc list-inside space-y-1.5">
          <li>Steer the snake using <span className="text-brand-primary font-bold">Arrow Keys</span> or <span className="text-brand-primary font-bold">WASD</span>.</li>
          <li>On mobile, use <span className="text-brand-primary font-bold">swipe gestures</span> or hold the on-screen <span className="text-brand-primary font-bold">D-pad buttons</span>.</li>
          <li>Every <span className="text-[#ff4444] font-bold">15 seconds</span>, gravity rotates clockwise.</li>
          <li>If you do not press any key, the snake will <span className="text-[#00ff88] font-bold">fall</span> toward the current gravity direction.</li>
          <li>Eating food increases your score and speeds up the game every 5 points.</li>
          <li>Hitting the borders or your own body results in <span className="text-[#ff4444] font-bold">GAME OVER</span>.</li>
        </ul>
      </div>
    </article>
  );
};

export default SnakeGamePage;
