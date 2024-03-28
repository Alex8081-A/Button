import React from 'react';
import Buttonn from './Buttonn';


function App() {
  return (
    <>
    <h1>Button</h1>
    <Buttonn
      disabled={false}
      type='primary'
      border='none'
      color='green'
      onClick={() => console.log('asdasd')}
      children = 'Green button'
      />
    </>
  );
}

export default App;
