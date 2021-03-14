const textid=document.getElementById('text')
const labelid=document.getElementById('speeds')

const displaytext='Hello Astha!!!'
let speed=300/(labelid.value)
let index=1
display()

function display()
{
    textid.innerHTML=displaytext.slice(0,index)
    index++

    if (index > displaytext.length)
    {
        index=1
    }
    setTimeout(display,speed)
}
labelid.addEventListener('input',(e)=>{
    speed= 300/e.target.value
})
