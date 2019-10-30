import React from "react";
import { throws } from "assert";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleOnChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
        type="text" 
        name="message" 
        id="message" 
        value={this.state.message} 
        onChange={this.handleOnChange} 
        /> 
        <br>
        </br>
        <span>
          Character Count ({this.props.maxChars - this.state.message.length})
         </span>
      </div>
    );
  }
}

export default TwitterMessage;
