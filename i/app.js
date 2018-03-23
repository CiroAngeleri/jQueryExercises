$(function () {
  $("#send").click(function (e) {
    e.preventDefault();
    $.get('https://randomuser.me/api/',function (data) {
      console.log(data.results[0].name.first);
      $("#second_P").text(data.results[0].name.first + " " +data.results[0].name.last)
    })
  })
})
