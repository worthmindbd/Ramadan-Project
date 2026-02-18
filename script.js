// ============================================================
// Ramadan 1447 AH Calendar — Bangladesh (UTC+6)
// Source: Islamic Foundation Bangladesh (ইসলামিক ফাউন্ডেশন বাংলাদেশ)
// Ramadan 1 Ramadan 1447 = February 19, 2026
// ============================================================

const LANG = {
    en: {
        title: "Ramadan 1447",
        subtitle: "Bangladesh Ramadan Calendar 2026",
        heroDesc: "Embrace the blessed month of fasting, prayer, and reflection",
        todayCard: "Today's Times",
        sehri: "Sehri",
        iftar: "Iftar",
        sehriEnd: "Sehri Ends",
        iftarTime: "Iftar Time",
        countdownTitle: "Next",
        days: "Days",
        hours: "Hours",
        mins: "Mins",
        secs: "Secs",
        calendarTitle: "Ramadan Calendar 2026",
        calendarSubtitle: "Dhaka, Bangladesh — All times in BST (UTC+6)",
        day: "Day",
        date: "Date",
        sehriCol: "Sehri Ends",
        iftarCol: "Iftar",
        fajrCol: "Fajr",
        dhuhrCol: "Dhuhr",
        asrCol: "Asr",
        maghribCol: "Maghrib",
        ishaCol: "Isha",
        prayerTitle: "Daily Prayer Times",
        prayerSubtitle: "Dhaka, Bangladesh — 5 Daily Prayers during Ramadan 2026",
        duaTitle: "Daily Duas",
        // ── Sehri Niyyah (Roza Niyyat) ──
        // Source: Islamic Foundation Bangladesh / Dainik Bangla / Prothom Alo
        duaSehriTitle: "Sehri Niyyah (Roza Niyyat)",
        duaSehriArabic: "نَوَيْتُ اَنْ اُصُوْمَ غَدًا مِّنْ شَهْرِ رَمْضَانَ الْمُبَارَكِ فَرْضًا لَكَ يَا اللهُ فَتَقَبَّلْ مِنِّيْ اِنَّكَ اَنْتَ السَّمِيْعُ الْعَلِيْم",
        duaSehriTranslit: "Nawaitu an asuma ghadan min shahri Ramadanal mubaraki fardal-laka ya Allahu fataqabbal minni innaka antas Sami'ul 'Alim",
        duaSehriMeaning: "O Allah! I intend to keep the fast of tomorrow in the blessed month of Ramadan as a compulsory obligation for You. So accept it from me. Verily, You are the All-Hearing, the All-Knowing.",
        // ── Iftar Dua ──
        // Source: Abu Dawud 2357 — Authenticated by Islamic Foundation Bangladesh
        duaIftarTitle: "Iftar Dua",
        duaIftarArabic: "اَللَّهُمَّ لَكَ صُمْتُ وَعَلَى رِزْقِكَ اَفْطَرْتُ",
        duaIftarTranslit: "Allahumma laka sumtu wa 'ala rizqika aftartu",
        duaIftarMeaning: "O Allah! I fasted for You and I break my fast with Your sustenance.",
        // ── After Iftar Dua ──
        duaAfterIftarTitle: "After Iftar Dua",
        duaAfterIftarArabic: "ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوقُ وَثَبَتَ الأَجْرُ إِنْ شَاءَ اللَّهُ",
        duaAfterIftarTranslit: "Dhahaba-z-zama'u wabtallatil 'uruqu wa thabatal ajru insha'Allah",
        duaAfterIftarMeaning: "The thirst has gone, the veins are moistened, and the reward is confirmed, if Allah wills. (Abu Dawud 2357)",
        footerText: "Made with ❤️ for the Muslims of Bangladesh",
        ramadanMubarak: "Ramadan Mubarak",
        toggleLang: "বাংলা",
        today: "Today",
        location: "Dhaka, Bangladesh",
        islamicDate: "Ramadan 1447 AH",
        source: "Source: Islamic Foundation Bangladesh",
    },
    bn: {
        title: "রমজান ১৪৪৭",
        subtitle: "বাংলাদেশ রমজান ক্যালেন্ডার ২০২৬",
        heroDesc: "রোজা, নামাজ ও আত্মশুদ্ধির পবিত্র মাসকে স্বাগত জানাই",
        todayCard: "আজকের সময়",
        sehri: "সেহরি",
        iftar: "ইফতার",
        sehriEnd: "সেহরির শেষ সময়",
        iftarTime: "ইফতারের সময়",
        countdownTitle: "পরবর্তী",
        days: "দিন",
        hours: "ঘণ্টা",
        mins: "মিনিট",
        secs: "সেকেন্ড",
        calendarTitle: "রমজান ক্যালেন্ডার ২০২৬",
        calendarSubtitle: "ঢাকা, বাংলাদেশ — সকল সময় BST (UTC+6)",
        day: "দিন",
        date: "তারিখ",
        sehriCol: "সেহরির শেষ সময়",
        iftarCol: "ইফতার",
        fajrCol: "ফজর",
        dhuhrCol: "জোহর",
        asrCol: "আসর",
        maghribCol: "মাগরিব",
        ishaCol: "এশা",
        prayerTitle: "দৈনিক নামাজের সময়",
        prayerSubtitle: "ঢাকা, বাংলাদেশ — রমজান ২০২৬ এর ৫ ওয়াক্ত নামাজ",
        duaTitle: "দৈনিক দোয়া",
        // ── সেহরির নিয়ত ──
        duaSehriTitle: "সেহরির নিয়ত (রোজার নিয়ত)",
        duaSehriArabic: "نَوَيْتُ اَنْ اُصُوْمَ غَدًا مِّنْ شَهْرِ رَمْضَانَ الْمُبَارَكِ فَرْضًا لَكَ يَا اللهُ فَتَقَبَّلْ مِنِّيْ اِنَّكَ اَنْتَ السَّمِيْعُ الْعَلِيْم",
        duaSehriTranslit: "নাওয়াইতু আন আছুমা গাদাম মিন শাহরি রামাদানাল মুবারাকি ফারদাল্লাকা ইয়া আল্লাহু ফাতাকাব্বাল মিন্নি ইন্নিকা আনতাস সামিউল আলিম",
        duaSehriMeaning: "হে আল্লাহ! আমি আগামীকাল পবিত্র রমজান মাসের তোমার পক্ষ থেকে নির্ধারিত ফরজ রোজা রাখার নিয়ত করলাম। অতএব তুমি আমার পক্ষ থেকে কবুল কর। নিশ্চয়ই তুমি সর্বশ্রোতা ও সর্বজ্ঞানী।",
        // ── ইফতারের দোয়া ──
        duaIftarTitle: "ইফতারের দোয়া",
        duaIftarArabic: "اَللَّهُمَّ لَكَ صُمْتُ وَعَلَى رِزْقِكَ اَفْطَرْتُ",
        duaIftarTranslit: "আল্লাহুম্মা লাকা ছুমতু ওয়া আলা রিযক্বিকা আফতারতু",
        duaIftarMeaning: "হে আল্লাহ! আমি তোমার জন্য রোজা রেখেছি এবং তোমার দেওয়া রিজিক দিয়ে ইফতার করছি।",
        // ── ইফতারের পরের দোয়া ──
        duaAfterIftarTitle: "ইফতারের পরের দোয়া",
        duaAfterIftarArabic: "ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوقُ وَثَبَتَ الأَجْرُ إِنْ شَاءَ اللَّهُ",
        duaAfterIftarTranslit: "জাহাবাজ জামাউ ওয়াবতাল্লাতিল উরুকু ওয়া সাবাতাল আজরু ইনশাআল্লাহ",
        duaAfterIftarMeaning: "পিপাসা দূর হলো, শিরা-উপশিরা সিক্ত হলো এবং ইনশাআল্লাহ সওয়াব নির্ধারিত হলো। (আবু দাউদ: ২৩৫৭)",
        footerText: "বাংলাদেশের মুসলমানদের জন্য ❤️ দিয়ে তৈরি",
        ramadanMubarak: "রমজান মোবারক",
        toggleLang: "English",
        today: "আজ",
        location: "ঢাকা, বাংলাদেশ",
        islamicDate: "রমজান ১৪৪৭ হিজরি",
        source: "সূত্র: ইসলামিক ফাউন্ডেশন বাংলাদেশ",
    }
};

