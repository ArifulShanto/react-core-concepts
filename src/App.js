import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  // var person = {
  //   name : "Dr. Mahfuz",
  //   job : 'Singer'
  // }
  // var style = {
  //   color : 'red',
  //   backgroundColor : 'cyan'
  // }

  const products = [
    {name : 'Photoshop', price : '$90.99'},
    {name : 'Illustrator' , price : '$99.99'},
    {name : 'PDF Reader' ,  price : '$70.99'},
    {name : 'Adobe Xd' , price : '$80.99'}
  ];
  const nayoks = ['Razzak','Jashim','Shakib','Bappi','Shuvo'];
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>My first paragraph</p>
        <h1 style = {style}>How are you??{person.name+ " " + person.job}</h1> */}
        <p>I am react person</p>
        <Counter></Counter>
        <Users></Users>
        {/* <Person name = 'Ruble' nayika = 'Moushumi'></Person>
        <Person name = 'Joshim' nayika = 'Shabana'></Person>
        <Person name = 'Bapparaj' nayika = 'Cheka'></Person>
        <Person name  = 'Elias k' nayika = 'Anju'></Person> */}
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(pd => <Product product = {pd}></Product>)
        }
        <Product product = {products[0]}></Product>
        <Product product = {products[1]}></Product>
        <Product product = {products[2]}></Product>
      </header>
    </div>
  );
}

// function Person (props){
//   const personStyle ={
//     border : '2px solid red',
//     margin : '10px'
//   }
//   return(
//     <div style = {personStyle}>
//       <h1>Name : {props.name}</h1>
//       <h3>Hero of {props.nayika}</h3>
//     </div>
//   )  
  
// }

function Product(props){
  const productStyle = {
    border : '2px solid red',
    margin : '10px',
    borderRadius : '5px',
    width : '300px',
    height : '300px',
    backgroundColor : 'lightgray',
    color : 'black'
  }

  const {name , price} = props.product

  return(
    <div style = {productStyle}>
      <h2>{name}</h2>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

function Counter(){
  const [count , setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick = {() => setCount(count + 1)}>increase</button>
      <button onClick = {() => setCount(count - 1)}>decrease</button>
    </div>
  )
}


function Users(){
  const [users , setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>setUsers(data))
  },[])
  return (
    <div>
      <h1>Dynamic Users : </h1>
      <ul>
        {
          users.map(user => <li>{user.email}</li> )
        }
      </ul>
    </div>
  )
}
export default App;
