function cake(input) {
    let index = 0; // индекса ми почва от 0

    let width = Number(input[index]); // от 0 индекс взимам широчината на тортата
    index++; // веднага инкрементирам индекса за да мога после да си го взема диреткно.

    let length = Number(input[index]); // вече индекса ми е 1 от него взимам дължината на тортата
    index++; // и веднага инкрементирам за да мога после пак да си го взема директно.

    let cakeSize = width * length; // изчислявам големината на тортата тоест тя е 100 парчета.

    let totalTaken = 0; // тук си създавам променлива общо взети парчета която почва от нула тъй като после ще правя проверката

    while (cakeSize >= totalTaken) { // докато големината на тортата е по голяма или равна на взетите парчета то цикала ще се повтаря
        let action = input[index]; // тази променлива е колко парчета се взимат която взимам от вече увеличения индекс като може и да има команда Stop затова още не съм я преобразувал в Number
        index++; // тук веднага инкрементирам индекса за да мога после да си го взема директно
        
        if (action === "STOP") { // тук проверка дали променливата е Stop`a който горе споменах
            break; // ако е true то тогава да прекрати цикъла
        }

        action = Number(action); // ако не е Stop то тогава я превръщам в число за да правя изчисленията
        totalTaken = totalTaken + action; // взетите парчета който съм създал като променлива с стойност 0 към тях ще се добавят парчетата който действително вече сме взели
    
    }
    
    if (totalTaken > cakeSize) { // извън скоупа ако искаме да вземем повече парчета от колкото е тортата 
        let cakeNeed = totalTaken - cakeSize; // то тогава за да намеря колко ни трябват още създавам променлива която ще бъде от парчетата който искам да взема ще извадя големината на тортата и ще видя колко парчета са нужни.
        console.log(`No more cake left! You need ${cakeNeed} pieces more.`) // и логвам.
    } else { // ако пък останат парчета торта
        let cakeLeft = cakeSize - totalTaken; // то тогава от големината на тортата вадя парчетата който са взети 
        console.log(`${cakeLeft} pieces are left.`); // и логвам.
    }


}

cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"]);