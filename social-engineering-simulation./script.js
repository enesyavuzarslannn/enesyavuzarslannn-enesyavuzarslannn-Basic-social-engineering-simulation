const scenarios = [
    {
        question: "Bir e-posta aldınız, şüpheli bir bağlantı var. Ne yaparsınız?",
        correctAnswer: "Görmezden Gel",
        wrongAnswer: "Yanıtla"
    },
    {
        question: "Telefonla sizi arayan bir kişi banka bilgilerinizin güncellenmesini istiyor. Ne yaparsınız?",
        correctAnswer: "Aramayı Sonlandır",
        wrongAnswer: "Banka Bilgilerini Ver"
    },
    {
        question: "Bir arkadaşınız sosyal medya üzerinden gizli bir teklif gönderiyor. Ne yaparsınız?",
        correctAnswer: "Teklifi Görmezden Gel",
        wrongAnswer: "Teklifi Kabul Et"
    }
];

let score = 0;
let currentScenarioIndex = 0;

function loadScenario() {
    if (currentScenarioIndex < scenarios.length) {
        const scenario = scenarios[currentScenarioIndex];
        document.querySelector('.scenario h2').innerText = scenario.question;
    } else {
        showResults();
    }
}

function checkAnswer(answer) {
    const scenario = scenarios[currentScenarioIndex];
    if (answer === scenario.correctAnswer) {
        score++;
    }
    currentScenarioIndex++;
    loadScenario();
}

function showResults() {
    document.querySelector('.scenario').innerHTML = "<h2>Simülasyonu Tamamladınız!</h2>";
    document.querySelector('.options').style.display = "none";
    document.querySelector('.result').innerHTML = `Puanınız: <span id="score">${score}</span>`;
}

// Sayfa yüklendiğinde ilk senaryoyu başlat
window.onload = loadScenario;