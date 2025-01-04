import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './client/blog/HomePage';
import AddBlog from './client/blog/AddBlog';
import EditBlog from './client/blog/EditBlog';

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add" element={<AddBlog />} />
            <Route path="/edit/:id" element={<EditBlog />} />
        </Routes>
    </Router>
);

export default App;
