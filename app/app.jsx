var React = require("react");
var ReactDOM = require("react-dom")

var objOne = {
  name: "Wali Gauvin",
  location: "Annandale"
}

var objTwo = {
  age: 40,
  ...objOne
}

console.log(objTwo)



ReactDOM.render(<h1>Hi... htis is ol ok fixed some bugs</h1>, document.getElementById("app"));
