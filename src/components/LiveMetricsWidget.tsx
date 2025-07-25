import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, Shield, Zap, TrendingUp } from 'lucide-react';

interface MetricData {
  label: string;
  value: string;
  change: string;
  icon: React.ComponentType<any>;
  color: string;
}

const LiveMetricsWidget = () => {
  const [metrics] = useState<MetricData[]>([
    {
      label: 'Threat Detection Rate',
      value: '99.8%',
      change: '+0.3%',
      icon: Shield,
      color: 'text-terminal-green'
    },
    {
      label: 'Patching Speed',
      value: '10x',
      change: 'Faster',
      icon: Zap,
      color: 'text-terminal-blue'
    },
    {
      label: 'Security Score',
      value: '94/100',
      change: '+12',
      icon: TrendingUp,
      color: 'text-yellow-400'
    },
    {
      label: 'System Uptime',
      value: '99.99%',
      change: '24/7',
      icon: Activity,
      color: 'text-terminal-green'
    }
  ]);

  const [animatedValues, setAnimatedValues] = useState<Record<string, number>>({});

  useEffect(() => {
    // Simulate live data updates
    const interval = setInterval(() => {
      setAnimatedValues(prev => ({
        ...prev,
        threats: Math.floor(Math.random() * 1000) + 5000,
        patches: Math.floor(Math.random() * 50) + 200,
        scans: Math.floor(Math.random() * 100) + 800
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-mono mb-4 text-terminal-blue">
            Live Security Metrics
          </h2>
          <p className="text-lg text-muted-foreground">
            Real-time performance data from Gitswhy OS Pro Edition
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card key={metric.label} className="bg-terminal-surface/50 backdrop-blur-sm border-terminal-blue/20 hover:scale-105 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Icon className={`w-8 h-8 ${metric.color}`} />
                    <span className={`text-sm font-mono ${metric.color} animate-pulse`}>
                      {metric.change}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className={`text-3xl font-mono font-bold ${metric.color} animate-pulse`}>
                      {metric.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {metric.label}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Live Activity Feed */}
        <Card className="max-w-4xl mx-auto bg-terminal-surface/50 backdrop-blur-sm border-terminal-blue/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-terminal-blue">
              <Activity className="w-5 h-5" />
              Live Activity Feed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-terminal-bg/50">
                <div className="w-2 h-2 bg-terminal-green rounded-full animate-pulse" />
                <span className="font-mono text-sm">
                  <span className="text-terminal-green">✓</span> Blocked SQL injection attempt - user-auth.js
                </span>
                <span className="text-xs text-muted-foreground ml-auto">
                  {animatedValues.threats || 5247} threats blocked today
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-terminal-bg/50">
                <div className="w-2 h-2 bg-terminal-blue rounded-full animate-pulse" />
                <span className="font-mono text-sm">
                  <span className="text-terminal-blue">⚡</span> Auto-patched critical vulnerability - express@4.18.2
                </span>
                <span className="text-xs text-muted-foreground ml-auto">
                  {animatedValues.patches || 247} auto-patches applied
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-terminal-bg/50">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                <span className="font-mono text-sm">
                  <span className="text-yellow-400">📊</span> Security scan completed - 0 high-risk issues found
                </span>
                <span className="text-xs text-muted-foreground ml-auto">
                  {animatedValues.scans || 892} scans completed
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LiveMetricsWidget;