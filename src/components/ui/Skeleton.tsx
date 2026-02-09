import { cn } from '../../lib/utils';

interface SkeletonProps {
  className?: string;
}

export default function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        'animate-pulse bg-white/10 rounded-lg',
        className
      )}
      aria-hidden="true"
    />
  );
}
