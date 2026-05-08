/* ════════════════════════════════════════════
   ABC INSTITUTE — AI CAREER COUNSELOR
   Smart offline Q&A + API fallback
════════════════════════════════════════════ */

const messagesEl = document.getElementById("chatMessages");
const inputEl = document.getElementById("chatInput");
const sendBtn = document.getElementById("chatSend");

let chatHistory = [];
let isTyping = false;

/* ── SMART OFFLINE KNOWLEDGE BASE ── */
const KB = [
  {
    keys: [
      "stream",
      "science",
      "commerce",
      "arts",
      "10th",
      "which stream",
      "kaunsa stream",
      "konsa",
      "10 ke baad",
    ],
    ans: `🎓 *Stream Selection Guide after 10th:*\n\n📘 *Science* → Best if you want:\n• Engineering (JEE → B.Tech)\n• Medical (NEET → MBBS/BDS)\n• Research, IT, Defence\n\n💰 *Commerce* → Best if you want:\n• Business, Finance, CA, MBA\n• BBA, B.Com, Banking\n\n🎨 *Arts/Humanities* → Best if you want:\n• Law (CLAT), Journalism, IAS/IPS\n• Teaching, Social Work\n\n💡 *Tip:* Choose based on YOUR interest, not marks alone.\n📞 For personal guidance: Call 8076302065 or visit us at Jogabai, Jamia Nagar.`,
  },
  {
    keys: ["jee", "b.tech", "engineering", "iit", "nit"],
    ans: `⚙️ *JEE Mains Preparation Guide:*\n\n📚 *Subjects:* Physics, Chemistry, Mathematics\n📅 *Exam:* January & April every year\n🎯 *Eligibility:* Class 12 passed/appearing (PCM)\n\n*How to Prepare:*\n• Start NCERT thoroughly — it's the base\n• Practice 50+ problems daily\n• Give weekly mock tests (FREE at ABC Institute)\n• Focus on weak chapters first\n\n*At ABC Institute we offer:*\n✓ Expert Physics coaching by Ayub Ansari sir\n✓ Full JEE syllabus in structured batches\n✓ 10,000+ practice questions\n✓ Free weekly mock tests\n\n📞 Enroll: 8076302065 | 💬 WA: 8076302065`,
  },
  {
    keys: ["neet", "mbbs", "medical", "doctor", "biology", "bds"],
    ans: `🩺 *NEET UG Preparation Guide:*\n\n📚 *Subjects:* Physics, Chemistry, Biology (Botany + Zoology)\n📅 *Exam:* Once a year (May)\n🎯 *Eligibility:* Class 12 with PCB\n\n*How to Prepare:*\n• NCERT Biology is MUST — read every line\n• Do 100 MCQs daily\n• Revise previous year papers (last 10 years)\n• Weak areas: Practice 3x more\n\n*ABC Institute NEET Coaching:*\n✓ Dedicated Biology + Chemistry + Physics batches\n✓ NCERT-based teaching method\n✓ Free weekly NEET mock tests\n✓ 100% admission success rate\n\n📞 Call: 8076302065 | 💬 WA: 8076302065`,
  },
  {
    keys: ["cuet", "central university", "du entrance", "delhi university"],
    ans: `🏛️ *CUET UG (Central Universities Entrance Test):*\n\n📚 *Sections:*\n• Section 1A: Language Test\n• Section 2: Domain Subjects (your stream)\n• Section 3: General Test\n\n🏫 *Top Colleges via CUET:* DU, JNU, BHU, AMU, Hyderabad University\n\n*Preparation Tips:*\n• Focus on your domain subject deeply\n• General Test: Current affairs + reasoning\n• Practice NCERT Class 11-12 thoroughly\n\n*ABC Institute CUET Coaching:*\n✓ Subject-wise batch for all streams\n✓ Mock tests every week\n✓ Previous year papers with solutions\n\n📞 8076302065 | 💬 WA: 8076302065 | 📍 Jogabai, Jamia Nagar`,
  },
  {
    keys: [
      "jmi",
      "jamia",
      "jamia millia",
      "class 6",
      "class 9",
      "class 11",
      "6th entrance",
      "9th entrance",
    ],
    ans: `🕌 *JMI (Jamia Millia Islamia) Entrance Preparation:*\n\n*Entrance Available For:*\n• Class 6 — Arabic, Urdu, English medium\n• Class 9 — All streams\n• Class 11 — Science, Commerce, Arts\n• UG Programs — BA, B.Tech, BCA etc.\n\n*Syllabus Focus:*\n• Maths, Science, English, Urdu/Hindi\n• General Knowledge & Current Affairs\n• Logical Reasoning\n\n*ABC Institute JMI Special:*\n✓ 19+ years of JMI preparation experience\n✓ Dedicated batches for Class 6, 9, 11\n✓ Previous year JMI papers with solutions\n✓ 100% success rate in JMI admissions\n\n📞 8076302065 | 💬 WA: 8076302065\n📍 161/25, Jogabai, Jamia Nagar, New Delhi`,
  },
  {
    keys: ["amu", "aligarh", "aligarh muslim university"],
    ans: `🎓 *AMU (Aligarh Muslim University) Entrance Preparation:*\n\n*Entrance Available For:*\n• Class 6 (Junior School)\n• Class 9 (High School)\n• Class 11 (Inter Section)\n• UG — B.Tech, BA, BCA, B.Com etc.\n\n*Subjects:* Maths, Science, English, Urdu, GK\n\n*ABC Institute AMU Coaching:*\n✓ Special AMU preparation batches\n✓ Past papers & pattern-based practice\n✓ Urdu medium support available\n✓ Expert faculty with years of AMU coaching experience\n\n📞 8076302065 | 💬 WA: 8076302065\n📍 Jogabai, Jamia Nagar, New Delhi – 110025`,
  },
  {
    keys: ["du", "ipu", "ip university", "delhi univ", "dseu", "hamdard"],
    ans: `🏫 *DU / IPU / DSEU Admission Guidance:*\n\n*Delhi University (DU):*\n• Admission via CUET UG score\n• Top colleges: SRCC, Hansraj, Miranda, Kirori Mal\n• Courses: BA, B.Com, B.Sc, BCA\n\n*IP University (IPU):*\n• Entrance via CET (IPU)\n• Top for: B.Tech, BCA, BBA, B.Ed, MBA\n\n*DSEU:*\n• Skill-based degrees & diplomas\n• New, govt-funded university in Delhi\n\n*ABC Institute:*\n✓ Coaching + counseling for all 3 universities\n✓ Form filling assistance\n✓ Mock tests for all entrance patterns\n\n📞 8076302065 | 💬 WA: 8076302065`,
  },
  {
    keys: [
      "distance",
      "ignou",
      "sol",
      "du sol",
      "distance learning",
      "working",
      "job ke saath",
    ],
    ans: `🌐 *Distance Learning Programs:*\n\n*Available Universities:*\n• *IGNOU* — BA, B.Com, BCA, MA, MBA, BEd\n• *DU SOL* — BA, B.Com (Hons & Pass)\n• *JMI Distance* — Various UG/PG programs\n• *Private Universities* — Multiple options\n\n*Who Should Choose Distance?*\n• Working professionals\n• Students who missed regular admission\n• Those wanting degree + job simultaneously\n\n*Benefits:*\n✓ Same degree value as regular\n✓ Lower fees\n✓ Flexible exam schedule\n✓ UGC recognized\n\n*ABC Institute helps with:*\n✓ Admission form filling\n✓ Study material guidance\n✓ Exam preparation support\n\n📞 8076302065 | 💬 WA: 8076302065`,
  },
  {
    keys: ["fee", "fees", "kitni fees", "how much", "charges", "cost", "paisa"],
    ans: `💰 *Fee Information:*\n\nFees at ABC Institute vary depending on:\n• Course type (Regular / Entrance / Distance)\n• Class level (6th-10th / 11th-12th / UG entrance)\n• Batch timing\n\nWe offer *very affordable fees* with flexible payment options.\n\n📞 *For exact fee details, please contact us:*\n• Call: 8076302065 or 9899129776\n• WhatsApp: 8076302065\n• Visit: 161/25, Jogabai, Near Abidin Medical Centre, Jamia Nagar\n\n🕐 Open: Mon–Sat 8 AM to 8 PM | Sun 9 AM to 2 PM`,
  },
  {
    keys: [
      "mock test",
      "free test",
      "test series",
      "practice test",
      "free mock",
    ],
    ans: `📝 *Free Mock Test at ABC Institute:*\n\n✅ *Completely FREE — No charges!*\n\n*Features:*\n• Weekly tests every weekend\n• 10,000+ questions with solutions\n• Based on latest exam pattern\n• Solution discussion class after every test\n• Performance analysis & feedback\n• Open to ALL students (enrolled or not)\n\n*Exams Covered:*\n JEE | NEET | CUET | JMI | AMU | DU | IPU | DSEU\n\n📅 *Schedule:* Every Saturday & Sunday\n📍 *Venue:* 161/25, Jogabai, Jamia Nagar\n\n📞 Register: 8076302065 | 💬 WA: 8076302065`,
  },
  {
    keys: ["admission", "enroll", "join", "registration", "form", "dakhila"],
    ans: `✅ *How to Enroll at ABC Institute:*\n\n*Step 1:* Call us at 📞 *8076302065* or WhatsApp *8076302065*\n*Step 2:* Visit our institute at 📍 161/25, Jogabai, Jamia Nagar\n*Step 3:* Meet our counselor, choose your batch & course\n*Step 4:* Fill the form & start classes!\n\n*Documents needed:*\n• Previous class marksheet/certificate\n• 2 passport photos\n• Aadhar card copy\n\n🕐 *Timings:* Mon–Sat 8 AM to 8 PM\n\n💬 *You can also enroll via this website's Contact page!*`,
  },
  {
    keys: [
      "address",
      "location",
      "kahan hai",
      "where",
      "jogabai",
      "jamia nagar",
      "okhla",
    ],
    ans: `📍 *ABC Institute Location:*\n\n*Address:*\n161/25, Jogabai\nNear Abidin Medical Centre\nJamia Nagar, Okhla\nNew Delhi – 110025\n\n*How to reach:*\n• Nearest Metro: Okhla Vihar (Magenta Line)\n• Nearest Bus Stop: Jamia Nagar\n• Landmark: Near Abidin Medical Centre, Jogabai\n\n🕐 *Open:* Mon–Sat 8 AM–8 PM | Sun 9 AM–2 PM\n📞 8076302065 | 💬 WA: 8076302065`,
  },
  {
    keys: [
      "btech",
      "bca",
      "bba",
      "ba",
      "bed",
      "diploma",
      "b.ed",
      "b.tech",
      "graduation",
    ],
    ans: `🎓 *Admission Preparation for UG Courses:*\n\n*We guide for:*\n• *B.Tech* → JEE / State CET / IPU CET\n• *B.Tech Lateral* → Diploma → Direct 2nd year\n• *BCA* → IPU, GGSIPU, private colleges\n• *BBA* → DU, IPU, JMI, AMU\n• *BA* → CUET (DU, JNU, BHU, AMU)\n• *B.Ed* → Delhi University B.Ed entrance\n• *Diploma Engg* → Polytechnic entrance\n\n*Our support includes:*\n✓ Entrance exam coaching\n✓ College shortlisting by rank\n✓ Form filling assistance\n✓ Counseling round guidance\n\n📞 8076302065 | 💬 WA: 8076302065`,
  },
  {
    keys: [
      "ayub",
      "ansari",
      "teacher",
      "principal",
      "director",
      "sir",
      "faculty",
    ],
    ans: `👨‍🏫 *About Ayub Ansari Sir:*\n\nAyub Ansari is the founder and head of ABC Institute of Science & Commerce.\n\n*Expertise:*\n• Physics Teacher with 19+ years of experience\n• Specialist in JEE, NEET, JMI, AMU entrance coaching\n• Known for making difficult Physics concepts simple\n• Has mentored thousands of successful students\n\n*Institute Founded:* 2005\n*Location:* Jogabai, Jamia Nagar, New Delhi\n\n*Result:* 100% admission success rate — a testament to his teaching quality!\n\n📞 8076302065 | 📍 161/25 Jogabai, Jamia Nagar`,
  },
  {
    keys: [
      "career",
      "future",
      "job",
      "scope",
      "option",
      "kya banu",
      "what should",
      "konsi field",
    ],
    ans: `🧭 *Career Guidance:*\n\nHere are some popular career paths based on your current class:\n\n*After 10th → Choose stream wisely:*\n• Love Maths/Science → Science stream → JEE/NEET\n• Good at Accounts/Business → Commerce → CA/MBA\n• Interest in Writing/History → Arts → Law/IAS/Media\n\n*After 12th → Choose the right entrance:*\n• Engineering: JEE Mains\n• Medical: NEET\n• Central Universities: CUET\n• JMI/AMU: Their own entrance\n\n*ABC Institute offers FREE Career Counseling!*\n📍 Visit us at Jogabai, Jamia Nagar\n📞 8076302065 | 💬 WA: 8076302065\n\nTell me your current class and I'll give personalized advice! 😊`,
  },
  {
    keys: [
      "timing",
      "time",
      "batch",
      "schedule",
      "kab",
      "when",
      "morning",
      "evening",
    ],
    ans: `🕐 *ABC Institute Batch Timings:*\n\n*Morning Batches:*\n• 7:00 AM – 9:00 AM\n• 9:00 AM – 11:00 AM\n\n*Afternoon Batch:*\n• 12:00 PM – 2:00 PM\n\n*Evening Batches:*\n• 4:00 PM – 6:00 PM\n• 6:00 PM – 8:00 PM\n\n*Weekend Batch:*\n• Saturday & Sunday (for working professionals)\n\n*Free Mock Tests:* Every weekend\n\n📞 Call to confirm batch availability: 8076302065\n💬 WhatsApp: 8076302065\n📍 161/25, Jogabai, Jamia Nagar`,
  },
];

