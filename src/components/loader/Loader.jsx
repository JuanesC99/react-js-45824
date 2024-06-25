import React from 'react'
import { PacmanLoader } from 'react-spinners' 

const Loader = () => {
  return (
    <div style={{width:'100vw', height:'100vh', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
    {/* <PacmanLoader color="yellow" size='5rem' /> */}
        <img src='https://i.gifer.com/ZKZg.gif' alt='loader'/>
    </div>
  )
}

export default Loader
