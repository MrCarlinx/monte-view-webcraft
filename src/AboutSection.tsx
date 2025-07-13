import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Users, 
  Award, 
  Clock, 
  Heart,
  Target,
  Lightbulb,
  Rocket,
  ArrowRight
} from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Users, label: 'Clientes Satisfeitos', value: '200+' },
    { icon: Award, label: 'Projetos Entregues', value: '350+' },
    { icon: Clock, label: 'Anos de Experiência', value: '5+' },
    { icon: Heart, label: 'Taxa de Satisfação', value: '99%' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Foco no Cliente',
      description: 'Seu sucesso é nossa prioridade. Trabalhamos incansavelmente para superar suas expectativas.'
    },
    {
      icon: Lightbulb,
      title: 'Inovação Constante',
      description: 'Sempre explorando novas tecnologias e metodologias para entregar soluções de vanguarda.'
    },
    {
      icon: Rocket,
      title: 'Entrega Rápida',
      description: 'Processos otimizados e equipe experiente para entregar projetos no prazo combinado.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Sobre a MonteV</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Somos Especialistas em{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Criar Experiências
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A MonteV nasceu da paixão por tecnologia e design. Nossa equipe multidisciplinar 
            combina criatividade, expertise técnica e visão estratégica para entregar 
            soluções digitais que realmente fazem a diferença.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <Card key={stat.label} className="text-center bg-card border-border/50 shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-xl mb-4">
                  <stat.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Nossa Missão é Transformar Ideias em Realidade Digital
            </h3>
            <div className="space-y-6 text-muted-foreground">
              <p>
                Acreditamos que cada projeto é único e merece uma abordagem personalizada. 
                Nossa metodologia combina análise profunda do seu negócio, planejamento 
                estratégico e execução impecável.
              </p>
              <p>
                Desde 2019, ajudamos empresas de todos os tamanhos a estabelecer uma 
                presença digital forte e eficaz. Nossa experiência abrange desde startups 
                inovadoras até grandes corporações.
              </p>
            </div>
            
            <div className="mt-8">
              <Button variant="glow" size="lg">
                Conheça Nossa Equipe
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Right Content - Values */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <Card key={value.title} className="bg-gradient-card border-border/50 p-6 hover:shadow-card transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-primary rounded-xl flex-shrink-0">
                    <value.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Nosso Processo de Trabalho
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Descoberta', desc: 'Entendemos suas necessidades e objetivos' },
              { step: '02', title: 'Planejamento', desc: 'Criamos estratégia e arquitetura do projeto' },
              { step: '03', title: 'Desenvolvimento', desc: 'Construímos sua solução com qualidade' },
              { step: '04', title: 'Lançamento', desc: 'Entregamos e acompanhamos o sucesso' }
            ].map((phase, index) => (
              <div key={phase.step} className="relative">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full text-primary-foreground font-bold text-lg mb-4">
                    {phase.step}
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {phase.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {phase.desc}
                  </p>
                </div>
                
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-primary opacity-30 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;