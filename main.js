const search = document.getElementById('search')
const matchList = document.getElementById('match-list')

// Search numbers used in DB
 const searchNumber = async searchText => {
    const res = await fetch('draws.json')
    const data = await res.json()

    // console.log(data)
    // Get text match
    let matches = data.filter(call => {
        const regex = new RegExp(`^${searchText}`, 'gi')
        return call.name.match(regex) || state.abbr.match(regex)
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
         <h4>${match.name} (${match.abbr}) <span class="text-primary">
         ${match.capital}</span></h4>
         <small>Lat: ${match.lat} / Long: ${match.long}</small>
         </div>
         `)
         .join()

        matchList.innerHTML = html
     }
 }

  search.addEventListener('input', () => searchNumber(search.value))



//     if (searchText.length === 0) {
//         matches = []
//     }
//     console.log(numbers)
    
// }

// const outputHtml = matches => {
//     if(matches.length > 0) {
//         const html = matches.map(match => `
//         <div class="card card-body mb-1">
//             <h4>${match.draw}</h4>`
//         )
//     }
// }



    
