// ==================== TOMOOH MASTER APPLICATION ENGINE ====================

// --- STATE MANAGEMENT ---
const DEFAULT_STATE = {
  user: {
    isRegistered: false,
    name: "أحمد عادل",
    age: 17,
    gender: "ذكر",
    stage: "highschool_3",
    stageTitle: "الثانوية العامة / بكالوريا (الصف الثالث)",
    track: "علمي علوم",
    careerDream: "طبيب بشري",
    favoriteColor: "red",
    tone: "vibrant",
    hobby: "reading",
    customHobby: "",
    challenges: ["boredom", "phone", "backlog"],
    problemsFreeText: "الفيزياء بحس إني بفهم في الحصة بس باجي أحل بتوتر وبغلط في الأسئلة الجديدة."
  },
  stats: {
    totalStudyMinutes: 125,
    todayMinutes: 45,
    streakDays: 4,
    sessionsCompleted: 5
  },
  timer: {
    durationMinutes: 25,
    remainingSeconds: 25 * 60,
    isRunning: false,
    intervalId: null,
    currentSubject: "physics",
    currentLesson: "إشعاع الجسم الأسود وظاهرة كومتون",
    currentSessionNumber: 1, // session 1 or 2
    recordedEmotion: null
  },
  errorBank: [],
  backlog: [],
  deskSnaps: [
    {
      id: "snap-1",
      imageUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
      mood: "تعبت بس ما وقفتش واستمريت 💪",
      subject: "فيزياء - كيرشوف",
      timestamp: "منذ يومين"
    },
    {
      id: "snap-2",
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
      mood: "حماس غير مسبوق وتركيز عالي 🔥",
      subject: "كيمياء عضوية",
      timestamp: "أمس"
    }
  ],
  activePage: "dashboard",
  darkMode: false
};

let appState = loadState();

// --- PERSISTENCE HELPERS ---
function loadState() {
  try {
    const raw = localStorage.getItem("tomooh_state");
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed.errorBank) && parsed.errorBank.length === 2 && parsed.errorBank[0].id === 'err-1') {
        parsed.errorBank = [];
      }
      if (Array.isArray(parsed.backlog) && parsed.backlog.length === 2 && parsed.backlog[0].id === 'bk-1') {
        parsed.backlog = [];
      }
      return parsed;
    }
  } catch (e) {
    console.error("Error reading localStorage", e);
  }
  return JSON.parse(JSON.stringify(DEFAULT_STATE));
}

function saveState() {
  try {
    localStorage.setItem("tomooh_state", JSON.stringify(appState));
  } catch (e) {
    console.error("Error saving localStorage", e);
  }
}

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  applyThemeColor(appState.user.favoriteColor || "red");
  applyDarkMode(appState.darkMode);
  applyHobbyTimerVisual(appState.user.hobby || "reading");
  updateGoalBanner();
  renderDashboard();
  initTimerPage();
  renderSubjects();
  renderErrorBank();
  renderBacklog();
  renderJourneyPage();
  updateBadges();

  // If student is not registered yet, launch the onboarding modal!
  if (!appState.user.isRegistered) {
    openOnboardingModal();
  }
});

// ==================== SOUND EFFECTS (MUTED AS REQUESTED) ====================
function playChime(type = "success") {
  // Muted as requested
}

// ==================== DYNAMIC COLOR THEME ENGINE ====================
function selectColorTheme(colorName) {
  document.querySelectorAll(".color-pick-btn").forEach(btn => {
    btn.classList.remove("ring-4", "ring-brand-500", "border-brand-500");
    if (btn.dataset.color === colorName) {
      btn.classList.add("ring-4", "ring-brand-500");
    }
  });
  appState.user.favoriteColor = colorName;
  applyThemeColor(colorName);
  saveState();
}

function applyThemeColor(colorName) {
  document.documentElement.setAttribute("data-theme-color", colorName);
}

function toggleDarkMode() {
  appState.darkMode = !appState.darkMode;
  applyDarkMode(appState.darkMode);
  saveState();
}

function applyDarkMode(isDark) {
  const icon = document.getElementById("themeToggleIcon");
  if (isDark) {
    document.documentElement.classList.add("dark");
    if (icon) icon.className = "fa-solid fa-sun text-sm text-amber-400";
  } else {
    document.documentElement.classList.remove("dark");
    if (icon) icon.className = "fa-solid fa-moon text-sm";
  }
}

// ==================== HOBBY & TIMER ADAPTOR ENGINE ====================
function onHobbySelect(hobby) {
  appState.user.hobby = hobby;
  applyHobbyTimerVisual(hobby);
  saveState();
}

