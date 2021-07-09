import {
  createStackNavigator,
} from "@react-navigation/stack";
import React, { Component } from "react";

import WelcomeScreen from "../screens/Auth/WelcomeScreen";
import LoginScreen from "../screens/Auth/LoginScreen";
import RegisterScreen from "../screens/Auth/RegisterScreen";

const Stack = createStackNavigator();

class Navigation extends Component {
  state = {
    userToken: undefined,
  };

  constructor(props) {
    super(props);
    this.handleTokenUpdate = this.handleTokenUpdate.bind(this);
  }

  handleTokenUpdate(data) {
    this.setState({ userToken: data });
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
                <WelcomeScreen {...props}  />
              )}
            </Stack.Screen>
            <Stack.Screen
              name="Login"
              options={{
                headerShown: false,
              }}
            >
              {(props) => (
                <LoginScreen {...props} />
              )}
            </Stack.Screen>
            <Stack.Screen
              name="Register"
              options={{
                headerShown: false,
              }}
            >
              {(props) => (
                <RegisterScreen {...props}  />
              )}
            </Stack.Screen>
          </Stack.Navigator>
        </>
       // )
      
    );
  }
}


export default Navigation;
