import { createStackNavigator } from "@react-navigation/stack";
import { LoginComponent } from "../Components/Authentication/LoginComponent";
import { RegisterComponent } from "../Components/Authentication/RegisterComponent";
import { AuthProp } from "../../App";

export type AuthStackType = {
  Login: any;
  Register: any;
  ForgotPassword: any;
};
const AuthenticationStack = createStackNavigator<AuthStackType>();

export const AuthStack = (parent: AuthProp) => {
  return (
    <AuthenticationStack.Navigator>
      <AuthenticationStack.Screen name="Login">
        {(props) => <LoginComponent changeStack={parent.changeStack} />}
      </AuthenticationStack.Screen>
      <AuthenticationStack.Screen
        name="Register"
        component={RegisterComponent}
      />
    </AuthenticationStack.Navigator>
  );
};
