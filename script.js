const nav = document.querySelector(".site-nav");
const navToggle = document.querySelector(".nav-toggle");
const translations = {
  sv: {
    "Crew": "Crew",
    "Parents": "Föräldrar",
    "Post a job": "Lägg upp jobb",
    "Academy": "Akademi",
    "Safety": "Säkerhet",
    "Join the Crew": "Gå med i Crew",
    "Join waitlist": "Gå med i väntelistan",
    "Contact": "Kontakt",
    "Local jobs for the Oddly Crew": "Lokala jobb för Oddly Crew",
    "Get out there. Earn real money. Build your future.": "Kom ut. Tjäna riktiga pengar. Bygg din framtid.",
    "Oddly connects the Oddly Crew with local jobs like lawn mowing, dog walking, car washing and garden help. Safe, fair, and parents stay in the loop from start to finish.": "Oddly kopplar ihop Oddly Crew med lokala jobb som gräsklippning, hundpromenader, biltvätt och trädgårdshjälp. Tryggt, rättvist och med föräldrarna med från början till slut.",
    "Join the Oddly Crew": "Gå med i Oddly Crew",
    "Post a job nearby": "Lägg upp ett jobb nära dig",
    "Parent approved": "Godkänt av förälder",
    "GPS check-in": "GPS-incheckning",
    "Fair pricing": "Rättvis prissättning",
    "Level up as you earn": "Levla upp när du tjänar",
    "Alex · Level 3 · Senior Crew soon": "Alex · Nivå 3 · snart Senior Crew",
    "680 XP · 320 to next level": "680 XP · 320 till nästa nivå",
    "Jobs near you": "Jobb nära dig",
    "Lawn mowing": "Gräsklippning",
    "0.4 km · parent approved": "0,4 km · föräldragodkänt",
    "Dog walking": "Hundpromenad",
    "0.7 km · 45 minutes": "0,7 km · 45 minuter",
    "Car wash": "Biltvätt",
    "1.1 km · tools listed": "1,1 km · verktyg listade",
    "Today": "Idag",
    "Arrive and check in": "Kom fram och checka in",
    "Parent notified automatically": "Förälder meddelas automatiskt",
    "Photo proof": "Fotobevis",
    "Neighbour confirms completion": "Granne bekräftar att jobbet är klart",
    "Home": "Hem",
    "Explore": "Utforska",
    "Jobs": "Jobb",
    "Profile": "Profil",
    "How it works": "Så funkar det",
    "Simple for the Crew, parents and neighbours.": "Enkelt för Crew, föräldrar och grannar.",
    "Oddly turns small local tasks into a safe first work experience with clear approval, guided pricing and useful feedback.": "Oddly gör små lokala uppdrag till en trygg första arbetslivserfarenhet med tydliga godkännanden, prisstöd och hjälpsam feedback.",
    "For the Oddly Crew": "För Oddly Crew",
    "Join with a linked parent account.": "Gå med med ett kopplat föräldrakonto.",
    "Browse jobs inside your approved area.": "Bläddra bland jobb inom ditt godkända område.",
    "Check in, do the job, earn money and XP.": "Checka in, gör jobbet, tjäna pengar och XP.",
    "For parents": "För föräldrar",
    "Set job types, distance and hour limits.": "Ställ in jobbtyper, avstånd och tidsgränser.",
    "Approve employers before job one.": "Godkänn uppdragsgivare före första jobbet.",
    "See check-ins, locations and completion photos.": "Se incheckningar, plats och slutfoton.",
    "For neighbours": "För grannar",
    "Post the task and receive a price guide.": "Lägg upp uppgiften och få en prisguide.",
    "Match with local, approved Crew.": "Matchas med lokal, godkänd Crew.",
    "Confirm completion and leave kind feedback.": "Bekräfta att jobbet är klart och lämna vänlig feedback.",
    "Popular jobs": "Populära jobb",
    "Real jobs. Real earnings. No experience needed.": "Riktiga jobb. Riktiga pengar. Ingen erfarenhet behövs.",
    "🌿 Lawn mowing": "🌿 Gräsklippning",
    "🐕 Dog walking": "🐕 Hundpromenad",
    "🚗 Car washing": "🚗 Biltvätt",
    "🍂 Garden tidying": "🍂 Trädgårdsfix",
    "Low XP": "Låg XP",
    "Mid XP": "Mellan XP",
    "Why Oddly": "Varför Oddly",
    "More than pocket money.": "Mer än fickpengar.",
    "Every job builds a record of reliability, practical skills and confidence. Oddly Academy turns that effort into a useful digital CV.": "Varje jobb bygger ett kvitto på pålitlighet, praktiska färdigheter och självförtroende. Oddly Academy gör insatsen till ett användbart digitalt CV.",
    "Explore Academy": "Utforska Academy",
    "Progression": "Utveckling",
    "Rookie Crew, Senior Crew and Crew Captain levels make growth visible.": "Nivåerna Rookie Crew, Senior Crew och Crew Captain gör utvecklingen tydlig.",
    "Smart prep": "Smart förberedelse",
    "Job tips, tool lists and timing guidance arrive before each job.": "Jobbtips, verktygslistor och tidsråd kommer före varje jobb.",
    "Kind feedback": "Snäll feedback",
    "No brutal star ratings. Feedback is developmental and useful.": "Inga hårda stjärnbetyg. Feedbacken är utvecklande och användbar.",
    "Parent controls": "Föräldrakontroller",
    "Parents approve jobs, people, areas, hours and job categories.": "Föräldrar godkänner jobb, personer, områden, tider och jobbtyper.",
    "Ready to join Oddly?": "Redo att gå med i Oddly?",
    "Get on the list and we will let you know when Oddly is ready near you. Free to join.": "Skriv upp dig så hör vi av oss när Oddly är redo nära dig. Det är gratis att gå med.",
    "Your email address": "Din e-postadress",
    "Email address": "E-postadress",
    "I am a": "Jag är",
    "I am a...": "Jag är...",
    "Oddly Crew member": "Oddly Crew-medlem",
    "Parent": "Förälder",
    "Neighbour with jobs": "Granne med jobb",
    "School or educator": "Skola eller lärare",
    "Join the list": "Gå med i listan",
    "You are on the list. We will be in touch when Oddly is ready near you.": "Du är med på listan. Vi hör av oss när Oddly är redo nära dig.",
    "Real work. Real skills. Real Crew.": "Riktigt jobb. Riktiga färdigheter. Riktig Crew.",
    "Trust": "Trygghet",
    "Oddly": "Oddly",
    "Privacy policy": "Integritetspolicy",
    "Terms of use": "Användarvillkor",
    "For investors": "För investerare",
    "© 2026 Oddly. All rights reserved.": "© 2026 Oddly. Alla rättigheter förbehållna.",
    "Built for local communities.": "Byggt för lokala samhällen.",
    "Earn near home and turn effort into progress.": "Tjäna nära hemmet och gör insats till utveckling.",
    "Find parent-approved local jobs, prepare properly, check in safely, get paid fairly and build a record you can use later.": "Hitta föräldragodkända lokala jobb, förbered dig ordentligt, checka in tryggt, få rättvist betalt och bygg meriter du kan använda senare.",
    "Show my parents": "Visa mina föräldrar",
    "How you grow": "Så växer du",
    "Five levels from first job to community leader.": "Fem nivåer från första jobbet till lokal förebild.",
    "Before every job": "Före varje jobb",
    "Know what to bring and what to do.": "Veta vad du ska ta med och göra.",
    "Your kid gets opportunity. You keep the controls.": "Ditt barn får möjligheter. Du behåller kontrollen.",
    "View safety features": "Se säkerhetsfunktioner",
    "For neighbours": "För grannar",
    "Get local jobs done and back a young person.": "Få lokala jobb gjorda och stötta en ung person.",
    "Join job poster waitlist": "Gå med i väntelistan för uppdragsgivare",
    "How trust works": "Så fungerar tryggheten",
    "Oddly Academy": "Oddly Academy",
    "More than pocket money. A real career starter.": "Mer än fickpengar. En riktig karriärstart.",
    "Join the Academy list": "Gå med i Academy-listan",
    "See Crew levels": "Se Crew-nivåer",
    "Safety first": "Säkerhet först",
    "Built for trust before a job ever starts.": "Byggt för trygghet innan ett jobb ens börjar.",
    "Parent controls": "Föräldrakontroller",
    "Posting standards": "Regler för uppdrag",
    "Privacy": "Integritet",
    "Privacy policy": "Integritetspolicy",
    "Terms": "Villkor",
    "Terms of use": "Användarvillkor",
    "Investors": "Investerare",
    "Request investor info": "Be om investerarinformation"
  }
};