function applyHobbyTimerVisual(hobby) {
  const container = document.getElementById("hobbyShapeContainer");
  if (!container) return;

  // Hide all shapes
  const shapes = container.querySelectorAll(".hobby-shape");
  shapes.forEach(el => el.classList.add("hidden"));

  // Hide or show matching shape
  const bookEl = document.getElementById("shapeReadingBook");
  const footballEl = document.getElementById("shapeFootball");
  const codingEl = document.getElementById("shapeCoding");
  const artEl = document.getElementById("shapeArt");
  const previewIcon = document.getElementById("hobbyTimerIconPreview");
  const badgeIcon = document.getElementById("timerHobbyBadgeIcon");
  const themeTag = document.getElementById("timerHobbyThemeTag");
  const hobbySpan = document.getElementById("userHobbyNameSpan");

  if (hobby === "reading") {
    if (bookEl) bookEl.classList.remove("hidden");
    if (previewIcon) previewIcon.className = "fa-solid fa-book-bookmark text-xl";
    if (badgeIcon) badgeIcon.innerHTML = `<i class="fa-solid fa-book-open"></i>`;
    if (themeTag) themeTag.innerText = "شكل الكتاب والقراءة ثلاثي الأبعاد";
    if (hobbySpan) hobbySpan.innerText = "القراءة والروايات";
  } else if (hobby === "football") {
    if (footballEl) footballEl.classList.remove("hidden");
    if (previewIcon) previewIcon.className = "fa-solid fa-futbol text-xl";
    if (badgeIcon) badgeIcon.innerHTML = `<i class="fa-solid fa-futbol"></i>`;
    if (themeTag) themeTag.innerText = "شكل المستديرة واستاد الأبطال";
    if (hobbySpan) hobbySpan.innerText = "كرة القدم والرياضة";
  } else if (hobby === "coding") {
    if (codingEl) codingEl.classList.remove("hidden");
    if (previewIcon) previewIcon.className = "fa-solid fa-laptop-code text-xl";
    if (badgeIcon) badgeIcon.innerHTML = `<i class="fa-solid fa-laptop-code"></i>`;
    if (themeTag) themeTag.innerText = "شاشة التيرمينال والبرمجة";
    if (hobbySpan) hobbySpan.innerText = "البرمجة والتقنية";
  } else {
    if (artEl) artEl.classList.remove("hidden");
    if (previewIcon) previewIcon.className = "fa-solid fa-palette text-xl";
    if (badgeIcon) badgeIcon.innerHTML = `<i class="fa-solid fa-palette"></i>`;
    if (themeTag) themeTag.innerText = "لوحة الألوان والفنون";
    if (hobbySpan) hobbySpan.innerText = "الفنون والإبداع";
  }

  // Update Inspiring Quotes
  updateTimerQuote(hobby);
}

function updateTimerQuote(hobby) {
  const quoteAuthor = document.getElementById("quoteAuthor");
  const quoteContent = document.getElementById("quoteContent");
  if (!quoteAuthor || !quoteContent) return;

  const quotes = INSPIRING_QUOTES[hobby] || INSPIRING_QUOTES.reading;
  const picked = quotes[Math.floor(Math.random() * quotes.length)];
  quoteAuthor.innerText = picked.author;
  quoteContent.innerText = picked.text;
}

// ==================== ONBOARDING WIZARD FLOW ====================
function openOnboardingModal() {
  const modal = document.getElementById("onboardingModal");
  if (modal) modal.classList.remove("hidden");
  onOnboardingStageChange();
  goToOnboardingStep(1);
}

function goToOnboardingStep(stepNumber) {
  document.querySelectorAll(".onboarding-step").forEach(el => el.classList.add("hidden"));
  const stepEl = document.getElementById(`onboardingStep${stepNumber}`);
  if (stepEl) stepEl.classList.remove("hidden");

  const pBar = document.getElementById("onboardingProgressBar");
  if (pBar) {
    pBar.style.width = stepNumber === 1 ? "50%" : "100%";
  }

  // Update dream preview on step 2
  if (stepNumber === 2) {
    const input = document.getElementById("obCareerDreamInput");
    const dreamVal = (input && input.value) ? input.value : "كلية الطب البشري";
    const span = document.getElementById("selectedCollegeNameDisplay");
    if (span) span.innerText = dreamVal;
    const sentence = document.getElementById("dreamPreviewSentence");
    if (sentence) sentence.innerText = `«حلم ${dreamVal} مستنيك يا دكتور! 🩺»`;
  }
}

function handleGoogleSignIn() {
  // Simulate Google Sign-in instant feedback
  document.getElementById("obNameInput").value = "أحمد عادل محمد";
  document.getElementById("obAgeInput").value = "17";
  playChime("success");
  goToOnboardingStep(2);
}

function getCurriculumKey() {
  const stage = appState.user.stage || "highschool_3";
  const track = appState.user.track || "علمي علوم";

  if (stage === "prep_1") return "prep_1_عام";
  if (stage === "prep_2") return "prep_2_عام";
  if (stage === "prep_3") return "prep_3_عام";
  if (stage === "highschool_1") return "highschool_1_عام";
  if (stage === "highschool_2") {
    return track.includes("أدبي") ? "highschool_2_أدبي" : "highschool_2_علمي";
  }
  if (stage === "highschool_3") {
    if (track.includes("رياضة")) return "highschool_3_علمي رياضة";
    if (track.includes("أدبي")) return "highschool_3_أدبي";
    return "highschool_3_علمي علوم";
  }
  if (stage === "university") {
    if (track.includes("هندس")) return "university_كليات الهندسة والتكنولوجيا";
    if (track.includes("حاسب") || track.includes("ذكاء")) return "university_كليات الحاسبات والذكاء الاصطناعي";
    return "university_كليات الطب والعلوم الصحية";
  }
  return "highschool_3_علمي علوم";
}

function getActiveCurriculum() {
  const key = getCurriculumKey();
  return CURRICULUM_DATA[key] || CURRICULUM_DATA["highschool_3_علمي علوم"];
}

function onOnboardingStageChange() {
  const stage = document.getElementById("obStageSelect").value;
  const trackContainer = document.getElementById("obTrackContainer");
  const trackSelect = document.getElementById("obTrackSelect");

  if (!trackContainer || !trackSelect) return;

  if (stage === "prep_1" || stage === "prep_2" || stage === "prep_3" || stage === "highschool_1") {
    trackContainer.classList.add("hidden");
    trackSelect.innerHTML = `<option value="عام">المنهج العام الموحد لعام 2026</option>`;
  } else if (stage === "highschool_2") {
    trackContainer.classList.remove("hidden");
    trackSelect.innerHTML = `
      <option value="علمي">شعبة علمي (فيزياء، كيمياء، أحياء، رياضيات)</option>
      <option value="أدبي">شعبة أدبي (تاريخ، جغرافيا، علم نفس، رياضيات)</option>
    `;
  } else if (stage === "highschool_3") {
    trackContainer.classList.remove("hidden");
    trackSelect.innerHTML = `
      <option value="علمي علوم">علمي علوم (طب، صيدلة، علوم)</option>
      <option value="علمي رياضة">علمي رياضة (هندسة، حاسبات)</option>
      <option value="أدبي">شعبة أدبي (تاريخ، جغرافيا، إحصاء)</option>
    `;
  } else if (stage === "university") {
    trackContainer.classList.remove("hidden");
    trackSelect.innerHTML = `
      <option value="كليات الطب والعلوم الصحية">كليات الطب والعلوم الصحية</option>
      <option value="كليات الهندسة والتكنولوجيا">كليات الهندسة والتكنولوجيا</option>
      <option value="كليات الحاسبات والذكاء الاصطناعي">كليات الحاسبات والذكاء الاصطناعي</option>
    `;
  }
}

