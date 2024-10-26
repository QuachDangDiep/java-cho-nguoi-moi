const unitTexts = [
    '',
    'một',
    'hai',
    'ba',
    'bốn',
    'năm',
    'sáu',
    'bảy',
    'tám',
    'chín',

];

const scaleTexts = [
    '',
    'nghìn',
    'triệu',
    'tỷ',
    'nghìn tỷ',
    'triệu tỷ',
    'tỷ tỷ',
];


function readThreeDigits(number, hasScale = false) {
    const absNumber = Math.abs(number);
    const hundreds = Math.floor(number / 100);
    const remainder = number % 100;
    const tens = Math.floor(remainder / 10);
    const units = remainder % 10;

    // console.log({absNumber, number, hundreds, remainder, tens, units});

    let result = "";

    if(hundreds > 0){
        result += unitTexts[hundreds] + " trăm ";
    } else if (hasScale && (tens > 0 || units > 0)) {
        result += "Không trăm";
    }

    if(tens > 1){
        result += unitTexts[tens] + " mươi ";
    } else if(tens === 1) {
        result += "mười ";
    } else if(hasScale && units > 0){
        result += 'lẻ'
    }
    
    if(tens > 1 && units === 1) {
        result += "mốt";
    } else if (tens > 0 && units === 5) {
        result += "lăm";
    } else if (units > 0) {
        result += unitTexts[units];
    }

    return result.trim();
}


function readNumber(number) {
    let result = "";
    let index = 0;
    let absNumber = Mathq.abs(number);

    if (!absNumber) return "không đồng";

    const lastIndex = Math.floor(String(absNumber).length / 3);

    do {
        const hasScale = index !== lastIndex;
        const threeDigits = readThreeDigits(absNumber % 1000, hasScale);

        if(threeDigits){
            result = `${threeDigits} ${scaleTexts[index]} ${result}`;
        }

        absNumber = Math.floor(absNumber / 1000);
        index++;
    } while (absNumber > 0);

    result = (number < 0 ? "âm " : "") + (result.trim() + " đồng");

    return result[0].toUpperCase() + result.slice(1);
}

console.log(readNumber(1234567)); //Một triệu hai trăm ba mươi bốn nghìn năm trăm sau mươi bảy đồng

// - 1: Một (triệu)
// - 234: hai trăm ba mươi bốn (nghìn)
// - 567:  năm trăm sau mươi bảy (đồng)
 
// console.log(readThreeDigits(1))  // một
// console.log(readThreeDigits(5))  // năm
// console.log(readThreeDigits(10)) // Mười
// console.log(readThreeDigits(11)) // mười một
// console.log(readThreeDigits(15)) // mười lăm
// console.log(readThreeDigits(21)) // hai mười mốt
// console.log(readThreeDigits(25)) // hai mười lăm
// console.log(readThreeDigits(100)) // một trăm
// console.log(readThreeDigits(123)) // một trăm hai mươi ba
// console.log(readThreeDigits(234)) // hai trăm ba mươi bốn





