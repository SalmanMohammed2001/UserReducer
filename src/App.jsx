
import './App.css'
import {useReducer} from "react";

const reducer=(preState,action)=>{
    if(action.type==='setImage'){
        return action.data
    }else {
        return  preState
    }
}
function App() {
    const [state,setState]=useReducer(reducer, "");
    console.log(state)

  return (
    <div>
        <input type="text"  value={state.image} placeholder={"enter image url"} onChange={(e)=>setState({
            type:'setImage',
            data:e.target.value
        })}/>
        <input type="text"  value={state.name} placeholder={"enter name"} onChange={()=>setState()}/>
        <input type="text"  value={state.city} placeholder={"enter city "} onChange={()=>setState()}/>
        <input type="text"  value={state.position} placeholder={"enter position "} onChange={()=>setState()}/>
        <button>Set Data</button>

        <div></div>
    </div>
  )
}

export default App
