const revealItems = document.querySelectorAll(
  ".hero, .section, .timeline-card, .contact-card, .insight-card, .project-card, .metric-card, .skill-block, .panel-card"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px",
  }
);

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index * 35, 260)}ms`;
  observer.observe(item);
});
