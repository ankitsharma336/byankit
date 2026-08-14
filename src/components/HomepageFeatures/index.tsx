import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
    link: string;

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
    link: '/learn/intro',
  },
  {
    title: 'Teaching & Research',
    Svg: require('@site/static/img/research.svg').default,
    description: (
      <>
        Explore our teaching resources, research publications, and academic projects.
      </>
    ),
    link: '/learn/Research/intro',
  },
  {
    title: 'Artificial Intelligence',
    Svg: require('@site/static/img/ai.svg').default,
    description: (
      <>
        Learn how AI can help engineering education and research.
      </>
    ),
    link: '/learn/Artificial_intelligence/intro',
  },
];


function Feature({ title, Svg, description, link }: FeatureItem) {
  return (
    <div className="col col--4">
      <Link to={link} className={styles.featureCardLink}>
        <div className={styles.featureCard}>
          <div className="text--center">
            <Svg className={styles.featureSvg} role="img" />
          </div>

          <div className="text--center padding-horiz--md">
            <Heading as="h3">{title}</Heading>
            <p>{description}</p>
          </div>
        </div>
      </Link>
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
