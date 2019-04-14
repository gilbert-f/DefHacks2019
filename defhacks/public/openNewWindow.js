<<<<<<< HEAD
=======
//var price = document.getElementsByClassName("a-color-price a-size-medium a-text-right a-align-bottom aok-nowrap grand-total-price a-text-bold")[0].innerText;
//var totalPrice = price.toString().substring(1, price.length);
//var names = document.getElementsByClassName("displayAddressLI displayAddressFullName")[0]['innerHTML'];
//var fullname = names.split(" ");
//var req = new XMLHttpRequest();

//console.log(price)
//console.log(totalPrice)
//console.log(names)
//console.log(fullname)
//console.log(req)

var data = {
    "productTypes": [
        "loan",
        "savings"
    ],
    "personalInformation": {
        "firstName": "Juan",
        "lastName": "Doe",
        "email": "john1@example.com",
        "city": "New York",
        "state": "NY",
        "address1": "45 West 21st Street",
        "zipcode": "98117"
    },
    "loanInformation": {
        "loanAmount": 10000
    },
    "creditInformation": {
        "providedCreditRating": "excellent",
        "providedNumericCreditScore": 750
    }
}

req.open("POST", "https://api.evenfinancial.com/leads/rateTables");
req.withCredentials = true;
>>>>>>> 3d790ae16df4e785d12853de9603fadec21ab6d1

var price = document.getElementsByClassName("a-color-price a-size-medium a-text-right a-align-bottom aok-nowrap grand-total-price a-text-bold")[0].innerText;
var orderTotal = price.toString().substring(1, price.length);
var name = document.getElementsByClassName("displayAddressLI displayAddressFullName")[0]['innerHTML'];
var namez = name.split(" ");
//call the request


var w = window.open('http://localhost:3000/index.html', orderTotal+'@'+namez[0]+'@'+namez[1], 'height=700,width=800,left=100,top=100,resizable=no,scrollbars=yes,toolbar=no,menubar=no,location=no,directories=no, status=no');
