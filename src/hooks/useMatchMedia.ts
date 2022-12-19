import { useEffect, useMemo, useState } from 'react';

export default (query: string) => {
  const media = matchMedia(query);

  const [isMedia, setIsMedia] = useState<boolean>(media.matches);

  useEffect(() => {
    const handler = () => {
      setIsMedia(media.matches);
    };

    media.addEventListener('change', handler);

    return () => media.removeEventListener('change', handler);
  });

  // console.log(isMedia);

  return useMemo(() => isMedia, [isMedia]);
};
