"use client";

import { useState } from "react";
import { PREGNANCY_WEEK } from "./data";

interface WeekData {
  babySize: string;
  babySizeEmoji: string;
  length: string;
  weight: string;
  babyDevelopment: string[];
  momChanges: string;
  milestone?: string;
}

const WEEK_DATA: Record<number, WeekData> = {
  4:  { babySize: "Poppy Seed", babySizeEmoji: "🌱", length: "0.1 cm", weight: "< 1 g",   babyDevelopment: ["Implantation complete", "Neural tube beginning to form", "Placenta starting to develop"], momChanges: "You may notice a missed period and early pregnancy symptoms begin.", milestone: "Pregnancy confirmed" },
  5:  { babySize: "Sesame Seed", babySizeEmoji: "🌾", length: "0.4 cm", weight: "< 1 g",   babyDevelopment: ["Heart begins to beat", "Brain and spinal cord forming", "Arm and leg buds appearing"], momChanges: "Morning sickness may begin. Fatigue and breast tenderness are common.", milestone: "Heart starts beating" },
  6:  { babySize: "Lentil",       babySizeEmoji: "🫘", length: "0.6 cm", weight: "< 1 g",   babyDevelopment: ["Facial features starting to form", "Nose, mouth and ears developing", "Fingers and toes beginning to emerge"], momChanges: "Nausea may peak. Frequent urination increases due to hormonal changes." },
  7:  { babySize: "Blueberry",    babySizeEmoji: "🫐", length: "1.0 cm", weight: "< 1 g",   babyDevelopment: ["Brain growing rapidly", "Eyelid folds forming", "Heart fully divided into 4 chambers", "Digestive tract forming"], momChanges: "Uterus has doubled in size. You may feel bloated and emotional.", milestone: "4-chamber heart formed" },
  8:  { babySize: "Raspberry",    babySizeEmoji: "🍇", length: "1.6 cm", weight: "1 g",     babyDevelopment: ["All major organs present", "Fingers and toes visible", "Baby starts to move (though not felt yet)"], momChanges: "Prenatal vitamins are essential now. Your waistline may begin to thicken." },
  9:  { babySize: "Grape",        babySizeEmoji: "🍇", length: "2.3 cm", weight: "2 g",     babyDevelopment: ["Cartilage and bone forming", "Baby can flex joints", "External genitalia beginning to form"], momChanges: "Fatigue may ease slightly. Mood swings remain common due to hormones." },
  10: { babySize: "Kumquat",      babySizeEmoji: "🍊", length: "3.1 cm", weight: "4 g",     babyDevelopment: ["All vital organs formed and functioning", "Fingernails developing", "Baby swallowing amniotic fluid"], momChanges: "First trimester screening may be scheduled around this time.", milestone: "All vital organs present" },
  11: { babySize: "Fig",          babySizeEmoji: "🌿", length: "4.1 cm", weight: "7 g",     babyDevelopment: ["Baby kicks and stretches", "Tooth buds forming", "Hair follicles developing"], momChanges: "Nausea often begins to subside. Energy levels may start to return." },
  12: { babySize: "Lime",         babySizeEmoji: "🍋", length: "5.4 cm", weight: "14 g",    babyDevelopment: ["Reflexes developing", "Baby opens and closes fists", "Profile clearly visible on ultrasound"], momChanges: "End of first trimester. Risk of miscarriage drops significantly.", milestone: "End of 1st trimester" },
  13: { babySize: "Plum",         babySizeEmoji: "🍑", length: "7.4 cm", weight: "23 g",    babyDevelopment: ["Vocal cords forming", "Intestines move from umbilical cord into abdomen", "Fingerprints forming"], momChanges: "Second trimester begins. Many women experience renewed energy." },
  14: { babySize: "Lemon",        babySizeEmoji: "🍋", length: "8.7 cm", weight: "43 g",    babyDevelopment: ["Baby's thyroid gland producing hormones", "Baby squints, frowns and grimaces", "Kidneys producing urine"], momChanges: "You may start showing a small bump. Energy levels improve." },
  16: { babySize: "Avocado",      babySizeEmoji: "🥑", length: "11.6 cm", weight: "100 g",  babyDevelopment: ["Eyes and ears fully formed", "Baby holds head erect", "Baby may hear sounds"], momChanges: "You might start to feel baby move (quickening). Belly growing noticeably." },
  18: { babySize: "Bell Pepper",  babySizeEmoji: "🫑", length: "14.2 cm", weight: "190 g",  babyDevelopment: ["Baby yawns and hiccups", "Myelin forming around nerves", "Baby can swallow more efficiently"], momChanges: "Mid-trimester anomaly scan typically scheduled around weeks 18–20.", milestone: "Anatomy scan" },
  20: { babySize: "Banana",       babySizeEmoji: "🍌", length: "25.0 cm", weight: "300 g",  babyDevelopment: ["Halfway through pregnancy!", "Baby moves more actively", "Taste buds developing", "Fine hair (lanugo) covering body"], momChanges: "Belly is now clearly visible. Back pain may begin. Feel those kicks!", milestone: "Halfway point" },
  24: { babySize: "Corn",         babySizeEmoji: "🌽", length: "30.0 cm", weight: "600 g",  babyDevelopment: ["Eyes beginning to open", "Brain growing rapidly", "Baby's face fully formed"], momChanges: "Braxton Hicks contractions may occur. Stretch marks may appear.", milestone: "Baby's eyes can open" },
  28: { babySize: "Eggplant",     babySizeEmoji: "🍆", length: "37.6 cm", weight: "1.0 kg", babyDevelopment: ["Third trimester begins", "Baby can blink and dream", "Lungs preparing for breathing"], momChanges: "Glucose screening test typically done. Sleep may become difficult.", milestone: "Start of 3rd trimester" },
  32: { babySize: "Squash",       babySizeEmoji: "🎃", length: "42.4 cm", weight: "1.7 kg", babyDevelopment: ["Baby's bones hardening (except skull)", "Practicing breathing movements", "Gaining weight rapidly"], momChanges: "Frequent urination returns. Heartburn common as uterus presses on stomach." },
  36: { babySize: "Honeydew",     babySizeEmoji: "🍈", length: "47.4 cm", weight: "2.6 kg", babyDevelopment: ["Baby is nearly full term", "Most organ systems mature", "Baby settles head-down position"], momChanges: "Baby may drop (engage). Breathing may ease but pressure on bladder increases.", milestone: "Baby settles head-down" },
  40: { babySize: "Watermelon",   babySizeEmoji: "🍉", length: "51.2 cm", weight: "3.5 kg", babyDevelopment: ["Fully developed and ready for birth", "Lungs fully mature", "Immune system strengthened from antibodies"], momChanges: "Due date! Baby can arrive any day. Signs of labor to watch for.", milestone: "Due date" },
};

