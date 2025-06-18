// Application state
let currentScreen = 'start-screen';
let currentQuestion = 0;
let userAnswers = [];
let userName = '';
let typeScores = {};

// Test data
const readingTypes = {
  "dreamy_cotton": {
    "name": "몽글몽글 솜사탕",
    "subtitle": "Dreamy Cotton Candy",
    "description": "이야기에 몰입하고 상상하는 것을 좋아하는 아이예요.",
    "characteristics": ["책 내용을 새롭게 해석하거나, 자기 식으로 표현하려는 욕구가 강해요.", "창의적으로 표현할 수 있는 활동이 함께 이루어지면 더욱 몰입할 수 있어요."],
    "recommendation": "상상력을 마음껏 표현하는 경험, 에픽영어학원에서 시작해요!",
    "emoji": "🍭",
    "color": "#FFB6C1"
  },
  "curious_cheese": {
    "name": "호기심 많은 치즈큐브",
    "subtitle": "Curious Cheese Cube",
    "description": "지식이나 정보 중심의 책에 관심이 많고, 질문을 자주 하는 아이예요.",
    "characteristics": ["이야기책보다 백과사전 같은 실용적인 책을 좋아하고, 분석적으로 접근하는 경향이 있어요.", "탐구 내용을 정리하고 표현해보는 활동으로 연결해주는 것이 좋아요"],
    "recommendation": "책으로 세상을 탐구하는 힘, 에픽영어학원에서 키워가요!",
    "emoji": "🧀",
    "color": "#FFD700"
  },
  "quiet_cocoa": {
    "name": "조용한 코코아",
    "subtitle": "Quiet Cocoa",
    "description": "책은 읽지만 감정이입이나 반응이 적고, 조용히 따라읽는 스타일이에요.",
    "characteristics": ["내용을 자신의 언어로 표현하거나 느낀 점을 나누는데 어려움을 느낄 수 있어요.", "책 속 감정을 공감하고 표현하는 경험이 필요해요."],
    "recommendation": "책 읽고 표현하는 경험, 에픽영어학원에서 시작해요!",
    "emoji": "☕",
    "color": "#D2691E"
  },
  "candy_hunter": {
    "name": "캔디 헌터",
    "subtitle": "Candy Hunter",
    "description": "보상이나 칭찬이 있어야 책을 읽으려는 경향이 있어요.",
    "characteristics": ["자기 주도적으로 책을 고르기보다는 누군가의 지시나 미션이 필요해요.", "외적 동기에서 출발하지만 점차 스스로 선택하는 경험을 길러주는 게 중요해요."],
    "recommendation": "게임처럼 즐겁게 영어 책 읽어요!",
    "emoji": "🍬",
    "color": "#FF69B4"
  },
  "book_hopping": {
    "name": "찍먹 꼬치",
    "subtitle": "Book Hopping Skewer",
    "description": "호기심은 많지만 집중력이 짧고 완독까지 이어지기 어려운 경우가 많아요.",
    "characteristics": ["책을 자주 바꾸며 읽고, 끝까지 읽는 성취 경험이 부족해요.", "짧고 재밌는 책부터 완독 습관을 기르는 게 중요해요."],
    "recommendation": "끝까지 읽어내는 성취감, 에픽영어학원에서 시작해요!",
    "emoji": "🍢",
    "color": "#98FB98"
  },
  "book_slurper": {
    "name": "책순삭 스파게티",
    "subtitle": "Book Slurper Spaghetti",
    "description": "책 읽기에 몰입도가 높고, 좋아하는 책은 순식간에 끝내는 아이예요.",
    "characteristics": ["하지만 내용을 깊이 있게 이해하거나, 자신의 생각을 정리해서 표현하는 활동은 부족할 수 있어요.", "감상 표현이나 요약, 비판적 사고로 연결되는 연습이 필요해요."],
    "recommendation": "많이 읽는 아이일수록, 생각을 표현하는 힘도 중요해요!",
    "emoji": "🍝",
    "color": "#F0E68C"
  },
  "choco_curator": {
    "name": "골라먹는 초코칩",
    "subtitle": "Chocochip Curator",
    "description": "좋아하는 장르나 시리즈만 반복해서 읽는 경우가 많아요.",
    "characteristics": ["익숙한 이야기에는 몰입하지만, 새로운 장르나 책에는 도전하려 하지 않을 수 있어요.", "다양한 책을 접할 기회가 줄어들며 독서의 폭이 좁질 수 있어요."],
    "recommendation": "좋아하는 책부터 시작해서, 더 넓은 세상으로!",
    "emoji": "🍪",
    "color": "#DEB887"
  },
  "exploring_jellybean": {
    "name": "탐색하는 젤리빈",
    "subtitle": "Exploring Jellybean",
    "description": "독서 경험 자체가 적고, 읽기의 즐거움을 느껴본 적이 없는 경우가 많아요.",
    "characteristics": ["글자 많은 책에 대한 거부감, 또는 읽기에 대한 두려움을 가질 수 있어요.", "자기 수준에 맞는 책 선택이 어렵고, 책 읽기를 '공부'처럼 느끼는 경향이 있어요."],
    "recommendation": "책이 재미있는 마법, 에픽영어학원에서 시작해요!",
    "emoji": "🍡",
    "color": "#DA70D6"
  }
};

