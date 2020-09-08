import React from 'react';

class Translator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       translations : this.props.translations,
       output : ""
    };
  }
  handleChange(event){
    let key = event.target.value;
    let value;
    if(this.state.translations.has(key)){
       value = this.state.translations.get(key);
    }else{
      value = "";
    }

    this.setState({
        output: value,
    });
  }
  render() {
    return (
      <React.Fragment>
        <div className="controls">
          <div className="input-container">
            <span>input:</span>
            <input type="text" className="text-input" data-testid="text-input"
                   onChange={(event) => this.handleChange(event)} />
          </div>
          <div className="input-container">
            <span>output:</span>
            <input type="text" value={this.state.output} className="text-output" data-testid="text-output" readOnly />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Translator;
