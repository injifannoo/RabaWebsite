import React, { useState } from 'react';

const DeleteConfirmationModal = ({ isOpen, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Are you sure you want to delete this blog?</h2>
        <button onClick={onConfirm}>Yes, Delete</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
