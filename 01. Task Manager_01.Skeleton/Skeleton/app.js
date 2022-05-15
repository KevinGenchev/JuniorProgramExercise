function solve() {
    let taskInput = document.querySelector("#task");
    let descriptionInput = document.querySelector("#description");
    let dateInput = document.querySelector("#date");


    let buttonAdd = document.querySelector("#add");
    let openCtr = document.getElementById('open');
    buttonAdd.addEventListener("click", addNewSection);

    function addNewSection(e) {
        let articleOpen = document.createElement("article");

        e.preventDefault();
        if (taskInput.value === "" || descriptionInput.value === "" || dateInput.value === "") {
            alert("Empty fields!");
        } else {
            let headingThird = document.createElement("h3");
            articleOpen.appendChild(headingThird);
            headingThird.textContent = taskInput.value;


            let paragraphOpen = document.createElement("p");
            articleOpen.appendChild(paragraphOpen);
            paragraphOpen.textContent = `Description: ${descriptionInput.value}`;


            let paragraphDataOpen = document.createElement("p");
            articleOpen.appendChild(paragraphDataOpen);
            paragraphDataOpen.textContent = `Due Date: ${dateInput.value}`;

            let buttonsContainer = document.createElement('div');
            buttonsContainer.classList.add('flex');
            articleOpen.appendChild(buttonsContainer);

            let stratBtn = document.createElement('button');
            stratBtn.classList.add('green');
            stratBtn.innerText = 'Start';
            buttonsContainer.appendChild(stratBtn);

            stratBtn.addEventListener('click', moveToInprogress)

            let delBtn = document.createElement('button');
            delBtn.classList.add('red');
            delBtn.innerText = 'Delete';
            buttonsContainer.appendChild(delBtn);

            delBtn.addEventListener('click', deleteTask)

            function deleteTask(e) {
                e.target.parentNode.parentNode.remove();
            }

            function moveToInprogress(e) {
                let inProgressCtr = document.getElementById('in-progress');
                let inprogressArticle = articleOpen.cloneNode(true);
                let buttons = inprogressArticle.getElementsByTagName('button');
                buttons[0].innerText = 'Delete';
                buttons[0].classList.add('red');
                buttons[0].addEventListener('click', deleteTask);

                buttons[1].innerText = 'Finish';
                buttons[1].classList.remove('red');
                buttons[1].classList.add('orange');
                buttons[1].addEventListener('click', moveToDone);
                inProgressCtr.appendChild(inprogressArticle);
                deleteTask(e);
            }

            function moveToDone(e) {
                let doneCtr = document.getElementById('done');

                let doneArticle = articleOpen.cloneNode(true);
                let buttonsCtr = doneArticle.getElementsByClassName('flex');
                Array.from(buttonsCtr).forEach(btn => btn.remove());
                doneCtr.appendChild(doneArticle);
                deleteTask(e);
            }

            openCtr.appendChild(articleOpen);
        }
        taskInput.value = "";
        descriptionInput.value = "";
        dateInput.value = "";

    }
}