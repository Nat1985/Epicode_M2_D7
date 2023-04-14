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


// funzione di ricerca dei risultati nell'array fornito (necessita di due parametri):
function searchJob(what, where) {
  let lowerWhatWhere = [what.toLowerCase(), where.toLowerCase()]; //raccolto i due input di lavoro e posizione trasformati in minuscolo
  let result = [];  // Creo l'array che immagazzinerà i risultati della ricerca
  for (i = 0; i < jobs.length; i ++) {  // Questo ciclo passa tutti gli elementi (cioè gli oggetti formati da title e location) dell'array dato
    let lowerTitleLocation = [jobs[i].title.toLowerCase(), jobs[i].location.toLowerCase()]; // i due valori title e location di ogni ciclo li metto in un array che li immagazzina in minuscolo
    if (lowerTitleLocation[0].includes(lowerWhatWhere[0]) && lowerTitleLocation[1].includes(lowerWhatWhere[1])) { // entrambe le parole devono essere contenute
      result.push(jobs[i]); // aggiungo ogni oggetto trovato all'array che fornirò come risultato
    }
  }
  return result;    // Ritorna l'array contenente tutti i risultati trovati (compreso il count come ultimo elemento)
}

function formInput() { // funzione richiamata dal tasto button dell'html
  let myWhatWhere = [document.getElementById("title").value, document.getElementById("location").value]; // immagazzino le due parole digitate dall'utente
  let jobsFound = (searchJob(myWhatWhere[0], myWhatWhere[1])); // invoca la funzione di ricerca passandogli le due variabili precedenti e ne salva il return
  let resultsCount = jobsFound.length; // Imposto la variabile che immagazzina il numero di risultati trovati
  console.log(jobsFound); // mostro l'array a video come controllo

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
  
      // il passo successivo è l'inserimento dei div appena creati nell'html
      // prima però creo un ciclo per eliminare dall'html i risultati eventualmente già trovati in precedenza:
      let newdivClass = document.getElementsByClassName("new-div");
      let oldHr = document.getElementsByTagName("hr");
      let resultH2 = document.getElementsByTagName("h2"); // pesco i singoli elementi html dei risultati già trovati
      for (i = newdivClass.length; i > 0; i --) { // li cancello con dei cicli
        newdivClass[i - 1].remove();  // questi cicli "girano" con l'indice che decrementa perché eliminano ogni volta un elemento 
        oldHr[i - 1].remove();
      }
      for (i = resultH2.length; i > 0; i --) {
        resultH2[i - 1].remove();
      }

  // ora parte il ciclo finale per inserire i div:
  let resultsDiv = document.getElementById("results"); // il div results è creato in precedenza nell'html per ricevere i nuovi div, inizialmente è vuoto
  let searchTitle = document.createElement("h2");
  searchTitle.innerText = `Risultati trovati: (${resultsCount})`; //inserisco un h2 col numero dei risultati trovati
  resultsDiv.appendChild(searchTitle);
  for (i = 0; i < newDivs.length; i ++) {
    resultsDiv.appendChild(document.createElement("hr")); // inserisco una linea orizzontale divisoria fra un risultato e l'altro (formattata con css)
    resultsDiv.appendChild(newDivs[i]); // appendo ogni div dell'array newDivs creato prima
  }
}