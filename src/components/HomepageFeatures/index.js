import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Senior Care',
    img: require('@site/static/img/senior_care.png').default,
    description: (
      <>
        Help elders with low income to have basic medical care. 
      </>
    ),
  },
  {
    title: 'Equal Education',
    img: require('@site/static/img/education.png').default,
    description: (
      <>
        Ensure children from low income family to get educated. 
      </>
    ),
  },
  {
    title: 'Unlock Potential',
    img: require('@site/static/img/potential.png').default,
    description: (
      <>
        Break the cycle of poverty and empower individuals to reach their full potential.
      </>
    ),
  },
];

function Feature({img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={img} className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
