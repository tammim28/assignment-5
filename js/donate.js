// for noakhali

document.getElementById('btn-noakhali').addEventListener('click', function (event) {
    const inputNoakhali = parseFloat(document.getElementById('input-noakhali').value);

    if (isNaN(inputNoakhali) || inputNoakhali <= 0) {
        alert('please enter valid amount');
        return;
    }

    document.getElementById('donate-noakhali').innerText = inputNoakhali;
    const accountBalance = parseFloat(document.getElementById('account-balance').innerText);
    const updateBalance = accountBalance - inputNoakhali;
    document.getElementById('account-balance').innerText = updateBalance;

    const p = document.createElement('p');
    p.innerText = `${inputNoakhali} tk is donated for Donate for Flood at Noakhali, Bangladesh.`;
    document.getElementById('noakhali-history').appendChild(p);


})

// for feni

document.getElementById('btn-feni').addEventListener('click', function () {
    const inputFeni = parseFloat(document.getElementById('input-feni').value);
    if (isNaN(inputFeni) || inputFeni <= 0) {
        alert('please enter valid amount');
        return;
    }

    document.getElementById('donate-feni').innerText = inputFeni;
    const accountBalance = parseFloat(document.getElementById('account-balance').innerText);
    const updateBalance = accountBalance - inputFeni;
    document.getElementById('account-balance').innerText = updateBalance;

    const p = document.createElement('p');
    p.innerText = `${inputFeni} tk is donated for Donate for Flood Relief in Feni,Bangladesh.`;
    document.getElementById('feni-history').appendChild(p);

})

// for quota

document.getElementById('btn-quota').addEventListener('click', function () {
    const inputQuota = parseFloat(document.getElementById('input-quota').value);
    if (isNaN(inputQuota) || inputQuota <= 0) {
        alert('please enter valid amount');
        return;
    }

    document.getElementById('donate-quota').innerText = inputQuota;
    const accountBalance = parseFloat(document.getElementById('account-balance').innerText);
    const updateBalance = accountBalance - inputQuota;
    document.getElementById('account-balance').innerText = updateBalance;

    const p = document.createElement('p');
    p.innerText = `${inputQuota} tk is donated for Aid for Injured in the Quota Movement.`;
    document.getElementById('quota-history').appendChild(p);
})

// for history btn

document.getElementById('btn-history').addEventListener('click', function () {
    document.getElementById('btn-history').classList.add(
        'text-white',
        'bg-gradient-to-r',
        'from-blue-500',
        'to-purple-600'
    );

    document.getElementById('btn-donate').classList.remove(
        'text-white',
        'bg-gradient-to-r',
        'from-blue-500',
        'to-purple-600'
    );
    document.getElementById('donate-content').classList.add('hidden');
    document.getElementById('history-container').classList.remove('hidden');
})

// for donate btn

document.getElementById('btn-donate').addEventListener('click', function () {
    document.getElementById('btn-history').classList.remove(
        'text-white',
        'bg-gradient-to-r',
        'from-blue-500',
        'to-purple-600'
    );

    document.getElementById('btn-donate').classList.add(
        'text-white',
        'bg-gradient-to-r',
        'from-blue-500',
        'to-purple-600'
    );

    document.getElementById('donate-content').classList.remove('hidden');
    document.getElementById('history-container').classList.add('hidden');
})