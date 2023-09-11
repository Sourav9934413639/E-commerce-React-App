import React,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios'
import Item from './Item'
import Loader from './Loader';
function App() {
  const [data,setData]=useState([]);
  const [loader,setLoader]=useState(true);
  useEffect(()=>{
    async function getData(){
      try {
        const {data}=await axios.get("https://fakestoreapi.com/products");
        setData(data);
        setLoader(false);
        console.log(data)
      } catch (error) {
        console.log(error);
      }
    }
    
    getData();
    
  },[])
  return (
    <div className="App">
    
      {loader?(<Loader/>):
      (
        <div id='container'>
          {
            data.map((item)=> <Item key={item.id} title={item.title} desc={item.description} price={item.price} image={item.image}/>)
          }
        </div>
      )}
      </div>
  );
}

export default App;
