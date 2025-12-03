import { Icon } from '@iconify/react';
import {iconMap} from '../data/iconMap.ts';

export default function IconTech({ name, size = 24, className = '' }) {
  const iconKey = iconMap[name];
  if (!iconKey) {
    console.warn(`No icon found for: ${name}`);
    return null;
  }
  
  return (
    <Icon 
      icon={iconKey}
      width={size}
      height={size}
      className={className}
    />
  );
}
