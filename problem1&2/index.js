// ======Problem 1 Reverse number======

const numEx = 123;
const numEx1 = -123;
const numEx2 = 1111;
const numEx3 = 0;

function reverseNumber(num){
    let revNum = 0;
    if(typeof num == "number")
    {
        while( num!=0 ){
            revNum = revNum * 10 + num % 10;
            num = parseInt(num / 10);
        }
    }
    console.log(`result : ${revNum}`);
}

reverseNumber(numEx);
reverseNumber(numEx1);
reverseNumber(numEx2);
reverseNumber(numEx3);

// ====== Problem 2: Roman number to Integer number======
function findKeyRoman(keyRoman){
    switch(keyRoman){
        case "I" : return 1;
        break;
        case "V" : return 5;
        break;
        case "X" : return 10;
        break;
        case "L" : return 50;
        break;
        case "C" : return 100;
        break;
        case "D" : return 500;
        break;
        case "M" : return 1000;
        break;
        default : return -1;
    }
}

const s = "III";
const s1 = "IV"
const s2 = "IX";
const s3 = "LVIII";
const s4 = "MCMXCIV";

function romanToInt(roman){
   let arrRoman = roman.toUpperCase().split("");
   console.log(arrRoman);
   let res = 0;
   for(let i = 0 ; i < arrRoman.length ; i++)
   {
        let number;

        if(findKeyRoman(arrRoman[i])!= -1)
        number = findKeyRoman(arrRoman[i]);
        else return;

        let afterKey;
        if(arrRoman.length > (i +1) )
        {
            if(findKeyRoman(arrRoman[i+1]) != -1)
            afterKey = findKeyRoman(arrRoman[i+1]);
            else
            return;
        }
        else{
            afterKey = -1;
        }

        if(number < afterKey && afterKey != -1)
        {
            afterKey -= number;
            i++;
            res += afterKey;
        }
        else{
            res += number;
        }    
   }
   console.log(res);
}

romanToInt(s);
romanToInt(s1);
romanToInt(s2);
romanToInt(s3);
romanToInt(s4);


// ======= Integer number to Roman number =====
function intToRoman(num)
{
    if(typeof num != "number")
    return;
     
    let arrRoman = [["I","V","X"],["X","L","C"],["C","D","M"],["M"]];
    let arrType = [[1],[1,1],[1,1,1],[2,1],[2],[2,1],[2,1,1],[2,1,1,1],[1,3]];
    let res = [];
    let count = 0 ;

    while(num != 0 ){
        let arrtemp = [];
        if(count < 3 )
        {
            let temp = num % 10 ;
            num = parseInt(num / 10);
            arrType[temp-1].forEach((ele)=>{
                arrtemp.push(arrRoman[count][ele-1]);
            })
            res = arrtemp.concat(res);
            count++;
        }
        else{
            console.log(num);
            for(let i = 1 ; i <= num ; i++)
            {
                let temp = [];
                temp.push(arrRoman[3]);
                res = temp.concat(res);
            }
            num = 0;
        }
    }    
    console.log(res.join(""));
    
}

intToRoman(1997);

function timeConversion(s){
    let str = s.slice(-2);
    let time = s.slice(0,-2);
    let strTime = time.split(":");
    if(str == "AM")
    {
        if(strTime[0] == "12")
        {
            strTime[0] = "00";
            time = strTime.join(":");
            return time;
        }
        else{
            return time;
        }
    }else{
        strTime[0] = (parseInt(strTime[0])+12);
        time = strTime.join(":");
        return time;
    }
    
}

console.log(timeConversion("12:20:00PM"));