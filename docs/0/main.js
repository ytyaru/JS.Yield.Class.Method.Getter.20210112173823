window.addEventListener('load', (event) => {
    let test = new YieldTest();
    console.log('----- Numbers');
    for (let n of test.Numbers) {
        console.log(n);
    }
    console.log('----- GetNumbers()');
    for (let n of test.GetNumbers()) {
        console.log(n);
    }
    console.log('----- GetNumbers(3, 5)');
    for (let n of test.GetNumbers(3, 5)) {
        console.log(n);
    }
});
