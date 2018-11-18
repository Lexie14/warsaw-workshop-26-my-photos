class Carousel {
  constructor({
    sourceSelector=".images-list-placeholder", 
    destinationSelector='.carousel'
  }={}) {
   this.imagesEl = Array.from(document.querySelectorAll(`${sourceSelector} img`)
    ); 
  this.imagesSrcs = imagesList.images.map(image => image.url);
  this.destinationEl = document.querySelector(destinationSelector);
  this.init();
}

init() {
  let index = 1;
  this.render();
  setInterval(() => {
   let image = this.destinationEl.querySelector('img');
   image.src = this.imagesSrcs[index];
   let radios = this.destinationEl.querySelectorAll('input[type="radio"]');
   radios[index].checked = true;
    index++;
    if (index === this.imagesSrcs.length) index = 0;
  }, 2000)
}

renderRadios() {
let tempEl = document.createElement('fieldset');
tempEl.innerHTML = this.imagesSrcs.map(img => {
  return `<input type="radio" name='carousel-name'/>`
})
.join('');
this.destinationEl.appendChild(tempEl);
}

render() {
  let tempEl = document.createElement('div');
    tempEl.innerHTML = `<img id='carousel-img' src='${this.imagesSrcs[0]}'/>`;
    this.destinationEl.appendChild(tempEl.firstChild);
    this.renderRadios();
}
}