// ============================================================
// Ramadan 2026 — Official Islamic Foundation Bangladesh Data
// Dhaka, Bangladesh (UTC+6)
// Fajr = Sehri end time | Maghrib = Iftar time
// Dhuhr, Asr, Isha from Islamic Foundation / Prothom Alo / Dhaka Post
// ============================================================
const RAMADAN_DATA = [
    // day, sehri/fajr, dhuhr, asr, iftar/maghrib, isha, date
    { day: 1, sehri: "05:12", dhuhr: "12:13", asr: "04:20", iftar: "17:58", isha: "19:12", date: "Feb 19" },
    { day: 2, sehri: "05:11", dhuhr: "12:13", asr: "04:20", iftar: "17:58", isha: "19:13", date: "Feb 20" },
    { day: 3, sehri: "05:11", dhuhr: "12:13", asr: "04:20", iftar: "17:59", isha: "19:13", date: "Feb 21" },
    { day: 4, sehri: "05:10", dhuhr: "12:13", asr: "04:21", iftar: "17:59", isha: "19:14", date: "Feb 22" },
    { day: 5, sehri: "05:09", dhuhr: "12:13", asr: "04:21", iftar: "18:00", isha: "19:14", date: "Feb 23" },
    { day: 6, sehri: "05:08", dhuhr: "12:12", asr: "04:22", iftar: "18:00", isha: "19:15", date: "Feb 24" },
    { day: 7, sehri: "05:08", dhuhr: "12:12", asr: "04:22", iftar: "18:01", isha: "19:15", date: "Feb 25" },
    { day: 8, sehri: "05:07", dhuhr: "12:12", asr: "04:22", iftar: "18:01", isha: "19:16", date: "Feb 26" },
    { day: 9, sehri: "05:06", dhuhr: "12:12", asr: "04:23", iftar: "18:02", isha: "19:16", date: "Feb 27" },
    { day: 10, sehri: "05:05", dhuhr: "12:12", asr: "04:23", iftar: "18:02", isha: "19:16", date: "Feb 28" },
    { day: 11, sehri: "05:05", dhuhr: "12:12", asr: "04:24", iftar: "18:03", isha: "19:17", date: "Mar 01" },
    { day: 12, sehri: "05:04", dhuhr: "12:12", asr: "04:24", iftar: "18:03", isha: "19:17", date: "Mar 02" },
    { day: 13, sehri: "05:03", dhuhr: "12:11", asr: "04:25", iftar: "18:04", isha: "19:18", date: "Mar 03" },
    { day: 14, sehri: "05:02", dhuhr: "12:11", asr: "04:25", iftar: "18:04", isha: "19:18", date: "Mar 04" },
    { day: 15, sehri: "05:01", dhuhr: "12:11", asr: "04:26", iftar: "18:05", isha: "19:19", date: "Mar 05" },
    { day: 16, sehri: "05:00", dhuhr: "12:11", asr: "04:26", iftar: "18:05", isha: "19:19", date: "Mar 06" },
    { day: 17, sehri: "04:59", dhuhr: "12:11", asr: "04:27", iftar: "18:06", isha: "19:20", date: "Mar 07" },
    { day: 18, sehri: "04:58", dhuhr: "12:10", asr: "04:27", iftar: "18:06", isha: "19:20", date: "Mar 08" },
    { day: 19, sehri: "04:57", dhuhr: "12:10", asr: "04:28", iftar: "18:07", isha: "19:21", date: "Mar 09" },
    { day: 20, sehri: "04:57", dhuhr: "12:10", asr: "04:28", iftar: "18:07", isha: "19:21", date: "Mar 10" },
    { day: 21, sehri: "04:56", dhuhr: "12:10", asr: "04:29", iftar: "18:07", isha: "19:21", date: "Mar 11" },
    { day: 22, sehri: "04:55", dhuhr: "12:09", asr: "04:29", iftar: "18:08", isha: "19:22", date: "Mar 12" },
    { day: 23, sehri: "04:54", dhuhr: "12:09", asr: "04:30", iftar: "18:08", isha: "19:22", date: "Mar 13" },
    { day: 24, sehri: "04:53", dhuhr: "12:09", asr: "04:30", iftar: "18:09", isha: "19:23", date: "Mar 14" },
    { day: 25, sehri: "04:52", dhuhr: "12:09", asr: "04:31", iftar: "18:09", isha: "19:23", date: "Mar 15" },
    { day: 26, sehri: "04:51", dhuhr: "12:08", asr: "04:31", iftar: "18:10", isha: "19:24", date: "Mar 16" },
    { day: 27, sehri: "04:50", dhuhr: "12:08", asr: "04:32", iftar: "18:10", isha: "19:24", date: "Mar 17" },
    { day: 28, sehri: "04:49", dhuhr: "12:08", asr: "04:32", iftar: "18:10", isha: "19:24", date: "Mar 18" },
    { day: 29, sehri: "04:48", dhuhr: "12:08", asr: "04:33", iftar: "18:11", isha: "19:25", date: "Mar 19" },
    { day: 30, sehri: "04:47", dhuhr: "12:07", asr: "04:33", iftar: "18:11", isha: "19:25", date: "Mar 20" },
];

