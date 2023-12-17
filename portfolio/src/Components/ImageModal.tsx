// src/components/ImageModal.tsx
import React from 'react';
import Modal from 'react-modal';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, imageUrl }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className="ImageModal" // Apply the custom styles
      overlayClassName="Overlay" // Optional: Add an overlay class for background styling
    >
      <div className="CloseButton" onClick={onClose}>
        x
      </div>
      <img src={imageUrl} alt="Full Size" />
    </Modal>
  );
};

export default ImageModal;