function getWeekData(week: number): WeekData {
  // Find the closest week in our data
  const weeks = Object.keys(WEEK_DATA).map(Number).sort((a, b) => a - b);
  let closest = weeks[0];
  for (const w of weeks) {
    if (w <= week) closest = w;
  }
  return WEEK_DATA[closest] || WEEK_DATA[7];
}

const MILESTONES = [
  { week: 5,  label: "First heartbeat",        done: PREGNANCY_WEEK >= 5 },
  { week: 8,  label: "All major organs present", done: PREGNANCY_WEEK >= 8 },
  { week: 12, label: "1st trimester complete",  done: PREGNANCY_WEEK >= 12 },
  { week: 16, label: "Feel first movements",    done: PREGNANCY_WEEK >= 16 },
  { week: 20, label: "Anatomy scan",             done: PREGNANCY_WEEK >= 20 },
  { week: 28, label: "3rd trimester begins",    done: PREGNANCY_WEEK >= 28 },
  { week: 36, label: "Full term preparation",   done: PREGNANCY_WEEK >= 36 },
  { week: 40, label: "Due date",                 done: PREGNANCY_WEEK >= 40 },
];

const TRIMESTER_WEEKS = [
  { label: "1st Trimester", range: "Weeks 1–12",  weeks: Array.from({ length: 12 }, (_, i) => i + 1) },
  { label: "2nd Trimester", range: "Weeks 13–26", weeks: Array.from({ length: 14 }, (_, i) => i + 13) },
  { label: "3rd Trimester", range: "Weeks 27–40", weeks: Array.from({ length: 14 }, (_, i) => i + 27) },
];

