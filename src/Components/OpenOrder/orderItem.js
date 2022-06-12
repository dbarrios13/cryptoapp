import { Accordion, Table } from "react-bootstrap";

export function OpenOrderItem(props) {
    let item = props.item;
    return (
        <>
            <Accordion.Item eventKey={props.eventKey}>
                <Accordion.Header>Open: {item.date} | Price Bought: ${item.priceBought} | Amount: {item.amount} ETH | Profit: +$1.06</Accordion.Header>
                <Accordion.Body>
                    <Table striped bordered hover variant="dark">
                        <tbody>
                            <tr>
                                <td>Date: {item.date}</td>
                                <td>Price Bought: ${item.priceBought}</td>
                                <td>Coin amount: {item.amount}</td>
                            </tr>
                            <tr>
                                <td>Open: {item.date}</td>
                                <td>Current Profit: $1.06</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>1%: </td>
                                <td>2%: </td>
                                <td>3%: </td>
                            </tr>
                        </tbody>
                    </Table>
                </Accordion.Body>
            </Accordion.Item>
        </>
    )
}

export default OpenOrderItem;