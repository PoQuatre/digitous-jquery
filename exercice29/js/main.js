$("button.btn.btn-success").click(() => {
  if ($("input").val().length > 5) {
    $("input").addClass("is-valid");
    $("input").removeClass("is-invalid");
  } else {
    $("input").addClass("is-invalid");
    $("input").removeClass("is-valid");
  }
});
