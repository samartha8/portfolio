import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address").max(255),
  subject: z.string().min(5, "Subject must be at least 5 characters").max(200),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_g5dv62m",
        "template_9xzxb0o",
        {
          from_name: data.name,
          reply_to: data.email,
          subject: data.subject,
          message: data.message,
          to_email: "workwithsamartha@gmail.com"
        },
        "dsUNF5gA9hQHqVBch"
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      reset();
    } catch (error) {
      console.error("Email sending error:", error);
      toast({
        title: "Failed to Send",
        description: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-16 pb-24 bg-background">
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >

          <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6">Contact / Get In Touch</div>
          <h1 className="editorial-title max-w-4xl">
            Let's create something <br />
            <span className="text-primary italic">extraordinary.</span>
          </h1>
          <p className="text-2xl text-muted-foreground max-w-2xl font-light leading-relaxed mt-8">
            Have a project in mind? Whether it's filmmaking, design, or creative direction — I'm ready to collaborate.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 space-y-12"
          >
            <div className="space-y-12">
                <div className="group">
                    <h3 className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Email</h3>
                    <a href="mailto:workwithsamartha@gmail.com" className="text-2xl md:text-3xl font-heading hover:text-primary transition-colors">
                        workwithsamartha@gmail.com
                    </a>
                </div>

                <div className="group">
                    <h3 className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Phone</h3>
                    <a href="tel:+9779843736234" className="text-2xl md:text-3xl font-heading hover:text-primary transition-colors">
                        +977 9843736234
                    </a>
                </div>

                <div className="group">
                    <h3 className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Location</h3>
                    <div className="text-2xl md:text-3xl font-heading">
                        Lalitpur, Nepal
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 uppercase tracking-tight">Available for Remote Work</p>
                </div>
            </div>

            <div className="pt-12 border-t border-border">
                <h3 className="text-xs font-bold text-primary uppercase tracking-widest mb-6">Socials</h3>
                <div className="flex flex-wrap gap-x-8 gap-y-4">
                    <a href="https://www.instagram.com/_samartha_._/" target="_blank" rel="noopener noreferrer" className="text-lg font-heading hover:text-primary transition-colors">Instagram</a>
                    <a href="https://www.linkedin.com/in/samartha-shakya-032767254/" target="_blank" rel="noopener noreferrer" className="text-lg font-heading hover:text-primary transition-colors">LinkedIn</a>
                </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-8"
          >
            <div className="olive-card border-none bg-white p-12 md:p-16">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <Label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-primary">Name</Label>
                    <Input
                      id="name"
                      placeholder="Samartha Shakya"
                      {...register("name")}
                      className={`bg-transparent border-b border-t-0 border-x-0 border-border rounded-none px-0 focus:border-primary transition-all h-12 shadow-none ${errors.name ? "border-destructive" : ""}`}
                    />
                    {errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-primary">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="hello@example.com"
                      {...register("email")}
                      className={`bg-transparent border-b border-t-0 border-x-0 border-border rounded-none px-0 focus:border-primary transition-all h-12 shadow-none ${errors.email ? "border-destructive" : ""}`}
                    />
                    {errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest text-primary">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="Project Inquiry"
                    {...register("subject")}
                    className={`bg-transparent border-b border-t-0 border-x-0 border-border rounded-none px-0 focus:border-primary transition-all h-12 shadow-none ${errors.subject ? "border-destructive" : ""}`}
                  />
                  {errors.subject && <p className="text-xs text-destructive mt-1">{errors.subject.message}</p>}
                </div>

                <div className="space-y-3">
                  <Label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-primary">Message</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    placeholder="Tell me about your vision..."
                    {...register("message")}
                    className={`bg-transparent border-b border-t-0 border-x-0 border-border rounded-none px-0 focus:border-primary transition-all resize-none shadow-none ${errors.message ? "border-destructive" : ""}`}
                  />
                  {errors.message && <p className="text-xs text-destructive mt-1">{errors.message.message}</p>}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto h-16 px-12 text-sm uppercase tracking-widest rounded-none font-bold bg-primary text-white hover:bg-black transition-all duration-300 group mt-8"
                >
                  {isSubmitting ? "Sending..." : (
                    <span className="flex items-center gap-4">
                      Send Inquiry <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;


