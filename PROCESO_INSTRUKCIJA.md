# HTML Projekto Sukūrimas ir Webflow Pašalinimas - Proceso Instrukcija

## 📋 Apžvalga
Šis dokumentas aprašo procesą, kaip sukurti HTML projektą iš Webflow reference failų ir visiškai pašalinti visus Webflow mention'us bei branding'ą.

---

## 🎯 Tikslas
1. Sukurti veikiantį HTML projektą su animacijomis
2. Pašalinti visus Webflow mention'us (failų pavadinimai, kodas, CSS, meta tag'ai)
3. Pervadinti failus pagal jų prasmę (semantiniai pavadinimai)
4. Organizuoti failus į logiškas struktūras
5. Užtikrinti, kad visos animacijos veiktų po pakeitimų

---

## 📁 Pradinė Struktūra
```
Reference/
├── index.html
├── assets/
│   ├── css/
│   │   └── [webflow-hash].css
│   ├── js/
│   │   ├── webflow.*.js
│   │   └── jquery-*.js
│   ├── images/
│   │   └── [hash-based-filenames]
│   └── fonts/
│       └── [hash-based-filenames]
```

---

## 🔄 Proceso Žingsniai

### ETAPAS 1: Projekto Sukūrimas

#### 1.1 Sukurti naują projektą
```bash
mkdir PROJECT_NAME
cd PROJECT_NAME
mkdir -p assets/{css,js,images,fonts}
```

#### 1.2 Nukopijuoti failus iš Reference
- Nukopijuoti visus failus iš Reference į naują projektą
- Išlaikyti folderių struktūrą

#### 1.3 Patikrinti, kad viskas veikia
- Paleisti lokalų serverį: `python3 -m http.server 8000`
- Atidaryti `http://localhost:8000` naršyklėje
- Patikrinti:
  - ✅ Puslapis kraunasi
  - ✅ Animacijos veikia
  - ✅ Meniu veikia
  - ✅ Carousel/slider veikia
  - ✅ Dropdown veikia

---

### ETAPAS 2: HTML Failo Valymas

#### 2.1 Pašalinti Webflow komentarus
```html
<!-- Pašalinti: -->
<!-- This site was created in Webflow. https://webflow.com -->
<!-- Last Published: ... -->
```

#### 2.2 Atnaujinti HTML tag'us
```html
<!-- Pakeisti: -->
<html data-wf-domain="..." data-wf-site="..." data-wf-page="...">

<!-- Į: -->
<html data-page-id="66f80993567d675bb21536aa">
```

**SVARBU:** `data-wf-page` reikia pervadinti į `data-page-id`, bet **TIK** jei atitinkamai atnaujinsime JS failuose!

#### 2.3 Pašalinti Webflow meta tag'us
```html
<!-- Pašalinti: -->
<meta content="Webflow" name="generator" />
```

#### 2.4 Atnaujinti title
```html
<!-- Pakeisti: -->
<title>Iftech - Webflow HTML website template</title>

<!-- Į: -->
<title>Iftech</title>
```

#### 2.5 Pašalinti "Powered by Webflow" tekstą
- Ieškoti footer sekcijoje
- Pašalinti visus linkus ir tekstus, kurie mini Webflow

---

### ETAPAS 3: CSS Failo Valymas

#### 3.1 Pervadinti CSS failą
```bash
# Pvz.:
mv assets/css/iftech-template.webflow.shared.3138db9c5.css assets/css/styles.css
```

#### 3.2 Atnaujinti HTML linką
```html
<!-- Pakeisti: -->
<link href="assets/css/iftech-template.webflow.shared.3138db9c5.css" ...>

<!-- Į: -->
<link href="assets/css/styles.css" rel="stylesheet" type="text/css" />
```

#### 3.3 CSS turinio valymas
- Paieškoti ir pakeisti `.w-webflow-badge` → `.w-badge`
- Paieškoti ir pakeisti `.webflow-link` → `.powered-by-link`
- Paieškoti ir pakeisti `font-family: webflow-icons` → `font-family: app-icons`
- Pridėti CSS taisyklę: `.w-badge { display: none !important; }`

#### 3.4 Pašalinti nenaudojamus CSS failus
- Patikrinti, ar yra duplikatų/backup failų
- Pašalinti nenaudojamus failus

---

### ETAPAS 4: JavaScript Failų Valymas

#### 4.1 Identifikuoti JS failus
- `webflow.schunk.*.js` → animacijos (ix2)
- `webflow.b1a52691.*.js` → moduliai (dropdown, slider)
- `webflow.schunk.*.js` → core funkcijos

#### 4.2 Pervadinti JS failus pagal prasmę
```bash
# Pvz.:
mv assets/js/webflow.schunk.36b8fb49256177c8.js assets/js/core.js
mv assets/js/webflow.schunk.7bda37803c1a0e9a.js assets/js/animations.js
mv assets/js/webflow.b1a52691.b62f6a459917745e.js assets/js/modules.js
```

