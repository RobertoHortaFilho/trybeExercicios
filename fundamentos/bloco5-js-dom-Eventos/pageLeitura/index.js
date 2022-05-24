
function saveConfig(e){
    e.preventDefault()
    const bgColor = document.getElementById('backgroundColor').value.trim()
    const textColor = document.getElementById('textColor').value.trim()
    const fontSize = document.getElementById('fontSize').value
    const space = document.getElementById('space').value
    const fontFamily = document.getElementById('fontFamily').value.trim()

    const cfgS = localStorage.getItem('pageCfg')
    const cfg = JSON.parse(cfgS)

    cfg.bg = bgColor || cfg.bg
    cfg.color = textColor || cfg.color
    cfg.fs = fontSize || cfg.fs
    cfg.space = space || cfg.space
    cfg.ff = fontFamily || cfg.ff


    localStorage.setItem('pageCfg', JSON.stringify(cfg))
    reloadStyles()
}



function reloadStyles(){
    const cfgString = localStorage.getItem('pageCfg')
    const cfg = JSON.parse(cfgString)
    
    const corpoHTML = document.getElementsByTagName('body')[0]
    console.log(cfg.color)
    corpoHTML.style.color = cfg.color
    corpoHTML.style.backgroundColor = cfg.bg
    corpoHTML.style.fontSize = cfg.fs + 'px'
    corpoHTML.style.lineHeight = cfg.space + 'px'
    corpoHTML.style.fontFamily = cfg.ff

    console.log(cfg)
}










window.onload = ()=>{
    if (localStorage.getItem('pageCfg') == undefined){
        localStorage.setItem('pageCfg', JSON.stringify({
            'bg': 'white',
            'color': 'red',
            'fs': 10,
            'space': 15,
            'ff': 'arial'
        }))
    }
    reloadStyles()

    const submit = document.getElementById('submit')
    submit.addEventListener("click", saveConfig)
}