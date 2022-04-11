import logo from './logo.svg';
import './App.css';

function App() {
 // const 
 const list = ['Android','Balckberry','iPhone','Windows Phone',5];
 const updatedList =list.map((el)=>{
    return <li>{el}</li>;
});

const listtwo =['Samsung','HTC','Micromax','Apple']

const newlist = listtwo.map(el => {
    return <li className={`${el == listtwo[listtwo.length-1] ? "listcircle":""}`}>{el}</li>;
});
  return (
    <div className="App">
     
    <h1>Mobile Operating System</h1>
       
     <ul>
        {updatedList}
    </ul>
        
     <h1>Mobile Manufacturers</h1>
    
      <ul>
        {newlist}
      </ul>

      
    </div>
  );
}

export default App;