#### 4.3 Atnaujinti HTML script tag'us
```html
<!-- Pakeisti: -->
<script src="assets/js/webflow.schunk.36b8fb49256177c8.js"></script>
<script src="assets/js/webflow.schunk.7bda37803c1a0e9a.js"></script>
<script src="assets/js/webflow.b1a52691.b62f6a459917745e.js"></script>

<!-- Į: -->
<script src="assets/js/core.js" type="text/javascript"></script>
<script src="assets/js/animations.js" type="text/javascript"></script>
<script src="assets/js/modules.js" type="text/javascript"></script>
```

#### 4.4 JS turinio valymas (SVARBU!)

**4.4.1 Pakeisti window.Webflow → window.Animations**
- Atidaryti kiekvieną JS failą
- Paieškoti visus `window.Webflow` → pakeisti į `window.Animations`
- Paieškoti visus `Webflow.` → pakeisti į `window.Animations.` (jei reikia)

**4.4.2 Pakeisti data-wf-page → data-page-id**
- Paieškoti string literalus `"data-wf-page"` → pakeisti į `"data-page-id"`
- Patikrinti, ar visur atitinka

**4.4.3 Pašalinti Webflow badge kodą**
- Paieškoti badge creation kodą
- Pašalinti arba užkomentuoti

**4.4.4 Pašalinti Webflow editor API kodą**
- Paieškoti `WebflowEditor`, `editor-api.webflow.com`
- Pašalinti arba užkomentuoti

**4.4.5 Pakeisti event namespace**
- Paieškoti `.webflow` → pakeisti į `.app`
- Pvz.: `resize.webflow` → `resize.app`

**4.4.6 Pakeisti versiją**
- Paieškoti `VERSION = "1.6.0-Webflow"` → pakeisti į `VERSION = "1.6.0"`

**4.4.7 Atnaujinti HTML inline script**
```html
<!-- Pakeisti: -->
<script type="text/javascript">
    window.Webflow = window.Webflow || [];
    window.Webflow.push(function() {
        // ...
    });
</script>

<!-- Į: -->
<script type="text/javascript">
    window.Animations = window.Animations || [];
    window.Animations.push(function() {
        // ...
    });
</script>
```

#### 4.5 Patikrinti animacijas po kiekvieno žingsnio
- Po kiekvieno pakeitimo patikrinti, ar animacijos veikia
- Jei neveikia - grąžinti pakeitimus ir ieškoti kitos priežasties

---

### ETAPAS 5: Nuotraukų Organizavimas

#### 5.1 Sukurti semantinius folderius
```bash
mkdir -p assets/images/{hero,icons,logo,misc,testimonials,industries}
```

#### 5.2 Pervadinti nuotraukas pagal prasmę
- Hero sekcijos nuotraukos → `hero/`
- Ikonos → `icons/`
- Logotipai → `logo/`
- Testimonials → `testimonials/person-1.jpg`, `person-2.jpg`, etc.
- Industries → `industries/`
- Kitos → `misc/`

#### 5.3 Atnaujinti HTML nuotraukų kelius
- Atnaujinti visus `src` atributus HTML faile

---

### ETAPAS 6: Šriftų Organizavimas

#### 6.1 Identifikuoti šriftus
- Patikrinti CSS `@font-face` taisykles
- Identifikuoti, kokie šriftai naudojami

#### 6.2 Pervadinti šriftų failus
```bash
# Pvz.:
mv assets/fonts/pxiByp8kv8JHgFVrLEj6Z1xlFd2JQEk.woff2 assets/fonts/poppins-regular.woff2
mv assets/fonts/pxiEyp8kv8JHgFVrJJfecnFHGPc.woff2 assets/fonts/poppins-semibold.woff2
```

#### 6.3 Atnaujinti CSS @font-face taisykles
- Atnaujinti `src` kelius CSS faile

---

### ETAPAS 7: Galutinis Patikrinimas

#### 7.1 Funkcionalumo patikrinimas
- ✅ Puslapis kraunasi be klaidų
- ✅ Visos animacijos veikia
- ✅ Meniu veikia
- ✅ Dropdown veikia
- ✅ Carousel/slider veikia
- ✅ Scroll animacijos veikia

#### 7.2 Webflow mention'ų patikrinimas
- ✅ Paieškoti visame projekte: "webflow" (case-insensitive)
- ✅ Patikrinti failų pavadinimus
- ✅ Patikrinti HTML turinį
- ✅ Patikrinti CSS turinį
- ✅ Patikrinti JS turinį (bet palikti `window.Animations` kaip pakeitimą)
- ✅ Patikrinti meta tag'us
- ✅ Patikrinti komentarus

#### 7.3 SEO Patikrinimas
- ✅ Tik vienas H1 tag'as puslapyje
- ✅ H2-H6 struktūra logiška
- ✅ Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- ✅ Meta description yra
- ✅ Title prasmingas
- ✅ Alt tekstai nuotraukoms
- ✅ Lang atributas `<html>` tag'e
- ✅ Nėra duplikatų ID

---

