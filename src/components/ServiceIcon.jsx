import {
  LuCalendarCheck, LuSettings2, LuWrench, LuPackage, LuTimer, LuUsers, LuBadgeCheck,
  LuShieldCheck, LuMapPin, LuSnowflake, LuHotel, LuStore, LuHeartPulse, LuBuilding2, LuHouse,
} from 'react-icons/lu';

const ICONS = {
  calendar: LuCalendarCheck,
  settings: LuSettings2,
  wrench: LuWrench,
  package: LuPackage,
  timer: LuTimer,
  users: LuUsers,
  badge: LuBadgeCheck,
  shield: LuShieldCheck,
  pin: LuMapPin,
  authorised: LuSnowflake,
  hotel: LuHotel,
  dairy: LuStore,
  medical: LuHeartPulse,
  office: LuBuilding2,
  home: LuHouse,
};

export default function ServiceIcon({ name, size = 24 }) {
  const Icon = ICONS[name] ?? LuSnowflake;
  return <Icon size={size} aria-hidden="true" />;
}
