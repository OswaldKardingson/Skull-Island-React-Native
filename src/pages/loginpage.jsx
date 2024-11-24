import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { saltHashPassword, PwSalt } from '../utils/hash';
import { setActivePassword } from '../actions/Context';
import {
  BlackBackground,
  LoginSectionOverscroll,
  LoginSection,
  LoginHeaderFade,
  LoginFade,
  LoginTitle,
  LoginPWTitle,
  LoginPWArea,
  LoginPWInput,
  LoginPWGradientCapLeft,
  LoginPWGradientCapRight,
  LoginPWRedText,
} from '../pagecomponents/PirateLogin';

const LoginPage = ({ onComplete }) => {
  const [password, setPassword] = useState('');
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [noteVisible, setNoteVisible] = useState('visible');
  const [loginVisible, setLoginVisible] = useState('none');

  const settings = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  const confirmNote = () => {
    setNoteVisible('none');
    setLoginVisible('visible');
  };

  const handleSetPassword = (p) => {
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
    <BlackBackground>
      <LoginHeaderFade>
        <LoginTitle>{'Wallet Login'}</LoginTitle>
      </LoginHeaderFade>
      <LoginFade />
      <LoginSectionOverscroll>
        <LoginSection>
          <LoginPWTitle>{'Password:'}</LoginPWTitle>
          <LoginPWArea>
            <LoginPWGradientCapLeft />
            <LoginPWInput
              secureTextEntry // For React Native compatibility
              value={password}
              onChangeText={(text) => handleSetPassword(text)}
            />
            <LoginPWGradientCapRight />
          </LoginPWArea>
          {invalidPassword && (
            <LoginPWRedText>{'Invalid Password. Try Again.'}</LoginPWRedText>
          )}
        </LoginSection>
      </LoginSectionOverscroll>
    </BlackBackground>
  );
};

LoginPage.propTypes = {
  onComplete: PropTypes.func.isRequired,
};

export default LoginPage;
