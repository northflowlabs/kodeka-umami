'use client';
import { useShare } from '@/components/hooks';
import { Logo } from '@/components/svg';
import { useBrand } from '@/lib/brand-context';
import { Icon, Row, Text } from '@umami/react-zen';

const LOGO_SIZE = { sm: 24, md: 32, lg: 40 };
const TEXT_SIZE = { sm: 'sm', md: 'base', lg: 'lg' } as const;

/** Kun http(s) — tenant-satt domainName/logoUrl skal aldri kunne bli javascript:. */
function safeUrl(u?: string | null): string | undefined {
  if (!u) return undefined;
  try {
    return /^https?:$/.test(new URL(u).protocol) ? u : undefined;
  } catch {
    return undefined;
  }
}

export function ShareBranding({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const share = useShare();
  const BRAND = useBrand();
  const logoDomain = safeUrl(share?.whiteLabel?.domainName) || BRAND.homepage;
  const logoName = share?.whiteLabel?.displayName || BRAND.name;
  const logoImage = safeUrl(share?.whiteLabel?.logoUrl);
  const height = LOGO_SIZE[size];

  return (
    <a href={logoDomain} target="_blank" rel="noopener noreferrer" style={{ marginLeft: 12 }}>
      <Row alignItems="center" gap>
        {logoImage ? (
          <img src={logoImage} alt={logoName} style={{ height }} />
        ) : (
          <Icon>
            <Logo />
          </Icon>
        )}
        <Text size={TEXT_SIZE[size]} weight="bold">
          {logoName}
        </Text>
      </Row>
    </a>
  );
}
