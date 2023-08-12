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
myNameElement.innerText  = newName;

const pElementId = document.getElementById('pTagId');
//console.log(pElementId);
const pElementClass = document.getElementsByClassName('pTagClass');
//console.log(pElementClass);

const divElementId = document.querySelector('#divId');
//console.log(divElementId);

const divElementClass = document.querySelector('.divClass');
//console.log(divElementClass);