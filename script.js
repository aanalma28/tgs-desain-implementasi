const teleport = document.getElementById('teleport')
const kapal = document.getElementById('kapal')
const pegasus = document.getElementById('pegasus')

console.log(teleport)

teleport.addEventListener('click', () => {
    if(teleport.classList.contains('disabled')){
        teleport.classList.remove('disabled')
    }
    teleport.classList.add('fw-bold')
    teleport.style.color = '#7851A9'

    if(kapal.classList.contains('fw-bold')){
        kapal.classList.remove('fw-bold')
        kapal.style.color = "#757575"
    }
    if(kapal.classList.contains('disabled')){
        kapal.classList.remove('disabled')
        kapal.classList.add('disabled')
    }    

    if(pegasus.classList.contains("fw-bold")){
        pegasus.classList.remove('fw-bold')
        pegasus.style.color = "#757575"
    }
    if(pegasus.classList.contains('disabled')){
        pegasus.classList.remove('disabled')
        pegasus.classList.add('disabled')
    }    
})

kapal.addEventListener('click', () => {
    if(kapal.classList.contains('disabled')){
        kapal.classList.remove('disabled')
    }
    kapal.classList.add('fw-bold')
    kapal.style.color = '#7851A9'

    if(teleport.classList.contains('fw-bold')){
        teleport.classList.remove('fw-bold')
        teleport.style.color = "#757575"
    }
    if(teleport.classList.contains('disabled')){
        teleport.classList.remove('disabled')
        teleport.classList.add('disabled')
    }    

    if(pegasus.classList.contains("fw-bold")){
        pegasus.classList.remove('fw-bold')
        pegasus.style.color = "#757575"
    }
    if(pegasus.classList.contains('disabled')){
        pegasus.classList.remove('disabled')
        pegasus.classList.add('disabled')
    }    
})



pegasus.addEventListener('click', () => {
    if(pegasus.classList.contains('disabled')){
        pegasus.classList.remove('disabled')
    }
    pegasus.classList.add('fw-bold')
    pegasus.style.color = '#7851A9'

    if(kapal.classList.contains('fw-bold')){
        kapal.classList.remove('fw-bold')
        kapal.style.color = "#757575"
    }
    if(kapal.classList.contains('disabled')){
        kapal.classList.remove('disabled')
        kapal.classList.add('disabled')
    }    

    if(teleport.classList.contains("fw-bold")){
        teleport.classList.remove('fw-bold')
        teleport.style.color = "#757575"
    }
    if(teleport.classList.contains('disabled')){
        teleport.classList.remove('disabled')
        teleport.classList.add('disabled')
    }    
})



// JS untuk list hotel
const hotelList = document.getElementById('hotelList');
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// Fungsi untuk menggeser ke kiri
btnLeft.addEventListener('click', () => {
    hotelList.scrollBy({
        left: -200, // Geser 200px ke kiri
        behavior: 'smooth' // Efek smooth saat menggulir
    });
});

// Fungsi untuk menggeser ke kanan
btnRight.addEventListener('click', () => {
    hotelList.scrollBy({
        left: 200, // Geser 200px ke kanan
        behavior: 'smooth' // Efek smooth saat menggulir
    });
});