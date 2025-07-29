import { useEffect } from 'react';

const ServiceWorkerSetup = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered successfully');
        })
        .catch((error) => {
          console.log('SW registration failed');
        });
    }
  }, []);

  return null;
};

export default ServiceWorkerSetup;