import { Accordion, Container } from 'react-bootstrap';
import { OpenOrderItem } from "./orderItem.js";

function OpenOrder() {
    let orderItems = [
        {
            "date": "06/08/2022",
            "priceBought": "1640",
            "amount": "0.0875",
        },
        {
            "date": "06/08/2022",
            "priceBought": "1640",
            "amount": "0.0875",
        },
        {
            "date": "06/08/2022",
            "priceBought": "1640",
            "amount": "0.0875",
        }
    ]

    return (
        <Container>
            <Accordion alwaysOpen>
                {orderItems.map((item, index) => 
                    <OpenOrderItem  item={item} key={index} eventKey={index}/>
                )}
            </Accordion>
        </Container>
    )
}

export default OpenOrder;