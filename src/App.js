import React from "react";
import Home from '../src/components/Home/Home';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Detail from "../src/components/Detail/Detail";
import ImageList from "../src/components/ImageList/ImageList";
import Imagelistor from "../src/components/ImageListor/Imagelistor";
import Register from "../src/components/Register/Register";


function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Home />}/>
        <Route path="/detail/:id" element ={<Detail />}/>
        <Route path="/imagelist" element ={<ImageList />}/>
        <Route path="/imagelistor" element ={<Imagelistor />}/>
        <Route path="/register" element ={<Register />}/>
      </Routes>
      </BrowserRouter>
    </div>
    
    );
}

export default App;

// cloudfare
//gtmatrix
//pagespeed insight
//web master tool
//google tag manager
//google analytics
//search console











// <BrowserRouter>
    //   <Routes>

    //     <Route path="/" element={<Header />}>
    //       <Route index element={<Explore />} />
    //       <Route path="/Host" element={<Host />} />
    //       <Route path="/Live" element={<Live />} />
    //       <Route path="*" element={<Header />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>

    // <Router>
    //   <Switch>
    //     <Route path="" component = {}/>
    //     <Route path="" component = {}/>
    //     <Route path="" component = {}/>
    //   </Switch>
    // </Router>