const questions = [
  {
    "id": 1,
    "question": "영어 책을 고를 때 나는..",
    "options": [
      {"text": "전에 읽었던 책이나 쉬운 책이 좋아.", "types": ["exploring_jellybean", "choco_curator"]},
      {"text": "재밌어 보이는 책이라면 뭐든 좋아.", "types": ["book_slurper", "book_hopping"]},
      {"text": "그림 보면서 마음껏 상상할 수 있는 책이 좋아.", "types": ["dreamy_cotton"]},
      {"text": "공부한 걸 해결해주는 책이 좋아.", "types": ["curious_cheese"]}
    ]
  },
  {
    "id": 2,
    "question": "책을 읽고 나면 나는..",
    "options": [
      {"text": "뿌듯한 걸 하친 않아.", "types": ["quiet_cocoa", "exploring_jellybean"]},
      {"text": "내가 느낀 걸 그리거나 이야기로 표현해보고 싶어.", "types": ["dreamy_cotton"]},
      {"text": "엄마한테 책 내용에 대해 얘기하고 싶어.", "types": ["book_slurper", "candy_hunter"]},
      {"text": "이 책에 나온 내용을 찾아보고 더 알고 싶어.", "types": ["curious_cheese"]}
    ]
  },
  {
    "id": 3,
    "question": "책을 읽을 때 나는 주로..",
    "options": [
      {"text": "읽다 보면 딴 생각이 나서 책을 다 못 읽어 떠야.", "types": ["book_hopping"]},
      {"text": "재밌으면 한번에 끝까지 다 읽어버려.", "types": ["book_slurper"]},
      {"text": "조용히 읽은 하는데 뭐가 재밌는지 잘 모르겠어.", "types": ["quiet_cocoa"]},
      {"text": "책 속 장면을 머릿속에 그리면서 천천히 읽는 편이야.", "types": ["dreamy_cotton"]}
    ]
  },
  {
    "id": 4,
    "question": "내가 책을 제일 좋아하게 되는 순간은..",
    "options": [
      {"text": "퀴즈 맞추거나 칭찬받을 때", "types": ["candy_hunter"]},
      {"text": "새로운 사실을 알게 되었을 때", "types": ["curious_cheese"]},
      {"text": "내가 좋아하는 캐릭터가 나올 때", "types": ["choco_curator"]},
      {"text": "나는 책 읽는 거 별로 안 좋아해.", "types": ["exploring_jellybean"]}
    ]
  },
  {
    "id": 5,
    "question": "책을 읽기 시작할 때 드는 생각은?",
    "options": [
      {"text": "지루할 걸 같아, 빨리 끝내면 좋겠어.", "types": ["exploring_jellybean"]},
      {"text": "제잘했다 얼른 읽고 싶어.", "types": ["book_slurper"]},
      {"text": "책에 어떤 놀라운 게 나올지 기대돼.", "types": ["curious_cheese", "dreamy_cotton"]},
      {"text": "읽다가 어려우면 어떡하지? 걱정돼.", "types": ["candy_hunter", "quiet_cocoa"]}
    ]
  },
  {
    "id": 6,
    "question": "내가 제일 싫은 건?",
    "options": [
      {"text": "글자 많고 어려운 책", "types": ["exploring_jellybean"]},
      {"text": "맨날 똑같은 책만 보는 것", "types": ["book_hopping"]},
      {"text": "아는 내용 또 반복하는 것", "types": ["curious_cheese"]},
      {"text": "책 읽고 나서 발표하는 것", "types": ["quiet_cocoa"]}
    ]
  },
  {
    "id": 7,
    "question": "선생님이 책 읽고 퀴즈 하자고 하면?",
    "options": [
      {"text": "좋아! 맞추면 스티커 받을 수도 있잖아.", "types": ["candy_hunter"]},
      {"text": "퀴즈보단 그냥 책을 더 읽고 싶어.", "types": ["book_slurper"]},
      {"text": "틀릴까봐 걱정돼.", "types": ["exploring_jellybean"]},
      {"text": "재밌겠다! 내가 얼마나 기억하는지 확인해보고 싶어.", "types": ["choco_curator", "curious_cheese"]}
    ]
  },
  {
    "id": 8,
    "question": "친구들이랑 책 이야기를 할 때 나는..",
    "options": [
      {"text": "굳이 이야기하지 않고 듣는 편이야", "types": ["quiet_cocoa"]},
      {"text": "내가 먼저 말해. 재밌었던 부분을 알려주고 싶어.", "types": ["book_slurper", "candy_hunter"]},
      {"text": "친구들하고 함께 의견을 나누는 게 즐거워.", "types": ["quiet_cocoa", "dreamy_cotton"]},
      {"text": "혼자서 생각 정리하는 게 더 좋아.", "types": ["curious_cheese", "book_hopping"]}
    ]
  }
];

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  // Initialize type scores
  Object.keys(readingTypes).forEach(type => {
    typeScores[type] = 0;
  });

  // Set up event listeners
  setupEventListeners();
  
  // Start character slideshow
  startCharacterSlideshow();
  
  // Show start screen
  showScreen('start-screen');
}

