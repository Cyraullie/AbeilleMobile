import React, { Component } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";


class WelcomeScreen extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.page}>
        <ImageBackground source={require("./../../assets/WelcomeBackground.svg")} style={styles.image}>
          <View style={styles.areaTitle}>
            <Text style={styles.title}>Abeeculture</Text>
          </View>
          <View style={styles.areaLogin}>
            <Text style={styles.text}>Vous avez déjà un compte ?</Text>
            <TouchableOpacity
             style={styles.buttonLogin}
            >
              <Text style={styles.textButton}>Se Connecter</Text>
            </TouchableOpacity>
            <TouchableOpacity
             style={styles.buttonLink}
             >
              <Text style={styles.link}>Ou inscrivez-vous en cliquant ici</Text>
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
    marginTop: 100,
    marginLeft: 30,
    fontSize: 48.83,
    fontWeight: "bold",
    color: "#343223"
  },
  text: {
    color: "#343223",
    fontSize: 16,
    marginBottom: 20,
  },
  link: {
    color: "#684500",
    textDecorationLine: 'underline'
  },
  textButton: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 20,
    //fontFamily: Ubuntu,
  },


  buttonLogin: {
    color: "#FFFFFF",
    backgroundColor: "#684500",
    borderRadius: 30,
    width: 311,
    height: 64,
    justifyContent: "center",
  },
  buttonLink: {
    width: 311,
    height: 15,
    marginTop: 20,
  },

  areaTitle: {
    flex: 2,
    textAlign: "left"
  },

  areaLogin: {
    width: "100%",
    height: 201,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#FBEFAE",
    justifyContent: "center",
    alignItems: "center"
  },
});

export default WelcomeScreen;
