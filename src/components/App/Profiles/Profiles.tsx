/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
import { KaamelottType } from '../../../type/type';
import ProfileItem from './ProfileItem/ProfileItem';
import './Profiles.scss';

type ProfilesProps = {
  personnages: KaamelottType[];
};

function shuffleArray(array) {
  // eslint-disable-next-line no-plusplus
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function Profiles({ personnages }: ProfilesProps) {
  const personnagesDejaAffiches = new Set();

  const personnagesUniques = [];

  const personnagesMelanges = shuffleArray(personnages);

  for (const personnage of personnagesMelanges) {
    if (!personnagesDejaAffiches.has(personnage.character)) {
      personnagesDejaAffiches.add(personnage.character);
      personnagesUniques.push(personnage);
    }

    if (personnagesUniques.length >= 8) {
      break;
    }
  }

  return (
    <div className="profiles">
      <div className="character">
        <img
          src="../../../assets/img/arthur-name.png"
          alt=""
          className="name"
        />
        <img
          src="../../../assets/img/arthur-front-image.png"
          alt=""
          className="front-image"
        />
        <img
          src="../../../assets/img/arthur-back-image.jpg"
          alt=""
          className="back-image"
        />
      </div>
      {personnagesUniques.map((personnage) => (
        <ProfileItem
          key={personnage.character}
          personnage={personnage.character}
        />
      ))}
    </div>
  );
}

export default Profiles;
