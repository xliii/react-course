import * as React from 'react';

class HelloWorldChildren extends React.Component {
    render() {
        return <div>Hello {this.props.children}</div>;
    }
}

export default HelloWorldChildren;