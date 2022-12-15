import React from 'react'
import {Link} from 'react-router-dom'
const Sidebar = () => {
  return(
    <>
    <div style={{display:'flex',flexDirection:"column"}} >
    <div><Link to='/admin/dashboard/subscription'><p>Subsription</p></Link></div>
    <div><Link to='/admin/dashboard/subscription'><p>Subsription</p></Link></div>
    <div><Link to='/admin/dashboard/subscription'><p>Subsription</p></Link></div>
    <div><Link to='/admin/dashboard/subscription'><p>Subsription</p></Link></div><div><Link to='/admin/dashboard/subscription'><p>Subsription</p></Link></div>
    </div>
    </>
    )
}

export default Sidebar
