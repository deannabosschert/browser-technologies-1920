check de images in de folder!!

# Feature Detection
## Feature detection
`<input type=“text inputmode=“numeric” pattern=“[0-9]*”`

Pleurt bij elke functionaliteit even een screenshot van caniuse erbij?

## Support detection
CSS:
```css
@supports not (display: grid) {
 div {
  float: left;
 }
}
```

### Object detection
* if `src=..`
* Doe zowel window.localStorage als localStorage
* Je kan niet nieuwe syntax detecten van JS zelf

## Browsers
* HTML
* CSS
* DOM
* AOM
* Interface
* JavaScriptEngine(als aparte component)

### Core VS DOM
* Core: wat JS een programmeertaal maakt
* DOM: de manier waarop JavaScript delen van HTML-pagina’s kan aanspreken en wijzigen

### Render blocking
* CSS = sneller
* JavaScript, tenzij async or defer

Do it now:
`<script src>`

Do it later:
`<script defer src>`

I don’t care when you do it, just not now:
`<script async src>`

## Rendering engine
* Verantwoordelijk voor HTML en CSS parsing en rendering, constructie van de DOM en AOM trees
* Dus NIET Interface of JavaScript Engine

### Rendering engines
* Blink
* WebKit
* Gecko
* Flow(issaleuk)
* Oude, slechte mobiele

2000
* MSHTML/Trident 
* Mozilla/Gecko
* Presto
* KHTML(voorouder webkit)

KHTML —> webkit (Apple Safari)
—-> ook Google (Chrome)
—> ook een boel andere mobiele browsers (BB, Nokia, Samsung etc)

Google Blink splitste zich vervolgens af, waarna alle andere mobiele browsers ook Blink gingen gebruiken (als kernonderdeel).

### Chrome monocultuur?
Niet helemaal.
* Google Chrome
* Brave
* MSEdge
* Opera
* Samsung Internet
* Nog veel meer..


> Assessment: Ik wil kunnen aangeven hoeveel en wannneer ik mijn medicatie heb genomen, en dit terug kunnen zien in een weekoverzicht.
