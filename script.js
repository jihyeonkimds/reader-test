const mainQuestions = [
{ q: "영어 책을 읽을 때 가장 먼저 드는 생각은?", options: [
    { text: "이거 다 읽으면 칭찬받겠지?", types: ["외부 동기형", "무관심형"], weight: 1 },
    { text: "재밌어 보인다! 얼른 읽고 싶어.", types: ["과잉 열정형"], weight: 1 },
    { text: "어렵진 않겠지…?", types: ["무관심형"], weight: 1 },
    { text: "이 책으로 뭘 배울 수 있을까?", types: ["지식 탐구형"], weight: 1 }
]},
{ q: "책을 다 읽지 않고 중간에 멈춘 적이 있나요?", options: [
    { text: "자주 그래요. 시작은 잘하는데 끝은 못 봐요.", types: ["완독 기피형"], weight: 1 },
    { text: "한두 번 있었지만 거의 다 읽어요.", types: ["과잉 열정형"], weight: 1 },
    { text: "재미없으면 읽는 걸 멈춰요.", types: ["편식형", "완독 기피형"], weight: 1 },
    { text: "끝까지 읽는 게 중요하니까 참아요.", types: ["지식 탐구형"], weight: 1 }
]},
{ q: "영어책 고를 때 기준은?", options: [
    { text: "재미있어 보여야 해요.", types: ["편식형"] },
    { text: "그림이나 디자인이 좋아야 해요.", types: ["무관심형"] },
    { text: "주제가 궁금하거나 알고 싶은 게 있어야 해요.", types: ["지식 탐구형"] },
    { text: "선생님이나 부모님이 골라준 책이에요.", types: ["외부 동기형"] }
]},
{ q: "책을 읽는 시간은 언제가 많나요?", options: [
    { text: "해야 할 때 읽어요 (숙제, 과제 등).", types: ["외부 동기형"] },
    { text: "아무 때나 읽어요. 시간 날 때마다.", types: ["과잉 열정형"] },
    { text: "책을 언제 읽는지 잘 기억이 안 나요.", types: ["무관심형"] },
    { text: "계획 세워 정해진 시간에 읽어요.", types: ["지식 탐구형"] }
]},
{ q: "영어책을 어떻게 읽나요?", options: [
    { text: "조금 읽고 넘겨요.", types: ["완독 기피형", "무관심형"] },
    { text: "앞부분만 읽고 다른 책으로 넘어가요.", types: ["완독 기피형", "외부 동기형"] },
    { text: "느리지만 꼼꼼히 읽어요.", types: ["지식 탐구형"] },
    { text: "좋아하는 장면만 반복해 읽어요.", types: ["편식형"] }
]},
{ q: "어떤 책을 좋아하나요?", options: [
    { text: "가본 적 없는 세계 이야기를 상상하며 읽어요.", types: ["과잉 열정형", "수동형"] },
    { text: "다양한 주제가 섞인 책이 좋아요.", types: ["과잉 열정형"] },
    { text: "사실을 알려주는 지식책이 좋아요.", types: ["지식 탐구형"] },
    { text: "그림 많고 글은 적은 책이 좋아요.", types: ["무관심형", "완독 기피형"] }
]},
{ q: "영어책을 읽고 나면 어떤 느낌이 드나요?", options: [
    { text: "그냥 끝났다…", types: ["무관심형", "수동형"] },
    { text: "새로운 지식을 얻은 것 같아요.", types: ["지식 탐구형"] },
    { text: "책에 나오는 캐릭터가 생각나요.", types: ["수동형"] },
    { text: "나도 그렇게 해보고 싶어요!", types: ["과잉 열정형", "편식형"] }
]},
{ q: "영어책 읽기에 대해 가장 가까운 말은?", options: [
    { text: "하면 좋은 거니까 하는 거예요.", types: ["외부 동기형"] },
    { text: "재미있어서 혼자서도 해요.", types: ["과잉 열정형"] },
    { text: "읽는 건 좋은데 내용은 잘 몰라요.", types: ["수동형"] },
    { text: "엄마/선생님이 하라니까요.", types: ["외부 동기형"] }
]},
{ q: "책 읽기 외에 뭘 좋아하나요?", options: [
    { text: "게임, 유튜브", types: ["무관심형"] },
    { text: "만들기, 실험", types: ["지식 탐구형"] },
    { text: "상상놀이", types: ["수동형"] },
    { text: "읽은 책을 그림이나 만들기로 표현해요", types: ["과잉 열정형", "지식 탐구형"] }
]},
{ q: "책을 누가 더 많이 골라요?", options: [
    { text: "나요! 내가 직접 골라요.", types: ["과잉 열정형"] },
    { text: "늘 추천 받은 걸 읽어요.", types: ["외부 동기형"] },
    { text: "한 번 고른 시리즈만 반복해요.", types: ["편식형", "수동형"] },
    { text: "골라주는 건 좋은데, 잘 모르겠어요.", types: ["무관심형"] }
]},
{ q: "책을 읽다가 모르는 단어가 나오면?", options: [
    { text: "그냥 넘겨요.", types: ["무관심형", "수동형"] },
    { text: "그 단어에 집중하다가 책을 덮어요.", types: ["완독 기피형", "편식형"] },
    { text: "대충 뜻을 유추하면서 계속 읽어요.", types: ["수동형"] },
    { text: "뜻을 찾아보고 메모해요.", types: ["지식 탐구형"] }
]},
{ q: "한글책과 영어책 중 더 좋아하는 건?", options: [
    { text: "한글책만 읽어요. 영어책은 어려워요.", types: ["무관심형"] },
    { text: "영어책도 많이 읽어요.", types: ["과잉 열정형"] },
    { text: "엄마가 읽자고 하면 그제야 읽어요.", types: ["외부 동기형", "수동형"] },
    { text: "영어책 중 정보 책이 좋아요.", types: ["지식 탐구형"] }
]},
{ q: "책을 친구랑 이야기하거나 추천한 적 있나요?", options: [
    { text: "잘 안 해요.", types: ["수동형", "무관심형"] },
    { text: "종종 추천해요. 재밌었던 건!", types: ["과잉 열정형"] },
    { text: "친구가 추천하면 읽어요.", types: ["외부 동기형", "수동형"] },
    { text: "같은 책만 반복해요.", types: ["편식형"] }
]},
{ q: "영어책을 다 읽고 나면 어떤 반응을 하나요?", options: [
    { text: "그냥 끝났구나 싶어요.", types: ["무관심형"], weight: 2 },
    { text: "뭘 읽었는지 잘 모르겠어요.", types: ["수동형"], weight: 2 },
    { text: "재밌었는데 다 못 읽었어요.", types: ["완독 기피형"], weight: 2 },
    { text: "기억에 남는 장면이나 내용이 떠올라요.", types: ["과잉 열정형", "지식 탐구형"], weight: 1 }
]},
{ q: "영어책을 읽는 중, 보통 어떤 일이 자주 일어나나요?", options: [
    { text: "딴생각을 하거나 멍해져요.", types: ["수동형"], weight: 2 },
    { text: "재미없어서 금방 덮어요.", types: ["무관심형"], weight: 2 },
    { text: "앞부분만 읽고 다음으로 넘어가요.", types: ["완독 기피형"], weight: 2 },
    { text: "끝까지 읽으려고 노력해요.", types: ["지식 탐구형"], weight: 1 }
]}
];

