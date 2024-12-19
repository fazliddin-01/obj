let obj = {};

function name() {
    for (let i = 0+1; i <= 10; i++) { 
        let foyda = `Foydalanuvchi ${i}`;
        let ism = prompt("Ismingizni kiriting", "name");
        let yowi = +prompt("Yoshingizni kiriting", "35");
        if (ism) {
            obj[foyda] = { ism: ism, yosh: yowi }; 
            // console.log(foyda);
            // console.log("Ismingiz:", ism);
            // console.log("Yoshingiz:", yowi);
        }
    }

    

    return obj;
}

console.log(name());