import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { saltHashPassword, PwSalt } from '../utils/hash';
import { setActivePassword } from '../actions/Context';
import {
  BlackBackground,
  LoginHeaderFade,
  LoginFade,
  LoginSectionOverscroll,
  LoginSection,
  LoginTitle,
  LoginPWTitle,
  LoginPWArea,
  LoginPWInput,
  LoginPWGradientCapLeft,
  LoginPWGradientCapRight,
  LoginPWRedText,
} from '../pagecomponents/PirateLogin';

interface LoginPageProps {
  onComplete: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onComplete }) => {
  const [password, setPassword] = useState<string>('');
  const [invalidPassword, setInvalidPassword] = useState<boolean>(false);

  const settings = useSelector((state: any) => state.settings);
  const dispatch = useDispatch();

  const handleSetPassword = (p: string) => {
    if (p.length >= 8) {
      const pwHash = saltHashPassword(p, PwSalt);
      if (pwHash === settings.password) {
        dispatch(setActivePassword(p));
        onComplete();
        setPassword('');
      } else {
        setInvalidPassword(true);
        setPassword(p);
      }
    } else {
      setPassword(p);
    }
  };

  return (
    <BlackBackground testID="login-page">
      <LoginHeaderFade>
        <LoginTitle testID="login-title">{'Wallet Login'}</LoginTitle>
      </LoginHeaderFade>
      <LoginFade />
      <LoginSectionOverscroll>
        <LoginSection>
          <LoginPWTitle testID="password-title">{'Password:'}</LoginPWTitle>
          <LoginPWArea>
            <LoginPWGradientCapLeft />
            <TextInput
              testID="password-input"
              style={styles.input}
              secureTextEntry
              value={password}
              onChangeText={(text) => handleSetPassword(text)}
            />
            <LoginPWGradientCapRight />
          </LoginPWArea>
          {invalidPassword && (
            <LoginPWRedText testID="invalid-password-text">
              {'Invalid Password. Try Again.'}
            </LoginPWRedText>
          )}
        </LoginSection>
      </LoginSectionOverscroll>
    </BlackBackground>
  );
};

const styles = StyleSheet.create({
  input: {
    color: '#ffffff',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    width: '90%',
    height: 40,
    borderWidth: 0,
    borderBottomWidth: 2,
    borderBottomColor: '#bb9645',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default LoginPage;
