import React, { Component } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

class LoginScreen extends Component {
  constructor(props) {
    super(props),
      (this.state = { initials: "", password: "", });
  }

  onInitialsChange = (initials) => {
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
            <TextInput
              style={styles.input}
              onChangeText={this.onInitialsChange}
              placeholder="Nom d'utilisateur"
              placeholderStyle={styles.placeholder}
            ></TextInput>

            <TextInput
              style={styles.input}
              secureTextEntry
              onChangeText={this.onPasswordChange}
              placeholder="Mot de passe"
              placeholderStyle={styles.placeholder}
            ></TextInput>
            <TouchableOpacity
              style={styles.buttonLogin}
              onPress={() => {
                
              }}
            >
              <Text style={styles.textButton}>Se connecter</Text>
            </TouchableOpacity>
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
  placeholder: {
    marginLeft: 35,
  },
  textButton: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 20,
  },

  buttonLogin: {
    color: "#FFFFFF",
    backgroundColor: "#684500",
    borderRadius: 30,
    width: "100%",
    height: 48,
    justifyContent: "center",
  },
  input: {
    borderRadius: 30,
    width: "100%",
    height: 48,
    borderColor: "#684500",
    borderWidth: 1,
    marginBottom: 32
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
