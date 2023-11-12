document.getElementById('btn-Deposit').addEventListener('click', function(){
    const tInputDeposit = document.getElementById('input-deposit');
    const textInput  = tInputDeposit.value;
    const numInput = parseFloat(textInput);
    tInputDeposit.value = '';
    if(numInput<0){
        alert('please type a positive number');
        return;
    }
    if(isNaN(numInput)){
        alert('Please type a number');
        return;
    }
    const shoeDeposit = document.getElementById('Deposit-id');
    const textDeposit = shoeDeposit.innerText;
    const numDeposit = parseFloat(textDeposit);
    const newDepositTotal = numInput+numDeposit;
    shoeDeposit.innerText = newDepositTotal;

    const shoeBalance  = document.getElementById('balance-id');
    const textBalance = shoeBalance.innerText;
    const numBalance = parseFloat(textBalance);
    const totalBalance = numBalance+numInput;
    shoeBalance.innerText = totalBalance;
})