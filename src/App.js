import './App.scss';
import './styles/partials/_variables.scss';
import './styles/partials/_mixins.scss';
import './styles/partials/_global.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Upload from './pages/UploadPage/UploadPage';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage  />} />
          <Route path="/videos/:id" element={<HomePage />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
