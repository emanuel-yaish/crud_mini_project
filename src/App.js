import { BrowserRouter, Routes, Route } from "react-router-dom";
import CommentWrapper from "./components/CommentWrapper";
import Comments from "./components/Comments";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Comments />} />
          <Route path="/comments/:commentid" element={<CommentWrapper />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
