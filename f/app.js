$(function () {
  $("#twins input").on('input', function (evt) {
    $("#twins").data("text", evt.target.value)
    var text = $("#twins").data("text")
    $("#twins input").val(text)

  })
})
