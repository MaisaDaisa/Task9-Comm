// 1)შექმენით ერთ განზომილებიანი მსაივი 
// საიდანაც for ციკლის მეშვებოთ დაბეჭდავთ 
// მასივში არსებულ ყველა ელემენტს




const getRandomIntChatvlit = (min, max) => {
    const minceil = Math.ceil(min);
    const maxfloor = Math.floor(max);
    return Math.floor(Math.random() * (maxfloor - minceil + 1) + minceil);
}

const randMas = (mas, func) => {


    // მასივის არჩევა მომხმარებლის მიერ
    size = prompt("ჩაწერე მასივის ზომა")
    min = prompt("ჩაწერე მინიმალური რიცხვი")
    max = prompt("ჩაწერე მაქსიმალური რიცხვი")

    //მასივის შევსება მიღებული დიაპაზონებით
    for (let i = 0; i < size; i++) {
        mas[i] = func(min, max)
    }
    return mas
}

const printMas = (mas) => {
    //მასივის დაბეჭდვა
    document.write(mas)
}

const printEachMasElement = (mas) => {
    //მასივის ელემენტების ინდივიდუალური დაბეჭდვა
    for (let i = 0; i < mas.length; i++) {
        document.write(mas[i] + "<br>")
    }
}

const choosePrint = (mas, func1, func2) => {
    //არჩევანი დაბეჭდვის ხერხთა შორის
    var choice = -1
    while (choice != 0 && choice != 1) {
        choice = prompt("დაბეჭდოს მასივი | დაბეჭდოს ელემენტები (პას: 0 / 1 )")
        if (choice == 0) {
            func1(mas)
        }
        else if (choice == 1) {
            func2(mas)
        }
        else {
            alert("აირჩიე 0 ან 1 ეგრე არ მოსულა")
        }
    }
}      

// Export functions // ----------------------------------------------------------------------------------------------

// export { randMas } 

// MAIN // ----------------------------------------------------------------------------------------------

let mas = []
randMas(mas, getRandomIntChatvlit)
choosePrint(mas, printMas, printEachMasElement)



