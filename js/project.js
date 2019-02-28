" use strict ";

let startButton = document.getElementById('start');
let budgetValue = document.getElementsByClassName('budget-value')[0];
let daybudgetValue = document.getElementsByClassName('daybudget-valuue')[0];
let levelValue = document.getElementsByClassName('level-value')[0];
let expensesValue = document.getElementsByClassName('expenses-value')[0];
let optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0];
let incomeValue = document.getElementsByClassName('income-value')[0];
let monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0];
let yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0];

let expensesItem = document.getElementsByClassName('expenses-item');
let expensesBtn = document.getElementsByTagName('button')[0];
let optionalExpensesBtn = document.getElementsByTagName('button')[1];
let countBtn = document.getElementsByTagName('button')[2];
let optionalExpensesItem = document.querySelector('optionalexpenses-item');
let incomeItem = document.querySelector('.choose-income');
let checkSavings = document.querySelector('#savings');
let sumValue = document.querySelector('.choose-sum');
let percentValue = document.querySelector('.choose-percent');
let yearValue = document.querySelector('.year-value');
let monthValue = document.querySelector('.month-value');
let dayValue = document.querySelector('.day-value');

let money, time;let money, time;let money, time;

startButton.addEventListener('click', function(){
	time = prompt('Введите дату в формате YYYY-MM-DD');
	money = +prompt('Ваш бюджет в месяц', "");

	while(isNaN(money) || money == '' || money == null) {
		money = +prompt('Ваш бюджет в месяц', "");
	}
	appData.budget = money;
	appData.timeData = time;
	budgetValue.textContent = money.toFixed();
});


let appData = {
	 budget: money,
	 timeData: time,
	 expenses: {} ,
	 optionalExpenses: {},
	 income: [],
	 savings: true,
	 chooseExpenses: function() {
		for (let i = 0; i < 2; i++) {
			let   a = prompt('Введите обязательную статью расходов в этом месяце', ''),
				  b = prompt('Во сколько обойдется', '');
			if((typeof(a)) === 'string'&& (typeof(a)) != null && (typeof(b)) != null 
			&& a != '' && b != '' && a.length < 50 ) {
				console.log('done');
				appData.expenses[a] = b;
			} else {
				console.log('bad result');
				i--;
			}
		}
	 },
	 detectDayBudget: function() {
		appData.moneyPerDay = (appData.budget / 30).toFixed();
		alert('Бюджет на 1 день составляет: ' + appData.moneyPerDay);
	 },
	 detectLevel: function() {
		if(appData.moneyPerDay < 100) {
			console.log('Минимальный уровень достатка');
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			console.log(a);
			console.log('Средний уровень достатка');
		} else if (appData.moneyPerDay > 2000) {
			console.log ('высокий уровень достатка');
		} else {
			console.log('Произошла ошибка');
		}
	 },
	 checkSavings: function() {
		if (appData.savings == true) {
			let save = +prompt('Какова сумма накоплений');
			let percent = +prompt('Под какой процент?');
				
			appData.monthIncome = save/100/12 * percent;
			alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
		}
	 },
	 chooseOptExpenses: function() {
		for(let i = 0; i <= 3; i++) {
			let questionOptExpenses = prompt('Статья необязательных расходов', '');
			appData.optionalExpenses[i] = questionOptExpenses;
			console.log(appData.optionalExpenses); 
		}
	 },
	 chooseIncome: function() {
		 let items = prompt('Что принесет дополнительный доход?(Перечислите через запятую', "");
		 if(typeof(items) !== 'string' || items == "" || typeof(items) == null) {
			console.log('Вы ввели некорректные данные или не ввели их вовсе');
		 } else {
			appData.income = items.split(", ");
			appData.income.push(prompt('Может что-то еще?'));
			appData.income.sort();
		 };
		appData.income.forEach (function (item, i, ) {
			alert('Способы доп заработка: ' + (i+1) + '-' + item);
		});
	 }
 };
for (let key in appData) {
	console.log('Наша программа включает в себя данные: ' + key + " - " + appData[key]);
}

