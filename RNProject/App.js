
import React from 'react'; // Remember to import React
import { Provider } from 'react-redux'; 

import StackNavigator from './StackNavigator';
import configStore from './src/store/config_store';

const store = configStore();

const RNProject = () => (
    <Provider store={ store }>
        <StackNavigator/>
    </Provider>
);

export default RNProject;
