// Your code here
function saturdayFun(activity="roller-skate") {
return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office"){
return `This Monday, I will ${activity}.`

}

function wrapAdjective(symbol2='*'){
return (symbol='a hard worker')=> {return `You are ${symbol2}${symbol}${symbol2}!`}

}
console.log(wrapAdjective('symbol')('this is the sentence'))

const Calculator={
    add:function() {
        return 1 + 3;
    },

    subtract:function(){
        return 1-3;
    },

    multiply:function(){
        return 1 *3;
    },

    divide:function(){
        return 10/5
    }
};

function actionApplyer(a, array) {
    // array = [
    //     function(a){return a*2},
    //     function(a){return a+1000},
    //     function(a){return a % 7}
    // ]

    // let result = array[0](a)
    // result = array[1](result)
    // result = array[2](result)

    let result = a
    for (let i=0; i< array.length; i++){
        result = array[i](result)
    }

    return result
}


function loop(){
    const myArr = [1,3,5]
    const newArr = []
    for (let i=0; i < myArr.length; i++){
        const element = myArr[i]**2;
        newArr.push(element)
    }
    console.log(newArr)
}

loop()