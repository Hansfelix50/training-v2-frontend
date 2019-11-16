import React from 'react'

const Layout = ({ children }) => {
  // console.log(children)
  // if (!localStorage.getItem('cookie')) return <p> No estas autenticado</p>

  return <div style={{ padding: 20, backgroundColor: 'peru', height: '100vh' }}>
    { children }
  </div>
}

export default Layout
