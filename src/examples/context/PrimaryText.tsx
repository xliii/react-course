import * as React from 'react';
import { ThemedProps, withTheme } from './themed';

class PrimaryText extends React.Component<ThemedProps> {
    render() {
        let color = this.props.theme ? this.props.theme.primaryColor : 'black';
        return (
            <div style={{color}}>
                {this.props.children}
            </div>
        );
    }
}

export default withTheme(PrimaryText);