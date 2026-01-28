import { Routes, Route, BrowserRouter } from 'react-router-dom';
import CVPreview from './components/CVPreview';
import Editor from './components/Editor';
import { CVProvider } from './context/CVProvider';

function App() {
  return (
    <CVProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Editor />} />
          <Route path="/preview" element={<CVPreview />} />
        </Routes>
      </BrowserRouter>
    </CVProvider>
  );
}

export default App;
