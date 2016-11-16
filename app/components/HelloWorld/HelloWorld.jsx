import React from 'react';
import style from './helloworld.scss';
import MountainSvg from './mountain.svg';
import gif from './popeye.gif';
import png from './mountain.png';
import jpg from './mountain.jpg';

class HelloWorld extends React.Component {

  constructor() {
    super();
    this.state = {
      message: 'Hello World!',
    };
  }

  render() {
    return (
      <div className={style.helloWorld}>
        <h1 className={style.header}>{this.state.message}</h1>
        <ul className={style.imageList}>
          <li>
            <img src={jpg} width={100} height={100} alt="jpg test" />
          </li>
          <li>
            <img src={png} width={100} height={100} alt="png test" />
          </li>
          <li>
            <img src={gif} width={100} height={100} alt="gif test" />
          </li>
          <li>
            <MountainSvg width={100} height={100} alt="svg test" />
          </li>
        </ul>
      </div>
    );
  }

}

export default HelloWorld;
