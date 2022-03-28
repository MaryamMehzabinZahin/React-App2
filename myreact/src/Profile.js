import React,{useState} from 'react'

function Profile() {

  const [loggedIn,setLoggedIn]=useState(true)
  return (
    <div>
        
        {loggedIn?<h1>welcome</h1>:<h1>guest</h1>}
        </div>
  )
}
export default Profile
