import '../main.scss';
import React from 'react';

import HelloWorld from 'components/HelloWorld/HelloWorld.jsx';
import HelloWorldUncoverd from 'components/HelloWorldUncovered/HelloWorldUncovered.jsx';

export default () =>
  <div>
    <HelloWorld />
    <HelloWorldUncoverd />
  </div>;
