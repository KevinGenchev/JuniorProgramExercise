window.addEventListener('load', solution);

function solution() {
  let fullName = document.getElementById("fname");
  let email = document.getElementById("email");
  let pnoneNumber = document.getElementById("phone");
  let address = document.getElementById("address");
  let postalCode = document.getElementById("code");


  // Button Submit
  let submitButton = document.getElementById("submitBTN");
  submitButton.addEventListener("click", createPreview);


  // Button Edit and Countinue
  let editButton = document.getElementById("editBTN");
  editButton.addEventListener("click", editFunction);
  let continueButton = document.getElementById("continueBTN");
  continueButton.addEventListener("click", continueFunction);

  // Functions on a Button Submit
  function createPreview() {


    let formInputs = document.querySelectorAll('#form input');
    let labels = document.querySelectorAll('#form label');
    let listInfo = document.getElementById('infoPreview');
    //formInputs.pop();

    for (let index = 0; index < formInputs.length - 1; index++) {

      let li = document.createElement('li');
      li.textContent = `${labels[index].textContent}${formInputs[index].value}`
      listInfo.appendChild(li);
    }

    submitButton.disabled = true;
    editButton.disabled = false;
    continueButton.disabled = false;
    // Delete input row
    fullName.value = "";
    email.value = "";
    pnoneNumber.value = "";
    address.value = "";
    postalCode.value = "";

  };

  function editFunction() {

    let formInputs = document.querySelectorAll('#form input');
    let listItems = document.querySelectorAll('#infoPreview li')

    for (let index = 0; index < listItems.length; index++) {

      let newValue = listItems[index].textContent.split(':')[1];
      formInputs[index].value = newValue;
    }


    document.getElementById("infoPreview").innerHTML = '';
    editButton.disabled = true;
    continueButton.disabled = true;
    submitButton.disabled = false;


  };
  function continueFunction() {
    let mainCtr = document.getElementById('block');
    mainCtr.innerHTML = '';
    let finishHeading = document.createElement('h3');
    finishHeading.innerText = 'Thanks';
    mainCtr.appendChild(finishHeading);
  };

}
