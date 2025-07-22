import { useEffect, useRef, useState } from 'react';
import Lottie from 'react-lottie-player';
import { useInView } from 'react-intersection-observer';

interface ModuleLottieAnimationProps {
  moduleId: string;
  isActive: boolean;
  reducedMotion: boolean;
}

const ModuleLottieAnimation = ({ moduleId, isActive, reducedMotion }: ModuleLottieAnimationProps) => {
  const [animationData, setAnimationData] = useState(null);
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: false });

  // Create Lottie animation data for different modules
  const getAnimationData = (moduleId: string) => {
    switch (moduleId) {
      case 'on-the-fly-scans':
        // Entropy flush - swirling particles animation
        return {
          v: "5.7.0",
          fr: 30,
          ip: 0,
          op: 90,
          w: 400,
          h: 400,
          nm: "Entropy Flush",
          ddd: 0,
          assets: [],
          layers: [
            {
              ddd: 0,
              ind: 1,
              ty: 4,
              nm: "Particle 1",
              sr: 1,
              ks: {
                o: { a: 0, k: 80 },
                r: { 
                  a: 1, 
                  k: [
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [0] },
                    { t: 90, s: [360] }
                  ]
                },
                p: {
                  a: 1,
                  k: [
                    { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 0, s: [200, 200] },
                    { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 30, s: [300, 150] },
                    { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 60, s: [100, 250] },
                    { t: 90, s: [200, 200] }
                  ]
                },
                a: { a: 0, k: [0, 0] },
                s: { a: 0, k: [100, 100] }
              },
              ao: 0,
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      d: 1,
                      ty: "el",
                      s: { a: 0, k: [20, 20] },
                      p: { a: 0, k: [0, 0] }
                    },
                    {
                      ty: "fl",
                      c: { a: 0, k: [0, 1, 0.4, 1] }, // Terminal green
                      o: { a: 0, k: 100 }
                    }
                  ]
                }
              ],
              ip: 0,
              op: 90,
              st: 0
            },
            // Additional particles with different timing
            {
              ddd: 0,
              ind: 2,
              ty: 4,
              nm: "Particle 2",
              sr: 1,
              ks: {
                o: { a: 0, k: 60 },
                r: { 
                  a: 1, 
                  k: [
                    { t: 0, s: [180] },
                    { t: 90, s: [-180] }
                  ]
                },
                p: {
                  a: 1,
                  k: [
                    { t: 15, s: [200, 200] },
                    { t: 45, s: [120, 280] },
                    { t: 75, s: [280, 120] },
                    { t: 90, s: [200, 200] }
                  ]
                },
                s: { a: 0, k: [80, 80] }
              },
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      d: 1,
                      ty: "el",
                      s: { a: 0, k: [15, 15] },
                      p: { a: 0, k: [0, 0] }
                    },
                    {
                      ty: "fl",
                      c: { a: 0, k: [0, 0.831, 1, 1] }, // Terminal blue
                      o: { a: 0, k: 100 }
                    }
                  ]
                }
              ],
              ip: 15,
              op: 90,
              st: 0
            }
          ]
        };
        
      case 'team-insights':
        // Vault sync - locking mechanism animation
        return {
          v: "5.7.0",
          fr: 30,
          ip: 0,
          op: 60,
          w: 400,
          h: 400,
          nm: "Vault Sync Lock",
          layers: [
            {
              ddd: 0,
              ind: 1,
              ty: 4,
              nm: "Lock Body",
              ks: {
                o: { a: 0, k: 100 },
                p: { a: 0, k: [200, 220] },
                s: { a: 0, k: [150, 150] }
              },
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      ty: "rc",
                      s: { a: 0, k: [80, 60] },
                      p: { a: 0, k: [0, 0] },
                      r: { a: 0, k: 10 }
                    },
                    {
                      ty: "fl",
                      c: { a: 0, k: [0, 0.831, 1, 1] }
                    }
                  ]
                }
              ],
              ip: 0,
              op: 60
            },
            {
              ddd: 0,
              ind: 2,
              ty: 4,
              nm: "Lock Shackle",
              ks: {
                o: { a: 0, k: 100 },
                p: { a: 0, k: [200, 180] },
                s: { 
                  a: 1,
                  k: [
                    { t: 0, s: [100, 100] },
                    { t: 20, s: [110, 100] },
                    { t: 40, s: [100, 100] }
                  ]
                }
              },
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      ty: "el",
                      s: { a: 0, k: [50, 50] },
                      p: { a: 0, k: [0, 0] }
                    },
                    {
                      ty: "st",
                      c: { a: 0, k: [0, 1, 0.4, 1] },
                      w: { a: 0, k: 8 }
                    }
                  ]
                }
              ],
              ip: 0,
              op: 60
            },
            // Sync particles
            {
              ddd: 0,
              ind: 3,
              ty: 4,
              nm: "Sync Particle",
              ks: {
                o: { 
                  a: 1,
                  k: [
                    { t: 20, s: [0] },
                    { t: 30, s: [100] },
                    { t: 50, s: [100] },
                    { t: 60, s: [0] }
                  ]
                },
                p: {
                  a: 1,
                  k: [
                    { t: 20, s: [150, 200] },
                    { t: 60, s: [250, 200] }
                  ]
                },
                s: { a: 0, k: [50, 50] }
              },
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      ty: "el",
                      s: { a: 0, k: [8, 8] },
                      p: { a: 0, k: [0, 0] }
                    },
                    {
                      ty: "fl",
                      c: { a: 0, k: [1, 1, 1, 1] }
                    }
                  ]
                }
              ],
              ip: 20,
              op: 60
            }
          ]
        };
        
      default:
        return null;
    }
  };

  useEffect(() => {
    const data = getAnimationData(moduleId);
    setAnimationData(data);
  }, [moduleId]);

  // Don't render animation if reduced motion is preferred
  if (reducedMotion || !animationData) {
    return null;
  }

  return (
    <div ref={ref} className="absolute inset-0 flex items-center justify-center">
      <Lottie
        loop
        animationData={animationData}
        play={inView && isActive}
        style={{ 
          width: '100%', 
          height: '100%',
          maxWidth: '300px',
          maxHeight: '300px'
        }}
        className="opacity-80"
      />
    </div>
  );
};

export default ModuleLottieAnimation;