// FIX: Import `ReactNode` to resolve the "Cannot find namespace 'React'" error.
import type { ReactNode } from 'react';

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  percentage: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  tech: string;
  image: string;
  details?: string[];
  link?: string;
}

export interface SkillItem {
  name: string;
  level: number;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  // FIX: Use the imported `ReactNode` type instead of `React.ReactNode`.
  icon: ReactNode;
}

export interface AchievementItem {
  title: string;
  event: string;
  icon: ReactNode;
}
