const React = require("react")
const ReactDOM = require("react-dom")
const MSWordContainer = require("../../src/index")

class Demo extends React.PureComponent {
  render() {
    return (
      <MSWordContainer title={"example.doc"}>
        <p>
          Hey there, this is an example of the MSWordContainer in all its glory.
        </p>
      </MSWordContainer>
    )
  }
}

if (typeof window !== "undefined") {
  ReactDOM.render(<Demo />, document.getElementById("container"))
}

module.exports = Demo
