import { Scissors, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

const services = [
  { name: "Men's Haircut", desc: "Classic cuts, fades, and modern styles." },
  { name: "Beard Trim", desc: "Shape and clean up your beard." },
  { name: "Shave", desc: "A clean, close traditional shave." },
  { name: "Kids Haircut", desc: "Patient, friendly service for the little ones." },
  { name: "Senior Haircut", desc: "Comfortable cuts for our senior community." },
  { name: "Line Up / Trim", desc: "Quick clean-up between full cuts." },
];

const Services = () => (
  <Layout>
    {/* Hero */}
    <section className="bg-primary py-20 text-primary-foreground">
      <div className="container text-center">
        <h1 className="font-display text-4xl font-bold md:text-5xl">Our Services</h1>
        <p className="mx-auto mt-4 max-w-xl text-primary-foreground/70">
          Quality cuts at competitive prices. Walk-ins welcome with minimal wait time.
        </p>
      </div>
    </section>

    {/* Services grid */}
    <section className="container py-20">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <Card key={s.name} className="border-none shadow-md transition-shadow hover:shadow-lg">
            <CardContent className="p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                <Scissors className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold">{s.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 rounded-lg bg-primary p-10 text-center text-primary-foreground">
        <h2 className="font-display text-2xl font-bold md:text-3xl">Ready for a Fresh Cut?</h2>
        <p className="mt-2 text-primary-foreground/70">Walk-ins welcome. Competitive pricing. Minimal wait.</p>
        <Button asChild size="lg" className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90">
          <a href="tel:7053254247">
            <Phone className="mr-2 h-4 w-4" />
            Call (705) 325-4247
          </a>
        </Button>
      </div>
    </section>
  </Layout>
);

export default Services;
