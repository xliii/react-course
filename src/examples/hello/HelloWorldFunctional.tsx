import * as React from 'react';

const HelloWorldFunctional = function(props: {name?: string}) {
    if (!props.name) {
        return <div>Hello World!</div>;
    }

    return <div>Hello {props.name}</div>;
};

export default HelloWorldFunctional;