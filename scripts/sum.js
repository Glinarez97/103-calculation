function sum(){
    //getting a
    let a=prompt("Enter the first value (a):");
    //getting b
    let b=prompt('Enter the second value (b):');
    //sum
    let total;
    total=Number(a)+Number(b);
    //displat the result
    console.log(total);
}

function mult(){

    let a=prompt("Enter the first value (a):");

    let b= prompt("Enter the second value (b)");

    let total;
    total=Number(a)* Number(b);

    console.log(total);

}

function temp(){
    let f = prompt("Enter fahrenheit value:");
    let c = prompt("Enter celcius value:");

    let f;
    f= ((c * 9) / 5 + 32);
    
    console.log(f);
}
