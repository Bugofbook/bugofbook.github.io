import type { ComponentProps } from 'react';
import React from 'react';
import EntryHeader from '@site/src/entities/entryHeader';
import EntryList from '@site/src/features/entryList';

type Props = {
  header: ComponentProps<typeof EntryHeader>;
  list: ComponentProps<typeof EntryList>;
}

function Widget({header, list}: Props): JSX.Element {
  return (
  <div>
    <EntryHeader
      {...header}
    />
    <main>
      <EntryList {...list} />
    </main>
  </div>
);
}

export default Widget;
