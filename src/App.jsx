
import './App.css'
import {useReducer} from "react";

const reducer=(preState,action)=>{
    if(action.type==='setImage'){
        return {...preState,image:action.data}
    }else {
        return  preState
    }
}
function App() {
    const [state,setState]=useReducer(reducer, {
        image:'',
        name:'',
        city:'',
        position:''
    });

    console.log(state)

  return (
    <div>
        <input type="text"  value={state.image} placeholder={"enter image url"} onChange={(e)=>setState({
            type:'setImage',
            data:e.target.value
        })}/>
        <input type="text"  value={state.name} placeholder={"enter name"} onChange={(e)=>setState({
            type:'setName',
            data:e.target.value
        })}/>
        <input type="text"  value={state.city} placeholder={"enter city "} onChange={(e)=>setState({
            type:'setCity',
            data:e.target.value
        })}/>
        <input type="text"  value={state.position} placeholder={"enter position "} onChange={(e)=>setState({
            type:'setPosition',
            data:e.target.value
        })}/>
        <button>Set Data</button>

        <div></div>
    </div>
  )
}

export default App
