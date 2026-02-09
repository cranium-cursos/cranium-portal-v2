import { useState } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

export default function SafeImage({ fallbackSrc, onError, ...props }: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    if (!hasError) {
      setHasError(true);
      if (fallbackSrc) {
        (e.target as HTMLImageElement).src = fallbackSrc;
      }
    }
    onError?.(e);
  };

  return <img {...props} onError={handleError} />;
}
