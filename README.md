# Class of 2020
## Browser Technologies @cmda-minor-web 1920

https://medi-track.herokuapp.com/

<details>
  <summary><strong>Table of Contents</strong> (click to expand)</summary>

<!-- toc -->

- [✅ To-do](#--to-do)
- [📋 Concept](#---concept)
- [⚙️ Installation](#---installation)
    + [Helpers](#helpers)
- [🧑🏼‍ Actor Diagram](#------actor-diagram)
- [↔️ Interaction diagram](#---interaction-diagram)
- [🌍 Design patterns](#---design-patterns)
- [👍🏽 Best practices](#-----best-practices)
- [🗃 Data](#---data)
  * [🐒 Github API](#---github-api)
    + [Properties](#properties)
    + [Rate limiting](#rate-limiting)
  * [💽 Data cleaning](#---data-cleaning)
    + [Filtering the data using array.filter](#filtering-the-data-using-arrayfilter)
    + [Rendering the data to html-representation using array.map](#rendering-the-data-to-html-representation-using-arraymap)
- [👯🏿‍ Features (+ wishlist)](#------features----wishlist-)
- [🏫 Assignment](#---assignment)
  * [Learning goals](#learning-goals)
  * [Week 1 - Server Side Rendering 📡](#week-1---server-side-rendering---)
  * [Week 2 - Progressive Web App 🚀](#week-2---progressive-web-app---)
  * [Week 3 - Critical Rendering Path 📉](#week-3---critical-rendering-path---)
  * [Rubric](#rubric)
- [ℹ️ Resources](#---resources)
  * [Credits](#credits)
  * [Small inspiration sources](#small-inspiration-sources)
- [🗺️ License](#----license)

<!-- tocstop -->

</details>

## ✅ To-do



## 📋 Concept
_What does your app do, what is the goal? (passing butter)_

This app is for keeping track of my medicine intake.

Homepage && Add dose (when user clicks on '+')
![homepage](https://github.com/deannabosschert/browser-technologies-1920/blob/master/public/img/documentation/wireframes_v2.png)

<details>
  <summary><strong>Full screenshots</strong> (click to expand)</summary>
  
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

## 👍🏽 Best practices
- Work in branches, even if it's a one-man project. It helps staying focused on one feature until it's finished, and keeps your from doing 10 different things at the same time. Saves you merge conflicts, too.
- ^ also helps with 'closing' a feature, so you are more likely to move on to the next. Too little time, too much ideas.
- Commit early, commit often.
- Make single-purpose commits.
- Always fix your .gitignore-contents asap; node_modules or the like won't ever be pushed that way.
- Styling comes last. It's gonna change anyways so most of the time, it's better to fix the technical stuff first.
- Don't use declarations in the global scope.
- Start your project with writing down the future function names (pre-actors, basically).
- Make your own template for your readme
- Google, google, google. 99% of the time, it'll get you to the solution of your problem.
- Set timers for solving problems that aren't super relevant in the current sprint but you do would like to work on; 25 mins tops, otherwise you'll be stuck with this for too long.
- Make an actor diagram halfway through, it's a great reminder to refactor the code.
- Explicitly limit the scope of your functions
- Remember that most problems/features that have to do with the UI, can be fixed with mainly CSS.
- Do not use .innerHTML
- If there's an error, walk through your code from the top/beginning; explain it to your rubber ducky and state where certain data is passed.
- Implement useful error handling.


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

### [Rubric](https://docs.google.com/spreadsheets/d/e/2PACX-1vSc48v1nrjcwH0llcTd68xyK7f2fDC2UL4d6h4ZNW3DU8ucez6ZOHiId1XSX0RP5ByvLC8p5pVUGZT4/pubhtml)

[Rubric- detailed rating of my project](https://github.com/deannabosschert/browser-technologies-1920/wiki/Rubric)
![screenshot of rubric](https://paper-attachments.dropbox.com/s_A55BA87DF43E0052AB57F649BA137E30CE3E70844B24A22C6154EAF552B93169_1583836131204_Screenshot+2020-03-10+at+11.28.29.png)


## ℹ️ Resources
https://developer.github.com/v3/

### Credits
- Our superamazingteachers at the [minor WebDev @CMD](https://github.com/cmda-minor-web/browser-technologies-1920)
-

### Small inspiration sources

## 🗺️ License

Author: [Deanna Bosschert](https://github.com/deannabosschert) , license by
[MIT](https://github.com/deannabosschert/browser-technologies-1920/blob/master/LICENSE)
