import * as React from 'react';

export default function helloWorld(name?: string) {
    if (!name) {
        return <div>Hello World!</div>;
    }

    return <div>Hello {name}</div>;
}