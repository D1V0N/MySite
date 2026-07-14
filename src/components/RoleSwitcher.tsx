import { roleOrder } from '../data/constants';
import type { RoleContent, RoleId } from '../data/types';
import SegmentedControl from './SegmentedControl';

interface RoleSwitcherProps {
  activeRole: RoleId;
  onChange: (role: RoleId) => void;
  roles: Record<RoleId, RoleContent>;
  ariaLabel: string;
}

export default function RoleSwitcher({ activeRole, onChange, roles, ariaLabel }: RoleSwitcherProps) {
  return (
    <SegmentedControl
      options={roleOrder.map((id) => ({ value: id, label: roles[id].navLabel }))}
      value={activeRole}
      onChange={onChange}
      ariaLabel={ariaLabel}
    />
  );
}