function getCurrentTrimester(week: number) {
  if (week <= 12) return 0;
  if (week <= 26) return 1;
  return 2;
}

function BabyIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M8 16s1.5-2 4-2 4 2 4 2" />
      <path d="M12 12v4" />
    </svg>
  );
}

function CheckCircleIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill={filled ? "#F46A6A" : "none"} stroke={filled ? "#F46A6A" : "#D1D5DB"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      {filled && <polyline points="9 12 11 14 15 10" stroke="white" strokeWidth="2" />}
    </svg>
  );
}

export default function TrackerSection() {
  const [selectedWeek, setSelectedWeek] = useState(PREGNANCY_WEEK);
  const [activeTrimester, setActiveTrimester] = useState(getCurrentTrimester(PREGNANCY_WEEK));

  const weekData = getWeekData(selectedWeek);
  const currentTrimester = getCurrentTrimester(selectedWeek);

  const trimesterColors = ["from-rose-400 to-pink-500", "from-violet-400 to-purple-500", "from-blue-400 to-cyan-500"];
  const trimesterBgColors = ["bg-rose-50", "bg-violet-50", "bg-blue-50"];
  const trimesterTextColors = ["text-rose-600", "text-violet-600", "text-blue-600"];

  return (
    <div className="p-6 sm:p-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Pregnancy Tracker</h1>
        <p className="text-sm text-gray-500 mt-1">Follow your baby's development week by week.</p>
      </div>

      <div className="flex flex-col xl:flex-row gap-6">
        {/* Left: Week selector + detail */}
        <div className="flex-1 space-y-6">
          {/* Trimester tabs */}
          <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
            <div className="flex gap-2 flex-wrap">
              {TRIMESTER_WEEKS.map((t, i) => (
                <button
                  key={t.label}
                  onClick={() => {
                    setActiveTrimester(i);
                    const mid = t.weeks[Math.floor(t.weeks.length / 2)];
                    setSelectedWeek(mid);
                  }}
                  className={`flex-1 min-w-[120px] py-2.5 px-3 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    activeTrimester === i
                      ? `bg-gradient-to-r ${trimesterColors[i]} text-white shadow-sm`
                      : "bg-gray-50 text-gray-500 hover:bg-gray-100"
                  }`}
                >
                  <span className="block">{t.label}</span>
                  <span className={`block text-[10px] font-normal mt-0.5 ${activeTrimester === i ? "text-white/80" : "text-gray-400"}`}>{t.range}</span>
                </button>
              ))}
            </div>

            {/* Week pills */}
            <div className="mt-3 flex flex-wrap gap-1.5">
              {TRIMESTER_WEEKS[activeTrimester].weeks.map((w) => (
                <button
                  key={w}
                  onClick={() => setSelectedWeek(w)}
                  className={`w-9 h-9 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    selectedWeek === w
                      ? `bg-gradient-to-br ${trimesterColors[activeTrimester]} text-white shadow-sm`
                      : w === PREGNANCY_WEEK
                      ? "bg-rose-100 text-[#F46A6A] ring-2 ring-[#F46A6A]/30"
                      : "bg-gray-50 text-gray-500 hover:bg-gray-100"
                  }`}
                >
                  {w}
                </button>
              ))}
            </div>
            <p className="text-[11px] text-gray-400 mt-2">
              <span className="inline-block w-3 h-3 rounded-full bg-rose-100 ring-2 ring-[#F46A6A]/30 mr-1 align-middle" />
              Highlighted = your current week ({PREGNANCY_WEEK})
            </p>
          </div>

          {/* Week detail card */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            {/* Gradient header */}
            <div className={`bg-gradient-to-r ${trimesterColors[currentTrimester]} p-6 text-white`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-white/80">Week</p>
                  <p className="text-5xl font-extrabold leading-none">{selectedWeek}</p>
                  {selectedWeek === PREGNANCY_WEEK && (
                    <span className="mt-2 inline-block text-[10px] font-semibold bg-white/20 px-2.5 py-0.5 rounded-full">
                      Your current week
                    </span>
                  )}
                </div>
                <div className="text-center">
                  <div className="text-6xl leading-none mb-1">{weekData.babySizeEmoji}</div>
                  <p className="text-xs font-medium text-white/80">Size of a</p>
                  <p className="text-sm font-bold">{weekData.babySize}</p>
                </div>
              </div>
              <div className="flex gap-6 mt-4">
                <div>
                  <p className="text-[11px] text-white/70 uppercase tracking-wider">Length</p>
                  <p className="font-bold">{weekData.length}</p>
                </div>
                <div>
                  <p className="text-[11px] text-white/70 uppercase tracking-wider">Weight</p>
                  <p className="font-bold">{weekData.weight}</p>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-5">
              {/* Milestone badge */}
              {weekData.milestone && (
                <div className={`inline-flex items-center gap-2 ${trimesterBgColors[currentTrimester]} ${trimesterTextColors[currentTrimester]} text-xs font-semibold px-3 py-1.5 rounded-full`}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  Milestone: {weekData.milestone}
                </div>
              )}

              {/* Baby development */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${trimesterColors[currentTrimester]} text-white flex items-center justify-center`}>
                    <BabyIcon />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm">Baby&apos;s Development</h3>
                </div>
                <ul className="space-y-2">
                  {weekData.babyDevelopment.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F46A6A] mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mom's body */}
              <div className={`${trimesterBgColors[currentTrimester]} rounded-xl p-4`}>
                <h3 className={`font-semibold text-sm mb-1.5 ${trimesterTextColors[currentTrimester]}`}>What&apos;s Happening in Your Body</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{weekData.momChanges}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Milestones + overall progress */}
        <div className="xl:w-80 shrink-0 space-y-5">
          {/* Overall progress */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
            <h3 className="font-semibold text-gray-900 text-sm mb-4">Overall Progress</h3>
            <div className="flex items-center justify-center mb-4">
              <div className="relative w-32 h-32">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="50" fill="none" stroke="#fce4ec" strokeWidth="10" />
                  <circle
                    cx="60" cy="60" r="50" fill="none"
                    stroke="url(#trackerGrad)" strokeWidth="10" strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 50}`}
                    strokeDashoffset={`${2 * Math.PI * 50 * (1 - PREGNANCY_WEEK / 40)}`}
                  />
                  <defs>
                    <linearGradient id="trackerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#F46A6A" />
                      <stop offset="100%" stopColor="#FBC4AB" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-extrabold text-gray-900">{PREGNANCY_WEEK}</span>
                  <span className="text-[10px] text-gray-500">of 40 wks</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-rose-50 rounded-lg p-2">
                <p className="text-sm font-bold text-[#F46A6A]">{Math.round((PREGNANCY_WEEK / 40) * 100)}%</p>
                <p className="text-[10px] text-gray-500">Done</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-2">
                <p className="text-sm font-bold text-gray-900">{40 - PREGNANCY_WEEK}</p>
                <p className="text-[10px] text-gray-500">Wks left</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-2">
                <p className="text-sm font-bold text-gray-900">{(40 - PREGNANCY_WEEK) * 7}</p>
                <p className="text-[10px] text-gray-500">Days left</p>
              </div>
            </div>
          </div>

          {/* Milestones checklist */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
            <h3 className="font-semibold text-gray-900 text-sm mb-4">Pregnancy Milestones</h3>
            <div className="space-y-3">
              {MILESTONES.map((m) => (
                <div key={m.week} className="flex items-center gap-3">
                  <CheckCircleIcon filled={m.done} />
                  <div className="flex-1 min-w-0">
                    <p className={`text-xs font-medium ${m.done ? "text-gray-900" : "text-gray-400"}`}>{m.label}</p>
                    <p className={`text-[10px] ${m.done ? "text-gray-400" : "text-gray-300"}`}>Week {m.week}</p>
                  </div>
                  {m.week === PREGNANCY_WEEK && (
                    <span className="text-[9px] font-bold text-[#F46A6A] bg-rose-50 px-1.5 py-0.5 rounded-full">Now</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Tip card */}
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-5">
            <h3 className="font-semibold text-gray-900 text-sm mb-2">Did You Know?</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              At week {PREGNANCY_WEEK}, your baby&apos;s heart is beating about 160 times per minute — almost twice as fast as yours! Every week brings incredible new developments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
