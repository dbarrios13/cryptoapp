import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavbarComponent() {
    return (
        <>
            <Nav variant="tabs" defaultActiveKey="/">
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/" className="navlinks">Open Orders</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/closed" className="navlinks">Closed Order</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                        All Orders
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item >
                    <Nav.Link eventKey="disabled" disabled>
                        Profit: <span className="profitGreen" >$100</span>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                        Loss: <span className="lossRed">-$5</span>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                        Total: <span className="">$95</span>
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    )
}

export default NavbarComponent;