const mainQuestions = [
{ q: "영어 책을 읽을 때 가장 먼저 드는 생각은?", 
    image: "assets/sample-image.jpg",
    options: [
    { text: "이거 다 읽으면 칭찬받겠지?", types: ["외부 동기형", "무관심형"], weight: 1 },
    { text: "재밌어 보인다! 얼른 읽고 싶어.", types: ["과잉 열정형"], weight: 1 },
    { text: "어렵진 않겠지…?", types: ["무관심형"], weight: 1 },
    { text: "이 책으로 뭘 배울 수 있을까?", types: ["지식 탐구형"], weight: 1 }
]},
{ q: "책을 다 읽지 않고 중간에 멈춘 적이 있나요?", 
    image: "assets/sample-image.jpg",
    options: [
    { text: "자주 그래요. 시작은 잘하는데 끝은 못 봐요.", types: ["완독 기피형"], weight: 1 },
    { text: "한두 번 있었지만 거의 다 읽어요.", types: ["과잉 열정형"], weight: 1 },
    { text: "재미없으면 읽는 걸 멈춰요.", types: ["편식형", "완독 기피형"], weight: 1 },
    { text: "끝까지 읽는 게 중요하니까 참아요.", types: ["지식 탐구형"], weight: 1 }
]},
{ q: "영어책 고를 때 기준은?", 
    image: "assets/sample-image.jpg",
    options: [
    { text: "재미있어 보여야 해요.", types: ["편식형"] },
    { text: "그림이나 디자인이 좋아야 해요.", types: ["무관심형"] },
    { text: "주제가 궁금하거나 알고 싶은 게 있어야 해요.", types: ["지식 탐구형"] },
    { text: "선생님이나 부모님이 골라준 책이에요.", types: ["외부 동기형"] }
]},
{ q: "책을 읽는 시간은 언제가 많나요?", 
    image: "assets/sample-image.jpg",
    options: [
    { text: "해야 할 때 읽어요 (숙제, 과제 등).", types: ["외부 동기형"] },
    { text: "아무 때나 읽어요. 시간 날 때마다.", types: ["과잉 열정형"] },
    { text: "책을 언제 읽는지 잘 기억이 안 나요.", types: ["무관심형"] },
    { text: "계획 세워 정해진 시간에 읽어요.", types: ["지식 탐구형"] }
]},
{ q: "영어책을 어떻게 읽나요?", 
    image: "assets/sample-image.jpg",
    options: [
    { text: "조금 읽고 넘겨요.", types: ["완독 기피형", "무관심형"] },
    { text: "앞부분만 읽고 다른 책으로 넘어가요.", types: ["완독 기피형", "외부 동기형"] },
    { text: "느리지만 꼼꼼히 읽어요.", types: ["지식 탐구형"] },
    { text: "좋아하는 장면만 반복해 읽어요.", types: ["편식형"] }
]},
{ q: "어떤 책을 좋아하나요?", 
    image: "assets/sample-image.jpg",
    options: [
    { text: "가본 적 없는 세계 이야기를 상상하며 읽어요.", types: ["과잉 열정형", "수동형"] },
    { text: "다양한 주제가 섞인 책이 좋아요.", types: ["과잉 열정형"] },
    { text: "사실을 알려주는 지식책이 좋아요.", types: ["지식 탐구형"] },
    { text: "그림 많고 글은 적은 책이 좋아요.", types: ["무관심형", "완독 기피형"] }
]},
{ q: "영어책을 읽고 나면 어떤 느낌이 드나요?", 
    image: "assets/sample-image.jpg",
    options: [
    { text: "그냥 끝났다…", types: ["무관심형", "수동형"] },
    { text: "새로운 지식을 얻은 것 같아요.", types: ["지식 탐구형"] },
    { text: "책에 나오는 캐릭터가 생각나요.", types: ["수동형"] },
    { text: "나도 그렇게 해보고 싶어요!", types: ["과잉 열정형", "편식형"] }
]},
{ q: "영어책 읽기에 대해 가장 가까운 말은?", 
    image: "assets/sample-image.jpg",
    options: [
    { text: "하면 좋은 거니까 하는 거예요.", types: ["외부 동기형"] },
    { text: "재미있어서 혼자서도 해요.", types: ["과잉 열정형"] },
    { text: "읽는 건 좋은데 내용은 잘 몰라요.", types: ["수동형"] },
    { text: "엄마/선생님이 하라니까요.", types: ["외부 동기형"] }
]},
{ q: "책 읽기 외에 뭘 좋아하나요?", 
    image: "assets/sample-image.jpg",
    options: [
    { text: "게임, 유튜브", types: ["무관심형"] },
    { text: "만들기, 실험", types: ["지식 탐구형"] },
    { text: "상상놀이", types: ["수동형"] },
    { text: "읽은 책을 그림이나 만들기로 표현해요", types: ["과잉 열정형", "지식 탐구형"] }
]},
{ q: "책을 누가 더 많이 골라요?", 
    image: "assets/sample-image.jpg",
    options: [
    { text: "나요! 내가 직접 골라요.", types: ["과잉 열정형"] },
    { text: "늘 추천 받은 걸 읽어요.", types: ["외부 동기형"] },
    { text: "한 번 고른 시리즈만 반복해요.", types: ["편식형", "수동형"] },
    { text: "골라주는 건 좋은데, 잘 모르겠어요.", types: ["무관심형"] }
]},
{ q: "책을 읽다가 모르는 단어가 나오면?", 
    image: "assets/sample-image.jpg",
    options: [
    { text: "그냥 넘겨요.", types: ["무관심형", "수동형"] },
    { text: "그 단어에 집중하다가 책을 덮어요.", types: ["완독 기피형", "편식형"] },
    { text: "대충 뜻을 유추하면서 계속 읽어요.", types: ["수동형"] },
    { text: "뜻을 찾아보고 메모해요.", types: ["지식 탐구형"] }
]},
{ q: "한글책과 영어책 중 더 좋아하는 건?", 
    image: "assets/sample-image.jpg",
    options: [
    { text: "한글책만 읽어요. 영어책은 어려워요.", types: ["무관심형"] },
    { text: "영어책도 많이 읽어요.", types: ["과잉 열정형"] },
    { text: "엄마가 읽자고 하면 그제야 읽어요.", types: ["외부 동기형", "수동형"] },
    { text: "영어책 중 정보 책이 좋아요.", types: ["지식 탐구형"] }
]},
{ q: "책을 친구랑 이야기하거나 추천한 적 있나요?", 
    image: "assets/sample-image.jpg",
    options: [
    { text: "잘 안 해요.", types: ["수동형", "무관심형"] },
    { text: "종종 추천해요. 재밌었던 건!", types: ["과잉 열정형"] },
    { text: "친구가 추천하면 읽어요.", types: ["외부 동기형", "수동형"] },
    { text: "같은 책만 반복해요.", types: ["편식형"] }
]},
{ q: "영어책을 다 읽고 나면 어떤 반응을 하나요?", 
    image: "assets/sample-image.jpg",
    options: [
    { text: "그냥 끝났구나 싶어요.", types: ["무관심형"], weight: 2 },
    { text: "뭘 읽었는지 잘 모르겠어요.", types: ["수동형"], weight: 2 },
    { text: "재밌었는데 다 못 읽었어요.", types: ["완독 기피형"], weight: 2 },
    { text: "기억에 남는 장면이나 내용이 떠올라요.", types: ["과잉 열정형", "지식 탐구형"], weight: 1 }
]},
{ q: "영어책을 읽는 중, 보통 어떤 일이 자주 일어나나요?", 
    image: "assets/sample-image.jpg",
    options: [
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

const resultImages = {
    "무관심형": "assets/result-sample-image.png",
    "편식형": "assets/result-sample-image.png",
    "과잉 열정형": "assets/result-sample-image.png",
    "완독 기피형": "assets/result-sample-image.png",
    "외부 동기형": "assets/result-sample-image.png",
    "수동형": "assets/result-sample-image.png",
    "지식 탐구형": "assets/result-sample-image.png"
  };

const resultDescriptions = {
  "무관심형": "책에 큰 흥미를 느끼지 않지만, 관심을 가질 수 있는 계기가 필요해요.",
  "편식형": "좋아하는 책만 반복해서 읽는 경향이 있어요. 다양한 책도 시도해보면 좋아요!",
  "과잉 열정형": "열정이 넘치고 책을 좋아해요. 꾸준히 독서를 이어가면 좋아요!",
  "완독 기피형": "처음에는 시작하지만 끝까지 읽는 데 어려움을 느낄 수 있어요.",
  "외부 동기형": "스스로보다는 누군가의 권유에 따라 책을 읽는 편이에요.",
  "수동형": "자극에는 반응하지만 스스로는 잘 시작하지 않는 독서 태도를 보여요.",
  "지식 탐구형": "새로운 지식이나 정보에 관심이 많고 탐구심이 강한 독서 태도를 가지고 있어요."
};

let userName = "";
let current = 0; // 현재 질문 번호
let absoluteCurrent = 0; // 전체 질문 중 진행 상황
let questionSet = mainQuestions; 
let history = []; // 뒤로 가기 위한 선택 기록 저장
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
    const questionImage = document.getElementById("question-image");

     // 이미지 설정
    if (q.image) {
        questionImage.src = q.image;
        questionImage.style.display = "block";
    } else {
        questionImage.style.display = "none"; // 혹시 없을 경우
    }

    quizDiv.innerHTML = `<p></strong> ${q.q}</p>`;   
    // Get correct honorific
    const resultName = userName === "" ? "당신" : getProperHonorific(userName);
    // Update the question number display
    const questionNumberDisplay = document.getElementById("question-number");
    questionNumberDisplay.style.display = "block";
    const totalQuestions = questionSet.length;
    questionNumberDisplay.innerText = `${absoluteCurrent + 1} / ${totalQuestions}`;
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
    console.log("✅ showResult 함수 실행됨");
    console.log("current", current, "max", questionSet.length);
  
    // 퀴즈 관련 요소 숨기기
    document.getElementById("question-number").style.display = "none";
    document.getElementById("question-image").style.display = "none";
    document.getElementById("quiz-container").style.display = "none";
  
    // 결과 관련 요소 가져오기
    const resultContainer = document.getElementById("result-container");
    const resultText = document.getElementById("result");
    const resultImage = document.getElementById("result-image");
  
    // 요소 존재 확인
    if (!resultContainer || !resultText || !resultImage) {
      console.error("❌ 결과 요소 중 일부가 없습니다!");
      return;
    }
  
    resultContainer.style.display = "block";
    resultImage.style.display = "block";
  
    // 최종 유형 계산
    const sorted = Object.entries(score).sort((a, b) => b[1] - a[1]);
    const top = sorted[0];
    const resultType = top[0];

    const displayName = userName ? `${userName}님의` : "당신의";
    resultText.innerHTML = `<h2>${displayName} 영어독서 유형은..</br> ${resultType}이에요!</h2>`;
    resultImage.src = resultImages[resultType];
    
    const resultDescription = resultDescriptions[resultType] || "";
    const resultDescEl = document.getElementById("result-description");
    if (resultDescEl) {
      resultDescEl.innerText = resultDescription;
      resultDescEl.style.display = "block";
    }

    // 디버깅 로그
    console.log("resultType:", resultType);
    console.log("HTML 출력:", resultText.innerHTML);
  
    // 진행 바 숨기기
    progressBar.parentElement.style.display = "none";
  
    // 버튼 보이기
    document.getElementById("result-buttons").style.display = "block"; 
}

function afterMain() {
    maxQuestions = mainQuestions.length;
    showResult();
}

const startBtn = document.getElementById("start-btn");
if (startBtn) {
  startBtn.onclick = () => {
    userName = document.getElementById("username").value.trim();
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    questionSet = mainQuestions;
    showQuestion(questionSet, afterMain);
  };
}

const retryBtn = document.getElementById("retry-btn");
if (retryBtn) {
    retryBtn.onclick = () => {
        Object.keys(score).forEach(key => score[key] = 0);
        current = 0;
        absoluteCurrent = 0;
        questionSet = mainQuestions;
        history = [];
        document.getElementById("username").value = "";
        userName = "";
      
        // 결과 화면 숨기기
        document.getElementById("result-container").style.display = "none";
        document.getElementById("quiz-container").style.display = "none";

        progressBar.style.width = "0%";
        progressBar.parentElement.style.display = "block";
      
        document.getElementById("result").innerHTML = "";

        // 시작 화면으로 복귀
        document.getElementById("start-screen").style.display = "block";
      };
}

const shareBtn = document.getElementById("share-btn");
if (shareBtn) {
  shareBtn.onclick = () => {
    const resultText = document.getElementById("result").innerText;
    const shareMessage = `📘 나의 영어 독서 유형 결과!\n\n${resultText}\n\n👉 테스트 하러 가기: ${window.location.href}`;

    navigator.clipboard.writeText(shareMessage).then(() => {
      alert("링크가 복사되었어요!");
    }).catch(err => {
      console.error("❌ 클립보드 복사 실패:", err);
      alert("복사에 실패했어요. 수동으로 복사해주세요.");
    });
  };
}