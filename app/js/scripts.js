function getHighlightedElement(activeList) {
  activeElement = Array.from(activeList)[0];
  return activeElement;
}

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

function highlightDish(event) {
    let activeDish = document.getElementsByClassName('dish-active');
    let activeDrink = document.getElementsByClassName('drink-active');
    let activeDessert = document.getElementsByClassName('dessert-active');
    clickedItem = getClickedItem(event);
    if (activeDish.length > 0) {
      activeElement = getHighlightedElement(activeDish);
      if (!(clickedItem === activeElement)) {
        activeElement.classList.toggle('dish-active');
        clickedItem.classList.toggle('dish-active');
      }
      else {
        clickedItem.classList.toggle('dish-active');
      }
    }
    else {
      clickedItem.classList.toggle('dish-active');
    }


    let activeDishes = activeDish.length;
    let activeDrinks = document.getElementsByClassName('drink-active').length;
    let activeDesserts = document.getElementsByClassName('dessert-active').length;
    if (activeDishes + activeDrinks + activeDesserts === 3) {
      document.querySelector('footer.fixed-footer button').classList.toggle('active-order-button');
    //https://wa.me/?text=urldamensagempronta
    }
}

function highlightDrink(event) {
    let activeList = document.getElementsByClassName('drink-active');
      Array.from(activeList).forEach(Drink =>
        Drink.classList.toggle('drink-active')  
    );
    if (event.target.onclick === null) {
      let li = event.target.parentElement;
      li.classList.toggle('drink-active');
    }
    else {
      let li = event.target;
      li.classList.toggle('drink-active');
    }

    let activeDrinks = activeList.length;
    let activeDishes = document.getElementsByClassName('dish-active').length;
    let activeDesserts = document.getElementsByClassName('dessert-active').length;
    if (activeDishes + activeDrinks + activeDesserts === 3) {
      document.querySelector('footer.fixed-footer button').classList.toggle('active-order-button');
    }
}

function highlightDessert(event) {
    let activeList = document.getElementsByClassName('dessert-active');
      Array.from(activeList).forEach(Dessert =>
        Dessert.classList.toggle('dessert-active')  
    );
    if (event.target.onclick === null) {
      let li = event.target.parentElement;
      li.classList.toggle('dessert-active');
    }
    else {
      let li = event.target;
      li.classList.toggle('dessert-active');
    }

    let activeDesserts = activeList.length;
    let activeDishes = document.getElementsByClassName('dish-active').length;
    let activeDrinks = document.getElementsByClassName('drink-active').length;
    if (activeDishes + activeDrinks + activeDesserts === 3) {
      document.querySelector('footer.fixed-footer a').classList.toggle('active-order-button');
    }
}