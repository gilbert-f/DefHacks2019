var price = document.getElementsByClassName("a-color-price a-size-medium a-text-right a-align-bottom aok-nowrap grand-total-price a-text-bold")[0].innerText;
var totalPrice = price.toString().substring(1, price.length);
var names = document.getElementsByClassName("displayAddressLI displayAddressFullName")[0]['innerHTML'];
var fullname = names.split(" ");
var req = new XMLHttpRequest();

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

req.setRequestHeader("Authorization", "Bearer e7675dd3-ff3b-434b-95aa-70251cc3784b_88140dd4-f13e-4ce3-8322-6eaf2ee9a2d2");
//req.setRequestHeader('body', data);
req.setRequestHeader("Content-Type", "application/json");
req.send(JSON.stringify(data));
req.onreadystatechange = processRequest;

function processRequest(e) {
    if (req.readyState == 4 && req.status == 200) {
        var response = JSON.parse(req.responseText);
        console.log(response.loanOffers)
        var i;
        var names = [];
        var payments = [];
        var aprs = [];
        var logos = [];
        var terms = [];
        var links = []

        for (i = 0; i < response.loanOffers.length; i++) {
            names.push(response.loanOffers[i].originator.name);
            payments.push(response.loanOffers[i].meanMonthlyPayment);
            aprs.push(response.loanOffers[i].meanApr);
            logos.push(response.loanOffers[i].originator.images[0].url);
            terms.push(response.loanOffers[i].termLength);
            links.push(response.loanOffers[i].originator.url);
        }
        console.log(names)
        console.log(payments)
        console.log(aprs)
        console.log(logos)
    } else {
        //alert('fail')
    }
}

window.open('http://127.0.0.1:5500/result-table/index.html', 'popUpWindow', 'height=700,width=800,left=100,top=100,resizable=no,scrollbars=yes,toolbar=no,menubar=no,location=no,directories=no, status=no');