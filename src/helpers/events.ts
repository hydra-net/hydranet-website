import { Sections } from '../enums';

export function handleScrollTo(target: keyof typeof Sections | string) {
  const element: HTMLInputElement | null = document.querySelector(
    target.startsWith('#') ? target : `#${target}`
  );
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}