// ── Bangla numerals ──
const toBanglaNum = (num) => {
    const d = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return String(num).split('').map(c => d[parseInt(c)] ?? c).join('');
};

const BANGLA_MONTHS = {
    'Jan': 'জানুয়ারি', 'Feb': 'ফেব্রুয়ারি', 'Mar': 'মার্চ',
    'Apr': 'এপ্রিল', 'May': 'মে', 'Jun': 'জুন',
    'Jul': 'জুলাই', 'Aug': 'আগস্ট', 'Sep': 'সেপ্টেম্বর',
    'Oct': 'অক্টোবর', 'Nov': 'নভেম্বর', 'Dec': 'ডিসেম্বর'
};

// ── State ──
let currentLang = localStorage.getItem('ramadan-lang') || 'en';

// ── Bangladesh Time (UTC+6) ──
function getBDTime() {
    const now = new Date();
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    return new Date(utc + 6 * 3600000);
}

// ── Today's Ramadan day index (0-based) ──
function getTodayRamadanIndex() {
    const bd = getBDTime();
    const start = new Date('2026-02-19T00:00:00+06:00');
    const end = new Date('2026-03-20T23:59:59+06:00');
    if (bd < start || bd > end) return -1;
    return Math.min(Math.floor((bd - start) / 86400000), 29);
}

