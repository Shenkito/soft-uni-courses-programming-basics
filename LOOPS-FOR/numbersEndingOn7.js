function numbersEndingOn7() {

    for (let i = 1; i <= 1000; i = i + 1) { // последното може i++
        if (i % 10 === 7) { // на 10 ако искаме да вземем остатъка от всяко число , тук е дали числото завършва на 7 ако искам да видя дали завърва на 8 пак е % 10 === 8
            console.log(i);
        }
    }
}

numbersEndingOn7();