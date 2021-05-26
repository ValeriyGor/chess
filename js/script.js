let currentFigure = null;
let sellItems = document.querySelectorAll('.sell__item');

let figureItems = document.querySelectorAll('.figure__item');

for(let i = 0; i < sellItems.length; i++){
	sellItems[i].addEventListener('click', sellClick)
}
for(let i = 0; i < figureItems.length; i++){
	figureItems[i].addEventListener('click', figureClick)
}

function sellClick(){
	let coords = this.getAttribute('data-place');
	if(validateStep(currentFigure.classList[1], coords)){
		currentFigure.setAttribute('class', `figure__item ${coords}`)
	} else {
		console.log('Сюда нельзя кликать')	
	}	
}

function figureClick(){
	currentFigure = this;
}

function validateStep(figure, cell){
	let valid = false;
	
	let charRes = figure[0].charCodeAt() - cell[0].charCodeAt();
	let numRes = figure[1] - cell[1];
	
	
	if(numRes === 1 || numRes === -1){
		if(charRes === 1 || charRes === -1){
			valid = true;
			console.log('Ход на одну клетку')
		}
	}	
	if(numRes === 2 || numRes === -2){
		if(charRes === 2 || charRes === -2){
			let missCell = getMissCell(figure, cell);
			let looseFigure = document.getElementsByClassName(missCell)
			if(looseFigure.length){
				let parent = document.querySelector('.chess__figures');
				parent.removeChild(looseFigure[0]);				
				valid = true;
			}			
		}
	}
	
	return valid;
}

function getMissCell(figure, cell){
	let char = (figure[0].charCodeAt() + cell[0].charCodeAt())/2;
	char = String.fromCharCode(+char);
	let num = (+figure[1] + +cell[1]) / 2
	return char+num
}





