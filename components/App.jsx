import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { decrement, increment } from '../slices/counterSlice';

export default function App() {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          type="button"
          onClick={() => dispatch(increment())}
        >
          Прибавить
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          type="button"
          onClick={() => dispatch(decrement())}
        >
          Отнять
        </button>
      </div>
    </div>
  );
}
