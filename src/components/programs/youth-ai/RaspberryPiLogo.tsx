import React from 'react';

export const RaspberryPiLogo: React.FC<{ className?: string; height?: number }> = ({
  className = '',
  height = 28
}) => {
  const width = Math.round(height * (111 / 34));
  return (
    <img
      src="/img/logos/pi-foundation.svg"
      alt="Raspberry Pi Foundation"
      width={width}
      height={height}
      style={{ height: `${height}px`, width: 'auto' }}
      className={`select-none object-contain max-h-full ${className}`}
      loading="lazy"
      decoding="async"
    />
  );
};
