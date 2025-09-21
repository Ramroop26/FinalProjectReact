// import Header from "./component/Header";
import Menu from "./component/Manu";
import Footer from "./component/Footer";
import { Outlet } from "react-router-dom";





const Layout=()=>{
    return(

        <>
   <div id="topNav">
              {/* <Header/> */}
             <Menu/>
             
          </div>
           
           

             <Outlet/>

             <Footer/>

  

   
   
        </>
    )
}
export default Layout;