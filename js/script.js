var allProducts = document.querySelectorAll(".products > div")
var content = document.querySelector("#content")
var btn = document.querySelector("#button")
var totalPrice = 0;

allProducts.forEach(function (item){
    item.onclick = function (){
        totalPrice += parseInt(item.getAttribute("price"))
        content.innerHTML += item.textContent + " , ";

        if (content.innerHTML != "") {
            btn.style.display = "block";
        }
    }
})

btn.onclick = function (){
    console.log("Total Price = " + totalPrice + "dollar")
    document.getElementById("total").innerHTML = "Total Price = " + totalPrice + "dollar"
}