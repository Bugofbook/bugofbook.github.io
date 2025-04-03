import React from 'react';
import Link from '@docusaurus/Link';
type EntryItem = {
  title: string;
  subTitle: string;
  link: string;
};

function Card({ title, subTitle, link }: EntryItem) {
  return (
    <section className='card'>
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
            進入
          </Link>
        </div>
    </section>
  );
}
export default Card
