function createLists() {
  const names = ['Frango Yin Yang', 'Coquinha gelada', 'Pudim'];
  const descriptions = ['Um pouco de batata, um pouco de salada', 'Lata 350ml', 'Apenas pudim'];
  const prices = ['R$ 14,90', 'R$ 4,90', 'R$ 7,90'];
  const images = ['../public/images/frango_yin_yang 1.jpg', '../public/images/coquinha_gelada 1.jpg', '../public/images/pudim 1.jpg'];
  const info = [images, names, descriptions, prices];
  const listTypes = ['.dishes', '.drinks', '.desserts'];
  const tag = ['img', 'h3', 'p', 'span'];
  listTypes.map((Type, list) => {
    let ul = document.querySelector([Type])
    let li = document.createElement('li');
    info.map((Info, line) => {
      if (Info === images){
        li.appendChild(Object.assign(document.createElement(tag[line]), {src: Info[list]}));
      }
      else {
        li.appendChild(Object.assign(document.createElement(tag[line]), {innerHTML: Info[list]}));
      }
    })
    info.map((Index) => {
      const clone = li.cloneNode(true);
      ul.appendChild(clone);
    })
  })
}

window.addEventListener('DOMContentLoaded', ()=> {
  createLists();
});