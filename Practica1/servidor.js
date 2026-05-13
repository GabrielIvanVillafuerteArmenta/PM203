
console.log("Hola mundo js Servido")

/*medir el tiempo del proceso*/
console.time("miProceso")

for(let i =0; i< 1000000;i++){}

console.timeEnd("miProceso")

/*objetos tipo tabla*/
let usuarios=[
    {nombre:"Gabriel", edad: 25},
    {nombre:"ivan", edad: 25},
]

console.table(usuarios)