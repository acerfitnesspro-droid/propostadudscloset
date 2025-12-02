import React from 'react';
import { 
  Check, 
  MessageCircle, 
  ExternalLink, 
  Smartphone, 
  Globe, 
  Bot,
  Zap,
  Cpu,
  Layers,
  TrendingUp,
  Menu
} from 'lucide-react';
import { Button } from './components/Button';
import { Section } from './components/Section';
import { PLANS, COMPARISON_DATA, LINKS, RECENT_PROJECTS } from './constants';

const App: React.FC = () => {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-dark-bg text-white selection:bg-neon-pink selection:text-white overflow-x-hidden w-full relative">
      
      {/* Animated Background Global Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-neon-magenta/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] bg-neon-purple/20 rounded-full blur-[120px] animate-pulse-slow delay-1000"></div>
        <div className="absolute top-[40%] left-[60%] w-[20%] h-[20%] bg-neon-pink/10 rounded-full blur-[80px] animate-float"></div>
      </div>

       {/* Floating Marquee (Top) */}
      <div className="fixed top-0 left-0 w-full bg-black/95 backdrop-blur-md border-b border-neon-pink/30 z-[60] py-2 overflow-hidden pointer-events-none h-8 flex items-center">
        <div className="whitespace-nowrap animate-marquee flex gap-8">
           <span className="text-neon-pink font-bold text-xs uppercase tracking-[0.2em] drop-shadow-[0_0_5px_rgba(196,58,117,0.8)]">
             Inovação Digital • Design Premium • Automação Inteligente • Resultados Reais •
           </span>
           <span className="text-neon-pink font-bold text-xs uppercase tracking-[0.2em] drop-shadow-[0_0_5px_rgba(196,58,117,0.8)]">
             Inovação Digital • Design Premium • Automação Inteligente • Resultados Reais •
           </span>
           <span className="text-neon-pink font-bold text-xs uppercase tracking-[0.2em] drop-shadow-[0_0_5px_rgba(196,58,117,0.8)]">
             Inovação Digital • Design Premium • Automação Inteligente • Resultados Reais •
           </span>
           <span className="text-neon-pink font-bold text-xs uppercase tracking-[0.2em] drop-shadow-[0_0_5px_rgba(196,58,117,0.8)]">
             Inovação Digital • Design Premium • Automação Inteligente • Resultados Reais •
           </span>
        </div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-8 w-full z-50 bg-dark-bg/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 md:h-24">
            <div className="flex-shrink-0 flex items-center gap-3">
              <img 
                src={LINKS.logo} 
                alt="Acelera Mídia" 
                className="h-8 md:h-10 w-auto object-contain filter brightness-0 invert drop-shadow-[0_0_8px_rgba(196,58,117,0.8)]"
              />
            </div>
            <div className="hidden md:flex space-x-10 items-center">
              <a href="#plans" className="text-gray-400 hover:text-neon-pink text-sm uppercase tracking-widest font-bold transition-colors hover:drop-shadow-[0_0_8px_rgba(196,58,117,0.8)]">Serviços</a>
              <a href="#comparison" className="text-gray-400 hover:text-neon-pink text-sm uppercase tracking-widest font-bold transition-colors hover:drop-shadow-[0_0_8px_rgba(196,58,117,0.8)]">Diferenciais</a>
              <a href="#preview" className="text-gray-400 hover:text-neon-pink text-sm uppercase tracking-widest font-bold transition-colors hover:drop-shadow-[0_0_8px_rgba(196,58,117,0.8)]">Tecnologia</a>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="whatsapp" href={LINKS.whatsapp} external className="!px-4 !py-2 !text-[10px] md:!text-xs whitespace-nowrap">
                Falar com Especialista
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-40 md:pt-48 overflow-hidden px-4">
        {/* Dynamic Tentacle/Fluid Background Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-gradient-radial from-neon-magenta/30 to-transparent opacity-50 blur-[60px] md:blur-[100px] animate-pulse-slow"></div>
          {/* Particles (simulated) */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-neon-pink rounded-full blur-[2px] animate-float"></div>
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-neon-purple rounded-full blur-[2px] animate-float delay-700"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left pt-8 lg:pt-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6 md:mb-8 animate-float mx-auto lg:mx-0">
              <img src="https://i.imgur.com/rwatp8b.png" alt="Acelera Icon" className="w-5 h-5 object-contain filter drop-shadow-[0_0_5px_rgba(196,58,117,0.8)]" />
              <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-neon-light">Acelera Mídia</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] md:leading-[0.9] tracking-tighter mb-6 md:mb-8">
              DOMINE <br/>
              SEU <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-purple animate-glow">MERCADO</span><br/>
              COM SITES INTELIGENTES
            </h1>
            
            <p className="text-base md:text-xl text-gray-400 mb-8 md:mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 border-l-0 lg:border-l-2 border-neon-magenta lg:pl-6 font-light">
              Do Site Profissional à Gestão com IA: entregamos a tecnologia definitiva para quem não aceita menos que a liderança. Design que impressiona, automação que vende.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start w-full sm:w-auto">
              <Button variant="primary" href="#plans" icon={ExternalLink} className="w-full sm:w-auto justify-center">
                Ver Soluções
              </Button>
              <Button variant="secondary" href={LINKS.whatsapp} external icon={MessageCircle} className="w-full sm:w-auto justify-center">
                Consultoria Grátis
              </Button>
            </div>
          </div>

          {/* Hero Mockup / VFX */}
          <div className="relative perspective-1000 w-full max-w-[350px] mx-auto lg:max-w-none mt-8 lg:mt-0">
             <div className="absolute inset-0 bg-gradient-to-tr from-neon-pink to-neon-purple rounded-full blur-[80px] opacity-30"></div>
             
             {/* Main Card */}
             <div className="relative transform lg:rotate-y-[-12deg] lg:rotate-x-[5deg] hover:rotate-0 transition-transform duration-700 ease-out preserve-3d">
                <div className="bg-dark-surface border border-white/10 rounded-[2rem] p-3 md:p-4 shadow-neon relative z-20">
                   {/* Frame Header */}
                   <div className="flex items-center justify-between mb-4 px-2">
                     <div className="flex gap-2">
                       <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500/50"></div>
                       <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500/50"></div>
                       <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500/50"></div>
                     </div>
                     <div className="text-[10px] text-gray-500 font-mono">System_OS v2.0</div>
                   </div>
                   
                   {/* Screen */}
                   <div className="bg-black rounded-xl overflow-hidden aspect-[9/16] md:aspect-[4/5] relative group">
                      <img 
                        src="https://i.imgur.com/ekgqJrk.png" 
                        alt="Interface" 
                        className="object-cover w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-500 filter brightness-110 contrast-125 saturate-110" 
                      />
                      
                      {/* UI Elements Overlay */}
                      <div className="absolute inset-0 px-4 pb-6 pt-4 md:px-6 md:pb-8 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                        <div className="bg-white/10 backdrop-blur-md p-3 md:p-4 rounded-xl border border-white/10 mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                          <div className="flex justify-between items-center">
                            <span className="text-xs md:text-sm text-gray-300">Vendas IA</span>
                            <span className="text-neon-pink font-bold text-sm">+315%</span>
                          </div>
                          <div className="h-1 w-full bg-gray-700 mt-2 rounded-full overflow-hidden">
                            <div className="h-full bg-neon-pink w-[85%]"></div>
                          </div>
                        </div>
                        <Button 
                          variant="primary" 
                          href="http://fenixuniformes.vercel.app/"
                          external
                          className="!w-full !py-2 md:!py-3 !text-[10px] md:!text-xs !rounded-full shadow-[0_0_15px_rgba(196,58,117,0.6)] hover:shadow-[0_0_25px_rgba(196,58,117,0.8)] border border-white/20 font-bold tracking-widest relative z-10"
                        >
                          VER TECNOLOGIA
                        </Button>
                      </div>
                   </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -right-2 top-10 md:-right-12 md:top-20 scale-75 md:scale-100 bg-dark-card p-4 rounded-xl border border-neon-purple/30 shadow-2xl animate-float delay-1000 z-30">
                  <Cpu className="w-8 h-8 text-neon-pink mx-auto mb-2" />
                  <div className="text-xs text-center font-bold text-white">IA Autônoma</div>
                </div>
                
                 <div className="absolute -left-2 bottom-20 md:-left-8 md:bottom-32 scale-75 md:scale-100 bg-dark-card p-4 rounded-xl border border-neon-magenta/30 shadow-2xl animate-float z-30">
                  <Zap className="w-8 h-8 text-neon-purple mx-auto mb-2" />
                  <div className="text-xs text-center font-bold text-white">Alta Conversão</div>
                </div>
             </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce gap-2 opacity-50">
          <span className="text-[8px] md:text-[10px] tracking-[0.3em] uppercase">Rolar</span>
          <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-neon-pink to-transparent"></div>
        </div>
      </section>

      {/* Intro Section */}
      <Section className="!py-0">
        <div className="grid md:grid-cols-2 border-y border-white/10">
          <div className="p-8 md:p-20 border-b md:border-b-0 md:border-r border-white/10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-neon-pink/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            <h3 className="text-neon-grey text-xs md:text-sm tracking-widest uppercase mb-4">O Problema</h3>
            <p className="text-xl md:text-3xl font-light text-white leading-relaxed">
              "Negócios estagnados perdem clientes todos os dias por falta de <span className="text-neon-pink font-bold">profissionalismo digital</span> e lentidão no atendimento."
            </p>
          </div>
          <div className="p-8 md:p-20 relative overflow-hidden group">
            <div className="absolute inset-0 bg-neon-purple/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
             <h3 className="text-neon-grey text-xs md:text-sm tracking-widest uppercase mb-4">A Revolução</h3>
             <p className="text-xl md:text-3xl font-light text-white leading-relaxed">
              "Unimos <span className="text-neon-purple font-bold">Design Premium</span> à <span className="text-neon-purple font-bold">Inteligência Artificial</span> para criar máquinas de vendas que funcionam sozinhas."
            </p>
          </div>
        </div>
      </Section>

      {/* Plans Section */}
      <Section id="plans">
        <div className="text-center mb-12 md:mb-20 relative px-4">
          <span className="text-neon-pink font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Nossos Planos</span>
          <h2 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tight">
            Escolha sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-purple">Estratégia</span>
          </h2>
          <div className="w-16 md:w-24 h-1 bg-neon-magenta mx-auto mt-6 rounded-full shadow-[0_0_10px_#C43A75]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-2 max-w-5xl mx-auto">
          {PLANS.map((plan) => {
            const Icon = plan.icon;
            return (
              <div 
                key={plan.id} 
                className={`relative flex flex-col bg-dark-card border transition-all duration-500 group overflow-hidden ${
                  plan.highlight 
                    ? 'border-neon-pink shadow-neon md:scale-105 z-10 rounded-2xl ring-1 ring-neon-pink/50' 
                    : 'border-white/5 hover:border-neon-purple/50 rounded-xl hover:shadow-2xl'
                }`}
              >
                {/* Neon Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-neon-pink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {plan.highlight && (
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-neon-pink via-white to-neon-pink shadow-[0_0_20px_#C43A75]"></div>
                )}
                
                <div className="p-8 md:p-10 flex-grow relative z-10">
                  <div className={`w-14 h-14 md:w-16 md:h-16 rounded-lg flex items-center justify-center mb-8 border ${
                    plan.highlight ? 'bg-neon-pink/20 border-neon-pink text-neon-pink shadow-[0_0_15px_rgba(196,58,117,0.4)]' : 'bg-white/5 border-white/10 text-gray-400 group-hover:text-neon-purple group-hover:border-neon-purple'
                  } transition-all duration-300`}>
                    <Icon className="w-7 h-7 md:w-8 md:h-8" />
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wider mb-2">{plan.title}</h3>
                  <div className="mb-8">
                    <span className="text-3xl md:text-4xl font-black text-white">{plan.price}</span>
                    {plan.subtitle && <span className="block text-sm text-neon-grey font-mono mt-2">{plan.subtitle}</span>}
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.description.map((item, idx) => (
                      <li key={idx} className="flex items-start text-base text-gray-400 group-hover:text-gray-300 transition-colors">
                        <Check className="w-5 h-5 text-neon-pink mr-3 flex-shrink-0 drop-shadow-[0_0_5px_rgba(196,58,117,0.8)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-8 md:p-10 pt-0 mt-auto relative z-10 space-y-4">
                  <Button 
                    variant={plan.highlight ? 'primary' : 'outline'} 
                    fullWidth 
                    href={LINKS.whatsapp}
                    external
                    className={!plan.highlight ? '!border-gray-700 !text-gray-300 hover:!border-neon-pink hover:!text-white' : ''}
                  >
                    {plan.cta}
                  </Button>
                  <Button 
                    variant="whatsapp" 
                    fullWidth 
                    href={LINKS.whatsapp}
                    external
                    className="!py-3 !text-xs !border-white/10"
                  >
                    {plan.secondaryCta}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Comparison Table */}
      <Section id="comparison">
        <div className="bg-dark-card rounded-3xl border border-white/5 overflow-hidden relative max-w-5xl mx-auto">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neon-pink to-transparent opacity-50"></div>
          
          <div className="p-8 md:p-12 border-b border-white/5">
            <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight mb-2">
              Comparativo <span className="text-neon-purple">Detalhado</span>
            </h2>
            <div className="text-gray-400 text-sm md:text-base space-y-2 mt-4 font-light">
              <p>Entenda a diferença entre ter um <strong className="text-white">Site Profissional</strong> e uma <strong className="text-neon-pink">Máquina de Vendas Automática</strong>.</p>
            </div>
          </div>
          
          <div className="overflow-x-auto custom-scrollbar pb-4 md:pb-0">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr>
                  <th className="p-4 md:p-6 text-xs uppercase tracking-widest text-gray-500 font-bold border-b border-white/5 sticky left-0 bg-dark-card z-20 w-1/2">Funcionalidades</th>
                  <th className="p-4 md:p-6 text-center text-xs uppercase tracking-widest text-white font-bold border-b border-white/5 w-1/4">Site Profissional</th>
                  <th className="p-4 md:p-6 text-center text-xs uppercase tracking-widest text-neon-pink font-bold border-b border-white/5 bg-neon-pink/5 w-1/4">Automação IA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {COMPARISON_DATA.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 md:p-6 text-xs md:text-sm font-medium text-gray-300 sticky left-0 bg-dark-card z-20 border-r border-white/5 md:border-r-0">{row.feature}</td>
                    <td className="p-4 md:p-6 text-center">
                      {row.site ? <div className="w-2 h-2 bg-white rounded-full mx-auto"></div> : <div className="w-1 h-1 bg-gray-800 rounded-full mx-auto"></div>}
                    </td>
                    <td className="p-4 md:p-6 text-center bg-neon-pink/[0.02]">
                      {row.automation ? <div className="w-3 h-3 bg-neon-pink rotate-45 mx-auto shadow-[0_0_10px_#C43A75]"></div> : <div className="w-1 h-1 bg-gray-800 rounded-full mx-auto"></div>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* Preview Section */}
      <Section id="preview" className="!py-20 md:!py-32">
        <div className="absolute inset-0 bg-neon-pink/5 skew-y-3 transform origin-top-left z-0"></div>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
          <div className="order-2 lg:order-1 px-2">
             <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-neon-pink to-neon-purple opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-700"></div>
                
                {/* Browser Window */}
                <div className="relative bg-[#1a1a1a] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                    <div className="h-8 bg-[#2a2a2a] flex items-center px-4 space-x-2 border-b border-white/5">
                        <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500"></div>
                        <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500"></div>
                        <div className="ml-4 bg-[#1a1a1a] px-3 py-1 rounded text-[8px] md:text-[10px] text-gray-500 flex-grow text-center font-mono truncate">suamarca.com.br</div>
                    </div>
                    <div className="aspect-video bg-black relative overflow-hidden">
                        <img 
                            src="https://i.imgur.com/GDrdUDN.png" 
                            alt="Web Preview" 
                            className="object-cover w-full h-full opacity-80 group-hover:scale-105 transition-transform duration-700 filter brightness-110 contrast-125 saturate-110" 
                        />
                        
                        {/* Interactive Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                             <Button variant="primary" href={LINKS.preview} external>
                                Ver Demonstração
                             </Button>
                        </div>
                    </div>
                </div>

                {/* Mobile Floating */}
                <div className="absolute -bottom-6 -right-4 scale-[0.6] md:scale-100 origin-bottom-right md:-bottom-12 md:-right-12 w-48 bg-black rounded-[2rem] border-[4px] border-[#333] shadow-2xl overflow-hidden animate-float delay-500 z-20 block">
                    <div className="aspect-[9/18] relative">
                         <img 
                            src="https://i.imgur.com/ekgqJrk.png" 
                            alt="Mobile" 
                            className="object-cover w-full h-full filter brightness-110 contrast-125 saturate-110" 
                         />
                         <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-white/20 rounded-full"></div>
                    </div>
                </div>
             </div>
          </div>
          
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-3xl md:text-6xl font-black text-white leading-none mb-6 md:mb-8">
              VEJA O FUTURO <br/>
              <span className="text-neon-pink">DA SUA MARCA</span> ACONTECENDO
            </h2>
            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-gray-400 font-light leading-relaxed">
              <p>
                Não é apenas um site. É um ecossistema digital completo onde o Design atrai e a Inteligência Artificial converte. Visualize seu negócio operando em outro nível.
              </p>
            </div>
            
            <div className="mt-8 md:mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
               <div className="px-4 py-2 bg-white/5 border border-white/10 rounded text-xs md:text-sm text-gray-300 flex items-center gap-2">
                 <Layers className="w-4 h-4 text-neon-purple" />
                 Painel Intuitivo
               </div>
               <div className="px-4 py-2 bg-white/5 border border-white/10 rounded text-xs md:text-sm text-gray-300 flex items-center gap-2">
                 <Cpu className="w-4 h-4 text-neon-pink" />
                 IA Treinada
               </div>
               <div className="px-4 py-2 bg-white/5 border border-white/10 rounded text-xs md:text-sm text-gray-300 flex items-center gap-2">
                 <TrendingUp className="w-4 h-4 text-green-400" />
                 Escala Automática
               </div>
            </div>
             <div className="mt-8">
                 <Button variant="primary" href={LINKS.preview} external icon={ExternalLink}>
                    Acessar Demonstração
                  </Button>
             </div>
          </div>
        </div>

        {/* New Projects Section */}
        <div className="mt-24 pt-16 border-t border-white/5 relative z-10">
            <p className="text-center text-neon-pink font-bold tracking-widest text-xs uppercase mb-4">Portfólio</p>
            <h3 className="text-2xl md:text-4xl font-black text-center text-white mb-10">
              PROJETOS <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-purple">RECENTES</span>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {RECENT_PROJECTS.map((project, idx) => (
                <Button 
                  key={idx}
                  variant="secondary"
                  href={project.url}
                  external
                  icon={ExternalLink}
                  className="!py-4 !px-6 !text-xs md:!text-sm justify-between w-full group hover:!border-neon-pink/50 transition-all duration-300"
                >
                  <span className="truncate mr-2">{project.name}</span>
                </Button>
              ))}
            </div>
        </div>
      </Section>

      {/* CTA Final */}
      <section className="relative py-24 md:py-32 overflow-hidden flex flex-col items-center justify-center text-center px-4">
         {/* Background Burst */}
         <div className="absolute inset-0 bg-gradient-to-t from-neon-pink/20 via-dark-bg to-dark-bg"></div>
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[300px] bg-neon-magenta blur-[150px] opacity-40"></div>
         
         <div className="relative z-10 max-w-4xl">
            <h2 className="text-4xl md:text-7xl font-black text-white mb-6 md:mb-8 tracking-tighter">
              PRONTO PARA <span className="text-neon-pink">ESCALAR</span> SEU NEGÓCIO?
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-8 md:mb-12 font-light">
              A tecnologia que grandes empresas usam, agora ao seu alcance. Vamos iniciar sua transformação digital hoje.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 w-full sm:w-auto">
               <Button variant="primary" href="#plans" className="!py-4 md:!py-5 !px-8 md:!px-12 !text-base md:!text-lg shadow-[0_0_30px_rgba(196,58,117,0.4)] hover:shadow-[0_0_50px_rgba(196,58,117,0.6)] w-full sm:w-auto justify-center">
                 Quero meu plano
               </Button>
               <Button variant="outline" href={LINKS.whatsapp} external className="!py-4 md:!py-5 !px-8 md:!px-12 !text-base md:!text-lg !border-gray-600 !text-gray-300 hover:!border-neon-pink hover:!text-white w-full sm:w-auto justify-center">
                 Falar com Especialista
               </Button>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-12 md:py-16 relative overflow-hidden px-4">
        {/* Footer Glow */}
        <div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-neon-pink to-transparent opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
          <div className="text-center md:text-left">
            <img 
                src={LINKS.logo} 
                alt="Acelera Mídia" 
                className="h-8 w-auto mb-4 mx-auto md:mx-0 filter brightness-0 invert opacity-80"
              />
            <p className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} Acelera Mídia. Soluções Digitais e IA.
            </p>
          </div>
          
          <div className="flex gap-8">
            <a href="#" className="text-gray-600 hover:text-neon-pink transition-colors"><Smartphone className="w-5 h-5"/></a>
            <a href="#" className="text-gray-600 hover:text-neon-pink transition-colors"><Globe className="w-5 h-5"/></a>
            <a href="#" className="text-gray-600 hover:text-neon-pink transition-colors"><Cpu className="w-5 h-5"/></a>
          </div>
        </div>
      </footer>
      
      {/* Floating Action Button */}
      <a 
        href={LINKS.whatsapp} 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 md:right-8 z-[70] group"
      >
        <div className="absolute inset-0 bg-neon-pink/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative bg-black/80 backdrop-blur-md border border-white/10 text-white p-3 md:p-4 rounded-full hover:border-[#25D366] hover:text-[#25D366] hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all duration-300 flex items-center gap-3">
            <MessageCircle className="w-6 h-6" />
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-out whitespace-nowrap font-bold text-sm md:text-base tracking-wide">
              Iniciar Projeto
            </span>
        </div>
      </a>

    </div>
  );
};

export default App;