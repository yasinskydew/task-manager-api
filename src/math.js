const calculateTip = (total, tipPercent) => {
    let tip = total * tipPercent
    return tip + total
}

module.exports = {
    calculateTip
}