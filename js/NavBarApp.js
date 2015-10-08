

//Problem: It look gross in smaller browser widths and small devices
//Solution: To hide the text links and swap them out with a more appropriate navigation

//Create a select and append to #menu
var $select = $("<select></select>");
$("#nav_bar_app").append($select);

//Cycle over menu links
$("#nav_bar_app a").each(function(){
  var $anchor = $(this);
  //Create an option
  var $option = $("<option></option>");

  //Deal with selected options depending on current page
  if($anchor.parent().hasClass("selected")) {
    $option.prop("selected", true);
  }
  //option's value is the href
  $option.val($anchor.attr("href"));
  //option's text is the text of link
  $option.text($anchor.text());
  //append option to select
  $select.append($option);
});
//Create button
var $button = $("<button>Go</button>");
$("#nav_bar_app").append($button);
//Bind click to button
$button.click(function(){
  //Go to select's location
  window.location = $select.val();
});
