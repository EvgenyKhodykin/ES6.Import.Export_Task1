function getRandomColor() {
    const colorCode = '0123456789ABCDEF'
    let color = ''
    for (let i = 0; i < 6; i++) {
        color += colorCode[Math.floor(Math.random() * colorCode.length)]
    }
    return '#' + color
}

export function changeBackgroundColor() {
    document.body.style.backgroundColor = `${getRandomColor()}`
  }

export function createButtonHTML() {
    const button = document.createElement('button')
    button.className = 'button'
    button.textContent = 'Изменить цвет страницы'
    return button
}  