function setupEventListeners() {
  // Start test button
  document.getElementById('start-test-btn').addEventListener('click', function() {
    showScreen('name-screen');
    document.getElementById('user-name').focus();
  });

  // Name submit button
  document.getElementById('name-submit-btn').addEventListener('click', function() {
    const nameInput = document.getElementById('user-name');
    userName = nameInput.value.trim();
    
    if (userName.length < 1) {
      alert('이름을 입력해주세요! 😊');
      nameInput.focus();
      return;
    }
    
    startQuestions();
  });

  // Name input enter key
  document.getElementById('user-name').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      document.getElementById('name-submit-btn').click();
    }
  });

  // Previous button
  document.getElementById('prev-btn').addEventListener('click', function() {
    if (currentQuestion > 0) {
      currentQuestion--;
      displayQuestion();
    }
  });

  // Restart button
  document.getElementById('restart-btn').addEventListener('click', function() {
    restartTest();
  });

  // Share button
  document.getElementById('share-btn').addEventListener('click', function() {
    shareResult();
  });
}

function startCharacterSlideshow() {
  const slides = document.querySelectorAll('.character-slide');
  let currentSlide = 0;

  setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }, 2000);
}

function showScreen(screenId) {
  // Hide all screens
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });
  
  // Show target screen
  document.getElementById(screenId).classList.add('active');
  currentScreen = screenId;
}

function startQuestions() {
  currentQuestion = 0;
  userAnswers = [];
  
  // Reset scores
  Object.keys(readingTypes).forEach(type => {
    typeScores[type] = 0;
  });
  
  showScreen('question-screen');
  displayQuestion();
}

function displayQuestion() {
  const question = questions[currentQuestion];
  const progressPercent = ((currentQuestion + 1) / questions.length) * 100;
  
  // Update progress
  document.getElementById('progress-fill').style.width = progressPercent + '%';
  document.getElementById('progress-text').textContent = `${currentQuestion + 1}/${questions.length}`;
  
  // Update question
  document.getElementById('question-text').textContent = question.question;
  
  // Update options
  const optionsContainer = document.getElementById('options-container');
  optionsContainer.innerHTML = '';
  
  question.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.className = 'option-btn';
    button.textContent = option.text;
    button.addEventListener('click', function() {
      selectOption(index);
    });
    
    // Show selected state if this question was answered before
    if (userAnswers[currentQuestion] === index) {
      button.classList.add('selected');
    }
    
    optionsContainer.appendChild(button);
  });
  
  // Show/hide previous button
  const prevBtn = document.getElementById('prev-btn');
  if (currentQuestion > 0) {
    prevBtn.classList.add('show');
  } else {
    prevBtn.classList.remove('show');
  }
}

