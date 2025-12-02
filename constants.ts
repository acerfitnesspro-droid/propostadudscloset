import { 
  Smartphone, 
  Globe, 
  LayoutDashboard, 
  Bot,
  Cpu,
  Zap
} from 'lucide-react';
import { Plan, ComparisonRow } from './types';

export const LINKS = {
  whatsapp: "https://wa.me/77988400518",
  preview: "#preview", 
  bio: "#plans",
  logo: "https://i.imgur.com/svwpQgO.png"
};

export const RECENT_PROJECTS = [
  { name: "Sistema Brotos da Terra", url: "https://appsystembrotos.vercel.app/" },
  { name: "Sistema Lanchonete 3 irmãos", url: "https://lanchonete-3-irm-os-liard.vercel.app/" },
  { name: "Site Heein Fragrâncias", url: "https://heeinfragrancias.vercel.app/" },
  { name: "Clinica Revitalize", url: "https://revitalizeclinicaleo.vercel.app/" },
];

export const PLANS: Plan[] = [
  {
    id: 'site',
    title: 'Site Profissional',
    price: 'R$ 499,00',
    subtitle: 'Pagamento único',
    description: [
      'Site Institucional ou Loja Personalizada',
      'Design Exclusivo e Responsivo',
      'Vitrine de Produtos e Serviços',
      'Integração com Meios de Pagamento',
      'Integração Direta com WhatsApp',
      'Otimização SEO Básica'
    ],
    cta: 'Quero meu Site',
    secondaryCta: 'Tirar Dúvidas',
    highlight: false,
    icon: Globe
  },
  {
    id: 'automation',
    title: 'Automação com IA',
    price: 'R$ 749,00',
    subtitle: '+ R$ 179/mês (Manutenção e IA)',
    description: [
      'Tudo do plano Site Profissional',
      'Assistente Virtual Inteligente 24h',
      'Painel Administrativo Completo',
      'Gestão de Estoque e Ordens de Serviço',
      'Sistema de Afiliados e Perfis de Cargo',
      'Treinamento da IA com seus dados'
    ],
    cta: 'Quero Automação Total',
    secondaryCta: 'Saber mais',
    highlight: true,
    icon: Cpu
  }
];

export const COMPARISON_DATA: ComparisonRow[] = [
  { feature: 'Design Premium Exclusivo', site: true, automation: true },
  { feature: 'Site Institucional ou Loja', site: true, automation: true },
  { feature: 'Integração de Pagamentos', site: true, automation: true },
  { feature: 'Integração WhatsApp', site: true, automation: true },
  { feature: 'Assistente Virtual Inteligente', site: false, automation: true },
  { feature: 'Atendimento 24h por IA', site: false, automation: true },
  { feature: 'Painel de Gestão Completo', site: false, automation: true },
  { feature: 'Controle de Estoque e O.S.', site: false, automation: true },
  { feature: 'Sistema de Afiliados', site: false, automation: true },
  { feature: 'Gestão de Equipe (Cargos)', site: false, automation: true },
];