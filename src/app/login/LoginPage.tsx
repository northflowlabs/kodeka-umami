'use client';
import { Loading } from '@umami/react-zen';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useLoginQuery } from '@/components/hooks';
import { BRAND } from '@/lib/brand';
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
            {BRAND.mark}
          </span>
          <span className={styles.brandName}>{BRAND.name}</span>
        </div>

        <div className={styles.center}>
          <p className={styles.eyebrow}>Analytics</p>
          <h1 className={styles.headline}>
            Innsikt på tvers av <span className={styles.hl}>alle {BRAND.short}-flater.</span>
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
              Data på egen plattform
            </li>
          </ul>
        </div>

        <div className={styles.foot}>© {BRAND.short}</div>
      </aside>

      <main className={styles.formSide}>
        <LoginForm />
      </main>
    </div>
  );
}
