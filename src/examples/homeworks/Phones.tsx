import * as React from 'react';
import fetchProducts from './fetchProducts';

export interface IPhone {
    name: string;
    price: number;
}

interface Props {
    addItem: (phone: IPhone) => void;
}

interface State {
    phones: IPhone[];
}

export class Phones extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            phones: []
        };
    }

    componentDidMount() {
        fetchProducts().then((products: IPhone[]) => {
            this.setState({phones: products});
        });
    }

    render() {
        return (
            <div>
                {this.state.phones.map((phone, index) => (
                    <div key={index} style={{border: '1px solid black'}}>
                        <PhoneComponent phone={phone} addItem={this.props.addItem}/>
                    </div>
                ))}
            </div>
        );
    }
}

interface PhoneProps {
    phone: IPhone;
    addItem: (phone: IPhone) => void;
}

class PhoneComponent extends React.Component<PhoneProps, IPhone> {
    constructor(props: PhoneProps) {
        super(props);
        this.state = props.phone;
        this.onClick = this.onClick.bind(this);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-8">
                    {this.state.name} ({this.state.price})
                </div>
                <div className="col-md-3">
                    <button onClick={this.onClick} className="btn btn-default">
                        Add
                    </button>
                </div>
            </div>
        );
    }

    onClick(): void {
        this.props.addItem(this.state);
    }
}