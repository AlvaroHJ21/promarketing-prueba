import { AiOutlineInfoCircle } from 'react-icons/ai';
import { FaChevronDown, FaWallet } from 'react-icons/fa';

interface Props {
  icon: 'info' | 'wallet' | 'chevron-down';
  size?: number;
}

export const Icon = ({ icon, size = 20 }: Props) => {
  return (
    <>
      {icon == 'info' && <AiOutlineInfoCircle size={size} />}
      {icon == 'wallet' && <FaWallet size={size} />}
      {icon == 'chevron-down' && <FaChevronDown size={size} />}
    </>
  );
};