function selectCollegeCard(collegeName, titlePrefix, emoji, btnElement) {
  document.querySelectorAll(".college-card").forEach(c => c.classList.remove("active"));
  if (btnElement) btnElement.classList.add("active");

  const input = document.getElementById("obCareerDreamInput");
  const display = document.getElementById("selectedCollegeNameDisplay");
  const sentence = document.getElementById("dreamPreviewSentence");

  if (input) input.value = collegeName;
  if (display) display.innerText = collegeName;
  if (sentence) sentence.innerText = `«حلم ${collegeName} مستنيك يا ${titlePrefix}! ${emoji}»`;

  // Clear custom input if pre-made college is selected
  const customInput = document.getElementById("obCustomDreamInput");
  if (customInput) customInput.value = "";
}

function onCustomDreamInput(value) {
  if (value.trim()) {
    document.querySelectorAll(".college-card").forEach(c => c.classList.remove("active"));
    const input = document.getElementById("obCareerDreamInput");
    const display = document.getElementById("selectedCollegeNameDisplay");
    const sentence = document.getElementById("dreamPreviewSentence");

    if (input) input.value = value.trim();
    if (display) display.innerText = value.trim();
    if (sentence) sentence.innerText = `«حلم ${value.trim()} مستنيك يا بطل! 🎯»`;
  }
}

function finishOnboarding() {
  const name = document.getElementById("obNameInput").value.trim() || "أحمد عادل";
  const age = document.getElementById("obAgeInput").value || 17;
  const stageSelect = document.getElementById("obStageSelect");
  const stage = stageSelect.value;
  const stageTitle = stageSelect.options[stageSelect.selectedIndex].text;
  const track = document.getElementById("obTrackSelect") ? document.getElementById("obTrackSelect").value : "عام";
  const gender = document.querySelector('input[name="obGender"]:checked')?.value || "ذكر";
  const dream = document.getElementById("obCareerDreamInput").value.trim() || "طبيب بشري";
  const customHobby = document.getElementById("obCustomHobbyInput") ? document.getElementById("obCustomHobbyInput").value.trim() : "";

  // Save to State
  appState.user.isRegistered = true;
  appState.user.name = name;
  appState.user.age = age;
  appState.user.stage = stage;
  appState.user.stageTitle = stageTitle;
  appState.user.track = track;
  appState.user.gender = gender;
  appState.user.careerDream = dream;
  appState.user.customHobby = customHobby;

  saveState();

  // Show Animated Preparation Screen
  document.querySelectorAll(".onboarding-step").forEach(el => el.classList.add("hidden"));
  const loader = document.getElementById("onboardingStepLoader");
  if (loader) loader.classList.remove("hidden");

  setTimeout(() => {
    document.getElementById("onboardingModal").classList.add("hidden");
    playChime("success");
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    updateGoalBanner();
    renderDashboard();
    renderSubjects();
    initTimerPage();
    applyHobbyTimerVisual(appState.user.hobby);
  }, 1600);
}

// ==================== GOAL BANNER & MOTTO ====================
function updateGoalBanner() {
  const dream = appState.user.careerDream || "الطب";
  const gender = appState.user.gender || "ذكر";
  const prefix = gender === "أنثى" ? "يا دكتورة" : "يا دكتور";
  const bannerText = document.getElementById("mottoText");
  const icon = document.getElementById("mottoIcon");
  const headerName = document.getElementById("headerUserName");
  const headerAvatar = document.getElementById("headerUserAvatar");

  if (bannerText) {
    bannerText.innerHTML = `حلم <b>${dream}</b> مستنيك ${prefix}.. واصل مسيرتك!`;
  }
  if (icon) {
    if (dream.includes("طب") || dream.includes("صيدل")) icon.innerText = "🩺";
    else if (dream.includes("هندس")) icon.innerText = "📐";
    else if (dream.includes("برمج") || dream.includes("حاسب")) icon.innerText = "💻";
    else if (dream.includes("إعلام") || dream.includes("أدب")) icon.innerText = "🎙️";
    else icon.innerText = "🎯";
  }

  if (headerName) headerName.innerText = appState.user.name;
  if (headerAvatar) headerAvatar.innerText = (appState.user.name || "ط")[0];
}