// ── Parse "HH:MM" into a Date object for today in BD time ──
function parseTimeToday(timeStr, offsetDays = 0) {
    const [h, m] = timeStr.split(':').map(Number);
    const bd = getBDTime();
    const d = new Date(bd);
    d.setHours(h, m, 0, 0);
    d.setDate(d.getDate() + offsetDays);
    return d;
}

// ── Format time "HH:MM" → display string ──
function formatTime(timeStr, lang) {
    const [h, m] = timeStr.split(':').map(Number);
    const pad = String(m).padStart(2, '0');
    if (lang === 'bn') {
        const period = h < 5 ? 'রাত' : h < 12 ? 'ভোর' : h < 15 ? 'দুপুর' : h < 18 ? 'বিকেল' : 'সন্ধ্যা';
        const h12 = h % 12 || 12;
        return `${period} ${toBanglaNum(h12)}:${toBanglaNum(pad)}`;
    }
    const period = h < 12 ? 'AM' : 'PM';
    const h12 = h % 12 || 12;
    return `${h12}:${pad} ${period}`;
}

// ── Format date "Feb 19" → display string ──
function formatDate(dateStr, lang) {
    if (lang === 'bn') {
        const [mon, day] = dateStr.split(' ');
        return `${BANGLA_MONTHS[mon] || mon} ${toBanglaNum(day)}`;
    }
    return dateStr;
}