## ⚠️ SVARBŪS PATARIMAI

### 1. Testuoti po kiekvieno žingsnio
- **NIEKADA** nedaryti visų pakeitimų iš karto
- Po kiekvieno žingsnio patikrinti, ar viskas veikia
- Jei kažkas neveikia - grąžinti pakeitimus

### 2. Darbas su minified JS
- JS failai gali būti minified (vienos eilutės)
- Naudoti "Find & Replace" funkciją IDE
- Būti atsargiems - vienas neteisingas pakeitimas gali sugadinti visą failą

### 3. Backup
- Prieš pradedant - sukurti backup
- Po kiekvieno didesnio pakeitimo - commit'inti į git

### 4. Animacijų testavimas
- Animacijos gali priklausyti nuo:
  - `data-page-id` atributo
  - `window.Animations` objekto struktūros
  - Modulių inicializacijos eilės
- Jei animacijos neveikia - patikrinti console klaidas

### 5. Failų pervadinimas
- Pervadinti failus po vieną
- Atnaujinti visus nuorodas iš karto
- Patikrinti, ar nėra broken links

---

## 🔍 Troubleshooting

### Problema: Animacijos neveikia po pakeitimų
**Sprendimas:**
1. Patikrinti console klaidas
2. Patikrinti, ar `window.Animations` objektas sukurtas
3. Patikrinti, ar `data-page-id` atributas yra
4. Patikrinti, ar JS failai užkraunami teisinga tvarka
5. Patikrinti, ar moduliai inicializuojami

### Problema: Meniu neveikia
**Sprendimas:**
1. Patikrinti, ar `modules.js` užkraunamas
2. Patikrinti, ar dropdown modulis inicializuojamas
3. Patikrinti console klaidas

### Problema: Carousel neveikia
**Sprendimas:**
1. Patikrinti, ar slider modulis užkraunamas
2. Patikrinti, ar slider modulis inicializuojamas
3. Patikrinti HTML struktūrą (ar yra teisingi class'ai)

---

## ✅ Checklist

### HTML
- [ ] Pašalinti Webflow komentarus
- [ ] Atnaujinti HTML tag'us (`data-page-id`)
- [ ] Pašalinti Webflow meta tag'us
- [ ] Atnaujinti title
- [ ] Pašalinti "Powered by Webflow" tekstą
- [ ] Atnaujinti CSS linką
- [ ] Atnaujinti JS script tag'us
- [ ] Atnaujinti nuotraukų kelius
- [ ] Pridėti semantic HTML (`<header>`, `<main>`, `<footer>`)
- [ ] Pridėti `lang` atributą

### CSS
- [ ] Pervadinti CSS failą
- [ ] Pašalinti/pakeisti Webflow klasės pavadinimus
- [ ] Pridėti `.w-badge { display: none !important; }`
- [ ] Atnaujinti font-family
- [ ] Atnaujinti @font-face kelius

### JavaScript
- [ ] Pervadinti JS failus
- [ ] Pakeisti `window.Webflow` → `window.Animations`
- [ ] Pakeisti `data-wf-page` → `data-page-id`
- [ ] Pašalinti badge kodą
- [ ] Pašalinti editor API kodą
- [ ] Pakeisti event namespace
- [ ] Pakeisti versiją
- [ ] Atnaujinti inline script'us

### Nuotraukos
- [ ] Sukurti semantinius folderius
- [ ] Pervadinti nuotraukas
- [ ] Atnaujinti HTML kelius
- [ ] Pridėti alt tekstus

### Šriftai
- [ ] Identifikuoti šriftus
- [ ] Pervadinti šriftų failus
- [ ] Atnaujinti CSS @font-face

### SEO
- [ ] Tik vienas H1
- [ ] Logiška H2-H6 struktūra
- [ ] Semantic HTML
- [ ] Meta description
- [ ] Prasmingas title
- [ ] Alt tekstai
- [ ] Lang atributas
- [ ] Nėra duplikatų ID

### Galutinis Patikrinimas
- [ ] Visos animacijos veikia
- [ ] Meniu veikia
- [ ] Carousel veikia
- [ ] Nėra Webflow mention'ų
- [ ] Nėra console klaidų
- [ ] Puslapis veikia visose naršyklėse

---

## 📝 Pastabos

- Visi pakeitimai turi būti atsargūs ir testuojami
- Jei kažkas neveikia - grąžinti pakeitimus ir ieškoti kitos priežasties
- Geriau daryti mažus žingsnius nei didelius pakeitimus iš karto
- Visada turėti backup kopiją

---

## 🎯 Rezultatas

Po visų žingsnių turėtumėte turėti:
- ✅ Veikiantį HTML projektą
- ✅ Visas animacijas veikiančias
- ✅ Jokių Webflow mention'ų
- ✅ Semantiškai pervadintus failus
- ✅ Organizuotą failų struktūrą
- ✅ SEO optimizuotą kodą

---

**Sukūrė:** AI Agent  
**Data:** 2025  
**Versija:** 1.0
