//document.write("Merhaba");

//HTMl tarafından eleman çekerken uyulacak aşamalar

//1-çekilecek eleman için bir değişken tanımlıyoruz(tryDiv)
//2-değişkenimize değer olarak document içierisinden verilen id vyea class ile elemeanı çekiyoruz(newDiv)
//3 ****EN ÖNEMLİSİ****
//çekilen elemanın atandığı değişkeni consolo yazadıryoruz ve orda elemanızı görmeliyiz (console.log(tryDiv))


const tryDiv = document.getElementById("newDiv");
console.log(tryDiv)
tryDiv.innerText="deneme"
tryDiv.innerHTML=`<p>hem text hem de html tag</p>`

const myNameElement = document.querySelector('#nameElement');
//console.log(myNameElement);

let newName = 'Hasan';
let last = 'Çelik'
myNameElement.innerText  = newName;

const myLastNameElement = document.getElementById('lastNameElement');
console.log(myLastNameElement);

myLastNameElement.innerHTML=`<h1>${last}</h1>`;

const pElementId = document.getElementById('pTagId');
//console.log(pElementId);
const pElementClass = document.getElementsByClassName('pTagClass');
//console.log(pElementClass);

const divElementId = document.querySelector('#divId');
//console.log(divElementId);

const divElementClass = document.querySelector('.divClass');
//console.log(divElementClass);

const changeName = (willName) =>{
    myNameElement.innerText = `${willName}`
};
myNameElement.addEventListener("click",()=>{
    changeName('Ayzıt');
})