// ==================== DASHBOARD RENDERING ====================
function renderDashboard() {
  document.getElementById("dashStudentName").innerText = appState.user.name;
  document.getElementById("studentStageLabel").innerText = `${appState.user.stageTitle} - ${appState.user.track}`;
  document.getElementById("dashTotalStudyMinutes").innerText = `${appState.stats.totalStudyMinutes} دقيقة`;
  document.getElementById("dashTodayMinutes").innerText = `${appState.stats.todayMinutes} دقيقة`;
  document.getElementById("dashErrorCount").innerText = appState.errorBank.length;
  document.getElementById("dashBacklogCount").innerText = appState.backlog.filter(b => !b.completed).length;

  // Subjects grid preview
  const grid = document.getElementById("dashSubjectsGrid");
  if (!grid) return;

  const subjects = getActiveCurriculum();

  grid.innerHTML = subjects.map(sub => `
    <div onclick="openSubjectHub('${sub.id}')" class="bg-slate-50 hover:bg-white border border-slate-200/80 hover:border-brand-300 p-3.5 rounded-2xl cursor-pointer transition-all hover:scale-102 flex flex-col justify-between group shadow-2xs">
      <div class="flex items-center justify-between mb-2">
        <div class="w-8 h-8 rounded-lg bg-gradient-to-tr ${sub.color} text-white flex items-center justify-center text-xs shadow-xs">
          <i class="fa-solid ${sub.icon}"></i>
        </div>
        <span class="text-[10px] text-slate-400 font-bold">${sub.completedLessons}/${sub.totalLessons}</span>
      </div>
      <div>
        <h4 class="font-bold text-xs text-slate-800 line-clamp-1 group-hover:text-brand-600 transition">${sub.name}</h4>
        <div class="w-full bg-slate-200 rounded-full h-1 mt-2 overflow-hidden">
          <div class="bg-brand-500 h-1 rounded-full" style="width: ${(sub.completedLessons / sub.totalLessons) * 100}%"></div>
        </div>
      </div>
    </div>
  `).join("");
}

// ==================== SMART TIMER ENGINE ====================
function initTimerPage() {
  const subjectSelect = document.getElementById("timerSubjectSelect");
  if (!subjectSelect) return;

  const subjects = getActiveCurriculum();

  subjectSelect.innerHTML = subjects.map(s => `
    <option value="${s.id}">${s.name}</option>
  `).join("");

  onTimerSubjectChange();
}

function onTimerSubjectChange() {
  const subjectId = document.getElementById("timerSubjectSelect").value;
  const lessonSelect = document.getElementById("timerLessonSelect");
  const subjects = getActiveCurriculum();
  const sub = subjects.find(s => s.id === subjectId) || subjects[0];

  lessonSelect.innerHTML = sub.lessons.map(l => `
    <option value="${l.title}">${l.title}</option>
  `).join("");

  const badge = document.getElementById("timerCurrentLessonBadge");
  if (badge) badge.innerText = sub.lessons[0].title;
}

function getSelectedTimerMinutes() {
  const customInput = document.getElementById("customTimerMinutesInput");
  if (customInput && customInput.value) {
    const val = parseInt(customInput.value, 10);
    if (!isNaN(val) && val > 0) return val;
  }
  const select = document.getElementById("timerSessionDurationSelect");
  if (select && select.value) {
    const val = parseInt(select.value, 10);
    if (!isNaN(val) && val > 0) return val;
  }
  return 25;
}

function onCustomTimerDurationChange(val) {
  let minutes = parseInt(val, 10);
  if (isNaN(minutes) || minutes < 1) minutes = 1;
  if (minutes > 720) minutes = 720;

  appState.timer.durationMinutes = minutes;
  if (!appState.timer.isRunning) {
    appState.timer.remainingSeconds = minutes * 60;
    updateTimerDisplay();
  }

  const lbl = document.getElementById("lblDuration1");
  if (lbl) lbl.innerText = `${minutes} دقيقة`;

  const select = document.getElementById("timerSessionDurationSelect");
  if (select) {
    const opt = Array.from(select.options).find(o => parseInt(o.value, 10) === minutes);
    if (opt) select.value = opt.value;
  }
}

function onTimerPresetSelect(val) {
  const minutes = parseInt(val, 10) || 25;
  const customInput = document.getElementById("customTimerMinutesInput");
  if (customInput) customInput.value = minutes;
  onCustomTimerDurationChange(minutes);
}

function startTimer() {
  if (appState.timer.isRunning) return;

  const durationMin = getSelectedTimerMinutes();
  appState.timer.durationMinutes = durationMin;
  if (!appState.timer.intervalId) {
    if (appState.timer.remainingSeconds <= 0 || appState.timer.remainingSeconds > durationMin * 60) {
      appState.timer.remainingSeconds = durationMin * 60;
    }
  }

  appState.timer.isRunning = true;
  document.getElementById("btnTimerStart").classList.add("hidden");
  document.getElementById("btnTimerPause").classList.remove("hidden");

  appState.timer.intervalId = setInterval(() => {
    if (appState.timer.remainingSeconds > 0) {
      appState.timer.remainingSeconds--;
      updateTimerDisplay();
      
      // Update session 1 progress
      const totalSec = durationMin * 60;
      const progress = ((totalSec - appState.timer.remainingSeconds) / totalSec) * 100;
      const bar = document.getElementById("sessionPart1Progress");
      if (bar) bar.style.width = `${progress}%`;

    } else {
      pauseTimer();
      onSessionComplete();
    }
  }, 1000);
}

function pauseTimer() {
  appState.timer.isRunning = false;
  if (appState.timer.intervalId) {
    clearInterval(appState.timer.intervalId);
    appState.timer.intervalId = null;
  }
  document.getElementById("btnTimerStart").classList.remove("hidden");
  document.getElementById("btnTimerPause").classList.add("hidden");
}

function resetTimer() {
  pauseTimer();
  const durationMin = getSelectedTimerMinutes();
  appState.timer.durationMinutes = durationMin;
  appState.timer.remainingSeconds = durationMin * 60;
  updateTimerDisplay();
  const bar = document.getElementById("sessionPart1Progress");
  if (bar) bar.style.width = "0%";
}

function updateTimerDisplay() {
  const m = Math.floor(appState.timer.remainingSeconds / 60);
  const s = appState.timer.remainingSeconds % 60;
  const str = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;

  const displays = [
    document.getElementById("timerDisplay"),
    document.getElementById("timerDisplayFootball"),
    document.getElementById("timerDisplayCoding"),
    document.getElementById("timerDisplayArt")
  ];
  displays.forEach(el => {
    if (el) el.innerText = str;
  });
}

