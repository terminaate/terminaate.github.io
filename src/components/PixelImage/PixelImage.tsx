import React, {
  createElement,
  FC,
  ImgHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
} from 'react';

type IPixelImage = ImgHTMLAttributes<HTMLImageElement>

const PixelImage: FC<IPixelImage> = ({ ...props }) => {
  const imageRef = useRef<null | HTMLImageElement>(null);

  const main = useCallback(() => {
    const { current: imgTarget } = imageRef;
    if (!imgTarget) return;

    const canvas = document.createElement('canvas');
    canvas.width = imgTarget.clientWidth;
    canvas.height = imgTarget.clientHeight;
    const ctx = canvas.getContext('2d')!;
    ctx.imageSmoothingEnabled = false;

    canvas.style.cssText =
      'image-rendering: optimizeSpeed;' + // FireFox < 6.0
      'image-rendering: -moz-crisp-edges;' + // FireFox
      'image-rendering: -o-crisp-edges;' + // Opera
      'image-rendering: -webkit-crisp-edges;' + // Chrome
      'image-rendering: crisp-edges;' + // Chrome
      'image-rendering: -webkit-optimize-contrast;' + // Safari
      'image-rendering: pixelated; ' + // Future browsers
      '-ms-interpolation-mode: nearest-neighbor;'; // IE
  }, []);

  useEffect(() => {
    main();
  }, []);

  return <img {...props} ref={imageRef} />;
};

export default PixelImage;
