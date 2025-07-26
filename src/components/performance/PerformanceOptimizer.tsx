import { useEffect } from 'react';

export const usePerformanceOptimizer = () => {
  useEffect(() => {
    // Aggressive performance optimizations
    
    // Disable smooth scrolling for better performance
    document.documentElement.style.scrollBehavior = 'auto';
    
    // Reduce animation duration globally for better performance
    const style = document.createElement('style');
    style.textContent = `
      *, *::before, *::after {
        animation-duration: 0.1s !important;
        animation-delay: 0s !important;
        transition-duration: 0.1s !important;
        transition-delay: 0s !important;
      }
      .animate-spin {
        animation: spin 0.5s linear infinite !important;
      }
      .animate-pulse {
        animation: pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite !important;
      }
    `;
    document.head.appendChild(style);

    // Prefetch critical routes - reduced set
    const criticalRoutes = ['/open-core', '/pricing'];
    
    criticalRoutes.forEach(route => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = route;
      document.head.appendChild(link);
    });

    // Optimize images with more aggressive settings
    const images = document.querySelectorAll('img[loading="lazy"]');
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
            }
            imageObserver.unobserve(img);
          }
        });
      }, {
        rootMargin: '50px'
      });

      images.forEach(img => imageObserver.observe(img));
    }

    // Disable requestAnimationFrame for hidden elements
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          element.style.animationPlayState = 'paused';
        } else {
          const element = entry.target as HTMLElement;
          element.style.animationPlayState = 'running';
        }
      });
    };

    const animationObserver = new IntersectionObserver(observerCallback, {
      threshold: 0.1
    });

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('[class*="animate-"]');
    animatedElements.forEach(el => animationObserver.observe(el));

    // Cleanup function
    return () => {
      document.head.removeChild(style);
      criticalRoutes.forEach(route => {
        const link = document.querySelector(`link[href="${route}"]`);
        if (link) link.remove();
      });
      animationObserver.disconnect();
    };
  }, []);
};

export default usePerformanceOptimizer;