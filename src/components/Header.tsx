import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Code, Monitor, Smartphone } from 'lucide-react';
import { removeBackground, loadImageFromUrl } from '@/lib/imageUtils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [processedLogoUrl, setProcessedLogoUrl] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const processLogo = async () => {
      try {
        const img = await loadImageFromUrl('/lovable-uploads/1580f568-fd91-4b37-8d9c-642de3fb7f06.png');
        const processedBlob = await removeBackground(img);
        const processedUrl = URL.createObjectURL(processedBlob);
        setProcessedLogoUrl(processedUrl);
      } catch (error) {
        console.error('Error processing logo:', error);
        // Fallback to original image
        setProcessedLogoUrl('/lovable-uploads/1580f568-fd91-4b37-8d9c-642de3fb7f06.png');
      }
    };

    processLogo();

    return () => {
      if (processedLogoUrl) {
        URL.revokeObjectURL(processedLogoUrl);
      }
    };
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Serviços', href: '#services' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Sobre', href: '#about' },
    { label: 'Contato', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-card/95 backdrop-blur-md shadow-card border-b border-border/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative">
              {processedLogoUrl ? (
                <img 
                  src={processedLogoUrl} 
                  alt="Montev Logo" 
                  className="w-8 h-8 rounded-full"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 animate-pulse"></div>
              )}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Montev
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white hover:text-primary transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="sm">
              Começar Projeto
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border/50">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-300 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button variant="hero" size="sm" className="mt-4 self-start">
                Começar Projeto
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;