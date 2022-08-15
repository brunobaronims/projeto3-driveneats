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

function handleClick(event) {
  let clickedItem = getClickedItem(event);
  let clickedItemType = clickedItem.parentElement.classList[0];
  console.log(clickedItem);
  console.log(clickedItemType);
  if (clickedItemType === 'drinks' || clickedItemType === 'dishes' || clickedItemType === 'desserts') {
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
  }
  highlightedItems = getHighlightedItems();
  buttonElement = document.querySelector('footer.fixed-footer a');
  if ((highlightedItems[0].length + highlightedItems[1].length + highlightedItems[2].length) === 3) {
    buttonElement.classList.add('active-order-button');

    let dishInfo = {
      name: Array.from(highlightedItems[0])[0].querySelector('h3').innerHTML.trim().replace(/&nbsp;/g, ''),
      price: Array.from(highlightedItems[0])[0].querySelector('span').innerHTML
    };
    let drinkInfo = {
      name: Array.from(highlightedItems[1])[0].querySelector('h3').innerHTML.trim().replace(/&nbsp;/g, ''),
      price: Array.from(highlightedItems[1])[0].querySelector('span').innerHTML
    };
    let dessertInfo = {
      name: Array.from(highlightedItems[2])[0].querySelector('h3').innerHTML.trim().replace(/&nbsp;/g, ''),
      price: Array.from(highlightedItems[2])[0].querySelector('span').innerHTML
    };

    totalPrice = (parseFloat(dishInfo.price) + parseFloat(drinkInfo.price)
      + parseFloat(dessertInfo.price)).toFixed(2);

    let orderText = `Olá, gostaria de fazer o pedido:\n- Prato: ${dishInfo.name}\n- Bebida: ${drinkInfo.name}\n- Sobremesa: ${dessertInfo.name}\nTotal: R$ ${totalPrice}`;
    if ('active-order-button' === (clickedItem.classList[0] || clickedItem.parentElement.classList[0])) {
      person = prompt("Qual seu nome?");
      address = prompt("Qual seu endereço?");
      if (person != null && address != null) {
        info = encodeURIComponent(`\n\nNome: ${person}\nEndereço: ${address}`);
        const orderURL = `${encodeURIComponent(orderText)}${info}`;
        buttonElement.setAttribute("href", `https://wa.me/?text=${orderURL}`);
      }
      else {
        alert("Favor informar seu nome e endereço!");
      }
    }

    buttonElement.setAttribute("style", "text-decoration: none");
  }
  else {
    buttonElement.removeAttribute("href");
    buttonElement.classList.remove('active-order-button');
  }
}