
import React, { useState } from 'react';

function ModalExample() {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
        {isOpen && (
          <div className="modal">
            <p>This is a modal!</p>
            <button onClick={() => setIsOpen(false)}>Close</button>
          </div>
        )}
      </div>
    );
  }

  export default ModalExample;