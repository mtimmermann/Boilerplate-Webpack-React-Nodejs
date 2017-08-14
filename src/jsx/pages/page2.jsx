import React, { Component } from 'react';
import ModalExample from '../components/modal-example';

class Page2 extends Component {
  render() {
    return (
      <div>
        <h1>Page 2</h1>
        <p>
          <a href="" data-toggle="modal" data-target="#modal-example">Show Example Modal Component</a>
        </p>
        <ModalExample />
      </div>
    );
  }
}

export default Page2;
