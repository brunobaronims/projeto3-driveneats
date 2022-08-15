function getClickedItem(event) {
  if (event.target.onclick === null) {
    let li = event.target.parentElement;
    return li;
  }
  else {
    let li = event.target;
    return li;
  }
}

function getHighlightedItems() {
  let highlightedItems = [document.getElementsByClassName('dishes-active'),
  document.getElementsByClassName('drinks-active'), document.getElementsByClassName('desserts-active')];
  return highlightedItems;
}

function highlightItem(event) {  
  let clickedItem = getClickedItem(event);
  let clickedItemType = clickedItem.parentElement.classList[0];
  clickedItem.classList.toggle(clickedItemType + '-active');
  highlightedItems = getHighlightedItems();
  if ((highlightedItems[0].length || highlightedItems[1].length || highlightedItems[2].length) > 0) {
    highlightedItems.forEach(List => {
      if (Array.from(List).length > 0) {
        Array.from(List).forEach(Item => {
          if ((Item.parentElement.classList[0] === clickedItemType)
            && (!(Item === clickedItem))) {
            Item.classList.toggle(Item.parentElement.classList[0] + '-active');
          }
        })
      }
    })
  }

  buttonElement = document.querySelector('footer.fixed-footer a');
  if ((highlightedItems[0].length + highlightedItems[1].length + highlightedItems[2].length) === 3) {
    buttonElement.classList.add('active-order-button');

    let dishInfo = {
      name: Array.from(highlightedItems[0])[0].querySelector('h3').innerHTML,
      price: Array.from(highlightedItems[0])[0].querySelector('h1').innerHTML
    };
    let drinkInfo = {
      name: Array.from(highlightedItems[1])[0].querySelector('h3').innerHTML,
      price: Array.from(highlightedItems[1])[0].querySelector('h1').innerHTML
    };
    let dessertInfo = {
      name: Array.from(highlightedItems[2])[0].querySelector('h3').innerHTML,
      price: Array.from(highlightedItems[2])[0].querySelector('h1').innerHTML
    };

    totalPrice = (parseFloat(dishInfo.price) + parseFloat(drinkInfo.price)
      + parseFloat(dessertInfo.price)).toFixed(2);

    const orderText = `Olá, gostaria de fazer o pedido: - Prato: ${dishInfo.name} - Bebida: ${drinkInfo.name} - Sobremesa: ${dessertInfo.name} Total : R$ ${totalPrice}`;
    const orderURL = encodeURIComponent(orderText);

    buttonElement.setAttribute("href", `https://wa.me/?text=${orderURL}`);
    buttonElement.setAttribute("style", "text-decoration: none");
  }
  else {
    buttonElement.classList.remove('active-order-button');
    buttonElement.removeAttribute("href");
  }
}