function getTime() {
  return new Date().toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

function appendMessage(role, text, animate) {
  const div = document.createElement("div");
  div.className = `msg ${role}`;
  // Convert **bold** markdown and bullet formatting
  const formatted = text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<strong>$1</strong>")
    .replace(/\n/g, "<br>");
  div.innerHTML = `<div class="msg-bubble">${formatted}</div><div class="msg-time">${getTime()}</div>`;
  if (animate) div.style.animation = "fadeInMsg .3s ease";
  messagesEl.appendChild(div);
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

function showTyping() {
  removeTyping();
  const d = document.createElement("div");
  d.className = "msg bot";
  d.id = "typingIndicator";
  d.innerHTML = `<div class="msg-bubble"><div class="typing-indicator"><span></span><span></span><span></span></div></div>`;
  messagesEl.appendChild(d);
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

function removeTyping() {
  const t = document.getElementById("typingIndicator");
  if (t) t.remove();
}

/* ── MATCH KNOWLEDGE BASE ── */
function findKBAnswer(text) {
  const lower = text.toLowerCase();
  for (const item of KB) {
    if (item.keys.some((k) => lower.includes(k))) return item.ans;
  }
  return null;
}

/* ── SEND MESSAGE ── */
async function sendMessage(userText) {
  if (!userText || !userText.trim() || isTyping) return;
  isTyping = true;

  const cleaned = userText.trim();
  appendMessage("user", cleaned, true);
  chatHistory.push({ role: "user", content: cleaned });

  if (inputEl) {
    inputEl.value = "";
    inputEl.style.height = "auto";
  }

  showTyping();

  // First try KB (instant, no API needed)
  const kbAnswer = findKBAnswer(cleaned);

  await new Promise((r) => setTimeout(r, 900 + Math.random() * 600));
  removeTyping();

  if (kbAnswer) {
    chatHistory.push({ role: "assistant", content: kbAnswer });
    appendMessage("bot", kbAnswer, true);
    isTyping = false;
    return;
  }

  // Try Anthropic API for unknown questions
  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "anthropic-dangerous-direct-browser-access": "true",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 400,
        system: `You are a career counselor at ABC Institute of Science & Commerce, Jogabai, Jamia Nagar, New Delhi. Led by Ayub Ansari (Physics Teacher), 19 years of excellence. Give concise, helpful career advice in 3-5 sentences. Always end by suggesting to call 8076302065 or WhatsApp 8076302065. If asked in Hindi, reply in Hindi.`,
        messages: chatHistory.slice(-6),
      }),
    });
    const data = await res.json();
    const reply = data?.content?.[0]?.text;
    if (reply) {
      chatHistory.push({ role: "assistant", content: reply });
      appendMessage("bot", reply, true);
      isTyping = false;
      return;
    }
  } catch (e) {
    /* fall through */
  }

  // Final fallback — smart default reply
  const fallback = `🤔 That's a great question! For detailed guidance on this topic, our expert counselors at ABC Institute can help you best.\n\n📞 *Call us:* 8076302065 or 9899129776\n💬 *WhatsApp:* 8076302065\n📍 *Visit:* 161/25, Jogabai, Jamia Nagar, New Delhi\n\nYou can also ask me about: Stream selection, JEE, NEET, CUET, JMI, AMU, DU admissions, fees, batch timings, or distance learning!`;
  chatHistory.push({ role: "assistant", content: fallback });
  appendMessage("bot", fallback, true);
  isTyping = false;
}

