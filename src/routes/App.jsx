import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from '../containers/Home';
import Another from '../containers/Another';
import NotFound from '../containers/NotFound';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path="/Another" element={<Another/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;