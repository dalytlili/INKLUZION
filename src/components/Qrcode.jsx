// Qrcode.jsx
import React from 'react';
import QRCode from 'react-qr-code';
import { FaTimes } from 'react-icons/fa';

const Qrcode = ({ value, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative flex flex-col justify-center items-center bg-[#151c25] shadow-xl shadow-[#e32970] rounded-xl min-w-min p-8">
        {/* Bouton de fermeture */}
        <button className="absolute top-0 right-0 m-3 text-white" onClick={onClose}>
          <FaTimes />
        </button>
        {/* Description ou guide */}
        <p className="text-white text-center mb-4">
          Ouvre l'application mobile et pour te connecter, scanne ce code QR...
        </p>
        {/* Code QR */}
        <div className="mb-4">
          <QRCode value={value} />
        </div>
      </div>
    </div>
  );
};

export default Qrcode;