// ── Countdown ──
function updateCountdown() {
    const bd = getBDTime();
    const todayIdx = getTodayRamadanIndex();
    const L = LANG[currentLang];

    const label = document.getElementById('countdown-label');
    const dEl = document.getElementById('cd-days');
    const hEl = document.getElementById('cd-hours');
    const mEl = document.getElementById('cd-mins');
    const sEl = document.getElementById('cd-secs');

    const setLabels = () => {
        const setT = (id, txt) => { const el = document.getElementById(id); if (el) el.textContent = txt; };
        setT('cd-days-label', L.days);
        setT('cd-hours-label', L.hours);
        setT('cd-mins-label', L.mins);
        setT('cd-secs-label', L.secs);
    };
    setLabels();

    // Before Ramadan
    if (todayIdx === -1) {
        const ramadanStart = new Date('2026-02-19T05:12:00+06:00');
        const diff = ramadanStart - bd;
        if (diff > 0) {
            if (label) label.textContent = currentLang === 'bn' ? 'রমজান শুরু হতে বাকি' : 'Ramadan Starts In';
            renderCountdown(diff, dEl, hEl, mEl, sEl);
        }
        return;
    }

    const data = RAMADAN_DATA[todayIdx];
    const sehriTime = parseTimeToday(data.sehri);
    const iftarTime = parseTimeToday(data.iftar);

    let targetTime, targetLabel, type;

    if (bd < sehriTime) {
        targetTime = sehriTime; targetLabel = L.sehriEnd; type = 'sehri';
    } else if (bd < iftarTime) {
        targetTime = iftarTime; targetLabel = L.iftarTime; type = 'iftar';
    } else {
        const nextIdx = todayIdx + 1;
        if (nextIdx < 30) {
            targetTime = parseTimeToday(RAMADAN_DATA[nextIdx].sehri, 1);
            targetLabel = L.sehriEnd; type = 'sehri';
        } else {
            if (label) label.textContent = currentLang === 'bn' ? 'রমজান সমাপ্ত 🌙' : 'Ramadan Complete 🌙';
            return;
        }
    }

    if (label) label.textContent = `${L.countdownTitle} ${targetLabel}`;
    const card = document.querySelector('.countdown-card');
    if (card) card.classList.toggle('iftar-mode', type === 'iftar');
    renderCountdown(Math.max(0, targetTime - bd), dEl, hEl, mEl, sEl);
}

function renderCountdown(diff, dEl, hEl, mEl, sEl) {
    const total = Math.floor(diff / 1000);
    const d = Math.floor(total / 86400);
    const h = Math.floor((total % 86400) / 3600);
    const m = Math.floor((total % 3600) / 60);
    const s = total % 60;
    const fmt = n => currentLang === 'bn' ? toBanglaNum(String(n).padStart(2, '0')) : String(n).padStart(2, '0');
    if (dEl) dEl.textContent = fmt(d);
    if (hEl) hEl.textContent = fmt(h);
    if (mEl) mEl.textContent = fmt(m);
    if (sEl) sEl.textContent = fmt(s);
}

// ── Today Card ──
function renderTodayCard() {
    const L = LANG[currentLang];
    const todayIdx = getTodayRamadanIndex();
    const el = document.getElementById('today-card');
    if (!el) return;

    if (todayIdx === -1) {
        el.innerHTML = `
      <div class="today-empty">
        <div class="moon-icon">🌙</div>
        <p>${currentLang === 'bn' ? 'রমজান শুরু হয়নি' : 'Ramadan has not started yet'}</p>
        <p class="starts-on">${currentLang === 'bn' ? 'শুরু হবে: ১৯ ফেব্রুয়ারি ২০২৬' : 'Starts: February 19, 2026'}</p>
      </div>`;
        return;
    }

    const data = RAMADAN_DATA[todayIdx];
    const bd = getBDTime();
    const sehriTime = parseTimeToday(data.sehri);
    const iftarTime = parseTimeToday(data.iftar);
    const isFasting = bd >= sehriTime && bd < iftarTime;
    const statusText = isFasting
        ? (currentLang === 'bn' ? '🌟 রোজা চলছে' : '🌟 Fasting in Progress')
        : (bd < sehriTime
            ? (currentLang === 'bn' ? '🌙 সেহরির সময়' : '🌙 Sehri Time')
            : (currentLang === 'bn' ? '✨ ইফতারের পর' : '✨ After Iftar'));

    const dayNum = currentLang === 'bn' ? toBanglaNum(data.day) : data.day;
    const dateStr = formatDate(data.date, currentLang);

    el.innerHTML = `
    <div class="today-day-badge">${currentLang === 'bn' ? 'রমজান' : 'Ramadan'} ${dayNum}</div>
    <div class="today-date">${dateStr}</div>
    <div class="today-status ${isFasting ? 'fasting' : ''}">${statusText}</div>
    <div class="today-times">
      <div class="time-block sehri-block">
        <div class="time-icon">🌙</div>
        <div class="time-label">${L.sehriEnd}</div>
        <div class="time-value">${formatTime(data.sehri, currentLang)}</div>
      </div>
      <div class="time-block prayer-block">
        <div class="time-icon">🕌</div>
        <div class="time-label">${L.dhuhrCol}</div>
        <div class="time-value">${formatTime(data.dhuhr, currentLang)}</div>
      </div>
      <div class="time-block prayer-block">
        <div class="time-icon">☀️</div>
        <div class="time-label">${L.asrCol}</div>
        <div class="time-value">${formatTime(data.asr, currentLang)}</div>
      </div>
      <div class="time-block iftar-block">
        <div class="time-icon">🌅</div>
        <div class="time-label">${L.iftarTime}</div>
        <div class="time-value">${formatTime(data.iftar, currentLang)}</div>
      </div>
      <div class="time-block prayer-block">
        <div class="time-icon">🌃</div>
        <div class="time-label">${L.ishaCol}</div>
        <div class="time-value">${formatTime(data.isha, currentLang)}</div>
      </div>
    </div>`;
}

