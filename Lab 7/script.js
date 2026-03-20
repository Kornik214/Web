// Завдання 3
let countiesData = [];

async function fetchCounties() {
    try {
        const response = await fetch('https://api.census.gov/data/2020/acs/acs5/profile?get=NAME&for=county:*');
        const data = await response.json();

        countiesData = data.slice(1).map(row => {
            return {
                name: row[0],
                state: row[1],
                county: row[2],
                code: row[1] + row[2]
            };
        });
        console.log("Дані API успішно завантажено!");
    } catch (error) {
        console.error("Помилка при отриманні даних API:", error);
    }
}


function getCountyCode(countyName) {
    const county = countiesData.find(c => c.name.toLowerCase() === countyName.toLowerCase().trim());
    return county ? county.code : "Округ не знайдено (перевірте правильність написання)";
}

document.getElementById('find-btn').addEventListener('click', () => {
    const inputVal = document.getElementById('county-input').value;
    const resultDiv = document.getElementById('county-result');
    resultDiv.textContent = `Код округу: ${getCountyCode(inputVal)}`;
});


fetchCounties();


// Завдання 4
document.getElementById('user-form').addEventListener('submit', function(event) {
    const firstName = document.getElementById('first_name').value.trim();
    const lastName = document.getElementById('last_name').value.trim();
    const email = document.getElementById('email').value.trim();
    const errorDiv = document.getElementById('form-error');

    errorDiv.textContent = "";

    if (!firstName || !lastName || !email) {
        event.preventDefault(); 
        errorDiv.textContent = "Помилка: Усі поля повинні бути заповнені!";
    } else {
        event.preventDefault(); 
        alert(`Успішно!\nІм'я: ${firstName}\nПрізвище: ${lastName}\nEmail: ${email}`);
    }
});


//Завдання 5
let currentPosition = 0; 
const element = document.getElementById('elid');

const maxLeft = 0;   
const maxRight = 1400; 

document.getElementById('btn-left').addEventListener('click', () => {
   
    if (currentPosition > maxLeft) {
        currentPosition -= 100;
        element.style.transform = `translateX(${currentPosition}px)`;
    }
});

document.getElementById('btn-right').addEventListener('click', () => {

    if (currentPosition < maxRight) {
        currentPosition += 100;
        element.style.transform = `translateX(${currentPosition}px)`;
    }
});