// მოცემული მასივიდან [ 15,53,22,198,10,28,16,70,33,951 ] დაბეჭდეთ ყველაზე დიდი რიცხვი

// import { randMas } from './../1/1.js'

// const choice = (func1, func2) => {
//     //არჩევანი დაბეჭდვის ხერხთა შორის
//     var choice = -1
//     while (choice != 0 && choice != 1) {
//         choice = prompt("პრიმიტიული გზით | პირველი სავარჯიშოთი (პას: 0 / 1 )")
//         if (choice == 0) {
//             func1()
//         }
//         else if (choice == 1) {
//             func2()
//         }
//         else {
//             alert("აირჩიე 0 ან 1 ეგრე არ მოსულა")
//         }
//     }
// }   

const primitiuliGza = () => {
    let mas = [15,53,22,198,10,28,16,70,33,951]
    let max = mas[0]
    for (let i = 0; i < mas.length; i++) {
        if (mas[i] > max) {
            max = mas[i]
        }
    }
    document.write("მასივიდან ყველაზე დიდი რიცხვია: " + max)
}

// const pirveliSavajisho = () => {
//     let mas = randMas()
//     let max = mas[0]
//     for (let i = 0; i < mas.length; i++) {
//         if (mas[i] > max) {
//             max = mas[i]
//         }
//     }
//     document.write("მასივიდან ყველაზე დიდი რიცხვია: " + max)
// }

// choice(primitiuliGza, pirveliSavajisho);

primitiuliGza()