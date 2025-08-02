import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Calculator, DollarSign, TrendingUp, ArrowRight, Info, Clock, Shield, Zap } from 'lucide-react';

const ROICalculator = () => {
  const [teamSize, setTeamSize] = useState([10]);
  const [hourlyRate, setHourlyRate] = useState([75]);
  const [timeSavedPerWeek, setTimeSavedPerWeek] = useState([15]);
  const [workWeeksPerYear] = useState(48);

  // Calculations
  const annualHoursPerDev = timeSavedPerWeek[0] * workWeeksPerYear;
  const totalValueSaved = annualHoursPerDev * hourlyRate[0] * teamSize[0];
  const annualSubscriptionCost = 300 * teamSize[0]; // $300/dev for Team tier
  const netSavings = totalValueSaved - annualSubscriptionCost;
  const roiPercentage = ((netSavings / annualSubscriptionCost) * 100);

  // Breakdown calculations
  const selfHealingHours = Math.round(annualHoursPerDev * 0.4); // 40% from self-healing
  const scanningHours = Math.round(annualHoursPerDev * 0.35); // 35% from scanning
  const intentDetectionHours = Math.round(annualHoursPerDev * 0.25); // 25% from intent detection

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(Math.round(num));
  };

  return (
    <TooltipProvider>
      <section className="padding-responsive bg-terminal-surface/10 safe-area-padding">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-scale-hero font-bold font-mono mb-4 optimize-legibility flex items-center justify-center gap-3">
                <Calculator className="w-8 h-8 text-terminal-blue" />
                ROI Calculator
              </h2>
              <p className="text-scale-mobile lg:text-xl text-muted-foreground max-w-2xl mx-auto">
                Calculate your team's potential savings with Gitswhy OS automation features
              </p>
            </div>
            
            <div className="grid-responsive-2">
              {/* Input Section */}
              <Card className="bg-terminal-surface/50 backdrop-blur-sm border-terminal-blue/20 mobile-focus-ring">
                <CardHeader className="card-responsive">
                  <CardTitle className="text-scale-heading text-terminal-blue">
                    Team Configuration
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-responsive card-responsive">
                  {/* Team Size */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Label className="text-base font-medium">
                        Team Size: {teamSize[0]} developers
                      </Label>
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="w-4 h-4 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Number of developers on your team who will use Gitswhy OS</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                    <Slider
                      min={1}
                      max={500}
                      step={1}
                      value={teamSize}
                      onValueChange={setTeamSize}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>1 dev</span>
                      <span>500 devs</span>
                    </div>
                  </div>

                  {/* Hourly Rate */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Label className="text-base font-medium">
                        Avg Developer Rate: ${hourlyRate[0]}/hour
                      </Label>
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="w-4 h-4 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Average fully loaded hourly cost per developer including salary, benefits and overhead</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                    <Slider
                      min={25}
                      max={150}
                      step={5}
                      value={hourlyRate}
                      onValueChange={setHourlyRate}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>$25/hr</span>
                      <span>$150/hr</span>
                    </div>
                  </div>

                  {/* Time Saved */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Label className="text-base font-medium">
                        Time Saved: {timeSavedPerWeek[0]} hours/week
                      </Label>
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="w-4 h-4 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs">
                          <p>Research shows DevSecOps automation reduces alert fatigue by 60% and manual security tasks by 70%</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                    <Slider
                      min={5}
                      max={20}
                      step={1}
                      value={timeSavedPerWeek}
                      onValueChange={setTimeSavedPerWeek}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>5 hrs/week</span>
                      <span>20 hrs/week</span>
                    </div>
                  </div>

                  {/* Work Weeks */}
                  <div className="space-y-2">
                    <Label className="text-base font-medium text-muted-foreground">
                      Work weeks per year: {workWeeksPerYear}
                    </Label>
                  </div>
                </CardContent>
              </Card>

              {/* Results Section */}
              <Card className="bg-gradient-to-br from-terminal-blue/10 to-terminal-green/10 backdrop-blur-sm border-terminal-blue/30 mobile-focus-ring">
                <CardHeader className="card-responsive">
                  <CardTitle className="text-scale-heading text-terminal-blue flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    ROI Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-responsive card-responsive">
                  {/* Key Metrics */}
                  <div className="grid-responsive-2">
                    <div className="text-center card-responsive bg-terminal-surface/30 rounded-lg">
                      <DollarSign className="w-6 h-6 text-terminal-green mx-auto mb-2" />
                      <div className="text-2xl font-bold text-terminal-green">
                        {formatCurrency(netSavings)}
                      </div>
                      <div className="text-scale-mobile lg:text-sm text-muted-foreground">Net Savings</div>
                    </div>
                    <div className="text-center card-responsive bg-terminal-surface/30 rounded-lg">
                      <TrendingUp className="w-6 h-6 text-terminal-blue mx-auto mb-2" />
                      <div className="text-2xl font-bold text-terminal-blue">
                        {formatNumber(roiPercentage)}%
                      </div>
                      <div className="text-scale-mobile lg:text-sm text-muted-foreground">ROI</div>
                    </div>
                  </div>

                  {/* Breakdown */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-terminal-blue">Time Savings Breakdown</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Shield className="w-4 h-4 text-terminal-green" />
                          <span className="text-sm">Self-healing remediation</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {formatNumber(selfHealingHours * teamSize[0])} hrs/year
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Zap className="w-4 h-4 text-terminal-blue" />
                          <span className="text-sm">Automated scanning</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {formatNumber(scanningHours * teamSize[0])} hrs/year
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-yellow-400" />
                          <span className="text-sm">Intent detection</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {formatNumber(intentDetectionHours * teamSize[0])} hrs/year
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Cost Breakdown */}
                  <div className="space-y-3 pt-4 border-t border-terminal-blue/20">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Total value saved:</span>
                      <span className="font-mono">{formatCurrency(totalValueSaved)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Annual subscription:</span>
                      <span className="font-mono">-{formatCurrency(annualSubscriptionCost)}</span>
                    </div>
                    <div className="flex justify-between text-lg font-semibold border-t border-terminal-blue/20 pt-2">
                      <span>Net annual savings:</span>
                      <span className="text-terminal-green font-mono">{formatCurrency(netSavings)}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    className="w-full bg-terminal-blue hover:bg-terminal-blue/90 text-white mobile-button mobile-touch"
                    size="lg"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  
                  <p className="text-scale-mobile text-center text-muted-foreground">
                    No credit card required • 14-day free trial • Cancel anytime
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Additional Information */}
            <div className="mt-12 text-center">
              <p className="text-sm text-muted-foreground max-w-4xl mx-auto">
                Calculations based on industry research showing DevSecOps automation reduces manual security work by 70%, 
                alert fatigue by 60% and vulnerability remediation time by 85%. Your actual savings may vary based on 
                current processes and team efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
};

export default ROICalculator;