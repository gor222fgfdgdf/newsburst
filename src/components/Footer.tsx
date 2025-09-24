import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-muted-foreground/20 mt-auto py-8">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Links */}
          <div className="flex flex-wrap justify-center md:justify-start space-x-6 text-sm">
            <Link 
              to="/privacy-policy" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Polityka prywatności
            </Link>
            <Link 
              to="/terms-of-service" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Regulamin
            </Link>
            <Link 
              to="/contact" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Kontakt
            </Link>
            <Link 
              to="/about" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              O nas
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-xs text-muted-foreground">
            © 2024 ZUS Informacje. Wszystkie prawa zastrzeżone.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;