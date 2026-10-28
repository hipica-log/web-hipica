const localDateKey = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const hide = (element: HTMLElement) => {
  element.hidden = true;
  element.classList.add('!hidden');
};

const show = (element: HTMLElement) => {
  element.hidden = false;
  element.classList.remove('hidden', '!hidden');
};

const updateVisibility = () => {
  const today = localDateKey(new Date());

  document.querySelectorAll<HTMLElement>('[data-expiration-date]').forEach((element) => {
    const expirationDate = element.dataset.expirationDate;
    if (!expirationDate || expirationDate >= today) return;

    if (element.hasAttribute('data-expiration-page')) {
      hide(element);
      const notice = document.querySelector<HTMLElement>('[data-expired-notice]');
      if (notice) show(notice);
      return;
    }

    const card = element.closest<HTMLElement>('li') ?? element;
    hide(card);
  });

  document.querySelectorAll<HTMLElement>('[data-expiry-list]').forEach((list) => {
    const items = Array.from(list.children).filter((child) => child instanceof HTMLElement);
    const hasVisibleItems = items.some((item) => !item.hidden);
    const emptyMessage = list.parentElement?.querySelector<HTMLElement>('[data-expiry-empty]');

    if (emptyMessage && !hasVisibleItems) show(emptyMessage);
  });

  const homeCards = Array.from(document.querySelectorAll<HTMLElement>('[data-home-news-card]')).filter((card) => !card.hidden);
  homeCards.slice(3).forEach(hide);

  const homeEmptyMessage = document.querySelector<HTMLElement>('[data-home-news-empty]');
  if (homeEmptyMessage && homeCards.length === 0) show(homeEmptyMessage);
};

const scheduleNextCheck = () => {
  const now = new Date();
  const nextMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

  window.setTimeout(() => {
    updateVisibility();
    scheduleNextCheck();
  }, nextMidnight.getTime() - now.getTime() + 50);
};

updateVisibility();
scheduleNextCheck();
