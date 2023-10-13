import { KaamelottType } from '../../../../type/type';
import './ProfileItem.scss';

type ProfileItemProps = {
  personnage: string;
};
function ProfileItem({ personnage }: ProfileItemProps) {
  return (
    <article className="profile">
      <img
        className="profile__pic"
        src={`https://kaamelott.chaudie.re/api/personnage/${personnage}/pic`}
        alt={`profil de ${personnage}`}
      />
      <p className="profile__name">{personnage}</p>
      <button type="button" className="profile__button">
        Interprète !
      </button>
    </article>
  );
}

export default ProfileItem;
