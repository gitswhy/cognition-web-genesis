import React, { memo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface OptimizedCardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'hover' | 'animated';
  delay?: number;
}

const OptimizedCard = memo<OptimizedCardProps>(({ 
  title, 
  children, 
  className, 
  variant = 'default',
  delay = 0 
}) => {
  const baseClasses = "transition-all duration-300 will-change-transform";
  
  const variantClasses = {
    default: "",
    hover: "hover:scale-105 hover:shadow-lg hover:-translate-y-1",
    animated: "animate-fade-in hover:scale-105 hover:shadow-lg"
  };

  return (
    <Card 
      className={cn(
        baseClasses,
        variantClasses[variant],
        className
      )}
      style={{ 
        animationDelay: variant === 'animated' ? `${delay}ms` : undefined,
        contain: 'layout style paint'
      }}
    >
      {title && (
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
      )}
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
});

OptimizedCard.displayName = 'OptimizedCard';

export default OptimizedCard;