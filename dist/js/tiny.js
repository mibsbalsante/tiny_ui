var doc = document;
var win = window;

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
