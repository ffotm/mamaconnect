export interface Article {
  id: string;
  image: string;
  title: string;
  preview: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  content: Section[];
}

export interface Section {
  heading?: string;
  body: string;
}

export const FEATURED_ARTICLE: Article = {
  id: "complete-guide-first-pregnancy",
  image: "🤱",
  title: "The Complete Guide to Your First Pregnancy: What Every New Mum Should Know",
  preview:
    "From your first positive test to the moment you hold your baby, this comprehensive guide covers everything you need to know. We explore nutrition, exercise, emotional well-being, and practical tips from experienced mothers and healthcare professionals.",
  category: "Pregnancy Health",
  author: "Dr. Amina Belhaj",
  date: "March 1, 2026",
  readTime: "12 min read",
  content: [
    {
      body: "Finding out you are pregnant is one of the most profound moments in a person's life. Whether you have been trying for months or the news came as a surprise, a flood of questions, emotions, and to-do lists immediately takes over. This guide aims to be your calm, clear companion through the entire journey — from that first positive test to the day you bring your baby home.",
    },
    {
      heading: "Your First Steps After a Positive Test",
      body: "The very first thing to do is confirm your pregnancy with a healthcare provider. A blood test can measure hCG (human chorionic gonadotropin) levels more accurately than a home strip. Once confirmed, book your first prenatal visit, ideally between weeks 8 and 10. At this appointment your midwife or doctor will calculate your due date, screen for risk factors, and discuss what to expect in the months ahead.",
    },
    {
      heading: "Nutrition: Eating for Two — Wisely",
      body: "You do not actually need to eat double the calories — only about 300 extra calories per day are needed, mostly in the second and third trimesters. Focus on folate-rich foods (leafy greens, lentils, fortified cereals) to support neural tube development, iron sources (lean meat, beans, pumpkin seeds) to prevent anaemia, and calcium (dairy, fortified plant milks, broccoli) for bone development. Take a prenatal vitamin containing at least 400 mcg of folic acid from the moment you know you are pregnant.",
    },
    {
      heading: "Exercise: Stay Active, Stay Safe",
      body: "Unless your doctor has advised otherwise, moderate exercise is not only safe during pregnancy — it is highly beneficial. Aim for 150 minutes of moderate-intensity activity per week. Walking, swimming, prenatal yoga, and low-impact aerobics are all excellent choices. Avoid contact sports, activities with a risk of falling, and exercises that require lying flat on your back after the first trimester. Listen to your body: if something feels uncomfortable, stop.",
    },
    {
      heading: "Emotional Well-being",
      body: "Pregnancy brings enormous hormonal shifts that can affect your mood, sleep, and outlook. It is completely normal to feel anxious, weepy, or overwhelmed at times alongside joy and excitement. Talk openly with your partner, a trusted friend, or a counsellor. If feelings of sadness or anxiety are persistent or interfering with daily life, speak with your healthcare provider — antenatal depression is common and very treatable.",
    },
    {
      heading: "Preparing for Labour",
      body: "As you enter the third trimester, begin preparing your birth plan, hospital bag, and newborn essentials. Attend antenatal classes — whether in person or online. Practice relaxation and breathing techniques. Discuss pain relief options with your midwife or obstetrician so you can make informed choices on the day. Remember: flexibility is key. Births rarely go exactly to plan, and what matters most is a safe arrival for both you and your baby.",
    },
    {
      heading: "The Fourth Trimester",
      body: "The weeks after birth — often called the fourth trimester — can be just as demanding as pregnancy itself. Your body is healing, your hormones are shifting dramatically, and you are learning to care for a brand-new person, often on very little sleep. Accept help when it is offered, prioritise rest over a clean house, and do not hesitate to ask your midwife or health visitor about breastfeeding support, emotional health, and newborn care. You are not expected to have all the answers — no new parent does.",
    },
  ],
};

