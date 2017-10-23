import * as React from 'react';

interface IState {
    grid: any[];
    focused: number;
}

class Refs extends React.Component<{}, IState> {
    state = {
        grid: new Array(9).fill(null),
        focused: 0
    };

    board: any;

    componentWillMount() {
        document.addEventListener('keydown', this.onKeyDown);
    }

    componentDidMount() {
        this.focus();
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.onKeyDown);
    }

    render() {
        return (
            <div ref={(board: any) => this.board = board}>
                {this.state.grid.map((row, rowIndex) => (
                    <div
                        key={rowIndex}
                        tabIndex={-1}
                        style={{display: 'inline-block', width: 50, height: 50, border: '1px solid #CCC'}}
                    />
                ))}
            </div>
        );
    }

    private onKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'ArrowRight') {
            this.setState(
                (prevState => ({
                    focused: prevState.focused === 8 ? 0 : prevState.focused + 1
                })),
                this.focus);
        } else if (e.key === 'ArrowLeft') {
            this.setState(
                (prevState => ({
                    focused: prevState.focused === 0 ? 8 : prevState.focused - 1
                })),
                this.focus);
        }
    }

    private focus() {
        this.board.children[this.state.focused].focus();
    }
}

export default Refs;