import React, { Component } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Input from "../../components/Input"
import Button from "../../components/Button"

class RegisterScreen extends Component {
  constructor(props) {
    super(props),
      (this.state = { username: "", password: "", confirmPassword: "" });
      this.onUsernameChange = this.onUsernameChange.bind(this);
      this.onPasswordChange = this.onPasswordChange.bind(this);
      this.onConfirmPasswordChange = this.onPasswordChange.bind(this);
  }

  onUsernameChange(username){
    this.setState({ username: username });
  };

  onPasswordChange(password){
    this.setState({ password: password });
  };

  onConfirmPasswordChange(confirmPassword){
    this.setState({ confirmPassword: confirmPassword })
  };

  onPressLogin() {
    const { username, password } = this.state;
    const payload = { username, password };

    const onSuccess = ({ data }) => {
      this.setState({ userToken: data.token });
      localStorage.setItem("user_token", this.state.userToken);
      localStorage.setItem("base", this.state.base);
      localStorage.setItem("nav", "Home");
      this.props.auth(data.token);
    };

    const onFailure = (error) => {
      console.log(error && error.response);
      showMessage({
        message: "Le nom de l'utilisateur ou le mot de passe est incorrect.",
        type: "danger",
        duration: 6000
      });
    };
  }

  render() {
    console.log("register")
    return (
      <View style={styles.page}>
        <ImageBackground source={require("./../../assets/LoginBackground.svg")} style={styles.image}>
          <View style={styles.areaTitle}>
            <Text style={styles.title}>Inscription</Text>
          </View>
          <View style={styles.areaLogin}>
            <Input placeholder="Nom d'utilisateur" onChange={this.onUsernameChange} background="#FBEFAE" color="#684500"/>
            <Input placeholder="Mot de passe" onChange={this.onPasswordChange} background="#FBEFAE" color="#684500" security={true}/>
            <Input placeholder="Confirmation mot de passe" onChange={this.onConfirmPasswordChange} background="#FBEFAE" color="#684500" security={true}/>
            <Button action={this.onPressLogin()} textButton="S'inscrire" background="#684500" color="#FFFFFF"/>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: "column",
    alignSelf: "stretch",
    textAlign: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },

  title: {
    alignSelf: "stretch",
    marginTop: 100,
    marginLeft: 35,
    fontSize: 31.25,
    fontWeight: "bold",
    color: "#343223"
  }, 

  areaTitle: {
    textAlign: "left"
  },
  areaLogin: {
    width: "100%",
    padding: 32,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RegisterScreen;
