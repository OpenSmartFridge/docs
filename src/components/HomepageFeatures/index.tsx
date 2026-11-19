import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Logo: React.ComponentType<React.ComponentProps<'svg'>> | string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Produktverwaltung',
    Logo: require('@site/static/img/opensmartfridge-logo.png').default,
    description: (
      <>
        Produkte per Name oder Barcode erfassen, Ablaufdaten bearbeiten und
        benachrichtigt werden, bevor Lebensmittel ablaufen.
      </>
    ),
  },
  {
    title: 'KI-Rezeptideen',
    Logo: require('@site/static/img/kitchai.png').default,
    description: (
      <>
        OpenSmartFridge erstellt Rezepte aus dem vorhandenen Bestand und
        berücksichtigt persönliche Ernährungspräferenzen.
      </>
    ),
  },
  {
    title: 'Docker-fähig',
    Logo: require('@site/static/img/docker-logo.png').default,
    description: (
      <>
        Ein Container startet die Anwendung gemeinsam mit PostgreSQL und KeyDB.
        Konfiguration erfolgt vollständig über Umgebungsvariablen.
      </>
    ),
  },
  {
    title: 'Mobile App',
    Logo: require('@site/static/img/react-native-logo.svg').default,
    description: (
      <>
        Die Expo-App verwaltet Produkte, Rezepte und Profil direkt auf Android
        und iOS mit hellem und dunklem Design.
      </>
    ),
  },
];

function Feature({title, Logo, description}: FeatureItem) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        {typeof Logo === 'string' ? (
          <img
            className={clsx(
              styles.featureSvg,
              title === 'Docker-fähig' && 'feature-docker',
            )}
            src={Logo}
            alt=""
          />
        ) : (
          <Logo className={styles.featureSvg} role="img" />
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
