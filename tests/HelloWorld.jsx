import React from 'react';
import { shallow, mount, render } from 'enzyme';
import HelloWorld from 'components/HelloWorld/HelloWorld.jsx';

describe('<HelloWorld>', () => {
  it('should render a H1 tag', () => {
    expect(
      render(<HelloWorld />).find('h1').length
    ).toBe(1);
  });
  it('should say "Hello World!"', () => {
    expect(
      render(<HelloWorld />).text()
    ).toBe('Hello World!');
  });
});
