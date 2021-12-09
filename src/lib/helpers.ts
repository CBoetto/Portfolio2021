export const isInViewport = (lowerBoundVh: Number, upperBoundVh: Number) => {

  const currentVh = window.pageYOffset / document.body.clientHeight;

  return currentVh * 100 > lowerBoundVh && currentVh * 100 < upperBoundVh;

};