import React, { Component } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";

import Input from "./../../components/Input"
import Button from "./../../components/Button"

class LoginScreen extends Component {
  constructor(props) {
    super(props),
      (this.state = { initials: "", password: "", });
      this.onUsernameChange = this.onUsernameChange.bind(this);
      this.onPasswordChange = this.onPasswordChange.bind(this);
  }

  onUsernameChange = (initials) => {
    this.setState({ initials: initials });
  };

  onPasswordChange = (password) => {
    this.setState({ password: password });
  };

  onPressLogin() {
    const { initials, password } = this.state;
    const payload = { initials, password };

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
        message: "Les initiales ou le mot de passe est incorrect.",
        type: "danger",
        duration: 6000
      });
    };
    this.state.base == "" ?
      showMessage({
        message: "aucune base n'a été sélectionnée.",
        type: "warning",
        duration: 6000
      }) : APIKit.getToken(payload).then(onSuccess).catch(onFailure);
  }

  render() {
    return (
      <View style={styles.page}>
        <ImageBackground source={require("./../../assets/LoginBackground.svg")} style={styles.image}>
          <View style={styles.areaTitle}>
            <Text style={styles.title}>Connexion</Text>
          </View>
          <View style={styles.areaLogin}>
            <Input placeholder="Nom d'utilisateur" onChange={this.onUsernameChange} background="#FBEFAE" color="#684500"/>
            <Input placeholder="Mot de passe" onChange={this.onPasswordChange} background="#FBEFAE" color="#684500" security={true}/>
            <Button action={this.props.navigation.navigate("Login")} textButton="Se connecter" background="#684500" color="#FFFFFF"/>
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

export default LoginScreen;
