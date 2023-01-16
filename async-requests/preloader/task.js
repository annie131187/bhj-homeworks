'use strict'
const loader = document.getElementById('loader');
const itemsList = document.getElementById('items');
const xhr = new XMLHttpRequest();
const url = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses';

xhr.open('GET', url, true);
xhr.responseType = 'json';
xhr.send();

xhr.addEventListener('load', () => {
    loader.classList.remove('loader_active');
    let currencyList = xhr.response.response["Valute"];
    Object.keys(currencyList).forEach(key => {
        const element = currencyList[key];
        itemsList.insertAdjacentHTML("beforeend", `
            <div class="item">
                <div class="item__code">
                    ${element["CharCode"]}
                </div>
                <div class="item__value">
                    ${element["Value"]}
                </div>
                <div class="item__currency">
                    руб.
                </div>
            </div>
        `);
    });
});