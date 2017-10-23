import * as React from 'react';

interface User {
    name: string;
    email: string;
}

interface IState {
    users: User[];
}

class GithubUsers extends React.Component<{}, IState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users: User[]) => {
                this.setState({users});
            });
    }

    render() {
        return (
            <div>
                {this.state.users.map((user, index) => (
                    <div key={index}>
                        <div style={{border: '1px solid', padding: 4}}>
                            <div>
                                {user.name}
                            </div>

                            <div>
                                {user.email}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default GithubUsers;