// ==================== CURRICULA FOR ALL GRADES (2026 UPDATED SYSTEM) ====================

const CURRICULUM_DATA = {

  // ==================== 1. المرحلة الإعدادية ====================
  // الصف الأول الإعدادي (المنهج الجديد المطور 2025/2026)
  "prep_1_عام": [
    {
      id: "p1_arabic",
      name: "اللغة العربية والخط والإملاء",
      code: "ARB-101",
      icon: "fa-feather-pointed",
      color: "from-rose-600 to-pink-500",
      totalLessons: 6,
      completedLessons: 3,
      summary: "فنون النثر، النصوص الشعرية، قواعد النحو المنهج الجديد (الضمائر، الأفعال الصحيحة والمعتلة).",
      lessons: [
        { id: "p1_a1", title: "درس: الحرية ومفهوم الاستقلال", completed: true },
        { id: "p1_a2", title: "نحو: همزتا الوصل والقطع وأنواعهما", completed: true },
        { id: "p1_a3", title: "نص: عشقناكِ يا مصر", completed: true },
        { id: "p1_a4", title: "نحو: أنواع الخبر وإعرابه", completed: false },
        { id: "p1_a5", title: "نحو: الضمائر البارزة والمستترة", completed: false },
        { id: "p1_a6", title: "نحو: الفعل الصحيح والفعل المعتل", completed: false }
      ],
      quizzes: [
        {
          question: "في جملة «الطلاب يحرصون على العلم»، نوع الخبر هو:",
          options: ["خبر جملة فعلية", "خبر مفرد", "خبر شبه جملة", "خبر جملة اسمية"],
          correct: 0,
          explanation: "الفعل 'يحرصون' والفاعل واو الجماعة يشكلان جملة فعلية في محل رفع خبر المبتدأ 'الطلاب'."
        }
      ]
    },
    {
      id: "p1_english",
      name: "اللغة الإنجليزية (New Hello 1)",
      code: "ENG-101",
      icon: "fa-language",
      color: "from-indigo-600 to-violet-500",
      totalLessons: 6,
      completedLessons: 2,
      summary: "Vocabulary, My family and hobbies, Present Simple, Pronouns, and reading comprehension.",
      lessons: [
        { id: "p1_e1", title: "Unit 1: My Family and Me", completed: true },
        { id: "p1_e2", title: "Unit 2: It's My Favorite Subject", completed: true },
        { id: "p1_e3", title: "Unit 3: Different People", completed: false },
        { id: "p1_e4", title: "Unit 4: We're Using Technology", completed: false },
        { id: "p1_e5", title: "Unit 5: Holidays and Fun", completed: false },
        { id: "p1_e6", title: "Unit 6: Let's Eat Right", completed: false }
      ],
      quizzes: [
        {
          question: "He usually _______ to school by bus every morning.",
          options: ["goes", "go", "is going", "went"],
          correct: 0,
          explanation: "With singular third-person pronouns (He, She, It) in the Present Simple, we add -s or -es to the verb."
        }
      ]
    },
    {
      id: "p1_math",
      name: "الرياضيات (الجبر والإحصاء والهندسة)",
      code: "MATH-101",
      icon: "fa-calculator",
      color: "from-blue-600 to-cyan-500",
      totalLessons: 6,
      completedLessons: 3,
      summary: "الأعداد النسبية، العمليات عليها، الحدود الجبرية، المفاهيم الهندسية، والتطابق.",
      lessons: [
        { id: "p1_m1", title: "الأعداد النسبية ومقارنتها", completed: true },
        { id: "p1_m2", title: "العمليات على الأعداد النسبية والضرب المتكرر", completed: true },
        { id: "p1_m3", title: "الحدود والمقادير الجبرية وجمعها", completed: true },
        { id: "p1_m4", title: "المفاهيم الهندسية والعلاقات بين الزوايا", completed: false },
        { id: "p1_m5", title: "تطابق المثلثات والحالات الأربع", completed: false },
        { id: "p1_m6", title: "التوازي والإنشاءات الهندسية", completed: false }
      ],
      quizzes: [
        {
          question: "الزاويتان المتتامتان مجموع قياسهما يساوي:",
          options: ["90 درجة", "180 درجة", "360 درجة", "45 درجة"],
          correct: 0,
          explanation: "الزاويتان المتتامتان مجموعهما 90 درجة، بينما المتكاملتان مجموعهما 180 درجة."
        }
      ]
    },
    {
      id: "p1_integrated_science",
      name: "العلوم والظواهر الطبيعية",
      code: "SCI-101",
      icon: "fa-atom",
      color: "from-emerald-600 to-teal-500",
      totalLessons: 5,
      completedLessons: 2,
      summary: "المادة وخواصها، التركيب الذري، الطاقة وصورها وتحولاتها، التنوع والتكيف في الكائنات الحية.",
      lessons: [
        { id: "p1_s1", title: "المادة وخواصها الفيزيائية والكيميائية", completed: true },
        { id: "p1_s2", title: "تركيب المادة والجزيئات والذرات", completed: true },
        { id: "p1_s3", title: "التركيب الذري للمادة والتوزيع الإلكتروني", completed: false },
        { id: "p1_s4", title: "الطاقة ومصادرها وصورها وتحولاتها", completed: false },
        { id: "p1_s5", title: "التنوع والتكيف في الكائنات الحية", completed: false }
      ],
      quizzes: [
        {
          question: "الجسيمات سالبة الشحنة وتدور حول النواة في مستويات الطاقة هي:",
          options: ["الإلكترونات", "البروتونات", "النيوترونات", "الفوتونات"],
          correct: 0,
          explanation: "الإلكترونات سالبة الشحنة وتدور حول نواة الذرة، بينما البروتونات موجبة والنيوترونات متعادلة."
        }
      ]
    },
    {
      id: "p1_social",
      name: "الدراسات الاجتماعية (جغرافيا وتاريخ)",
      code: "SOC-101",
      icon: "fa-earth-africa",
      color: "from-amber-600 to-orange-500",
      totalLessons: 5,
      completedLessons: 2,
      summary: "رحلة عبر الفضاء، كوكب الأرض، مصر القديمة، وعصر بناة الأهرام والمجد الحربي.",
      lessons: [
        { id: "p1_so1", title: "جغرافيا: ظواهر كونية والمجموعة الشمسية", completed: true },
        { id: "p1_so2", title: "جغرافيا: شكل الأرض وأبعادها وخطوط الطول", completed: true },
        { id: "p1_so3", title: "تاريخ: وحدة شعب وعصور ما قبل التاريخ", completed: false },
        { id: "p1_so4", title: "تاريخ: عصر الدولة القديمة (بناة الأهرام)", completed: false },
        { id: "p1_so5", title: "تاريخ: عصر الدولة الوسطى والحديثة", completed: false }
      ],
      quizzes: [
        {
          question: "الكوكب المائي الذي يعرف أيضاً بتوأم الأرض لكبر تشابههما في القطر والكتلة هو:",
          options: ["كوكب الزهرة", "كوكب المريخ", "كوكب المشتري", "كوكب عطارد"],
          correct: 0,
          explanation: "يعرف كوكب الزهرة بتوأم الأرض لتقاربه مع الأرض في القطر والحجم والكتلة."
        }
      ]
    }
  ],

  // الصف الثاني الإعدادي
  "prep_2_عام": [
    {
      id: "p2_arabic",
      name: "اللغة العربية",
      code: "ARB-201",
      icon: "fa-feather-pointed",
      color: "from-rose-600 to-pink-500",
      totalLessons: 6,
      completedLessons: 3,
      summary: "النحو (المعرب والمبني، العطف، النعت، التوكيد)، النصوص الأدبية، وقصة كفاح شعب مصر.",
      lessons: [
        { id: "p2_a1", title: "نحو: المعرب والمبني من الأسماء والأفعال", completed: true },
        { id: "p2_a2", title: "نص: نصائح غالية (قرآن كريم)", completed: true },
        { id: "p2_a3", title: "نحو: العطف وحروف العطف ومعانيها", completed: true },
        { id: "p2_a4", title: "نحو: النعت المفرد والجملة وشبه الجملة", completed: false },
        { id: "p2_a5", title: "نحو: الحال والتوكيد اللفظي والمعنوي", completed: false }
      ],
      quizzes: [
        {
          question: "في جملة «حضر المعلمان كلاهما»، إعراب كلمة «كلاهما» هو:",
          options: ["توكيد معنوي مرفوع بالألف", "فاعل مرفوع بالألف", "مبتدأ ثانٍ مرفوع", "نعت مرفوع"],
          correct: 0,
          explanation: "كلاهما توكيد معنوي ملحق بالمثنى يتبع المؤكد (المعلمان) في علامة الرفع بالألف."
        }
      ]
    },
    {
      id: "p2_english",
      name: "اللغة الإنجليزية (New Hello 2)",
      code: "ENG-201",
      icon: "fa-language",
      color: "from-indigo-600 to-violet-500",
      totalLessons: 5,
      completedLessons: 2,
      summary: "Daily routines, Technology, Past Simple, Present Continuous, and comparative adjectives.",
      lessons: [
        { id: "p2_e1", title: "Unit 1: Coming Home", completed: true },
        { id: "p2_e2", title: "Unit 2: How Are You Feeling?", completed: true },
        { id: "p2_e3", title: "Unit 3: Great Jobs", completed: false },
        { id: "p2_e4", title: "Unit 4: Into The Past", completed: false }
      ],
      quizzes: [
        {
          question: "Listen! Someone _______ the piano beautifully.",
          options: ["is playing", "plays", "played", "play"],
          correct: 0,
          explanation: "Keywords like 'Listen!' indicate an action happening right now (Present Continuous)."
        }
      ]
    },
    {
      id: "p2_math",
      name: "الرياضيات (الجبر والإحصاء والهندسة)",
      code: "MATH-201",
      icon: "fa-calculator",
      color: "from-blue-600 to-cyan-500",
      totalLessons: 6,
      completedLessons: 3,
      summary: "الجذر التكعيبي، الأعداد الحقيقية، العمليات على الجذور، متوسطات المثلث، والمثلث المتساوي الساقين.",
      lessons: [
        { id: "p2_m1", title: "الجذر التكعيبي للعدد النسبي", completed: true },
        { id: "p2_m2", title: "مجموعة الأعداد الحقيقية والفترات", completed: true },
        { id: "p2_m3", title: "العمليات على الجذور التربيعية والتكعيبية", completed: true },
        { id: "p2_m4", title: "متوسطات المثلث ونظرية 1", completed: false },
        { id: "p2_m5", title: "خواص المثلث المتساوي الساقين ومحاور التماثل", completed: false }
      ],
      quizzes: [
        {
          question: "نقطة تقاطع متوسطات المثلث تقسم كلاً منها بنسبة:",
          options: ["1 : 2 من جهة القاعدة", "2 : 1 من جهة القاعدة", "1 : 1", "3 : 1 من جهة الرأس"],
          correct: 0,
          explanation: "نقطة تقاطع متوسطات المثلث تقسم كل متوسط بنسبة 1 : 2 من جهة القاعدة (أو 2 : 1 من جهة الرأس)."
        }
      ]
    },
    {
      id: "p2_science",
      name: "العلوم والحياة",
      code: "SCI-201",
      icon: "fa-flask-vial",
      color: "from-emerald-600 to-teal-500",
      totalLessons: 5,
      completedLessons: 2,
      summary: "الجدول الدوري الحديث، تدرج خواص العناصر، الغلاف الجوي وطبقاته، وحماية الأرض من التلوث.",
      lessons: [
        { id: "p2_s1", title: "محاولات تصنيف العناصر والجدول الدوري الحديث", completed: true },
        { id: "p2_s2", title: "تدرج خواص العناصر والمجموعات الرئيسية (الأقلاء، الهالوجينات)", completed: true },
        { id: "p2_s3", title: "الماء وخواصه الفريدة وتلوث المياه", completed: false },
        { id: "p2_s4", title: "طبقات الغلاف الجوي وظاهرة الاحتباس الحراري", completed: false }
      ],
      quizzes: [
        {
          question: "تحدث كافة الظواهر الجوية وتقلبات الطقس والغيوم والأمطار في طبقة:",
          options: ["التروبوسفير", "الستراتوسفير", "الميزوسفير", "الثرموسفير"],
          correct: 0,
          explanation: "طبقة التروبوسفير تحتوي على 75% من كتلة الغلاف الجوي وجميع بخار الماء تقريباً وتحدث بها كافة الظواهر الجوية."
        }
      ]
    },
    {
      id: "p2_social",
      name: "الدراسات الاجتماعية",
      code: "SOC-201",
      icon: "fa-map-location-dot",
      color: "from-amber-600 to-orange-500",
      totalLessons: 4,
      completedLessons: 2,
      summary: "وطننا العربي (الموقع والمساحة، التضاريس، المناخ)، وحياة الرسول صلى الله عليه وسلم وبناء الدولة الإسلامية.",
      lessons: [
        { id: "p2_so1", title: "جغرافيا: وطننا العربي الموقع والمساحة", completed: true },
        { id: "p2_so2", title: "جغرافيا: تضاريس الوطن العربي والمناخ", completed: true },
        { id: "p2_so3", title: "تاريخ: مولد الرسول ﷺ ونشأته وبعثته الشريفة", completed: false },
        { id: "p2_so4", title: "تاريخ: هجرة النبي وبناء الدولة والخلفاء الراشدون", completed: false }
      ],
      quizzes: [
        {
          question: "يطل الوطن العربي على مضيق باب المندب الذي تشرف عليه دولتان عربيتان هما:",
          options: ["اليمن وجيبوتي", "مصر والسعودية", "عمان وإيران", "المغرب وإسبانيا"],
          correct: 0,
          explanation: "مضيق باب المندب مضيق عربي خالص تشرف عليه دولتا اليمن وجيبوتي."
        }
      ]
    }
  ],

  // الصف الثالث الإعدادي (الشهادة الإعدادية)
  "prep_3_عام": [
    {
      id: "p3_arabic",
      name: "اللغة العربية (الشهادة الإعدادية)",
      code: "ARB-300",
      icon: "fa-feather-pointed",
      color: "from-rose-600 to-pink-500",
      totalLessons: 6,
      completedLessons: 4,
      summary: "المنادى، البدل، أسلوب المدح والذم، الممنوع من الصرف، نصوص أدبية، وقصة طموح جارية.",
      lessons: [
        { id: "p3_a1", title: "نحو: المنادى وأنواعه وأحكامه الإعرابية", completed: true },
        { id: "p3_a2", title: "نحو: البدل بأنواعه الثلاثة (المطابق، بعض من كل، الاشتمال)", completed: true },
        { id: "p3_a3", title: "نحو: أسلوب المدح والذم (نعم وبئس وحبذا)", completed: true },
        { id: "p3_a4", title: "نحو: الممنوع من الصرف لعلة ولعلتين", completed: true },
        { id: "p3_a5", title: "نص: عباد الرحمن وقيم التواضع والإنفاق", completed: false },
        { id: "p3_a6", title: "قصة: طموح جارية وشجرة الدر ومواجهة الأعداء", completed: false }
      ],
      quizzes: [
        {
          question: "في جملة «يا طالباً، اجتهد في دراستك»، نوع المنادى هنا هو:",
          options: ["نكرة غير مقصودة", "نكرة مقصودة", "منادى مضاف", "شبيه بالمضاف"],
          correct: 0,
          explanation: "المنادى جاء كلمة واحدة منونة بالفتح دون أن يقصد شخصاً بعينه ولم يأتِ بعده ما يتمم معناه، فهو نكرة غير مقصودة حكمه النصب."
        }
      ]
    },
    {
      id: "p3_english",
      name: "اللغة الإنجليزية (New Hello 3)",
      code: "ENG-300",
      icon: "fa-language",
      color: "from-indigo-600 to-violet-500",
      totalLessons: 6,
      completedLessons: 3,
      summary: "Present Simple for timetables, Adjectives ending in -ed and -ing, Past Continuous with when/while.",
      lessons: [
        { id: "p3_e1", title: "Unit 1: Around Town", completed: true },
        { id: "p3_e2", title: "Unit 2: Let's Go Shopping", completed: true },
        { id: "p3_e3", title: "Unit 3: My Community", completed: true },
        { id: "p3_e4", title: "Unit 4: Have You Ever...?", completed: false },
        { id: "p3_e5", title: "Unit 5: Young Role Models", completed: false },
        { id: "p3_e6", title: "Unit 6: Mindful Study & Exam Prep", completed: false }
      ],
      quizzes: [
        {
          question: "The museum _______ at 9:00 AM tomorrow according to the public schedule.",
          options: ["opens", "is opening", "will open", "opened"],
          correct: 0,
          explanation: "We use the Present Simple to express fixed schedules and timetables (trains, planes, museums, schools)."
        }
      ]
    },
    {
      id: "p3_math_algebra",
      name: "الرياضيات: الجبر والإحصاء",
      code: "ALG-300",
      icon: "fa-square-root-variable",
      color: "from-blue-600 to-cyan-500",
      totalLessons: 5,
      completedLessons: 3,
      summary: "حاصل الضرب الديكارتي، العلاقات والدوال، التغير الطردي والعكسي، والتشتت والانحراف المعياري.",
      lessons: [
        { id: "p3_m1", title: "حاصل الضرب الديكارتي وتساوي زوجين مرتبين", completed: true },
        { id: "p3_m2", title: "العلاقة والدالة والدوال كثيرة الحدود", completed: true },
        { id: "p3_m3", title: "دراسة بعض الدوال الخطية والتربيعية", completed: true },
        { id: "p3_m4", title: "النسبة والتناسب وخاصية التناسب المتسلسل", completed: false },
        { id: "p3_m5", title: "التغير الطردي والتغير العكسي والإحصاء", completed: false }
      ],
      quizzes: [
        {
          question: "إذا كانت ص تتغير طردياً مع س، وكانت ص = 6 عندما س = 2، فإن ثابت التناسب م يساوي:",
          options: ["3", "12", "0.33", "4"],
          correct: 0,
          explanation: "في التغير الطردي ص = م × س، إذن م = ص / س = 6 / 2 = 3."
        }
      ]
    },
    {
      id: "p3_math_geometry",
      name: "الرياضيات: الهندسة وحساب المثلثات",
      code: "GEO-300",
      icon: "fa-draw-polygon",
      color: "from-sky-600 to-blue-500",
      totalLessons: 5,
      completedLessons: 3,
      summary: "النسب المثلثية الأساسية، ميل الخط المستقيم، البعد بين نقطتين، وإحداثيا منتصف قطعة مستقيمة.",
      lessons: [
        { id: "p3_g1", title: "النسب المثلثية الأساسية للزاوية الحادة (جا، جتا، ظا)", completed: true },
        { id: "p3_g2", title: "النسب المثلثية الأساسية للزوايا الخاصة (30°، 60°، 45°)", completed: true },
        { id: "p3_g3", title: "البعد بين نقطتين وإحداثيا منتصف قطعة مستقيمة", completed: true },
        { id: "p3_g4", title: "ميل الخط المستقيم وشرطا التوازي والتعامد", completed: false },
        { id: "p3_g5", title: "معادلة الخط المستقيم بمعلومية ميله وطول الجزء المقطوع", completed: false }
      ],
      quizzes: [
        {
          question: "إذا كان مستقيمان متعامدين وكان ميل الأول = 2/3، فإن ميل المستقيم الثاني يساوي:",
          options: ["-3/2", "3/2", "-2/3", "1"],
          correct: 0,
          explanation: "شرط تعامد مستقيمين: م1 × م2 = -1، إذن نقلب الكسر ونعكس الإشارة: -3/2."
        }
      ]
    },
    {
      id: "p3_science",
      name: "العلوم المتكاملة (الشهادة الإعدادية)",
      code: "SCI-300",
      icon: "fa-atom",
      color: "from-emerald-600 to-teal-500",
      totalLessons: 5,
      completedLessons: 3,
      summary: "الحركة في اتجاه واحد، السرعة والعجلة، المرايا والعدسات، الكون والمجموعة الشمسية، التكاثر.",
      lessons: [
        { id: "p3_s1", title: "الحركة في اتجاه واحد والسرعة المنتظمة وغير المنتظمة", completed: true },
        { id: "p3_s2", title: "التمثيل البياني للحركة في خط مستقيم والعجلة", completed: true },
        { id: "p3_s3", title: "العدسات والمرايا الكرية وتطبيقاتها", completed: true },
        { id: "p3_s4", title: "الكون وتمدده والنظام الشمسي ونظرية الانفجار العظيم", completed: false },
        { id: "p3_s5", title: "الانقسام الميتوزي والميوزي والتكاثر الجنسي واللاجنسي", completed: false }
      ],
      quizzes: [
        {
          question: "المرآة التي تكون دائماً صورة تقديرية معتدلة ومصغرة للجسم مهما كان موضعه هي:",
          options: ["المرآة المحدبة", "المرآة المقعرة", "المرآة المستوية", "العدسة المحدبة"],
          correct: 0,
          explanation: "المرآة المحدبة تفرق الأشعة وتكون دائماً صورة تقديرية معتدلة مصغرة، ولذلك توضع على يمين ويسار سائق السيارة."
        }
      ]
    },
    {
      id: "p3_social",
      name: "الدراسات الاجتماعية",
      code: "SOC-300",
      icon: "fa-earth-africa",
      color: "from-amber-600 to-orange-500",
      totalLessons: 4,
      completedLessons: 2,
      summary: "جغرافيا العالم (القارات، التضاريس، المناخ والنبات)، وتاريخ مصر الحديث وثورة 1919.",
      lessons: [
        { id: "p3_so1", title: "جغرافيا: قارات العالم الموقع والمساحة والتضاريس", completed: true },
        { id: "p3_so2", title: "جغرافيا: الأقاليم المناخية وسكان العالم", completed: true },
        { id: "p3_so3", title: "تاريخ: مصر بين المماليك والعثمانيين والحملة الفرنسية", completed: false },
        { id: "p3_so4", title: "تاريخ: محمد علي وبناء مصر الحديثة وثورات التحرر الوطني", completed: false }
      ],
      quizzes: [
        {
          question: "أعلى قمة جبلية في العالم هي قمة إفرست في جبال الهيمالايا وتقع في قارة:",
          options: ["آسيا", "أفريقيا", "أمريكا الشمالية", "أوروبا"],
          correct: 0,
          explanation: "قمة إفرست تقع في سلسلة جبال الهيمالايا في قارة آسيا بارتفاع 8848 متراً."
        }
      ]
    }
  ],

  // ==================== 2. الصف الأول الثانوي (النظام الجديد المطور 2026) ====================
  // 5 مواد أساسية مضافة للمجموع وفقاً لقرار وزير التربية والتعليم
  "highschool_1_عام": [
    {
      id: "h1_arabic",
      name: "اللغة العربية والبلاغة والأدب",
      code: "ARB-100",
      icon: "fa-feather-pointed",
      color: "from-rose-600 to-pink-500",
      totalLessons: 7,
      completedLessons: 4,
      summary: "الأدب في العصر الجاهلي والإسلامي، البلاغة (التشبيه والاستعارة)، النحو (الأفعال الناقصة والتامة، اسم الفاعل، صيغ المبالغة).",
      lessons: [
        { id: "h1_a1", title: "نحو: كان وأخواتها الناقصة والتامة", completed: true },
        { id: "h1_a2", title: "نحو: كاد وأخواتها (أفعال المقاربة والرجاء والشروع)", completed: true },
        { id: "h1_a3", title: "بلاغة: التشبيه المفرد والمركب وأركانه", completed: true },
        { id: "h1_a4", title: "بلاغة: الاستعارة المكنية والاستعارة التصريحية", completed: true },
        { id: "h1_a5", title: "أدب: الشعر والنثر في العصر الجاهلي وصدر الإسلام", completed: false },
        { id: "h1_a6", title: "نحو: إعمال اسم الفاعل وصيغ المبالغة واسم المفعول", completed: false }
      ],
      quizzes: [
        {
          question: "في جملة «أخذ الطالب يكتب واجبه»، الفعل «أخذ» هنا هو فعل:",
          options: ["فعل شروع ناقص يرفع المبتدأ وخبره جملة فعلية", "فعل ماضٍ تام يرفع فاعلاً وينصب مفعولاً", "فعل مقاربة ناقص", "فعل رجاء"],
          correct: 0,
          explanation: "أخذ من أفعال الشروع، وجاء خبره جملة فعلية فعلها مضارع (يكتب)، فهو فعل ناقص واسمه الطالب وخبره يكتب."
        }
      ]
    },
    {
      id: "h1_english",
      name: "اللغة الإنجليزية (New Hello Sec 1)",
      code: "ENG-100",
      icon: "fa-language",
      color: "from-indigo-600 to-violet-500",
      totalLessons: 6,
      completedLessons: 3,
      summary: "Eco-tourism, Past Simple & Past Continuous, Present Perfect, Articles & Quantifiers, Essay Writing.",
      lessons: [
        { id: "h1_e1", title: "Unit 1: Getting Away & Eco-Tourism", completed: true },
        { id: "h1_e2", title: "Unit 2: Supporting the Community & Blood Donation", completed: true },
        { id: "h1_e3", title: "Unit 3: Improving Lives & Future Opportunities", completed: true },
        { id: "h1_e4", title: "Unit 4: Making Friends & Social Skills", completed: false },
        { id: "h1_e5", title: "Unit 5: Communication Technology & AI", completed: false },
        { id: "h1_e6", title: "Unit 6: Learning from Literature & Treasure Island", completed: false }
      ],
      quizzes: [
        {
          question: "While I was studying my lessons last night, the electricity suddenly _______ out.",
          options: ["went", "was going", "goes", "has gone"],
          correct: 0,
          explanation: "When a shorter action interrupts an ongoing action in the past (While + Past Continuous), the interrupting verb takes the Past Simple."
        }
      ]
    },
    {
      id: "h1_math",
      name: "الرياضيات العامة (جبر، حساب مثلثات، هندسة)",
      code: "MATH-100",
      icon: "fa-calculator",
      color: "from-blue-600 to-cyan-500",
      totalLessons: 7,
      completedLessons: 4,
      summary: "الأعداد المركبة، بحث إشارة الدالة، القياس الدائري والستيني، تشابه المثلثات وتطبيقات التناسب.",
      lessons: [
        { id: "h1_m1", title: "مقدمة عن الأعداد المركبة والعدد التخيلي ت", completed: true },
        { id: "h1_m2", title: "تحديد نوع جذري المعادلة التربيعية بالمميز", completed: true },
        { id: "h1_m3", title: "العلاقة بين جذري معادلة الدرجة الثانية ومعاملات حدودها", completed: true },
        { id: "h1_m4", title: "حساب مثلثات: الزاوية الموجهة والقياس الدائري والستيني", completed: true },
        { id: "h1_m5", title: "هندسة: تشابه المثلثات ونظريات التشابه", completed: false },
        { id: "h1_m6", title: "هندسة: نظرية طاليس والمنصفات والأجزاء المتناسبة", completed: false }
      ],
      quizzes: [
        {
          question: "قيمة المقدار ت^24 (حيث ت هو العدد التخيلي) تساوي:",
          options: ["1", "-1", "ت", "-ت"],
          correct: 0,
          explanation: "بما أن الأس 24 يقبل القسمة على 4 بدون باقٍ، فإن ت^24 = 1."
        }
      ]
    },
    {
      id: "h1_integrated_science",
      name: "العلوم المتكاملة (كيمياء، فيزياء، أحياء وبيئة)",
      code: "INT-SCI-100",
      icon: "fa-flask-vial",
      color: "from-emerald-600 to-teal-500",
      totalLessons: 6,
      completedLessons: 3,
      summary: "المادة الجديدة المطورة التي تجمع بين مفاهيم الطاقة والأنظمة الحيوية والتغير المناخي والتفاعلات الكيميائية.",
      lessons: [
        { id: "h1_is1", title: "الأنظمة البيئية والتدفق الطاقي في الطبيعة", completed: true },
        { id: "h1_is2", title: "المعادلات الكيميائية والحساب الكيميائي والمول", completed: true },
        { id: "h1_is3", title: "التركيب الجزيئي للخلية والإنزيمات والتمثيل الغذائي", completed: true },
        { id: "h1_is4", title: "قوانين الحركة والسرعة والقوى في الطبيعة", completed: false },
        { id: "h1_is5", title: "الاستدامة البيئية والتغير المناخي والطاقات المتجددة", completed: false }
      ],
      quizzes: [
        {
          question: "الجزيئات الحيوية الكبيرة المسؤولة عن نقل الصفات الوراثية وتخزين الشفرة الجينية هي:",
          options: ["الأحماض النووية (DNA & RNA)", "الكربوهيدرات", "الليبيدات", "البروتينات الهيكلية"],
          correct: 0,
          explanation: "الأحماض النووية هي المسؤولة عن حفظ ونقل المعلومات الوراثية وتوجيه بناء البروتينات داخل الكائن الحي."
        }
      ]
    },
    {
      id: "h1_history",
      name: "التاريخ والحضارات القديمة",
      code: "HIST-100",
      icon: "fa-landmark-dome",
      color: "from-amber-600 to-orange-500",
      totalLessons: 5,
      completedLessons: 3,
      summary: "مدخل لدراسة الحضارة والتاريخ، حضارة مصر القديمة وملامحها السياسية والاقتصادية والدينية.",
      lessons: [
        { id: "h1_hi1", title: "الحضارة والتاريخ ومصادر دراسة الحضارات", completed: true },
        { id: "h1_hi2", title: "عوامل قيام الحضارات وحضارة مصر الفرعونية", completed: true },
        { id: "h1_hi3", title: "الحياة الاقتصادية والسياسية في مصر القديمة", completed: true },
        { id: "h1_hi4", title: "الحياة الدينية والثقافية والفكرية للمصري القديم", completed: false },
        { id: "h1_hi5", title: "حضارة بلاد العراق وفينيقيا واليونان القديمة", completed: false }
      ],
      quizzes: [
        {
          question: "تعتبر النقوش والبرديات والمسكوكات من مصادر دراسة التاريخ:",
          options: ["المصادر الأولية المباشرة", "المراجع الثانوية", "الكتب الفلسفية", "الأساطير"],
          correct: 0,
          explanation: "المصادر الأولية هي كل ما كتب أو نقش ينتمي لزمن وقوع الحدث وتتميز بالدقة والموضوعية."
        }
      ]
    }
  ],

  // ==================== 3. الصف الثاني الثانوي (نظام 2026 المطور) ====================
  // شعبة علمي
  "highschool_2_علمي": [
    {
      id: "h2_arabic",
      name: "اللغة العربية",
      code: "ARB-200",
      icon: "fa-feather-pointed",
      color: "from-rose-600 to-pink-500",
      totalLessons: 6,
      completedLessons: 3,
      summary: "إعراب الفعل المضارع، المصادر، البلاغة (المحسنات البديعية والإيجاز والإطناب)، وتاريخ الأدب.",
      lessons: [
        { id: "h2_a1", title: "نحو: إعراب الفعل المضارع ونصبه وجزمه في جواب الطلب", completed: true },
        { id: "h2_a2", title: "نحو: اقتران جواب الشرط بالفاء وجزم المضارع", completed: true },
        { id: "h2_a3", title: "نحو: المصادر الصريحة والمؤول والميمي والصناعي", completed: true },
        { id: "h2_a4", title: "بلاغة: المحسنات البديعية اللفظية والمعنوية (الطباق، الجناس، السجع)", completed: false },
        { id: "h2_a5", title: "أدب: المعلقات وشعراء المعلقات السبع", completed: false }
      ],
      quizzes: [
        {
          question: "في جملة «اجتهد في دروسك تنجحْ»، الفعل «تنجح» هو مضارع مجزوم بسبب:",
          options: ["وقوعه في جواب الطلب المحبب", "سبقه بأداة جزم لم", "سبقه بلام التعليل", "أنه فعل شرط"],
          correct: 0,
          explanation: "يجزم الفعل المضارع جوازاً إذا وقع جواباً لطلب (أمر أو نهي) وكان أمراً محبوباً ومترتباً عليه."
        }
      ]
    },
    {
      id: "h2_english",
      name: "اللغة الإنجليزية (New Hello Sec 2)",
      code: "ENG-200",
      icon: "fa-language",
      color: "from-indigo-600 to-violet-500",
      totalLessons: 6,
      completedLessons: 3,
      summary: "Obligation, Food security, Future forms, King Lear literature, and advanced idioms.",
      lessons: [
        { id: "h2_e1", title: "Unit 1: Staying Safe & Health", completed: true },
        { id: "h2_e2", title: "Unit 2: Eating Around the World", completed: true },
        { id: "h2_e3", title: "Unit 3: The Future of Agriculture", completed: true },
        { id: "h2_e4", title: "Unit 4: Changing English & Global Language", completed: false }
      ],
      quizzes: [
        {
          question: "You _______ smoke at petrol stations; it is extremely dangerous and strictly illegal.",
          options: ["mustn't", "needn't", "don't have to", "might"],
          correct: 0,
          explanation: "Mustn't expresses strong prohibition and illegality."
        }
      ]
    },
    {
      id: "h2_math",
      name: "الرياضيات البحتة (تفاضل، حساب مثلثات، جبر)",
      code: "MATH-200",
      icon: "fa-infinity",
      color: "from-blue-600 to-cyan-500",
      totalLessons: 7,
      completedLessons: 4,
      summary: "نهايات الدوال، الدوال الحقيقية والتركيب، قاعدة الجيب وقاعدة جيب التمام، وحل المثلث.",
      lessons: [
        { id: "h2_m1", title: "جبر: الدوال الحقيقية ورسم المنحنيات والتحويلات الهندسية", completed: true },
        { id: "h2_m2", title: "جبر: الدالة الزوجية والفردية والأحادية", completed: true },
        { id: "h2_m3", title: "تفاضل: مقدمة في النهايات ونهاية الدالة عند نقطة", completed: true },
        { id: "h2_m4", title: "تفاضل: النظرية 4 (القانون) ونهاية الدالة عند اللانهاية", completed: true },
        { id: "h2_m5", title: "مثلثات: قانون الجيب وتطبيقاته في الدائرة المارة برؤوس المثلث", completed: false },
        { id: "h2_m6", title: "مثلثات: قانون جيب التمام وحساب أضلاع وزوايا المثلث", completed: false }
      ],
      quizzes: [
        {
          question: "وفقاً لقانون الجيب، فإن النسبة أَ / جا(أ) تساوي:",
          options: ["2 نق (حيث نق هو نصف قطر الدائرة المارة برؤوس المثلث)", "نق", "4 نق", "مساحة المثلث"],
          correct: 0,
          explanation: "قانون الجيب ينص على أن: أَ / جا(أ) = بَ / جا(ب) = جَ / جا(ج) = 2 نق."
        }
      ]
    },
    {
      id: "h2_physics",
      name: "الفيزياء (الموجات والضوء والموائع)",
      code: "PHYS-200",
      icon: "fa-atom",
      color: "from-cyan-600 to-blue-500",
      totalLessons: 6,
      completedLessons: 3,
      summary: "الحركة الموجية والاهتزازية، انتشار الضوء وانكساره وتداخله وحيوده، والمنشور الزجاجي، وخواص الموائع.",
      lessons: [
        { id: "h2_p1", title: "الحركة الاهتزازية وسعة الاهتزاز والتردد", completed: true },
        { id: "h2_p2", title: "الحركة الموجية والموجات الطولية والمستعرضة", completed: true },
        { id: "h2_p3", title: "انتشار الضوء وانعكاسه وقانون الانكسار ومعامل الانكسار", completed: true },
        { id: "h2_p4", title: "تداخل الضوء وتجربة الشق المزدوج لتوماس يونج والحيود", completed: false },
        { id: "h2_p5", title: "الانعكاس الكلي والزاوية الحرجة والألياف الضوئية", completed: false },
        { id: "h2_p6", title: "المنشور الثلاثي في وضع النهاية الصغرى للانحراف", completed: false }
      ],
      quizzes: [
        {
          question: "في تجربة الشق المزدوج ليونج، تزداد المسافة بين هدبتين مضيئتين متتاليتين (دلتا y) عندما:",
          options: ["يزداد الطول الموجي للضوء المستخدم (لامدا)", "تقل المسافة بين الشقين والحائل (R)", "تزداد المسافة بين الشقين (d)", "يقل التردد فقط"],
          correct: 0,
          explanation: "قانون يونج: دلتا y = (لامدا × R) / d، بالتالي دلتا y تتناسب طردياً مع الطول الموجي للضوء المستخدم."
        }
      ]
    },
    {
      id: "h2_chemistry",
      name: "الكيمياء (بنية الذرة والجدول الدوري)",
      code: "CHEM-200",
      icon: "fa-flask-vial",
      color: "from-amber-600 to-orange-500",
      totalLessons: 5,
      completedLessons: 3,
      summary: "تطور مفهوم بنية الذرة (طومسون، رذرفورد، بور)، أعداد الكم الأربعة، والجدول الدوري الحديث وتدرج الخواص.",
      lessons: [
        { id: "h2_c1", title: "بنية الذرة ونماذج طومسون ورذرفورد وبور", completed: true },
        { id: "h2_c2", title: "النظرية الذرية الحديثة ومبدأ هايزنبرج ومعادلة شرودنجر", completed: true },
        { id: "h2_c3", title: "أعداد الكم الأربعة (الرئيسي، الثانوي، المغناطيسي، المغزلي)", completed: true },
        { id: "h2_c4", title: "قواعد توزيع الإلكترونات ومبدأ البناء التصاعدي وقاعدة هوند", completed: false },
        { id: "h2_c5", title: "الجدول الدوري الحديث وتدرج نصف القطر وجهد التأين والميل الإلكتروني", completed: false }
      ],
      quizzes: [
        {
          question: "أقصى عدد من الإلكترونات يستوعبه المستوى الفرعي 3d هو:",
          options: ["10 إلكترونات", "6 إلكترونات", "2 إلكترون", "14 إلكتروناً"],
          correct: 0,
          explanation: "المستوى الفرعي d يتكون من 5 أوربيتالات، وكل أوربيتال يتسع لإلكترونين، إذن يتسع لـ 10 إلكترونات كحد أقصى."
        }
      ]
    },
    {
      id: "h2_biology",
      name: "الأحياء (التغذية والنقل والتنفس)",
      code: "BIO-200",
      icon: "fa-dna",
      color: "from-emerald-600 to-teal-500",
      totalLessons: 5,
      completedLessons: 3,
      summary: "التغذية الذاتية في النبات والبناء الضوئي، التغذية غير الذاتية والهضم في الإنسان، النقل في النبات والإنسان والدورة الدموية.",
      lessons: [
        { id: "h2_b1", title: "التغذية الذاتية والبناء الضوئي في النبات الأخضر", completed: true },
        { id: "h2_b2", title: "التغذية غير الذاتية والجهاز الهضمي والإنزيمات في الإنسان", completed: true },
        { id: "h2_b3", title: "النقل في النباتات الوعائية وصعود العصارة", completed: true },
        { id: "h2_b4", title: "النقل في الإنسان والقلب والأوعية الدموية وضغط الدم", completed: false },
        { id: "h2_b5", title: "التنفس الخلوي الهوائي ودورة كريبس وسلسلة نقل الإلكترون", completed: false }
      ],
      quizzes: [
        {
          question: "المركب الأساسي الحامل للطاقة في الخلية الحية والذي يسمى 'عملة الطاقة' هو:",
          options: ["ATP (أدينوسين ثلاثي الفوسفات)", "الجلوكوز", "حمض البيروفيك", "NADH"],
          correct: 0,
          explanation: "جزيئات ATP هي عملة الطاقة في الخلية لأنها سريعة وسهلة التفكك لإطلاق الطاقة المخزنة في روابطها."
        }
      ]
    }
  ],

  // شعبة أدبي - الصف الثاني الثانوي
  "highschool_2_أدبي": [
    {
      id: "h2_lit_arabic",
      name: "اللغة العربية والبلاغة",
      code: "ARB-200-L",
      icon: "fa-feather-pointed",
      color: "from-rose-600 to-pink-500",
      totalLessons: 6,
      completedLessons: 3,
      summary: "النحو، البلاغة، الأدب، والنصوص النثرية والشعرية المقررة.",
      lessons: [
        { id: "h2_la1", title: "نحو: إعراب المضارع ونصبه وجزمه والمصادر", completed: true },
        { id: "h2_la2", title: "بلاغة: المحسنات البديعية المعنوية واللفظية", completed: true },
        { id: "h2_la3", title: "أدب: العصر الجاهلي وصدر الإسلام والأموي", completed: false }
      ],
      quizzes: [
        {
          question: "المحسن البديعي بين كلمتي «يوم» و «يومئذ» هو:",
          options: ["جناس ناقص", "جناس تام", "طباق إيجاب", "سجع"],
          correct: 0,
          explanation: "الجناس الناقص يحدث عندما يختلف اللفظان في عدد الحروف أو ترتيبها أو ضبطها."
        }
      ]
    },
    {
      id: "h2_lit_english",
      name: "اللغة الإنجليزية",
      code: "ENG-200-L",
      icon: "fa-language",
      color: "from-indigo-600 to-violet-500",
      totalLessons: 5,
      completedLessons: 2,
      summary: "General English curriculum, Reading and Writing essays.",
      lessons: [
        { id: "h2_le1", title: "Unit 1: Health & Safety", completed: true },
        { id: "h2_le2", title: "Unit 2: Culture & Gastronomy", completed: true },
        { id: "h2_le3", title: "Unit 3: Agriculture Future", completed: false }
      ],
      quizzes: [
        {
          question: "Choose the correct modal of obligation:",
          options: ["Students have to wear uniforms at school.", "Students may wearing.", "Students can to wear.", "Students shall wearing."],
          correct: 0,
          explanation: "We use 'have to' for external rules and obligations."
        }
      ]
    },
    {
      id: "h2_lit_history",
      name: "التاريخ الإسلامي والحضارة",
      code: "HIST-200",
      icon: "fa-mosque",
      color: "from-amber-600 to-orange-500",
      totalLessons: 5,
      completedLessons: 3,
      summary: "شبه الجزيرة العربية قبل الإسلام، الفتوحات الإسلامية، والدول المستقلة.",
      lessons: [
        { id: "h2_lh1", title: "أحوال شبه الجزيرة العربية قبل البعثة النبوية", completed: true },
        { id: "h2_lh2", title: "دعوة الإسلام في مكة والهجرة والمدينة", completed: true },
        { id: "h2_lh3", title: "الفتوحات الإسلامية في عصر الخلفاء الراشدين", completed: false }
      ],
      quizzes: [
        {
          question: "أول معركة بحرية خاضها المسلمون في عهد الخليفة عثمان بن عفان كانت معركة:",
          options: ["ذات الصواري", "القادسية", "اليرموك", "عين جالوت"],
          correct: 0,
          explanation: "معركة ذات الصواري عام 34 هـ كانت أول انتصار بحري للأسطول الإسلامي ضد الأسطول البيزنطي."
        }
      ]
    },
    {
      id: "h2_lit_geography",
      name: "جغرافيا التنمية والموارد",
      code: "GEO-200",
      icon: "fa-earth-africa",
      color: "from-emerald-600 to-teal-500",
      totalLessons: 4,
      completedLessons: 2,
      summary: "مفهوم التنمية المستدامة، التقنيات الحديثة في الجغرافيا، ومصادر الطاقة والمياه.",
      lessons: [
        { id: "h2_lg1", title: "جغرافيا التنمية ومجالاتها والاستدامة", completed: true },
        { id: "h2_lg2", title: "الاستشعار عن بعد ونظم المعلومات الجغرافية GIS", completed: true },
        { id: "h2_lg3", title: "الموارد المائية وأساليب إدارتها في الوطن العربي", completed: false }
      ],
      quizzes: [
        {
          question: "التنمية التي تلبي احتياجات الحاضر دون الإضرار بقدرة الأجيال القادمة هي:",
          options: ["التنمية المستدامة", "التنمية الاقتصادية فقط", "التنمية البشرية", "التنمية الاستهلاكية"],
          correct: 0,
          explanation: "التنمية المستدامة تهدف إلى التوازن بين متطلبات الحاضر والحفاظ على حقوق الأجيال القادمة."
        }
      ]
    },
    {
      id: "h2_lit_psychology",
      name: "علم النفس والاجتماع",
      code: "PSY-200",
      icon: "fa-brain",
      color: "from-purple-600 to-indigo-500",
      totalLessons: 4,
      completedLessons: 2,
      summary: "نشأة علم النفس ومدارسه، مناهج البحث، والعمليات المعرفية (الإحساس، الانتباه، الإدراك).",
      lessons: [
        { id: "h2_lp1", title: "نشأة وتطور علم النفس ومدارسه الكبرى", completed: true },
        { id: "h2_lp2", title: "العمليات المعرفية: الإحساس والانتباه والإدراك", completed: true },
        { id: "h2_lp3", title: "مدخل لعلم الاجتماع والظاهرة الاجتماعية", completed: false }
      ],
      quizzes: [
        {
          question: "أبسط العمليات المعرفية التي تمثل نقطة الانطلاق لكافة العمليات العقلية هي:",
          options: ["الإحساس", "الانتباه", "الإدراك", "التفكير"],
          correct: 0,
          explanation: "الإحساس هو الخطوة والعملية المعرفية الأولى لاستقبال المثيرات عبر الحواس."
        }
      ]
    }
  ],

  // ==================== 4. الصف الثالث الثانوي (ثانوية عامة 2026 - النظام المعتمد المطور) ====================
  // شعبة علمي علوم (5 مواد أساسية مضافة للمجموع 2026)
  "highschool_3_علمي علوم": [
    {
      id: "h3_sci_arabic",
      name: "اللغة العربية والنحو الشامل",
      code: "ARB-301",
      icon: "fa-feather-pointed",
      color: "from-rose-600 to-pink-500",
      totalLessons: 7,
      completedLessons: 4,
      summary: "الوحدات النحوية السبع، مدارس الشعر والأدب، فنون النثر وقراءة متحررة المحتوى وبنك الأسئلة المطور.",
      lessons: [
        { id: "h3_sa1", title: "الوحدة الأولى: قواعد الإملاء وهمزتا الوصل والقطع", completed: true },
        { id: "h3_sa2", title: "الوحدة الثانية: المشتقات العاملة والمصادر والمقصور والمنقوص", completed: true },
        { id: "h3_sa3", title: "الوحدة الثالثة: النواسخ والمبتدأ والخبر وحالات الحذف والتقديم", completed: true },
        { id: "h3_sa4", title: "الوحدة الرابعة: المنصوبات والمفاعيل والحال والتمييز والاستثناء", completed: true },
        { id: "h3_sa5", title: "مدرسة الإحياء والبعث وجيل التطوير وأحمد شوقي", completed: false },
        { id: "h3_sa6", title: "مدرسة الاتجاه الوجداني والديوان وأبولو والمهجر والواقعية", completed: false },
        { id: "h3_sa7", title: "الوحدة السابعة: الممنوع من الصرف وأحكامه الكاملة", completed: false }
      ],
      quizzes: [
        {
          question: "في جملة «أَراضٍ ضميرُك عن سعيك؟»، إعراب كلمة «ضميرُك» هو:",
          options: [
            "فاعل لاسم الفاعل سد مسد الخبر مرفوع بالضمة",
            "مبتدأ مؤخر مرفوع بالضمة",
            "مفعول به منصوب بالفتحة",
            "مضاف إليه مجرور"
          ],
          correct: 0,
          explanation: "اسم الفاعل 'راضٍ' اعتمد على استفهام فيعمل عمل فعله ويرفع فاعلاً سد مسد الخبر وهو كلمة 'ضميرك'."
        }
      ]
    },
    {
      id: "h3_sci_english",
      name: "اللغة الأجنبية الأولى (الإنجليزية)",
      code: "ENG-301",
      icon: "fa-language",
      color: "from-indigo-600 to-violet-500",
      totalLessons: 6,
      completedLessons: 3,
      summary: "Advanced Grammar, Past/Present/Future perfect forms, Conditionals, Modals of Deduction, Great Expectations.",
      lessons: [
        { id: "h3_se1", title: "Unit 1: Read All About It! (Past tenses & News)", completed: true },
        { id: "h3_se2", title: "Unit 2: Her Story & Inspirational Figures", completed: true },
        { id: "h3_se3", title: "Unit 3: Beyond Earth & Space Travel (Future forms)", completed: true },
        { id: "h3_se4", title: "Unit 4: Taking Care of Ourselves (Burnout & Stress)", completed: false },
        { id: "h3_se5", title: "Unit 5: The Future of Work & Phrasal Verbs", completed: false },
        { id: "h3_se6", title: "Unit 6: Passive Voice & Causative Verbs (Have/Get)", completed: false }
      ],
      quizzes: [
        {
          question: "By next October, the students _______ their secondary school graduation project.",
          options: [
            "will have completed",
            "will complete",
            "have completed",
            "are completing"
          ],
          correct: 0,
          explanation: "We use the Future Perfect (will have + past participle) with 'By + future date'."
        }
      ]
    },
    {
      id: "h3_sci_biology",
      name: "الأحياء والوراثة الطبية",
      code: "BIO-301",
      icon: "fa-dna",
      color: "from-emerald-600 to-teal-500",
      totalLessons: 6,
      completedLessons: 4,
      summary: "الدعامة والحركة، التنسيق الهرموني، التكاثر، المناعة، والـ DNA والـ RNA والهندسة الوراثية.",
      lessons: [
        { id: "h3_sb1", title: "الدعامة الفسيولوجية والتركيبية في النبات والعمود الفقري في الإنسان", completed: true },
        { id: "h3_sb2", title: "الحركة في الكائنات الحية والوحدة الحركية والانقباض العضلي", completed: true },
        { id: "h3_sb3", title: "التنسيق الهرموني والغدد الصماء والنخامية والدرقية والبنكرياس", completed: true },
        { id: "h3_sb4", title: "التكاثر في الكائنات الحية ودورة الطمث والتلقيح والإخصاب", completed: true },
        { id: "h3_sb5", title: "المناعة في النبات والإنسان والأجسام المضادة وخلايا T و B", completed: false },
        { id: "h3_sb6", title: "الحمض النووي DNA وتضاعفه وتخليق البروتين والهندسة الوراثية", completed: false }
      ],
      quizzes: [
        {
          question: "أي من الغدد التالية تعتبر غدة صماء وقنوية (غدة مشتركة / مختلطة) في نفس الوقت؟",
          options: ["البنكرياس", "الغدة النخامية", "الغدة الدرقية", "الغدة الكظرية"],
          correct: 0,
          explanation: "البنكرياس غدة مشتركة تفرز العصارة الهاضمة عبر القناة البنكرياسية وتفرز هرموني الأنسولين والجلوكاجون مباشرة في الدم."
        }
      ]
    },
    {
      id: "h3_sci_chemistry",
      name: "الكيمياء العضوية وغير العضوية",
      code: "CHEM-301",
      icon: "fa-flask-vial",
      color: "from-amber-500 to-orange-500",
      totalLessons: 6,
      completedLessons: 3,
      summary: "العناصر الانتقالية والحديد، التحليل الكيميائي، الاتزان الأيوني، الخلايا الجلفانية، والهيدروكربونات العضوية.",
      lessons: [
        { id: "h3_sc1", title: "العناصر الانتقالية واستخداماتها وخامات الحديد وتفاعلاته", completed: true },
        { id: "h3_sc2", title: "التحليل الكيميائي الوصفي والكمي (المعايرة والترسيب)", completed: true },
        { id: "h3_sc3", title: "الاتزان الكيميائي والأيوني وقاعدة لوشاتيليه وحاصل الإذابة Ksp", completed: true },
        { id: "h3_sc4", title: "الكيمياء الكهربية والخلايا الجلفانية وصدأ المعادن وقوانين فاراداي", completed: false },
        { id: "h3_sc5", title: "الهيدروكربونات الأليفاتية (الألكانات، الألكينات، الألكاينات)", completed: false },
        { id: "h3_sc6", title: "مشتقات الهيدروكربونات (الكحولات، الفينولات، الأحماض، الإسترات)", completed: false }
      ],
      quizzes: [
        {
          question: "عند إضافة محلول كلوريد الحديد III إلى محلول ثيوسيانات الأمونيوم، يتلون المحلول باللون:",
          options: ["الأحمر الدموي", "الأزرق الداكن", "الأخضر الباهت", "البنفسجي"],
          correct: 0,
          explanation: "يتكون ثيوسيانات الحديد III ذو اللون الأحمر الدموي دلالة على حالة الاتزان الكيميائي الديناميكي."
        }
      ]
    },
    {
      id: "h3_sci_physics",
      name: "الفيزياء الكهربية والحديثة",
      code: "PHYS-301",
      icon: "fa-atom",
      color: "from-blue-600 to-cyan-500",
      totalLessons: 7,
      completedLessons: 4,
      summary: "التيار وقوانين كيرشوف، الحث الكهرومغناطيسي، دوائر المتردد، فيزياء الكم، الليزر، والإلكترونيات الحديثة.",
      lessons: [
        { id: "h3_sp1", title: "التيار الكهربي وقانون أوم للدائرة المغلقة وقوانين كيرشوف", completed: true },
        { id: "h3_sp2", title: "التأثير المغناطيسي للتيار الكهربي وأجهزة القياس الجلفانومتر والأميتر", completed: true },
        { id: "h3_sp3", title: "الحث الكهرومغناطيسي وقانون فاراداي والدينامو والمحول الكهربي", completed: true },
        { id: "h3_sp4", title: "دوائر التيار المتردد والمفاعلة السعوية والحثية ودائرة الرنين", completed: true },
        { id: "h3_sp5", title: "ازدواجية الموجة والجسيم، إشعاع الجسم الأسود وظاهرة كومتون", completed: false },
        { id: "h3_sp6", title: "الأطياف الذرية ومستويات الطاقة ونموذج بور والمطياف", completed: false },
        { id: "h3_sp7", title: "أشعة الليزر والإلكترونيات الحديثة والوصلة الثنائية والترانزستور", completed: false }
      ],
      quizzes: [
        {
          question: "في ظاهرة كومتون، بعد اصطدام فوتون أشعة جاما بإلكترون حر، ماذا يحدث لطاقة الفوتون وسرعته؟",
          options: [
            "تقل طاقته وتظل سرعته ثابتة (سرعة الضوء c)",
            "تقل طاقته وتقل سرعته",
            "تزداد طاقته وتزداد سرعته",
            "تظل طاقته وسرعته ثابتتين"
          ],
          correct: 0,
          explanation: "في ظاهرة كومتون يفقد الفوتون جزءاً من طاقته للإلكترون فتقل طاقته ويزداد طوله الموجي، ولكن سرعته تظل سرعة الضوء الثابتة c."
        }
      ]
    }
  ],

  // شعبة علمي رياضة - الصف الثالث الثانوي 2026 (5 مواد أساسية)
  "highschool_3_علمي رياضة": [
    {
      id: "h3_mth_arabic",
      name: "اللغة العربية",
      code: "ARB-302",
      icon: "fa-feather-pointed",
      color: "from-rose-600 to-pink-500",
      totalLessons: 7,
      completedLessons: 4,
      summary: "النحو الشامل والبلاغة والأدب المطور للثانوية العامة 2026.",
      lessons: [
        { id: "h3_ma1", title: "الوحدات النحوية وقواعد الإعراب", completed: true },
        { id: "h3_ma2", title: "مدارس الشعر العربي ونصوص متحررة", completed: true },
        { id: "h3_ma3", title: "التعبير المقالي المطور والبلاغة", completed: false }
      ],
      quizzes: [
        {
          question: "ما إعراب كلمة «ثقةً» في جملة «وقف الجندي في الميدان ثقةً بنصر الله»؟",
          options: ["مفعول لأجله منصوب بالفتحة", "حال منصوب بالفتحة", "تمييز منصوب", "مفعول به"],
          correct: 0,
          explanation: "مفعول لأجله لأنه يبين سبب حدوث الفعل (لماذا وقف الجندي؟ ثقةً بنصر الله)."
        }
      ]
    },
    {
      id: "h3_mth_english",
      name: "اللغة الأجنبية الأولى",
      code: "ENG-302",
      icon: "fa-language",
      color: "from-indigo-600 to-violet-500",
      totalLessons: 6,
      completedLessons: 3,
      summary: "English Grammar, Reading Comprehension and Essay Writing for Engineering Aspirants.",
      lessons: [
        { id: "h3_me1", title: "Units 1-3: Advanced Grammar & Writing", completed: true },
        { id: "h3_me2", title: "Units 4-6: Modals and Causatives", completed: false }
      ],
      quizzes: [
        {
          question: "He _______ have forgotten his keys; he cannot open his house door now.",
          options: ["must", "can't", "shouldn't", "might not"],
          correct: 0,
          explanation: "Must have + P.P expresses strong certainty in the past."
        }
      ]
    },
    {
      id: "h3_mth_pure_applied",
      name: "الرياضيات البحتة والتطبيقية (استاتيكا وديناميكا وتفاضل)",
      code: "MATH-302",
      icon: "fa-infinity",
      color: "from-blue-600 to-cyan-500",
      totalLessons: 8,
      completedLessons: 5,
      summary: "الاحتكاك، العزوم، الاتزان العام، قوانين نيوتن والدفع والتصادم، الاشتقاق الضمني، ومعدلات الزمن المرتبطة.",
      lessons: [
        { id: "h3_mm1", title: "تفاضل: اشتقاق الدوال المثلثية والاشتقاق الضمني والبارامتري", completed: true },
        { id: "h3_mm2", title: "تفاضل: المعدلات الزمنية المرتبطة وسلوك الدالة ونقط الانقلاب", completed: true },
        { id: "h3_mm3", title: "تكامل: طرق التكامل المتقدمة والتكامل بالتجزيء والتعويض والحجوم", completed: true },
        { id: "h3_mm4", title: "استاتيكا: الاحتكاك على مستوى أفقي ومائل خشن", completed: true },
        { id: "h3_mm5", title: "استاتيكا: عزم قوة حول نقطة والازدواج والاتزان العام", completed: true },
        { id: "h3_mm6", title: "ديناميكا: الحركة في خط مستقيم والسرعة النسبية ومتجهات الموضع", completed: false },
        { id: "h3_mm7", title: "ديناميكا: قوانين نيوتن الثلاثة ومبدأ الشغل والطاقة والقدرة", completed: false },
        { id: "h3_mm8", title: "جبر فراغي: المتجهات في الفراغ ثلاثي الأبعاد ومعادلة الخط والمستوى", completed: false }
      ],
      quizzes: [
        {
          question: "مشتقة الدالة ص = ظا(2س) بالنسبة لـ س تساوي:",
          options: ["2 قا^2(2س)", "قا^2(2س)", "2 ظتا(2س)", "-2 قا^2(2س)"],
          correct: 0,
          explanation: "مشتقة ظا(د(س)) هي قا^2(د(س)) مضروبة في مشتقة الزاوية 2، فتكون النتيجة 2 قا^2(2س)."
        }
      ]
    },
    {
      id: "h3_mth_chemistry",
      name: "الكيمياء",
      code: "CHEM-302",
      icon: "fa-flask-vial",
      color: "from-amber-500 to-orange-500",
      totalLessons: 6,
      completedLessons: 3,
      summary: "العناصر الانتقالية، التحليل، الاتزان، الكهربية، والكيمياء العضوية.",
      lessons: [
        { id: "h3_mc1", title: "العناصر الانتقالية والاتزان والكهربية", completed: true },
        { id: "h3_mc2", title: "الهيدروكربونات ومشتقاتها الكيميائية", completed: false }
      ],
      quizzes: [
        {
          question: "العنصر الانتقالي الرئيسي الذي يمتلك أعلى حالة تأكسد (+7) في السلسلة الانتقالية الأولى هو:",
          options: ["المنجنيز Mn", "الحديد Fe", "الكروم Cr", "الفاناديوم V"],
          correct: 0,
          explanation: "المنجنيز Mn25 يمتلك حالة التأكسد +7 بفقد جميع إلكترونات 4s و 3d."
        }
      ]
    },
    {
      id: "h3_mth_physics",
      name: "الفيزياء",
      code: "PHYS-302",
      icon: "fa-atom",
      color: "from-cyan-600 to-blue-500",
      totalLessons: 7,
      completedLessons: 4,
      summary: "الكهربية التيارية، الكهرومغناطيسية، والفيزياء الحديثة.",
      lessons: [
        { id: "h3_mp1", title: "الكهربية والتيار المتردد والحث الكهرومغناطيسي", completed: true },
        { id: "h3_mp2", title: "الفيزياء الحديثة وليزر الأطياف", completed: false }
      ],
      quizzes: [
        {
          question: "قاعدة لنز تستخدم لتحديد اتجاه التيار المستحث، وهي تطبيق مباشر لقانون:",
          options: ["بقاء الطاقة", "بقاء الشحنة", "بقاء كمية التحرك", "قانون أوم"],
          correct: 0,
          explanation: "قاعدة لنز صيغة من صيغ قانون بقاء الطاقة، لأن التيار المستحث يعاكس السبب المنشئ له باذلاً شغلاً."
        }
      ]
    }
  ],

  // شعبة أدبي - الصف الثالث الثانوي 2026 (5 مواد أساسية)
  "highschool_3_أدبي": [
    {
      id: "h3_lit_arabic",
      name: "اللغة العربية",
      code: "ARB-303",
      icon: "fa-feather-pointed",
      color: "from-rose-600 to-pink-500",
      totalLessons: 7,
      completedLessons: 4,
      summary: "النحو التراكمي الشامل، مدارس الشعر العربي، الأدب، والنثر المقالي.",
      lessons: [
        { id: "h3_la1", title: "الوحدات النحوية السبع", completed: true },
        { id: "h3_la2", title: "مدارس الشعر والنصوص الأدبية", completed: true }
      ],
      quizzes: [
        {
          question: "رائد مدرسة الإحياء والبعث في الشعر العربي الحديث هو:",
          options: ["محمود سامي البارودي", "أحمد شوقي", "حافظ إبراهيم", "خليل مطران"],
          correct: 0,
          explanation: "رب السيف والقلم محمود سامي البارودي هو الرائد الأول لحركة الإحياء والبعث."
        }
      ]
    },
    {
      id: "h3_lit_english",
      name: "اللغة الأجنبية الأولى",
      code: "ENG-303",
      icon: "fa-language",
      color: "from-indigo-600 to-violet-500",
      totalLessons: 6,
      completedLessons: 3,
      summary: "English Literature, Advanced Grammar, and Translation Mastery.",
      lessons: [
        { id: "h3_le1", title: "Units 1-6 Full Syllabus", completed: true }
      ],
      quizzes: [
        {
          question: "Choose the correct preposition: She is very good _______ languages.",
          options: ["at", "in", "with", "for"],
          correct: 0,
          explanation: "We say 'good at' an activity or subject."
        }
      ]
    },
    {
      id: "h3_lit_history",
      name: "التاريخ العام الحديث والمعاصر",
      code: "HIST-303",
      icon: "fa-landmark-dome",
      color: "from-amber-600 to-orange-500",
      totalLessons: 8,
      completedLessons: 5,
      summary: "الحملة الفرنسية، بناء الدولة الحديثة في عهد محمد علي، الثورة العرابية، ثورة 1919، الصراع العربي الصهيوني وثورة 23 يوليو.",
      lessons: [
        { id: "h3_lh1", title: "الفصل الأول: الحملة الفرنسية على مصر والشام", completed: true },
        { id: "h3_lh2", title: "الفصل الثاني: بناء الدولة الحديثة في عهد محمد علي وخلفائه", completed: true },
        { id: "h3_lh3", title: "الفصل الثالث: مصر منذ الثورة العرابية حتى الحرب العالمية الأولى", completed: true },
        { id: "h3_lh4", title: "الفصل الرابع: ثورة 1919 ومصر من الحماية حتى ثورة 23 يوليو 1952", completed: true },
        { id: "h3_lh5", title: "الفصل الخامس: التوسع الاستعماري في البلاد العربية والخليج", completed: true },
        { id: "h3_lh6", title: "الفصل السادس: التوسع الاستعماري في بلاد الشام والعراق وثورة العشرين", completed: false },
        { id: "h3_lh7", title: "الفصل السابع: القضية الفلسطينية والحروب العربية الإسرائيلية ونصر أكتوبر", completed: false }
      ],
      quizzes: [
        {
          question: "صدر تصريح 28 فبراير 1922 من بريطانيا واعترف بمصر دولة مستقلة ذات سيادة مع وجود:",
          options: ["التحفظات الأربعة الشهيرة", "بقاء الامتيازات الأجنبية فقط", "التنازل عن السودان", "إلغاء الجيش المصري"],
          correct: 0,
          explanation: "تصريح 28 فبراير تضمن التحفظات الأربعة الشهيرة (تأمين المواصلات البريطانية، الدفاع عن مصر، حماية المصالح الأجنبية، ومسألة السودان)."
        }
      ]
    },
    {
      id: "h3_lit_geography",
      name: "الجغرافيا السياسية",
      code: "GEO-303",
      icon: "fa-earth-africa",
      color: "from-emerald-600 to-teal-500",
      totalLessons: 6,
      completedLessons: 4,
      summary: "الدولة وتعريفها وأنواعها، المقومات الطبيعية والبشرية لقوة الدولة، الحدود السياسية، الأحلاف العسكرية والتكتلات الاقتصادية.",
      lessons: [
        { id: "h3_lg1", title: "المدخل: مفهوم الجغرافيا السياسية وتطورها والجيوبوليتيك", completed: true },
        { id: "h3_lg2", title: "الوحدة الأولى: الدولة وأنواعها (الوحدوية والفيدرالية والكونفدرالية) والعواصم", completed: true },
        { id: "h3_lg3", title: "المقومات الطبيعية لقوة الدولة (الموقع والمساحة والشكل والتضاريس والمناخ)", completed: true },
        { id: "h3_lg4", title: "المقومات البشرية لقوة الدولة (السكان والتركيب الاقتصادي والقوة العسكرية)", completed: true },
        { id: "h3_lg5", title: "الوحدة الثانية: الحدود السياسية ووظائفها وتطورها عبر التاريخ", completed: false },
        { id: "h3_lg6", title: "الوحدة الثالثة والرابعة: التكتلات الاقتصادية (الاتحاد الأوروبي، الكوميسا) والأحلاف العسكرية", completed: false }
      ],
      quizzes: [
        {
          question: "العالم المسلم الذي وضع الإطار العام لدورة حياة الدولة (النشأة، الثبات، النضج، الاضمحلال) في مقدمته الشهيرة هو:",
          options: ["ابن خلدون", "أرسطو", "فريدريك راتزل", "رودلف كلين"],
          correct: 0,
          explanation: "ابن خلدون في كتابه 'مقدمة ابن خلدون' وضع الإطار النظري لدورة حياة الدولة واعتبرها كالكائن الحي."
        }
      ]
    },
    {
      id: "h3_lit_statistics",
      name: "الإحصاء والاقتصاد",
      code: "STAT-303",
      icon: "fa-chart-pie",
      color: "from-blue-600 to-indigo-500",
      totalLessons: 4,
      completedLessons: 2,
      summary: "معامل الارتباط (بيرسون وسبيرمان)، معادلة خط الانحدار، الاحتمال الشرطي، والتوزيع الطبيعي المعياري.",
      lessons: [
        { id: "h3_ls1", title: "الارتباط والانحدار ومعاملا بيرسون وسبيرمان", completed: true },
        { id: "h3_ls2", title: "الاحتمال الشرطي والأحداث المستقلة", completed: true },
        { id: "h3_ls3", title: "المتغيرات العشوائية والتوزيع الاحتمالي", completed: false },
        { id: "h3_ls4", title: "التوزيع الطبيعي المعياري وجدول المساحات", completed: false }
      ],
      quizzes: [
        {
          question: "إذا كانت قيمة معامل الارتباط الخطي ر = -1، فإن الارتباط بين المتغيرين هو ارتباط:",
          options: ["عكسي تام", "طردي تام", "منعدم", "متوسط"],
          correct: 0,
          explanation: "عندما تكون ر = -1 يكون الارتباط عكسياً تاماً، وإذا كانت +1 يكون طردياً تاماً، وإذا كانت صفر يكون منعدماً."
        }
      ]
    }
  ],

  // ==================== 5. المرحلة الجامعية ====================
  // كليات القطاع الطبي والصحي
  "university_كليات الطب والعلوم الصحية": [
    {
      id: "u_med_anatomy",
      name: "Human Anatomy & Histology (التشريح وعلم الأنسجة)",
      code: "MED-101",
      icon: "fa-bone",
      color: "from-rose-600 to-pink-500",
      totalLessons: 6,
      completedLessons: 3,
      summary: "Gross Anatomy of the Musculoskeletal, Cardiovascular, and Nervous systems, microscopic tissue identification.",
      lessons: [
        { id: "u_m1", title: "Introduction to Anatomical Planes & Musculoskeletal System", completed: true },
        { id: "u_m2", title: "Thorax, Heart Anatomy & Coronary Circulation", completed: true },
        { id: "u_m3", title: "Abdomen & Gastrointestinal Tract Anatomy", completed: true },
        { id: "u_m4", title: "Neuroanatomy & Cranial Nerves", completed: false }
      ],
      quizzes: [
        {
          question: "Which heart chamber is responsible for pumping oxygenated blood to the whole body through the aorta?",
          options: ["Left Ventricle", "Right Ventricle", "Left Atrium", "Right Atrium"],
          correct: 0,
          explanation: "The left ventricle has the thickest myocardium and pumps oxygen-rich blood into the systemic circulation via the aorta."
        }
      ]
    },
    {
      id: "u_med_physiology",
      name: "Medical Physiology (علم وظائف الأعضاء)",
      code: "MED-102",
      icon: "fa-heart-pulse",
      color: "from-red-600 to-rose-500",
      totalLessons: 6,
      completedLessons: 3,
      summary: "Membrane potentials, Action potentials, Cardiac cycle, Renal clearance, and Endocrine feedback loops.",
      lessons: [
        { id: "u_p1", title: "Cell Physiology & Resting Membrane Potential", completed: true },
        { id: "u_p2", title: "Cardiac Output & Regulation of Arterial Blood Pressure", completed: true },
        { id: "u_p3", title: "Renal Glomerular Filtration & Acid-Base Balance", completed: false }
      ],
      quizzes: [
        {
          question: "The natural pacemaker of the human heart that initiates the cardiac electrical impulse is the:",
          options: ["Sinoatrial (SA) Node", "Atrioventricular (AV) Node", "Bundle of His", "Purkinje Fibers"],
          correct: 0,
          explanation: "The SA node spontaneously depolarizes at the highest frequency and sets the rhythmic pace of the heartbeat."
        }
      ]
    },
    {
      id: "u_med_biochem",
      name: "Medical Biochemistry & Genetics (الكيمياء الحيوية)",
      code: "MED-103",
      icon: "fa-dna",
      color: "from-emerald-600 to-teal-500",
      totalLessons: 5,
      completedLessons: 2,
      summary: "Enzymology, Carbohydrate & Lipid metabolism, Krebs cycle, and Molecular genetics.",
      lessons: [
        { id: "u_b1", title: "Enzymes: Kinetics & Allosteric Regulation", completed: true },
        { id: "u_b2", title: "Glycolysis, Gluconeogenesis, & Glycogen Metabolism", completed: true },
        { id: "u_b3", title: "Lipid Metabolism, Cholesterol & Lipoproteins", completed: false }
      ],
      quizzes: [
        {
          question: "Which metabolic pathway converts glucose into pyruvate yielding a net gain of 2 ATP molecules?",
          options: ["Glycolysis", "Gluconeogenesis", "Glycogenolysis", "Beta-oxidation"],
          correct: 0,
          explanation: "Glycolysis occurs in the cytosol and converts 1 molecule of glucose into 2 pyruvate, yielding net 2 ATP and 2 NADH."
        }
      ]
    },
    {
      id: "u_med_pathology",
      name: "General Pathology & Microbiology (علم الأمراض)",
      code: "MED-104",
      icon: "fa-virus",
      color: "from-amber-600 to-orange-500",
      totalLessons: 5,
      completedLessons: 2,
      summary: "Cellular injury, Acute and chronic inflammation, Wound healing, and Bacterial genetics.",
      lessons: [
        { id: "u_pa1", title: "Cellular Adaptation, Necrosis vs Apoptosis", completed: true },
        { id: "u_pa2", title: "Acute Inflammation & Vascular Permeability", completed: true },
        { id: "u_pa3", title: "Gram-positive & Gram-negative Bacterial Pathogenesis", completed: false }
      ],
      quizzes: [
        {
          question: "Programmed, energy-dependent physiological cell death is scientifically defined as:",
          options: ["Apoptosis", "Necrosis", "Gangrene", "Infarction"],
          correct: 0,
          explanation: "Apoptosis is programmed cell death characterized by cell shrinkage, DNA fragmentation, and phagocytosis without surrounding inflammation."
        }
      ]
    }
  ],

  // كليات الهندسة
  "university_كليات الهندسة والتكنولوجيا": [
    {
      id: "u_eng_math",
      name: "Engineering Mathematics & Calculus (الرياضيات الهندسية)",
      code: "ENG-101",
      icon: "fa-calculator",
      color: "from-blue-600 to-cyan-500",
      totalLessons: 6,
      completedLessons: 3,
      summary: "Multivariable Calculus, Linear Algebra, Differential Equations, and Laplace Transforms.",
      lessons: [
        { id: "u_em1", title: "Matrices, Eigenvalues & Eigenvectors", completed: true },
        { id: "u_em2", title: "First & Second Order Ordinary Differential Equations", completed: true },
        { id: "u_em3", title: "Laplace Transforms & Transfer Functions", completed: false }
      ],
      quizzes: [
        {
          question: "The Laplace transform of the unit step function u(t) is equal to:",
          options: ["1 / s", "1 / s^2", "s", "1"],
          correct: 0,
          explanation: "L{u(t)} = integral from 0 to infinity of e^(-st) dt = 1/s for s > 0."
        }
      ]
    },
    {
      id: "u_eng_physics",
      name: "Engineering Physics & Electromagnetics (الفيزياء الهندسية)",
      code: "ENG-102",
      icon: "fa-atom",
      color: "from-indigo-600 to-blue-500",
      totalLessons: 5,
      completedLessons: 2,
      summary: "Maxwell's Equations, Waveguides, Semiconductor physics, and Quantum basics.",
      lessons: [
        { id: "u_ep1", title: "Gauss's Law & Electric Potential", completed: true },
        { id: "u_ep2", title: "Maxwell's Equations & Electromagnetic Wave Propagation", completed: true },
        { id: "u_ep3", title: "Semiconductor Physics, PN Junctions, & Diodes", completed: false }
      ],
      quizzes: [
        {
          question: "Which of Maxwell's equations demonstrates that there are no isolated magnetic monopoles in nature?",
          options: ["Gauss's Law for Magnetism (div B = 0)", "Faraday's Law", "Ampère's Law", "Gauss's Law for Electrostatics"],
          correct: 0,
          explanation: "div B = 0 states that the magnetic flux through any closed surface is zero, meaning magnetic lines are continuous loops without isolated magnetic poles."
        }
      ]
    },
    {
      id: "u_eng_circuits",
      name: "Electric Circuits & Electronics (الدوائر الكهربية)",
      code: "ENG-103",
      icon: "fa-bolt",
      color: "from-amber-500 to-yellow-500",
      totalLessons: 5,
      completedLessons: 2,
      summary: "Ohm & Kirchhoff's laws, Thévenin and Norton theorems, AC sinusoidal steady-state analysis.",
      lessons: [
        { id: "u_ec1", title: "Nodal & Mesh Analysis in Resistive Circuits", completed: true },
        { id: "u_ec2", title: "Thévenin & Norton Equivalent Circuits", completed: true },
        { id: "u_ec3", title: "RLC Transient & Frequency Response", completed: false }
      ],
      quizzes: [
        {
          question: "According to Thévenin's theorem, any linear electrical network can be replaced by an equivalent circuit consisting of:",
          options: ["A single voltage source in series with a resistor", "A single current source in parallel with a resistor", "Two voltage sources in parallel", "A capacitor in series with an inductor"],
          correct: 0,
          explanation: "Thévenin's theorem simplifies a circuit to a single equivalent open-circuit voltage source (Vth) in series with an equivalent resistance (Rth)."
        }
      ]
    }
  ],

  // كليات الحاسبات والمعلومات والذكاء الاصطناعي
  "university_كليات الحاسبات والذكاء الاصطناعي": [
    {
      id: "u_cs_dsa",
      name: "Data Structures & Algorithms (هياكل البيانات والخوارزميات)",
      code: "CS-101",
      icon: "fa-sitemap",
      color: "from-indigo-600 to-purple-600",
      totalLessons: 6,
      completedLessons: 4,
      summary: "Arrays, Linked Lists, Stacks, Queues, Trees, Graphs, Sorting algorithms, and Big-O time complexity.",
      lessons: [
        { id: "u_cd1", title: "Algorithm Analysis, Asymptotic Notation & Big-O", completed: true },
        { id: "u_cd2", title: "Singly & Doubly Linked Lists Implementations", completed: true },
        { id: "u_cd3", title: "Stacks, Queues, & Expression Parsing", completed: true },
        { id: "u_cd4", title: "Binary Search Trees, AVL Trees, & Heaps", completed: true },
        { id: "u_cd5", title: "Graph Traversal: BFS, DFS, Dijkstra Shortest Path", completed: false }
      ],
      quizzes: [
        {
          question: "What is the average time complexity of searching for an element in a balanced Binary Search Tree (BST)?",
          options: ["O(log n)", "O(n)", "O(1)", "O(n log n)"],
          correct: 0,
          explanation: "In a balanced BST, each comparison halves the search space, giving an average search complexity of O(log n)."
        }
      ]
    },
    {
      id: "u_cs_ai",
      name: "Artificial Intelligence & Machine Learning (الذكاء الاصطناعي)",
      code: "CS-102",
      icon: "fa-brain",
      color: "from-emerald-600 to-cyan-500",
      totalLessons: 6,
      completedLessons: 3,
      summary: "Search algorithms, Supervised learning, Neural Networks, Deep Learning, and Natural Language Processing.",
      lessons: [
        { id: "u_ca1", title: "Informed Search: A* Algorithm & Heuristics", completed: true },
        { id: "u_ca2", title: "Linear & Logistic Regression with Gradient Descent", completed: true },
        { id: "u_ca3", title: "Artificial Neural Networks (ANN) & Backpropagation", completed: true },
        { id: "u_ca4", title: "Convolutional Neural Networks (CNN) for Computer Vision", completed: false }
      ],
      quizzes: [
        {
          question: "Which optimization algorithm is standardly used to minimize the loss function by iteratively updating neural network weights?",
          options: ["Gradient Descent", "Binary Search", "Dijkstra's Algorithm", "Merge Sort"],
          correct: 0,
          explanation: "Gradient descent computes the gradient of the loss function with respect to weights and updates them in the opposite direction."
        }
      ]
    },
    {
      id: "u_cs_db",
      name: "Database Systems & SQL (قواعد البيانات)",
      code: "CS-103",
      icon: "fa-database",
      color: "from-blue-600 to-indigo-600",
      totalLessons: 5,
      completedLessons: 2,
      summary: "Relational model, SQL DDL/DML, Normalization (1NF to BCNF), and NoSQL MongoDB.",
      lessons: [
        { id: "u_cb1", title: "Entity-Relationship Diagrams (ERD) & Relational Schema", completed: true },
        { id: "u_cb2", title: "SQL Complex Queries, Joins, & Subqueries", completed: true },
        { id: "u_cb3", title: "Database Normalization (1NF, 2NF, 3NF, BCNF)", completed: false }
      ],
      quizzes: [
        {
          question: "Which normal form eliminates partial dependency by ensuring that all non-key attributes are fully functionally dependent on the entire primary key?",
          options: ["Second Normal Form (2NF)", "First Normal Form (1NF)", "Third Normal Form (3NF)", "Boyce-Codd Normal Form (BCNF)"],
          correct: 0,
          explanation: "2NF requires the table to be in 1NF and that no non-prime attribute is partially dependent on any candidate key."
        }
      ]
    }
  ]
};

