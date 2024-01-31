// 2)შექმენით ფუნქცია სადაც ერთ ფუნქციას გამოიყენებთ მოერე ფუნქციის პარამეტრად და if
// else მეშვეობით დაბეჭდეთ რამე ინფორმაცია (მაგ: თუ რამე ნივთის ფასი
// მაღაზიაში არის 50 ლარზე მეტი ესეიგი ძვირია თუ 20-50 დიაპაზონშია მოქცეული
// საშუალო თუ ნაკლები იაფი)

// function display(x,secondfunc){
// }

// function shefasebisfunc(price){
// }

// display ()


const display = (x, secondfunc) => {
    // დაბეჭდვა წყლის მონაცემების მიხედვით. გამოიყენება მიღებული ფუნქცია, რათა დაიბეჭდოს custom შეფასება

    document.write("წყლის ბრენდი არის: "+ x[0] + "<br>" + 
                    "ფასია: " + (x[1]/100) + "ლ ანუ " + x[1] +"თ" + "<br>" + 
                    "შეფასება არის: " + secondfunc(x) + "<br>" + "<br>");
}
const shefasebisfunc = (drink) => {
    // ფასების შედარება თეთრებში
    if (drink[1] > 50) {
        return "გაძვირდა წყალი"
    }
    else if (drink[1] >= 20 && drink[1] <= 50) {
        return "კაი ფასია"
    }
    else {
        return "ბარემაც მთლიანად წამოიღე"
    }
}


const water1 = ["Bakuriani", 110];
const water2 = ["Borjomi", 50];
const water3 = ["წყაროს წყალი", 0];
display(water1, shefasebisfunc);
display(water2, shefasebisfunc);
display(water3, shefasebisfunc);

