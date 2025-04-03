import React from 'react';
import type { ComponentProps } from 'react'
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import EntryCard from '@site/src/entities/entryCard'
type HeroItem = ComponentProps<typeof EntryCard>
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
]
type ListProps = {
  items: Array<HeroItem>
}
function HomepageFeatures({items}: ListProps): JSX.Element {
  return (
    <section className={styles.features}>
      {items.map((props, idx) => (
        <EntryCard key={idx} {...props} />
      ))}
    </section>
  );
}
export default HomepageFeatures;
