import { PRIMARY_COLORS, SECONDARY_COLORS } from './constants';

export function getStoryDate(timestamp?: number): string | null {
  if (!timestamp) return null;

  return new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(timestamp);
}

export function getColorClassname(index: number, type: 'primary' | 'secondary'): string {
  const colors = type === 'primary' ? PRIMARY_COLORS : SECONDARY_COLORS;
  const colorsLength = type === 'primary' ? PRIMARY_COLORS.length : SECONDARY_COLORS.length;

  return colors[index % colorsLength].className;
}
