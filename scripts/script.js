$(function () {
  //what radio value did they select?

  $("#formSubmit").on("click", (e) => {
    //ii. Package the data
    
    e.preventDefault();
    
    alert(
      
    //{`   "firstName": "John",
    //"lastName": "Doe",
    //"age": 25,
    //"zipCode": "87946",
    //"language": "html"`



    );


  });

  $("input[type=radio]").on("change", function () {

    let radioChoice = $("input[type=radio]:checked").val(); 

    if (radioChoice === "Baked Goods!") {
      $("#letterWordsSelect")
        .empty()
        .append(`<option value="Chocolate Chip Cookies">Baked Goods!</option>`)
        .append(`<option value="Strawberry Cupcakes">Baked Goods!2</option>`)
        .append(`<option value="Double Chocolate Fudge Brownies">Baked Goods!3</option>`);
    } else if (radioChoice === "Cold Desserts!") {
      //`<option value="${optValue}">${optText}</option>`

      $("#letterWordsSelect")
        .empty()
        .append(`<option value="Vanilla Ice Cream">Chocolate Chip Cookies</option>`)
        .append(`<option value="Cheesecake">Strawberry Cupcakes</option>`)
        .append(`<option value="Peanut Butter Milkshake">Double Chocolate Fudge Brownies</option>`);
    } else {
      $("#letterWordsSelect")
        .empty()
        .append(`<option value="Chocolate Chip Cookies">Select a treat!`);
    }
  );
);