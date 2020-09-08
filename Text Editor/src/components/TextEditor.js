import React from 'react';

class TextEditor extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          textContent : "",
          inputText :"" ,
          lastInputText : ""
      };
  }

  appendText(){
      this.setState({
          textContent: this.state.textContent + " " + this.state.inputText,
          lastInputText : this.state.inputText,
          inputText : ""
      });
  }

  undoText(){
      let orgLength = this.state.textContent.length;
      let len = this.state.lastInputText.length;
      let end = orgLength-len - 1;

      this.setState({
          lastInputText: this.state.lastInputText,
          textContent: this.state.textContent.substr(0,end),
      });
  }

  handleChange(event){
      this.setState({
          inputText: event.target.value
      });
  }

  render() {
    return (
      <React.Fragment>
        <div className="controls">
          <input className="word-input" type="text" data-testid="word-input"
                 value={this.state.inputText}
                 onChange={(event)=> this.handleChange(event)}/>
          <button data-testid="append-button" onClick = {() => this.appendText()}
                  disabled={this.state.inputText === "" ? true : false}>Append</button>
          <button data-testid="undo-button" onClick={() => this.undoText()}
          disabled={this.state.textContent === "" ? true : false}>Undo</button>
        </div>
        <div className="text-field" data-testid="text-field">{this.state.textContent}</div>
      </React.Fragment>
    );
  }
}

export default TextEditor;