/* ── QUICK QUESTIONS ── */
document.querySelectorAll(".quick-q").forEach((btn) => {
  btn.addEventListener("click", () => sendMessage(btn.textContent.trim()));
});

/* ── SEND BUTTON ── */
if (sendBtn)
  sendBtn.addEventListener("click", () => sendMessage(inputEl?.value));

/* ── ENTER KEY ── */
if (inputEl) {
  inputEl.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(inputEl.value);
    }
  });
  inputEl.addEventListener("input", () => {
    inputEl.style.height = "auto";
    inputEl.style.height = Math.min(inputEl.scrollHeight, 100) + "px";
  });
}

/* ── INITIAL GREETING ── */
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    appendMessage(
      "bot",
      `👋 *Assalamu Alaikum / Namaste!*\n\nMain hoon *ABC Institute Career Counselor AI* 🤖\n\n*Main aapki help kar sakta hoon:*\n• 10th ke baad stream selection (Science/Commerce/Arts)\n• JEE / NEET / CUET preparation guidance\n• JMI & AMU entrance exam tips\n• DU, IPU, DSEU admissions\n• Distance learning (IGNOU, SOL)\n• Fees, timings, enrollment\n\n*Apna sawaal Hindi ya English mein poochein!* 😊`,
    );
  }, 600);
});

/* ── Fade animation ── */
const style = document.createElement("style");
style.textContent = `@keyframes fadeInMsg { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }`;
document.head.appendChild(style);
