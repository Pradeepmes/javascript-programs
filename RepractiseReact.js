import React from 'react';
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const inc = () => {
    setCount((prev) => count + 1);
  };
  const dec = () => {
    setCount((prev) => count - 1);
  };
  return (
    <div>
      <h1>countre</h1>
      {count}

      <button onClick={inc}>inc</button>
      <button onClick={dec}>inc</button>
    </div>
  );
};
export default Counter;
==========================================

import React from 'react';
import { useState, useEffect } from 'react';

const todoitem = [
  { taskname: 'task1', status: 'pending' },
  { taskname: 'task2', status: 'pending' },
  { taskname: 'task3', status: 'pending' },
];

function Todolist() {
  const [todolist, setTodolist] = useState(todoitem);
  const [input, setInput] = useState('');

  useEffect(() => {
    localStorage.setItem('storedtodoItem', JSON.stringify(todolist));
  }, []);
  
  useEffect(() => {
    const getSoredItem = localStorage.getItem('storedtodoItem');
    if (getSoredItem) {
      setTodolist(JSON.parse(getSoredItem));
    }
  }, []);

  const addTask = () => {
    const newTask = {
      taskname: input,
      status: 'pending',
    };
    setTodolist([...todolist, newTask]);
  };

  const toggleStatus = (index) => {
    const updatedList = [...todolist];
    updatedList[index].status =
      updatedList[index].status === 'pending' ? 'completed' : 'pending';
    setTodolist(updatedList);
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTask}>add</button>
      <ul>
        {todolist.map((item, key) => (
          <li key={key}>
            <input
              type="checkbox"
              checked={item.status === 'completed'}
              onChange={() => toggleStatus(key)}
            />
            <span style={{textDecoration: item.status==="completed"?"line-through":"none"}}>{item.taskname}</span>
            <span>{item.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todolist;
=============================================================

import React from 'react';
import { useState, useEffect } from 'react';
function Fetchdata() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setData(data));
    //setData(data);
  }, []);

  const filtered = data.filter((item) => {
    return item.name.includes(input);
  });
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {filtered.map((item, key) => (
        <p>{item.name}</p>
      ))}
    </div>
  );
}

export default Fetchdata;
===============================================
 useContext
 
 ProductContext.js 
 
import React from 'react';
import { useState, createContext } from 'react';
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const productlist = [
    { productname: 'TV' },
    { productname: 'samsung' },
    { productname: 'LG' },
  ];

  const [data, setData] = useState(productlist);

  return (
    <ProductContext.Provider value={{ data, setData }}>
      {children}
    </ProductContext.Provider>
  );
};

 
App.js

import { ProductProvider } from './ProductContext';
import Compone from './Compone';
import Comptwo from './Comptwo';

export default function App() {
  return (
    <div>
      <ProductProvider>
        <Compone />
        <Comptwo />
      </ProductProvider>
    </div>
  );
}

compone.js

import React from 'react';
import { useContext } from 'react';
import { ProductContext } from './ProductContext';

function Compone() {
  const { data } = useContext(ProductContext);
  return (
    <div>
      {data.map((item) => (
        <p>{item.productname}</p>
      ))}
    </div>
  );
}

export default Compone;

comptwo.js

import React from 'react';
import { useContext } from 'react';
import { ProductContext } from './ProductContext';

function Comptwo() {
  const { data } = useContext(ProductContext);
  return (
    <div>
      {data.map((item) => (
        <p>{item.productname}</p>
      ))}
    </div>
  );
}

export default Comptwo;
=====================================
import React from 'react';
import { useState } from 'react';
function Togglebutton() {
  const [name, setName] = useState('edit');
  const togglebtn = () => {
    setName(prev=>prev==="edit"?"save":"edit")
  };
  return (
    <div>
      <button onClick={togglebtn}>{name}</button>
    </div>
  );
}

export default Togglebutton;
====================================================

import React from 'react';

import { useState, useEffect } from 'react';
function useWindowsize() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
  }, []);
  return width;
}

export default useWindowsize;


app.js

import useWindowsize from './useWindowsize';

export default function App() {
  const widthofscreen = useWindowsize();
  return <div>{widthofscreen}</div>;
}
=================================================

React memo

import React from 'react';

const Newchild = React.memo(({ name }) => {
  console.log('child rerendered');
  return <div>{name}</div>;
});

export default Newchild;
==================================================

import React from 'react';
import { useState, useRef } from 'react';

function Stoptime() {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  const startTimer = () => {
    if (counterRef.current) return;
    counterRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 500);
  };

  const stopTimer = () => {
    clearInterval(counterRef.current);
    counterRef.current = null;
  };

  const resumeTimer = () => {
    //startTimer() // we can do both resume or reset
    stopTimer();  // for reeset
    setCount(0);
  };
  return (
    <div>
      {count}
      <button onClick={startTimer}>start</button>
      <button onClick={stopTimer}>stop</button>
      <button onClick={resumeTimer}>resume</button>
    </div>
  );
}

export default Stoptime;
====================================================
modal

import React from 'react';

function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;
  return (
    <div>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content">
          <div className="modal-header">
            {title}
            <button className="modal-close" onClick={onClose}>
              ×
            </button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;

app.js

export default function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>open modal</button>
      <Modal title="Modal title" isOpen={isModalOpen} onClose={closeModal}>
        <p>modal content</p>
      </Modal>
    </div>
  );
}
=================================================

import React, { useEffect, useState } from 'react';

const Datetime = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date()); // always get real current time
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <p>{date.toLocaleString()}</p>
    </div>
  );
};

export default Datetime;
==================================================
CartContext.js

import React from 'react';
import { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [data, setData] = useState('pradeep');

  return (
    <CartContext.Provider value={{ data, setData }}>
      {children}
    </CartContext.Provider>
  );
};

app.js

import React from 'react';
import './style.css';
import Todolist from './Todolist';
import { CartProvider } from './CartContext';

export default function App() {
  return (
    <div>
      <CartProvider>
        <Todolist />
      </CartProvider>
    </div>
  );
}
Todolist.js

import React from 'react';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { CartContext } from './CartContext';
function Todolist() {
  const { data } = useContext(CartContext);

  return <div>{data}</div>;
}

export default Todolist;


========================================================
