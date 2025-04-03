import React from 'react';
import Layout from '@theme/Layout';
import EntryWidget from '@site/src/widgets/entryWidget';
function Component(): JSX.Element {
  const header = {
    title: 'Javascript',
    description: '這裡放著和Javascript有關的文章與筆記',
  }
  const list = {
    items: [
      {
        title: 'React',
        subTitle: '這裡放著我學習React的筆記。',
        link: '/react-docs/ReactElement',
      },
    ],
  }
  return (
    <Layout
      title={header.title}
      description={header.description}
    >
      <EntryWidget
        header={header}
        list={list}
        />
    </Layout>
  );
}
export default Component
