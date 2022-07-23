import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from '../containers/Home';
import Emojis from '../containers/Emojis';
import NotFound from '../containers/NotFound';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path="/Emojis" element={<Emojis/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;