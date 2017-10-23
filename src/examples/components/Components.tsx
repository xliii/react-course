import * as React from 'react';
import HelloWorldClass from '../hello/HelloWorldClass';
import HelloWorldChildren from '../hello/HelloWorldChildren';
import helloWorldConst from '../hello/hello-const';
import helloWorld from '../hello/hello-function';
import HelloWorldFunctional from '../hello/HelloWorldFunctional';

class Components extends React.Component {
    render() {
        return (
            <div>
                {helloWorldConst}
                {helloWorld('just function')}

                <HelloWorldFunctional name="Functional Component"/>

                <HelloWorldClass name="Class Component"/>
                <HelloWorldChildren>
                    Class Component with children
                </HelloWorldChildren>
            </div>
        );
    }
}

export default Components;
