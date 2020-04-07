//console.log('working')
// fetch('http://puzzle.mead.io/puzzle').then((response)=>{
//     response.json().then((data)=>{
//         console.log(data)
//     })
// })



const formdata=document.querySelector('form')
const searchvalue=document.querySelector('input')
const message1=document.querySelector('#msg1')
const message2=document.querySelector('#msg2')

formdata.addEventListener('submit',(e)=>{
    e.preventDefault()
    const loc=searchvalue.value
    
    message1.textContent='loading'
    message2.textContent=''

    fetch('/weather?address='+loc).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            message1.textContent='error'
        }else{
        
        message1.textContent=data.lat+' and '+data.lan}
    })
})
})