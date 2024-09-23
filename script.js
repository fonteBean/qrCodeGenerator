

const container = document.querySelector(".container")
const inpt = document.querySelector(".qr-form input")
const btn = document.querySelector(".qr-form button")
const qrImage = document.querySelector(".qr-div img")



// Função Gerar Qr Code
    function gerarQrCode(){
        inpt_value = inpt.value
        if (!inpt_value) return;

        btn.innerText = "Gerando código..."
        
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inpt_value}`
        qrImage.addEventListener("load", ()=>{
            container.classList.add("active")
            btn.innerText = "Código Gerado!"
        })
    }

// Eventos
btn.addEventListener("click", () =>{
    gerarQrCode()
})

inpt.addEventListener("keydown", (e) =>{
    if (e.code === "Enter"){
        gerarQrCode()
    } 
})

inpt.addEventListener("keyup", () =>{
    if(!inpt.value){
        container.classList.remove("active")
        btn.innerText = "Gerar Código"
    }
})