// ==================== SURPRISE REWARDS & ENGAGING CONTENT ====================
const SURPRISE_REWARDS = {
  reading: {
    title: "مقتطف من رواية غموض وتشويق كبرى (الجزء الأول)",
    type: "story",
    content: `
      «كانت الساعة تدق منتصف الليل عندما رن هاتف المحقق في الغرفة المظلمة. لم يكن الصوت عادياً، بل كان نغمة قديمة لم يسمعها منذ عشر سنوات.
      
      رفع السماعة ببطء، ليأتيه صوت هامس من الجانب الآخر: "إذا أردت معرفة الحقيقة وراء اختفاء الملف رقم 42، ابحث تحت البلاطة الثالثة في المكتبة القديمة قبل بزوغ الفجر.. لديك ساعتان فقط!"
      
      انقطع الاتصال فجأة، وتركه يحدق في الظلام بينما بدأ صوت المطر يرتطم بالنافذة بقوة غير مسبوقة...»
    `,
    continuationPromise: "هل استطاع الوصول للمكتبة في الوقت المحدد؟ وما الذي وجده تحت البلاطة الثالثة؟ ذاكر جلستك القادمة وحل الاختبار لفتح الجزء الثاني فوراً!"
  },
  football: {
    title: "لحظة تاريخية: قصة إصرار لا تُنسى في عالم المستديرة ⚽",
    type: "sports",
    content: `
      «الدقيقة 92 في نهائي لشبونة.. كل التوقعات كانت تشير لانتهاء الحلم وضياع اللقب، والجمهور بدأ يغادر المدرجات بالدموع.
      
      لكن في قلب منطقة الجزاء، كان هناك لاعب واحد فقط يرفض الاستسلام. التفت لزملائه وصرخ: "لسة ما خلصتش!". ارتفعت الركنية عالية، وقفز في الهواء وكأنه يتحدى قوانين الجاذبية ليضع الكرة برأسه في الشباك ويسجل هدف المعجزة!
      
      الدرس هنا: المباراة لا تنتهي حتى يطلق الحكم صافرته، وحلمك الدراسي لا ينتهي طالما أنفاسك وإصرارك مستمران!»
    `,
    continuationPromise: "ما هو التكتيك النفسي الذي قلبه في الشوط الإضافي؟ أكمل جلستك لنكشف لك كواليس غرفة الملابس الأسطورية!"
  },
  coding: {
    title: "شفرة المليار دولار: قصة السطر البرمجي الخارق 💻",
    type: "tech",
    content: `
      «في عام 2008، كان خادم أكبر موقع تجارب في العالم يتعطل كل 45 دقيقة ويهدد بإفلاس الشركة بالكامل. أمضى مبرمج عمره 19 عاماً ثلاثة أيام دون نوم يقرأ آلاف الأسطر، حتى لاحظ تكراراً لمتغير واحد غير محرر في الذاكرة. كتب سطراً واحداً فقط من 12 حرفاً، فضغط Enter.. وفجأة انخفض استهلاك السيرفر من 99% إلى 4% واستقرت المنظومة للأبد!»
    `,
    continuationPromise: "اكتشف لغز الشفرة القادم بعد إنجاز جلستك القادمة بنجاح!"
  },
  art: {
    title: "سر اللوحة المفقودة والألوان التي لا تجف 🎨",
    type: "art",
    content: `
      «عندما كان الرسام العبقري يقضي لياليه في مرسمه البارد، مزج لأول مرة مسحوق اللازورد النادر مع زيت الجوز بطريقة سرية لم يكتشفها مؤرخو الفن إلا بعد 400 عام. تلك اللمسة جعلت ألوان لوحته تشع نوراً غامضاً كأنها حية في عتمة الليل...»
    `,
    continuationPromise: "الجزء التالي من كواليس المرسم السري مستنيك بعد إتمام جلستك وحل أسئلتك!"
  }
};

