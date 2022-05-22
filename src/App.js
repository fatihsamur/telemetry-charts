import React from 'react';
import { Connector, subscribe } from 'react-mqtt-client';
import Home from './components/Home';

const App = () => {
  return (
    <>
      <Connector
        mqttProps={{
          url: 'ws://138.68.8.53:8000/mqtt',
          options: {
            protocol: 'ws',
            clientId: 'digiterra-coding-task-1',
            username: '',
            password: '',
          },
        }}
      >
        <Connected />
      </Connector>
    </>
  );
};

export default App;

const Connected = subscribe({ topic: '$SYS' })(Home);
