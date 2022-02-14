$("button.btn.btn-success").click(() => {
  $.ajax({
    url: `https://restcountries.com/v3.1/name/${$("input").val()}`,
    success: function (data, statuts, response) {
      $("#country").html(data[0].name.common);
      $("#capital").html(data[0].capital[0]);
    },
  });
});
