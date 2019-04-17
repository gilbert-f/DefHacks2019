var price = document.getElementsByClassName("a-color-price a-size-medium a-text-right a-align-bottom aok-nowrap grand-total-price a-text-bold")[0].innerText;
var orderTotal = price.toString().substring(1, price.length);
var name = document.getElementsByClassName("displayAddressLI displayAddressFullName")[0]['innerHTML'];
var namez = name.split(" ");

var w = window.open('http://localhost:3000/game/index.html', orderTotal+'@'+namez[0]+'@'+namez[1], 'height=700,width=800,left=100,top=100,resizable=no,scrollbars=yes,toolbar=no,menubar=no,location=no,directories=no, status=no');