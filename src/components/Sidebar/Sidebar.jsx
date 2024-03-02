import { SignedOut, SignedIn, UserButton } from "@clerk/clerk-react"
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { navLinks } from "../../constants";
import "./sidebar.css";

const Sidebar = () => {

  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const handlePathnameChange = () => {
      setPathname(window.location.pathname);
    };

    // Subscribe to the 'popstate' event to detect back/forward navigation
    window.addEventListener('popstate', handlePathnameChange);

    // Cleanup function
    return () => {
      window.removeEventListener('popstate', handlePathnameChange);
    };
  }, []);


  return (
    <aside className="sidebar" >
      <div className="sidebar-container">
        <Link to='/'>
          <img src="/assets/icons/logo3.svg" alt="logo" width={150} height={70} />
        </Link>
        <nav className="sidebar-nav">
          <SignedIn>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(0,4).map((link) => {
                const isActive = pathname === link.route;

                return (
                  <li key={link.route} className="sidebar-nav_element">
                    <Link to={link.route} className='sidebar-link' >
                      <img src={isActive ? link.active : link.icon} alt={link.label} width={24} height={24} style={isActive ? {color: "#208dbf"} : {color: "#fff"}}/>
                      <span className="sidebar-label" style={isActive ? {color: "#208dbf", fontWeight: "bold"} : {color: "#fff"}}>{link.label}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>

            <ul className="sidebar-nav_elements" style={{alignItems: "center"}}>
              {navLinks.slice(4).map((link) => {
                const isActive = pathname === link.route;

                return (
                  <li key={link.route} className="" style={{listStyle: "none", fontSize: "20px"}}>
                    <Link to={link.route} className='sidebar-link' >
                      <img src={link.icon} alt={link.label} width={24} height={24}/>
                      <span className="sidebar-label" style={{fontSize: "18px"}}>{link.label}</span>
                    </Link>
                  </li>
                )
              })}
              <button className="sidebar-help-button">
                Need help?
              </button>
                {/* <li className="sidebar-user-button" >
                    <UserButton afterSignOutUrl='/' />
                </li> */}

            </ul>
          </SignedIn>
        </nav>
      </div>
    </aside>
)
}

export default Sidebar

// className={isActive ? "active" : ""}