window.addEventListener('load', solve);

function solve() {
    // First field
    let model = document.querySelector("#model");
    let year = document.querySelector("#year");
    let description = document.querySelector("#description");
    let price = document.querySelector("#price");

    // Second field
    // let newModel = document.getElementsByClassName("type");
    // let newPrice = document.getElementsByClassName("price");
    let furnitureList = document.getElementById("furniture-list");
    let actions = document.querySelector('#information thead tr').lastElementChild;
    // let information = document.getElementById("information");

    let button = document.querySelector("#add");

    button.addEventListener("click", (a) => {
        a.preventDefault();

        let trInfo = document.createElement("tr");
        trInfo.classList.add('info');
        furnitureList.appendChild(trInfo);
        let tdModel = document.createElement("td");
        let tdPrice = document.createElement("td");
        tdPrice.setAttribute("class", "priceVal")
        let tdBtn = document.createElement("td");

        // New Buttons
        let btnMore = document.createElement("button");
        btnMore.classList.add("moreBtn");
        btnMore.textContent = "More Info";
        let btnBuy = document.createElement("button");
        btnBuy.classList.add("buyBtn");
        btnBuy.textContent = "Buy It";

        // AppendChild Button in Forms
        tdBtn.appendChild(btnMore);
        tdBtn.appendChild(btnBuy);
        trInfo.appendChild(tdModel);
        trInfo.appendChild(tdPrice);
        trInfo.appendChild(tdBtn);

        tdModel.textContent = model.value;
        tdPrice.textContent = price.value;

        // Year text content
        let trYear = document.createElement("tr");
        trYear.classList.add("hide");
        let yearDescription = document.createElement("td");
        yearDescription.textContent = `Year: ${year.value}`;

        // Description text content
        let descriptionText = document.createElement("td");
        descriptionText.textContent = `Description: ${description.value}`;
        descriptionText.setAttribute('colspan', "3")

        furnitureList.appendChild(trYear);
        trYear.appendChild(yearDescription);
        trYear.appendChild(descriptionText);

        // Button More options
        btnMore.addEventListener("click", (e) => {
            if (btnMore.textContent === "More Info") {
                btnMore.textContent = "Less Info"
                trYear.style.display = "contents"
            } else {
                btnMore.textContent = "More Info"
                trYear.style.display = "none"
            };

        });

        
        // Button Buy options
       
        let total = document.querySelector(".total-price");
        btnBuy.addEventListener("click", (e) => {
            // e.preventDefault();
            // let priceValue = e.target.parentNode.parentNode.getElementsByClassName("priceVal")[0].textContent;
            const finalPrice = Number(trInfo.querySelectorAll("td")[1].textContent);
            total.textContent = (Number(total.textContent) + finalPrice).toFixed(2);
            e.target.parentNode.parentNode.remove();
            trYear.style.display = "none"
  
        });

        model.value = "";
        year.value = "";
        description.value = "";
        price.value = "";

    });








}
