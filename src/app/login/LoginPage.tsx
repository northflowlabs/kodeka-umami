'use client';
import { Loading } from '@umami/react-zen';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useLoginQuery } from '@/components/hooks';
import { LoginForm } from './LoginForm';
import styles from './LoginPage.module.css';

export function LoginPage() {
  const { user, isLoading } = useLoginQuery();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.replace('/');
    }
  }, [user, router]);

  if (isLoading || user) {
    return <Loading placement="absolute" />;
  }

  return (
    <div className={styles.wrap}>
      <aside className={styles.panel}>
        <div className={styles.brandRow}>
          <svg width={28} height={28} viewBox="0 0 24 24" aria-hidden>
            <rect width="24" height="24" rx="5" fill="#fff" fillOpacity="0.12" />
            <path fill="#fff" d="M4.6 6 12 12 4.6 18Z" />
            <path fill="#fff" d="M19.4 6 12 12 19.4 18Z" />
          </svg>
          <span className={styles.brandName}>kodeka analyse</span>
        </div>

        <div className={styles.center}>
          <h1 className={styles.headline}>Innsikt på tvers av alle kodeka-flater.</h1>
          <p className={styles.tagline}>
            Ett dashbord, full kontroll. Personvernvennlig og cookieless, på egen
            infrastruktur.
          </p>
          <ul className={styles.features}>
            <li>
              <span className={styles.dot} />
              Cookieless, ingen samtykke nødvendig
            </li>
            <li>
              <span className={styles.dot} />
              Sanntid og historikk samlet
            </li>
            <li>
              <span className={styles.dot} />
              Data på kodekas egen plattform
            </li>
          </ul>
        </div>

        <div className={styles.foot}>© kodeka</div>

        <div className={styles.watermark} aria-hidden>
          <svg width="340" height="340" viewBox="0 0 24 24" fill="#fff">
            <path d="M4.6 6 12 12 4.6 18Z" />
            <path d="M19.4 6 12 12 19.4 18Z" />
          </svg>
        </div>
      </aside>

      <main className={styles.formSide}>
        <LoginForm />
      </main>
    </div>
  );
}
