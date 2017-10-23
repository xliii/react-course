import * as React from 'react';

interface IState {
    items: string[];
}

class Item extends React.Component<{index: number, onRemove: (index: number) => void}> {
    render() {
        return (
            <div>
                <input type="text"/>
                <button onClick={this.handleRemove}>X</button>
            </div>
        );
    }

    private handleRemove = () => {
        this.props.onRemove(this.props.index);
    }
}

class BrokenList extends React.Component<{}, IState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            items: new Array(3).fill(null)
        };
    }

    render() {
        return (
            <div>
                {this.state.items.map((user, index) => (
                   <Item
                       key={index}
                       index={index}
                       onRemove={this.removeItem}
                   />
                ))}
                <button onClick={this.addItem}>Add</button>
            </div>
        );
    }

    private addItem = () => this.setState((prevState => ({items: [...prevState.items, '']})));

    private removeItem = (indexToRemove: number) =>
        this.setState((prevState => ({items: prevState.items.filter((item, index) => index !== indexToRemove)})))
}

export default BrokenList;