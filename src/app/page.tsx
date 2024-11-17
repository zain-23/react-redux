"use client";

import {
  decrement,
  increment,
  incrementByAmount,
} from "@/store/slices/counter-slice";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/store/index";

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h1>Counter: {count}</h1>
        <div className="flex flex-col gap-y-4 items-start">
          <button
            className="bg-white text-black px-4 py-3"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <button
            className="bg-white text-black px-4 py-3"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
          <button
            className="bg-white text-black px-4 py-3"
            onClick={() => dispatch(incrementByAmount(5))}
          >
            Increment by 5
          </button>
        </div>
      </div>
    </>
  );
}
