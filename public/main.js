document.getElementById('datePicker').valueAsDate = new Date();

var date = new Date();
var currentTime = date.getHours() + ':' + date.getMinutes();
document.getElementById('currentTime').value = currentTime;


// ID is ouder, wordt beter ondersteund
var doseTables_container = document.getElementById('doseTables_container')
var formulier = document.getElementById('formulier')


console.log('yeet')
console.log(doseTables_container)

formulier.addEventListener('submit', stuur)

function stuur(event) {
  event.preventDefault()
  console.log('hoi')
  //
  // const options = {
  //   method: 'POST',
  //   body: {
  //     name: inputValues.name,
  //     amount: inputValues.amount,
  //     unit: inputValues.unit,
  //     time: inputValues.time,
  //     date: inputValues.date
  //   }
  // }
//
//
//   fetch('/add', options)
//       .then(res => res.text())
//       .then(data => {
//         console.log(data)
//       })
//   }
// }
// doseTables_container.innerHTML=""

// console.log(name: req.body.name)
var inputs = formulier.querySelectorAll('input')
var inputValues = Array.from(inputs).reduce((values, currentInput) => {
  values[currentInput.name] = currentInput.value
  return values
}, {})

console.log(inputValues)
const yes = {
    name: inputValues.name,
    amount: inputValues.amount,
    unit: inputValues.unit,
    time: inputValues.time,
    date: inputValues.date
}
// const test = JSON.stringify([inputValues])
console.log(yes)

  postData('/add', inputValues)
    .then(data => {
      console.log('dataloggen')
      console.log(data); // JSON data parsed by `data.json()` call
    });
}

  // Example POST method implementation:
  async function postData(url = '', data) {
    console.log('henkuitvoeren')
    console.log(data)
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
  var tablesElement = document.querySelector('#tablesElement')
  if (tablesElement.innerHTML == 0) {
    console.log("geen data te zien")
  } else {
    console.log("set tables")
    localStorage.setItem("tables", tablesElement.innerHTML)
  }

  if (localStorage.getItem("tables") === null) {
    console.log("niets in je storage")
  } else {
    console.log("er zit data in je localStorage 🤓")
    loadButton.addEventListener('click', function() {
      var savedTables = localStorage.getItem("tables")
      tablesElement.innerHTML = savedTables
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
jsAvailable()
