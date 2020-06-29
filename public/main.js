document.getElementById('datePicker').valueAsDate = new Date();

var date = new Date();
var currentTime = date.getHours() + ':' + date.getMinutes();
document.getElementById('currentTime').value = currentTime;

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
