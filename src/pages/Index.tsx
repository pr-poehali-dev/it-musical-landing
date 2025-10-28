import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://auth.robokassa.ru/Merchant/PaymentForm/FormFLS.js?EncodedInvoiceId=J6SPl83qJEegrzDbfuGPxg&DefaultSum=18000';
    script.async = true;
    
    const container = document.getElementById('robokassa-widget');
    if (container) {
      container.appendChild(script);
    }
    
    return () => {
      if (container && script.parentNode === container) {
        container.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 animate-spotlight" />
      
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/30 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        <header className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Icon name="Sparkles" size={40} className="text-secondary animate-float" />
            <h1 className="text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              IT-MUSICAL
            </h1>
            <Icon name="Music" size={40} className="text-accent animate-float" style={{ animationDelay: '0.5s' }} />
          </div>
          <p className="text-xl text-muted-foreground">Школа мюзикла для IT-специалистов</p>
        </header>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 border-primary/30 hover:border-primary/60 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/20 rounded-lg">
                <Icon name="Theater" size={32} className="text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Сценическое мастерство</h3>
                <p className="text-muted-foreground">
                  Раскройте свой артистический потенциал через театральное искусство и вокал
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 border-secondary/30 hover:border-secondary/60 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary/20 rounded-lg">
                <Icon name="Mic2" size={32} className="text-secondary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Вокальная подготовка</h3>
                <p className="text-muted-foreground">
                  Профессиональные педагоги помогут развить ваш голос и музыкальность
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 border-accent/30 hover:border-accent/60 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/20 rounded-lg">
                <Icon name="Users" size={32} className="text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Командная работа</h3>
                <p className="text-muted-foreground">
                  Создавайте яркие спектакли вместе с единомышленниками из IT
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 border-primary/30 hover:border-primary/60 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/20 rounded-lg">
                <Icon name="Award" size={32} className="text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Выступления на сцене</h3>
                <p className="text-muted-foreground">
                  Участвуйте в настоящих постановках и покажите свой талант публике
                </p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="max-w-2xl mx-auto p-8 bg-card/70 backdrop-blur-md border-2 border-secondary/50 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 rounded-full mb-4">
              <Icon name="Star" size={20} className="text-secondary" />
              <span className="text-sm font-semibold">Специальное предложение</span>
            </div>
            <h2 className="text-3xl font-bold mb-2">Оплата обучения</h2>
            <p className="text-muted-foreground">Инвестируйте в свое творческое развитие</p>
          </div>
          
          <div id="robokassa-widget" className="min-h-[400px] flex items-center justify-center">
            <div className="text-center">
              <Icon name="Loader2" size={40} className="animate-spin text-primary mx-auto mb-4" />
              <p className="text-muted-foreground">Загрузка формы оплаты...</p>
            </div>
          </div>
        </Card>

        <footer className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="flex items-center justify-center gap-6 mb-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
              <Icon name="Youtube" size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              <Icon name="Mail" size={24} />
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 IT-MUSICAL. Все права защищены.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
