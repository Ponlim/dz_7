const $height = document.querySelector("#height");
const $weight = document.querySelector("#weight");
const $value = document.querySelector("#value");
const $description = document.querySelector("#description");

function calculateBMI() {
    const height = parseFloat($height.value) / 100;
    const weight = parseFloat($weight.value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0 || $height.value.trim() === "" || $weight.value.trim() === "") {
        $value.textContent = "---";
        $description.textContent = "Пожалуйста, введите корректные данные.";
        return;
    }

    const bmi = weight / (height * height);
    $value.textContent = bmi.toFixed(2);

    let description = "";
    if (bmi < 16) {
        description = "Выраженный дефицит массы тела";
    } else if (bmi < 18.5) {
        description = "Недостаточная (дефицит) масса тела";
    } else if (bmi < 25) {
        description = "Норма";
    } else if (bmi < 30) {
        description = "Избыточная масса тела (предожирение)";
    } else if (bmi < 35) {
        description = "Ожирение 1 степени";
    } else if (bmi < 40) {
        description = "Ожирение 2 степени";
    } else {
        description = "Ожирение 3 степени";
    }

    $description.textContent = description;
}

$height.addEventListener("input", calculateBMI);
$weight.addEventListener("input", calculateBMI);






