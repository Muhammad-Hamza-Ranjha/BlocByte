'use client';

import ReCAPTCHA from 'react-google-recaptcha';

type ContactRecaptchaProps = {
  widgetKey: number;
  siteKey: string;
  onTokenChange: (token: string | null) => void;
  onExpired: () => void;
  onErrored: () => void;
};

export default function ContactRecaptcha({
  widgetKey,
  siteKey,
  onTokenChange,
  onExpired,
  onErrored,
}: ContactRecaptchaProps) {
  return (
    <ReCAPTCHA
      key={widgetKey}
      sitekey={siteKey}
      onChange={onTokenChange}
      onExpired={onExpired}
      onErrored={onErrored}
    />
  );
}
