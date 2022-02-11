// deposit event handler
document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmount = depositInput.value;

    // total deposit
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + parseFloat(newDepositAmount);
    depositTotal.innerText = newDepositTotal;

    // Total balance
    const balanceTotal = document.getElementById('total-balance');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    const depositAmount = parseFloat(newDepositAmount);
    const newBalanceTotal = balanceTotalAmount + depositAmount;
    balanceTotal.innerText = newBalanceTotal;

    // clear
    depositInput.value = '';
});

// handle withdraw button
document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmount = withdrawInput.value;

    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = parseFloat(withdrawTotal.innerText);
    const newWithdrawTotalAmount = parseFloat(newWithdrawAmount);
    const withdrawTotalAmount = withdrawTotalText + newWithdrawTotalAmount;
    withdrawTotal.innerText = withdrawTotalAmount;

    // update balance
    const updateBalance = document.getElementById('total-balance');
    const updateBalanceText = parseFloat(updateBalance.innerText);
    const totalBalance = updateBalanceText - newWithdrawTotalAmount;
    updateBalance.innerText = totalBalance;

    // clear
    withdrawInput.value = '';
})