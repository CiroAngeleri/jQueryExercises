$(function () {
  $("#checkbox").change(function () {
    if (this.checked) {
      $(".fruitList li").hide(1000)
      return
    }
    $(".fruitList li").show(1000)
  })
    $(".fruitList li").click(function () {
      $(this).hide(1000)
    })
})
