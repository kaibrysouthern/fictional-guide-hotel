$(function () {
  
  let userData = ["placeholder", "other"];
  let userJSON = {
    email: "email address",
  };

  $("#loadData").click(() => {
    console.log("in button click event");

    $("#email").val(userJSON.email);
  });

  $("input[type=radio]").on("change", function () {

    let radioChoice = $("input[type=radio]:checked").val(); // A or B
    let newWordList = getWords(radioChoice);
    console.log(newWordList);

    let optionList = "";

    for (i = 0; i < newWordList.length; i++) {
      optionList += `<option value=" ${newWordList[i]} ">${newWordList[i]} </option>`;
    }
    console.log(optionList);

    $("#letterWordsSelect").empty().append(optionList);
  });

  $("#formSubmit").on("click", (e) => {
    e.preventDefault();
    console.log("clicked the button");

  });

  let dataStuff = `{ "letterSelected:" " ${$(
    "input[type=radio]:checked"
  ).val()} " }`;

  // display data from that input

  console.log(dataStuff);

  // do that suff 2x
});

function getWords(letter) {
console.log("in f/n getWords, here the paramter: ", letter);

let aWordArray = ["Choose a dessert", "Chocolate Chip Cookies", "Strawberry Cupcakes", "Double Chocolate Fudge Brownies"];
let bWordArray = ["Vanilla Ice Cream", "Cheesecake", "Peanut Butter Milkshake"];
let cWordArray = ["Fudge", "Candy Bars", "Lollipops"];

//todo: change to a switch/case ctrl structure.

if (letter === "A") {
  return aWordArray;
} else if (letter === "B") {
  return bWordArray;
} else if (letter === "C") {
  return cWordArray;
} else {
  return ["Please select a letter!"];
}
}