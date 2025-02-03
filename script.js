// let course = "matematik"

// switch (course) {
//     case "matematika":
//         console.log("matematika kursiga qo'shildiz");
//         break;


//         case "tarix":
//          console.log("tarix kursiga qo'shildiz");
//         break;

//         default:
//             console.log("kursga yoziling");


// }


// let savol = prompt("darajangizni kiriting")

// let midel = 'Midel'
// let junior = 'Junior'
// let sineor = 'Sineor'

// let level = savol

// switch (level) {
//     case '1':
//     case '2':
//     case '3':
//     case '3':
//     case '5':
//         console.log(`<h1>${midel}</h1>`);
//         break;
//     case '6':
//     case '7':
//     case '8':
//     case '9':
//     case '10':
//         console.log(`<h1>${junior}</h1>`);
//         break;

//     case '11':
//     case '12':
//     case '13':
//     case '14':
//     case '15':
//         console.log(`<h1>${sineor}</h1>`);
//         break;

//     default:
//         console.log("levelingiz noaniq");

// }



let minAge = '18'
let BrendCars = ['1.Audi: 55.000$', ' 2.MERS: 60.000$', ' 3.BUGATTI: 45.000$', ' 4.PORCE: 20.000$', ' 5.Jeaur: 30.000$', ' 6.LOMBARGIHNI: 31.000$', ' 7.GENTRA: 15.000$']
let minBalans = '15000'

let A = 'Audi 55.000$';
let audiPrice = '55000'
let M = 'MERS 60.000$';
let mersPrice = '60000'
let B = 'BUGATTI 45.000$';
let bugattiPraic = '45000'
let P = 'PORCE 20.000$';
let porcePrice = '20000'
let J = 'Jetaur 30.000$';
let jetaurPrice = '30000'
let L = 'LOMBARGIHNI 31.000$';
let lombargihniPrice = '31000'
let G = 'GENTRA 15.000$';
let gentraPrice = '15000'

let yes = 'yes'
let no = 'no'

let UserName = prompt("Salom Xurmalti mijoz: ismingizni kiriting");

