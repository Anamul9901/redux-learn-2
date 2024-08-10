import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { RootState } from "./redux/store";
import { decrement, increment } from "./redux/features/counterSlice";

function App() {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h3>Redux toolkit</h3>
        <p>{count}</p>
        <button onClick={() => dispatch(decrement())}>dic</button>
        <button onClick={() => dispatch(increment())}>inc</button>
      </div>
    </>
  );
}

export default App;
