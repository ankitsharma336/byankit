import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Learn',
    Svg: require('@site/static/img/learn.svg').default,
    description: (
      <>
        Comprehensive notes, tutorials, and study material for Civil Engineering students.
      </>
    ),
  },
  {
    title: 'Teaching & Research',
    Svg: require('@site/static/img/research.svg').default,
    description: (
      <>
        Explore my teaching resources, research publications, and academic projects.
      </>
    ),
  },
  {
    title: 'Artificial intelligence',
    Svg: require('@site/static/img/ai.svg').default,
    description: (
      <>
        Learn how AI is transforming engineering education and research.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className="col col--4">
      <div className={styles.featureCard}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>

        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
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
