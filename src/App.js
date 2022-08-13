import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Game from './components/Game';
import MainPage from './components/MainPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainPage/>} />
        <Route exact path="/game" element={<Game/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
