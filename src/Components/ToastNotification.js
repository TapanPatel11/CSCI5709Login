import React, { Component } from 'react';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  // minified version is also included
  // import 'react-toastify/dist/ReactToastify.min.css';
 
  const ToastNotification = () => {
    const notify = () => toast("Wow so easy !");
 
      return (
        <div>
        <button onClick={notify}>Notify !</button>
          <ToastContainer />
        </div>
      );
    
}
export default ToastNotification;
  