console.log('loaded')

const res = await fetch('/api/data.json')
if (res.status != 200) {
    alert('Gagal mengambil data')
}

const data = await res.json()

const tbody = document.getElementById('body-table')
tbody.innerHTML = ""

data.features.forEach((item, i) => {
    const row = document.createElement('tr')

    const no = document.createElement('td')
    no.textContent = i +1
    row.appendChild(no)

    const name = document.createElement('td')
    name.textContent = item.properties.name
    row.appendChild(name)

    const type = document.createElement('td')
    type.textContent = item.geometry.type
    row.appendChild(type)

    const coordinate = document.createElement('td')
    coordinate.textContent = item.geometry.coordinates
    row.appendChild(coordinate)
    
    tbody.appendChild(row)
})