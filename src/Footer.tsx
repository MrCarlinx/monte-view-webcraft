import { Button } from '@/components/ui/button';
import { 
  Mail, 
  Phone, 
  MapPin,
  Linkedin,
  Instagram,
  Github,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-montev-dark to-montev-grey text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">M</span>
              </div>
              <span className="text-xl font-bold">MonteV</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Transformamos ideias em experiências digitais extraordinárias. 
              Especializados em criação, desenvolvimento e otimização de sites 
              que realmente convertem.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Github, href: '#', label: 'GitHub' }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <nav className="space-y-2">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Serviços', href: '#services' },
                { label: 'Portfólio', href: '#portfolio' },
                { label: 'Sobre', href: '#about' },
                { label: 'Contato', href: '#contact' }
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Mail className="w-4 h-4" />
                <span className="text-sm">contato@montev.com.br</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+55 (11) 9999-9999</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-primary-foreground/60">
              © {currentYear} MonteV. Todos os direitos reservados.
            </div>
            <div className="flex items-center gap-6">
              <a 
                href="#" 
                className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                Política de Privacidade
              </a>
              <a 
                href="#" 
                className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                Termos de Uso
              </a>
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/10"
              >
                <ArrowUp className="w-4 h-4 mr-1" />
                Voltar ao Topo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;