import { NavLink } from "react-router-dom";

function Nav() {
  return (

    //add with style home user button becoming red after selection
    // <nav className="w-full mt-7 flex justify-center items-center gap-8 text-lg font-semibold mb-8">
    //   <NavLink
    //     style={(e) => {
    //       return {
    //         color: e.isActive ? "tomato" : "",
    //       };
    //     }}
    //     to="/"
    //   >
    //     Home
    //   </NavLink>
    //   <NavLink
    //     style={(e) => {
    //       return {
    //         color: e.isActive ? "tomato" : "",
    //       };
    //     }}
    //     to="/User"
    //   >
    //     User
    //   </NavLink>
    //   <NavLink
    //     style={(e) => {
    //       return {
    //         color: e.isActive ? "tomato" : "",
    //       };
    //     }}
    //     to="/About"
    //   >
    //     About
    //   </NavLink>
    // </nav>



    <nav className="w-full mt-7 flex justify-center items-center gap-8 text-lg font-semibold mb-8">
      <NavLink
        className={(e)=>{
          return [
              e.isActive ? "bg-red-500" : "",
              e.isActive ? "px-3" : "",
              e.isActive ? "py-1" : "",
              e.isActive ? "text-white" : "",
              e.isActive ? "rounded-2xl" : "",
            ].join(" ")
          
        }}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={(e)=>{
          return [
              e.isActive ? "bg-red-500" : "",
              e.isActive ? "px-3" : "",
              e.isActive ? "py-1" : "",
              e.isActive ? "text-white" : "",
              e.isActive ? "rounded-2xl" : "",
            ].join(" ")
          
        }}
        to="/User"
      >
        User
      </NavLink>
      <NavLink
        className={(e)=>{
          return [
              e.isActive ? "bg-red-500" : "",
              e.isActive ? "px-3" : "",
              e.isActive ? "py-1" : "",
              e.isActive ? "text-white" : "",
              e.isActive ? "rounded-2xl" : "",


            ].join(" ")
          
        }}
        to="/About"
      >
        About
      </NavLink>
    </nav>



  );
}

export default Nav;
