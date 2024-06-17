

document.addEventListener('DOMContentLoaded', function() {
    const output = document.getElementById('output');
    const letterButtons = document.querySelectorAll('.letter');
    const numberButtons = document.querySelectorAll('.number');
    const symbolButtons = document.querySelectorAll('.symbol');
    const shiftButtons = document.querySelectorAll('.functionButtonShift');
    const capsLockButton = document.querySelector('.functionButtonCaps');
    const tabButton = document.querySelector('.functionButtonTab');
    const enterButton = document.querySelector('.functionButtonEnter');
    const spaceButton = document.querySelector('.functionButtonSpace');
    const backButton = document.querySelector('.functionButtonBackspace');

    let capsLockActive = false;
    let fontSize = 16;


    letterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.innerText.trim();
            handleButtonClick(value);
        });
    });

   
    numberButtons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.innerText.trim();
            handleButtonClick(value);
        });
    });

    symbolButtons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.innerText.trim();
            handleButtonClick(value);
        });
    });

  
    shiftButtons.forEach(button => {
        button.addEventListener('click', function() {
            toggleShift();
        });
    });

 
    capsLockButton.addEventListener('click', function() {
        toggleCapsLock();
    });

  
    tabButton.addEventListener('click', function() {
      
    });

    
    enterButton.addEventListener('click', function() {
        handleFunctionButtonClick('Enter');
    });

   
    spaceButton.addEventListener('click', function() {
        handleFunctionButtonClick('Space');
      
    });
    
    
    backButton.addEventListener('click', function() {
        handleFunctionButtonClick('Backspace');
    });

    
    document.addEventListener('keydown', function(event) {
        const key = event.key.trim();
        if (key.length === 1) {
            const value = capsLockActive ? key.toUpperCase() : key.toLowerCase();
            handleButtonClick(value);
        } else {
            switch (key) {
                case ' ':
                    handleFunctionButtonClick('Space');
                    break;
                case 'Enter':
                    handleFunctionButtonClick('Enter');
                    break;
                case 'Backspace':
                    handleFunctionButtonClick('Backspace');
                    break;
                case '+':
                    increaseFontSize();
                    break;
                case '-':
                    decreaseFontSize();
                    break;
               
                default:
                    break;
            }
        }
    });

    function handleButtonClick(value) {
        output.value += value;
    }

    function handleFunctionButtonClick(value) {
        switch (value) {
            case 'Space':
                output.value += ' ';
                break;
            case 'Enter':
                output.value += '\n';
                break;
            case 'Backspace':
                output.value = output.value.slice(0, -1);
                break;
          
            default:
                break;
        }
    }



   
    let shiftPressed = false;

    function toggleShift() {
        shiftPressed = !shiftPressed;
        letterButtons.forEach(button => {
            const letter = button.innerText.trim();
            button.innerText = shiftPressed ? letter.toUpperCase() : letter.toLowerCase();
        });
    }
    
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Shift' && !shiftPressed) {
            toggleShift();
            event.preventDefault(); 
        }
    });
    
    document.addEventListener('keyup', function(event) {
        if (event.key === 'Shift') {
            toggleShift();
            event.preventDefault(); 
        }
    });
    
    letterButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (!shiftPressed) { 
                toggleShift();
            }
        });
    });
    


    function toggleCapsLock() {
        capsLockActive = !capsLockActive;
        letterButtons.forEach(button => {
            const letter = button.innerText.trim();
            button.innerText = capsLockActive ? letter.toUpperCase() : letter.toLowerCase();
        });
    }

   



    function increaseFontSize() {
        fontSize += 2;
        output.style.fontSize = fontSize + 'px';
    }

    function decreaseFontSize() {
        fontSize -= 2;
        if (fontSize < 2) {
            fontSize = 2;
        }
        output.style.fontSize = fontSize + 'px';
    }
});



let buttons = document.querySelectorAll('.functionButtonCtrl, .functionButtonFn, .functionButtonWindow, .functionButtonAlt, .functionButtonSpace');


buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        
       let isActive = button.classList.contains('active-button');

        if (isActive) {
            button.classList.remove('active-button');
        } else {
           
            buttons.forEach(function(btn) {
                btn.classList.remove('active-button');
            });

            button.classList.add('active-button');
        }
    });
});

