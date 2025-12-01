import { 
  Smartphone, 
  Globe, 
  LayoutDashboard, 
  Bot
} from 'lucide-react';
import { Plan, ComparisonRow } from './types';

export const LINKS = {
  whatsapp: "https://wa.me/77988400518",
  preview: "#preview", // Generic placeholder
  bio: "#plans", // Generic placeholder
  logo: "https://i.imgur.com/svwpQgO.png"
};

export const PLANS: Plan[] = [
  {
    id: 'bio',
    title: 'BIO Profissional',
    price: 'R$ 197,00',
    description: [
      'Página leve, moderna e objetiva',
      'Visual alinhado com a identidade da marca',
      'Botões para seus principais canais de atendimento',
      'Design estratégico para alta conversão'
    ],
    cta: 'Quero minha BIO',
    secondaryCta: 'Falar no WhatsApp',
    icon: Smartphone
  },
  {
    id: 'site',
    title: 'Site Profissional + BIO',
    price: 'R$ 449,00',
    description: [
      'Site Institucional ou Loja personalizado para seu nicho',
      'Design exclusivo e profissional',
      'Integração com meios de pagamento',
      'Área para vitrine de produtos ou serviços'
    ],
    cta: 'Quero meu Site',
    secondaryCta: 'Tirar dúvidas',
    highlight: true,
    icon: Globe
  },
  {
    id: 'admin',
    title: 'Site + Painel de Gestão',
    price: 'R$ 749,00',
    description: [
      'Painel Administrativo completo para gestão',
      'Controle de produtos, serviços e conteúdo',
      'Relatórios de visualização e cliques',
      'Autonomia total para atualizar seu negócio'
    ],
    cta: 'Quero o Pacote Gestão',
    secondaryCta: 'Falar com Especialista',
    icon: LayoutDashboard
  },
  {
    id: 'automation',
    title: 'Automação com IA no Site',
    price: 'R$ 1.000',
    subtitle: '+ R$ 349/mês',
    description: [
      'Assistente Virtual Inteligente integrado diretamente ao site',
      'Treinado com as informações do seu negócio',
      'Atende e tira dúvidas dos clientes 24h por dia',
      'Sem vínculo obrigatório com WhatsApp - funciona no seu domínio',
      'Captura leads e qualifica vendas automaticamente'
    ],
    cta: 'Quero Automação IA',
    secondaryCta: 'Saber mais',
    icon: Bot
  }
];

export const COMPARISON_DATA: ComparisonRow[] = [
  { feature: 'Link na Bio Personalizado', bio: true, site: true, admin: true, automation: true },
  { feature: 'Design Premium Exclusivo', bio: true, site: true, admin: true, automation: true },
  { feature: 'Site Completo (Landing/Loja)', bio: false, site: true, admin: true, automation: true },
  { feature: 'Integração de Pagamentos', bio: false, site: true, admin: true, automation: true },
  { feature: 'Painel Administrativo', bio: false, site: false, admin: true, automation: true },
  { feature: 'Gestão de Conteúdo', bio: false, site: false, admin: true, automation: true },
  { feature: 'Assistente Virtual Inteligente', bio: false, site: false, admin: false, automation: true },
  { feature: 'Atendimento Automático no Site', bio: false, site: false, admin: false, automation: true },
  { feature: 'Treinamento de IA Personalizado', bio: false, site: false, admin: false, automation: true },
];