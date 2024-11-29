import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'fr',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          //Navbar
          HomePageNav: "Homepage",
          DashboardNav: "Dashboard",
          HistoryNav: "History",
          ProfileNav: "Profile",
          HelpNav: "Help",

          //Homepage
          HomePageTitle: "Sail with a clear head, we'll take care of the rest",
          WaterCons: "water consumption",
          EnergyCons: "energy consumption",
          WaterConsText: "Keep precise control of your drinking water reserves. Thanks to our connected sensors, SailBuddy displays the percentage of water remaining in your tanks in real time, so you can anticipate your needs. When the level drops below the critical threshold of 20% of water remaining in your tank, a notification alerts you so you can plan your next stopover with complete peace of mind.",
          EnergyConsText: "Keep an overview of your yacht's energy autonomy. SailBuddy shows you the state of charge of your batteries in real time, enabling you to manage your consumption efficiently. In the event of a significant drop, an alert is sent so you can adapt your usage or plan a recharging point at the next port of call.",
          Your: "Your",
          InRealTime: "in real time",

          AccessProfil: "Access my profile",
          DailyCons: "Your daily consumption",
          Water: "Water",
          Energy: "Energy",
          WatchData: "View my data",

          //Profile
          Hello: "Hello",
          Language: "English",
          Address: "Address",
          Email: "E-Mail",
          Phone: "Phone",
          Password: "Password",
          ForgotPassword: "Forgot your password ?",

          //Dashboard
          DashboardText: "Dashboard",
          QuantityOfWater: "Quantity of water on board",
          QuantityOfEnergy: "Quantity of energy on board",
          RemainingWater: "of remaining water",
          RemainingEnergy: "of remaining energy",

          //History
          Monday: "Monday",
          Tuesday: "Tuesday",
          Wednesday: "Wednesday",
          Thursday: "Thursday",
          Friday: "Friday",
          Saturday: "Saturday",
          Sunday: "Sunday",
          HistoryCons: "Your consumption history",
          ViewHistory: "View your history in",
          Week: "Week",
          Month: "Month",
          Year: "Year",
          YourCons: "Your consumption",
          OfWater: "of water",
          OfEnergy: "of energy",
          InLiter: "in liter",
          InKwh: "in kWh",

          //Help
          NeedHelp: "Need help ?",
          InstallCaptor: "How to install our sensors on board ?",
          UseApp: "How to use the application ?",
          ContactUs: "Contact us",
          EnterName: "Enter your name",
          EnterMail: "Enter your email",
          EnterMessage: "How can we help you?",
          Send: "Send",

        },
      },
      fr: {
        translation: {
          //Navbar
          HomePageNav: "Accueil",
          DashboardNav: "Tableau de bord",
          HistoryNav: "Historique",
          ProfileNav: "Profil",
          HelpNav: "Aide",

          //Homepage
          HomePageTitle: "Naviguez l'esprit léger, Nous gérons le reste",
          WaterCons: "consommation d'eau",
          EnergyCons: "consommation d'énergie",
          WaterConsText: "Gardez un contrôle précis de vos réserves d’eau potable. Grâce à nos capteurs connectés, SailBuddy affiche en temps réel le pourcentage d'eau restant dans vos réservoirs, afin que vous puissiez anticiper vos besoins. Quand le niveau descend sous le seuil critique qui est de 20% d’eau restante dans votre cuve, une notification vous avertit pour vous permettre de planifier votre prochaine escale en toute sérénité.",
          EnergyConsText: "Gardez une vue d'ensemble sur l'autonomie énergétique de votre voilier. SailBuddy vous indique en temps réel l'état de charge de vos batteries, vous permettant ainsi de gérer efficacement votre consommation. En cas de baisse significative, une alerte est envoyée pour que vous puissiez adapter vos usages ou prévoir un point de recharge à la prochaine escale.",
          Your: "Votre",
          InRealTime: "en temps réel",

          AccessProfil: "Accéder à mon profil",
          DailyCons: "Votre consommation journalière",
          Water: "Eau",
          Energy: "Énergie",
          WatchData: "Visualiser mes données",

          //Profile
          Hello: "Bonjour",
          Language: "Français",
          Address: "Addresse",
          Email: "E-Mail",
          Phone: "Tel.",
          Password: "Mot de passe",
          ForgotPassword: "Mot de passe oublié ?",

          //Dashboard
          DashboardText: "Tableau de bord",
          QuantityOfWater: "Quantité d’eau à bord",
          QuantityOfEnergy: "Quantité d’énergie à bord",
          RemainingWater: "d'eau restante",
          RemainingEnergy: "d'énergie restante",

          //History
          Monday: "Lundi",
          Tuesday: "Mardi",
          Wednesday: "Mercredi",
          Thursday: "Jeudi",
          Friday: "Vendredi",
          Saturday: "Samedi",
          Sunday: "Dimanche",
          HistoryCons: "Votre historique de consommation",
          ViewHistory: "Visualisez votre historique en",
          Week: "Semaine",
          Month: "Mois",
          Year: "Année",
          YourCons: "Votre consommation",
          OfWater: "d'eau",
          OfEnergy: "d'énergie",
          InLiter: "en litre",
          InKwh: "en kWh",

          //Help
          NeedHelp: "Besoin d'aide ?",
          InstallCaptor: "Comment installer nos capteurs à bord ?",
          UseApp: "Comment utiliser l’application ?",
          ContactUs: "Nous contacter",
          EnterName: "Entrez votre nom",
          EnterMail: "Entrez votre email",
          EnterMessage: "Comment pouvons-nous vous aider ?",
          Send: "Envoyer",
        },
      },
    },
  });

export default i18n;