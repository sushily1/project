
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Skills from "./modules/Skills";
import Radio from "./modules/radio";
import Show from "./modules/Show";
import User from "./modules/User";
import Appclock from "./modules/Appclock";
import Svar from "./modules/Svar";

import "./css/style.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/sv" element={<Svar/>}/>
        <Route path="/skills" element={<Skills />}/>
        <Route path="/radio" element={<Radio />}/>
        <Route path="/show" element={<Show />}/>
        <Route path="/user" element={<User />}/>
        <Route path="/clock" element={<Appclock/>}/>
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
