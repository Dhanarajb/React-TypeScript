import React, { useState, useRef } from 'react';

interface Props {
  pCode: number;
  pName: string;
  pQun: number;
}

const Product: React.FC<Props> = (props) => {
  const [count, setCount] = useState<number | boolean | string>(0);
  const [txt, setTxt] = useState<number | boolean | string>('');
  const createReff = useRef<HTMLInputElement>(null);

  const Increment = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setCount(count + 1);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTxt(e.target.value);
  };
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setTxt(e.target.value);
  };

  const handleRef = (e: React.MouseEvent<HTMLButtonElement>): void => {
    createReff.current?.focus();
  };
  return (
    <div>
      <h1>Props</h1>
      {`${props.pCode}~${props.pName}~${props.pQun}`}
      <hr />
      <h1>counter</h1>
      <h1>{count}</h1>
      <button onClick={Increment}>Increment</button>
      <hr />
      <h1>input</h1>
      <input type="text" onChange={handleChange} />
      <h4>{txt}</h4>
      <hr />
      <h1>select</h1>
      <select onChange={handleSelect}>
        <option value="apple">Apple</option>
        <option value="banana">banana</option>
        <option value="mango">mango</option>
        <option value="jack">jack</option>
      </select>
      <h4>{txt}</h4>
      <hr />
      <h1>Ref</h1>
      <input type="text" ref={createReff} />
      <button onClick={handleRef}>click</button>
    </div>
  );
};
export default Product;
