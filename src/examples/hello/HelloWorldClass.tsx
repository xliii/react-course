import * as React from 'react';

/*
    1. props are immutable

 */

class HelloWorldClass extends React.Component<{name?: string}> {
    render() {
        if (!this.props.name) {
            return <div>Hello World!</div>;
        }

        return <div>Hello {this.props.name}</div>;
    }
}

export default HelloWorldClass;