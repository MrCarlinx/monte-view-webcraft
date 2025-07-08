import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Code2, Palette, Zap } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="MonteV Hero" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-primary/20 rounded-lg rotate-45 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-8 h-8 bg-accent/40 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-20 right-1/3 w-16 h-16 border-2 border-primary/30 rounded-full animate-spin"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card/20 backdrop-blur-sm border border-border/30 rounded-full px-4 py-2 mb-8">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-primary-foreground text-sm">Transformando ideias em realidade digital</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Criamos Sites que{' '}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Impressionam
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Na MonteV, transformamos sua visão em experiências digitais extraordinárias. 
            Especializados em criação, desenvolvimento e otimização de sites que convertem.
          </p>

          {/* CTAs */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-16">
            <Button variant="glass" size="lg" className="group">
              Ver Nosso Trabalho
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="ghost" size="lg" className="text-primary-foreground border border-primary-foreground/30 hover:bg-primary-foreground/10">
              <Play className="w-4 h-4 mr-2" />
              Como Funciona
            </Button>
          </div>

          {/* Feature Icons */}
          <div className="flex flex-wrap justify-center gap-8 text-primary-foreground/60">
            <div className="flex items-center gap-2">
              <Code2 className="w-5 h-5" />
              <span className="text-sm">Desenvolvimento</span>
            </div>
            <div className="flex items-center gap-2">
              <Palette className="w-5 h-5" />
              <span className="text-sm">Design</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              <span className="text-sm">Performance</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;