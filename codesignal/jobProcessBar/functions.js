let total = 0;
$(document).ready(function () {
  $("#visaType").change(function () {
    var selectedValue = $(this).val();

    if (selectedValue !== "") {
      // Value is not empty
      console.log("visaType value is not empty");
      total += 25;
    } else {
      // Value is empty
      console.log("visaType value is empty");
      total -= 25;
    }

    $(".check-mark").text(total + "%");
    $(".complete-line").css("width", total + "%");
  });

  $("#university").change(function () {
    var selectedValue = $(this).val();

    if (selectedValue !== "") {
      // Value is not empty
      console.log("university value is not empty");
      total += 25;
    } else {
      // Value is empty
      console.log("university value is empty");
      total -= 25;
    }

    $(".check-mark").text(total + "%");
    $(".complete-line").css("width", total + "%");
  });

  $("#country").change(function () {
    var selectedValue = $(this).val();

    if (selectedValue !== "") {
      // Value is not empty
      console.log("country value is not empty");
      total += 25;
    } else {
      // Value is empty
      console.log("country value is empty");
      total -= 25;
    }

    $(".check-mark").text(total + "%");
    $(".complete-line").css("width", total + "%");
  });

  $("#email").change(function () {
    var selectedValue = $(this).val();

    if (selectedValue !== "") {
      // Value is not empty
      console.log("email value is not empty");
      total += 25;
    } else {
      // Value is empty
      console.log("email value is empty");
      total -= 25;
    }

    $(".check-mark").text(total + "%");
    $(".complete-line").css("width", total + "%");
  });
});
