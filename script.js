let text=document.getElementById("text");
let img=document.getElementById("im");
let g=document.getElementById("b");
let main=document.querySelector("main");
let d=document.getElementById("down");

function GenerateQr(){
if(text.value==""){
    text.classList.add('error'); ;
    setTimeout(() => {
        text.classList.remove('error'); 
    }, 1000);
 
}
else if(text.value.length > 0){
    g.textContent="Generating..."
    img.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+text.value

    main.classList.add("show")

    img.onload=()=>{
        g.textContent="Generate"
        text.value=""
    }

}
}

d.addEventListener("click",()=>{
    fetch(img.src)
    .then(response=>{
        return response.blob()
    })
    .then(blob=>{
        let url=URL.createObjectURL(blob)
        let a=document.createElement("a")
        a.href=url
        a.download="QRcode"
        a.click()
    })
})
