let dotsWidth = 0;

function createDots(container, containerWidth, containerHeight) {
  const spacing = 30; // Spacing between the centers of circles

  const columns = Math.ceil(containerWidth / spacing);
  const rows = Math.ceil(containerHeight / spacing);

  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
}

  // Create circles in a grid layout
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      const circle = document.createElement("div");
      circle.classList.add("circle");

      const x = col * spacing;
      const y = row * spacing;

      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;

      circle.style.animationDelay = `${Math.random() * 3}s`;

      container.appendChild(circle);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("circle-container");
  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;

  dotsWidth = Math.ceil(containerWidth / 500) * 500;
  createDots(container, dotsWidth, containerHeight);

  var ro = new ResizeObserver((entries) => {
    const cr = entries[0].contentRect;
    if (Math.ceil(cr.width / 500) * 500 > dotsWidth) {
      dotsWidth = Math.ceil(cr.width / 500) * 500;
      createDots(container, dotsWidth, containerHeight);
    }
  });

  // Observe one or multiple elements
  ro.observe(container);

});
