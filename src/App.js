import React from "react";
import Home from '../src/components/Home/Home';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Detail from "../src/components/Detail/Detail";
import ImageList from "../src/components/ImageList/ImageList";
import Imagelistor from "../src/components/ImageListor/Imagelistor";
import Register from "../src/components/Register/Register";
import Checkinout from "./components/Checkinout/Checkinout";
import Hostpage1 from "./components/Hostpage1/Hostpage1";
import Hostpage1a from "./components/Hostpage1a/Hostpage1a";
import Hostpage2 from "./components/Hostpage2/Hostpage2";
import Hostpage3 from "./components/Hostpage3/Hostpage3";
import Hostflat from "./components/Hostflat/Hostflat";
import Hostflat1 from "./components/Hostflat1/Hostflat1";
import Secondary from "./components/Hostsecondary/Secondary";
import Unique from "./components/Hostunique/Unique";
import Bed from "./components/Hostbed/Bed";
import Boutique from "./components/Hostboutique/Boutique";



function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Home />}/>
        <Route path="/hostpage1" element ={<Hostpage1 />}/>
        <Route path="/hostpage1a" element ={<Hostpage1a />}/>
        <Route path="/hostpage2" element ={<Hostpage2 />}/>
        <Route path="/hostpage3" element ={<Hostpage3 />}/>
        <Route path="/hostflat" element ={<Hostflat />}/>
        <Route path="/secondary" element ={<Secondary />}/>
        <Route path="/unique" element ={<Unique />}/>
        <Route path="/bed" element ={<Bed />}/>
        <Route path="/hostflat1" element ={<Hostflat1 />}/>
        <Route path="/boutique" element ={<Boutique/>}/>
        <Route path="/checkinout" element ={<Checkinout />}/>
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