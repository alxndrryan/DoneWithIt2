import { Button, Image } from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import ListingEditScreen from './app/screens/ListingEditScreen';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ImageInputList from './app/components/ImageInputList';

import Screen from './app/components/Screen';
import { useEffect, useState } from 'react';

export default function App() {
  return <ListingEditScreen />;
}
