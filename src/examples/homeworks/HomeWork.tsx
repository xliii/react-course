import * as React from 'react';
import { Phones, IPhone } from './Phones';
import Cart, { CartItem } from './Cart';

interface State {
    items: CartItem[];
}

class HomeWork extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            items: []
        };
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <Phones addItem={this.addItem}/>
                </div>

                <div className="col-md-4">
                    <Cart items={this.state.items} onRemove={this.removeItem}/>
                </div>
            </div>
        );
    }

    removeItem(phone: IPhone) {
        let index = this.state.items.findIndex(item => item.phone === phone);
        let targetItem = this.state.items[index];
        if (--targetItem.amount > 0) {
            this.setState((prevState, props) => ({
                items: [...prevState.items.slice(0, index), targetItem, ...prevState.items.slice(index + 1)]
            }));
        } else {
            this.setState((prevState, props) => ({
                items: [...prevState.items.slice(0, index), ...prevState.items.slice(index + 1)]
            }));
        }
    }

    addItem(phone: IPhone) {
        let index = this.state.items.findIndex(item => item.phone === phone);
        if (index >= 0) {
            let item = this.state.items[index];
            item.amount++;
            this.setState((prevState, props) => ({
                items: [...prevState.items.slice(0, index), item, ...prevState.items.slice(index + 1)]
            }));
        } else {
            this.setState((prevState, props) => ({
                items: [...prevState.items, {
                    phone: phone,
                    amount: 1
                }]
            }));
        }
    }
}

export default HomeWork;