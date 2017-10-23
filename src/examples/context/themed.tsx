import * as React from 'react';
import * as PropTypes from 'prop-types';

export interface ThemedProps {
    theme?: {
        primaryColor: string;
    };
}

export class ThemeProvider extends React.Component<{primaryColor: string; }> {
    static childContextTypes = {
        theme: PropTypes.any
    };

    getChildContext() {
        return {
            theme: {
                primaryColor: this.props.primaryColor
            }
        };
    }

    render() {
        return React.Children.only(this.props.children);
    }
}

export const withTheme = (WrappedComponent: any) => {
    return class extends React.Component {
        static contextTypes = {
            theme: PropTypes.any
        };

        render() {
            // Wraps the input component in a container, without mutating it. Good!
            return <WrappedComponent theme={this.context.theme} {...this.props} />;
        }
    };
};
