let btnsyb=document.getElementById("sub")
btnsyb.addEventListener("click",(e)=>{
    e.preventDefault()
let tit=document.getElementById("title").value
let dec=document.getElementById("dec").value
localStorage.setItem("note",JSON.stringify({tit,dec}))
})


console.log(localStorage.getItem("note"))
