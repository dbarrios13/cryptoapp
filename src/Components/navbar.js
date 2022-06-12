import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function NavbarComponent() {
    let navlink = "navlinks";
    let activelink = "activelink";

    return (
        <>
            <Nav fill variant="tabs" defaultActiveKey="/">
                <Nav.Item>
                    <NavLink to="/" className={({ isActive }) => isActive ? activelink : navlink}>Open Orders</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="/closed" className={({ isActive }) => isActive ? activelink : navlink}>Closed Order</NavLink>
                </Nav.Item>
                <Nav.Item>
                    All Orders
                </Nav.Item>
                <Nav.Item >
                    Profit: <span className="profitGreen" >$100</span>
                </Nav.Item>
                <Nav.Item>
                    Loss: <span className="lossRed">-$5</span>
                </Nav.Item>
                <Nav.Item>
                    Total: <span className="">$95</span>
                </Nav.Item>
            </Nav>
        </>
    )
}

export default NavbarComponent;