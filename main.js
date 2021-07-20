var inputs = document.querySelectorAll('.input-field');
// console.log(inputs);

inputs.forEach(input => {
    // console.log(input);
    input.addEventListener('focus', focusFunc);
    input.addEventListener('blur', blurFunc);
    // console.log(input);
});

function focusFunc() {
    this.parentNode.parentNode.classList.add('focus');
    this.parentNode.parentNode.style.borderBottom = '2px solid rgb(12, 219, 88)';
}

function blurFunc() {
    if(this.value === '') {
        this.parentNode.parentNode.classList.remove('focus');
    }
    this.parentNode.parentNode.style.borderBottom = '2px solid rgb(187, 185, 185)';
}