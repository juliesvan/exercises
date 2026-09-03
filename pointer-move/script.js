window.addEventListener("mousemove", pointerMove);

function pointerMove(event) {
  console.log(event.clientX);
  console.log(event.clientY);

  // X-position
  const lightness = `${(event.clientX / window.innerWidth) * 100}%`;
  document.documentElement.style.setProperty("--lightness", lightness);

  // Y-position
  const saturation = `${(event.clientY / window.innerHeight) * 100}%`;
  document.documentElement.style.setProperty("--saturation", saturation);
}
