import { KaamelottType } from '../../../../type/type';
import './ProfileItem.scss';

type ProfileItemProps = {
  personnage: KaamelottType;
  setQuote: React.Dispatch<React.SetStateAction<string>>;
  setCharacter: React.Dispatch<React.SetStateAction<string>>;
  activeCard: string | null;
  activateCard: (quote: string) => void;
};
function ProfileItem({
  personnage,
  setQuote,
  setCharacter,
  activeCard,
  activateCard,
}: ProfileItemProps) {
  const handleClickSelector = () => {
    if (activeCard === personnage.quote) {
      activateCard('');
    } else {
      activateCard(personnage.quote);
      setQuote(personnage.quote);
      setCharacter(personnage.character);
    }
  };
  return (
    <article
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
      role="button"
      className={
        activeCard === personnage.quote ? 'character active' : 'character'
      }
      onClick={handleClickSelector}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleClickSelector();
        }
      }}
    >
      <p className="name">{personnage.character}</p>
      <img
        src={`../../../../../assets/img/${personnage.character
          .toLowerCase()
          .replace(/\s+/g, '_')
          .replace(/'/g, '_')}-front-image.png`}
        alt=""
        className="front-image"
      />
      <img
        src={`../../../../../assets/img/${personnage.character
          .toLowerCase()
          .replace(/\s+/g, '_')
          .replace(/'/g, '_')}-back-image.png`}
        alt=""
        className="back-image"
      />
    </article>
  );
}

export default ProfileItem;

// import { useState, useEffect, useRef } from 'react';
// import { KaamelottType } from '../../../../type/type';
// import './ProfileItem.scss';

// type ProfileItemProps = {
//   personnage: KaamelottType;
//   setQuote: React.Dispatch<React.SetStateAction<string>>;
// };

// function ProfileItem({ personnage, setQuote }: ProfileItemProps) {
//   const [isActive, setIsActive] = useState(false);
//   const cardRef = useRef(null);

//   useEffect(() => {
//     function handleDocumentClick(e: PointerEvent) {
//       if (cardRef.current && !cardRef.current.contains(e.target)) {
//         // Désactive la carte si le clic se trouve en dehors de celle-ci

//         setIsActive(false);
//       }
//     }

//     if (isActive) {
//       // Ajoute un écouteur de clic global pour désactiver la carte lorsque l'utilisateur clique en dehors
//       document.addEventListener('click', handleDocumentClick);
//     } else {
//       // Supprime l'écouteur de clic lorsque la carte est désactivée
//       document.removeEventListener('click', handleDocumentClick);
//     }

//     return () => {
//       document.removeEventListener('click', handleDocumentClick);
//     };
//   }, [isActive]);

//   const handleClickSelector = () => {
//     setQuote(personnage.quote);
//     setIsActive(!isActive);
//   };

//   return (
//     <article
//       ref={cardRef}
//       // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
//       role="button"
//       className={`character ${isActive ? 'active' : ''}`}
//       onClick={handleClickSelector}
//       onKeyDown={(e) => {
//         if (e.key === 'Enter') {
//           handleClickSelector();
//         }
//       }}
//     >
//       <p className="name">{personnage.character}</p>
//       <img
//         src={`../../../../../assets/img/${personnage.character
//           .toLowerCase()
//           .replace(/\s+/g, '_')
//           .replace(/'/g, '_')}-front-image.png`}
//         alt=""
//         className="front-image"
//       />
//       <img
//         src={`../../../../../assets/img/${personnage.character
//           .toLowerCase()
//           .replace(/\s+/g, '_')
//           .replace(/'/g, '_')}-back-image.png`}
//         alt=""
//         className="back-image"
//       />
//     </article>
//   );
// }

// export default ProfileItem;
