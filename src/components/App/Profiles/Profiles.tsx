import { KaamelottType } from '../../../type/type';
import ProfileItem from './ProfileItem/ProfileItem';
import './Profiles.scss';

type ProfilesProps = {
  personnages: string[];
};

function Profiles({ personnages }: ProfilesProps) {
  return (
    <div className="profiles">
      {personnages.map((personnage) => (
        <ProfileItem key={personnage} personnage={personnage} />
      ))}
    </div>
  );
}

export default Profiles;
