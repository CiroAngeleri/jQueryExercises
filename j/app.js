$(function () {
  $(".focusbutton").click(function (evt) {
    evt.preventDefault()
    $(".textarea").focus()
  })
  $(".textarea").on('input change keyup', function (evt) {
    $(".overTextArea").text(evt.target.value)
  })
})
