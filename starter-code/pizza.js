$(function(){

function reset () {
  $(".btn").removeClass("active");
  $(".btn-pepperoni").removeClass("active");
  $(".crust").removeClass("crust-gluten-free");
  $(".sauce").removeClass("sauce-white");
  $(".pep").hide();
  $(".mushroom").hide();
  $(".green-pepper").hide();
  $(".price ul li:contains($1 pepperonni)").hide();
  $(".price ul li:contains($1 mushrooms)").hide();
  $(".price ul li:contains($1 green peppers)").hide();
  $(".price ul li:contains($3 white sauce)").hide();
  $(".price ul li:contains($5 gluten-free crust)").hide();
  $("strong").text("$10");
}
reset();

  $(".btn-pepperonni").click(function(){
    $(this).toggleClass("active");
if ($(this).hasClass("active")){
  $(".pep").show();
  $(".price ul li:contains($1 pepperonni)").show();
} else {
  $(".pep").hide();
  $(".price ul li:contains($1 pepperonni)").hide();
}
updatePrice();
  });

$(".btn-mushrooms").click(function(){
    $(this).toggleClass("active");
if ($(this).hasClass("active")){
  $(".mushroom").show();
  $(".price ul li:contains($1 mushrooms)").show();
} else {
  $(".mushroom").hide();
  $(".price ul li:contains($1 mushrooms)").hide();
}
updatePrice();
  });

$(".btn-green-peppers").click(function(){
      $(this).toggleClass("active");
  if ($(this).hasClass("active")){
    $(".green-pepper").show();
    $(".price ul li:contains($1 green peppers)").show();
  } else {
    $(".green-pepper").hide();
    $(".price ul li:contains($1 green peppers)").hide();
  }
  updatePrice();
    });

  $(".btn-sauce").click(function() {
    $(".sauce").toggleClass("sauce-white");
    if($(this).hasClass("active")){
      $(this).removeClass("active");
      $(".price ul li:contains($3 white sauce)").hide();
    } else {
      $(this).addClass("active");
      $(".price ul li:contains($3 white sauce)").show();
    }
    updatePrice();
  });

  $(".btn-crust").click(function() {
    $(".crust").toggleClass("crust-gluten-free");
    if($(this).hasClass("active")){
      $(this).removeClass("active");
      $(".price ul li:contains($5 gluten-free crust)").hide();
    } else {
      $(this).addClass("active");
      $(".price ul li:contains($5 gluten-free crust)").show();
    }
    updatePrice();
  });

// Calculo de precio total

function updatePrice() {
  var total = 10;
  $(".price li").hide();

  $(".btn.active").toArray().forEach(function(btn, index) {
    var ingredient = $(btn).text().toLowerCase();
    var $listElement = $("li:contains('" + ingredient + "')");
    var ingredientPrice = Number(
      $listElement.text().split(" ")[0].replace("$","")
      );
      total += ingredientPrice;
      $listElement.show();
    });
  $(".price strong").text("$" + total);
}


});
