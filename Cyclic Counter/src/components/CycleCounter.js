import React from 'react';

class CycleCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 0,
            cycle : this.props.cycle
        };
    }
    handleClick(){
        this.setState({
            count: this.state.count < this.state.cycle-1 ? this.state.count+1 : 0
        });
    }

    render() {
    return (
      <div className="layout-column align-items-center mt-50">
        <section className="pt-20 layout-row align-items-center justify-content-center">
          <button
            data-testid="cycle-counter"
            style={{ fontSize: '1rem', width: 120, height: 30, }}
            onClick = {() => this.handleClick()}
          >
              {this.state.count}
          </button>
        </section>
      </div>
    );
  }
}

export default CycleCounter;
