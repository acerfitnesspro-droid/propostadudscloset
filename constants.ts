import { 
  Smartphone, 
  Globe, 
  LayoutDashboard, 
  Bot
} from 'lucide-react';
import { Plan, ComparisonRow } from './types';

export const LINKS = {
  whatsapp: "https://wa.me/77988400518",
  preview: "https://dudscloset.vercel.app/",
  bio: "https://biodudscloset.vercel.app/",
  logo: "https://i.imgur.com/svwpQgO.png"
};

export const PLANS: Plan[] = [
  {
    id: 'bio',
    title: 'BIO para Instagram',
    price: 'R$ 197,00',
    description: [
      'Página leve, moderna e objetiva',
      'Visual alinhado com a identidade da marca',
      'Facilita o acesso às categorias',
      'Aumenta a credibilidade e melhora a experiência da cliente'
    ],
    cta: 'Quero somente a BIO',
    secondaryCta: 'Falar no WhatsApp',
    icon: Smartphone
  },
  {
    id: 'site',
    title: 'BIO + Site Oficial',
    price: 'R$ 449,00',
    description: [
      'Personalização completa conforme seu sonho',
      'Assistente de Voz e Texto que ajuda a cliente a comprar',
      'Integração bancária para compras automáticas',
      'Painel administrativo básico para produtos e coleções'
    ],
    cta: 'Quero BIO + Site Oficial',
    secondaryCta: 'Tirar dúvidas no WhatsApp',
    highlight: true,
    icon: Globe
  },
  {
    id: 'admin',
    title: 'BIO + Site + Painel Administrativo Completo',
    price: 'R$ 749,00',
    description: [
      'Fluxo de estoque inteligente: envie uma imagem da nota fiscal e o sistema cadastra todos os produtos',
      'Gerador automático de nota de venda',
      'Gerador de imagens de produtos, modelos e looks sem precisar experimentar',
      'Administração inteligente: estoque e financeiro atualizados automaticamente a cada venda'
    ],
    cta: 'Quero o Pacote Completo',
    secondaryCta: 'Falar com o Especialista',
    icon: LayoutDashboard
  },
  {
    id: 'automation',
    title: 'Automação Total via WhatsApp',
    price: 'R$ 1.000',
    subtitle: '+ R$ 349/mês',
    description: [
      'Agente inteligente que monta looks',
      'Gera imagem de como o look ficaria na cliente usando apenas uma foto',
      'Atende conforme seu treinamento personalizado',
      'Finaliza vendas automaticamente',
      'Notifica você no painel quando a venda estiver concluída',
      'Estoque e financeiro totalmente integrados'
    ],
    cta: 'Quero Vender no Automático',
    secondaryCta: 'Conversar no WhatsApp',
    icon: Bot
  }
];

export const COMPARISON_DATA: ComparisonRow[] = [
  { feature: 'Link na Bio Personalizado', bio: true, site: true, admin: true, automation: true },
  { feature: 'Design Premium', bio: true, site: true, admin: true, automation: true },
  { feature: 'Site Institucional/Loja', bio: false, site: true, admin: true, automation: true },
  { feature: 'Assistente de Voz/Texto', bio: false, site: true, admin: true, automation: true },
  { feature: 'Integração Bancária', bio: false, site: true, admin: true, automation: true },
  { feature: 'Painel Admin Avançado', bio: false, site: false, admin: true, automation: true },
  { feature: 'Gerador de Looks (IA)', bio: false, site: false, admin: true, automation: true },
  { feature: 'Controle de Estoque Inteligente', bio: false, site: false, admin: true, automation: true },
  { feature: 'Atendimento WhatsApp Automático', bio: false, site: false, admin: false, automation: true },
  { feature: 'Vendas Automáticas 24h', bio: false, site: false, admin: false, automation: true },
];