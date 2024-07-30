import React, { useEffect, useState } from 'react';

const Count = () => {
  const [count, setCount] = useState(0);
useEffect(()=>{
document.title = `button count ${count} is`;
console.log(count);

},[count])
let handle =()=>{
    setCount(count+1);
  }

  return (
    <>
      <button className='btn btn-primary' onClick={handle}>Click</button>
      <br />
      <h1>{count}</h1>
    </>
  );
}

export default Count;
