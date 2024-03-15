"use client";
import { store } from "@/lib/features/store";
import { Provider } from "react-redux";

import TodoContainer from "@/components/TodoContainer";

export default function Home() {
  return (
    <Provider store={store}>
      <TodoContainer />
    </Provider>
  );
}
