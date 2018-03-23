$(function () {
  $("#twins, #carList").focusout(function (evt) {
    $("#first_P").text(evt.target.value)
  })
})
