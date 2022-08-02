var weight, height, measure, bmi;

function calculate() {
	weight = document.getElementById("weight").value;
	height = document.getElementById("height").value;
	bmi = weight/Math.pow(height/100,2);
	bmi = bmi.toFixed(1);

	if (bmi <= 18.4) {
		measure = `Your BMI is ${bmi}  which means you are Underweight!`;
	} else if (bmi >= 18.5 && bmi <= 24.9) {
		measure = `Your BMI is ${bmi}  which means you are Normal!`;
	} else if (bmi >= 25 && bmi <= 29.9) {
		measure = `Your BMI is ${bmi}  which means you are Overweight!`;
	} else if (bmi >= 30 && bmi<=34.9) {
		measure = `Your BMI is ${bmi}  which means you are Obese!`;
	} else if (bmi >= 35) {
        measure = `Your BMI is ${bmi} which means you are Extremely Obese!`;
    }  
	
	if (weight == 0 || height == 0) {
		document.getElementById("results").innerHTML = "Please enter some values";}
        else if (weight < 0 || height < 0) {
            document.getElementById("results").innerHTML = "Negative Values not Allowed";
        }
	    else {
		document.getElementById("results").innerHTML = measure;
	    }

        document.getElementById("height").value = "";
        document.getElementById("weight").value = "";
}
