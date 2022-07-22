function mudarBorda(){
    const topL = document.querySelector(".top-left").value
    const box = document.querySelector(".radius-box")
    const topR = document.querySelector(".top-right").value
    const botL = document.querySelector(".bottom-left").value
    const botR = document.querySelector(".bottom-right").value

    box.style.borderTopLeftRadius = `${topL}px`
    box.style.borderTopRightRadius = `${topR}px`
    box.style.borderBottomLeftRadius = `${botL}px`
    box.style.borderBottomRightRadius = `${botR}px`

}

function copiar(){
    const topL = document.querySelector(".top-left").value
    const topR = document.querySelector(".top-right").value
    const botL = document.querySelector(".bottom-left").value
    const botR = document.querySelector(".bottom-right").value

    navigator.clipboard.writeText(`${topL}px ${topR}px ${botL}px ${botR}px`)
}