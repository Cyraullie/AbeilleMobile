import {
  createStackNavigator,
} from "@react-navigation/stack";
import React, { Component } from "react";

import WelcomeScreen from "../screens/Auth/WelcomeScreen";
import LoginScreen from "../screens/Auth/LoginScreen";

const Stack = createStackNavigator();

class Navigation extends Component {
  state = {
    userToken: undefined,
  };

  constructor(props) {
    super(props);
    this.state = { userToken: localStorage.getItem("user_token"), action: localStorage.getItem("actionId") };
    this.handleTokenUpdate = this.handleTokenUpdate.bind(this);
    this.handleActionUpdate = this.handleActionUpdate.bind(this);
  }

  handleTokenUpdate(data) {
    this.setState({ userToken: data });
  }

  handleActionUpdate(data) {
    this.setState({ action: data });
  }

  render() {
    return (
      
        /*this.state.userToken == null ? (
        <>
          <Stack.Navigator>
            <Stack.Screen name="Login" options={{ headerShown: false }}>
              {(props) => (
                <LoginScreen {...props} auth={this.handleTokenUpdate} />
              )}
            </Stack.Screen>
          </Stack.Navigator>
        </>
        ) : (*/
        <>
          <Stack.Navigator
            initialRouteName={"Welcome"}
          >
            <Stack.Screen
              name="Welcome"
              options={{
                headerShown: false,
              }}
            >
              {(props) => (
                <WelcomeScreen {...props} auth={this.handleTokenUpdate} />
              )}
            </Stack.Screen>
            <Stack.Screen
              name="Login"
              options={{
                headerShown: false,
              }}
            >
              {(props) => (
                <LoginScreen {...props} auth={this.handleTokenUpdate} />
              )}
            </Stack.Screen>
          </Stack.Navigator>
        </>
       // )
      
    );
  }
}


export default Navigation;
