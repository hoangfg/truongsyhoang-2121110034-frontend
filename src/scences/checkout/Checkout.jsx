

import React from 'react'

export default function Checkout() {
  return (
    <div>
<table className="table table-bordered">
  <tbody>
    <tr><td>CHECKOUT</td></tr>
    <tr> 
      <td>
        <form className="form-horizontal">
          <div className="control-group">
            <label className="span2 control-label" htmlFor="inputName">Name</label>
            <div className="controls">
              <input type="text" placeholder="Name" id='inputName' />
            </div>
          </div>
          <div className="control-group">
            <label className="span2 control-label" htmlFor="inputAddress">Address</label>
            <div className="controls">
              <input type="text" placeholder="Address" id='inputAddress'/>
            </div>
          </div>
          <div className="control-group">
            <label className="span2 control-label" htmlFor="inputPhone">Phone</label>
            <div className="controls">
              <input type="text" placeholder="Phone" id='inputPhone'/>
            </div>
          </div>
          <div className="control-group">
            <div className="controls">
              <button type="submit" className="shopBtn">Checkout</button>
            </div>
          </div>
        </form> 
      </td>
    </tr>
  </tbody>
</table>
</div>
  )
}
