const checkbox = document.getElementById('checkbox')
const pane = document.getElementById('configpane')
const paneout = document.getElementById('hid')
const selectbg = document.getElementById('bgchoose')
const unspane = document.getElementById('unsplash')
const locpane = document.getElementById('localdiv')
const solidpane = document.getElementById('soliddiv')
const unsplashpane = document.getElementById('unsplash')
const radio1 = document.getElementById('radio1')
const radio2 = document.getElementById('radio2')
const tagdiv = document.getElementById('tagdiv')
const searchbar = document.getElementById('seachbar')
const body = document.getElementById('body')
const config = document.getElementById('config')
body.onload = load()
config.onclick = configp
paneout.onclick = configout

// updates the clock
const intervald = window.setInterval(() => {load()
},1000);

const checkinterval = window.setInterval(() => {checkboxd()
}, 100)



//load the variables need to show the clock and background
function load() {
    let msg = document.getElementById('hour')
    let img = document.getElementById('img')
    let data =new Date()
    let hour = (data.getHours() < 10? '0' : '') + data.getHours();
    let min = (data.getMinutes() < 10? '0' : '') + data.getMinutes();
    msg.innerText = `${hour}:${min}`
    document.body.background = 'https://source.unsplash.com/random/1920x1080/?Night'
    //Hide or show the taskbar according to the browser memory
    let searchstate = localStorage.getItem('searchbar')
    if (searchstate === 'on') {
        searchbar.hidden = false
    }

    if (searchstate === 'off') {
        searchbar.hidden = true
    } 
}



function configp() {
    pane.hidden = false
    paneout.hidden = false
}


function configout() {
    pane.hidden = true
    paneout.hidden = true
}


function checkboxd() {
    checkbox.addEventListener('change', function handleChange(event) {
        if (event.target.value = checkbox.checked) {
            localStorage.setItem('searchbar', 'on')
        } else {
            localStorage.setItem('searchbar', 'off')
        }
    })
}

searchbar.addEventListener('change', function handleChange(event){
    let searchtext = searchbar.value

    chrome.search.query({
        text:(searchtext)
})
})