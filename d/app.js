var clickHandler = function (evt) {
  $(this).hide(1000)
  //$(evt.target).hide(1000)
}

$(function () {
  $(".fruitList li").click(clickHandler)
})
