import{ useState, useEffect }from "react";
import { Navbar, Container, Nav } from "react-bootstrap"; 

import { navLinks } from "../data/index";
import { NavLink } from "react-router-dom";

const NavbarComponen = () => {
  const[changeColor, setChangColor] = useState(false);

  const changeBackgroundcolor = () => {
    if (window.scrollY > 10) {
      setChangColor(true);
    }else {
      setChangColor(false)
    }
  };

  useEffect(() => {
    changeBackgroundcolor();

    window.addEventListener('scroll', changeBackgroundcolor)
  });

  return (
    <div>
      <Navbar expand="lg" className={changeColor ? "color-active" : "" }> 
        <Container>
          <Navbar.Brand href="#home"className="fs-3 fw-bold">
            ngoding .
            </Navbar.Brand> 
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"> 
            <Nav className="mx-auto text-center">
              {navLinks.map((link) => {
                return (
                  <div className="nav-link" key={link.id}> 
                    <NavLink to={link.path}className={({ isActive, isPending }) =>
                              isPending ? "pending" : isActive ? "active" : ""}end>
                                {link.text}
                    </NavLink>
                  </div>
                );
              })}
            </Nav> 
              
            <div className="text-center">
              <button className="btn btn-outline-danger rounded-1">Join With Us</button> 
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponen;
