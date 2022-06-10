import React from "react";

class Button extends React.Component {
  render() {
    return (
      <div>
        {/* <button type="button" className="btn btn-outline-info" onClick={() => this.handleClick}> */}
        <button type="button" className="btn btn-outline-dark my-3" onClick={this.props.handleClick}>
          Show Tables
        </button>
      </div>
    );
  }
}
export default Button;
