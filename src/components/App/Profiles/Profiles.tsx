/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
import { useEffect, useState } from 'react';
import { KaamelottType } from '../../../type/type';
import ProfileItem from './ProfileItem/ProfileItem';
import './Profiles.scss';

type ProfilesProps = {
  personnages: KaamelottType[];
  setQuote: React.Dispatch<React.SetStateAction<string>>;
};

function shuffleArray(array: KaamelottType[]) {
  // eslint-disable-next-line no-plusplus
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function Profiles({ personnages, setQuote }: ProfilesProps) {
  const [personnagesUniques, setPersonnagesUniques] = useState<KaamelottType[]>(
    []
  );

  useEffect(() => {
    const personnagesDejaAffiches = new Set();
    const shuffledPersonnages = shuffleArray(personnages);
    const uniquePersonnages = [];

    for (const personnage of shuffledPersonnages) {
      if (!personnagesDejaAffiches.has(personnage.character)) {
        personnagesDejaAffiches.add(personnage.character);
        uniquePersonnages.push(personnage);
      }

      if (uniquePersonnages.length >= 8) {
        break;
      }
    }

    setPersonnagesUniques(uniquePersonnages);
  }, [personnages]);

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
