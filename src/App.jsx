import { Routes, Route } from 'react-router-dom';
import Root from './Root';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        {/* পরে আরো page অ্যাড করবে এভাবে: */}
        {/* <Route path="about" element={<About />} /> */}
      
      </Route>
    </Routes>
  );
}

export default App;