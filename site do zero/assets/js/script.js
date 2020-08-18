function pegaNome() {
    let nome = document.querySelector('#nome');
    let mostrar = document.querySelector('#mostrar');



    mostrar.innerHTML(`Olá, ${nome}`);
    console.log(mostrar);
}

pegaNome();