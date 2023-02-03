function calculate() {
    multipliers = [960, 1152, 720, 864, 540, 648, 360, 432, 240, 288, 120, 144]
    inputs = document.querySelectorAll('input')
    main = document.querySelectorAll('main')
    output = document.querySelector('#output')
    netWorth = 0
    inputs.forEach((input, i) => {
        netWorth += Number(input.value.replace('', '0')) * multipliers[i]
    });
    main[0].style.display = 'none'
    main[1].style.display = ''
    output.innerHTML = netWorth + ' sp'
}