import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hideAlert } from '../redux/ducks/alertDuck';

const Alert = ({ type, message, leftButtonText, rightButtonText, delay, ...props }) => {

  if (type >= 0) setTimeout(() => { props.hideAlert() }, delay)

  return (
    <div className="fixed mt-[90vh] ml-10 z-40">
      {type == 0 && <div className="alert alert-info shadow-lg">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>{message}</span>
        </div>
      </div>}

      {type == 1 && <div className="alert alert-warning shadow-lg">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
          <span>{message || "Warning!"}</span>
        </div>
      </div>}

      {type == 2 && <div className="alert alert-error shadow-lg">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>{message || "Error! Task failed successfully."}</span>
        </div>
      </div>}

      {type == 3 && <div className="alert alert-success shadow-lg">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>{message || "Successfully."}</span>
        </div>
      </div>}

      {type == 4 && <div className="alert shadow-lg">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>{message}</span>
        </div>
        <div className="flex-none">
          <button className="btn btn-sm btn-ghost" onClick={props.leftFunction}>{leftButtonText || "Deny"}</button>
          <button className="btn btn-sm btn-primary" onClick={props.rightFunction}>{rightButtonText || "Accept"}</button>
        </div>
      </div>}
    </div>
  )
}

const mapStateToProps = (state) => {
  const { message, type, leftButtonText, rightButtonText, delay } = state.alert;
  const leftFunction = state.alert.leftFunction || (() => { });
  const rightFunction = state.alert.rightFunction || (() => { });

  return {
    message, type, leftButtonText, rightButtonText, leftFunction, rightFunction, delay
  }
}

export default connect(mapStateToProps, { hideAlert })(Alert)