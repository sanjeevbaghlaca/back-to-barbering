import { Phone, MapPin, Clock, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Layout from "@/components/Layout";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "We'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container text-center">
          <h1 className="font-display text-4xl font-bold md:text-5xl">Get in Touch</h1>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/70">
            Drop by anytime, give us a call, or send a message. We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="container py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Info */}
          <div className="space-y-6">
            <Card className="border-none shadow-md">
              <CardContent className="space-y-5 p-6">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-sm text-muted-foreground">
                      Plaza, 425 West St North, Fittons Rd W Unit 24, Orillia, ON L3V 7R2
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href="tel:7053254247" className="text-sm text-accent hover:underline">
                      (705) 325-4247
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="font-semibold">Hours</p>
                    <p className="text-sm text-muted-foreground">Open – Closes 6 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="font-semibold">Popular Times</p>
                    <p className="text-sm text-muted-foreground">
                      Wednesdays can be busier mid-day. Come early or later in the afternoon for shorter waits.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <div className="overflow-hidden rounded-lg shadow-md">
              <iframe
                title="Back To Barbering Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2835.7!2d-79.4225!3d44.6175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s425+West+St+North+Orillia+ON!5e0!3m2!1sen!2sca!4v1700000000000"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <Card className="border-none shadow-md">
            <CardContent className="p-6">
              <h2 className="font-display text-2xl font-bold">Send Us a Message</h2>
              <p className="mt-1 text-sm text-muted-foreground">We'll get back to you as soon as we can.</p>
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    maxLength={100}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email or Phone</Label>
                  <Input
                    id="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    maxLength={255}
                    placeholder="you@email.com or (705) 555-1234"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    maxLength={1000}
                    rows={5}
                    placeholder="How can we help?"
                  />
                </div>
                <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
