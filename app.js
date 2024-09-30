function callTable(){
    var  macronutrients =[
       {"Nutrient": "Calories", "Measurement": "277kcal"},
       {"Nutrient": "Carbs", "Measurement": "0g"},
       {"Nutrient": "Protein", "Measurement": "20g"},
       {"Nutrient": "Fat", "Measurement": "22g"},
    ]

    var html = "<table>";

    setTimeout(() => {
        for (var i = 0; i < macronutrients.length; i++) {
            html+= "<tr>";
            html+= "<td id='nutrient'>" + macronutrients[i].Nutrient + "</td>";
            html+= "<td id='measurement'>" + macronutrients[i].Measurement + "</td>";
            html+= "</tr>";
        }
        document.getElementById("table").innerHTML = html;
    }, 500);
} 

callTable();