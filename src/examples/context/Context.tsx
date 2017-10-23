import * as React from 'react';
import * as PropTypes from 'prop-types';

class ThemedText extends React.Component {
    static contextTypes = {
        primaryColor: PropTypes.string
    };

    render() {
        return (
            <div style={{color: this.context.primaryColor}}>
                {this.props.children}
            </div>
        );
    }
}

class Context extends React.Component {
    static childContextTypes = {
        primaryColor: PropTypes.string
    };

    getChildContext() {
        return {primaryColor: 'red '};
    }

    render() {
        return (
            <ThemedText>
                text
            </ThemedText>
        )
    }
}

export default Context;