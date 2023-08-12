# JavaScript Fonksiyonlar, İç İçe Fonksiyonlar ve Global Değişken Dersi, 08.08.2023

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. Inevitably, this means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.

## CallBack Functions

A callback is a function passed as an argument to another function
This technique allows a function to call another function
A callback function can run after another function has finished

//Veri tabanlarına ,API lara , Server taraflarına veri almak için kullanılan fonskiyonlar asenkron fonksiyondur
//eğer fonksiyon function x(){} şeklinde tanımlıynursa başına async ifadesi gelir
//async function x(){}
//eğer fonskiyon const x =()=>{} şeklinde tanımlanmışsa
//const x=async()=>{} şeklinde yazılır