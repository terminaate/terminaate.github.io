import { CanvasHTMLAttributes, FC, useEffect, useRef } from 'react';
import {
  CanvasParticles,
  CanvasParticlesProps,
} from '@/components/Particles/CanvasParticles';

type Props = CanvasHTMLAttributes<HTMLCanvasElement> &
  Partial<CanvasParticlesProps>;

export const Particles: FC<Props> = ({
  particlesCount = 100,
  particlesVelocity = 1.5,
  particlesSize = 5,
  ...props
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasRef.current === null) {
      return;
    }

    const canvasConfig: CanvasParticlesProps = {
      particlesCount,
      particlesVelocity,
      particlesSize,
    };

    const canvasParticles = new CanvasParticles(
      canvasRef.current,
      canvasConfig,
    );

    return canvasParticles.onUnMount;
  }, []);

  // TODO: maybe do an interesting effect, not bored particles

  return (
    <>
      <canvas {...props} ref={canvasRef} />
    </>
  );
};
