import * as React from 'react';
import Users from './Users';
import BrokenList from './BrokenList';

class Lists extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <Users/>
                </div>

                <div className="col-md-4">
                    <BrokenList />
                </div>

            </div>
        );
    }
}

export default Lists;