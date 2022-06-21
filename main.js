const calculate = () => {
    let num1 = parseInt(document.getElementById("billValue").value);
    let num2 = parseInt(document.getElementById("personNum").value);
    let num3;

    num3 = num1 + num2;
    console.log(num3);
}






const btn1 = document.getElementById("num1");
btn1.addEventListener('click', calculate);