import { createStackNavigator } from "@react-navigation/stack";
import { LoginComponent } from "../Components/Authentication/LoginComponent";
import { RegisterComponent } from "../Components/Authentication/RegisterComponent";

export type AuthStackType = {
  Login: any;
  Register: any;
  ForgotPassword: any;
};
const AuthenticationStack = createStackNavigator<AuthStackType>();

export const AuthStack = () => {
  return (
    <AuthenticationStack.Navigator>
      <AuthenticationStack.Screen name="Login" component={LoginComponent} />
      <AuthenticationStack.Screen
        name="Register"
        component={RegisterComponent}
      />
    </AuthenticationStack.Navigator>
  );
};
