import { useEffect } from 'react';

export const usePerformanceOptimizer = () => {
  useEffect(() => {
    // Prefetch critical routes
    const criticalRoutes = ['/open-core', '/pro-edition', '/pricing'];
    
    criticalRoutes.forEach(route => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = route;
      document.head.appendChild(link);
    });

    // Optimize images
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
      });

      images.forEach(img => imageObserver.observe(img));
    }

    // Cleanup function
    return () => {
      // Remove prefetch links
      criticalRoutes.forEach(route => {
        const link = document.querySelector(`link[href="${route}"]`);
        if (link) link.remove();
      });
    };
  }, []);
};

export default usePerformanceOptimizer;