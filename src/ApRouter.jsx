import {BrowserRouter, Routers, Route} from "react-router-dom"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Profile from ".Pages/Profile"
import App from "./App"
import 'bootatrap/disct/css/bootstrap.min.css';
import {Navbar,Nav, Container} from 'react-bootstrap'


const AppRouter = () =>{
    return( 
        <BrowserRouter>
        import {Link} from "react-router-dom";
        import {NavLink, Navbar, Nav, Container} from "react-bootstrap"
        import 'bootstrap/dist/css/bootstrap.min.css';
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <Nav ClassName="me-auto">
            <Nav.Link to="/">Home</Nav.Link>
            <Nav.Link to="/Profile">Profile</Nav.Link>
            <Nav.Link to="/Contact">Contact</Nav.Link>
            <Nav.Link to="/About">About</Nav.Link>
        </Nav>
        </Container>
        </Navbar>
        <Routes>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Profile" element={<Profile/>} />
            <Route path="/" element={<App />} />

        </Routes>
        </BrowserRouter>
    )
}
export default AppRouter