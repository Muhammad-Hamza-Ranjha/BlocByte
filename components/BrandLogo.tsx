import Image from 'next/image';
import Link from 'next/link';

type BrandLogoProps = {
  className?: string;
  imageClassName?: string;
  href?: string;
  priority?: boolean;
  surface?: 'auto' | 'light' | 'dark';
};

export default function BrandLogo({
  className = '',
  imageClassName = '',
  href = '/',
  priority = false,
  surface = 'auto',
}: BrandLogoProps) {
  const wrapperClassName = ['logo-link inline-flex items-center', className].filter(Boolean).join(' ');
  const logoClassName = ['logo-image h-10 w-auto', imageClassName].filter(Boolean).join(' ');
  const surfaceClassName = `logo-surface-${surface}`;

  return (
    <Link href={href} className={wrapperClassName} aria-label="BlocBytes home">
      <span className={['logo-stack', surfaceClassName].join(' ')}>
        <Image
          src="/blocbytes_black_png.png"
          alt="BlocBytes"
          width={1043}
          height={188}
          priority={priority}
          className={`${logoClassName} logo-image-light`}
        />
        <Image
          src="/blocbytes.svg"
          alt="BlocBytes"
          width={1041}
          height={187}
          priority={priority}
          className={`${logoClassName} logo-image-dark`}
        />
      </span>
    </Link>
  );
}
