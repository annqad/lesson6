const p = document.querySelector('button');
const pic = document.getElementById('pic');

p.addEventListener('click', (event) => {
    pic.style.display = 'block';
});

pic.addEventListener('click', (event) => {
    pic.style.display = 'none';
});


const array = [1, 2, 3, 0, 5, 4, 6];
let answer = 0;
const result = array.reduceRight(function(sum, elem) {
	if (elem == 0) {
		answer = sum;
	} else {
		return sum + elem;
	}
});
if(answer == undefined){answer = result};
console.log(answer);  



const sum = (array) => {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result+= array[i];
        if(result >= 10) {
            return i+1;
        }
    }
}

console.log(sum(array))


const input = document.getElementById('text')
const button = document.getElementById('button')

button.addEventListener('click', (event)=>{
    console.log(input.value)
})


const links = document.getElementsByClassName('link');

Array.from(links).forEach((link) => {
    link.addEventListener('mouseover', (event) => {
        const defaultText = link.innerText;
        const onMouseOut = (event) => {
            link.innerText = defaultText;
            link.removeEventListener('mouseout', onMouseOut);
        }
        link.addEventListener('mouseout', onMouseOut);
        link.innerText += ` (${link.href})`;
    });
});

function myFunction() {
    document.getElementById("btn").style.display = "none";
}


const inputNumber = document.getElementById('input1')
const buttonStart = document.getElementById('buttonStart')
const circle = document.getElementById('circle')

inputNumber.addEventListener('keyup', (event) =>{
   if(isNaN(+event.target.value)) {
    event.target.value = ""
   }
})

buttonStart.addEventListener('click', (event) => {
    if(+inputNumber.value >= 600 || +inputNumber.value < 0){
        inputNumber.value = 'ERROR'
        return
    }
    console.log(event)

    circle.style.marginLeft = `${inputNumber.value}px`;
})

const logDataAttr = (event) => {
    const entries = Object.entries(event.target.dataset);
    entries.forEach(([key, value])=> {
        console.log(`attribute ${key} - ${value}`)
    })
}