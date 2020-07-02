### Browser Technologies @cmda-minor-web 1920
# [MediTrack](https://medi-track.herokuapp.com/)
https://medi-track.herokuapp.com/

## Table of Contents

<!-- toc -->

- [✅ To-do](#--to-do)
- [📋 Concept](#---concept)
- [Layers of PE](#layers-of-pe)
  * [HTML- Functional Layer](#html--functional-layer)
  * [CSS- Usable Layer](#css--usable-layer)
  * [JS- Pleasureable layer](#js--pleasureable-layer)
- [⚙️ Installation](#---installation)
    + [Helpers/dependencies](#helpers-dependencies)
    + [🗃 Tech(stack)](#---tech-stack-)
  * [💽 Data cleaning](#---data-cleaning)
- [👯🏿‍ Features (+ wishlist)](#------features----wishlist-)
- [Progressive Enhancement](#progressive-enhancement)
- [👁️ Accessibility guidelines](#----accessibility-guidelines)
- [🏫 Assignment](#---assignment)
- [Learning goals](#learning-goals)
- [Planning](#planning)
- [ℹ️ Resources](#---resources)
  * [Credits](#credits)
  * [Small inspiration sources](#small-inspiration-sources)
- [🗺️ License](#----license)

<!-- tocstop -->

## 📋 Concept
_What does your app do, what is the goal? (passing butter)_

This app is for keeping track of one's medicine intake. I constantly forget if I've taken it and I can't just take another one 'to be sure'. It's a common issue among people with similar medication so I figured it would be useful for future usage.


## Layers of PE
### HTML- Functional Layer
![](https://paper-attachments.dropbox.com/s_E738BB6FFB4AEB2B6A43933E987688AE3C38F02D76F07524B4E0AA9AC643E50F_1593690476020_Screenshot+2020-07-02+at+13.47.23.png)
You can add doses and view them below.

### CSS- Usable Layer
![](https://paper-attachments.dropbox.com/s_E738BB6FFB4AEB2B6A43933E987688AE3C38F02D76F07524B4E0AA9AC643E50F_1593690589042_Screenshot+2020-07-02+at+13.49.42.png)
Added lots of styling, looks a lot better and readable now!

### JS- Pleasureable layer
![](https://paper-attachments.dropbox.com/s_E738BB6FFB4AEB2B6A43933E987688AE3C38F02D76F07524B4E0AA9AC643E50F_1593690557713_Screenshot+2020-07-02+at+13.49.11.png)
As you can see, the current date and time are filled in by default.
I've also added client-side data fetching so the page doesn't have to reload at every data change.

<details>
  <summary><strong>Sketches/design</strong> (click to expand)</summary>

Homepage && Add dose (when user clicks on '+')
![homepage](https://github.com/deannabosschert/browser-technologies-1920/blob/master/public/img/documentation/wireframes_v2.png)


Homepage

![homepage](https://github.com/deannabosschert/browser-technologies-1920/blob/master/public/img/documentation/screen_overview_v2.png)
Add dose (when user clicks on '+') 

![add dose-popup](https://github.com/deannabosschert/browser-technologies-1920/blob/master/public/img/documentation/screen_addDose_v2.png)
</details>


De gebruiker kan:
* Een dosis toevoegen, en daarbij de naam, datum+tijd en hoeveelheid aangeven
* Lijst van de ingevoerde dosissen bekijken


## ⚙️ Installation
Clone this repository to your own device:
```bash
$ git clone https://github.com/deannabosschert/browser-technologies-1920.git
```


Then, to install the packages:
```bash
npm install
```


Finally, run:
```bash
npm run dev
```

#### Helpers/dependencies
I'm making use of the following (dev)dependencies:
```json
  "dependencies": {
    "ejs": "^3.0.1",
    "express": "^4.17.1",
    "body-parser": "^1.18.3",
    "dotenv": "^7.0.0",
    "fs": "0.0.1-security",
    "heroku": "^7.24.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.2"
  }
```

#### 🗃 Tech(stack)
You'll find more information about the tech stack I'm using in the [wiki](https://github.com/deannabosschert/browser-technologies-1920/wiki/%F0%9F%97%83-Tech(stack))



### 💽 Data cleaning
_What has been done with the data?_
When data is entered, it gets inserted/pushed into an array.
```js
  const rawDose = {
    name: req.body.name,
    amount: req.body.amount,
    unit: req.body.unit,
    time: req.body.time,
    date: req.body.date
  }
  
const totalRawDoses = rawDoses.push(rawDose)
```

Then, it's getting cleaned:
- Grouped by date
- Mapped by day & 'medicin' 


```js
function cleanData() {
  const dosesByDay = groupBy(rawDoses, "date")

  const doses = Object.entries(dosesByDay).map(([key, value]) => {
    return {
      day: key,
      medicin: value
    }
  })
```


When that's done, the data is transformed into a table, still grouped by day.
Then, those tables are served to the user.


```js
  // clear out doseTables as we're putting in the entire log in again bc of regrouping
  doseTables = []

  doses.forEach(dose => {
    let markup = ''
    markup += createTable(dose)
    const totals = doseTables.push(markup)
    return
  })
}
```

```js
function createTable(dose) {
  return `
          <p>${dose.day}</p>
          <table class="table">
              ${dose.medicin.map(medicin => {
                  return `
                      <tr>
                      <td>${medicin.time}</td>
                      <td>${medicin.name}</td>
                      <td>${medicin.amount}</td>
                      <td>${medicin.unit}</td>
                      <td><img class="editIcon" src="./img/icons/icon_pencil.png" alt="edit"></td>
                      </tr>
                  `
              }).join('')}
          </table>
      `
}

```


## 👯🏿‍ Features (+ wishlist)
_What would you like to add (feature wishlist / backlog)?_
De gebruiker kan:
- [x] Een dosis toevoegen, en daarbij de naam, datum+tijd en hoeveelheid aangeven
- [ ] Een dosis aanpassen
- [ ] Een dosis weghalen

Pleasureable laag:
- [x] Een overzicht bekijken van de afgelopen week qua dosissen
- [ ] Een graph bekijken hiervan (enhancement?)

## Progressive Enhancement
Everthing concerning research on Progressive Enhancement, is stated in the [wiki](https://github.com/deannabosschert/browser-technologies-1920/wiki/research)

## 👁️ Accessibility guidelines
Everything concerning the accessibility guidelines, is stated in the [wiki](https://github.com/deannabosschert/browser-technologies-1920/wiki/research#accessibility).

## 🏫 Assignment
<details>
  <summary></strong> (click to expand)</summary>
  In this course I learned to make, design and develop robust, accessible websites.

In het vak Browser Technologies leer je hoe je goede, robuuste, toegankelijke websites maakt. Je gaat leren over Progressive Enhancement, Feature Detection en Fallback. Het web is er voor iedereen. In dit vak leer je hoe je daarvoor kan zorgen.

Een van de mooiste principes van het web is dat het er echt is voor iedereen. Iedereen met een computer en een browser moet gebruik kunnen maken van het web. Het web is geen gecontroleerde (programmeer) omgeving. Je kan er gerust van uit gaan dat niemand precies hetzelfde te zien krijgt als wat jij in jouw browser ziet. Er zijn technische beperkingen, zoals- Afmetingen van de browser - Grootte van het apparaat - Manier van interactie - Kwaliteit van de hardware - Kwaliteit van het netwerk. En er zijn mensen. Allemaal verschillende mensen ... Hoe zorg je er dan voor dat websites het altijd doen?

## Learning goals
- _je leert Browser Technologies te onderzoeken, testen en implementeren als enhancement._
- _je leert wat Progressive enhancement is en hoe je dit kan toepassen._
- _je leert hoe je Feature Detection doet en wat je kan doen als een 'feature' niet werkt of wordt ondersteund._

## Planning

| Planning  | Woensdag  |  Donderdag | Vrijdag  |
|---|---|---|---|
| <a href=#week-1>Week 1</a>  | Introductie, College over Progressive enhancement + briefing opdracht 1.1 | College Browser detect + presentaties opdracht 1.1 + briefing opdracht 1.2 Fork je OBA  | Feedbackgesprekken |
| <a href=#week-2>Week 2</a>  | College Feature detect & browsers + Briefing opdracht 2  | College Q&A + werken aan de opdracht | Feedbackgesprekken  |
| <a href=#week-3>Week 3</a>  | College Notificaties + werken aan de opdracht  |  College Q&A + werken aan de opdracht | Feedbackgesprekken  |
| <a href=#week-4>Week 4</a>  | Beoordelingsgesprekken |  |  |

</details>

### [Rubric](https://docs.google.com/spreadsheets/d/1MV3BWwwg_Zz1n-S_qOM4iSm4gA4M6g0xAxGacyaPuac/edit#gid=0)

[Rubric- detailed rating of my project](https://github.com/deannabosschert/browser-technologies-1920/wiki/Rubric)
![screenshot of rubric](https://github.com/deannabosschert/browser-technologies-1920/blob/master/public/img/documentation/rubric.jpg)


## ℹ️ Resources
https://developer.github.com/v3/

### Credits
- Our superamazingteachers at the [minor WebDev @CMD](https://github.com/cmda-minor-web/browser-technologies-1920)

### Small inspiration sources

## 🗺️ License

Author: [Deanna Bosschert](https://github.com/deannabosschert) , license by
[MIT](https://github.com/deannabosschert/browser-technologies-1920/blob/master/LICENSE)
