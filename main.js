fetch('draws.json')
            .then((resp) => resp.json())
            .then((json) => {
                // console.log(json)
            let draw = json.draw
            let output = ''
            // for(let i = 0; i < draw.length; i++)
            draw.forEach(function(draw){
                output += "<li>" + draw + "</li>"
            })
            document.getElementById('draw').innerHTML = output
        
    
        })
    
