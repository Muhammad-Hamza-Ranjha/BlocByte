import Image from 'next/image';
import Link from 'next/link';
import logoDark from '../public/blocbytes.svg';
import logoLight from '../public/blocbytes_black_png.png';

type BrandLogoProps = {
  className?: string;
  imageClassName?: string;
  href?: string;
  preload?: boolean;
  sizes?: string;
  surface?: 'auto' | 'light' | 'dark';
};

export default function BrandLogo({
  className = '',
  imageClassName = '',
  href = '/',
  preload = false,
  sizes = '180px',
  surface = 'auto',
}: BrandLogoProps) {
  const wrapperClassName = ['logo-link inline-flex items-center', className].filter(Boolean).join(' ');
  const logoClassName = ['logo-image h-10 w-auto', imageClassName].filter(Boolean).join(' ');
  const surfaceClassName = `logo-surface-${surface}`;

  return (
    <Link href={href} className={wrapperClassName} aria-label="BlocBytes home">
      <span className={['logo-stack', surfaceClassName].join(' ')}>
        <Image
          src={logoLight}
          alt="BlocBytes"
          width={1043}
          height={188}
          preload={preload}
          loading={preload ? 'eager' : 'lazy'}
          sizes={sizes}
          decoding="async"
          className={`${logoClassName} logo-image-light`}
        />
        <Image
          src={logoDark}
          alt="BlocBytes"
          width={1041}
          height={187}
          preload={preload}
          loading={preload ? 'eager' : 'lazy'}
          sizes={sizes}
          decoding="async"
          unoptimized
          className={`${logoClassName} logo-image-dark`}
        />
      </span>
    </Link>
  );
}
