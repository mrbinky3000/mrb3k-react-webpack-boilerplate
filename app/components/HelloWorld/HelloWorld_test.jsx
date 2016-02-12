import React from 'react';
import assert from 'assert';
import {
	renderIntoDocument,
	findRenderedDOMComponentWithTag
} from 'react-addons-test-utils';
import HelloWorld from './HelloWorld.jsx';

describe('Hello World', () => {

	it ('renders "Hello World!" inside an H1 tag', () => {
		const component = renderIntoDocument(
			<HelloWorld />
		);
		const h1 = findRenderedDOMComponentWithTag(component, 'h1');
		assert(h1.innerHTML === 'Hello World!');
	});

});
