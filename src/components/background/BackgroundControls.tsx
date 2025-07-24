import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Settings, Monitor, Zap } from 'lucide-react';

interface BackgroundControlsProps {
  config: {
    intensity: number;
    speed: number;
    enabled: boolean;
  };
  onConfigChange: (config: any) => void;
  className?: string;
}

const BackgroundControls: React.FC<BackgroundControlsProps> = ({ 
  config, 
  onConfigChange, 
  className = '' 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIntensityChange = (value: number[]) => {
    onConfigChange({ ...config, intensity: value[0] });
  };

  const handleSpeedChange = (value: number[]) => {
    onConfigChange({ ...config, speed: value[0] });
  };

  const handleEnabledChange = (enabled: boolean) => {
    onConfigChange({ ...config, enabled });
  };

  const presets = [
    { name: 'Subtle', intensity: 0.4, speed: 0.5 },
    { name: 'Normal', intensity: 0.8, speed: 1.0 },
    { name: 'Intense', intensity: 1.2, speed: 1.5 },
    { name: 'Performance', intensity: 0.3, speed: 0.3 },
  ];

  const applyPreset = (preset: { intensity: number; speed: number }) => {
    onConfigChange({ ...config, ...preset });
  };

  return (
    <div className={`fixed bottom-4 right-4 z-50 ${className}`}>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="bg-black/20 backdrop-blur-sm border-white/20 text-white hover:bg-white/10"
      >
        <Settings className="w-4 h-4" />
      </Button>

      {isOpen && (
        <Card className="absolute bottom-12 right-0 w-80 bg-black/90 backdrop-blur-sm border-white/20 text-white">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2">
              <Monitor className="w-4 h-4" />
              Background Controls
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Enable/Disable */}
            <div className="flex items-center justify-between">
              <span className="text-sm">Enable Effects</span>
              <Switch
                checked={config.enabled}
                onCheckedChange={handleEnabledChange}
              />
            </div>

            {config.enabled && (
              <>
                {/* Intensity Control */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Intensity</span>
                    <span className="text-xs text-gray-400">{config.intensity.toFixed(1)}</span>
                  </div>
                  <Slider
                    value={[config.intensity]}
                    onValueChange={handleIntensityChange}
                    min={0.1}
                    max={2.0}
                    step={0.1}
                    className="w-full"
                  />
                </div>

                {/* Speed Control */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Speed</span>
                    <span className="text-xs text-gray-400">{config.speed.toFixed(1)}</span>
                  </div>
                  <Slider
                    value={[config.speed]}
                    onValueChange={handleSpeedChange}
                    min={0.1}
                    max={3.0}
                    step={0.1}
                    className="w-full"
                  />
                </div>

                {/* Presets */}
                <div className="space-y-2">
                  <span className="text-sm">Presets</span>
                  <div className="grid grid-cols-2 gap-2">
                    {presets.map((preset) => (
                      <Button
                        key={preset.name}
                        variant="outline"
                        size="sm"
                        onClick={() => applyPreset(preset)}
                        className="bg-white/5 border-white/20 text-white hover:bg-white/10 text-xs"
                      >
                        {preset.name === 'Performance' && <Zap className="w-3 h-3 mr-1" />}
                        {preset.name}
                      </Button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default BackgroundControls;