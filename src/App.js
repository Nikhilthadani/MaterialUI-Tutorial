import { Route, Routes } from "react-router-dom";
import Data from "./Data";
import DataItem from "./DataItem";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Data />} />
        <Route path="/:id" element={<DataItem />} />
      </Routes>
    </div>
  );
}

export default App;
