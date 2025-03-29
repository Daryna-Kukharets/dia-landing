export function animation() {
  function onEntry(entry) {
    entry.forEach((change) => {
      if (change.isIntersecting) {
        change.target.classList.add('el-show');
      }
    });
  }

  const options = {
    threshold: [0.2],
  };

  const observer = new IntersectionObserver(onEntry, options);
  const elements = document.querySelectorAll('.el-anim');

  for (const el of elements) {
    observer.observe(el);
  }
}
