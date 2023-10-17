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
      setCharacter('');
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
