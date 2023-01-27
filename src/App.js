import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Box } from '@mui/material';

import {Navbar,Video,Channel,Feed,Search} from "./components/Routes";

const App = () => (
<BrowserRouter>
    <Box sx={{backgroundColor:"#000"}}>
    <Navbar/>
        <Routes>
            <Route path="/" exact element={<Feed/>}/>
            <Route path="/channel/:id" element={<Channel/>}/>
            <Route path="/video/:id" element={<Video/>}/>
            <Route path="/search/:SearchTerm" element={<Search/>}/>
        </Routes>
    </Box>
</BrowserRouter>  
);

export default App