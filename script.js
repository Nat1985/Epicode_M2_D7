const jobs = [
    { title: "Marketing Intern", location: "US, NY, New York" },
    {
      title: "Customer Service - Cloud Video Production",
      location: "NZ, Auckland",
    },
    {
      title: "Commissioning Machinery Assistant (CMA)",
      location: "US, IA, Wever",
    },
    {
      title: "Account Executive - Washington DC",
      location: "US, DC, Washington",
    },
    { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
    { title: "Accounting Clerk", location: "US, MD," },
    { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
    {
      title: "Lead Guest Service Specialist",
      location: "US, CA, San Francisco",
    },
    { title: "HP BSM SME", location: "US, FL, Pensacola" },
    {
      title: "Customer Service Associate - Part Time",
      location: "US, AZ, Phoenix",
    },
    {
      title: "ASP.net Developer Job opportunity at United States,New Jersey",
      location: "US, NJ, Jersey City",
    },
    {
      title: "Talent Sourcer (6 months fixed-term contract)",
      location: "GB, LND, London",
    },
    {
      title: "Applications Developer, Digital",
      location: "US, CT, Stamford",
    },
    { title: "Installers", location: "US, FL, Orlando" },
    { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
    {
      title: "VP of Sales - Vault Dragon",
      location: "SG, 01, Singapore",
    },
    { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
    {
      title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
      location: "GB, SOS, Southend-on-Sea",
    },
    { title: "Visual Designer", location: "US, NY, New York" },
    {
      title: "Process Controls Engineer - DCS PLC MS Office - PA",
      location: "US, PA, USA Northeast",
    },
    { title: "Marketing Assistant", location: "US, TX, Austin" },
    { title: "Front End Developer", location: "NZ, N, Auckland" },
    { title: "Engagement Manager", location: "AE," },
    {
      title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
      location: "US, CA, Carlsbad",
    },
    { title: "Customer Service", location: "GB, LND, London" },
    { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
    { title: "Marketing Exec", location: "SG," },
    {
      title: "HAAD/DHA Licensed Doctors Opening in UAE",
      location: "AE, AZ, Abudhabi",
    },
    {
      title: "Talent Management Process Manager",
      location: "US, MO, St. Louis",
    },
    { title: "Customer Service Associate", location: "CA, ON, Toronto" },
    {
      title: "Customer Service Technical Specialist",
      location: "US, MA, Waltham",
    },
    { title: "Software Applications Specialist", location: "US, KS," },
    { title: "Craftsman Associate", location: "US, WA, Everett" },
    { title: "Completion Engineer", location: "US, CA, San Ramon" },
    { title: "I Want To Work At Karmarama", location: "GB, LND," },
    {
      title: "English Teacher Abroad",
      location: "US, NY, Saint Bonaventure",
    },
  ]




function formInput() { // Questa è la funzione richiamata dal tasto button dell'html
  let myWhat = document.getElementById("title").value; // variabile che immagazzina il value del primo text
  let myWhere = document.getElementById("location").value; // variabile che immagazzina il value del secondo text

  console.log(searchJob(myWhat, myWhere)); //richiama la funzione searchJob per effettuare la ricerca, passando come argomenti le due variabili precedenti
}

function searchJob(what, where) {
  let lowerWhat = what.toLowerCase();   // In questa variabile raccolgo l'input della posizione lavorativa trasformandolo in minuscolo
  let lowerWhere = where.toLowerCase(); // In questa vatiabile raccolgo l'input della location trasformandolo in minuscolo
  let count = 0;    // Creo la variabile che conterà i risultati e la setto a 0
  let result = [];  // Creo l'array che immagazzinerà i risultati della ricerca

  for (i = 0; i < jobs.length; i ++) {  // Questo ciclo passa tutti gli elementi (cioè gli oggetti formati da title e location) dell'array dato
    let lowerTitle = jobs[i].title.toLowerCase();   // creo la variabile che immagazzina il title tutto in minuscolo
    let lowerLocation = jobs[i].location.toLowerCase(); // // creo la variabile che immagazzina la location tutta in minuscolo
    if (lowerTitle.includes(lowerWhat) && lowerLocation.includes(lowerWhere)) { // La condizione è che entrambe le parole devono essere contenute all'interno dell'oggetto e non soltanto una
      count ++; // se la condizione è soddisfatta aumenta di uno il contatore dei risultati, che a fine ciclo indicherà così il numero esatto di elementi trovati
      result.push(jobs[i]); // aggiungo ogni oggetto trovato all'array che fornirò come risultato
    }
  }
  console.log("Risultati trovati: " + count);   // Mostra il numero di risultati trovati
  return result;    // Ritorna l'array contenente tutti i risultati trovati

}