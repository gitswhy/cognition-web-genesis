import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, ArrowLeft, Check, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProEditionBackground from '@/components/background/ProEditionBackground';
const Wishlist = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    teamSize: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Log the form data (replace with actual API integration)
    console.log('Wishlist signup:', formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };
  const isFormValid = formData.name.trim() && formData.email.trim();
  return <div className="relative">
      <ProEditionBackground />
      <Header />
      
      <div className="min-h-screen flex items-center justify-center padding-responsive px-3 sm:px-4">
        <div className="container-responsive max-w-2xl mx-auto relative z-10 py-[20px] my-[10px]">

          <Card className="bg-terminal-surface/50 backdrop-blur-sm border-terminal-blue/20 animate-slide-up">
            <CardHeader className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2">
                <Star className="w-6 h-6 text-terminal-blue" />
                <CardTitle className="text-scale-hero font-mono text-foreground">
                  Join the Gitswhy OS Pro Wishlist
                </CardTitle>
                <Star className="w-6 h-6 text-terminal-blue" />
              </div>
              <p className="text-scale-subtitle text-muted-foreground max-w-lg mx-auto">
                Sign up for early access to Pro features like AI auto-patching and voice commands – 
                we'll notify you when your 30-day trial is ready.
              </p>
            </CardHeader>

            <CardContent className="space-y-6">
              {!isSubmitted ? <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">
                      Name *
                    </Label>
                    <Input id="name" name="name" type="text" placeholder="Your full name" value={formData.name} onChange={handleInputChange} required className="w-full" />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email *
                    </Label>
                    <Input id="email" name="email" type="email" placeholder="your.email@company.com" value={formData.email} onChange={handleInputChange} required className="w-full" />
                  </div>

                  {/* Company Field */}
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-medium">
                      Company (Optional)
                    </Label>
                    <Input id="company" name="company" type="text" placeholder="Your company name" value={formData.company} onChange={handleInputChange} className="w-full" />
                  </div>

                  {/* Team Size Field */}
                  <div className="space-y-2">
                    <Label htmlFor="teamSize" className="text-sm font-medium">
                      Team Size (Optional)
                    </Label>
                    <Input id="teamSize" name="teamSize" type="text" placeholder="e.g., 5-10 developers" value={formData.teamSize} onChange={handleInputChange} className="w-full" />
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" disabled={!isFormValid || isSubmitting} className="w-full bg-terminal-blue hover:bg-terminal-blue/90 text-white">
                    {isSubmitting ? <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Joining Wishlist...
                      </> : <>
                        <Star className="w-4 h-4 mr-2" />
                        Join Wishlist
                      </>}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    We'll only use your email to notify you about Pro Edition availability. 
                    No spam, ever.
                  </p>
                </form> : (/* Success State */
            <div className="text-center space-y-4 py-8">
                  <div className="flex items-center justify-center">
                    <div className="w-16 h-16 bg-terminal-green/20 rounded-full flex items-center justify-center animate-pulse">
                      <Check className="w-8 h-8 text-terminal-green" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold font-mono text-terminal-green">
                      Thanks! You're on the list
                    </h3>
                    <p className="text-muted-foreground">
                      Expect an email soon with updates about your Pro Edition trial access.
                    </p>
                  </div>

                  <div className="pt-4">
                    <Link to="/pro-edition">
                      <Button variant="outline" className="border-terminal-blue/30 text-terminal-blue hover:bg-terminal-blue/10">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Pro Edition
                      </Button>
                    </Link>
                  </div>
                </div>)}
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="mt-8 text-center text-sm text-muted-foreground animate-slide-up space-y-2">
            <p>
              Join 500+ developers already on the Pro Edition wishlist
            </p>
            <p className="text-xs">
              Patented by: Atharve Malviya
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>;
};
export default Wishlist;