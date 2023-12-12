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
    this.velocityX = Math.random() * (velocity * 2) - velocity;
    this.velocityY = Math.random() * (velocity * 2) + velocity;
    this.x = Math.random() * ctx.canvas.width;
    this.y = this.ctx.canvas.height + this.size;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    this.ctx.closePath();
    this.ctx.fillStyle = 'rgb(0,210,131)';
    this.ctx.fill();
  }

  updatePosition() {
    this.x = this.ctx.canvas.width / 2 + Math.cos(45) * this.velocityX;
    this.y = this.ctx.canvas.height / 2 + Math.sin(45) * this.velocityY;

    // this.x += this.velocityX;
    // if (this.x > this.ctx.canvas.width) {
    //   this.x = 0;
    // } else if (this.x < 0) {
    //   this.x = this.ctx.canvas.width;
    // }
    //
    // this.y -= this.velocityY;
    // if (this.y <= 0) {
    //   this.y = this.ctx.canvas.height + this.size;
    // }
  }
}

export type CanvasParticlesProps = {
  particlesCount: number;
  particlesSize: number;
  particlesVelocity: number;
};

export class CanvasParticles {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private reqId: number = 0;
  private particles: Particle[] = [];

  constructor(canvas: HTMLCanvasElement, props: CanvasParticlesProps) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    this.init(props);
  }

  private animationLoop() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (const particle of this.particles) {
      particle.draw();
      particle.updatePosition();
    }

    this.reqId = requestAnimationFrame(this.animationLoop.bind(this));
  }

  private init({
    particlesCount,
    particlesVelocity,
    particlesSize,
  }: CanvasParticlesProps) {
    this.onWindowResize();
    this.mountEvents();

    for (let i = 0; i <= particlesCount; i++) {
      const newParticle = new Particle({
        velocity: particlesVelocity,
        ctx: this.ctx,
        size: particlesSize,
      });

      // INFO: do little delay for remove strange effect of particles moving
      newParticle.y += particlesCount * 2;

      this.particles.push(newParticle);
    }

    this.animationLoop();
  }

  onUnMount = () => {
    cancelAnimationFrame(this.reqId);
    this.unMountEvents();
  };

  private onWindowResize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  mountEvents() {
    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  unMountEvents() {
    window.removeEventListener('resize', this.onWindowResize.bind(this));
  }
}
