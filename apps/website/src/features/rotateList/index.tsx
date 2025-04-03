import React from 'react';
import type { ReactElement } from 'react';
import styles from './styles.module.css';
import RotateItem from './item';
type Props = {
  items: ReactElement[]
}
function Component({items}: Props): JSX.Element {
  const initialRotationDegrees = items.map((_, index, items) => (360 / items.length) * index);
  return (
    <div className={styles['rotating-container']}>
      {
        items.map((item, index) => (
          <RotateItem
            key={initialRotationDegrees[index]}
            initialRotationDegree={initialRotationDegrees[index]}
          >
            {item}
          </RotateItem>
        ))
      }
    </div>
  );
}
export default Component;
