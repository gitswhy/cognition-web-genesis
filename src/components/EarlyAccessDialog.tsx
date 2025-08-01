import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Mail, CheckCircle } from "lucide-react";

interface EarlyAccessDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const EarlyAccessDialog: React.FC<EarlyAccessDialogProps> = ({ open, onOpenChange }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "Email required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase
        .from('early_access' as any)
        .insert([{ email: email.trim(), source: 'pro_trial' }]);

      if (error) {
        if (error.code === '23505') {
          // Unique constraint violation - email already exists
          setSuccess(true);
        } else {
          throw error;
        }
      } else {
        setSuccess(true);
      }
    } catch (error: any) {
      console.error('Error signing up for early access:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setEmail('');
    setSuccess(false);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {success ? (
              <>
                <CheckCircle className="h-5 w-5 text-green-500" />
                Welcome to Early Access!
              </>
            ) : (
              <>
                <Mail className="h-5 w-5 text-terminal-blue" />
                Join Early Access
              </>
            )}
          </DialogTitle>
          <DialogDescription>
            {success ? (
              "Thank you for joining our early access program! We'll notify you as soon as Gitswhy OS Pro is available."
            ) : (
              "Get exclusive early access to Gitswhy OS Pro Edition with advanced features and enterprise capabilities."
            )}
          </DialogDescription>
        </DialogHeader>

        {success ? (
          <div className="space-y-4">
            <div className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-3" />
              <h3 className="font-semibold text-green-700 dark:text-green-300 mb-2">
                You're on the list!
              </h3>
              <p className="text-sm text-green-600 dark:text-green-400">
                We'll send you an email as soon as early access opens.
              </p>
            </div>
            <Button onClick={handleClose} className="w-full" variant="terminal-blue">
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="early-access-email">Email Address</Label>
              <Input
                id="early-access-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                disabled={loading}
              />
            </div>
            
            <div className="flex gap-2">
              <Button
                type="submit"
                disabled={loading}
                className="flex-1"
                variant="terminal-blue"
              >
                {loading ? "Joining..." : "Join Early Access"}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
                disabled={loading}
              >
                Cancel
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};