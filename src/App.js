import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavbarComponent, OpenOrder, ClosedOrder} from './Components/main.js';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <Routes>
        <Route path="/" element={<OpenOrder/>} />
        <Route path="/closed" element={<ClosedOrder/>} />
      </Routes>
    </div>
  );
}

export default App;
