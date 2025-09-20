import React, { useState, useEffect } from 'react'
import './modalWork.css'

const ModalWork = ({ isOpen, onClose, imageUrl, description }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedDescription, setSelectedDescription] = useState('');

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
      setIsLoading(true);
    } else {
      setTimeout(() => {
        setShowModal(false);
      }, 600); 
    }
  }, [isOpen]);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  if (!showModal) return null;

  return (
    <div className={`modal-overlay ${isOpen ? 'show' : 'hide'}`} onClick={onClose}>
      <div className={`modal-content ${isOpen ? 'show' : 'hide'}`} onClick={(e) => e.stopPropagation()}>
        <div className="modal-inner">
          <button className="modal-close" onClick={onClose} aria-label="Close modal">×</button>
          {isLoading && (
            <div className="loading-spinner">
              <div className="spinner"></div>
            </div>
          )}
          <img 
            src={imageUrl} 
            alt="Project Preview" 
            onLoad={handleImageLoad}
            style={{ opacity: isLoading ? 0 : 1 }}
            className="modal-image align-items-center justify-content-center display-block ml-auto mr-auto"
          />
          <p className='modal-description text-center text-black'> {description} </p>
        </div>
      </div>
    </div>
  );
};

export default ModalWork;