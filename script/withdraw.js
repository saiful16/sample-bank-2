document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldString = withdrawField.value;
    const currentWithdrawAmount = parseFloat(withdrawFieldString);

    withdrawField.value = ''

    const priviousWitdrawField = document.getElementById('total-withdraw');
    const priviousWitdrawFieldString = priviousWitdrawField.innerText;
    const priviousWithdrawAmount = parseFloat(priviousWitdrawFieldString);

    const totalWithdraw = priviousWithdrawAmount + currentWithdrawAmount;
    priviousWitdrawField.innerText = totalWithdraw;

    const userCurrentTotalbalanceField = document.getElementById('total-balance');
    const userCurrentTotalbalanceFieldString = userCurrentTotalbalanceField.innerText;
    const usercurrentTotalBalance = parseFloat(userCurrentTotalbalanceFieldString)

    const updatedTotalBalance =  usercurrentTotalBalance - currentWithdrawAmount;
    userCurrentTotalbalanceField.innerText = updatedTotalBalance;
    // console.log(totalWithdraw);
})