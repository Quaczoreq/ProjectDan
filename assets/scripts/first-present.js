document.addEventListener('DOMContentLoaded', () => {
  const gifts = Array.from(document.querySelectorAll('.gift-triangle .gift-with-photo'));
  // 1st, 5th, 7th, 10th, 12th, 14th presents (0-based indices)
  const targetIndexes = [0, 4, 6, 9, 11, 13];

  targetIndexes.forEach((idx) => {
    const el = gifts[idx];
    if (!el) return;

    const addNoHover = () => {
      el.classList.add('no-hover');
      // drop focus to avoid :focus style persisting
      if (typeof el.blur === 'function') el.blur();
    };

    const removeNoHover = () => {
      el.classList.remove('no-hover');
    };

    el.addEventListener('click', addNoHover);
    el.addEventListener('mouseleave', removeNoHover);
  });
});
