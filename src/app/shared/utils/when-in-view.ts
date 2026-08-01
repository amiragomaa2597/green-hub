/**
 * Fire when the element is entering the lower part of the viewport —
 * early enough to see the motion, not so late that you've scrolled past it.
 */
export const IN_VIEW_OPTIONS: IntersectionObserverInit = {
  threshold: 0.08,
  rootMargin: '0px 0px -8% 0px',
};

export function whenInView(
  element: Element,
  onEnter: () => void
): IntersectionObserver | undefined {
  if (typeof IntersectionObserver === 'undefined') {
    onEnter();
    return undefined;
  }

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) {
        continue;
      }

      onEnter();
      observer.disconnect();
      break;
    }
  }, IN_VIEW_OPTIONS);

  observer.observe(element);
  return observer;
}

/** Prefer the section so counters start when the section is reached. */
export function resolveInViewTarget(element: HTMLElement): HTMLElement {
  return (
    element.closest('section') ??
    element.closest('.panel, .distribution, .gantt, .table-wrap') ??
    element
  );
}
