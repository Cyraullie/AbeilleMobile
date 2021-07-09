import React, { Component } from "react";
import { TextInput, } from "react-native";

class Input extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <TextInput
            style={{
              padding: 16,
              borderRadius: 30,
              width: "100%",
              height: 48,
              fontSize: 16,
              backgroundColor: this.props.background,
              placeholderTextColor: this.props.color,
              borderColor: this.props.color,
              borderWidth: 1,
              marginBottom: 32
            }}
            onChangeText={text => this.props.onChange(text)}
            placeholder={this.props.placeholder}
            secureTextEntry={this.props.security}
          />
      </>
    );
  }
}

export default Input;
