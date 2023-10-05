import './ProfileItem.scss';

function ProfileItem() {
  return (
    <article className="profile">
      <img
        className="profile__pic"
        src="https://kaamelott.chaudie.re/api/personnage/Perceval/pic"
        alt="profil de ...."
      />
      <p className="profile__name">Spurius Cordius Frontinius</p>
      <button type="button" className="profile__button">
        Citation
      </button>
    </article>
  );
}

export default ProfileItem;
