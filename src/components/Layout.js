/** This Layout component is a parent component for dashboard */

import { Outlet } from "react-router-dom";
import Header from "./shared/Header";
const Layout = function(){
    return(
    <>
      <Header />
      <div className="container" style={{marginTop:'5rem'}}>    
          {<Outlet />}
      </div>
    </>
    );
}

export default Layout;