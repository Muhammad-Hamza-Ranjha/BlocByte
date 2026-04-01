import Image from 'next/image';

type LogoMotionProps = {
  className?: string;
};

export default function LogoMotion({ className = '' }: LogoMotionProps) {
  return (
    <div className={['logo-motion', className].filter(Boolean).join(' ')}>
      <div className="logo-motion-canvas">
        <div className="logo-motion-glow" />
        <div className="logo-motion-grid" />

        <div className="logo-motion-mark logo-motion-mark-a">
          <Image src="/Logo_icon.png" alt="" width={138} height={171} className="logo-motion-icon" />
        </div>
        <div className="logo-motion-mark logo-motion-mark-b">
          <Image src="/Logo_icon.png" alt="" width={138} height={171} className="logo-motion-icon" />
        </div>
        <div className="logo-motion-mark logo-motion-mark-c">
          <Image src="/Logo_icon.png" alt="" width={138} height={171} className="logo-motion-icon" />
        </div>
        <div className="logo-motion-mark logo-motion-mark-d">
          <Image src="/Logo_icon.png" alt="" width={138} height={171} className="logo-motion-icon" />
        </div>

        <div className="logo-badge logo-badge-light">
          <Image src="/blocbytes_black_png.png" alt="BlocBytes" width={1043} height={188} className="logo-badge-image" />
        </div>
        <div className="logo-badge logo-badge-dark">
          <Image src="/blocbytes.svg" alt="BlocBytes" width={1041} height={187} className="logo-badge-image logo-badge-svg" />
        </div>
      </div>
    </div>
  );
}
