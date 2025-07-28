1. todo List:

import React from "react";

import { useState } from "react";

function Newcounter() {
  const todolistItems = [
    { taskname: "task1", status: "pending" },
    { taskname: "task2", status: "completed" },
    { taskname: "task3", status: "completed" },
    { taskname: "task4", status: "pending" },
  ];

  const [todolist, setTodolist] = useState(todolistItems);
  const [input, setInput] = useState();

  const addTodolist = () => {
    const newtask = {
      id: 1,
      taskname: input,
      status: "completed",
    };
    setTodolist([...todolist, newtask]);
  };

  const deleteItem = (index) => {
    const newTodos = [...todolist];
    newTodos.splice(index, 1);
    setTodolist(newTodos);
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button onClick={addTodolist}>add</button>
      <br/>
      {todolist.map((item, key) => (
        <span key={key}>
          {item.taskname}-{item.status}
          <br /> <button onClick={() => deleteItem(key)}>delete</button>
        </span>
      ))}
    </div>
  );
}

export default Newcounter;
========================================================================================================================
========================================================================================================================
========================================================================================================================

2. button reusable components

callback functions React
 
import React from 'react';

const Button = ({ callbackClick }) => {
  return (
    <>
      <button onClick={callbackClick}>Click</button>
      {console.log('Button Re-render')}
    </>
  );
};

export default React.memo(Button);


import React, { useState } from 'react';
import { render } from 'react-dom';
import Button from './button';

const App = () => {
  const [count, setCount] = useState(0);
  const upDateCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <div>The Numner is {count}</div>
      <br />
      <Button callbackClick={upDateCount} />
    </div>
  );
};

====================================================================================================
========================================================================================================================
3. reusable components

   Button components  btn.js
   
import React from "react";

const Button = ({ lable, onClick }) => {
  return (
    <div>
      <button onClick={onClick}>{lable}</button>
    </div>
  );
};

export default Reusablebtncomponent;

app.js


function App(){
 const handleClick=()=>{
  alert("btn clicked");
 }
 
 return (
 <div ClassName="App
    <Button lable="click me" onClick={handleClick}/>
 </div>
 )
}
========================================================================================================
========================================================================================================================
Login form using async fetch with Post method

import React from "react";
import { useState } from "react";

