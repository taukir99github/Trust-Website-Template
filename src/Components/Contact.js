import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <div>
      <div className="container">
      
      <form action="">
        <h1>ASK FOR HELP</h1>
        
        <input type="text" placeholder="Your name"/>
        <input type="Phone no." placeholder="Your Mobile Number"/>
        <input type="Address" rows="2" placeholder="Your Address"/>
        <textarea name="" id="message"  rows="6">Write your queries...</textarea>
        <button type="submit">send</button>
      </form>
    </div>
    </div>
  )
}

export default Contact