var Javob = document.querySelector('#javob')
Javob.addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        Javobi()
    }
})
function wr(val){
    Javob.value += val;
}
function Javobi() {
    try {
        Javob.value = eval(Javob.value)
    }
    catch(error){
        let x = parseInt(Math.random() * val.length);
        Javob.value = (val[x].text)
    }
}
function ereser() {
    Javob.value = '';
}
var val = [
    {
        text: 'Notog`ri !!!'
    },
    {
        text: 'Xato !!!'
    },
    {
        text: "Error !!!"
    },
    {
        text: 'Adashdingiz !!!'
    },
    {
        text: 'Xato qildingiz !!!'
    },
    {
        text: 'Son yozing !!!'
    },
    {
        text: 'Son va  yozing !!!'
    }
];
function space() {
    Javob.value = Javob.value.slice(0, -1)
}