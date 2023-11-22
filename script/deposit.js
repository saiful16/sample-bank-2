document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const depositFieldString = depositField.value;
    const depositFieldAmount = parseFloat(depositFieldString)

    depositField.value = ''
    

    const userCurrentDepositField = document.getElementById('total-deposit')
    const userCurrentDepositFieldString = userCurrentDepositField.innerText;
    const userCurrentDepositAmount = parseFloat(userCurrentDepositFieldString)

    const currentTotalDeposit = depositFieldAmount + userCurrentDepositAmount;
    userCurrentDepositField.innerText = currentTotalDeposit;

    const userCurrentTotalbalanceField = document.getElementById('total-balance');
    const userCurrentTotalbalanceFieldString = userCurrentTotalbalanceField.innerText;
    const usercurrentTotalBalance = parseFloat(userCurrentTotalbalanceFieldString)

    const updatedTotalBalance = usercurrentTotalBalance + depositFieldAmount;

    userCurrentTotalbalanceField.innerText = updatedTotalBalance;
    

    // console.log(typeof updatedTotalBalance);
})
