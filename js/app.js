let xhr = new XMLHttpRequest();

xhr.open("GET", './listeDeMot.txt')

xhr.responseType = "json";

xhr.send();

