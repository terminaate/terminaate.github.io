import React, { FC, HTMLAttributes, useEffect, useRef } from 'react';
import cl from './Particles.module.scss';

interface IConfig {
  particlesCount: number;
  particlesSize: number;
  particlesVelocity: number;
}

interface IParticles extends HTMLAttributes<HTMLCanvasElement> {
  width?: number;
  height?: number;
  particlesCount?: number;
  particlesSize?: number;
  particlesVelocity?: number;
}

class Particle {
  x: number;
  y: number;
  particleSize: number;
  velocityX: number;
  velocityY: number;
  ctx: CanvasRenderingContext2D;

  constructor(
    ctx: CanvasRenderingContext2D,
    { particlesSize, particlesVelocity }: IConfig,
  ) {
    this.ctx = ctx;
    this.particleSize = particlesSize;
    this.x = Math.random() * ctx.canvas.width;
    this.y = Math.random() * ctx.canvas.height;
    this.velocityX =
      Math.random() * (particlesVelocity * 2) - particlesVelocity;
    this.velocityY =
      Math.random() * (particlesVelocity * 2) + particlesVelocity;
  }

  updatePosition() {
    this.x += this.velocityX;
    if (this.x < 0) {
      this.x = this.ctx.canvas.width - this.x * 10;
    }

    this.y -= this.velocityY;
    if (this.y < 0) {
      this.y = this.ctx.canvas.height - this.y * 10;
    }
  }

  draw() {
    this.ctx.fillStyle = "#fff";
    this.ctx.fillRect(this.x, this.y, this.particleSize, this.particleSize);
    // this.ctx.beginPath();
    // this.ctx.arc(this.x, this.y, this.particleSize, 0, Math.PI * 2);
    // this.ctx.closePath();
    // this.ctx.fillStyle = '#fff';
    // this.ctx.fill();
  }
}

// todo
// do a pixel particles

const Particles: FC<IParticles> = ({
  particlesCount = 50,
  particlesSize = 5,
  particlesVelocity = 0.4,
  width = innerWidth,
  height = innerHeight,
  ...props
}) => {
  const canvasRef = useRef<null | HTMLCanvasElement>(null);
  const configRef = useRef<IConfig>({
    particlesCount,
    particlesVelocity,
    particlesSize,
  });

  const updateConfig = (newValue: Partial<IConfig>) => {
    configRef.current = { ...configRef.current, ...newValue };
  };

  useEffect(() => {
    const { current: canvas } = canvasRef;

    if (canvas) {
      const ctx = canvas.getContext('2d')!;

      let req = 0;
      const particles: Particle[] = [];

      const loop = () => {
        req = requestAnimationFrame(loop);

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (const i in particles) {
          const particle = particles[i];
          particle.updatePosition();
          particle.draw();
        }
      };

      const init = () => {
        for (let i = 0; i < particlesCount; i++) {
          particles.push(new Particle(ctx, configRef.current));
        }
        loop();
      };

      init();

      const onresize = () => {
        canvas.width = width;
        canvas.height = height;
      };

      window.addEventListener('resize', onresize);

      return () => {
        cancelAnimationFrame(req);
        window.removeEventListener('resize', onresize);
      };
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={cl.canvas}
      {...props}
      width={width}
      height={height}
    />
  );
};

export default Particles;