if (UserName === UserName) {
    console.log(`name:${UserName},`);
    console.log("ismingiz muofiqyatli ro'yxatdan o'tdi");
    let promptAge = prompt("Yoshingizni kiriting:");

    if (minAge <= promptAge) {
        console.log(`UserAge:${promptAge},`);
        console.log("yoshingiz muofiqyatli ro'yxatdan o'tdi");

        let promptBalans = prompt("Balasningizga 15.000$ko'p mabilag' bo'lsihi kerak Balansingizni kiriting $");
        if (minBalans <= promptBalans) {
            console.log(`Balanse:${promptBalans}$`);

            console.log("!!!   Dasturga Xush kelibsiz  !!!");
            console.log("Bizning avto salonimzdan siga yoqqan mashinnagizni xarid qilishingiz mumkin!");
            console.log(`${BrendCars}`);
            console.log("Qaysi mashinani xarid qilmoqchi bo'lsangiz raqam orqali beldilang");

            let idCar = prompt("tanlagan mashina raqamini yozing!!")

            switch (idCar) {
                case '1':
                    console.log(`ajoyib siz tanlagan mashina: ${A}`);
                    let ansverYesNo = prompt(`siz ushbu mashinani olmoqchimi siz ${A} ( yes / no ) yozing`);
                    if (ansverYesNo === yes) {
                        let Igetcar = promptBalans - audiPrice
                        if (Igetcar >= 0) {
                            console.log(`siz ${A} mashinasi egasizga aylandingiz tabriklaymiz`);
                            console.log(`sizning qolgan balansingiz: ${Igetcar}$`);
                            console.log("xaridingiz uchun rahmat");

                        } else {
                            console.log("mijoz mashinani sotib olish uchun mabilag'ingiz yetarli emas");

                        }
                    } else if (ansverYesNo === no) {
                        console.log("Bizning avto salonimzdan siga yoqqan mashinnagizni xarid qilishingiz mumkin!");
                        console.log(`${BrendCars}`);
                    } else {
                        console.log("to'g'ri javob bermadingiz");

                    }

                    break;
                case '2':
                    console.log(`ajoyib siz tanlagan mashina: ${M}`);
                    let ansverYesNo2 = prompt(`siz ushbu mashinani olmoqchimi siz ${M} ( yes / no ) yozing`);
                    if (ansverYesNo2 === yes) {
                        let Igetcar = promptBalans - mersPrice
                        if (Igetcar >= 0) {
                            console.log(`siz ${M} mashinasi egasizga aylandingiz tabriklaymiz`);
                            console.log(`sizning qolgan balansingiz: ${Igetcar}$`);
                            console.log("xaridingiz uchun rahmat");

                        } else {
                            console.log("mijoz mashinani sotib olish uchun mabilag'ingiz yetarli emas");

                        }
                    } else if (ansverYesNo === no) {
                        console.log("Bizning avto salonimzdan siga yoqqan mashinnagizni xarid qilishingiz mumkin!");
                        console.log(`${BrendCars}`);
                    } else {
                        console.log("to'g'ri javob bermadingiz");

                    }
                    break;
                case '3':
                    console.log(`ajoyib siz tanlagan mashina: ${B}`);
                    let ansverYesNo3 = prompt(`siz ushbu mashinani olmoqchimi siz ${B} ( yes / no ) yozing`);
                    if (ansverYesNo3 === yes) {
                        let Igetcar = promptBalans - bugattiPraic
                        if (Igetcar >= 0) {
                            console.log(`siz ${B} mashinasi egasizga aylandingiz tabriklaymiz`);
                            console.log(`sizning qolgan balansingiz: ${Igetcar}$`);
                            console.log("xaridingiz uchun rahmat");

                        } else {
                            console.log("mijoz mashinani sotib olish uchun mabilag'ingiz yetarli emas");

                        }
                    } else if (ansverYesNo === no) {
                        console.log("Bizning avto salonimzdan siga yoqqan mashinnagizni xarid qilishingiz mumkin!");
                        console.log(`${BrendCars}`);
                    } else {
                        console.log("to'g'ri javob bermadingiz");

                    }
                    break;
                case '4':
                    console.log(`ajoyib siz tanlagan mashina: ${P}`);
                    let ansverYesNo4 = prompt(`siz ushbu mashinani olmoqchimi siz ${P} ( yes / no ) yozing`);
                    if (ansverYesNo4 === yes) {
                        let Igetcar = promptBalans - porcePrice
                        if (Igetcar >= 0) {
                            console.log(`siz ${P} mashinasi egasizga aylandingiz tabriklaymiz`);
                            console.log(`sizning qolgan balansingiz: ${Igetcar}$`);
                            console.log("xaridingiz uchun rahmat");

                        } else {
                            console.log("mijoz mashinani sotib olish uchun mabilag'ingiz yetarli emas");

                        }
                    } else if (ansverYesNo === no) {
                        console.log("Bizning avto salonimzdan siga yoqqan mashinnagizni xarid qilishingiz mumkin!");
                        console.log(`${BrendCars}`);
                    } else {
                        console.log("to'g'ri javob bermadingiz");

                    }
                    break;
                case '5':
                    console.log(`ajoyib siz tanlagan mashina: ${J}`);
                    let ansverYesNo5 = prompt(`siz ushbu mashinani olmoqchimi siz ${J} ( yes / no ) yozing`);
                    if (ansverYesNo5 === yes) {
                        let Igetcar = promptBalans - jetaurPrice
                        if (Igetcar >= 0) {
                            console.log(`siz ${J} mashinasi egasizga aylandingiz tabriklaymiz`);
                            console.log(`sizning qolgan balansingiz: ${Igetcar}$`);
                            console.log("xaridingiz uchun rahmat");

                        } else {
                            console.log("mijoz mashinani sotib olish uchun mabilag'ingiz yetarli emas");

                        }
                    } else if (ansverYesNo === no) {
                        console.log("Bizning avto salonimzdan siga yoqqan mashinnagizni xarid qilishingiz mumkin!");
                        console.log(`${BrendCars}`);
                    } else {
                        console.log("to'g'ri javob bermadingiz");
                    }
                case '6':
                    console.log(`ajoyib siz tanlagan mashina: ${L}`);
                    let ansverYesNo6 = prompt(`siz ushbu mashinani olmoqchimi siz ${L} ( yes / no ) yozing`);
                    if (ansverYesNo6 === yes) {
                        let Igetcar = promptBalans - lombargihniPrice
                        if (Igetcar >= 0) {
                            console.log(`siz ${L} mashinasi egasizga aylandingiz tabriklaymiz`);
                            console.log(`sizning qolgan balansingiz: ${Igetcar}$`);
                            console.log("xaridingiz uchun rahmat");
                            
                        }else{
                            console.log("mijoz mashinani sotib olish uchun mabilag'ingiz yetarli emas");
                            
                        }
                    } else if (ansverYesNo === no) {
                        console.log("Bizning avto salonimzdan siga yoqqan mashinnagizni xarid qilishingiz mumkin!");
                        console.log(`${BrendCars}`);
                    } else {
                        console.log("to'g'ri javob bermadingiz");
                        
                    }
                    break;
                case '7':
                    console.log(`ajoyib siz tanlagan mashina: ${G}`);
                    let ansverYesNo7 = prompt(`siz ushbu mashinani olmoqchimi siz ${G} ( yes / no ) yozing`);
                    if (ansverYesNo7 === yes) {
                        let Igetcar = promptBalans - gentraPrice
                        if (Igetcar >= 0) {
                            console.log(`siz ${G} mashinasi egasizga aylandingiz tabriklaymiz`);
                            console.log(`sizning qolgan balansingiz: ${Igetcar}$`);
                            console.log("xaridingiz uchun rahmat");
                            
                        }else{
                            console.log("mijoz mashinani sotib olish uchun mabilag'ingiz yetarli emas");
                            
                        }
                    } else if (ansverYesNo === no) {
                        console.log("Bizning avto salonimzdan siga yoqqan mashinnagizni xarid qilishingiz mumkin!");
                        console.log(`${BrendCars}`);
                    } else {
                        console.log("to'g'ri javob bermadingiz");
                        
                    }
                    break

                default:
                    console.log("sinz notog'ri mashina raqamini tanladingiz");

                    break;
            }

        } else {
            console.log("balansingiz yetarli emas");

        }


    } else {
        console.log("yetarli emas 18+");

    }

} else {
    console.log("ismingizni kiritig");

}


console.log("Hayotda ham SHunaqa mashinani tez olsamda 😂😂😂");







