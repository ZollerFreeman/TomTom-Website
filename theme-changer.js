let theme = localStorage.getItem('theme')

if(theme == null){
    setTheme('blue')
}else{
    setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')

for (var i=0; themeDots.length > i; ++i){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        setTheme(mode)
    })
}

function setTheme(mode){
    let path =  'css/' + mode + '.css'   
    document.getElementById('theme-style').href = path
    localStorage.setItem('theme', mode)
}