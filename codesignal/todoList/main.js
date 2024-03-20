(function ($) {})(jQuery);

const xmlns = "http://www.w3.org/2000/svg";
const xlinkns = "http://www.w3.org/1999/xlink";

const addItem = (itemText) => {
  // TODO: implement
};

const addItemFromInput = () => {
  // TODO: implement
};

addEventListener("load", () => {
  addItem("Read the description");
  addItem("Solve the task");
  addItem("Submit the solution");

  document.querySelector(".todo__input").addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      addItemFromInput();
    }
  });

  document
    .querySelector(".todo__create")
    .addEventListener("click", () => addItemFromInput());
});

$(".todo__create").click(function () {
  var text = $(".todo__input").val();
  $(".todo__items-container").append(
    '<div class="todo__toggle"> <svg class="icon icon-checkmark" viewBox="0 0 26 26"><use xlink:href="#icon-checkmark"></use></svg></div><div class="todo__text">' +
      text +
      '</div><div class="todo__delete" id="' +
      text +
      '"><svg class="icon" viewBox="0 0 154 154"><use xlink:href="#icon-delete"></use></svg></div>'
  );
  $("todo__create").val("");
});

$(".todo__delete").click(function (e) {
  var text = $(".todo__delete");
  $(".todo__delete#" + text)
    .parent()
    .remove();
});
