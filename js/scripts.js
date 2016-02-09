$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var person1Input = $("input#person1").val();
    var person2Input = $("input#person2").val();
    var animalInput= $("input#animal").val();
    var exclamationInput = $("input#exclamation").val();
    var verbInput = $("input#verb").val();
    var nounInput = $("input#noun").val();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);

    $("#story").show();

    event.preventDefault();
  });

  $("#blank form").submit(function(event) {
    var nameInput = $("input#name").val();

    $(".name").text(nameInput);

    $("#letter").show();

    event.preventDefault();
  });

  $("button#option1").click(function() {
    $("body").removeClass();
    $("body").addClass("option1");
  });

  $("button#option2").click(function() {
    $("body").addClass("option2");
  });

  $("button#original").click(function() {
    $("body").removeClass();
  });

  $("p#test").click(function() {
    $("p#test").addClass("test2");
  });





});
