import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { myContext } from '../Context'
import { useContext } from 'react';
import axios from 'axios';

const NavBar = () => {

    const userObject = useContext(myContext);

    const GoogleLogin = () => {
        window.open('http://localhost:5000/auth/google', "_self");
    }

    const GoogleLogout = () => {
        axios.get("/auth/logout", {
            withCredentials: true
        }).then((res) => {
            if (res.data === "done") {
                window.location.href = "/"
            }
        })
    }

    return (
        <>
            <Navbar sticky="top" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/tbvbvipimh2camf5nb2q"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="Website logo"
                        />
                        Enigma
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/play">Play!</Nav.Link>
                        <Nav.Link href="/leaderboard">Leaderboard</Nav.Link>
                    </Nav>
                    <Nav>
                        {userObject ? (
                            <>
                                <Dropdown>
                                    <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                        {userObject.username}
                                        {/* <img
                                            src={userObject.result.imageUrl}
                                            width="37"
                                            height="37"
                                            className="d-inline-block "
                                            alt="Website logo"
                                        /> */}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu variant="dark">
                                        <Dropdown.Item href="/profile">My Profile</Dropdown.Item>
                                        <Dropdown.Item href="/play">Play</Dropdown.Item>
                                        <Dropdown.Item href="/leaderboard">Leaderboard</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item href="#" onClick={GoogleLogout}>
                                            Logout
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                                <Button variant="outline-warning" onClick={GoogleLogout}>
                                    Log out
                                </Button>
                            </>
                        ) : (
                            <Button variant="outline-warning" onClick={GoogleLogin}>
                                Login with Google
                            </Button>
                        )}
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;