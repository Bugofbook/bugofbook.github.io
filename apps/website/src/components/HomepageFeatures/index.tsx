import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type HeroItem = {
  title: string;
  subTitle: string;
  link: string;
};
const HeroList: HeroItem[] = [
  {
    title: 'Ｂlog',
    subTitle: '這裡放著我寫的一些Blog文章，有些是生活感想，有些是閱讀心得。',
    link: '/blog',
  },
  {
    title: 'Javascript',
    subTitle: '這裡放著我學習Javascript的心得與筆記。',
    link: '/docs/javascript',
  },
  // {
  //   title: 'Powered by React',
  //   subTitle: 'Extend or customize your website layout by reusing React. Docusaurus can be extended while reusing the same header and footer.',
  //   link: '/docs/intro',
  // },
]
function HeroCard({ title, subTitle, link }: HeroItem) {
  return (
    <div className='card'>
        <div className='card__header'>
          <h3>{title}</h3>
        </div>
        <div className="card__body">
          <p>{subTitle}</p>
        </div>
        <div className="card__footer">
            <Link
            className="button button--secondary button--outline button--lg"
            to={link}
          >
            Get Started
          </Link>
        </div>
    </div>
  );
}
export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      {HeroList.map((props, idx) => (
        <HeroCard key={idx} {...props} />
      ))}
    </section>
  );
}