// ── Full Sehri/Iftar Calendar ──
function renderCalendar() {
    const L = LANG[currentLang];
    const todayIdx = getTodayRamadanIndex();
    const tbody = document.getElementById('calendar-body');
    const thead = document.getElementById('calendar-head');
    if (!tbody) return;

    if (thead) {
        thead.innerHTML = `<tr>
      <th>${L.day}</th>
      <th>${L.date}</th>
      <th>${L.sehriCol}</th>
      <th>${L.iftarCol}</th>
    </tr>`;
    }

    tbody.innerHTML = RAMADAN_DATA.map((d, i) => {
        const isToday = i === todayIdx;
        const dayNum = currentLang === 'bn' ? toBanglaNum(d.day) : d.day;
        const dateStr = formatDate(d.date, currentLang);
        const badge = isToday ? `<span class="today-badge">${L.today}</span>` : '';
        return `<tr class="${isToday ? 'today-row' : ''}" data-day="${d.day}">
      <td class="day-num">${dayNum}${badge}</td>
      <td class="date-col">${dateStr}</td>
      <td class="sehri-col"><span class="moon-dot">🌙</span>${formatTime(d.sehri, currentLang)}</td>
      <td class="iftar-col"><span class="sun-dot">🌅</span>${formatTime(d.iftar, currentLang)}</td>
    </tr>`;
    }).join('');

    if (todayIdx !== -1) {
        setTimeout(() => {
            const row = tbody.querySelector('.today-row');
            if (row) row.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 500);
    }
}

// ── Full Prayer Times Table ──
function renderPrayerTimes() {
    const L = LANG[currentLang];
    const todayIdx = getTodayRamadanIndex();
    const tbody = document.getElementById('prayer-body');
    const thead = document.getElementById('prayer-head');
    if (!tbody) return;

    if (thead) {
        thead.innerHTML = `<tr>
      <th>${L.day}</th>
      <th>${L.date}</th>
      <th>🌙 ${L.fajrCol}</th>
      <th>🕌 ${L.dhuhrCol}</th>
      <th>☀️ ${L.asrCol}</th>
      <th>🌅 ${L.maghribCol}</th>
      <th>🌃 ${L.ishaCol}</th>
    </tr>`;
    }

    tbody.innerHTML = RAMADAN_DATA.map((d, i) => {
        const isToday = i === todayIdx;
        const dayNum = currentLang === 'bn' ? toBanglaNum(d.day) : d.day;
        const dateStr = formatDate(d.date, currentLang);
        const badge = isToday ? `<span class="today-badge">${L.today}</span>` : '';
        return `<tr class="${isToday ? 'today-row' : ''}" data-day="${d.day}">
      <td class="day-num">${dayNum}${badge}</td>
      <td class="date-col">${dateStr}</td>
      <td class="fajr-col">${formatTime(d.sehri, currentLang)}</td>
      <td class="dhuhr-col">${formatTime(d.dhuhr, currentLang)}</td>
      <td class="asr-col">${formatTime(d.asr, currentLang)}</td>
      <td class="maghrib-col">${formatTime(d.iftar, currentLang)}</td>
      <td class="isha-col">${formatTime(d.isha, currentLang)}</td>
    </tr>`;
    }).join('');
}

// ── Duas ──
function renderDuas() {
    const L = LANG[currentLang];

    const render = (id, title, arabic, translit, meaning) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.innerHTML = `
      <h3 class="dua-card-title">${title}</h3>
      <div class="dua-arabic">${arabic}</div>
      <div class="dua-translit">${translit}</div>
      <div class="dua-meaning">${meaning}</div>`;
    };

    render('dua-sehri', `🌙 ${L.duaSehriTitle}`, L.duaSehriArabic, L.duaSehriTranslit, L.duaSehriMeaning);
    render('dua-iftar', `🌅 ${L.duaIftarTitle}`, L.duaIftarArabic, L.duaIftarTranslit, L.duaIftarMeaning);
    render('dua-after-iftar', `✨ ${L.duaAfterIftarTitle}`, L.duaAfterIftarArabic, L.duaAfterIftarTranslit, L.duaAfterIftarMeaning);

    // Source label
    const srcEl = document.getElementById('dua-source');
    if (srcEl) srcEl.textContent = L.source;
}

