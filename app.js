/*let a = 2;
const myFunction = ()=>{
    let b=5;//local variable
    document.write(`MyFunction içindeki b değeri-> ${b} <br>`);
    return b*b;
}
myFunction();
document.write(myFunction());*/
//document.write(a);
//document.write(b);//b lokal değiken olduğundan dokümanda yazılmayacak

/* let counter = 0;

function add(){
    counter++;
    document.write(`${counter} <br/>`);
}
add();
add(); */

/*let counter = 0;
function add(){
    let counter = 0;
    counter +=1;
    document.write(`Fonksiyon içindeki counter ${counter} <br/>`);
}
document.write(`Counter ${counter} <br/>`);
add();*/

//İç içe fonksiyonlar

/* const add = () => {
      document.write(`add Fonksiyonunu çalıştırıdım`);
    
      let counter = 0; //add fonskiyonu içinde local bir counter değişkeni oluştruyoruz
      document.write(` <br/> counter değişkenini ${counter} olarak hafızama aldım`);
    
      //burda counter +1 artıracak fonksşyonu tanımlıyoruz
    
      const plus = () => {
        document.write("<br/> plus fonksiyonu çalıştırdım 1.çalışıyor "); //1
        counter += 1;
      };
      document.write("<br/>plus fonksiyonu hafızama aldım 2.çalışıyor"); //2
    
      //plus fonksiyonunu çalıştıryoruz
      plus();
      document.write(counter);
      document.write(`<br/>counter değişkenini ${counter} olarak değiştirdim`);
    };
    
    //JavaScriptte çalışmasını istemediğimiz kodları yorum satırna // işaretle alıyoruz
    
    add() */

/*
//Burada içine aldığı değeri ekrana basan fonksiyon tanımlıyoruz
const ekranaBasanFonksiyon = (basilacakArgument) => {

    document.write(`<br/> ${basilacakArgument}`)

}
const secondFunc = () => {
    ekranaBasanFonksiyon('ikinci fonksiyon')
}

const firstFunc = () => {

    //burada yukarda tanımladığımız fonksiyonu çalıştıırp içine basılacak ifadeyi giryuz
    ekranaBasanFonksiyon('birinci Fonksiyon')
}

//JavaScriptte tanımlandığı sıraya göre değil çağrıldığı sıraya göre çalışır

firstFunc()
secondFunc()*/

/* //Burada içine aldığı değeri ekrana basan fonksiyon tanımlıyoruz
const ekranaBasanFonksiyon = (basilacakArgument) => {
  document.write(`<br/> ${basilacakArgument}`);
};

const hesablayici = (sayi1, sayi2) => {
  let toplam = sayi1 + sayi2;

  ekranaBasanFonksiyon(toplam);
};

hesablayici(5, 2); */

/* Callback Functions */
/* const myNumbers = [4, 1, -20, -7, 5, 9, -6];

function RemoveNegativeNumbers(negativeNumbers, negativeNumberRemoverCallback) {
    const positiveNumbers = [];
    for (const sayi of negativeNumbers) {
        if (negativeNumberRemoverCallback(sayi)) {
            positiveNumbers.push(sayi);
        }
    }
    return positiveNumbers;
}
const positiveNumbers = RemoveNegativeNumbers(myNumbers,(x) =>x>=0);

document.write(`Posiztive Numbers->${positiveNumbers}`); */

/*
//const ile arrow function tanımladığımızda, setTimeout öncesi myFunction tanımlanmalı
const myFunction = () =>{
    document.write(`<br/>1sn sonra Çalıştım!`);
}
//setTimeout(myFunction, 1000);

//veya
//function ile tanımladığımızda, setTimeout öncesi/sonrası myFunction tanımlanmalı

//setTimeout(myFunction2, 2000);
function myFunction2(){
    document.write(`<br/>2sn sonra Çalıştım!`);
}

//trick:Aşağıdaki gibi bir çağırma yapılırsa, fonksiyon hemen çağrılacağı için, 5s. sonra çalıştım ifadesi hemen ekranda görünür, 5 sn beklemez

setTimeout(myFunction(),1000);
document.write(`<br/>1sn sonrasında da ben Çalıştım!`);*/

    
/*     const myFunction = (params) => {
        document.write(`${params}`)
      }
    
    setTimeout(()=>{myFunction('Hello World')}, 3000); */

/*     function CreateDateTime(){
        let dateTime = new Date();
        let saniye = dateTime.getSeconds();
        document.write(`${dateTime.getHours()}:${dateTime.getMinutes()}:${saniye<10?"0" + saniye : saniye}<br\>`)
    }
    setInterval(CreateDateTime,1000) */

    //Promise Fonksiyonlar

    

/*     const displayer = (willDisplay)=>{
        document.write(`${willDisplay}`);
    };

    let myPromise = new Promise(function(myResolve,myReject){
        let x = 0;
        if(x==0){
            myResolve("x is zero");
        }
        else
            myReject("Error");
    });

myPromise.then((sonuc)=>displayer(sonuc)).catch((error)=>displayer(error)); */

//Veri tabanlarına ,API lara , Server taraflarına veri almak için kullanılan fonskiyonlar asenkron fonksiyondur
//eğer fonksiyon function x(){} şeklinde tanımlıynursa başına async ifadesi gelir
//async function x(){}
//eğer fonskiyon const x =()=>{} şeklinde tanımlanmışsa
//const x=async()=>{} şeklinde yazılır

//ve fonksiyon içerisinde beklenen sonuçlara await eklenir

// async function myFunction1(){
//     let response= await Promise;
//     return 'Merhaba'
// }

// function myFunction2(){
//     return Promise.resolve('Hello')
// }