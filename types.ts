import React from 'react';

export interface PlanFeature {
  text: string;
  included: boolean;
}

export interface Plan {
  id: string;
  title: string;
  price: string;
  subtitle?: string;
  description: string[];
  cta: string;
  secondaryCta: string;
  highlight?: boolean;
  icon: React.ElementType;
}

export interface ComparisonRow {
  feature: string;
  site: boolean;
  automation: boolean;
}