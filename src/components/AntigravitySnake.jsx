import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function AntigravitySnake() {
  const [gameState, setGameState] = useState('COUNTDOWN'); // COUNTDOWN | PLAYING | GAMEOVER
  const [score, setScore] = useState(0);
  const [personalBest, setPersonalBest] = useState(0);
  const [gravity, setGravity] = useState('DOWN'); // UP | RIGHT | DOWN | LEFT
  const [gravityTimeLeft, setGravityTimeLeft] = useState(15);
  const [countdown, setCountdown] = useState(3);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [containerWidth, setContainerWidth] = useState(400);

  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  // Gameplay state stored in refs to prevent timer resets
  const snakeRef = useRef([
    { x: 10, y: 10 },
    { x: 10, y: 11 },
    { x: 10, y: 12 },
  ]);
  const dirRef = useRef({ x: 0, y: -1 }); // Initial movement: UP
  const lastInputReceivedRef = useRef(false);
  const foodRef = useRef({ x: 5, y: 5 });
  const gravityRef = useRef('DOWN');
  const speedRef = useRef(150);
  const holdDirRef = useRef(null);
  const touchStartRef = useRef({ x: 0, y: 0 });

  // Grid dimensions
  const GRID_SIZE = 20;

  // Retrieve Personal Best from localStorage on mount
  useEffect(() => {
    const savedPB = localStorage.getItem('snake_pb');
    if (savedPB) {
      setPersonalBest(parseInt(savedPB, 10));
    }
    // Check if device supports touch
    setIsTouchDevice(navigator.maxTouchPoints > 0);
  }, []);

  // Update Personal Best
  const updatePersonalBest = (newScore) => {
    if (newScore > personalBest) {
      setPersonalBest(newScore);
      localStorage.setItem('snake_pb', newScore.toString());
    }
  };

  // Measure container for dynamic canvas resizing
  useEffect(() => {
    const updateSize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      setContainerWidth(width);
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    window.addEventListener('orientationchange', updateSize);

    return () => {
      window.removeEventListener('resize', updateSize);
      window.removeEventListener('orientationchange', updateSize);
    };
  }, []);

  // Calculate dynamic dimensions
  // Desktop: max-width 400px (cell: 20px)
  // Tablet (<768px): max-width 300px (cell: 15px)
  // Mobile (<480px): max-width 260px (cell: 13px)
  const maxPossibleWidth = containerWidth > 768 ? 400 : containerWidth > 480 ? 300 : 260;
  const cellSize = Math.floor(maxPossibleWidth / GRID_SIZE);
  const canvasWidth = cellSize * GRID_SIZE;

  // Map direction string to vectors
  const getDirectionVector = (d) => {
    switch (d) {
      case 'UP': return { x: 0, y: -1 };
      case 'DOWN': return { x: 0, y: 1 };
      case 'LEFT': return { x: -1, y: 0 };
      case 'RIGHT': return { x: 1, y: 0 };
      default: return { x: 0, y: 1 };
    }
  };

  // Steer the snake with safety checks
  const handleDirectionInput = (newDirName) => {
    const newDirVector = getDirectionVector(newDirName);
    const currentDir = dirRef.current;

    // Prevent reversing directly into self
    const isOpposite = (newDirVector.x === -currentDir.x && newDirVector.y === -currentDir.y);
    if (snakeRef.current.length === 1 || !isOpposite) {
      dirRef.current = newDirVector;
      lastInputReceivedRef.current = true;
    }
  };

  // Start touch-holding D-Pad buttons
  const startHold = (direction) => {
    holdDirRef.current = direction;
    handleDirectionInput(direction);
  };

  // End touch-holding
  const endHold = () => {
    holdDirRef.current = null;
  };

  // Generate random food coordinates away from the snake
  const spawnFood = () => {
    let newFood;
    let onSnake = true;
    while (onSnake) {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
      onSnake = snakeRef.current.some(segment => segment.x === newFood.x && segment.y === newFood.y);
    }
    foodRef.current = newFood;
  };

  // Reset/Restart Game
  const resetGame = () => {
    snakeRef.current = [
      { x: 10, y: 10 },
      { x: 10, y: 11 },
      { x: 10, y: 12 },
    ];
    dirRef.current = { x: 0, y: -1 };
    lastInputReceivedRef.current = false;
    gravityRef.current = 'DOWN';
    speedRef.current = 150;
    holdDirRef.current = null;
    spawnFood();

    setScore(0);
    setGravity('DOWN');
    setGravityTimeLeft(15);
    setCountdown(3);
    setGameState('COUNTDOWN');
  };

  // Countdown timer effect
  useEffect(() => {
    if (gameState !== 'COUNTDOWN') return;
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setGameState('PLAYING');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [gameState]);

  // Gravity shifting clock timer
  useEffect(() => {
    if (gameState !== 'PLAYING') return;

    const interval = setInterval(() => {
      setGravityTimeLeft((prev) => {
        if (prev <= 1) {
          // Clockwise Gravity Rotation: UP -> RIGHT -> DOWN -> LEFT -> UP
          const directions = ['UP', 'RIGHT', 'DOWN', 'LEFT'];
          const currentIndex = directions.indexOf(gravityRef.current);
          const nextIndex = (currentIndex + 1) % directions.length;
          const nextGravity = directions[nextIndex];

          gravityRef.current = nextGravity;
          setGravity(nextGravity);
          return 15;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [gameState]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (gameState !== 'PLAYING') return;

      switch (e.key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
          e.preventDefault();
          handleDirectionInput('UP');
          break;
        case 'ArrowDown':
        case 's':
        case 'S':
          e.preventDefault();
          handleDirectionInput('DOWN');
          break;
        case 'ArrowLeft':
        case 'a':
        case 'A':
          e.preventDefault();
          handleDirectionInput('LEFT');
          break;
        case 'ArrowRight':
        case 'd':
        case 'D':
          e.preventDefault();
          handleDirectionInput('RIGHT');
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameState]);

  // Touch gesture listeners with scroll prevention
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const preventDefault = (e) => {
      if (e.cancelable) {
        e.preventDefault();
      }
    };

    const handleTouchStart = (e) => {
      preventDefault(e);
      const touch = e.touches[0];
      touchStartRef.current = { x: touch.clientX, y: touch.clientY };
    };

    const handleTouchEnd = (e) => {
      preventDefault(e);
      const touch = e.changedTouches[0];
      const deltaX = touch.clientX - touchStartRef.current.x;
      const deltaY = touch.clientY - touchStartRef.current.y;
      const threshold = 30; // Min swipe distance in pixels

      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (Math.abs(deltaX) > threshold) {
          handleDirectionInput(deltaX > 0 ? 'RIGHT' : 'LEFT');
        }
      } else {
        if (Math.abs(deltaY) > threshold) {
          handleDirectionInput(deltaY > 0 ? 'DOWN' : 'UP');
        }
      }
    };

    canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
    canvas.addEventListener('touchmove', preventDefault, { passive: false });
    canvas.addEventListener('touchend', handleTouchEnd, { passive: false });

    return () => {
      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchmove', preventDefault);
      canvas.removeEventListener('touchend', handleTouchEnd);
    };
  }, [gameState]);

  // Main gameplay tick loop
  useEffect(() => {
    if (gameState !== 'PLAYING') return;

    const moveSnake = () => {
      // 1. Determine direction: User input vs falling toward gravity
      if (holdDirRef.current) {
        // Active hold D-pad input override
        handleDirectionInput(holdDirRef.current);
      } else if (!lastInputReceivedRef.current) {
        // Fall toward gravity if no key pressed in this tick
        const gravityVector = getDirectionVector(gravityRef.current);
        const isOpposite = (gravityVector.x === -dirRef.current.x && gravityVector.y === -dirRef.current.y);
        
        // Prevent reverse self-collision
        if (snakeRef.current.length === 1 || !isOpposite) {
          dirRef.current = gravityVector;
        }
      }

      // Reset tick input state
      lastInputReceivedRef.current = false;

      // 2. Compute new head coordinate
      const head = snakeRef.current[0];
      const moveDirection = dirRef.current;
      const newHead = {
        x: head.x + moveDirection.x,
        y: head.y + moveDirection.y,
      };

      // 3. Collision boundaries check (Instant Death)
      if (newHead.x < 0 || newHead.x >= GRID_SIZE || newHead.y < 0 || newHead.y >= GRID_SIZE) {
        setGameState('GAMEOVER');
        return;
      }

      // 4. Self collision check
      const selfCollision = snakeRef.current.some(segment => segment.x === newHead.x && segment.y === newHead.y);
      if (selfCollision) {
        setGameState('GAMEOVER');
        return;
      }

      // 5. Update snake body coordinates
      const newSnake = [newHead, ...snakeRef.current];

      // 6. Food collision check
      if (newHead.x === foodRef.current.x && newHead.y === foodRef.current.y) {
        // Eat food: Keep tail segment, grow score
        setScore((prevScore) => {
          const nextScore = prevScore + 1;
          updatePersonalBest(nextScore);

          // Speed up every 5 score milestones
          if (nextScore > 0 && nextScore % 5 === 0) {
            speedRef.current = Math.max(80, 150 - Math.floor(nextScore / 5) * 10);
          }
          return nextScore;
        });
        spawnFood();
      } else {
        // Normal move: remove tail
        newSnake.pop();
      }

      snakeRef.current = newSnake;
    };

    let timeoutId;
    const runTick = () => {
      moveSnake();
      if (gameState === 'PLAYING') {
        timeoutId = setTimeout(runTick, speedRef.current);
      }
    };

    timeoutId = setTimeout(runTick, speedRef.current);
    return () => clearTimeout(timeoutId);
  }, [gameState, gravity]);

  // Canvas rendering draw updates
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear board background
    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(0, 0, canvasWidth, canvasWidth);

    // Draw sub-grid lines
    ctx.strokeStyle = '#151515';
    ctx.lineWidth = 0.5;
    for (let i = 0; i <= GRID_SIZE; i++) {
      ctx.beginPath();
      ctx.moveTo(i * cellSize, 0);
      ctx.lineTo(i * cellSize, canvasWidth);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, i * cellSize);
      ctx.lineTo(canvasWidth, i * cellSize);
      ctx.stroke();
    }

    // Draw Food segment
    ctx.fillStyle = '#ff4444';
    ctx.shadowColor = '#ff4444';
    ctx.shadowBlur = 8;
    ctx.beginPath();
    const foodX = foodRef.current.x * cellSize + cellSize / 2;
    const foodY = foodRef.current.y * cellSize + cellSize / 2;
    ctx.arc(foodX, foodY, cellSize / 2 - 2, 0, 2 * Math.PI);
    ctx.fill();
    ctx.shadowBlur = 0; // Reset canvas shadow

    // Draw Snake segments
    snakeRef.current.forEach((segment, index) => {
      const isHead = index === 0;
      if (isHead) {
        ctx.fillStyle = '#00ff88';
        ctx.shadowColor = '#00ff88';
        ctx.shadowBlur = 10;
      } else {
        // Body color matches theme gradient
        ctx.fillStyle = '#00cc66';
        ctx.shadowBlur = 0;
      }

      const x = segment.x * cellSize + 1.5;
      const y = segment.y * cellSize + 1.5;
      const w = cellSize - 3;
      const r = Math.max(3, Math.floor(cellSize / 4)); // Rounded corners radius

      ctx.beginPath();
      if (ctx.roundRect) {
        ctx.roundRect(x, y, w, w, r);
      } else {
        ctx.rect(x, y, w, w);
      }
      ctx.fill();
      ctx.shadowBlur = 0;
    });
  }, [canvasWidth, cellSize, score, gameState, gravity]);

  // Convert gravity state to arrow unicode strings
  const getGravityArrow = (dirName) => {
    switch (dirName) {
      case 'UP': return '↑';
      case 'DOWN': return '↓';
      case 'LEFT': return '←';
      case 'RIGHT': return '→';
      default: return '↓';
    }
  };

  const isWarning = gravityTimeLeft <= 3;

  return (
    <div
      ref={containerRef}
      className="w-full flex flex-col items-center select-none"
      style={{ maxWidth: '420px', margin: '0 auto' }}
    >
      {/* UI Stat Board */}
      <div
        className="w-full mb-4 px-3 py-2.5 rounded-xl border border-brand-border bg-brand-card/45 backdrop-blur flex justify-between items-center text-brand-text font-mono shadow-md"
        style={{ fontSize: 'clamp(12px, 2.5vw, 16px)' }}
      >
        <div className="flex gap-4">
          <div>
            Score: <span className="text-[#00ff88] font-bold">{score}</span>
          </div>
          <div>
            Best: <span className="text-[#ff4444] font-bold">{personalBest}</span>
          </div>
        </div>

        {/* Shifting Gravity Widget */}
        <div className="flex items-center gap-1.5 font-bold">
          <span className="text-[10px] text-brand-text-muted font-normal uppercase tracking-wider">
            Gravity in {gravityTimeLeft}s:
          </span>
          <span
            className={`w-6 h-6 rounded-md bg-brand-bg/50 border flex items-center justify-center text-base transition-all ${
              isWarning
                ? 'border-red-500 text-red-500 font-extrabold animate-bounce scale-110 shadow-[0_0_10px_rgba(239,68,68,0.5)]'
                : 'border-brand-border text-[#00ff88]'
            }`}
          >
            {getGravityArrow(gravity)}
          </span>
        </div>
      </div>

      {/* Main Canvas & Overlay Screen */}
      <div
        className="relative border border-brand-border/60 bg-[#0a0a0a] rounded-2xl overflow-hidden shadow-2xl flex justify-center items-center"
        style={{ width: `${canvasWidth}px`, height: `${canvasWidth}px` }}
      >
        <canvas
          ref={canvasRef}
          width={canvasWidth}
          height={canvasWidth}
          className="block outline-none"
        />

        {/* 1. Countdown Overlay */}
        {gameState === 'COUNTDOWN' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/85 backdrop-blur-sm z-20">
            <p className="font-mono text-xs uppercase tracking-widest text-[#00ff88] mb-2 font-semibold">
              Gravity rotates clockwise
            </p>
            <motion.h1
              key={countdown}
              initial={{ scale: 0.3, opacity: 0 }}
              animate={{ scale: 1.1, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-7xl font-extrabold font-heading text-brand-primary"
            >
              {countdown}
            </motion.h1>
          </div>
        )}

        {/* 2. Game Over Overlay */}
        {gameState === 'GAMEOVER' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/90 backdrop-blur-md z-20 px-6 text-center">
            <h2 className="text-3xl font-extrabold font-heading text-[#ff4444] tracking-tight mb-2 uppercase animate-pulse">
              GAME OVER
            </h2>
            <div className="h-0.5 w-16 bg-[#ff4444] rounded mb-6"></div>

            <div className="flex gap-6 mb-8 text-brand-text font-mono text-sm">
              <div>
                <p className="text-[10px] text-brand-text-muted uppercase">Final Score</p>
                <p className="text-2xl font-bold text-[#00ff88] mt-1">{score}</p>
              </div>
              <div className="border-r border-brand-border/50"></div>
              <div>
                <p className="text-[10px] text-brand-text-muted uppercase">Personal Best</p>
                <p className="text-2xl font-bold text-brand-primary mt-1">{personalBest}</p>
              </div>
            </div>

            <button
              onClick={resetGame}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-[#00ff88] text-brand-bg font-extrabold text-xs uppercase tracking-wider hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer shadow-lg shadow-indigo-500/20"
            >
              Try Again
            </button>
          </div>
        )}
      </div>

      {/* 3. On-Screen D-Pad buttons (Visible only on mobile/touch layout) */}
      {isTouchDevice && (
        <div className="w-full mt-6 flex flex-col items-center gap-1.5 md:hidden">
          {/* UP Button */}
          <button
            onTouchStart={() => startHold('UP')}
            onTouchEnd={endHold}
            onMouseDown={() => startHold('UP')}
            onMouseUp={endHold}
            onMouseLeave={endHold}
            className="w-[50px] h-[50px] rounded-xl border border-brand-border bg-brand-card/50 hover:bg-brand-card text-brand-text hover:text-[#00ff88] font-bold text-lg flex items-center justify-center cursor-pointer select-none active:bg-brand-accent/25 active:border-brand-accent transition-all shrink-0"
            style={{ touchAction: 'none' }}
          >
            ↑
          </button>

          {/* LEFT | DOWN | RIGHT Button Row */}
          <div className="flex gap-6">
            <button
              onTouchStart={() => startHold('LEFT')}
              onTouchEnd={endHold}
              onMouseDown={() => startHold('LEFT')}
              onMouseUp={endHold}
              onMouseLeave={endHold}
              className="w-[50px] h-[50px] rounded-xl border border-brand-border bg-brand-card/50 hover:bg-brand-card text-brand-text hover:text-[#00ff88] font-bold text-lg flex items-center justify-center cursor-pointer select-none active:bg-brand-accent/25 active:border-brand-accent transition-all shrink-0"
              style={{ touchAction: 'none' }}
            >
              ←
            </button>
            <button
              onTouchStart={() => startHold('DOWN')}
              onTouchEnd={endHold}
              onMouseDown={() => startHold('DOWN')}
              onMouseUp={endHold}
              onMouseLeave={endHold}
              className="w-[50px] h-[50px] rounded-xl border border-brand-border bg-brand-card/50 hover:bg-brand-card text-brand-text hover:text-[#00ff88] font-bold text-lg flex items-center justify-center cursor-pointer select-none active:bg-brand-accent/25 active:border-brand-accent transition-all shrink-0"
              style={{ touchAction: 'none' }}
            >
              ↓
            </button>
            <button
              onTouchStart={() => startHold('RIGHT')}
              onTouchEnd={endHold}
              onMouseDown={() => startHold('RIGHT')}
              onMouseUp={endHold}
              onMouseLeave={endHold}
              className="w-[50px] h-[50px] rounded-xl border border-brand-border bg-brand-card/50 hover:bg-brand-card text-brand-text hover:text-[#00ff88] font-bold text-lg flex items-center justify-center cursor-pointer select-none active:bg-brand-accent/25 active:border-brand-accent transition-all shrink-0"
              style={{ touchAction: 'none' }}
            >
              →
            </button>
          </div>
        </div>
      )}

      {/* PC Key Assist tips */}
      {!isTouchDevice && (
        <p className="mt-4 font-mono text-[10px] text-brand-text-muted text-center uppercase tracking-wider">
          Controls: Arrow keys / WASD to steer against gravity
        </p>
      )}
    </div>
  );
}
