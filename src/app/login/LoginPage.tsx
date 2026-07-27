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
        <span className={styles.blobGreen} aria-hidden />
        <span className={styles.blobPeach} aria-hidden />

        <div className={styles.brandRow}>
          <span className={styles.mark} aria-hidden>
            k
          </span>
          <span className={styles.brandName}>kodeka analyse</span>
        </div>

        <div className={styles.center}>
          <p className={styles.eyebrow}>Analyse</p>
          <h1 className={styles.headline}>
            Innsikt på tvers av <span className={styles.hl}>alle kodeka-flater.</span>
          </h1>
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
      </aside>

      <main className={styles.formSide}>
        <LoginForm />
      </main>
    </div>
  );
}
