function show() {
    event.preventDefault();
    let msg = document.getElementById("msg");
    let amt = document.getElementById("amt");
    if (amt.value === "") {
        alert("You Did Not Enter Amt");
        msg.innerHTML = "";
        amt.focus();
        return false;
    }
    let url = "https://api.exchangerate-api.com/v4/latest/USD";
    fetch(url)
        .then(res => res.json())
        .then(data => {
            let DOLLAR = data.rates.INR;
            let aid = parseFloat(amt.value);
            let air = aid * DOLLAR;
            let ans = "Rs " + air.toFixed(3);
            msg.innerHTML = ans;
        })
        .catch(err => msg.innerHTML = "Issue: " + err);
    return false;
}