function simulateSessionEndFast() {
  resetTimer();
  onSessionComplete();
}

function onSessionComplete() {
  playChime("bell");
  const dur = appState.timer.durationMinutes || 25;
  appState.stats.todayMinutes += dur;
  appState.stats.totalStudyMinutes += dur;
  saveState();
  renderDashboard();

  // If session 1 finished, show emotion check-in modal!
  if (appState.timer.currentSessionNumber === 1) {
    openEmotionCheckModal();
  } else {
    // Session 2 finished, open post-session quiz!
    openPostSessionQuizModal();
  }
}

// ==================== EMOTIONS & ANTI-BOREDOM SURPRISE ====================
function openEmotionCheckModal() {
  const modal = document.getElementById("emotionCheckModal");
  if (modal) modal.classList.remove("hidden");
}

function recordEmotionAndProceed(emotionType) {
  let note = "";
  if (emotionType === "bored") note = "ملل وزهقان";
  else if (emotionType === "tired") note = "تعبان ومجهد";
  else if (emotionType === "focused") note = "متحمس ومركز";
  else if (emotionType === "distracted") note = "متشتت شوية";
  else {
    note = document.getElementById("customEmotionNote").value.trim() || "إرهاق خفيف";
  }

  appState.timer.recordedEmotion = note;
  document.getElementById("emotionCheckModal").classList.add("hidden");

  // Show surprise modal to break boredom!
  openSurpriseModal(emotionType);
}

function openSurpriseModal(emotionType) {
  const modal = document.getElementById("surpriseModal");
  const wrapper = document.getElementById("surpriseContentWrapper");
  if (!modal || !wrapper) return;

  const hobby = appState.user.hobby || "reading";
  const reward = SURPRISE_REWARDS[hobby] || SURPRISE_REWARDS.reading;

  wrapper.innerHTML = `
    <h4 class="font-bold text-sm text-brand-700">${reward.title}</h4>
    <div class="my-2 text-xs sm:text-sm text-slate-700 leading-relaxed font-serif bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-2xs">
      ${reward.content}
    </div>
    <p class="text-xs text-amber-800 font-semibold italic">
      🔒 ${reward.continuationPromise}
    </p>
  `;

  modal.classList.remove("hidden");
}

function closeSurpriseAndStartNextSession() {
  document.getElementById("surpriseModal").classList.add("hidden");
  appState.timer.currentSessionNumber = 2;
  const ratio = document.getElementById("sessionPlanRatio");
  if (ratio) ratio.innerText = "جلسة 2 من 2";
  resetTimer();
  startTimer();
}

// ==================== POST-SESSION QUIZ & EVALUATION ====================
function openPostSessionQuizModal() {
  const modal = document.getElementById("postSessionQuizModal");
  document.getElementById("quizPhaseWhatStudied").classList.remove("hidden");
  document.getElementById("quizPhaseQuestion").classList.add("hidden");
  if (modal) modal.classList.remove("hidden");
}

let currentQuizQuestionObj = null;

function launchInteractiveSectionQuiz() {
  document.getElementById("quizPhaseWhatStudied").classList.add("hidden");
  document.getElementById("quizPhaseQuestion").classList.remove("hidden");

  const subjects = getActiveCurriculum();
  const sub = subjects.find(s => s.id === document.getElementById("timerSubjectSelect").value) || subjects[0];
  
  currentQuizQuestionObj = sub.quizzes[0];

  document.getElementById("quizSubjectTag").innerText = `${sub.name} - سؤال قياس الفهم`;
  document.getElementById("quizQuestionText").innerText = currentQuizQuestionObj.question;

  const optContainer = document.getElementById("quizOptionsContainer");
  optContainer.innerHTML = currentQuizQuestionObj.options.map((opt, idx) => `
    <label class="flex items-center gap-2.5 p-3 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition">
      <input type="radio" name="quizChoice" value="${idx}" class="text-brand-600">
      <span class="text-xs font-semibold text-slate-800">${opt}</span>
    </label>
  `).join("");

  const fbBox = document.getElementById("quizFeedbackBox");
  fbBox.className = "hidden p-3 rounded-xl text-xs";
}

function submitQuizAnswer() {
  const checked = document.querySelector('input[name="quizChoice"]:checked');
  if (!checked) {
    alert("من فضلك اختر إجابة أولاً!");
    return;
  }

  const selectedIdx = parseInt(checked.value);
  const isCorrect = selectedIdx === currentQuizQuestionObj.correct;
  const fbBox = document.getElementById("quizFeedbackBox");
  fbBox.classList.remove("hidden");

  if (isCorrect) {
    playChime("success");
    fbBox.className = "p-3 rounded-xl text-xs bg-emerald-50 text-emerald-800 border border-emerald-200";
    fbBox.innerHTML = `
      <strong>إجابة صحيحة وممتازة! 🎉</strong>
      <p class="mt-1">${currentQuizQuestionObj.explanation}</p>
      <p class="mt-2 text-brand-600 font-bold">✨ مبروك! فتحت الجزء الثاني من الرواية وجائزتك!</p>
    `;
    confetti({ particleCount: 50, spread: 60 });
  } else {
    fbBox.className = "p-3 rounded-xl text-xs bg-rose-50 text-rose-800 border border-rose-200";
    fbBox.innerHTML = `
      <strong>إجابة خاطئة.. لا تقلق أبداً! 🛡️</strong>
      <p class="mt-1">تم حفظ هذا السؤال تلقائياً في <b>«بنك الأخطاء - راجع غلطاتك»</b> ليفضل معاك لآخر السنة تراجعه وتثبت فكرته!</p>
      <p class="mt-1 text-slate-700"><b>الإجابة الصحيحة:</b> ${currentQuizQuestionObj.options[currentQuizQuestionObj.correct]}</p>
      <p class="mt-1"><b>التفسير:</b> ${currentQuizQuestionObj.explanation}</p>
    `;

    // Save to Error Bank
    appState.errorBank.unshift({
      id: "err-" + Date.now(),
      subject: document.getElementById("timerSubjectSelect").value,
      lesson: document.getElementById("timerLessonSelect").value,
      question: currentQuizQuestionObj.question,
      userAnswer: currentQuizQuestionObj.options[selectedIdx],
      correctAnswer: currentQuizQuestionObj.options[currentQuizQuestionObj.correct],
      explanation: currentQuizQuestionObj.explanation,
      dateAdded: new Date().toISOString().split("T")[0],
      reviewed: false
    });
    saveState();
    renderErrorBank();
    updateBadges();
  }

  const btn = document.getElementById("btnNextQuizQuestion");
  btn.innerText = "إنهاء الجلسة والعودة للرئيسية";
  btn.onclick = () => {
    document.getElementById("postSessionQuizModal").classList.add("hidden");
    appState.timer.currentSessionNumber = 1;
    navigateTo("dashboard");
  };
}

