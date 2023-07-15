document.addEventListener('DOMContentLoaded', () => {
  const accordionItems = document.querySelectorAll('.js-accordion .accordion-item');

  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');
    const arrow = item.querySelector('.accordion-item::after'); // 矢印の要素を取得

    header.addEventListener('click', () => {
      item.classList.toggle('active');
      content.style.maxHeight = item.classList.contains('active') ? content.scrollHeight + 'px' : '0';

      if (item.classList.contains('active')) {
        arrow.style.transform = 'rotate(-45deg)';
      } else {
        arrow.style.transform = 'rotate(135deg)';
      }
    });
  });
});
