import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline';

export const KameHouseSpline: React.FC = () => {
  return (
    <div className="w-full h-[650px] md:h-[800px] flex items-center justify-end overflow-visible pointer-events-none relative">
      <Suspense fallback={
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-xs uppercase tracking-[0.3em] opacity-30 animate-pulse">Initialisation 3D...</div>
        </div>
      }>
        <div className="w-[120%] h-full flex justify-end pointer-events-none relative">
          <Spline 
            scene="https://prod.spline.design/zf8zE3Z0U9hTh5iY/scene.splinecode" 
            className="w-full h-full pointer-events-none"
          />
        </div>
      </Suspense>
    </div>
  );
};
