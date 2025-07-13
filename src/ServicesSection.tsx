import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Code2, 
  Palette, 
  Search, 
  Smartphone, 
  Zap, 
  Shield,
  BarChart3,
  Settings,
  ArrowRight
} from 'lucide-react';
import servicesImage from '@/assets/services-bg.jpg';

const ServicesSection = () => {
  const services = [
    {
      icon: Code2,
      title: 'Desenvolvimento Web',
      description: 'Sites e aplicações web modernas com as últimas tecnologias',
      features: ['React & Next.js', 'TypeScript', 'APIs RESTful', 'Bancos de dados']
    },
    {
      icon: Palette,
      title: 'Design UI/UX',
      description: 'Interfaces intuitivas e experiências de usuário excepcionais',
      features: ['Design System', 'Prototipagem', 'Wireframes', 'Testes de Usabilidade']
    },
    {
      icon: Smartphone,
      title: 'Responsivo & Mobile',
      description: 'Sites que funcionam perfeitamente em todos os dispositivos',
      features: ['Mobile First', 'Progressive Web Apps', 'Cross-browser', 'Touch Friendly']
    },
    {
      icon: Search,
      title: 'SEO & Performance',
      description: 'Otimização para mecanismos de busca e velocidade',
      features: ['Core Web Vitals', 'Schema Markup', 'Meta Tags', 'Site Speed']
    },
    {
      icon: Shield,
      title: 'Segurança & Confiabilidade',
      description: 'Proteção avançada e backup automático',
      features: ['SSL Certificates', 'Firewall', 'Backup Daily', 'Monitoring 24/7']
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Relatórios detalhados e métricas de performance',
      features: ['Google Analytics', 'Heatmaps', 'A/B Testing', 'Conversion Tracking']
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src={servicesImage} 
          alt="Services Background" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/20 rounded-full px-4 py-2 mb-4">
            <Settings className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Nossos Serviços</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Soluções Completas em{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Desenvolvimento Web
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Da concepção ao lançamento, oferecemos todos os serviços necessários 
            para criar experiências digitais que impulsionam seu negócio.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 bg-gradient-card border-border/50"
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-primary rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </div>
                </div>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button variant="ghost" className="w-full group/btn">
                  Saiba Mais
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-card rounded-2xl p-8 md:p-12 border border-border/50 shadow-card">
            <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Pronto para começar seu projeto?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Entre em contato conosco e vamos transformar sua ideia em realidade digital.
            </p>
            <Button variant="glow" size="lg">
              Solicitar Orçamento
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;