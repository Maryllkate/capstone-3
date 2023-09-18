import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';

export default function Cart(){

    return(
        <div className="container">
            <div className="cart-page">
                <div className="text-center mt-3">
                    <h2>Your Shopping Cart</h2>
                </div>
            </div>
    <div className="table-container">
        <div className="mt-4">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Item No.</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>                       
                        <td>Total:</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>PHP</td>
                    </tr>
                </tbody>
            </Table>
        </div>

        <Button variant="primary">Checkout</Button>

    </div>

    </div>
    )
    
}