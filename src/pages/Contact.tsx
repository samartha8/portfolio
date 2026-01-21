import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
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
    <div className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-it/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-model/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">Get In Touch</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 tracking-tight">
            Let's create something <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
              extraordinary.
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Have a project in mind? Whether it's code, content, or creative direction — I'm ready to collaborate.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">

          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <h2 className="text-3xl font-heading font-bold mb-8 text-white">Contact Information</h2>

              <div className="space-y-8">
                <a href="mailto:workwithsamartha@gmail.com" className="flex items-start gap-6 group/item">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover/item:bg-it/20 group-hover/item:border-it/30 transition-all duration-300">
                    <Mail className="w-6 h-6 text-muted-foreground group-hover/item:text-it transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">Email</h3>
                    <span className="text-lg md:text-xl text-white font-medium group-hover/item:text-it transition-colors">workwithsamartha@gmail.com</span>
                  </div>
                </a>

                <a href="tel:+9779843736234" className="flex items-start gap-6 group/item">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover/item:bg-video/20 group-hover/item:border-video/30 transition-all duration-300">
                    <Phone className="w-6 h-6 text-muted-foreground group-hover/item:text-video transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">Phone</h3>
                    <span className="text-lg md:text-xl text-white font-medium group-hover/item:text-video transition-colors">+977 9843736234</span>
                  </div>
                </a>

                <div className="flex items-start gap-6 group/item">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover/item:bg-model/20 group-hover/item:border-model/30 transition-all duration-300">
                    <MapPin className="w-6 h-6 text-muted-foreground group-hover/item:text-model transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">Location</h3>
                    <span className="text-lg md:text-xl text-white font-medium">Lalitpur, Nepal</span>
                    <p className="text-sm text-muted-foreground/60 mt-1">Available for Remote Work</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Mini-Card */}
            <div className="glass-panel p-8 rounded-3xl">
              <h3 className="text-lg font-heading font-bold mb-6 text-white">My Services</h3>
              <div className="flex flex-wrap gap-3">
                {["Full Stack Development", "Video Editing", "Content Creation", "Modeling"].map((service, i) => (
                  <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-white/10 hover:border-white/20 transition-colors cursor-default">
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-300">Name</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      {...register("name")}
                      className={`bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-white/30 focus:ring-0 rounded-xl h-12 ${errors.name ? "border-destructive/50" : ""}`}
                    />
                    {errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-300">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      {...register("email")}
                      className={`bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-white/30 focus:ring-0 rounded-xl h-12 ${errors.email ? "border-destructive/50" : ""}`}
                    />
                    {errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-gray-300">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="Project Inquiry..."
                    {...register("subject")}
                    className={`bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-white/30 focus:ring-0 rounded-xl h-12 ${errors.subject ? "border-destructive/50" : ""}`}
                  />
                  {errors.subject && <p className="text-xs text-destructive mt-1">{errors.subject.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-300">Message</Label>
                  <Textarea
                    id="message"
                    rows={6}
                    placeholder="Tell me about your project details..."
                    {...register("message")}
                    className={`bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-white/30 focus:ring-0 rounded-xl resize-none ${errors.message ? "border-destructive/50" : ""}`}
                  />
                  {errors.message && <p className="text-xs text-destructive mt-1">{errors.message.message}</p>}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 text-base rounded-xl font-medium bg-white text-black hover:bg-gray-200 transition-all duration-300 group mt-4 hover:shadow-lg hover:shadow-white/10"
                >
                  {isSubmitting ? "Sending..." : (
                    <span className="flex items-center gap-2">
                      Send Message <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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

