import logo from './logo.svg';
import './App.css';
import Header from "./mycomponents/Header";
import { Footer } from './mycomponents/Footer';
import { Todos } from './mycomponents/Todos';
import React, { useState } from 'react';



function App() {
const onDelete=(todo)=>{
  console.log("on delete",todo)
}
const [todes, settodos] = useState([

    {
      sno : 1,
      title:"go to the market",
      desc:"get the job done",

    },
    {
      sno : 2,
      title:"go to the malll",
      desc:"get the job done",

    },
    {
      sno : 3,
      title:"go to the hall",
      desc:"get the job done",

    }
  ])
  return (
    <>
<Header title="my todos list" searchbar={true} />
<Footer/>
<Todos todos={todos} onDelete={onDelete} />

  </>
  );
}

export default App;
