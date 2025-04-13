import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility function for conditional class names with tailwind-merge
export function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}
