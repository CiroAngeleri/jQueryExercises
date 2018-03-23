var clickHandler = function (evt) {
  if ($(this).text() === "A donde vas amigo?") {
    $(this).attr("href", "https://www.bing.com")
    return
  }
  evt.preventDefault()
  $(this).text("A donde vas amigo?")
}

$(function () {
  $("a").click(clickHandler)
})
