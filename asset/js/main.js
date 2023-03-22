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

for (let i = 0; i < teamMembers.length; i++) {
    const Thisteam = teamMembers[i];
    console.log('nome', Thisteam.nome);
    console.log('ruolo', Thisteam.ruolo);
    console.log('foto', Thisteam.foto);
    const markupTeam = `
    <div class="col">
        <div class="card">
            <img src="./asset/img/${Thisteam.foto}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${Thisteam.nome}</h5>
                    <p class="card-text">${Thisteam.ruolo}</p>
                </div>
        </div>
    </div>
    `
    rowEl.insertAdjacentHTML('beforeend', markupTeam)
}