// ── Apply language ──
function applyLanguage() {
    const L = LANG[currentLang];
    document.documentElement.lang = currentLang === 'bn' ? 'bn' : 'en';

    document.querySelectorAll('[data-en]').forEach(el => {
        el.textContent = currentLang === 'bn' ? el.dataset.bn : el.dataset.en;
    });

    const toggleBtn = document.getElementById('lang-toggle');
    if (toggleBtn) toggleBtn.textContent = L.toggleLang;

    renderTodayCard();
    renderCalendar();
    renderPrayerTimes();
    renderDuas();
    updateCountdown();
}

// ── Live clock ──
function updateClock() {
    const bd = getBDTime();
    const el = document.getElementById('live-clock');
    if (!el) return;
    const h = bd.getHours(), m = bd.getMinutes(), s = bd.getSeconds();
    const pad = n => String(n).padStart(2, '0');
    if (currentLang === 'bn') {
        const per = h < 5 ? 'রাত' : h < 12 ? 'সকাল' : h < 15 ? 'দুপুর' : h < 18 ? 'বিকেল' : 'রাত';
        const h12 = h % 12 || 12;
        el.textContent = `${per} ${toBanglaNum(h12)}:${toBanglaNum(pad(m))}:${toBanglaNum(pad(s))}`;
    } else {
        const period = h < 12 ? 'AM' : 'PM';
        const h12 = h % 12 || 12;
        el.textContent = `${pad(h12)}:${pad(m)}:${pad(s)} ${period} BST`;
    }
}

// ── Scroll reveal ──
function initScrollReveal() {
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target); } });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

// ── Stars ──
function generateStars() {
    const c = document.getElementById('stars');
    if (!c) return;
    for (let i = 0; i < 120; i++) {
        const s = document.createElement('div');
        s.className = 'star';
        const sz = Math.random() * 3 + 1;
        s.style.cssText = `width:${sz}px;height:${sz}px;left:${Math.random() * 100}%;top:${Math.random() * 100}%;animation-delay:${Math.random() * 4}s;animation-duration:${2 + Math.random() * 3}s;opacity:${0.3 + Math.random() * 0.7}`;
        c.appendChild(s);
    }
}

// ── Particles ──
function generateParticles() {
    const c = document.getElementById('particles');
    if (!c) return;
    const sym = ['✦', '✧', '☽', '⋆', '✺'];
    for (let i = 0; i < 20; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.textContent = sym[Math.floor(Math.random() * sym.length)];
        p.style.cssText = `left:${Math.random() * 100}%;animation-delay:${Math.random() * 10}s;animation-duration:${8 + Math.random() * 12}s;font-size:${0.6 + Math.random() * 1.2}rem;opacity:${0.1 + Math.random() * 0.3}`;
        c.appendChild(p);
    }
}

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
    generateStars();
    generateParticles();
    applyLanguage();
    initScrollReveal();

    document.getElementById('lang-toggle')?.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'bn' : 'en';
        localStorage.setItem('ramadan-lang', currentLang);
        applyLanguage();
    });

    setInterval(updateCountdown, 1000);
    setInterval(updateClock, 1000);
    updateClock();
});