const score = {
    "무관심형": 0,
    "편식형": 0,
    "과잉 열정형": 0,
    "완독 기피형": 0,
    "외부 동기형": 0,
    "수동형": 0,
    "지식 탐구형": 0
};

let userName = "";
let current = 0;
let absoluteCurrent = 0;
let questionSet = mainQuestions;
let history = [];
let maxQuestions = mainQuestions.length;

const quizDiv = document.getElementById("quiz");
const resultDiv = document.getElementById("result");
const progressBar = document.getElementById("progress-bar");

function getProperHonorific(name) {
    const lastChar = name.charAt(name.length - 1);  // 마지막 글자
    const isKorean = /[\uac00-\ud7af]/.test(lastChar);  // 한글인지 확인
    const hasBatchim = isKorean && /[가-힣]/.test(lastChar) && (lastChar.charCodeAt(0) - 0xac00) % 28 !== 0;

    return hasBatchim ? `${name}은` : `${name}는`;
}

function updateProgress() {
    const percent = ((absoluteCurrent + 1) / maxQuestions) * 100;
    progressBar.style.width = percent + "%";
}

function showQuestion(set, callback) {
    updateProgress();
    const q = questionSet[current];
    quizDiv.innerHTML = `<p><strong>Q${absoluteCurrent + 1}.</strong> ${q.q}</p>`;
    q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option.text;
    btn.className = "choice";
    btn.onclick = () => {
        option.types.forEach(type => {
        score[type] += option.weight || 1;
        });
        history.push({ set, current, selected: option });
                current++;
                absoluteCurrent++;
        if (current < questionSet.length) showQuestion(set, callback);
        else callback();
    };
    quizDiv.appendChild(btn);
    });

    if (absoluteCurrent > 0) {
    const backBtn = document.createElement("button");
    backBtn.innerText = "◀ 이전 질문으로";
    backBtn.className = "choice";
    backBtn.style.background = "#95a5a6";
    backBtn.onclick = () => {
        const last = history.pop();
        last.selected.types.forEach(type => {
        score[type] -= last.selected.weight || 1;
        });
        current = last.current;
                absoluteCurrent--;
        showQuestion(last.set, callback);
    };
    quizDiv.appendChild(backBtn);
    }
}

function showResult() {
    const sorted = Object.entries(score).sort((a, b) => b[1] - a[1]);
    const top = sorted[0];
    quizDiv.innerHTML = "";
    
    // Get correct honorific
    const resultName = userName === "" ? "당신" : getProperHonorific(userName);
    
    resultDiv.innerHTML = `<h2>${resultName} ${top[0]}!</h2><p>이 유형에 대한 간단한 설명입니다.</p>`;
    progressBar.parentElement.style.display = "none";

    const retryBtn = document.createElement("button");
    retryBtn.innerText = "다시 하기";
    retryBtn.className = "result-button";
    retryBtn.onclick = () => location.reload();

    const saveBtn = document.createElement("button");
    saveBtn.innerText = "결과 저장하기";
    saveBtn.className = "result-button";

    const shareBtn = document.createElement("button");
    shareBtn.innerText = "결과 공유하기";
    shareBtn.className = "result-button";

    const btnWrapper = document.createElement("div");
    btnWrapper.style.display = "flex";
    btnWrapper.style.flexDirection = "column";
    btnWrapper.style.alignItems = "center";
    btnWrapper.style.gap = "10px";
    btnWrapper.style.marginTop = "20px";

    btnWrapper.appendChild(retryBtn);
    btnWrapper.appendChild(saveBtn);
    btnWrapper.appendChild(shareBtn);

    resultDiv.appendChild(btnWrapper);
}

function afterMain() {
    maxQuestions = mainQuestions.length;
    showResult();
}

document.getElementById("start-btn").onclick = () => {
    userName = document.getElementById("username").value.trim();  // Capture name

    // If the name is empty, set default name to "당신"
    if (userName === "") {
        userName = "당신";
    }

    document.getElementById("start-screen").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    questionSet = mainQuestions;
    showQuestion(questionSet, afterMain);
};