import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx(styles.hero)}>
      <div className={clsx("container", styles.heroInner)}>
        <div className={styles.heroLeft}>
          <Heading as="h1" className={styles.title}>
            {siteConfig.title}
          </Heading>

          <p className={styles.subtitle}>{siteConfig.tagline}</p>

          <div className={styles.ctas}>
            <Link className={clsx("button button--primary button--lg", styles.primaryBtn)} to="/docs/Lease-Link-Pages/Dashboard">
              Read the docs
            </Link>
          </div>

          <div className={styles.metaRow}>
            <span className={styles.metaPill}>Commercial leases</span>
            <span className={styles.metaPill}>Extraction + QA</span>
            <span className={styles.metaPill}>Search + Chat</span>
          </div>
        </div>

      
      </div>
    </header>
  );
}
export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
      </main>
    </Layout>
  );
}