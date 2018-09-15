import React from 'react';

import Sidebar from '../../containers/Sidebar/Sidebar';

const Layout = (props) => {
  return (
    <div className="App container z-depth-2">
      <div className="row">
        <Sidebar />
        <div className='col-9'>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Layout;
