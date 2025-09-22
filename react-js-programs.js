1. form data registration

import React, { useState } from "react";

const Formregistration = () => {
  const [formdata, setFormdata] = useState({ name: "", email: "", age: "", dob: "", sex: "", hobbies: [], place: "" });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox" && name === "hobbies") {
      setFormdata((prevdata) => checked ? { ...prevdata, hobbies: [...prevdata.hobbies, value] } : { ...prevdata, hobbies: prevdata.hobbies.filter((hobby) => hobby !== value) });
    } else {
      setFormdata((prevdata) => ({ ...prevdata, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formdata);
    alert(`Form Submitted!\n${JSON.stringify(formdata, null, 2)}`);
  };

  return (
    <div>
      <h1>Form Registration</h1>
      <div style={{ display: "flex", flexDirection: "column", margin: "10px", justifyContent: "center", alignItems: "center" }}>
        <form onSubmit={handleSubmit}>
          name: <input type="text" name="name" value={formdata.name} onChange={handleChange} /> <br />
          email: <input type="email" name="email" value={formdata.email} onChange={handleChange} /> <br />
          age: <input type="number" name="age" value={formdata.age} onChange={handleChange} /> <br />
          dob: <input type="date" name="dob" value={formdata.dob} onChange={handleChange} /> <br />
          sex: <input type="radio" name="sex" value="male" checked={formdata.sex === "male"} onChange={handleChange} /> Male <input type="radio" name="sex" value="female" checked={formdata.sex === "female"} onChange={handleChange} /> Female <br />
          hobbies: <input type="checkbox" name="hobbies" value="cricket" checked={formdata.hobbies.includes("cricket")} onChange={handleChange} /> cricket <input type="checkbox" name="hobbies" value="football" checked={formdata.hobbies.includes("football")} onChange={handleChange} /> football <input type="checkbox" name="hobbies" value="reading" checked={formdata.hobbies.includes("reading")} onChange={handleChange} /> reading <br />
          place: <select name="place" value={formdata.place} onChange={handleChange}><option value="">--Select--</option><option value="hyd">hyd</option><option value="bang">bang</option><option value="chen">chen</option></select> <br />
          <input type="submit" value="submit" />
        </form>
      </div>
    </div>
  );
};

export default Formregistration;
==================================================================
forms using useRef

import React from 'react'
import { useRef } from "react"

const Formsusinguseref = () => {
   
    const nameRef=React.useRef()
    const emailRef=React.useRef()

    const handlesubmit=(e)=>{
        e.preventDefault();
        const formdata={
            name:nameRef.current.value,
            email:emailRef.current.value,
            hobbies:['cricket','football']
        }
        console.log("form submitted",formdata)
        alert(`Form Submitted!\n${JSON.stringify(formdata, null, 2)}`);
    }
    
  return (
    <div>
        <form onSubmit={handlesubmit}>
            name: <input type="text" name="name" ref={nameRef} /> <br />
            email: <input type="email" name="email" ref={emailRef} /> <br />
            <button type="submit">submit</button>
        </form>
    </div>
  )
}

export default Formsusinguseref

========================================================================================================================
2. todolist

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
    updatedList[index].status = updatedList[index].status === "pending" ? "completed" : "pending";
    setTodolist(updatedList);
  };
  
  const deleteItem = (index) => {
    const newlist = [...todolist];
    newlist.splice(index, 1);
    setTodolist(newlist);
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
			<button onClick={() => deleteItem(key)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todolistone;

=============================================================
========================================================================================================================

3. button reusable components

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
4 Login form using async fetch with Post method

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
5 using axios with Post method

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

6. fetch method using fetch

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

7. using axios to fetch data

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
8. context API  example

CarContext.js

import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	
	 const [cartItems, setCartItems] = useState([]);
	
	return(
	
	<CartContext.Provider value={{ cartItems }}>
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
9. component life cycle method

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
10. uselayout
 import React, { useLayoutEffect, useState } from "react";
import { useEffect } from "react";

function Allinone() {
  const [error, setError] = useState(false);
  const [isLoggedin, setLoggedIn] = useState(true);


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
11. 
import React from 'react';
import {
  useEffect,
  useState,
  useLayoutEffect,
  useInsertionEffect,
} from 'react';

function Lifecycle() {
  useEffect(() => {
    console.log('use effect - Runs after painting to the screen (async).-Doesn’t block the UI render');
  }, []);
  useLayoutEffect(() => {
    console.log('use layout effect- Runs synchronously after DOM mutations but before the browser paints.');
  }, []);
  useInsertionEffect(() => {
    console.log('use insertion 1effect- Runs even before useLayoutEffect → intended for libraries that inject styles into the DOM.');
  }, []);

  return (
    <div>
      <h1>xcxc</h1>
    </div>
  );
}

export default Lifecycle;
====================toggle button====================
12. 
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

13. custom hooks

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
export default useWindowsize;


//and import in any component file

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
import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
  const [data,setData]=useState([])

  useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(data=>setData(data))
  },[url])
 
    return {data}
}

export default useFetch

import React from 'react'
import useFetch from './useFetch'

const Fetchapi = () => {

  const {data}= useFetch('https://jsonplaceholder.typicode.com/users')
  return (
    <div>
    <ul>
      {data.map((user,key) => (
        <li key={key}>{user.name}</li>
      ))}
    </ul>
    </div>
  )
}

export default Fetchapi

last import Fetchapi in app.js

============================================================
14 . debouncing with API search in client side

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
15. Debouncing with serach API with server side

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


async function fetchUsers() {
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await res.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching users:", error);
    }
}

