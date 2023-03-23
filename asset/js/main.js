/* 

Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.  Ogni membro è caratterizzato dalle seguenti informazioni:

- nome
- ruolo
- foto

        MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

        MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
        
        MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe


BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!


DATI:
Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg
 */







//creiamo un array di oggetti con all'interno i membri del team
const teamMembers = [
    {
        nome: 'WaynWayne Barnette',
        ruolo: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg'
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg'
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manage',
        foto: 'angela-lopez-social-media-manager.jpg'
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg'
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg'
    },

]

//richiao elemento del dom nel quale inserire il markup
const rowEl = document.querySelector('.row')


// RICHIAMO la funzione per generare le card
generateCard(teamMembers, rowEl)
















// creo un ciclo per recuperare ogni membro del team dall'array
/* for (let i = 0; i < teamMembers.length; i++) {
    const thisTeam = teamMembers[i];
    console.log('nome', thisTeam.nome);
    console.log('ruolo', thisTeam.ruolo);
    console.log('foto', thisTeam.foto);

    // creo un markup per ogni team
    const markupTeam = `
    <div class="col m-2">
        <div class="card">
            <img src="./asset/img/${thisTeam.foto}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${thisTeam.nome}</h5>
                    <p class="card-text">${thisTeam.ruolo}</p>
                </div>
        </div>
    </div>
    `
    // stampo sul dom ogni membro del team
    rowEl.insertAdjacentHTML('beforeend', markupTeam)
} */





//---------------------------------------------- FUNZIONI

function generateCard(team, domElement) {

    for (let i = 0; i < team.length; i++) {
        const thisTeam = team[i];
        console.log(thisTeam)

        // richiamo la funzone che mi crea la card
        const markup = generateMarkup(thisTeam.nome, thisTeam.ruolo, thisTeam.foto)

        // stampo nel dom ogni membro del team
        domElement.insertAdjacentHTML('beforeend', markup)
    }
}


// funzone per generare markup del team
function generateMarkup(nome, ruolo, image) {

    return `
        <div class="col">
            <div class="card">
                <img src="./asset/img/${image}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${nome}</h5>
                        <p class="card-text">${ruolo}</p>
                    </div>
            </div>
        </div>
    `
}



