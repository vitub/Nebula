var intervald = window.setInterval(() => {load()

        

},1000);


function load() {
    var msg = document.getElementById('hour')
    var img = document.getElementById('img')
    var data =new Date()
    var hour = (data.getHours() < 10? '0' : '') + data.getHours();
    //var hour = data.getHours()
    var min = (data.getMinutes() < 10? '0' : '') + data.getMinutes();
    //var min = data.getMinutes()
    msg.innerHTML = `${hour}:${min}`
    document.body.style.backgroundColor = "black" 
    document.body.background = 'https://source.unsplash.com/random/1920x1080/?Night'  
    
    
}
