class ImagesList {
  constructor({source, parentElSelector = ".images-list-placeholder"}) {
    this.parentEl = document.querySelector(parentElSelector);
    this.source = source;
    this.init();
  }

  init() {
    this.images = this.source.map(image => {
      let imageClass = new ImageClass(image);
      return imageClass;
    });    
  }

  addImage(image) {
   this.images.unshift(image);
   this.reRender();
  }

  reRender() {
    this.parentEl.innerHTML = '';
    this.render();
  }
  
  render() {
    let listEl = document.createElement('ul');
    listEl.classList.add('images-list');
    this.images.map(image => {
     listEl.appendChild(image.render()); 
    });
    this.parentEl.appendChild(listEl);
  }

}
