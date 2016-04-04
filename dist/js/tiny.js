var doc = document;
var win = window;
var body = doc.querySelector('body');

animateMenu = function() {
  var menus = doc.querySelectorAll('[class*="menu"');
  [].forEach.call(menus, function(menu) {
    var list = menu.querySelectorAll('a:not(.no), .item:not(.no)');
    [].forEach.call(list, function(link) {
      link.onclick = function() {
        [].forEach.call(list, function(del) {
          del.classList.remove('active');
        })
        this.classList.add('active');
      }
    })
  })
}

animateCards = function() {
  var cards = doc.querySelectorAll('.card');
  [].forEach.call(cards, function(card) {
    card.onclick = function() {
      var contains = false;
      if(this.classList.contains('active'))
        contains = true;
      [].forEach.call(cards, function(del) {
        del.classList.remove('active');
      })
      if(!contains)
        this.classList.add('active');
    }
  })
}

openModal = function() {
  var buttons = doc.querySelectorAll('.open-modal');
  [].forEach.call(buttons, function(button) {
    button.addEventListener('click', function() {
      var modal = button.getAttribute('data-modal');
      doc.querySelector(modal).classList.add('active');
    })
  })
}

configModal = function() {
  var modal = doc.querySelectorAll('.modal');

  [].forEach.call(modal, function(block) {
    if (block.classList.contains('active'))
      body.classList.add('modal-active');
    else
      body.classList.remove('modal-active');
  });

  [].forEach.call(modal, function(block) {
    var close = block.querySelectorAll('.close');
    [].forEach.call(close, function(button) {
      button.addEventListener('click', function() {
        block.classList.remove('active');
        body.classList.remove('modal-active')
      })
    })
  })
}

win.addEventListener('load', function() {
  animateMenu();
  animateCards();
  configModal();
  openModal();
})
