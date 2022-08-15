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
  clickedItem = getClickedItem(event);
  clickedItemType = clickedItem.parentElement.classList[0];
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
    //https://wa.me/?text=urldamensagempronta
  }
  else {
    buttonElement.classList.remove('active-order-button');
  }
}

function placeOrder() {
  highlightedItems = getHighlightedItems();
  dishName = highlightedItems[0].querySelector('h3').innerHTML;
  console.log(dishName);
}