import React from 'react';

export const GoogleDeepMindLogo: React.FC<{ className?: string; height?: number }> = ({
  className = '',
  height = 23
}) => {
  const width = Math.round(height * (181.96 / 24));
  return (
    <img
      src="/img/logos/deepmind.svg"
      alt="Google DeepMind"
      width={width}
      height={height}
      style={{ height: `${height}px`, width: 'auto' }}
      className={`select-none object-contain max-h-full ${className}`}
      loading="lazy"
      decoding="async"
    />
  );
};
