const button = document.querySelector('#lotto-btn')
button.addEventListener('click', function() {
  // 컨테이너를 만들고
  const ballContainer = document.createElement('div')
  ballContainer.classList.add('ball-container')

  // 6개 공 컨테이너
//   const ballDiv = document.createElement('div')
//   ballDiv.classList.add('ball-div')
//   ballContainer.appendChild(ballDiv)

  // 6개 공 만들기
  const numbers = _.sampleSize(_.range(1, 46), 6)
  console.log(numbers)
  numbers.sort((a, b) => a - b)

  for (i = 0; i < 6; i++) {
  const ball = document.createElement('div')
  ball.classList.add('ball')
  ball.innerText = numbers[i]
  // 컨테이너에 붙인다
  ballContainer.appendChild(ball)

  // 공 색깔
  if (numbers[i] < 11) {
    ball.style.background = "radial-gradient(circle at 50% 120%, #ffffa2, #f1ee35 80%, rgb(255, 254, 192) 100%)"
  } else if (numbers[i] < 21) {
    ball.style.background = "radial-gradient(circle at 50% 120%, #a2abff, #3561f1 80%, rgb(192, 201, 255) 100%)"
  } else if (numbers[i] < 31) {
    ball.style.background = "radial-gradient(circle at 50% 120%, #ffa2a2, #f13b35 80%, rgb(255, 192, 192) 100%)"
  } else if (numbers[i] < 41) {
    ball.style.background = "radial-gradient(circle at 50% 120%, #d9dad8, #5a5a5a 80%, rgb(207, 207, 207) 100%)"
  } else {
    ball.style.background = "radial-gradient(circle at 50% 120%, #bcffa2, #80db78 80%, rgb(192, 255, 203) 100%)"
  }
  
}
  // 컨테이너를 결과 영역에 붙인다
  const result = document.querySelector('#result')
  result.appendChild(ballContainer)
})