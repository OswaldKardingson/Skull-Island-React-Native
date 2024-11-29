import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';

// Screen dimensions for layout calculations
const { width, height } = Dimensions.get('window');

// Props interface for flexibility in testing or customization
interface PirateLoginProps {
  onLogin: (password: string) => void; // Callback when login button is pressed
  errorMessage?: string; // Error message to display
  testID?: string; // Test ID for testing
}

// LoginHeaderFade component supporting children
export const LoginHeaderFade: React.FC<{ children?: React.ReactNode; style?: any }> = ({
  children,
  style,
}) => (
  <View style={[styles.headerFade, style]}>{children}</View>
);

// Named components to export for reusability
export const BlackBackground: React.FC<{ children: React.ReactNode; testID?: string }> = ({
  children,
  testID,
}) => (
  <View style={styles.blackBackground} testID={testID}>
    {children}
  </View>
);

export const LoginFade: React.FC = () => <View style={styles.fadeOverlay} />;
export const LoginSectionOverscroll: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ScrollView style={styles.scrollContainer}>{children}</ScrollView>
);
export const LoginSection: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <View style={styles.loginSection}>{children}</View>
);
export const LoginTitle: React.FC<{ children: React.ReactNode; testID?: string }> = ({
  children,
  testID,
}) => (
  <Text style={styles.title} testID={testID}>
    {children}
  </Text>
);
export const LoginPWTitle: React.FC<{ children: React.ReactNode; testID?: string }> = ({
  children,
  testID,
}) => (
  <Text style={styles.sectionTitle} testID={testID}>
    {children}
  </Text>
);
export const LoginPWArea: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <View style={styles.inputContainer}>{children}</View>
);
export const LoginPWInput: React.FC<React.ComponentProps<typeof TextInput>> = (props) => (
  <TextInput style={styles.textInput} {...props} />
);
export const LoginPWGradientCapLeft: React.FC = () => <View style={styles.gradientCapLeft} />;
export const LoginPWGradientCapRight: React.FC = () => <View style={styles.gradientCapRight} />;
export const LoginPWRedText: React.FC<{ children: React.ReactNode; testID?: string }> = ({
  children,
  testID,
}) => (
  <Text style={styles.errorText} testID={testID}>
    {children}
  </Text>
);

const PirateLogin: React.FC<PirateLoginProps> = ({
  onLogin,
  errorMessage,
  testID = 'pirate-login',
}) => {
  const [password, setPassword] = React.useState<string>('');
  const [confirmPassword, setConfirmPassword] = React.useState<string>('');
  const [isPasswordVisible, setIsPasswordVisible] = React.useState<boolean>(false);

  // Handles login logic
  const handleLogin = () => {
    if (password === confirmPassword) {
      onLogin(password);
    }
  };

  return (
    <ScrollView style={styles.scrollContainer} testID={testID}>
      {/* Header Fade */}
      <LoginHeaderFade>
        <LoginTitle testID="login-title">Pirate Login</LoginTitle>
      </LoginHeaderFade>
      <LoginFade />

      {/* Login Description */}
      <Text style={styles.description} testID="login-description">
        Enter your password to access your account.
      </Text>

      {/* Password Input Section */}
      <LoginPWTitle testID="password-title">Password</LoginPWTitle>
      <LoginPWArea>
        <LoginPWInput
          value={password}
          secureTextEntry={!isPasswordVisible}
          placeholder="Enter Password"
          placeholderTextColor="rgba(187,150,69,0.5)"
          onChangeText={setPassword}
          testID="password-input"
        />
        <TouchableOpacity
          style={styles.eyeButton}
          onPress={() => setIsPasswordVisible((prev) => !prev)}
          testID="toggle-password-visibility"
        >
          <Image
            source={
              isPasswordVisible
                ? require('../assets/icons/eye-open.png')
                : require('../assets/icons/eye-closed.png')
            }
            style={styles.eyeIcon}
          />
        </TouchableOpacity>
      </LoginPWArea>

      {/* Confirm Password Section */}
      <LoginPWTitle testID="confirm-password-title">Confirm Password</LoginPWTitle>
      <LoginPWArea>
        <LoginPWInput
          value={confirmPassword}
          secureTextEntry={!isPasswordVisible}
          placeholder="Confirm Password"
          placeholderTextColor="rgba(187,150,69,0.5)"
          onChangeText={setConfirmPassword}
          testID="confirm-password-input"
        />
      </LoginPWArea>

      {/* Error Message */}
      {errorMessage ? (
        <LoginPWRedText testID="error-message">{errorMessage}</LoginPWRedText>
      ) : null}

      {/* Login Button */}
      <TouchableOpacity
        style={styles.loginButton}
        onPress={handleLogin}
        testID="login-button"
      >
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  blackBackground: {
    flex: 1,
    backgroundColor: 'black',
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  headerFade: {
    position: 'absolute',
    top: 0,
    width,
    height: height * 0.2,
    backgroundColor: 'rgba(0,0,0,0.75)',
  },
  fadeOverlay: {
    position: 'absolute',
    top: height * 0.1975,
    width,
    height: height * 0.01,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  loginSection: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    color: '#bb9645',
    textAlign: 'center',
    marginVertical: 20,
  },
  description: {
    fontSize: width * 0.04,
    color: '#bb9645',
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    color: '#bb9645',
    marginLeft: width * 0.1,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width * 0.9,
    borderWidth: 1,
    borderColor: '#bb9645',
    borderRadius: 8,
    backgroundColor: 'rgba(187,150,69,0.1)',
    marginBottom: 20,
    alignSelf: 'center',
  },
  textInput: {
    flex: 1,
    color: '#fff',
    fontSize: width * 0.04,
    padding: 10,
  },
  eyeButton: {
    padding: 10,
  },
  eyeIcon: {
    width: width * 0.1,
    height: width * 0.1,
    tintColor: '#bb9645',
  },
  errorText: {
    fontSize: width * 0.035,
    color: 'red',
    textAlign: 'center',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#bb9645',
    width: width * 0.6,
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: width * 0.045,
    fontWeight: 'bold',
  },
  gradientCapLeft: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: 40,
    width: 20,
  },
  gradientCapRight: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: 40,
    width: 20,
  },
});

export default PirateLogin;
