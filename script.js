const main = document.getElementById('conteudo')
const btnNav = document.getElementById('nav-image')
const btnInput = document.getElementById('nav-input')

function renderCountry(pais) {
    const div = document.createElement('div')
    div.classList.add('pais-div')
    
    const img = document.createElement('img')
    img.classList.add('pais-img')
    img.src = pais.flags.png

    const divInfo = document.createElement('div')
    divInfo.classList.add('div-info')
    
    const h2 = document.createElement('h2')
    h2.classList.add('pais-titulo')
    h2.innerText = pais.name.common
    
    const labelPop = document.createElement('label')
    labelPop.classList.add('pais-label')
    labelPop.innerText = 'Population: '
    
    const spanPop = document.createElement('span')
    spanPop.classList.add('pais-span')
    spanPop.innerText = pais.population
    
    const labelRegion = document.createElement('label')
    labelRegion.classList.add('pais-label')
    labelRegion.innerText = "Region: "
    
    const spanRegion = document.createElement('span')
    spanRegion.classList.add('pais-span')
    spanRegion.innerText = pais.region
    
    const labelCap = document.createElement('label')
    labelCap.classList.add('pais-label')
    labelCap.innerText = "Capital: "
    
    const spanCap = document.createElement('span')
    spanCap.classList.add('pais-span')
    spanCap.innerText = pais.capital

    labelPop.appendChild(spanPop)
    labelRegion.appendChild(spanRegion)
    labelCap.appendChild(spanCap)

    divInfo.append(h2, labelPop, labelRegion, labelCap)

    div.append(img, divInfo)
    main.appendChild(div)

}

async function getCountry(pais = "") {

    while(main.firstChild) {
        main.removeChild(main.firstChild)
    }

    if(pais == "") {
        const paises = await fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())   
        paises.forEach((pais) => {
            renderCountry(pais)
        })
    } else {
        const paises = await fetch('https://restcountries.com/v3.1/name/' + pais)
            .then(res => res.json())   
        paises.forEach((pais) => {
            renderCountry(pais)
        })
    } 
}

btnNav.addEventListener('click', () => {
    getCountry(btnInput.value)
})

document.addEventListener('keydown', (ev) => {
    if(ev.key === 'Enter') {
        getCountry(btnInput.value)
    } else {

    }
})



getCountry()