import About from 'pages/About';
import Home from 'pages/Home';
import { HashRouter, Routes, Route } from 'react-router-dom';

const App = () => (
    <HashRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
    </HashRouter>
);

export default App;