function LoginForm() {
  const [email, setUsername] = useState();
  const [password, setPassword] = useState();

  const submithandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDN5Odz2EokBzEiDgtmPuWn_tz4toWipIQ",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
            returnSecureToken: true,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error.message || "Authentication failed!");
      }

      console.log("Login success:", data);
      // Redirect or store token here
    } catch (err) {
      console.error("Login error:", err.message);
      // Show error to user via state
    }
  };

  return (
    <div className="Login-form">
      <form onSubmit={submithandler}>
        <label>username</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label>password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default LoginForm;
=====================================================================================
using axios with Post method

import React, { useState } from "react";
import axios from "axios";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDN5Odz2EokBzEiDgtmPuWn_tz4toWipIQ",
        {
          email,
          password,
          returnSecureToken: true,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Login successful:", response.data);
      // Optionally save token to localStorage:
      // localStorage.setItem("token", response.data.idToken);
    } catch (err) {
      console.error("Login failed:", err.response?.data?.error?.message || err.message);
      setError(err.response?.data?.error?.message || "Authentication failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="Login-form">
      <form onSubmit={submitHandler}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Submit"}
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
}

export default LoginForm;
=========================================================================================
=========================================================================================

fetch method using fetch

import React, { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data when component mounts
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
          throw new Error("Something went wrong while fetching users");
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>User List</h2>
      {loading && <p>Loading users...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
========================================================================================

using axios to fetch data

import React, { useEffect, useState } from "react";
import axios from "axios";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch users when the component mounts
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(response.data); // axios stores response data in `response.data`
      } catch (err) {
        setError(err.message || "Error fetching users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>User List</h2>
      {loading && <p>Loading users...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;

===================================================================
===================================================================
context API  example

CarContext.js

import React, { createContext, useState } from "react";

export const CartContext = createContext();




export const CartProvider = ({ children }) => {
	
	 const [cartItems, setCartItems] = useState([]);
	
	return(
	
	<CartContext.Provider value={{ someData }}>
      {children}
    </CartContext.Provider>
	
	)
}


app.js

// App.js
import React from "react";
import { CartProvider } from "./components/CartContext";

import Header from "./components/Header";
import ProductList from "./components/ProductList";
import CartPage from "./components/CartPage";

const App = () => {
  return (
    <CartProvider>
      <Header />
      <ProductList />
      <CartPage />
    </CartProvider>
  );
};

export default App;


carpage.js

// CartPage.js
import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h3>Your Cart</h3>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id}>
            {item.name}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default CartPage;

header.js

// Header.js
import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const Header = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <header>
      <h2>🛒 My Store</h2>
      <p>Cart Items: {cartItems.length}</p>
    </header>
  );
};

export default Header;
==================================================
component life cycle method

import React from "react";
import { useState, useEffect } from "react";

const CompLifeCycleMethod = () => {
  const [count, setCount] = useState(0);

  //mouting
  useEffect(() => {
    console.log("mounted"); // mounting
    const timer = setInterval(() => console.log("Running..."), 1000);
    return () => {
      console.log("Component unmounted"); // Cleanup
       clearInterval(timer);
    };
  },[]);

  useEffect(() => {

    
    if (count !== 0) {
      console.log('Component updated due to count:', count);
    }
  }, [count]);

  return <div>
            <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  </div>;
};

export default CompLifeCycleMethod;
=======================================================
 import React, { useLayoutEffect, useState } from "react";
import { useEffect } from "react";

function Allinone() {
  const [error, setError] = useState(false);
  const [isLoggedin, setLoggedIn] = useState(true);

  useEffect(() => {
    console.log("loaded later");
  }, []);

  useLayoutEffect(() => {
    console.log("use Layout will load first");
  }, []);

  function renderLoginStatus() {
    if (isLoggedin) return <div>loggedIn</div>;
    else return <div>not loggedIn</div>;
  }

  return (
    <div>
      <h1>here</h1>

      {error && <div>condtion is only true</div>}

      {isLoggedin ? <div>loggedIn</div> : <div>not logged In</div>}

      {renderLoginStatus()}
    </div>
  );
}

export default Allinone;
============================================================
====================toggle button====================

import React from 'react'
import { useState } from 'react'

const Togglebutton = () => {

    const [initial,setInitial] = useState("edit")

    const handler=()=>{
        setInitial(prev=> prev==='save'? "edit":"save")   
    }
  return (
    <div>
        <h1>Togglebutton</h1>

        <button onClick={handler}>{initial}</button>
      
    </div>
  )
}

export default Togglebutton
==========================================================

custom hooks

// useWindowSize.js
import { useState, useEffect } from "react";

function useWindowsize() {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}
    
	and import in any component file
export default useWindowsize;


import React from 'react'
import useWindowsize from './useWindowsize'
const Samplewindow = () => {
  const widthofscreen = useWindowsize();
  return (
    <div>
      Screen size: {widthofscreen}
    </div>
  );
}

export default Samplewindow

============================================================
debouncing with API search in client side

import React from "react";
import { useState, useEffect } from "react";

const DebounceWithAPISearch = () => {
  const [user, setUser] = useState([]);
  const [input, setInput] = useState();
  const [debouncedTerm,setDebouncedTerm]=useState()

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUser(data));

    // setUser(user);
    console.log(user);
  }, []);

  useEffect(()=>{
    setTimeout(() => {
      setDebouncedTerm(input);
    }, 2000);
  },[input])

  const filteredUser=user.filter((item)=>{
    return item.name.includes(debouncedTerm)
  })

  return (
    <div>
      <h1>Debounce with Rest API</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {filteredUser.map((item) => {
        return (
          <span><br/>
            {item.name}
            <br />
          </span>
        );
      })}
    </div>
  );
};

export default DebounceWithAPISearch;
===============================================
Debouncing with serach API with server side

import React from "react";
import { useState, useEffect } from "react";

const DebounceWithAPISearch = () => {
  const [user, setUser] = useState([]);
  const [input, setInput] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState();

  useEffect(() => {
    const fetchFilteredPosts = async () => {
      fetch(`https://jsonplaceholder.typicode.com/users?q=${debouncedTerm}`)
        .then((response) => response.json())
        .then((data) => setUser(data));
    };

    if (debouncedTerm) {
      fetchFilteredPosts();
    }
  }, [debouncedTerm]);

  useEffect(() => {
    setTimeout(() => {
      setDebouncedTerm(input);
    }, 2000);
  }, [input]);

  return (
    <div>
      <h1>Debounce with Rest API</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {user.map((item) => {
        return (
          <span>
            <br />
            {item.name}
            <br />
          </span>
        );
      })}
    </div>
  );
};

export default DebounceWithAPISearch;
===============================================================
todolist

import React, { useEffect, useState } from "react";

function Todolistone() {
  const [todolist, setTodolist] = useState([]);
  const [input, setInput] = useState("");

  const clickHandler = () => {
    const newTask = {
      taskname: input,
      status: "pending",
    };

    setTodolist([...todolist, newTask]);
    setInput("");
  };

  useEffect(() => {
    const storedTodos = localStorage.getItem("TodoListitem");
    if (storedTodos) {
      setTodolist(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("TodoListitem", JSON.stringify(todolist));
  });

  const toggleStatus = (index) => {
    const updatedList = [...todolist];
    updatedList[index].status =
      updatedList[index].status === "pending" ? "completed" : "pending";
    setTodolist(updatedList);
  };

  return (
    <div>
      <h1>Todo List Task</h1>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={clickHandler}>Add</button>

      <ul>
        {todolist.map((item, key) => (
          <li key={key}>
            <input
              type="checkbox"
              checked={item.status === "completed"}
              onChange={() => toggleStatus(key)}
            />
            <span
              style={{
                textDecoration:
                  item.status === "completed" ? "line-through" : "none",
              }}
            >
              {item.taskname}
            </span>
            ({item.status})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todolistone;

