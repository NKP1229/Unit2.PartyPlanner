// api url: "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2109-CPU-RM-WEB-PT/events"
// cohorts: "2503-FTB-ET-WEB-FT" "2109-CPU-RM-WEB-PT"
const COHORT = "2503-FTB-ET-WEB-FT";
const API = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${COHORT}/events`;
const state = {
    party: {},
}
async function deleteParty(id){
    try {
        const response = await fetch(`${API}/${id}`, {
            method: "DELETE",
        });
        const json = await response.json();
        console.log(json);
    }
    catch(error){
        console.error(error.message);
    }
    render();
}
async function getParties(){
    try{
        const response = await fetch(API);
        const json = await response.json();
        return json;
    }
    catch(error){
        console.error(error.message);
    }
}
async function addParty(Party){
    try{
        console.log(Party);
        const response = await fetch(`${API}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Party),
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Error: ${response.status} - ${errorData.message || 'Something went wrong'}`);
        }
        const json = await response.json();
    }
    catch(error){
        console.error(error.message);
    }
    render();
}
function renderParties(Party){
    console.log(Party);
    // document.addEventListener("DOMContentLoaded", function () {
        
    // });

}
async function render(){
    const PARTIES = await getParties();
    renderParties(PARTIES);
}
render();

/*  TEST addParty function  */
// let p = {
//     "name": "Party Wun",
//     "description": "ferst partee",
//     "date": "2025-03-31T01:01:01.001Z",
//     "location": "house of uno"
// };
// addParty(p);

/*  TEST deleteParty function  */
// deleteParty(4621);