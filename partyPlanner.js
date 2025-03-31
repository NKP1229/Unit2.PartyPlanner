// api url: "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2109-CPU-RM-WEB-PT/events"
// cohorts: "2503-FTB-ET-WEB-FT" "2109-CPU-RM-WEB-PT"
const COHORT = "2503-FTB-ET-WEB-FT";
const API = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${COHORT}/events`;
const state = [];
async function deleteParty(index){
    try{
        // await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(index);
        const id = state[index].id;
        const response = await fetch(`${API}/${id}`, {
            method: "DELETE",
        });
        const json = await response.json();
        console.log(json);
    }
    catch(error){
        console.error("Error in deleteParty function:", error);
        throw error;
    }
    await new Promise(resolve => setTimeout(resolve, 500));
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
function renderParties(Party) {
    console.log(Party);
    // Check if DOM is already loaded
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", function () {
            manipulateDOM(Party);
        });
    } else {
        manipulateDOM(Party);
    }
}

function manipulateDOM(Party) {
    for (let i = 0; i < Party.data.length; i++) {
        const name = document.getElementById(`n${i}`);
        const time = document.getElementById(`t${i}`);
        const location = document.getElementById(`l${i}`);
        const details = document.getElementById(`d${i}`);
        name.textContent = Party.data[i].name;
        time.textContent = Party.data[i].date;
        location.textContent = Party.data[i].location;
        details.textContent = Party.data[i].description;
        const search = state.find(index => index.name === Party.data[i].name);
        if (!search){
            state.push(Party.data[i]);
        }
    }
    console.log(state);
}

async function render(){
    const PARTIES = await getParties();
    renderParties(PARTIES);
}
render();

document.addEventListener("DOMContentLoaded", function () {
    const delete1 = document.getElementById("delete1");
    const delete2 = document.getElementById("delete2");
    const delete3 = document.getElementById("delete3");
    const delete4 = document.getElementById("delete4");
    const delete5 = document.getElementById("delete5");
    const delete6 = document.getElementById("delete6");
    const delete7 = document.getElementById("delete7");
    const delete8 = document.getElementById("delete8");
    const delete9 = document.getElementById("delete9");
    const delete10 = document.getElementById("delete10");
    delete1.addEventListener("click", async function() {await deleteParty(0);});
    delete2.addEventListener("click", async function() {await deleteParty(1);});
    delete3.addEventListener("click", async function() {await deleteParty(2);});
    delete4.addEventListener("click", async function() {await deleteParty(3);});
    delete5.addEventListener("click", async function() {await deleteParty(4);});
    delete6.addEventListener("click", async function() {await deleteParty(5);});
    delete7.addEventListener("click", async function() {await deleteParty(6);});
    delete8.addEventListener("click", async function() {await deleteParty(7);});
    delete9.addEventListener("click", async function() {await deleteParty(8);});
    delete10.addEventListener("click", async function() {await deleteParty(9);});
});
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