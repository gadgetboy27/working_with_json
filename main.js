const search = document.getElementById('search')
const matchList = document.getElementById('match-list')

// Search numbers used in DB
 const searchNumber = async searchText => {
    const res = await fetch('draws.json')
    const data = await res.json()

// Get text match
    let matches = data.filter(call => {
        const regex = new RegExp(`${searchText}`)
        return call.number.match(regex) 
// || call.date.match(regex)
    })
    
    if (searchText.length === 0) {
        matches = []
        matchList.innerHTML = ''
    }

    outputHtml(matches)
 }
// Show in HTML
 const outputHtml = matches => {
     if(matches.length > 0) {
         const html = matches.map(match => `
         <div class="card card-body mb-1">
         <h4>${match.number} <span class="text-primary">
         ${match.date}</span></h4>
         <small>Date: ${match.date} / Draw: ${match.draw}</small>
         </div>
         `)
         .join()

        matchList.innerHTML = html
     }
 }

  search.addEventListener('input', () => searchNumber(search.value))




    
