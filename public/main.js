document.getElementById('datePicker').valueAsDate = new Date();

var date = new Date();
var currentTime = date.getHours() + ':' + date.getMinutes();
document.getElementById('currentTime').value = currentTime;

// ID is ouder, wordt beter ondersteund
var doseTables_container = document.getElementById('doseTables_container')
var formulier = document.getElementById('formulier')

formulier.addEventListener('submit', stuur)

function stuur(event) {
  event.preventDefault()
  var inputs = formulier.querySelectorAll('input')
  var inputValues = Array.from(inputs).reduce((values, currentInput) => {
    values[currentInput.name] = currentInput.value
    return values
  }, {})

  postData('/add', inputValues)
    .then(data => { // hier komt de gecleande data vanuit de server weer binnen!
      doseTables_container.innerHTML = data
      return data
    })
    .then(data => {
      tablesToLocalStorage(data)
    })
}

// Example POST method implementation:
async function postData(url = '', data) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      // 'Content-Type': 'application/json'
      // 'Content-Type': 'application/multipart/form-data'
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}






// source: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
function jsAvailable() {
  storageAvailable()
}

if (storageAvailable('localStorage')) {
  console.log('Yay! We can use localStorage')
  var loadButton = document.querySelector('#load')

  if (doseTables_container.innerHTML == 0) {
    console.log("(nog) geen data te zien")
  }
  function tablesToLocalStorage(data) {
    console.log("set tables")
    localStorage.setItem("tables", data)
  }

  if (localStorage.getItem("tables") === null) {
    console.log("niets in je storage")
  } else {
    console.log("er zit data in je localStorage 🤓")
    loadButton.addEventListener('click', function() {
      var savedTables = localStorage.getItem("tables")
      doseTables_container.innerHTML = savedTables
    })
  }
} else {
  console.log('Too bad, no localStorage for us')
}

function storageAvailable(type) {
  var storage;
  try {
    storage = window[type];
    var x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return e instanceof DOMException && (
        // everything except Firefox
        e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === 'QuotaExceededError' ||
        // Firefox
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      // acknowledge QuotaExceededError only if there's something already stored
      (storage && storage.length !== 0);
  }
}
