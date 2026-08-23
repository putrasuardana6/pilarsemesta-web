/**
 * Pilar Semesta - Main Interaction Script
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Single-Open Accordion for FAQ Section
  const faqDetails = document.querySelectorAll('#faq-container details');

  faqDetails.forEach((targetDetail) => {
    targetDetail.addEventListener('toggle', () => {
      if (targetDetail.open) {
        faqDetails.forEach((detail) => {
          if (detail !== targetDetail && detail.open) {
            detail.removeAttribute('open');
          }
        });
      }
    });
  });

  // 2. Smooth Navigation Offset Handling for Sticky Header
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});