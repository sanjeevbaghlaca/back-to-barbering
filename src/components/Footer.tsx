import { Link } from "react-router-dom";
import { Phone, MapPin, Clock } from "lucide-react";

const Footer = () => (
  <footer className="border-t bg-primary text-primary-foreground">
    <div className="container py-12">
      <div className="grid gap-8 md:grid-cols-3">
        {/* Brand */}
        <div>
          <h3 className="font-display text-lg font-bold">
            Back To <span className="text-accent">Barbering</span>
          </h3>
          <p className="mt-2 text-sm text-primary-foreground/70">
            Orillia's trusted barber shop. Great conversation, great barbers, great service.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">Quick Links</h4>
          <nav className="flex flex-col gap-2 text-sm text-primary-foreground/70">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <Link to="/about" className="hover:text-accent transition-colors">About Us</Link>
            <Link to="/services" className="hover:text-accent transition-colors">Services</Link>
            <Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>
          </nav>
        </div>

        {/* Info */}
        <div className="space-y-3 text-sm text-primary-foreground/70">
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">Contact</h4>
          <div className="flex items-start gap-2">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            <span>425 West St North, Fittons Rd W Unit 24, Orillia, ON L3V 7R2</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 shrink-0 text-accent" />
            <a href="tel:7053254247" className="hover:text-accent transition-colors">(705) 325-4247</a>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 shrink-0 text-accent" />
            <span>Open – Closes 6 PM</span>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Back To Barbering. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
