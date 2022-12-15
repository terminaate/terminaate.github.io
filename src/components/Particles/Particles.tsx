import React, { CanvasHTMLAttributes, FC, useEffect, useRef } from 'react';

interface IParticles extends CanvasHTMLAttributes<HTMLCanvasElement> {
  particlesCount?: number;
  particlesSize?: number;
  particlesVelocity?: number;
}

type ParticleProps = {
  velocity: number;
  size: number;
  ctx: CanvasRenderingContext2D;
};

class Particle {
  size: number;
  velocityX: number;
  velocityY: number;
  x: number;
  y: number;
  ctx: CanvasRenderingContext2D;

  constructor({ velocity, size, ctx }: ParticleProps) {
    this.ctx = ctx;
    this.size = size;
    this.x = Math.random() * ctx.canvas.width;
    this.y = 0;
    this.velocityX = Math.random() * (velocity * 2) - velocity;
    this.velocityY = Math.random() * (velocity * 2) + velocity;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    this.ctx.closePath();
    this.ctx.fillStyle = '#00A080';
    this.ctx.fill();
  }

  updatePosition() {
    this.x += this.velocityX;
    if (this.x > this.ctx.canvas.width || this.x < 0) {
      this.x = Math.random() * this.ctx.canvas.width;
    }

    this.y += this.velocityY;
    if (this.y > this.ctx.canvas.height || this.y < 0) {
      this.y = this.size;
    }
  }
}

const Particles: FC<IParticles> = ({
  particlesCount = 50,
  particlesVelocity = 2,
  particlesSize = 2,
  ...props
}) => {
  const canvasRef = useRef<null | HTMLCanvasElement>(null);

  useEffect(() => {
    const particles: Particle[] = [];
    const {width, height} = props;

    const canvas = canvasRef.current!;
    if (width) {
      canvas.width = width as number;
    }

    if (height) {
      canvas.height = height as number;
    }

    window.onresize = () => {
      if (width) {
        canvas.width = width as number;
      }

      if (height) {
        canvas.height = height as number;
      }
    }
    const ctx = canvas.getContext('2d')!;

    let reqId = 0;

    const loop = () => {
      reqId = requestAnimationFrame(loop);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const particle of particles) {
        particle.draw();
        particle.updatePosition();
      }
    };

    const main = () => {
      for (let i = 0; i < particlesCount; i++) {
        particles.push(
          new Particle({
            velocity: particlesVelocity,
            ctx,
            size: particlesSize,
          }),
        );
      }
      loop();
    };

    main();

    return () => {
      cancelAnimationFrame(reqId);
    };
  }, []);

  return <canvas ref={canvasRef} {...props} />;
};

export default Particles;
