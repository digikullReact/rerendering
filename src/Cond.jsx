import React,{useState} from 'react'

const Cond = (props) => {

    const [state,setState]=useState()


    // Whenver the state of the component is changed the rerendering happens  as well
    // Whenver the props passed to the component changes re rendering happens in chilc component only
    // Whwnever the parent component re renders then also the child component re renders

    // event handler ====function 
    const addme=()=>{
        setState({name:"Nitin" ,age:"20"})

    }
    return (
        <div>
           <h1>{ 
           state?[`${state.name} - ${state.age}`]:" Nothing to render"
           
           }</h1> 

           <h1>{props.state} From Parent</h1>
            
<button onClick={addme}> 
Add Data

</button>

        </div>
    )
}

export default Cond
