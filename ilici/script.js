const url = 'https://query.wikidata.org/sparql?format=json&query=';

const personName = 'Ion Iliescu';
const sparqlQuery = `SELECT ?deathDate WHERE {
  ?person rdfs:label "${personName}"@en.
  ?person wdt:P570 ?deathDate.
}`;

const queryUrl = url + encodeURIComponent(sparqlQuery);

fetch(queryUrl, {
    headers: {
        'Accept': 'application/sparql-results+json'
    }
})
.then(response => response.json())
.then(data => {
    const result = data.results.bindings[0];
    if (result) {
        const deathDate = result.deathDate.value;
        document.getElementById('dasaunu').innerHTML = 'Iliescu a murit.';
    } else {
        document.getElementById('dasaunu').innerHTML = 'Iliescu este viu.';
    }
})
.catch((err) => {
    console.log(`Error fetching data from Wikidata API ${err}`);
});
