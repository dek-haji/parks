let secretKey = "f088272ec49770e85dfdffd59af9e1f6";



fetch("https://raw.githubusercontent.com/nss-day-cohort-31/national-parks/master/database.json")
    .then(parks => parks.json())
    .then(parsedParks => {
        console.table(parsedParks.parks[1])
        parsedParks.parks.forEach(parkEl => {
                console.log(parkEl.state)

                
                let parkLatitude = parkEl.latitude;
                     let parkLongitude = parkEl.longitude
                    // console.log(parkLongitude)

                 fetch(`https://api.darksky.net/forecast/${secretKey}/${parkLatitude},${parkLongitude}`)
                 .then(weather => weather.json())
                 .then(parsedWeather => {
                     console.log(parsedWeather)


                     
    
                    let articleField = document.createElement("article")
                    articleField.className = "positive"
                    let parkName = document.createElement("h3")
                    let parkAdress = document.createElement("p")
                    let currently = document.createElement("p")
                    let weekly = document.createElement("p")
                    let daily = document.createElement("p")



                    currently.innerText = parsedWeather.currently.summary
                    weekly.innerText = parsedWeather.daily.summary
                    daily.innerText = parsedWeather.hourly.summary
                    parkName.innerText = parkEl.name;
                    parkAdress.innerText = parkEl.state;
    
                    if(parkEl.visited !== true){
                        articleField.className = "negative"
                    }
                    let dom = document.getElementById("domEl");
                    dom.appendChild(articleField)
                    articleField.appendChild(parkName)
                    articleField.appendChild(parkAdress)
                    articleField.appendChild(currently)
                    articleField.appendChild(weekly)
                    articleField.appendChild(daily)
    
                 })
            }

        )
    })