function date(){

    const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};

    document.getElementById('info').textContent = new Date().toLocaleDateString('en-US, options');

    const todaysdate = new Date();

}


function toggleMenu(){ 
    console.log("It worked");   
    document.getElementById("primaryNav").classList.toggle("hide");    

}


