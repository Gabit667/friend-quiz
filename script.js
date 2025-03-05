const quizContainer = document.getElementById('quiz-container');
const submitButton = document.getElementById('submit');
const resultContainer = document.getElementById('result');

const questions = [
    { question: "Какой мой любимый цвет?", options: ["Красный", "Синий", "Зелёный", "Жёлтый"], answer: "Синий" },
        { question: "Чай или кофе?", options: ["Чай", "Кофе"], answer: "Чай" },
            { question: "Какое моё любимое время года?", options: ["Зима", "Весна", "Лето", "Осень"], answer: "Лето" }
            ];

            function generateQuiz() {
                questions.forEach((q, index) => {
                        const div = document.createElement('div');
                                div.innerHTML = `<p>${q.question}</p>`;
                                        q.options.forEach(option => {
                                                    div.innerHTML += `<label><input type="radio" name="q${index}" value="${option}"> ${option}</label><br>`;
                                                            });
                                                                    quizContainer.appendChild(div);
                                                                        });
                                                                        }

                                                                        submitButton.addEventListener('click', () => {
                                                                            let score = 0;
                                                                                questions.forEach((q, index) => {
                                                                                        const selected = document.querySelector(`input[name="q${index}"]:checked`);
                                                                                                if (selected && selected.value === q.answer) {
                                                                                                            score++;
                                                                                                                    }
                                                                                                                        });
                                                                                                                            const percent = Math.round((score / questions.length) * 100);
                                                                                                                                resultContainer.innerText = `Ты знаешь друга на ${percent}%!`;
                                                                                                                                });

                                                                                                                                generateQuiz();