export const ARTICLES: Article[] = [
  {
    id: "first-trimester-week-by-week",
    image: "🤰",
    title: "First Trimester: What to Expect Week by Week",
    preview:
      "From morning sickness to your first scan, here is everything you need to know about the first 12 weeks of pregnancy.",
    category: "Pregnancy Health",
    author: "Dr. Karima Zerrouki",
    date: "February 18, 2026",
    readTime: "8 min read",
    content: [
      {
        body: "The first trimester spans from conception to the end of week 12. It is a period of rapid, extraordinary change — mostly invisible from the outside but hugely significant inside your body. Many women feel the effects strongly; others sail through with minimal symptoms. Both experiences are completely normal.",
      },
      {
        heading: "Weeks 1 – 4: Conception and Implantation",
        body: "Technically, weeks 1 and 2 of pregnancy are counted from the first day of your last menstrual period, even though conception has not yet occurred. Ovulation and fertilisation happen around week 2. By week 4 the fertilised egg has travelled to the uterus and implanted in the uterine lining. You might notice very light spotting (implantation bleeding) around this time. A home pregnancy test will turn positive once hCG levels are high enough — usually from the day of your missed period.",
      },
      {
        heading: "Weeks 5 – 8: Baby's Major Organs Begin to Form",
        body: "This is a critical period for development. The neural tube — which becomes the brain and spinal cord — closes. The heart begins beating around week 6. Arm and leg buds appear. By week 8 your baby (now technically called a foetus) is about the size of a kidney bean and already has a basic facial structure. You may be experiencing nausea, breast tenderness, fatigue, and frequent urination. These symptoms are driven by rising progesterone and hCG levels and are generally a sign of a healthy, progressing pregnancy.",
      },
      {
        heading: "Weeks 9 – 12: Organs Mature, Risk of Miscarriage Falls",
        body: "By the end of the first trimester all of your baby's major organs are present, and the remaining months of pregnancy are largely about growth and maturation. Fingers and toes are fully formed. The baby can make tiny movements. Your risk of miscarriage drops significantly after week 10. Around week 11 or 12 you will likely have your first ultrasound scan — a nuchal translucency scan that screens for chromosomal conditions and gives you your first real glimpse of your baby.",
      },
      {
        heading: "Managing First Trimester Symptoms",
        body: "Nausea affects up to 80% of pregnant women. Eating small, frequent meals, avoiding spicy or fatty foods, keeping plain crackers by the bed, and staying hydrated can all help. Ginger — in tea, biscuits, or supplements — has good evidence behind it. If vomiting is severe and you cannot keep fluids down, see your doctor; hyperemesis gravidarum (severe pregnancy sickness) is a medical condition that requires treatment. For fatigue, rest whenever you can — your body is working harder than you realise to build a placenta and grow a whole new human.",
      },
      {
        heading: "Important First Trimester Appointments",
        body: "Book your first booking appointment with a midwife ideally by week 8 to 10. You will discuss your medical history, be offered blood tests (blood type, full blood count, infection screening), and get information about your antenatal care pathway. Most women also have a dating scan at around 10 to 13 weeks. Write down your questions before each appointment — there is no such thing as a silly question when you are growing a person for the first time.",
      },
    ],
  },
  {
    id: "nutrition-guide-expecting-mothers",
    image: "🥗",
    title: "Nutrition Guide for Expecting Mothers",
    preview:
      "Learn which foods to embrace and which to avoid during pregnancy for a healthy you and a healthy baby.",
    category: "Nutrition",
    author: "Nadia Ouhassou, Registered Dietitian",
    date: "February 12, 2026",
    readTime: "9 min read",
    content: [
      {
        body: "What you eat during pregnancy directly influences your baby's development and your own health. The good news is that healthy pregnancy nutrition is not about perfection — it is about consistency, variety, and a few key priorities. Here is a practical, evidence-based guide to eating well from conception to birth.",
      },
      {
        heading: "Folate and Folic Acid: The Most Critical Nutrient",
        body: "Folate (the natural form) and folic acid (the synthetic supplement form) are essential for preventing neural tube defects such as spina bifida. The neural tube closes in the first 28 days — often before you even know you are pregnant — so it is recommended to take 400 mcg of folic acid daily when trying to conceive and for the first 12 weeks of pregnancy. Women with certain risk factors (previous neural tube defect, diabetes, BMI over 30, or taking certain medications) need a higher dose of 5 mg; discuss this with your doctor.",
      },
      {
        heading: "Key Nutrients and Where to Find Them",
        body: "Iron is needed for producing extra blood and preventing anaemia. Good sources include lean red meat, poultry, fish, lentils, chickpeas, tofu, pumpkin seeds, and dark leafy greens. Pair iron-rich plant foods with vitamin C (citrus, peppers, tomatoes) to improve absorption. Calcium supports your baby's bone, teeth, and muscle development. Dairy products, fortified plant milks, almonds, broccoli, and tinned fish with bones are all excellent sources. Omega-3 fatty acids — particularly DHA — support brain and eye development. Oily fish (salmon, sardines, mackerel) two to three times per week is ideal. If you do not eat fish, algae-based DHA supplements are a good vegan option. Vitamin D is needed for calcium absorption and immune function. Sunlight synthesis is unreliable, so a daily 10 mcg supplement is recommended for all pregnant women throughout pregnancy.",
      },
      {
        heading: "Foods to Avoid",
        body: "Certain foods carry a risk of harmful bacteria or contain substances that can harm a developing baby. Avoid raw or undercooked meat, poultry, and seafood. Avoid unpasteurised soft cheeses (brie, camembert, certain blue cheeses) and pâtés due to the risk of listeria. Skip raw or lightly cooked eggs unless they are produced under a food safety scheme. Limit oily fish to two portions per week and avoid shark, swordfish, and marlin entirely due to mercury content. Alcohol has no proven safe level in pregnancy and is best avoided completely. Limit caffeine to no more than 200 mg per day (roughly one mug of filter coffee).",
      },
      {
        heading: "Dealing With Food Aversions and Nausea",
        body: "Strong aversions to foods you previously loved — or the mere smell of cooking — are extremely common in the first trimester. Do not force yourself to eat things that make you feel sick. Focus on what you can tolerate. Bland, starchy foods like crackers, toast, plain rice, or noodles are often easier to manage when nausea is severe. Staying hydrated is the most important thing if you are vomiting frequently. Cold foods are sometimes more tolerable than hot ones because they have less smell.",
      },
      {
        heading: "Sample Daily Meal Idea",
        body: "Breakfast: Porridge made with fortified oat milk, topped with chopped almonds and a handful of berries. Lunch: Lentil soup with wholegrain bread and a side salad with chickpeas and lemon dressing. Snack: Greek yoghurt with a banana. Dinner: Baked salmon fillet with steamed broccoli, sweet potato, and a drizzle of olive oil. Remember: this is a template, not a prescription. Healthy eating in pregnancy looks different for every person depending on food availability, cultural traditions, and individual health needs.",
      },
    ],
  },
  {
    id: "baby-development-milestones",
    image: "🧒",
    title: "Understanding Baby Development Milestones",
    preview:
      "Track your baby's growth from a tiny seed to a full-size newborn. Learn what happens each month inside the womb.",
    category: "Baby Development",
    author: "Dr. Yasmine Hadjab",
    date: "February 5, 2026",
    readTime: "10 min read",
    content: [
      {
        body: "From a single fertilised cell to a fully formed baby in just nine months — foetal development is one of nature's most astonishing processes. Understanding what is happening inside you at each stage can deepen your connection with your baby and help you make sense of the physical changes and sensations you experience.",
      },
      {
        heading: "Months 1 – 2: The Blueprint is Drawn",
        body: "In the first eight weeks, the fertilised egg (zygote) divides rapidly into a ball of cells that implants in the uterine wall and begins differentiating into all the organs and structures the body needs. By the end of week 8 the embryo has a beating heart, a forming brain, limb buds, and the beginnings of facial features. It is about 2 cm long and is now officially called a foetus.",
      },
      {
        heading: "Month 3: Reflexes and Movements Begin",
        body: "By the end of the first trimester fingers and toes are distinct, with fingernails starting to form. The baby can open and close its fists and mouth. Its digestive system is developing, and it begins swallowing amniotic fluid. Though far too small for you to feel, the foetus is already making spontaneous movements. External genitalia begin to form, though it is usually not visible on ultrasound until weeks 16 to 20.",
      },
      {
        heading: "Month 4: You May Feel the First Kicks",
        body: "Around weeks 16 to 20 many women feel their baby move for the first time — described as a gentle fluttering, bubbling, or tapping. The baby now weighs about 150 g and is around 14 cm long. It can hear sounds from outside the womb — your heartbeat, your voice, and even loud environmental noises. The 20-week anatomy scan (anomaly scan) takes place around this time and checks that organs are developing normally.",
      },
      {
        heading: "Month 5 – 6: The Baby Becomes Viable",
        body: "By 24 weeks — the threshold of viability — a baby born prematurely has a chance of survival with intensive neonatal care. The lungs are developing rapidly, though they are not yet mature. The baby has developed eyebrows, eyelashes, and fine hair called lanugo covering its body. It is now around 30 cm and 600 g. You will likely feel regular, recognisable movements and may even see your abdomen move when the baby kicks.",
      },
      {
        heading: "Month 7 – 8: Rapid Brain Development",
        body: "The third trimester is characterised by rapid weight gain and brain development. Fat deposits build up under the skin. The brain triples in weight during this period. The baby's senses are all functioning — it can taste, hear, see light through the uterine wall, and respond to touch. By week 32 it is likely in a head-down position. Movements may feel more like rolls and stretches than kicks as space becomes limited.",
      },
      {
        heading: "Month 9: The Final Count-down",
        body: "In the final weeks the baby drops lower into the pelvis (engagement), the lungs mature fully, and lanugo sheds. At full term (40 weeks) the average baby is around 50 cm long and weighs 3.4 kg, though there is wide natural variation. The baby continues to accumulate antibodies from you via the placenta, providing passive immunity for the first months of life outside the womb.",
      },
    ],
  },
  {
    id: "managing-stress-anxiety-pregnancy",
    image: "🧘‍♀️",
    title: "Managing Stress and Anxiety During Pregnancy",
    preview:
      "Practical techniques for maintaining your mental health during pregnancy, including breathing exercises and mindfulness.",
    category: "Mental Wellness",
    author: "Leila Benchikh, Perinatal Psychologist",
    date: "January 28, 2026",
    readTime: "7 min read",
    content: [
      {
        body: "Pregnancy is often portrayed as a time of pure joy, but the reality for many women includes significant worry, stress, and anxiety. Whether you are concerned about the health of your baby, your changing body, your relationship, finances, or how you will manage labour, these feelings are completely normal. The key is finding healthy ways to manage them so that anxiety does not dominate your experience.",
      },
      {
        heading: "Why Pregnancy Can Feel Overwhelming",
        body: "Hormonal changes in pregnancy — particularly surges in progesterone and oestrogen — can amplify emotional responses and lower your threshold for stress. Add to that the physical discomfort of pregnancy, sleep disruption, and life changes on the horizon, and it makes complete sense that many women feel anxious at some point. Around 15 to 20% of pregnant women experience clinically significant anxiety or depression, making it one of the most common pregnancy complications — yet one of the most undertreated.",
      },
      {
        heading: "Practical Breathing Techniques",
        body: "The 4-7-8 breath is one of the most effective tools for calming the nervous system quickly. Inhale slowly through your nose for a count of 4, hold your breath for a count of 7, then exhale completely through your mouth for a count of 8. Repeat 4 times. This activates the parasympathetic nervous system, lowering heart rate and cortisol levels within minutes. Box breathing (inhale 4, hold 4, exhale 4, hold 4) is another excellent option, particularly in moments of acute anxiety.",
      },
      {
        heading: "Mindfulness and Grounding",
        body: "Mindfulness — paying attention to the present moment without judgement — has strong evidence behind it for reducing pregnancy anxiety. You do not need to meditate for an hour; even 5 to 10 minutes a day of mindful breathing or a body scan can make a real difference over time. Apps like Calm, Headspace, and Peanut (which has pregnancy-specific content) offer guided sessions. The 5-4-3-2-1 grounding technique is useful when anxiety spikes: name 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, and 1 you can taste. This brings you back to the present and interrupts the anxiety loop.",
      },
      {
        heading: "Movement and Nature",
        body: "Regular gentle exercise — even a 20-minute walk — significantly reduces anxiety and depression by releasing endorphins and calming stress hormones. Spending time in natural environments (parks, green spaces, even gardens) has been shown in multiple studies to lower cortisol and improve mood. Prenatal yoga combines movement, breathing, and mindfulness in one package, and many women find the social aspect of a prenatal yoga class as valuable as the practice itself.",
      },
      {
        heading: "When to Seek Professional Help",
        body: "If anxiety is affecting your sleep, your relationships, or your ability to function day to day, please reach out to your midwife, GP, or a perinatal mental health specialist. Cognitive Behavioural Therapy (CBT) has strong evidence for pregnancy-related anxiety and can be accessed via referral or privately. Some medications are safe to use during pregnancy when the benefits outweigh the risks — your doctor can advise. Reaching out is a sign of strength, not weakness, and the earlier support is in place, the better you will feel.",
      },
    ],
  },
  {
    id: "superfoods-pregnant-women",
    image: "🍎",
    title: "Superfoods Every Pregnant Woman Should Eat",
    preview:
      "Discover the nutrient-packed foods that support your baby's growth and keep your energy levels balanced.",
    category: "Nutrition",
    author: "Nadia Ouhassou, Registered Dietitian",
    date: "January 20, 2026",
    readTime: "6 min read",
    content: [
      {
        body: "While no single food can guarantee a perfect pregnancy, some foods are so densely packed with the nutrients you and your baby need that they deserve a regular place on your plate. Here are the top foods to prioritise — and why.",
      },
      {
        heading: "Lentils and Legumes",
        body: "Lentils, chickpeas, black beans, and kidney beans are nutritional powerhouses for pregnant women. A single cup of cooked lentils delivers around 18 g of protein, 6.6 mg of iron, 358 mcg of folate (nearly the full daily recommended intake), and significant amounts of fibre, potassium, and zinc. They are cheap, widely available, and incredibly versatile — add them to soups, stews, salads, or curries.",
      },
      {
        heading: "Leafy Green Vegetables",
        body: "Spinach, kale, Swiss chard, and broccoli are rich in folate, iron, calcium, vitamin C, vitamin K, and fibre. Vitamin C in these vegetables also enhances the absorption of plant-based iron when eaten together. A simple sauté with olive oil and garlic, or blended into a smoothie with fruit to mask the bitterness, are easy ways to increase your intake.",
      },
      {
        heading: "Eggs",
        body: "Eggs are one of the most complete foods available. They provide high-quality protein, choline (critical for brain development and neural tube formation — many women are deficient), vitamin D, vitamin B12, selenium, and lutein. Aim for fully cooked eggs to eliminate the risk of salmonella — scrambled, hard-boiled, or baked into dishes are all safe and delicious.",
      },
      {
        heading: "Oily Fish",
        body: "Salmon, sardines, trout, and mackerel provide DHA and EPA — the omega-3 fatty acids most critical for your baby's brain, eye, and nervous system development. They are also excellent sources of protein, vitamin D, and iodine. Aim for two to three servings per week. If you are vegetarian or vegan, algae-based DHA/EPA supplements provide the same essential fatty acids directly, without the mercury concern associated with fish.",
      },
      {
        heading: "Greek Yoghurt",
        body: "Full-fat Greek yoghurt is rich in calcium, protein, probiotics, iodine, and vitamin B12. The probiotics support gut health — emerging research suggests a healthy maternal gut microbiome may reduce the risk of gestational diabetes and support healthy weight gain. It also makes a satisfying, easy snack topped with berries and a sprinkle of nuts.",
      },
      {
        heading: "Sweet Potatoes",
        body: "Sweet potatoes are loaded with beta-carotene, which the body converts to vitamin A — essential for cell growth and immune function. They are also a good source of fibre, potassium, vitamin C, and B vitamins. Vitamin A from plant sources (beta-carotene) is safe at high intakes during pregnancy; preformed vitamin A from liver and supplements should be limited as excess can be harmful.",
      },
      {
        heading: "Nuts and Seeds",
        body: "Walnuts are the richest plant source of ALA omega-3 fatty acids. Chia seeds provide calcium, magnesium, and iron. Pumpkin seeds are high in zinc, which supports immune function and fetal development. A small handful of mixed nuts and seeds as a snack or sprinkled over porridge or salads is an easy way to boost your nutrient intake, particularly useful when appetite is limited.",
      },
    ],
  },
  {
    id: "third-trimester-checklist",
    image: "👶",
    title: "Preparing for Baby: Third Trimester Checklist",
    preview:
      "Everything you need to have ready before your little one arrives — from the nursery to your hospital bag.",
    category: "Baby Development",
    author: "Meriem Hadj-Moussa, Midwife",
    date: "January 14, 2026",
    readTime: "8 min read",
    content: [
      {
        body: "The third trimester is an exciting and sometimes overwhelming time. Your baby is growing rapidly, your body is working incredibly hard, and there is a lot to prepare before the big day. Breaking everything into manageable categories makes the process far less daunting. Here is a comprehensive checklist to guide you through.",
      },
      {
        heading: "Medical and Antenatal",
        body: "Confirm your birth plan with your midwife or obstetrician. Discuss and document your preferences for pain relief, birthing environment, and who you would like present. Attend all scheduled third-trimester appointments, including the glucose tolerance test (usually around week 24 to 28) and any additional growth scans. Complete your Group B Strep test if offered (weeks 35 to 37 in some care pathways). Research your hospital's policies on birth partners, photography, and skin-to-skin contact.",
      },
      {
        heading: "Your Hospital Bag",
        body: "Pack your hospital bag by week 36 in case of early labour. For you: your maternity notes and birth plan; a TENS machine if you plan to use one; comfortable, loose clothing; a dressing gown and non-slip slippers; toiletries; your phone charger; snacks and drinks for labour; maternity pads (at least two packs); and comfortable nursing bras if you plan to breastfeed. For your baby: bodysuits (2 – 3, in newborn and 0 – 3 month sizes), sleepsuits (2 – 3), a hat, mittens, socks, nappies, cotton wool, a blanket, and a correctly fitted infant car seat (required to leave the hospital).",
      },
      {
        heading: "The Nursery and Home",
        body: "Set up the sleeping space: a firm, flat mattress in a cot, Moses basket, or bedside crib, with a fitted sheet. No pillows, duvets, or bumpers — these pose a suffocation risk. Wash all baby clothing, bedding, and towels in fragrance-free detergent before use. Install the car seat and get it checked if your local service offers this. Stock up on nappies (a variety of sizes — newborns grow fast), cotton wool, nappy cream, and cleaning wipes. Prepare the changing area with everything you need within arm's reach.",
      },
      {
        heading: "Feeding Preparations",
        body: "If you plan to breastfeed, attend a breastfeeding class or watch reputable online tutorials before your baby arrives so you have some knowledge going in. Get the contact details for your local breastfeeding support line and lactation consultant. If you plan to formula feed or combination feed, buy and sterilise your bottles and equipment in advance. Whether you breastfeed or formula feed, what matters most is a fed, healthy baby — do not let anyone make you feel guilty for the choice that is right for you and your family.",
      },
      {
        heading: "Financial and Admin",
        body: "Register your pregnancy with the relevant government services to access maternity pay or benefits. If you are employed, inform your employer of your expected leave date. Review your health insurance coverage to ensure newborn care is included. Draft a will and consider updating your life insurance policy — nobody likes to think about this, but it is an act of care for your child. Set up a high-interest savings account for your baby if you wish to start building a small fund from birth.",
      },
      {
        heading: "Self-care in the Third Trimester",
        body: "Do not neglect yourself amid all the preparation. Rest whenever you can. Attend a pregnancy massage if it is within budget and approved by your doctor. Ask for help — with heavy lifting, household chores, older children. Let people in. The third trimester can bring significant physical discomfort (back pain, heartburn, oedema), and you deserve support as much as your baby does.",
      },
    ],
  },
  {
    id: "sleep-better-during-pregnancy",
    image: "💤",
    title: "Sleep Better During Pregnancy: Proven Tips",
    preview:
      "Struggling to sleep? These expert-backed strategies will help you get the rest you and your baby need.",
    category: "Pregnancy Health",
    author: "Dr. Amina Belhaj",
    date: "January 8, 2026",
    readTime: "7 min read",
    content: [
      {
        body: "Sleep becomes increasingly difficult as pregnancy progresses. Growing discomfort, frequent urination, heartburn, restless legs, and a busy mind all conspire against a good night's rest. Yet sleep is essential: it affects your immune function, mood, metabolism, and your baby's development. Here is what actually helps — based on evidence and the experience of thousands of pregnant women.",
      },
      {
        heading: "Why Sleep is So Hard During Pregnancy",
        body: "In the first trimester, surging progesterone causes extreme sleepiness during the day but can fragment night-time sleep. As the pregnancy progresses, the growing uterus puts pressure on the bladder (causing frequent night waking), the diaphragm (causing breathlessness), and large blood vessels (causing discomfort when lying flat on your back). Restless legs syndrome (an uncomfortable urge to move the legs, often worse at night) affects about 20% of pregnant women and is linked to iron or folate deficiency. Heartburn is another common night-time disruptor.",
      },
      {
        heading: "The SOS Position",
        body: "From around week 20, sleeping on your back for extended periods is not recommended because the weight of the uterus can compress the aorta and reduce blood flow to you and your baby. The recommended position is on your side — either side is fine, though some guidelines suggest left side is slightly preferable as it optimises blood flow to the placenta. Use a pregnancy pillow (a long, curved pillow that supports your bump, back, and knees simultaneously) — many women find it genuinely transforms their sleep comfort.",
      },
      {
        heading: "Managing Heartburn at Night",
        body: "Heartburn worsens when you lie flat because stomach acid flows back up the oesophagus more easily. Elevate the head of your bed by 15 – 20 cm using bed risers or extra pillows. Eat your last meal at least 2 to 3 hours before lying down. Avoid fatty, spicy, tomato-based, and citrus foods in the evening. Antacids that are safe in pregnancy (such as calcium carbonate-based products) can be taken before bed — check with your pharmacist which brands are safe.",
      },
      {
        heading: "Reducing Night-time Urination",
        body: "Drink plenty of fluids during the day but taper off in the two hours before bed to reduce night-time bathroom trips. When you do wake to use the toilet, keep lights dim to make it easier to drift back to sleep. Caffeine is a diuretic; cutting it off by early afternoon will help.",
      },
      {
        heading: "Winding Down and Sleep Hygiene",
        body: "Establish a consistent bedtime routine that signals to your body it is time to sleep. This might include a warm (not hot) bath or shower, light reading, gentle stretching, or a relaxation track. Keep your bedroom cool (around 18°C is ideal), dark, and quiet. Avoid screens with blue light (phones, tablets, laptops) for at least an hour before bed. Blue light suppresses melatonin production and makes it harder to fall asleep.",
      },
      {
        heading: "Daytime Naps",
        body: "A short nap of 20 to 30 minutes in the early afternoon can significantly offset the effects of poor night-time sleep without making it harder to fall asleep at night. Avoid napping after 3 pm if possible. If you are struggling significantly with sleep, discuss it with your midwife or doctor — cognitive behavioural treatment for insomnia (CBTi) is effective and safe in pregnancy, and is now available through apps and online programmes.",
      },
    ],
  },
  {
    id: "postpartum-mental-health",
    image: "🧠",
    title: "Postpartum Mental Health: Breaking the Silence",
    preview:
      "Understanding the signs of postpartum depression and anxiety, and where to find support when you need it.",
    category: "Mental Wellness",
    author: "Leila Benchikh, Perinatal Psychologist",
    date: "December 30, 2025",
    readTime: "9 min read",
    content: [
      {
        body: "Bringing a baby home is one of the most significant life transitions a person can experience. For many new mothers (and fathers and partners), it comes with a range of emotions that can be difficult to articulate: love, exhaustion, grief, confusion, and sometimes a deep sense that something is wrong. Postpartum mental health conditions affect up to 1 in 5 new mothers, and this number is likely an underestimate because so many people suffer in silence. This article is a space to speak openly about that silence — and what to do about it.",
      },
      {
        heading: "The Baby Blues vs. Postpartum Depression",
        body: "It is important to distinguish between the baby blues — a temporary emotional state that affects up to 80% of new mothers in the first days after birth — and postpartum depression (PPD), which is a more serious and persistent condition. The baby blues typically involve tearfulness, mood swings, anxiety, and irritability that peak around day 3 to 5 postpartum and resolve within two weeks as hormones stabilise. If these feelings persist beyond two weeks, intensify, or include persistent sadness, inability to bond with your baby, hopelessness, or thoughts of self-harm, these are signs of PPD that require professional support.",
      },
      {
        heading: "Symptoms of Postpartum Depression",
        body: "PPD can look different from person to person. Common symptoms include a persistent low mood that does not lift, inability to feel pleasure or connect with your baby, extreme fatigue beyond what is expected with a newborn, changes in appetite, difficulty concentrating or making decisions, feelings of worthlessness, guilt, or inadequacy as a parent, anxiety or panic attacks, crying far more than usual, withdrawing from family and friends, and in severe cases, thoughts of harming yourself or your baby. If you are having thoughts of self-harm or harming your baby, please seek emergency help immediately.",
      },
      {
        heading: "Postpartum Anxiety",
        body: "Postpartum anxiety (PPA) is less talked about than PPD but may be even more common. It involves persistent, excessive worry — often focused on the baby's health and safety — racing thoughts, inability to relax, physical symptoms such as a racing heart, and difficulty sleeping even when the baby is asleep. Some people experience postpartum OCD (intrusive thoughts about harm coming to the baby, which are ego-dystonic — meaning they horrify and distress the person having them). These thoughts are not a sign of dangerousness; they are a symptom of anxiety and respond well to treatment.",
      },
      {
        heading: "Risk Factors",
        body: "Any new mother can develop postpartum mental health difficulties, but certain factors increase the risk. These include a personal or family history of depression, anxiety, or bipolar disorder; antenatal depression or anxiety; a difficult or traumatic birth; limited social support; relationship difficulties; financial stress; a baby with health problems or a difficult temperament; sleep deprivation; and a previous loss (miscarriage, stillbirth, or neonatal death). Knowing your risk factors does not mean you will develop PPD — but it means you can put support structures in place before the birth.",
      },
      {
        heading: "Treatment and Support",
        body: "Postpartum depression is a medical condition, not a personal failing, and it is treatable. Talking therapies — particularly CBT and interpersonal therapy (IPT) — have strong evidence and can be accessed via GP referral or privately. Many areas now have specialist perinatal mental health teams. For moderate to severe PPD, antidepressants (including some that are compatible with breastfeeding) may be recommended alongside therapy. Peer support — speaking with other mothers who have experienced PPD — can be profoundly helpful and reduce the shame and isolation that make the condition worse.",
      },
      {
        heading: "What Partners and Families Can Do",
        body: "If someone you love is struggling with postpartum mental health, the most important thing you can do is believe them, take it seriously, and help them access care. Do not tell them to 'cheer up' or suggest they are 'just tired'. Offer concrete help — cooking, night feeds, holding the baby so they can shower or sleep. Ask directly how they are feeling. Accompany them to a GP appointment if they are reluctant to go alone. Your support can make an enormous difference to their recovery.",
      },
    ],
  },
  {
    id: "safe-exercises-every-trimester",
    image: "🏋️‍♀️",
    title: "Safe Exercises for Every Trimester",
    preview:
      "Stay active and healthy with these pregnancy-safe workouts designed for each stage of your journey.",
    category: "Pregnancy Health",
    author: "Samira Tazairt, Prenatal Fitness Coach",
    date: "December 22, 2025",
    readTime: "8 min read",
    content: [
      {
        body: "Staying physically active during pregnancy is one of the most beneficial things you can do for yourself and your baby. Regular moderate exercise reduces the risk of gestational diabetes, pre-eclampsia, excessive weight gain, caesarean birth, postpartum depression, and back pain. It also helps you sleep better, manage stress, and recover faster after birth. Here is how to exercise safely and effectively at each stage of pregnancy.",
      },
      {
        heading: "General Safety Guidelines",
        body: "Before starting or continuing an exercise programme in pregnancy, discuss it with your midwife or doctor — particularly if you have a high-risk pregnancy, placenta praevia, cervical incompetence, or have been advised to restrict activity. As a general rule, aim for a moderate intensity: you should be able to hold a conversation, but not able to sing. Stop immediately and seek medical advice if you experience vaginal bleeding, contractions, chest pain, shortness of breath at rest, severe headache, calf pain or swelling, or reduced foetal movements. Stay well hydrated, avoid overheating, and wear a supportive maternity sports bra.",
      },
      {
        heading: "First Trimester: Maintain Your Baseline",
        body: "If you were active before pregnancy you can generally continue your existing routine, modifying as needed. If you were sedentary, now is a good time to begin with low-impact activity. Fatigue and nausea may limit what you feel like doing — on difficult days, a gentle 15-minute walk counts. Good options include walking, swimming, cycling on a stationary bike, yoga (look for pregnancy-adapted versions of poses), and Pilates. Avoid lying flat on your back for long periods and avoid contact sports. Core exercises that involve breath holding or bearing down should be modified.",
      },
      {
        heading: "Second Trimester: The Golden Window",
        body: "Many women feel significantly better in the second trimester — nausea often subsides and energy returns. This is often the easiest trimester to be active. Continue with low to moderate impact cardio. Swimming and aqua aerobics are excellent as the water supports your growing weight. Pregnancy-specific Pilates focuses on pelvic floor strengthening and deep core stability — both of which will serve you well in labour and recovery. Avoid contact sports and activities with a risk of falling (horse riding, skiing, gymnastics, martial arts). From around week 20, avoid lying flat on your back for extended periods.",
      },
      {
        heading: "Third Trimester: Adapt and Honour Your Body",
        body: "As your bump grows and your centre of gravity shifts, balance becomes more challenging and certain exercises will need to be modified or stopped. Walking and swimming remain excellent right up to delivery. Stationary cycling is safer than outdoor cycling. Pregnancy yoga and Pilates can be tailored for the third trimester and increasingly focus on breathing and relaxation techniques for labour. Many women benefit from perineal massage practice (from week 34) and spinning babies exercises to encourage optimal foetal positioning. Listen to your body — some days a gentle walk is all that is right, and that is enough.",
      },
      {
        heading: "Pelvic Floor Exercises: Non-Negotiable",
        body: "Kegel exercises — contracting and releasing the pelvic floor muscles — should be part of every pregnant woman's routine from as early as possible. A strong pelvic floor reduces the risk of urinary incontinence (extremely common in and after pregnancy), supports your growing uterus, and can facilitate a smoother labour and recovery. Contract the pelvic floor muscles (imagine you are trying to stop the flow of urine) for 10 seconds, then fully release for 10 seconds. Repeat 10 times, three times daily. The release is as important as the contraction — a tense, over-tight pelvic floor can make labour more difficult.",
      },
      {
        heading: "After the Baby: Returning to Exercise",
        body: "After a vaginal birth, gentle walking can resume as soon as you feel ready — often within days. Pelvic floor exercises should restart as soon as possible. Avoid high impact exercise, heavy lifting, and abdominal crunches until you have had a postnatal check (usually 6 weeks after birth, or 8 weeks after a caesarean). A women's health physiotherapist can assess your pelvic floor and abdominal separation (diastasis recti) and give you a personalised return-to-exercise plan — this is a hugely worthwhile investment.",
      },
    ],
  },
];
