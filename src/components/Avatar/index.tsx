import { PokemonData } from '../../context/AppContext';
import './style.scss';

interface AvatarProps extends PokemonData { }

export const Avatar = ({ name, image }: AvatarProps) => {
  return (
    <div className="avatar-wrapper">
      <img src={image} alt={name} />
    </div>
  )
}