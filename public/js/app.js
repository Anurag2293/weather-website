console.log('Client side Javascript is loaded')

// Fetch API --> Not a part of Node.js, rather on frontend.
// fetch('http://puzzle.mead.io.puzzle/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })

if (document.title === 'Weather') {
    fetch('http://localhost:3000/weather?address=washington').then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error)
            } else {
                console.log(data.location)
                console.log(data.forecast)
            }
        })
    })
}
