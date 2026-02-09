# Webflow Templates Collection

Kolekcija Webflow šablonų, konvertuotų į statinius HTML projektus ir modernias web aplikacijas.

## 📁 Projekto struktūra

- **iftech_demo** - E-Learning/Mobile App template (Next.js versija su TypeScript)
- **lukes_demo** - Portfolio/Ecommerce template
- **naxova_demo** - Portfolio template su GSAP animacijomis
- **homura_demo** - Real Estate template

## 🚀 Kiekvieno projekto aprašymas

### iftech_demo
Modern Next.js 14 implementacija su TypeScript ir React komponentais. E-Learning platformos šablonas su pilnomis animacijomis ir interaktyvumu.

**Technologijos:**
- Next.js 14 (App Router)
- TypeScript
- React 18
- Framer Motion
- Webflow JavaScript (originalioms animacijoms)

### lukes_demo
Portfolio template su ecommerce funkcionalumu. Šiuolaikiškas dizainas portfolio ir e-commerce svetainėms.

**Funkcijos:**
- Ecommerce funkcionalumas
- Portfolio galerija
- Responsive dizainas

### naxova_demo
Portfolio template su GSAP animacijomis. Idealus dizaineriams, menininkams, fotografams ir kūrėjams.

**Technologijos:**
- GSAP (GreenSock Animation Platform)
- ScrollTrigger
- SplitText
- Modern portfolio dizainas

### homura_demo
Single-page real estate template su moderniu dizainu. Sukurtas nekilnojamojo turto agentūroms ir kūrėjams.

**Funkcijos:**
- Single-page dizainas
- Property showcase
- Testimonials sekcija
- Conversion-focused dizainas

## 📖 Naudojimas

### Statiniai HTML projektai (lukes, naxova, homura)

Kiekvienas projektas yra savarankiška HTML svetainė. Paleisti lokalų serverį:

```bash
# Eiti į projekto katalogą
cd lukes_demo/lukes-template.webflow.io
# arba
cd naxova_demo/naxova.webflow.io
# arba
cd homura_demo/homura.webflow.io

# Paleisti lokalų serverį
python3 -m http.server 8000

# Atidaryti naršyklėje
open http://localhost:8000
```

### Next.js projektas (iftech_demo)

```bash
cd iftech_demo

# Įdiegti dependencies
npm install

# Paleisti development serverį
npm run dev

# Build production versijai
npm run build
npm start
```

## 🛠️ Reikalavimai

- **Node.js** (16+ versijai) - tik iftech_demo projektui
- **Python 3** - statiniams HTML projektams (lokaliam serveriui)
- **Modern naršyklė** su ES6+ palaikymu

## 📝 Pastabos

- Visi projektai yra Webflow šablonų kopijos
- Animacijos ir interaktyvumas išlaikyti iš originalių šablonų
- Kai kurie projektai naudoja CDN resursus (paveikslėliai, šriftai)
- `_DataURI/` aplankai gali būti dideli dėl base64 encoded failų

## 📄 Licencija

Šie projektai yra Webflow šablonų kopijos. Patikrinkite originalių šablonų licencijas prieš naudojimą komerciniais tikslais.

## 🔗 Nuorodos

- [Iftech Template](https://iftech-template.webflow.io)
- [Lukes Template](https://lukes-template.webflow.io)
- [Naxova Template](https://naxova.webflow.io)
- [Homura Template](https://homura.webflow.io)
