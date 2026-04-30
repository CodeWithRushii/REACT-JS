import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "./app/store";
import { decrement, increment, reset } from "./features/counter/counterSlice";
import Header from "./components/header";

export default function App() {
  const counter = useSelector((state: RootState) => state.counterReducer.counter);
  const theme = useSelector((state: RootState) => state.theme.mode); // Theme state access
  const dispatch = useDispatch();

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      theme === "dark" ? "bg-slate-950 text-white" : "bg-gray-50 text-slate-900"
    }`}>
      <Header />

      <main className="flex flex-col items-center justify-center pt-20 px-4">
        {/* Card Container */}
        <div className={`w-full max-w-md p-8 rounded-3xl border shadow-xl transition-all ${
          theme === "dark" 
          ? "bg-slate-900 border-slate-800 shadow-indigo-500/10" 
          : "bg-white border-gray-100 shadow-gray-200"
        }`}>
          
          <div className="text-center space-y-2 mb-8">
            <h1 className="text-sm font-bold tracking-widest uppercase text-indigo-500">
              Redux Toolkit
            </h1>
            <h2 className="text-3xl font-extrabold tracking-tight">
              Dashboard Counter
            </h2>
          </div>

          {/* Counter Display */}
          <div className={`text-6xl font-black tabular-nums text-center py-10 rounded-2xl mb-8 ${
            theme === "dark" ? "bg-slate-800 text-indigo-400" : "bg-indigo-50 text-indigo-600"
          }`}>
            {counter}
          </div>

          {/* Controls */}
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => dispatch(increment())} 
              className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-indigo-500/30 transition-all active:scale-95"
            >
              <span className="text-xl">▲</span> Increment
            </button>
            
            <button 
              onClick={() => dispatch(decrement())} 
              className="flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-rose-500/30 transition-all active:scale-95"
            >
              <span className="text-xl">▼</span> Decrement
            </button>

            <button 
              onClick={() => dispatch(reset())} 
              className={`col-span-2 py-3 rounded-xl font-medium border-2 transition-all active:scale-[0.98] ${
                theme === "dark" 
                ? "border-slate-700 text-slate-400 hover:bg-slate-800 hover:text-white" 
                : "border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-black"
              }`}
            >
              Reset to Zero
            </button>
          </div>
        </div>

        {/* Quick Help Footer */}
        <p className="mt-8 text-sm text-gray-500 font-medium tracking-tight">
          Global State Managed via <span className="text-indigo-500">Redux Reducer</span>
        </p>
      </main>
    </div>
  );
}