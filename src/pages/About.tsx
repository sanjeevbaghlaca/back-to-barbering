import { Scissors, Sparkles, Clock, MessageCircle } from "lucide-react";
import Layout from "@/components/Layout";

const values = [
  {
    icon: Scissors,
    title: "Friendly & Professional",
    text: "Our barbers are skilled, personable, and passionate about the craft. You'll feel at home from the first visit.",
    quote: '"Great service every single time."',
  },
  {
    icon: Sparkles,
    title: "Clean & Bright",
    text: "We take pride in our space. Clean tools, bright decor, and a comfortable atmosphere – just like a barber shop should be.",
    quote: '"Cleanest shop in Orillia."',
  },
  {
    icon: Clock,
    title: "Fast When You Need It",
    text: "In a rush? We'll get you in and out looking sharp with minimal wait. Walk-ins are always welcome.",
    quote: '"Very well priced and quick."',
  },
  {
    icon: MessageCircle,
    title: "Relaxed When You Don't",
    text: "Want to kick back and chat? Our chairs are comfortable and the conversation is always good. Take your time.",
    quote: '"Always a good experience."',
  },
];

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="bg-primary py-20 text-primary-foreground">
      <div className="container text-center">
        <h1 className="font-display text-4xl font-bold md:text-5xl">About Us</h1>
        <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/70">
          Back To Barbering is more than a haircut – it's a part of the community. We've built our
          reputation one great experience at a time.
        </p>
      </div>
    </section>

    {/* Values */}
    <section className="container py-20">
      <div className="grid gap-12 md:gap-16">
        {values.map((v, i) => (
          <div
            key={v.title}
            className={`flex flex-col items-center gap-8 md:flex-row ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
          >
            {/* Icon block */}
            <div className="flex h-48 w-full shrink-0 items-center justify-center rounded-lg bg-secondary md:w-1/3">
              <v.icon className="h-16 w-16 text-accent" />
            </div>

            {/* Text */}
            <div className="flex-1">
              <h2 className="font-display text-2xl font-bold">{v.title}</h2>
              <p className="mt-3 text-muted-foreground">{v.text}</p>
              <p className="mt-4 font-display text-lg italic text-accent">{v.quote}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default About;
