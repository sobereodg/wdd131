const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('list');

const li = document.createElement('li');

const deleteButton = document.createElement('button');

li.textContent = input.value;

deleteButton.textContent = '❌';

li.append(deleteButton);

list.append(li);

buttton.addEventListener('click', function() {
    if (input.value.trim() !== '') {
        
        const input = document.querySelector('#favchap');
        const button = document.querySelector('button');
        const list = document.querySelector('list');

        const li = document.createElement('li');

        const deleteButton = document.createElement('button');

        li.textContent = input.value;

        deleteButton.textContent = '❌';

        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        li.append(deleteButton);

        list.append(li);

        input.value = '';
        input.focus();

    } else {
        alert('Please enter a chapter name.');
        input.focus();
    }
});