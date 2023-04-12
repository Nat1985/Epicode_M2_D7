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

  let jobsFound = (searchJob(myWhat, myWhere)); // invoca la funzione di ricerca passandogli le due variabili precedenti e immagazzina l'array di return
  let resultsCount = jobsFound.splice(jobsFound.length - 1, 1); // tolgo il valore di count dall'array e lo metto in una variabile a se
  console.log(jobsFound); // lo mostra a video come controllo

  // ora abbiamo la lista degli elementi trovati nell'array jobsFound.
  // creiamo un elemento div per ogni oggetto presente in jobsFound.
  // lo facciamo creando un nuovo array e un ciclo for col quale immagazzinarli.
  let newDivs = []; // dichiaro il nuovo array
  let newDiv; // dichiaro la variabile per ogni nuovo div
  for (i = 0; i < jobsFound.length; i ++) {
    newDiv = document.createElement("div"); // ad ogni ciclo inserisco un nuovo div nella variabile newDiv
    newDiv.innerText = jobsFound[i].title + "\n" + jobsFound[i].location;  // aggiungo il testo preso dall'array dei risultati
    newDivs.push(newDiv); // inserisco ogni nuovo tag div nel nuovo array newDivs
    newDivs[i].classList.add("new-div"); // aggiungo ad ognuno la classe new-div per poterli poi modificare con css
  }

  console.log(newDivs); //stampo a video il contenuto del nuovo array come controllo
  
  // creo un ciclo per inserire i div nell'html:
      // ma prima ne creo uno per eliminare gli elementi eventualmente già trovati in precedenza:
      let newdivClass = document.getElementsByClassName("new-div");
      let removeCycleNumbers = newdivClass.length;
      let resultH2 = document.getElementsByTagName("h2");
      let oldHr = document.getElementsByTagName("hr");
      for (i = 0; i < removeCycleNumbers; i ++) {
        newdivClass[0].remove();
        oldHr[0].remove();
        if (!resultH2) {
          resultH2.remove();
        }
        //TO FIX: NON SI TOGLIE L'H2
      }
  // ora parte il ciclo per inserire i div:
  let resultsDiv = document.getElementById("results"); // il div results è creato in precedenza nell'html per ricevere i nuovi div, inizialmente è vuoto
  let searchTitle = document.createElement("h2");
  searchTitle.innerText = "Risultati trovati: (" + resultsCount + ")";
  resultsDiv.appendChild(searchTitle);
  for (i = 0; i < newDivs.length; i ++) {
    resultsDiv.appendChild(document.createElement("hr")); // inserisco una linea orizzontale divisoria fra un risultato e l'altro (formattata con css)
    resultsDiv.appendChild(newDivs[i]); // appendo ogni div dell'array creato prima
  }
}

// funzione di ricerca dei risultati nell'array fornito (necessita di due parametri):
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
  result.push(count); // metto dentro anche il valore di count, per utilizzarlo successivamente (lo toglierò appena la funzione è stata chiamata)
  return result;    // Ritorna l'array contenente tutti i risultati trovati

}