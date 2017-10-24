import * as React from 'react';
import { IPhone } from './Phones';
import './cart.css';

export interface CartItem {
    phone: IPhone;
    amount: number;
}

interface Props {
    items: CartItem[];
    onRemove: (phone: IPhone) => void;
}

interface CartItemProps {
    item: CartItem;
    onRemove: (phone: IPhone) => void;
}

class CartItemComponent extends React.Component<CartItemProps, {}> {
    constructor(props: CartItemProps) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    render() {
        const {item} = this.props;
        return (
            <tr>
                <td>{item.phone.name}</td>
                <td>{item.amount}</td>
                <td>{item.phone.price * item.amount}</td>
                <td className="remove"><a onClick={this.onClick}>Remove</a></td>
            </tr>
        );
    }

    onClick(): void {
        this.props.onRemove(this.props.item.phone);
    }
}

class Cart extends React.Component<Props, {}> {

    render() {

        let header: any = (
            <span>
                {this.totalAmount()} item(s) ({this.totalPrice()})
            </span>
        );

        if (this.empty()) {
            header = <span>Empty</span>;
        }

        let table: any = (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Count</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {this.props.items.map((item, index) => (
                    <CartItemComponent key={index} item={item} onRemove={this.props.onRemove}/>
                ))}
                </tbody>
            </table>
        );

        return (
            <div>
                <span className="header">Cart</span> {header}
                {this.empty() ? <div/> : table}
            </div>
        );
    }

    private empty = () => this.totalAmount() === 0;

    private totalAmount = () => this.props.items.length;

    private totalPrice = () => this.props.items.reduce((sum, item) => sum + item.phone.price * item.amount, 0);
}

export default Cart;