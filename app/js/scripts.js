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

function highlightItem(event) {
  clickedItem = getClickedItem(event);
  clickedItemType = clickedItem.parentElement.classList[0];
  clickedItem.classList.toggle(clickedItemType + '-active');
  let activeDish = document.getElementsByClassName('dishes-active');
  let activeDrink = document.getElementsByClassName('drinks-active');
  let activeDessert = document.getElementsByClassName('desserts-active');
  let activeItems = [Array.from(activeDish), Array.from(activeDrink), Array.from(activeDessert)];
  if ((activeDish.length || activeDrink.length || activeDessert.length) > 0) {
    activeItems.forEach(List => {
      if (List.length > 0) {
        List.forEach(Item => {
          if ((Item.parentElement.classList[0] === clickedItemType)
            && (!(Item === clickedItem))) {
            Item.classList.toggle(Item.parentElement.classList[0] + '-active');
          }
        })
      }
    })
  }

  buttonElement = document.querySelector('footer.fixed-footer a');
  if ((activeDish.length + activeDrink.length + activeDessert.length) === 3) {
   buttonElement.classList.add('active-order-button');
    //https://wa.me/?text=urldamensagempronta
  }
  else if ('active-order-button' === buttonElement.classList[0]) {
    buttonElement.classList.remove('active-order-button');
  }
}