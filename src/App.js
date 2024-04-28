import Header from './Pages/Header';
import SignUpPage from './Pages/SignUpPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>

      <Router basename="/vincitfx_webapp">
          <Routes>
            <Route exact path="" element={<Header />} />
            <Route path="signup" element={<SignUpPage />} ></Route>
          </Routes>
      </Router>
    </div>

  );
}

export default App;
