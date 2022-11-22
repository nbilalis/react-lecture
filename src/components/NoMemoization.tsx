import { useState } from 'react';

import useLogRender from '@/hooks/useLogRender';

import List from './List';

function NoMemoization() {
  useLogRender('NoMemoization');

  const [counter, setCounter] = useState(0);

  return (
    <>
      <h2>No memoization</h2>
      <p>
        Upper counter: {counter} -{' '}
        <button
          onClick={() => {
            setCounter((c) => c + 1);
          }}
        >
          Click me
        </button>
      </p>
      <List color="whitesmoke" />
    </>
  );
}

export default NoMemoization;
