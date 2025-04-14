const input = document.getElementById('input');
const buttons = document.querySelectorAll('#buttons button');

input.value = ''; // Initialize the input as empty

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const value = btn.innerHTML;

        if (value === 'AC') {
            input.value = '';
        } else if (value === 'DEL') {
            input.value = input.value.slice(0, -1);
        } else if (value === '=') {
            try {
                input.value = eval(input.value.replace(/╳/g, '*'));
            } catch (err) {
                input.value = 'Error';
            }
        } else {
            input.value += value;
        }
    });
});
