import React  from 'react'
import Loading from './Loading.gif'
import Loader2 from './loader2.gif'
 const Spinner=(props)=> {
  
    return (
      <div class="text-center" >

        {props.mode==='dark'? <img src={Loader2} style={{height:"80px"}} alt="loading"></img>:<img src={Loading} style={{height:"80px"}} alt="loading"></img>}
      
      </div>
    )
  
}
export default  Spinner
