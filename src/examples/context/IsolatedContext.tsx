import * as React from 'react';
import { ThemeProvider } from './themed';
import PrimaryText from './PrimaryText';

const IsolatedContext = () => (
    <ThemeProvider primaryColor="red">
        <PrimaryText>
            text
        </PrimaryText>
    </ThemeProvider>
);

export default IsolatedContext;