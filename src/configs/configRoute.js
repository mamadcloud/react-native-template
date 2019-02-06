import React from 'react';
import { Scene, Router, } from 'react-native-router-flux';

import HomeScreen from 'screens/home';
import CounterScreen from 'screens/counter';

const scenes = (props) => {
  return (
    <Router sceneStyle={{ shadowOpacity: 0, }}>
      <Scene key={'root'}>
        <Scene 
          key={'HomeScreen'}
          component={HomeScreen}
          hideNavBar
        />
        <Scene 
          key={'CounterScreen'}
          component={CounterScreen}
          hideNavBar
        />
      </Scene>
    </Router>
  );
};

export default scenes;