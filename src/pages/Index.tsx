import { Phone, MapPin, Star, Scissors, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

const highlights = [
  { icon: Star, label: "238+ Reviews", sub: "4.7★ Average" },
  { icon: Users, label: "Walk-ins Welcome", sub: "Minimal Wait" },
  { icon: Sparkles, label: "Clean & Spacious", sub: "Bright Atmosphere" },
];

const reviews = [
  { name: "Mike R.", text: "Very well priced. The barbers here are skilled and friendly. Always leave looking sharp.", rating: 5 },
  { name: "Jason T.", text: "Great service every time. No long waits and the guys always remember how I like my hair.", rating: 5 },
  { name: "Dave L.", text: "Always a good experience. Clean shop, good conversation, and a solid haircut.", rating: 5 },
];

const galleryPlaceholders = [
  { label: "Shop Interior", bg: "from-muted to-secondary" },
  { label: "Classic Cut", bg: "from-secondary to-muted" },
  { label: "The Team", bg: "from-muted to-secondary" },
  { label: "Atmosphere", bg: "from-secondary to-muted" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(38_65%_50%/0.08),transparent_70%)]" />
        <div className="container relative py-20 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
              <Scissors className="h-4 w-4" />
              Est. in Orillia, ON
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight md:text-6xl">
              Orillia's Trusted Barber Shop –{" "}
              <span className="text-accent">4.7★ Rated</span>
            </h1>
            <p className="mt-5 text-lg text-primary-foreground/70 md:text-xl">
              Great conversation, great barbers, and great service.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <a href="tel:7053254247">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=425+West+St+North+Orillia+ON"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  Get Directions
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="-mt-8 relative z-10">
        <div className="container">
          <div className="grid gap-4 md:grid-cols-3">
            {highlights.map((h) => (
              <Card key={h.label} className="border-none shadow-lg">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <h.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold">{h.label}</p>
                    <p className="text-sm text-muted-foreground">{h.sub}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="container py-20 text-center">
        <h2 className="font-display text-3xl font-bold md:text-4xl">Your Neighbourhood Barber</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          At Back To Barbering, we keep things simple – skilled barbers, friendly conversation, competitive pricing,
          and minimal wait times. Whether you need a quick trim or a classic cut, we've got you covered in a clean,
          bright, and welcoming space.
        </p>
      </section>

      {/* Reviews */}
      <section className="bg-secondary py-20">
        <div className="container">
          <h2 className="text-center font-display text-3xl font-bold md:text-4xl">What Our Customers Say</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {reviews.map((r) => (
              <Card key={r.name} className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="mb-3 flex gap-0.5">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="italic text-muted-foreground">"{r.text}"</p>
                  <p className="mt-4 text-sm font-semibold">— {r.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="container py-20">
        <h2 className="text-center font-display text-3xl font-bold md:text-4xl">Inside the Shop</h2>
        <p className="mt-2 text-center text-muted-foreground">A look at our clean, bright, and welcoming space.</p>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {galleryPlaceholders.map((g) => (
            <div
              key={g.label}
              className={`flex aspect-square items-center justify-center rounded-lg bg-gradient-to-br ${g.bg}`}
            >
              <span className="text-sm font-medium text-muted-foreground">{g.label}</span>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Index;
