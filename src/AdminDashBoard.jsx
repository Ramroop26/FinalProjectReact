import { Link, Outlet } from "react-router-dom";
import './CSS/AdminDashBoard.css';

const AdminDashBoard=()=>{


   // const navigate = useNavigate();



    return(
        <>
        <div id="adminheader">
              <marquee behavior="" direction="" >Welcome To Admin DashBoard</marquee>
           </div>
           <div id="adminwrapper">
              <div id="leftmenu"> 
                   
               <Link to="addproduct" className="adminmenu">  Upload Product </Link>
               <Link to="orderlist" className="adminmenu">Oder List</Link> 
               <Link to="/home" className="adminmenu">LogOut</Link>   


              </div>
              <div id="admindata">
                 <Outlet/>

              </div>

           </div>
        </>
    )
}
export default AdminDashBoard;