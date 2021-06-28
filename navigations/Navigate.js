import {
  createStackNavigator,
} from "@react-navigation/stack";
import React, { Component } from "react";

import HomeScreen from "../screens/Common/HomeScreen";

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
            initialRouteName={"Home"}
          >
            <Stack.Screen
              name="Home"
              options={{
                headerShown: false,
              }}
            >
              {(props) => (
                <HomeScreen {...props} auth={this.handleTokenUpdate} />
              )}
            </Stack.Screen>
          </Stack.Navigator>
        </>
       // )
      
    );
  }
}


export default Navigation;
