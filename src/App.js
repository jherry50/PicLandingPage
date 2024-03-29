import './App.css';
import './styles/app.scss';
import { Route, BrowserRouter } from "react-router-dom";
import Pages from "./pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={Pages} />
      </BrowserRouter>
    </div>
  );
}

export default App;
