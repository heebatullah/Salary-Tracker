document.getElementById("budget").innerText = "SALARY TRACKER";
document.getElementById("expenses").innerText = "EXPENSES";
document.getElementById("expenses").style.textDecoration = "underline";

document.getElementById("submit").onclick = function () {
    var salary = document.getElementById("salary").value;

    salary = document.getElementById("salary").value;
    console.log(salary)
    document.getElementById("before").innerText = "Salary before deduction" + "Ksh" + "" + salary;
    console.log("salaryRemaining;", + ":" , salary );

    let expense = document.getElementById("rentInput").value;
    document.getElementById("rent").innerText = "Rent:" + " "  +  "Ksh" + " " + expense;
    salary = salary - expense;
    document.getElementById("afterRent").innerText = "After paying rent" + " " + "ksh" + " " + salary;
    console.log("afterRent;", expense, ":", salary);

    expense = document.getElementById("electInput").value;
    document.getElementById("elect").innerText = "Electricity" +  " "  +  "Ksh"  +  " "  + expense;
    salary = salary - expense;
    document.getElementById("afterElectric").innerText = "After paying for electricity" + " " +  "Ksh"  + " " + salary;
    
    console.log("afterElectric;", expense, ":", salary);


    
    expense = document.getElementById("foodInput").value;
    document.getElementById("food").innerText = "Food expenses" +  " "  +  "Ksh"  +  " "  + expense;
    salary = salary - expense;
    document.getElementById("afterFood").innerText = "After food expenses" + " " +  "Ksh"  + " " + salary;
    
    console.log("afterFood;", expense, ":", salary);

    expense = document.getElementById("waterInput").value;
    document.getElementById("water").innerText = "water bill" +  " "  +  "Ksh"  +  " "  + expense;
    salary = salary - expense;
    document.getElementById("afterWater").innerText = "After water expenses" + " " +  "Ksh"  + " " + salary;
    
    console.log("afterWater;", expense, ":", salary);

    expense = document.getElementById("wifiInput").value;
    document.getElementById("wifi").innerText = "wifi bill" +  " "  +  "Ksh"  +  " "  + expense;
    salary = salary - expense;
    document.getElementById("afterWifi").innerText = "After wifi expenses" + " " +  "Ksh"  + " " + salary;
    
    console.log("afterWifi;", expense, ":", salary);

    expense = document.getElementById("debtInput").value;
    document.getElementById("debt").innerText = "debt bill" +  " "  +  "Ksh"  +  " "  + expense;
    salary = salary - expense;
    document.getElementById("afterDebt").innerText = "After debt expenses" + " " +  "Ksh"  + " " + salary;
    
    console.log("afterdebt;", expense, ":", salary);

    expense = document.getElementById("titheInput").value;
    document.getElementById("tithe").innerText = "Tithe bill" +  " "  +  "Ksh"  +  " "  + expense;
    salary = salary - expense;
    document.getElementById("afterTithe").innerText = "After tithe expenses" + " " +  "Ksh"  + " " + salary;
    
    console.log("afterTithe;", expense, ":", salary);

    expense = document.getElementById("insuranceInput").value;
    document.getElementById("insurance").innerText = "Insurance" +  " "  +  "Ksh"  +  " "  + expense;
    salary = salary - expense;
    document.getElementById("afterInsurance").innerText = "After insurance expenses" + " " +  "Ksh"  + " " + salary;
    
    console.log("afterInsurance;", expense, ":", salary);


    document.getElementById("savings").innerText = "Savings:" + " " + salary;
    document.getElementById("afterSavings").innerText = "After Savings" + " " +  "Ksh"  + " " + salary;
    console.log("afterSavings;", expense, ":", salary);

    

}
