import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css'
import Rotation from '@site/src/features/rotateList'
import EntryHeader from '@site/src/entities/entryHeader'
import Link from '@docusaurus/Link'
const items = [
  <Link
    className={styles['entry__cycle']}
    to='/blog'
    style={{
      color: 'black'
    }}
  >
    Blog
  </Link>,
  <Link
    className={styles['entry__cycle']}
    to='/pages/javascript'
    style={{
      color: 'black'
    }}
  >
    Javascript
  </Link>
]
function Component (): JSX.Element {
  const { siteConfig }=useDocusaurusContext();
  return (
    <main className={styles.main}>
      <EntryHeader
        title={`${siteConfig.title}`}
        description='這裡是我的個人網站，這裡放著我學習的筆記與心得。'
      />
      <div className={styles['main__content']}>
        <Rotation items={items} />
      </div>
    </main>
  )
}
export default Component
