import React, { useEffect } from 'react';
import { View } from 'react-native';

export default function({ enabled, pollFunction, interval }) {
  let timer;
  
  useEffect(() => {
    enabled ?
      timer = setInterval(pollFunctionm, interval) :
      clearInterval(timer);
    
    return () => clearInterval(timer);
  }, [ enabled );
  
  return (<View></View>);
}
