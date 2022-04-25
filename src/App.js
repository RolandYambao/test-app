import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

// Components
import Test from "./components/Test";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Test />} />
        </Routes>
    </Router>
  );
}

export default App;
