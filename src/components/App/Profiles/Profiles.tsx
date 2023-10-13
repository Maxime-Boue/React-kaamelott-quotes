/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
import { KaamelottType } from '../../../type/type';
import ProfileItem from './ProfileItem/ProfileItem';
import './Profiles.scss';

type ProfilesProps = {
  personnages: KaamelottType[];
  setQuote: () => void;
};

function shuffleArray(array) {
  // eslint-disable-next-line no-plusplus
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function Profiles({ personnages, setQuote }: ProfilesProps) {
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
      {personnagesUniques.map((personnage) => (
        <ProfileItem
          key={personnage.character}
          personnage={personnage}
          setQuote={setQuote}
        />
      ))}
    </div>
  );
}

export default Profiles;
