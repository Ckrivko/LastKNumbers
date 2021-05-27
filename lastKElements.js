function lastKElement(n, k) {
    let arrLength = Number(n);
    let elementsToSum = Number(k);

    let newArr = [];
    newArr.push(1);

    for (let i = 1; i < arrLength; i++) {

        let sum = 0;

        for (let j = 0; j < elementsToSum; j++) {

            if (i - j - 1 < 0) {

                break;
            }

            sum += newArr[i - j - 1];
        }

        // console.log(sum);
        newArr.push(sum);
    }
    console.log(newArr.join(" "))
    return newArr;
}
//lastKElement(6, 3);
