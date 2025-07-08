import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageCircle,
  Linkedin,
  Instagram,
  Github
} from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'contato@montev.com.br',
      link: 'mailto:contato@montev.com.br'
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '+55 (11) 9999-9999',
      link: 'tel:+5511999999999'
    },
    {
      icon: MapPin,
      title: 'Localização',
      content: 'São Paulo, SP - Brasil',
      link: '#'
    },
    {
      icon: Clock,
      title: 'Horário',
      content: 'Seg-Sex: 9h às 18h',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Github, href: '#', label: 'GitHub' }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <MessageCircle className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Entre em Contato</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Vamos{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Conversar
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pronto para transformar sua ideia em realidade? Entre em contato conosco 
            e vamos discutir como podemos ajudar seu negócio a crescer digitalmente.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card border-border/50 shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                  <Send className="w-6 h-6 text-primary" />
                  Envie sua Mensagem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo</Label>
                      <Input 
                        id="name" 
                        placeholder="Seu nome"
                        className="border-border/50 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="seu@email.com"
                        className="border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input 
                        id="phone" 
                        placeholder="(11) 99999-9999"
                        className="border-border/50 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Empresa</Label>
                      <Input 
                        id="company" 
                        placeholder="Nome da empresa"
                        className="border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Assunto</Label>
                    <Input 
                      id="subject" 
                      placeholder="Como podemos ajudar?"
                      className="border-border/50 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Conte-nos mais sobre seu projeto..."
                      rows={5}
                      className="border-border/50 focus:border-primary resize-none"
                    />
                  </div>

                  <Button variant="glow" size="lg" className="w-full">
                    Enviar Mensagem
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">
                  Informações de Contato
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={info.title}
                    href={info.link}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <div className="p-2 bg-gradient-primary rounded-lg group-hover:scale-110 transition-transform">
                      <info.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{info.title}</div>
                      <div className="text-sm text-muted-foreground">{info.content}</div>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">
                  Redes Sociais
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="p-3 bg-gradient-primary rounded-lg hover:shadow-glow transition-all duration-300 transform hover:scale-110 group"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 text-primary-foreground" />
                    </a>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Siga-nos para ver nossos projetos mais recentes e dicas de desenvolvimento.
                </p>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-gradient-primary text-primary-foreground border-0 shadow-glow">
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">Resposta Rápida</h3>
                <p className="text-primary-foreground/80 mb-4">
                  Respondemos todas as mensagens em até 2 horas durante o horário comercial.
                </p>
                <div className="text-3xl font-bold">&lt; 2h</div>
                <div className="text-sm text-primary-foreground/80">Tempo de resposta</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;