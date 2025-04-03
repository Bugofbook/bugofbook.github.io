import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type HeaderProps = {
  title: string;
  description: string;
}

function Header({title, description }: HeaderProps) {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {title}
        </Heading>
        {description}
      </div>
    </header>
  );
}
export default Header
