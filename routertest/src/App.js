import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Page4 from './Page4';
import Page5 from './Page5';


function App(props){


return(
<BrowserRouter>
<Routes>
    <Route exact path = "/" />
    <Route exact path = "/page4" element={<Page4/>} />
    <Route exact path = "/page5/:type" element={<Page5/>} /> 
</Routes>
</BrowserRouter>

);

}

export default App;