function addLanguageSwitch() {
  if (!nav || nav.querySelector(".language-switch")) return;
  const switcher = document.createElement("div");
  switcher.className = "language-switch";
  switcher.setAttribute("aria-label", "Language");
  switcher.innerHTML = '<button type="button" data-lang="en">EN</button><button type="button" data-lang="sv">SV</button>';
  const cta = nav.querySelector(".button-primary");
  nav.insertBefore(switcher, cta || navToggle);
}

function translatePage(lang) {
  const map = translations[lang] || {};
  document.documentElement.lang = lang === "sv" ? "sv" : "en";
  document.querySelectorAll(".language-switch button").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
    button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
  });

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || ["SCRIPT", "STYLE"].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
      return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => {
    if (!node._oddlyEn) node._oddlyEn = node.nodeValue;
    const original = node._oddlyEn.trim();
    const replacement = lang === "sv" ? map[original] : original;
    if (replacement) node.nodeValue = node._oddlyEn.replace(original, replacement);
  });

  document.querySelectorAll("input[placeholder], [aria-label], option").forEach((el) => {
    if (el.hasAttribute("placeholder")) {
      if (!el.dataset.enPlaceholder) el.dataset.enPlaceholder = el.getAttribute("placeholder");
      el.setAttribute("placeholder", lang === "sv" ? (map[el.dataset.enPlaceholder] || el.dataset.enPlaceholder) : el.dataset.enPlaceholder);
    }
    if (el.hasAttribute("aria-label")) {
      if (!el.dataset.enLabel) el.dataset.enLabel = el.getAttribute("aria-label");
      el.setAttribute("aria-label", lang === "sv" ? (map[el.dataset.enLabel] || el.dataset.enLabel) : el.dataset.enLabel);
    }
    if (el.tagName === "OPTION") {
      if (!el.dataset.enText) el.dataset.enText = el.textContent;
      el.textContent = lang === "sv" ? (map[el.dataset.enText] || el.dataset.enText) : el.dataset.enText;
    }
  });
}

addLanguageSwitch();
const savedLanguage = localStorage.getItem("oddly-language") || "en";
translatePage(savedLanguage);

document.querySelectorAll(".language-switch button").forEach((button) => {
  button.addEventListener("click", () => {
    localStorage.setItem("oddly-language", button.dataset.lang);
    translatePage(button.dataset.lang);
  });
});

if (nav && navToggle) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const reveals = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  reveals.forEach((el) => observer.observe(el));
} else {
  reveals.forEach((el) => el.classList.add("visible"));
}

document.querySelectorAll("[data-waitlist]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const success = form.parentElement.querySelector(".success");
    form.style.display = "none";
    if (success) success.style.display = "block";
  });
});
