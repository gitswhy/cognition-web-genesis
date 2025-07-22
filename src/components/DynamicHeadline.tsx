import { useGeolocation } from '@/hooks/useGeolocation';

interface DynamicHeadlineProps {
  baseText: string;
  fallbackLocation?: string;
}

export const DynamicHeadline = ({ 
  baseText, 
  fallbackLocation = "Global" 
}: DynamicHeadlineProps) => {
  const { city, region, country, loading } = useGeolocation();

  const getLocationText = () => {
    if (loading) return fallbackLocation;
    
    // Prioritize city, then region, then country
    if (city && city !== 'Unknown') {
      return city;
    } else if (region && region !== 'Unknown') {
      return region;
    } else if (country && country !== 'Unknown') {
      return country;
    }
    
    return fallbackLocation;
  };

  const locationText = getLocationText();
  
  // Replace placeholder in the base text
  const dynamicText = baseText.replace('[Location]', locationText);
  
  return <>{dynamicText}</>;
};