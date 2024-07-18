import React from 'react'
import './WelcomeBox.css'

function WelcomeBox() {
    return (
        <div className='welcome-box'>
            <div>
            <p style={{fontFamily:'cursive',fontSize:30,width:500}}> <span style={{fontSize:50,paddingLeft:50}}>Welcome to Library</span> <br></br>A reader lives a thousand lives thousand lives before he dies</p>
            
            </div>
            <div style={{width:50,marginLeft:0, marginLeft:250}}>
                <img style={{width:500, height:400}} src='https://i.ibb.co/cYFdxm6/homei.png' alt='book' className=''/>
            </div>

            
        </div>
    )
}

export default WelcomeBox
