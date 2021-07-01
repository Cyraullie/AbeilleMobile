import React, { Component } from "react";
import { TouchableOpacity, Text, } from "react-native";

class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <TouchableOpacity
          style={{
            color: this.props.color,
            backgroundColor: this.props.background,
            borderRadius: 30,
            width: "100%",
            height: 48,
            justifyContent: "center",
          }}
          onPress={() => {
              this.props.action
          }}
        >
          <Text style={{
                color: "#FFFFFF",
                fontWeight: "bold",
                fontSize: 20,
          }}>{this.props.textButton}</Text>
        </TouchableOpacity>
      </>
    );
  }
}

export default Button;
