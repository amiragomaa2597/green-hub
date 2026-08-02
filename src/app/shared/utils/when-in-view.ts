/**
 * Fire when the element enters the viewport early enough to see the motion.
 * Uses a tiny threshold so tall sections still trigger when only a strip is visible.
 */
export const IN_VIEW_OPTIONS: IntersectionObserverInit = {
  threshold: 0.01,
  rootMargin: '0px 0px -48px 0px',
};

export function whenInView(
  element: Element,
  onEnter: () => void
): IntersectionObserver | undefined {
  let done = false;

  const finish = (): void => {
    if (done) {
      return;
    }
    done = true;
    onEnter();
    observer?.disconnect();
  };

  if (typeof IntersectionObserver === 'undefined') {
    finish();
    return undefined;
  }

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) {
        continue;
      }
      finish();
      break;
    }
  }, IN_VIEW_OPTIONS);

  observer.observe(element);

  // Catch already-visible nodes (first paint / IO race) without waiting for scroll.
  const checkVisible = (): void => {
    if (done || !(element instanceof HTMLElement)) {
      return;
    }

    const rect = element.getBoundingClientRect();
    if (rect.width === 0 && rect.height === 0) {
      return;
    }

    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight || 0;
    const topLimit = viewportHeight - 48;
    const isVisible = rect.top < topLimit && rect.bottom > 0;
    if (isVisible) {
      finish();
    }
  };

  requestAnimationFrame(() => {
    checkVisible();
    // Second pass after layout settles (images / fonts / nested view init).
    requestAnimationFrame(checkVisible);
  });

  // Safety: never leave content stuck invisible / counters at 0.
  window.setTimeout(checkVisible, 1200);

  return observer;
}

/**
 * Observe a nearby visual container so motion starts when that block is seen —
 * not when a tall parent section first peeks into view.
 */
export function resolveInViewTarget(element: HTMLElement): HTMLElement {
  return (
    element.closest(
      [
        '.chart__center',
        '.legend__copy',
        '.overview__card',
        '.rung',
        '.gauge',
        '.summary > div',
        '.distribution',
        '.gantt',
        '.station',
        '.cost-strip',
        '.panel',
        'tr',
        'article',
        'aside',
      ].join(', ')
    ) ?? element
  );
}
