import { useEffect, useState } from 'react';

interface GeolocationData {
  country?: string;
  city?: string;
  region?: string;
  timezone?: string;
  isEU?: boolean;
  loading: boolean;
  error?: string;
}

export const useGeolocation = () => {
  const [geoData, setGeoData] = useState<GeolocationData>({ loading: true });

  useEffect(() => {
    const fetchGeoData = async () => {
      try {
        // Using ipapi.co for geo data (free tier available)
        const response = await fetch('https://ipapi.co/json/');
        if (!response.ok) throw new Error('Failed to fetch geo data');
        
        const data = await response.json();
        
        // EU countries list for GDPR compliance
        const euCountries = [
          'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR',
          'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL',
          'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE'
        ];

        setGeoData({
          country: data.country_name,
          city: data.city,
          region: data.region,
          timezone: data.timezone,
          isEU: euCountries.includes(data.country_code),
          loading: false
        });
      } catch (error) {
        // Fallback to browser language for basic localization
        const browserLang = navigator.language || 'en-US';
        const isEuBrowser = browserLang.includes('de') || browserLang.includes('fr') || 
                           browserLang.includes('es') || browserLang.includes('it');
        
        setGeoData({
          country: 'Unknown',
          city: 'Your Location',
          region: 'Global',
          isEU: isEuBrowser,
          loading: false,
          error: 'Could not detect location'
        });
      }
    };

    fetchGeoData();
  }, []);

  return geoData;
};