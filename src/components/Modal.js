import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, data }) => {
    const [editData, setEditData] = useState(data);


  return (
    <div className={`modal ${isOpen ? 'is-active' : ''}`}>
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-content">
        <div className="box">
          <h2>Edit Data</h2>
          <form>
          {Object.entries(data).map(([key, value]) => (
            <div key={key} className="field is-halfwidth">
              <label className="label has-text-left">{key}</label>
              <div className="control">
                <input className="input" type="text" value={value}name={key}/>
              </div>
            </div>
          ))}
          <button className='button is-danger'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;