// ==================== ERROR BANK (راجع غلطاتك) ====================
function renderErrorBank(filterSubject = "all") {
  const container = document.getElementById("errorBankList");
  const heroTotal = document.getElementById("errorBankHeroTotal");
  if (!container) return;

  let list = appState.errorBank;
  if (filterSubject !== "all") {
    list = list.filter(e => e.subject.includes(filterSubject));
  }

  if (heroTotal) heroTotal.innerText = appState.errorBank.length;

  if (list.length === 0) {
    container.innerHTML = `
      <div class="bg-white border border-slate-200/80 rounded-2xl p-8 text-center text-slate-400">
        <i class="fa-solid fa-circle-check text-4xl text-emerald-500 mb-2"></i>
        <h4 class="font-bold text-slate-700">لا توجد غلطات مسجلة في هذا القسم!</h4>
        <p class="text-xs mt-1">عاش جداً يا بطل، واصل حل الامتحانات ومراجعة المواد.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(err => `
    <div class="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs space-y-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800">${err.subject}</span>
          <span class="text-xs text-slate-400">${err.lesson || 'سؤال منهجي'}</span>
        </div>
        <span class="text-[11px] text-slate-400 font-mono">${err.dateAdded}</span>
      </div>

      <h4 class="font-bold text-sm text-slate-900">${err.question}</h4>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
        <div class="p-2.5 rounded-xl bg-rose-50 border border-rose-100 text-rose-800">
          <span class="font-bold block text-rose-600">إجابتك السابقة (الغلط):</span>
          <span>${err.userAnswer}</span>
        </div>
        <div class="p-2.5 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-800">
          <span class="font-bold block text-emerald-600">الإجابة النموذجية الصح:</span>
          <span>${err.correctAnswer}</span>
        </div>
      </div>

      <div class="p-3 bg-slate-50 rounded-xl text-xs text-slate-600 border border-slate-100">
        <strong class="text-slate-800">تفسير فكرة السؤال:</strong>
        <p class="mt-0.5 leading-relaxed">${err.explanation}</p>
      </div>

      <div class="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
        <button onclick="retestErrorQuestion('${err.id}')" class="text-brand-600 hover:text-brand-700 font-bold flex items-center gap-1">
          <i class="fa-solid fa-rotate-right text-[10px]"></i>
          <span>إعادة حل هذا السؤال الآن</span>
        </button>
        <button onclick="deleteErrorQuestion('${err.id}')" class="text-slate-400 hover:text-rose-500 transition">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>
  `).join("");
}

function filterErrorBank(filter) {
  document.querySelectorAll(".err-filter-btn").forEach(btn => {
    btn.className = "err-filter-btn px-3 py-1.5 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-100";
    if (btn.dataset.filter === filter) {
      btn.className = "err-filter-btn px-3 py-1.5 rounded-lg text-xs font-bold bg-brand-50 text-brand-700";
    }
  });
  renderErrorBank(filter);
}

function deleteErrorQuestion(id) {
  appState.errorBank = appState.errorBank.filter(e => e.id !== id);
  saveState();
  renderErrorBank();
  updateBadges();
}

function retestErrorQuestion(id) {
  const item = appState.errorBank.find(e => e.id === id);
  if (!item) return;
  alert(`جاهز؟ حاول تجاوب على السؤال في عقلك:\n\n${item.question}\n\nالإجابة الصحيحة هي: ${item.correctAnswer}`);
}

// ==================== BACKLOG MANAGEMENT (التراكمات) ====================
function renderBacklog() {
  const container = document.getElementById("backlogListContainer");
  const scheduleBox = document.getElementById("backlogGeneratedSchedule");
  if (!container || !scheduleBox) return;

  const list = appState.backlog;

  if (list.length === 0) {
    container.innerHTML = `
      <div class="bg-white border border-slate-200/80 rounded-2xl p-6 text-center text-slate-400">
        <i class="fa-solid fa-clipboard-check text-3xl text-emerald-500 mb-2"></i>
        <h4 class="font-bold text-slate-700">رائع! ما عندكش أي تراكمات حالياً</h4>
        <p class="text-xs mt-1">حافظ على المذاكرة أولاً بأول.</p>
      </div>
    `;
  } else {
    container.innerHTML = list.map(item => `
      <div class="bg-white border ${item.completed ? 'border-emerald-200 bg-emerald-50/20' : 'border-slate-200/80'} rounded-2xl p-4 shadow-xs flex items-center justify-between gap-3">
        <div class="flex items-start gap-3">
          <button onclick="toggleBacklogCompleted('${item.id}')" class="mt-0.5 w-5 h-5 rounded-md border ${item.completed ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-slate-300'} flex items-center justify-center transition">
            ${item.completed ? '<i class="fa-solid fa-check text-xs"></i>' : ''}
          </button>
          <div>
            <div class="flex items-center gap-2">
              <span class="text-[11px] font-bold px-2 py-0.2 rounded-md bg-rose-100 text-rose-700">${item.subject}</span>
              <h4 class="font-bold text-xs sm:text-sm ${item.completed ? 'line-through text-slate-400' : 'text-slate-800'}">${item.title}</h4>
            </div>
            <p class="text-[11px] text-slate-400 mt-1">${item.reason || 'درس متأخر يحتاج مراجعة'}</p>
          </div>
        </div>
        <button onclick="deleteBacklogItem('${item.id}')" class="text-slate-300 hover:text-rose-500 p-1">
          <i class="fa-solid fa-trash-can text-xs"></i>
        </button>
      </div>
    `).join("");
  }

  // Generate suggested schedule
  const uncompleted = list.filter(i => !i.completed);
  scheduleBox.innerHTML = uncompleted.length === 0 ? `
    <div class="text-center py-4 text-emerald-600 font-bold">كل التراكمات متصفّرة بالكامل! 🏆</div>
  ` : uncompleted.map((item, idx) => `
    <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
      <div>
        <span class="font-bold text-slate-700 block">اليوم ${idx + 1}: ساعة إضافية</span>
        <span class="text-slate-500 text-[11px]">${item.subject} - ${item.title}</span>
      </div>
      <span class="text-[10px] bg-rose-100 text-rose-700 font-bold px-2 py-0.5 rounded-full">جلسة 45 دقيقة</span>
    </div>
  `).join("");

  // Rate bar
  const completedCount = list.filter(i => i.completed).length;
  const rate = list.length === 0 ? 100 : Math.round((completedCount / list.length) * 100);
  const rateLabel = document.getElementById("backlogClearRate");
  const rateBar = document.getElementById("backlogClearBar");
  if (rateLabel) rateLabel.innerText = `${rate}%`;
  if (rateBar) rateBar.style.width = `${rate}%`;
}

function openAddBacklogModal() {
  const modal = document.getElementById("addBacklogModal");
  const select = document.getElementById("newBacklogSubjectSelect");
  const subjects = getActiveCurriculum();

  if (select) {
    select.innerHTML = subjects.map(s => `<option value="${s.name}">${s.name}</option>`).join("");
  }
  if (modal) modal.classList.remove("hidden");
}

function closeAddBacklogModal() {
  document.getElementById("addBacklogModal").classList.add("hidden");
}

function saveNewBacklogItem() {
  const subject = document.getElementById("newBacklogSubjectSelect").value;
  const title = document.getElementById("newBacklogTitleInput").value.trim();
  const reason = document.getElementById("newBacklogReasonInput").value.trim();

  if (!title) {
    alert("يرجى كتابة اسم الدرس المتراكم!");
    return;
  }

  appState.backlog.unshift({
    id: "bk-" + Date.now(),
    subject,
    title,
    reason,
    addedDate: new Date().toISOString().split("T")[0],
    completed: false
  });

  saveState();
  closeAddBacklogModal();
  renderBacklog();
  renderDashboard();
  updateBadges();
  playChime("success");
}

function toggleBacklogCompleted(id) {
  const item = appState.backlog.find(b => b.id === id);
  if (item) {
    item.completed = !item.completed;
    saveState();
    renderBacklog();
    renderDashboard();
    updateBadges();
    if (item.completed) playChime("success");
  }
}

function deleteBacklogItem(id) {
  appState.backlog = appState.backlog.filter(b => b.id !== id);
  saveState();
  renderBacklog();
  renderDashboard();
  updateBadges();
}

// ==================== WEEKLY JOURNEY & DESK SNAPS ====================
function renderJourneyPage() {
  const grid = document.getElementById("collageSnapsGrid");
  const dreamWord = document.getElementById("collageDreamWord");
  const signature = document.getElementById("collageStudentSignature");

  if (dreamWord) dreamWord.innerText = appState.user.careerDream;
  if (signature) signature.innerText = `بواسطة: ${appState.user.name} (${appState.user.stageTitle})`;

  if (!grid) return;

  grid.innerHTML = appState.deskSnaps.map(snap => `
    <div class="bg-white/10 backdrop-blur-xs p-3 rounded-2xl border border-white/10 flex flex-col justify-between group hover:bg-white/15 transition">
      <div class="w-full h-36 rounded-xl overflow-hidden mb-2 bg-slate-800">
        <img src="${snap.imageUrl}" alt="Desk Snap" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
      </div>
      <div>
        <span class="text-[11px] font-bold text-amber-300 block">${snap.mood}</span>
        <span class="text-[10px] text-white/70 block mt-0.5">${snap.subject} • ${snap.timestamp}</span>
      </div>
    </div>
  `).join("");
}

function openSnapUploadModal() {
  document.getElementById("deskSnapModal").classList.remove("hidden");
}

function closeSnapUploadModal() {
  document.getElementById("deskSnapModal").classList.add("hidden");
}

function previewSnapImage(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    const preview = document.getElementById("snapImagePreview");
    const placeholder = document.getElementById("snapPlaceholderView");
    preview.src = e.target.result;
    preview.classList.remove("hidden");
    placeholder.classList.add("hidden");
  };
  reader.readAsDataURL(file);
}

function saveDeskSnap() {
  const preview = document.getElementById("snapImagePreview");
  const mood = document.getElementById("snapMoodSelect").value;
  const subject = document.getElementById("snapSubjectInput").value.trim() || "جلسة مذاكرة عامة";

  let imgUrl = preview.src;
  if (!imgUrl || imgUrl.length < 50) {
    imgUrl = "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80";
  }

  appState.deskSnaps.unshift({
    id: "snap-" + Date.now(),
    imageUrl: imgUrl,
    mood,
    subject,
    timestamp: "اليوم"
  });

  saveState();
  closeSnapUploadModal();
  renderJourneyPage();
  playChime("success");
  confetti({ particleCount: 40 });
}

function downloadCollage() {
  alert("جاري تجهيز صورة كولاج أسبوعك الفخم بدقة عالية للتحميل والمشاركة على الواتساب مع أصدقائك! 📸");
}

// ==================== SUBJECTS & SUBJECT HUB ====================
function renderSubjects() {
  const container = document.getElementById("fullSubjectsGrid");
  if (!container) return;

  const subjects = getActiveCurriculum();

  container.innerHTML = subjects.map(sub => `
    <div class="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-3">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-tr ${sub.color} text-white flex items-center justify-center text-base shadow-xs">
            <i class="fa-solid ${sub.icon}"></i>
          </div>
          <span class="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-bold">${sub.code}</span>
        </div>
        <h3 class="font-bold text-base text-slate-900 mb-1">${sub.name}</h3>
        <p class="text-xs text-slate-500 leading-relaxed mb-3">${sub.summary}</p>
      </div>

      <div>
        <div class="flex justify-between text-xs text-slate-400 mb-1 font-semibold">
          <span>الدروس المنجزة</span>
          <span>${sub.completedLessons} من ${sub.totalLessons}</span>
        </div>
        <div class="w-full bg-slate-100 rounded-full h-1.5 mb-4 overflow-hidden">
          <div class="bg-brand-500 h-1.5 rounded-full" style="width: ${(sub.completedLessons / sub.totalLessons) * 100}%"></div>
        </div>

        <button onclick="openSubjectHub('${sub.id}')" class="w-full py-2.5 bg-slate-50 hover:bg-brand-50 hover:text-brand-700 border border-slate-200 hover:border-brand-200 text-slate-700 font-bold text-xs rounded-xl transition flex items-center justify-center gap-2">
          <span>فتح لوحة المادة والخيارات</span>
          <i class="fa-solid fa-arrow-left text-[10px]"></i>
        </button>
      </div>
    </div>
  `).join("");
}

let activeHubSubject = null;

function openSubjectHub(subjectId) {
  const subjects = getActiveCurriculum();
  activeHubSubject = subjects.find(s => s.id === subjectId) || subjects[0];

  document.getElementById("hubSubjectTitle").innerText = activeHubSubject.name;
  document.getElementById("hubSubjectSubtitle").innerText = `${appState.user.stageTitle} - ${activeHubSubject.totalLessons} دروس`;
  
  const backlogForSub = appState.backlog.filter(b => b.subject.includes(activeHubSubject.name.slice(0, 4)));
  document.getElementById("hubSubjectBacklogBadge").innerText = `${backlogForSub.length} درس`;

  document.getElementById("subjectHubModal").classList.remove("hidden");
}

function closeSubjectHubModal() {
  document.getElementById("subjectHubModal").classList.add("hidden");
}

function hubStartTimer() {
  closeSubjectHubModal();
  navigateTo("timer");
  const subSelect = document.getElementById("timerSubjectSelect");
  if (subSelect && activeHubSubject) {
    subSelect.value = activeHubSubject.id;
    onTimerSubjectChange();
  }
}

function hubSummarizeLessons() {
  closeSubjectHubModal();
  alert(`📝 ملخص ذكي لمادة ${activeHubSubject.name}:\n\n- تم استخلاص أهم القوانين والمفاهيم والنقاط الجوهرية في دروس المنهج.\n- يمكنك تحميل الملخص أو قراءته كبطاقات مراجعة سريعة!`);
}

function hubGenerateExam() {
  closeSubjectHubModal();
  navigateTo("timer");
  openPostSessionQuizModal();
}

function hubReviewSubjectErrors() {
  closeSubjectHubModal();
  navigateTo("errors");
  filterErrorBank(activeHubSubject.name.slice(0, 4));
}

function hubReviewSubjectBacklog() {
  closeSubjectHubModal();
  navigateTo("backlog");
}

// ==================== NAVIGATION ENGINE ====================
function navigateTo(pageId) {
  appState.activePage = pageId;

  // Hide all pages
  document.querySelectorAll(".page-view").forEach(p => p.classList.add("hidden"));
  const target = document.getElementById(`page-${pageId}`);
  if (target) target.classList.remove("hidden");

  // Update desktop active styles
  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.className = "nav-btn px-3 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 text-slate-600 hover:text-brand-600 hover:bg-slate-100";
    if (btn.dataset.page === pageId) {
      btn.className = "nav-btn px-3 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 text-brand-600 bg-brand-50";
    }
  });

  // Update mobile active styles
  document.querySelectorAll(".mobile-nav-btn").forEach(btn => {
    btn.classList.remove("text-brand-600");
    btn.classList.add("text-slate-500");
    if (btn.dataset.page === pageId) {
      btn.classList.remove("text-slate-500");
      btn.classList.add("text-brand-600");
    }
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateBadges() {
  const errBadge = document.getElementById("errorCountBadge");
  const bkBadge = document.getElementById("backlogCountBadge");

  if (errBadge) {
    const errCount = appState.errorBank.length;
    if (errCount > 0) {
      errBadge.innerText = errCount;
      errBadge.classList.remove("hidden");
    } else {
      errBadge.classList.add("hidden");
    }
  }

  if (bkBadge) {
    const bkCount = appState.backlog.filter(b => !b.completed).length;
    if (bkCount > 0) {
      bkBadge.innerText = bkCount;
      bkBadge.classList.remove("hidden");
    } else {
      bkBadge.classList.add("hidden");
    }
  }
}

function openProfileModal() {
  openOnboardingModal();
}
