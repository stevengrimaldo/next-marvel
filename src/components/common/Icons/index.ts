import Businessman from '@/assets/icons/Businessman.svg';
import Engineer from '@/assets/icons/Engineer.svg';
import Genius from '@/assets/icons/Genius.svg';
import Tactician from '@/assets/icons/Tactician.svg';

export const Icons = {
  Businessman: Businessman,
  Engineer: Engineer,
  Genius: Genius,
  Tactician: Tactician,
} as const;

export type IconNames = keyof typeof Icons;
