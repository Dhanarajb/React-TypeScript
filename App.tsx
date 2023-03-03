import * as React from 'react';
import Product from './Product';
import './style.css';

export default function App() {
  return (
    <div>
      <Product pCode={1} pName="Dhanu" pQun={3} />
    </div>
  );
}
