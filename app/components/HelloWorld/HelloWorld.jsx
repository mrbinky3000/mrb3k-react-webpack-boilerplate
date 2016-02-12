import React from 'react';

class HelloWorld extends React.Component {

	constructor(props) {
		super(props);

		this.message = 'Hello World!';
	}

	render() {
		return(
			<h1>{this.message}</h1>
		);
	}

}

export default HelloWorld;