// ==================== INSPIRING QUOTES POOL ====================
const INSPIRING_QUOTES = {
  reading: [
    { author: "نجيب محفوظ - أديب نوبل", text: "«الخوف لا يمنع من الموت ولكنه يمنع من الحياة.. والجهد لا يضيع هباءً أبداً.»" },
    { author: "عباس محمود العقاد", text: "«اقرأ لتتضاعف حياتك، وذاكر لتصنع مجدك بيدك.»" },
    { author: "أحمد خالد توفيق", text: "«ستصل إلى ما تريد، عندما تدرك أن التعب الحالي هو الثمن الزهيد لحلم عظيم.»" }
  ],
  football: [
    { author: "محمد صلاح - فخر العرب", text: "«إذا أردت النجاح حقاً، عليك أن تعمل بجد في الأيام التي لا ترغب فيها بالعمل إطلاقاً.»" },
    { author: "كريستيانو رونالدو", text: "«الموهبة بلا عمل شاق لا تساوي شيئاً. الانضباط اليومي هو الفارق.»" },
    { author: "بيب جوارديولا", text: "«التفاصيل الصغيرة هي التي تصنع الأبطال في اللحظات الحاسمة.»" }
  ],
  coding: [
    { author: "لينوس تورفالدس", text: "«الحديث رخيص، أرني الكود.. والنتيجة الحقيقية هي ما تنجزه في ساعات تركيزك.»" },
    { author: "ستيف جوبز", text: "«الشيء الوحيد الذي يبقيك مستمراً هو أن تحب ما تفعل وتؤمن بهدفك.»" }
  ],
  art: [
    { author: "فنسنت فان جوخ", text: "«إذا سمعت صوتاً داخلك يقول أنك لا تستطيع الرسم، فارسم وسوف يسكت هذا الصوت للأبد.»" },
    { author: "ليوناردو دا فينشي", text: "«التعلم هو الشيء الوحيد الذي لا يستنزف العقل أبداً، ولا يخيب أمله.»" }
  ]
};
