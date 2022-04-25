import React from "react";
import Header from "./Header";
import MarketControl from "./MarketControl"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
   return ( 
      <React.Fragment>
         <div className="container">
            <div className="row">
               <Header />
            </div>
            <div className="row">
               <MarketControl />
            </div>  
         </div>
      </React.Fragment>
   );
}

export default App;