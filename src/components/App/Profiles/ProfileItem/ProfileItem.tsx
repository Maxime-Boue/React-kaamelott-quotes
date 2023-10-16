import { KaamelottType } from '../../../../type/type';
import './ProfileItem.scss';

type ProfileItemProps = {
  personnage: KaamelottType;
  setQuote: () => void;
};
function ProfileItem({ personnage, setQuote }: ProfileItemProps) {
  const handleClickSelector = (e) => {
    e.preventDefault();
    console.log('coucou');
    console.log(personnage);

    setQuote(personnage.quote);
  };

  return (
    <article className="character" onClick={handleClickSelector}>
      <p className="name">{personnage.character}</p>
      <img
        src={`../../../../../assets/img/${personnage.character
          .toLowerCase()
          .replace(/\s+/g, '_')}-front-image.png`}
        alt=""
        className="front-image"
      />
      <img
        src={`../../../../../assets/img/${personnage.character
          .toLowerCase()
          .replace(/\s+/g, '_')}-back-image.png`}
        alt=""
        className="back-image"
      />
    </article>
    /* <article className="profile">
      <img
        className="profile__pic"
        src={`https://kaamelott.chaudie.re/api/personnage/${personnage}/pic`}
        alt={`profil de ${personnage}`}
      />
      <p className="profile__name">{personnage}</p>
      <button type="button" className="profile__button">
        Interprète !
      </button>
  </article> */
  );
}

export default ProfileItem;
