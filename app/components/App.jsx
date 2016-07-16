import '../main.scss';
import React from 'react';

import HelloWorld from 'components/HelloWorld';
import HelloWorldUncoverd from 'components/HelloWorldUncovered';

export default () =>
  <div>
    <HelloWorld />
    <HelloWorldUncoverd />
  </div>;
