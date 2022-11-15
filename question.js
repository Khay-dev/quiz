
let answers = ['A', 'C', 'B', 'A', 'B', 'A', 'B', 'A', 'A', 'B'];

const displayScore = document.querySelector(".score")
const form = document.querySelector(".form-1");


form.addEventListener("submit", e => {
    e.preventDefault()
    let score = 0;
    let userAnswer = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value, form.q8.value, form.q9.value, form.q10.value,]
    userAnswer.forEach((answer, index) => {
        if (answer === answers[index]) {
            score += 10
        }

    })
    scrollTo(0, 0)
    displayScore.style.display = "block"
    let scoreanim = 0
    let animation = setInterval(() => {
        displayScore.querySelector("span").textContent = `${scoreanim}%`
        if (scoreanim === score) {
            clearInterval(animation)
        } else {
            scoreanim++
        }
    }, 10)
    if (score >= 50) {
        displayScore.querySelector("p").textContent = `BRAVO`
    } else {
        displayScore.querySelector("p").textContent = `TRY AGAIN `
    }
});