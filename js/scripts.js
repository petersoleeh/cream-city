$(document).ready(function() {
  var flavors = ["Vanilla","raspberry","spumoni","strawberry","teaberry","mint ice cream"];
  flavors.forEach(function(flavor) {
    $("#flavors").prepend("<ul>" + flavor + "</ul>")
  });
});
