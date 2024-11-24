import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { saltHashPassword, PwSalt } from '../utils/hash';
import { setWalletPassword, setActivePassword } from '../actions';
import eye from '../assets/svg/eye.svg'; // Replace with appropriate React Native image source if SVG isn't supported.

const SetPasswordPage = ({ onComplete }) => {
  const dispatch = useDispatch();
  const context = useSelector((state) => state.context);

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [newPasswordValid, setNewPasswordValid] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);
  const [newPasswordText, setNewPasswordText] = useState('Must be at least 8 characters');
  const [confirmPasswordText, setConfirmPasswordText] = useState('');
  const [type, setType] = useState(true); // `true` for password, `false` for text (visible)

  const scrollRef = useRef(null);

  const toggleType = () => setType((prev) => !prev);

  const handleNewPasswordChange = (p) => {
    setNewPassword(p);
    if (p.length >= 8) {
      setNewPasswordValid(true);
      setNewPasswordText('');
    } else {
      setNewPasswordValid(false);
      setNewPasswordText('Must be at least 8 characters');
    }
    setConfirmPassword('');
    setConfirmPasswordValid(false);
  };

  const handleConfirmPasswordChange = (p) => {
    setConfirmPassword(p);
    if (newPasswordValid && newPassword === p) {
      setConfirmPasswordValid(true);
      setConfirmPasswordText('');
    } else {
      setConfirmPasswordValid(false);
      setConfirmPasswordText('Confirmation invalid');
    }
  };

  const handleSetPassword = () => {
    const pwHash = saltHashPassword(newPassword, PwSalt);
    dispatch(setWalletPassword(pwHash));
    dispatch(setActivePassword(newPassword));
    setNewPassword('');
    setConfirmPassword('');
    onComplete();
  };

  const resetScroll = (position) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ y: position, animated: true });
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} ref={scrollRef}>
        <Text style={styles.title}>Set Wallet Password</Text>

        {/* New Password Section */}
        <Text style={styles.label}>New Password:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            secureTextEntry={type}
            value={newPassword}
            onChangeText={(text) => {
              handleNewPasswordChange(text);
            }}
          />
          <TouchableOpacity onPress={toggleType} style={styles.eyeButton}>
            <Image source={eye} style={styles.eyeImage} />
          </TouchableOpacity>
        </View>
        {newPasswordText ? <Text style={styles.errorText}>{newPasswordText}</Text> : null}

        {/* Confirm Password Section */}
        <Text style={styles.label}>Confirm Password:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            secureTextEntry={type}
            value={confirmPassword}
            onChangeText={(text) => {
              handleConfirmPasswordChange(text);
            }}
          />
        </View>
        {confirmPasswordText ? <Text style={styles.errorText}>{confirmPasswordText}</Text> : null}

        {/* Submit Button */}
        {confirmPasswordValid ? (
          <TouchableOpacity style={styles.button} onPress={handleSetPassword}>
            <Text style={styles.buttonText}>Set Password</Text>
          </TouchableOpacity>
        ) : null}
      </ScrollView>
    </View>
  );
};

SetPasswordPage.propTypes = {
  onComplete: PropTypes.func.isRequired,
};

export default SetPasswordPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollContainer: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#bb9645',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#fff',
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1c1c1c',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#444',
    marginBottom: 10,
    paddingHorizontal: 8,
  },
  input: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    height: 40,
  },
  eyeButton: {
    padding: 8,
  },
  eyeImage: {
    width: 20,
    height: 20,
    tintColor: '#fff',
  },
  errorText: {
    color: '#e54212',
    fontSize: 14,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#bb9645',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
