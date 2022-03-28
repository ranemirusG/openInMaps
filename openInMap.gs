/* open selected range of addresses from a Google Spreadsheet in a new tab with GoogleMaps.
You can select the option from a new menu or create a shortcut  */

// create menu
function onOpen(){menuMap();}

function menuMap(){

  var menu = SpreadsheetApp.getUi().createMenu("Open Map");
  menu.addItem("Open in Google Maps", "map"); //the button calls the function map
  menu.addToUi();
}


function map(){
  var spreadsheet = SpreadsheetApp.getActiveSheet();
  var range = spreadsheet.getActiveRange();
  var addresses = range.getValues()
  var urlMaps = 'https://www.google.com/maps/dir'

  addresses.unshift(urlMaps)
  var urlFinal = direcciones.join("/");
  
 
  var html = "<script>window.open('" + urlFinal + "');google.script.host.close();</script>";
  var userInterface = HtmlService.createHtmlOutput(html);
  SpreadsheetApp.getUi().showModalDialog(userInterface, 'Open Tab');

}


// or do it with a shortcut (in my case it's shift+opt+command+9) 
/*
function shortcutName() {
  map();
};
*/
