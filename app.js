let element = "";
let totalPrice = 0;
let count = 0;
const sell = (sellData) => {
  return sellData.innerText;
};

function total(data) {
  count++;
  const mainContainer = document.getElementById("cart-items");
  element = data.childNodes[3].childNodes[3].innerText;
  const createElement = document.createElement("li");
  createElement.innerHTML = `${count}. ${element}`;
  mainContainer.appendChild(createElement);
  const price =
    data.childNodes[3].childNodes[4].nextSibling.childNodes[0].innerText;
  totalPrice += parseInt(price);
  document.getElementById("totalPrice").innerText = totalPrice;

  if (totalPrice >= 200) {
    couponBtn.removeAttribute("disabled");
  }
  document.getElementById("btn-purchase").removeAttribute("disabled");
  document.getElementById("total").innerText = totalPrice;
}
function apply() {
  const coupounValue = document.getElementById("couponValue").value;
  if (coupounValue === "SELL200") {
    const totalPrice = parseInt(
      document.getElementById("totalPrice").innerText
    );
    const discountPrice = (totalPrice * 0.2).toFixed(2);
    document.getElementById("discountPrice").innerText = discountPrice;
    document.getElementById("total").innerText = totalPrice - discountPrice;
  } else {
    alert(
      `Sorry!😪😪 This is not a valid coupon.You Can Use "SELL200" to get 20% Discount🥰🥰😘`
    );
  }
}
function modalBtn() {
  count = 0;
  totalPrice = 0;
  document.getElementById("discountPrice").innerText = 0;
  document.getElementById("total").innerText = 0;
  document.getElementById("totalPrice").innerText = 0;
  document.getElementById("cart-items").innerText = "";
  document.getElementById("couponValue").value = "";
  document.getElementById("btn-purchase").disabled = true;
  document.getElementById("couponBtn").disabled = true;
}
