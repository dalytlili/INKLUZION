import { useState } from 'react';
import timelessLogo from '../assets/timelessLogo.png';
import { connectWallet } from '../Blockchain.Services';
import { useGlobalState, truncate } from '../store';
import { FaBars } from 'react-icons/fa'; // Assurez-vous d'importer l'icône appropriée

const Header = () => {
  const [connectedAccount] = useGlobalState('connectedAccount');
  const [showMenu, setShowMenu] = useState(false); // Etat local pour contrôler l'affichage de la liste dans le dialogue

  // Fonction pour basculer l'état d'affichage du menu
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="w-4/5 flex md:justify-center justify-between items-center py-4 mx-auto">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img
          className="w-32 cursor-pointer"
          src={timelessLogo}
          alt="Timeless Logo"
        />
      </div>

      {/* Icône de menu pour les écrans plus petits */}
      <div className="md:hidden">
        <FaBars size={24} onClick={toggleMenu} className="cursor-pointer" />
      </div>

      {/* Liste réactive qui s'affiche dans un dialogue sur les écrans plus petits */}
      {showMenu && (
  <div className="md:hidden absolute top-16 right-4 p-4 rounded-md shadow-md"
    style={{
      backgroundImage: 'radial-gradient(at 50% 50%, hsl(302deg 25% 18%) 0, transparent 50%)',
      backgroundColor: '#bd255f', // Changez la couleur de fond si nécessaire
    }}
  >
    <ul className="list-none">
      <li className="my-2 cursor-pointer text-white">Market</li>
      <li className="my-2 cursor-pointer text-white">Artist</li>
      <li className="my-2 cursor-pointer text-white">Features</li>
      <li className="my-2 cursor-pointer text-white">Community</li>
    </ul>
  </div>
)}




      {/* Liste pour les écrans plus grands */}
      <ul
        className="md:flex-[0.5] text-white md:flex hidden list-none flex-row justify-between items-center flex-initial"
      >
        <li className="mx-4 cursor-pointer">Market</li>
        <li className="mx-4 cursor-pointer">Artist</li>
        <li className="mx-4 cursor-pointer">Features</li>
        <li className="mx-4 cursor-pointer">Community</li>
      </ul>

      {connectedAccount ? (
        <button
          className="shadow-xl shadow-black text-white
        bg-[#e32970] hover:bg-[#bd255f] md:text-xs p-2
          rounded-full cursor-pointer"
        >
          {truncate(connectedAccount, 4, 4, 11)}
        </button>
      ) : (
        <button
          className="shadow-xl shadow-black text-white
        bg-[#e32970] hover:bg-[#bd255f] md:text-xs p-2
          rounded-full cursor-pointer"
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
      )}
    </nav>
  );
};

export default Header;
