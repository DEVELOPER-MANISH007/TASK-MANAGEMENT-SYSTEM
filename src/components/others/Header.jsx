import React from 'react'

const Header = (props) => {
  // Get the username from props.data
  const username = props.data?.firstname || 'User';
  
const logOutUser = () => {
  localStorage.setItem("loggedInUser",'' )
  // window.location.reload() 
  props.changeUser('')
}
  
  return (
    <div className='flex items-end justify-between text-white '>
      <h1 className='text-2xl font-medium' >Hello <br /><span className='text-3xl'>{username}😊</span></h1>
      <button  onClick={logOutUser} className='bg-red-500  text-lg font-medium text-white px-5 py-2 rounded'>Log Out</button>
    </div>
  )
}

export default Header
