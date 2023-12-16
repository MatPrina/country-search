const main = document.getElementById('conteudo')

function renderCountry(pais) {

    const div = document.createElement('div')
    div.classList.add('pais-div')
    console.log('div criada')
    const img = document.createElement('img')
    img.classList.add('pais-img')
    img.src = pais.flags.svg
    console.log('bandeira criada')
    const h2 = document.createElement('h2')
    h2.classList.add('pais-titulo')
    h2.innerText = pais.name.common
    console.log('titulo criado')
    const labelPop = document.createElement('label')
    labelPop.classList.add('pais-label')
    labelPop.innerText = 'Population: '
    console.log('labelPop criado')
    const spanPop = document.createElement('span')
    spanPop.classList.add('pais-span')
    spanPop.innerText = pais.population
    console.log('spanPop criado')
    const labelRegion = document.createElement('label')
    labelRegion.classList.add('pais-label')
    labelRegion.innerText = "Region: "
    console.log('labelRegion criado')
    const spanRegion = document.createElement('span')
    spanRegion.classList.add('pais-span')
    spanRegion.innerText = pais.region
    console.log('spanRegion criado')
    const labelCap = document.createElement('label')
    labelCap.classList.add('pais-label')
    labelCap.innerText = "Capital: "
    console.log('labelCap criado')
    const spanCap = document.createElement('span')
    spanCap.classList.add('pais-span')
    spanCap.innerText = pais.capital
    console.log('spanCap criado')
    labelPop.appendChild(spanPop)
    labelRegion.appendChild(spanRegion)
    labelCap.appendChild(spanCap)
    div.append(img, h2, labelPop, labelRegion, labelCap)
    main.appendChild(div)
    console.log('appends feitas')

}

async function getCountry() {
    const paises = await fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())   
    paises.forEach((pais) => {
        renderCountry(pais)
    })  
}

getCountry()