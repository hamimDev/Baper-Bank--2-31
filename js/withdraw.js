document.getElementById('btn-Withdraw').addEventListener('click', function(){
    const typeInputAmount = getInputFieldValueById('input-withdraw');
    if(typeInputAmount<0){
        alert('please type a positive number');
        return;
    }

    if(isNaN(typeInputAmount)){
        alert('Please type a number');
        return;
    }
    const preTotal = getElementValueById('withdraw-id');
    const shoeTotal = typeInputAmount + preTotal;
    shoeAll('withdraw-id', shoeTotal);
    // return shoeAllD;
    const preShoeBalanceTotal = getElementValueById('balance-id');
    const shoeBalanceTotal = preShoeBalanceTotal - typeInputAmount;
    shoeAll('balance-id', shoeBalanceTotal);
})