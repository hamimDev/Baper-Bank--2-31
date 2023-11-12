document.getElementById('btn-Deposit').addEventListener('click', function(){
    const typeInputAmount = getInputFieldValueById('input-deposit');
    if(typeInputAmount<0){
        alert('please type a positive number');
        return;
    }

    if(isNaN(typeInputAmount)){
        alert('Please type a number');
        return;
    }
    const preTotal = getElementValueById('Deposit-id');
    const shoeTotal = typeInputAmount + preTotal;
    shoeAll('Deposit-id', shoeTotal);
    // return shoeAllD;
    const preShoeBalanceTotal = getElementValueById('balance-id');
    const shoeBalanceTotal = preShoeBalanceTotal + typeInputAmount;
    shoeAll('balance-id', shoeBalanceTotal);
})
