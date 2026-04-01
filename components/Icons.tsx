import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

function BaseIcon(props: IconProps) {
  return <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true" {...props} />;
}

export function ArrowRight(props: IconProps) {
  return (
    <BaseIcon viewBox="0 0 24 24" {...props}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </BaseIcon>
  );
}

export function CheckCircle(props: IconProps) {
  return (
    <BaseIcon viewBox="0 0 24 24" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m9 12 2 2 4-4" />
    </BaseIcon>
  );
}

export function ChevronDown(props: IconProps) {
  return (
    <BaseIcon viewBox="0 0 24 24" {...props}>
      <path d="m6 9 6 6 6-6" />
    </BaseIcon>
  );
}

export function Users(props: IconProps) {
  return (
    <BaseIcon viewBox="0 0 24 24" {...props}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
      <circle cx="9.5" cy="7" r="4" />
      <path d="M20 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16.5 3.13a4 4 0 0 1 0 7.75" />
    </BaseIcon>
  );
}

export function Clock(props: IconProps) {
  return (
    <BaseIcon viewBox="0 0 24 24" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </BaseIcon>
  );
}

export function Shield(props: IconProps) {
  return (
    <BaseIcon viewBox="0 0 24 24" {...props}>
      <path d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4Z" />
    </BaseIcon>
  );
}

export function MessageSquare(props: IconProps) {
  return (
    <BaseIcon viewBox="0 0 24 24" {...props}>
      <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" />
    </BaseIcon>
  );
}

export function FileText(props: IconProps) {
  return (
    <BaseIcon viewBox="0 0 24 24" {...props}>
      <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7z" />
      <path d="M14 2v5h5" />
      <path d="M9 13h6" />
      <path d="M9 17h6" />
      <path d="M9 9h1" />
    </BaseIcon>
  );
}

export function CreditCard(props: IconProps) {
  return (
    <BaseIcon viewBox="0 0 24 24" {...props}>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20" />
      <path d="M6 15h4" />
    </BaseIcon>
  );
}

export function BarChart3(props: IconProps) {
  return (
    <BaseIcon viewBox="0 0 24 24" {...props}>
      <path d="M4 20V10" />
      <path d="M10 20V4" />
      <path d="M16 20v-6" />
      <path d="M22 20v-10" />
    </BaseIcon>
  );
}

export function Sun(props: IconProps) {
  return (
    <BaseIcon viewBox="0 0 24 24" {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </BaseIcon>
  );
}

export function Moon(props: IconProps) {
  return (
    <BaseIcon viewBox="0 0 24 24" {...props}>
      <path d="M12 3a7 7 0 1 0 9 9 9 9 0 1 1-9-9Z" />
    </BaseIcon>
  );
}
