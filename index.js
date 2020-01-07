function myShoppingList() {
  $('#js-shopping-list-form').submit(function(e){
    event.preventDefault();

    const food = $('.js-shopping-list-entry').val();


    
      $('.shopping-list').append(`<li>
        <span class="shopping-item">${food}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>
      <li>`);
      ;


  
});

$('.shopping-list').on('click', '.shopping-item-toggle', function(e) {
  $(this).closest('.shopping-item-controls').siblings('.shopping-item').toggleClass('shopping-item__checked');
});



$('.shopping-list').on('click', '.shopping-item-delete', function(e) {
  $(this).closest('li').remove();
});


}
 
function resetInput () {
  $('#js-shopping-list-form').reset()
}



$(myShoppingList);
  
  
  
  
  
  
  
  
  
  
  
  
  
  