fetchUsers();
=============================================================
React.memo

parent.js 

import React from "react";
import { useState } from "react";
import Reactmemochild from "./Reactmemochild";

function Reactmemoparent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Parent comp</h1>
      <div>
        <Reactmemochild name="pradeep" />
        <div>
          {count}

          <button onClick={() => setCount(count + 1)}>click</button>
        </div>
      </div>
    </div>
  );
}

export default Reactmemoparent;

child.js

import React from "react";

const Reactmemochild = React.memo(({ name }) => {
  console.log("Rendering Child");

  return (
    <div>
      <h1>Child Component: {name}</h1>
    </div>
  );
});

export default Reactmemochild;

app.js

   <Reactmemoparent/>
============================================================
Usememo
//The filter logic runs only when search changes.

//If other state changes (like theme toggle, counter, etc.), React uses the cached result from the previous calculation.

//Saves performance for expensive operations (big lists, complex filtering, sorting, calculations).

//  diff  between useMemo and useCallback

useMemo: Memoize (cache) the result of a computation.

useCallback: Memoize (cache) the function itself.

import React, { useState, useMemo } from 'react';

const users = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace'];

export default function Usememo() {
  const [search, setSearch] = useState('');
  const [theme, setTheme] = useState(false);

  // ✅ Only recomputes when search changes
  const filteredUsers = useMemo(() => {
    console.log('Filtering users...');
    return users.filter((user) =>
      user.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div
      style={{
        padding: '20px',
        background: theme ? 'black' : 'white',
        color: theme ? 'white' : 'black',
      }}
    >
      <h2>Search Users</h2>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={() => setTheme(!theme)}>Toggle Theme</button>

      <ul>
        {filteredUsers.map((user, idx) => (
          <li key={idx}>{user}</li>
        ))}
      </ul>
    </div>
  );
}


=============================================================
const obj={
    name:"pradeep",
    getname:function(){
        return this.name;
    },
    getname1:()=>{this.name},
    getname2:()=>{
        return this.name
    }
}
const that = obj;
console.log(obj.getname());
console.log(obj.getname1())
console.log(obj.getname2())

//op 
pradeep    //In a regular function, this refers to the object that invokes the function.
undefined  // Arrow functions do not have their own this. They inherit this from their lexical scope (i.e., where they are defined).
undefined   //
   
    to make work inside arrow function chnage like this 

const obj={
    name:"pradeep",
    getname:function(){
        return this.name;
    },
    getname1:()=>that.name,
    getname2:()=>{
        return that.name
    }
}
const that = obj;
console.log(obj.getname());
console.log(obj.getname1())
console.log(obj.getname2())

o/p : 

pradeep
pradeep
pradeep

note: Here, that holds a reference to obj, so that.name works inside the arrow function.
==========================================================================================

                 accordion
				 
import React from "react";
import { useState } from "react";

const data = [
  {
    title: "Accordion 1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    title: "Accordion 2",
    content: "Content for accordion 2 goes here.",
  },
  {
    title: "Accordion Actions",
    content: "This could be actions like Save, Cancel, etc.",
  },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion-container">
      {data.map((item, index) => (
        <div key={index} className="accordion-item">
          <div className="accordion-header" onClick={() => toggle(index)}>
            <h3>{item.title}</h3>
            <span>{openIndex === index ? "close" :"open"}</span>
          </div>
          {openIndex === index && (
            <div className="accordion-content">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
============================================

debounce in javascript

<input type="text" id="search" placeholder="Search..." />

js.

function handleInput(event) {
  console.log("Searching for:", event.target.value);
}

const debouncedInput = debounce(handleInput, 500);

document.getElementById("search").addEventListener("input", debouncedInput);


function debounce(func, delay) {
  let timerId;

  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

============================================
API throttle

<button id="loadDataBtn">Fetch Data</button>

function fetchData() {
  console.log("API Call at:", new Date().toLocaleTimeString());
  // Simulate API call
  // fetch('/api/data')...
}

const throttledFetch = throttle(fetchData, 2000); // Only once every 2 seconds
document.getElementById("loadDataBtn").addEventListener("click", throttledFetch);


function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

=================================================
React-router

import {BrowserRouter as Router,Routes,Route,useLocation,} from "react-router-dom";

app.js

<Router>
         
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/electronics" element={<Electronics />} />
           <Route path="/addmobile" element={<AddMobile />} />

        </Routes>
        
</Router>

header.js

import { Link } from "react-router-dom";

<Link to="/home">
        <div class="item">
          <img src={img} alt="Image 2" />
          <p>Home</p>
        </div>
</Link>
<Link to="/electronics">
          <div class="item">
            <img src={img} alt="Image 2" />
            <p>Electronics</p>
          </div>
</Link>
<Link to="/addmobile">
        <div class="item">
          <img src={img} alt="Image 2" />
          <p>Add New mobile</p>
        </div>
</Link>

loginpage.js

import { useNavigate } from 'react-router-dom';

if(){
	navigate('/home');
}
===================================================
lazy loading


import { lazy,Suspense } from "react";


const Login = lazy(() => import("./pages/Login"));

function App() {
  return (
    <div className="App">
      
      
         <Suspense fallback={<div>Loading...</div>}>
             <home/>
         </Suspense>
        
    </div>
  );
}

==================================================================
STOP timer

import React, { useRef } from "react";
import { useState } from "react";

const Stopcounter = () => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  const startcounter = () => {
    if (counterRef.current) return;
    counterRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };
  const stopcouunter = () => {
    clearInterval(counterRef.current);
    counterRef.current = null;
  };
  const resetcounter = () => {
    stopcouunter();
    setCount(0);
  };
  return (
    <div>
      {count}
      <button onClick={startcounter}>start counter</button>
      <button onClick={stopcouunter}>stop counter</button>
      <button onClick={resetcounter}>reset counter</button>
    </div>
  );
};

export default Stopcounter;
=================================================================
Modal

app.js
import React from 'react';
import './style.css';
import Modal from './Modal';
import './modal.css';
import { useState } from 'react';

export default function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <button onClick={openModal}>Show Modal</button>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Dynamic Modal Header"
      >
        <p>This is the dynamic modal body content.</p>
        <p>You can pass anything as children.</p>
      </Modal>
    </div>
  );
}

modal.js

import React from 'react';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          {title}
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
=========================================================================
date timer

import React, { useEffect, useState } from 'react';

const Datetime = () => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
     setDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <p>{date.toLocaleDateString()}</p>
      <p>{date.toLocaleTimeString()}</p>

      {date.toLocaleString()}
    </div>
  );
};

export default Datetime;

==========================================================================

import React from 'react';
import { useEffect, useState } from 'react';
export default function Lifecycle() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('effect running');
    return () => {
      console.log('effect cleaning');
    };
  }, []);
  return (
    <div>
      <h1>life</h1>
      {count}
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
}

 3 diff ops
 
[] → run once (mount), cleanup only on unmount.

No deps → run every render, cleanup before every rerun.

[count] → run when count changes, cleanup before rerun.
 
 
==============================================================

use reducer

import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

const CounterWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>useReducer Counter: {state.count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default CounterWithReducer;

======================================================================
useReducer for forms

import React from 'react';
import { useReducer } from 'react';

const initialstate = {
  name: '',
  email: '',
  age: '',
};

function formreducer(state, action) {
  switch (action.type) {
    case 'change-input':
      return {
        ...state,
        [action.field]: action.value,
      };
    case 'reset':
      return initialstate;
  }
}

function Reducer() {
  const [formState, dispatch] = useReducer(formreducer, initialstate);

  const handleChange = (e) => {
    dispatch({
      type: 'change-input',
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('✅ Form Submitted:', formState);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        name
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleChange}
        />
        email
        <input
          type="text"
          name="email"
          value={formState.email}
          onChange={handleChange}
        />
        age{' '}
        <input
          type="text"
          name="age"
          value={formState.age}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      </form>
    </div>
  );
}

export default Reducer;
=========================================================
import React from 'react';
import './style.css';
import { useState, useEffect } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
    setCount(count + 1);
    setCount((prev) => prev + 1);
  }, []);

  const inc = () => {};

  return <div>{count}</div>;
}

op: 2
==================================================================

import React, { useState, useEffect } from 'react';

function Todolist() {
  const [todolist, setTodolist] = useState([]);
  const [input, setInput] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const fetchusers = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
        const data = await res.json();
        setTodolist(data.slice(0, 10)); // limit to first 10 to keep UI small
      } catch (error) {
        console.error(error);
      }
    };
    fetchusers();
  }, []);

  const editTitle = (index) => {
    setInput(todolist[index].title);
    setEditIndex(index);
  };

  const addOrUpdateItem = () => {
    if (input.trim() === '') return;

    if (editIndex !== null) {
      // Update existing item
      const updatedList = [...todolist];
      updatedList[editIndex].title = input;
      setTodolist(updatedList);
      setEditIndex(null);
    } else {
      // Add new item
      const newItem = { title: input };
      setTodolist([...todolist, newItem]);
    }

    setInput('');
  };

  return (
    <div>
      <h1>Todolist</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addOrUpdateItem}>
        {editIndex !== null ? 'Update' : 'Add'}
      </button>

      <ul>
        {todolist.map((item, key) => (
          <li key={key}>
            {item.title} <button onClick={() => editTitle(key)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todolist;


===========================================================================================
    Redux starts here
===========================================================================================
Redux is a predictable state management library for JavaScript applications

it has 3 core concepts

store: A single javascript object that holds the apps entire state
actions: A plain javascript object that describes what happend
reducers:  it is function that take the current state and action , and returns a new state.

store.js

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;

counterSlice.js

import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;

app.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>➕ Increment</button>
      <button onClick={() => dispatch(decrement())}>➖ Decrement</button>
    </div>
  );
}

export default App;

index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

=================================================
typescript

TypeScript is a superset of JavaScript developed by Microsoft that adds static typing

  feaures;
 1 static typing
 2 supports object oriented programming
 3. reusable type-safe functions.
 4. tooling support - vs code
 5. runs in any browser or we can use node.js