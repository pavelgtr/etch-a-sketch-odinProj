let alpha = 0.0;

function random_rgba() {
  //math logi
  let o = Math.round,
    r = Math.random,
    s = 255;
  //primary color generate
  let red = o(r() * s),
    green = o(r() * s),
    blue = o(r() * s);
  // rgba Value generate
  

  if (alpha >= 1) {
    alpha = 0.1;
  } else {
    alpha = alpha += 0.1;
  }
  let rgbaValue = "rgb(" + red + ", " + green + ", " + blue + ", " + alpha.toFixed(1) + ")";
  console.log(rgbaValue);
}

random_rgba();
random_rgba();
random_rgba();
random_rgba();
random_rgba();
random_rgba();
random_rgba();
random_rgba();
random_rgba();
random_rgba();
random_rgba();
random_rgba();
random_rgba();
random_rgba();
random_rgba();
random_rgba();
random_rgba();
random_rgba();
