import React from "react";

type CounterProps = { initial: number };
type CounterState = { count: number };

class Counter extends React.Component<CounterProps, CounterState> {
    state = { count: this.props.initial };

    render() {
        return (
            <button onClick={() => this.setState({ count: this.state.count + 1 })}>{this.state.count}</button>
        );
    }
}
export default Counter;