function selectOption(optionIndex) {
  const question = questions[currentQuestion];
  const selectedOption = question.options[optionIndex];
  
  // Update visual selection
  document.querySelectorAll('.option-btn').forEach((btn, index) => {
    btn.classList.toggle('selected', index === optionIndex);
  });
  
  // Store answer
  userAnswers[currentQuestion] = optionIndex;
  
  // Update scores
  selectedOption.types.forEach(type => {
    typeScores[type]++;
  });
  
  // Move to next question after a short delay
  setTimeout(() => {
    if (currentQuestion < questions.length - 1) {
      currentQuestion++;
      displayQuestion();
    } else {
      showLoadingScreen();
    }
  }, 500);
}

function showLoadingScreen() {
  showScreen('loading-screen');
  
  const progressBar = document.getElementById('loading-progress');
  let progress = 0;
  
  const interval = setInterval(() => {
    progress += 2;
    progressBar.style.width = progress + '%';
    
    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        showResult();
      }, 500);
    }
  }, 60); // 3 seconds total (100 * 60ms / 2)
}

function showResult() {
  // Calculate result type
  const resultType = calculateResultType();
  const typeData = readingTypes[resultType];
  
  // Update result display
  document.getElementById('result-character').textContent = typeData.emoji;
  document.getElementById('result-type-name').textContent = typeData.name;
  document.getElementById('result-type-subtitle').textContent = typeData.subtitle;
  document.getElementById('result-description-text').textContent = typeData.description;
  
  // Update characteristics
  const characteristicsContainer = document.getElementById('result-characteristics');
  characteristicsContainer.innerHTML = '';
  
  typeData.characteristics.forEach(characteristic => {
    const div = document.createElement('div');
    div.className = 'characteristic-item';
    div.textContent = characteristic;
    characteristicsContainer.appendChild(div);
  });
  
  // Apply theme color
  const resultCard = document.querySelector('.result-type-card');
  resultCard.style.borderColor = typeData.color;
  
  showScreen('result-screen');
}

function calculateResultType() {
  // Find the type with the highest score
  let maxScore = 0;
  let resultType = 'exploring_jellybean'; // default
  
  Object.entries(typeScores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type;
    }
  });
  
  return resultType;
}

function shareResult() {
  const resultType = calculateResultType();
  const typeData = readingTypes[resultType];
  const shareText = `나의 영어독서 유형은 "${typeData.name}" 이에요! 🍭 나만의 간식 친구 찾기 테스트를 해보세요!`;
  const shareUrl = window.location.href;
  
  if (navigator.share) {
    navigator.share({
      title: '나만의 간식 친구 찾기 테스트',
      text: shareText,
      url: shareUrl
    }).catch(console.error);
  } else if (navigator.clipboard) {
    const fullShareText = `${shareText}\n${shareUrl}`;
    navigator.clipboard.writeText(fullShareText).then(() => {
      alert('결과가 클립보드에 복사되었어요! 📋\n친구들에게 공유해보세요!');
    }).catch(() => {
      fallbackCopyTextToClipboard(fullShareText);
    });
  } else {
    fallbackCopyTextToClipboard(`${shareText}\n${shareUrl}`);
  }
}

function fallbackCopyTextToClipboard(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";
  
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  
  try {
    document.execCommand('copy');
    alert('결과가 복사되었어요! 📋\n친구들에게 공유해보세요!');
  } catch (err) {
    alert('공유하기가 지원되지 않는 브라우저예요. 😢\n링크를 수동으로 복사해주세요.');
  }
  
  document.body.removeChild(textArea);
}

function restartTest() {
  // Reset all state
  currentQuestion = 0;
  userAnswers = [];
  userName = '';
  
  Object.keys(readingTypes).forEach(type => {
    typeScores[type] = 0;
  });
  
  // Clear name input
  document.getElementById('user-name').value = '';
  
  // Go back to start screen
  showScreen('start-screen');
}