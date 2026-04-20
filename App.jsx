import React from "react";
import { MapPin, Calendar, ChevronRight, ChevronLeft, Clock, Info } from "lucide-react";

// ═══════════════════════════════════════════════════════════════════
// CONTENT — edit this to add units, lessons, and exercises.
// Supported exercise types: mcq, fill, match, listen, write.
// ═══════════════════════════════════════════════════════════════════

const CONTENT = {
  course: {
    titleEn: "English for trips",
    titleKo: "여행 영어 실전",
    subtitle: "Practical English Conversation · Dongseo University",
  },
  units: [
    {
      id: "trips",
      title: "Talking about trips",
      titleKo: "여행 회화",
      lessons: [
        {
          id: "l1",
          title: "Planning the trip",
          titleKo: "여행 계획",
          exercises: [
            { type: "mcq", prompt: "Translate to English", source: "여행을 계획하다",
              options: ["plan a trip", "cancel a trip", "pack for a trip", "return from a trip"], correct: 0 },
            { type: "fill", prompt: "Complete the sentence",
              sentence: "I'm planning a trip ___ Europe next summer.",
              options: ["to", "at", "in", "on"], correct: 0 },
            { type: "match", prompt: "Match Korean with English", pairs: [
              { k: "비행기표", e: "plane ticket" },
              { k: "여권", e: "passport" },
              { k: "짐을 싸다", e: "pack luggage" },
              { k: "숙소", e: "accommodation" },
            ]},
            { type: "listen", prompt: "Type what you hear",
              audio: "I'd like to book a room for two nights." },
            { type: "write", prompt: "Describe your ideal vacation in 2–3 sentences.", minWords: 15 },
          ],
        },
        {
          id: "l2",
          title: "At the airport",
          titleKo: "공항에서",
          exercises: [
            { type: "mcq", prompt: "Translate to English", source: "탑승 수속을 하다",
              options: ["board the plane", "check in", "land safely", "buy a ticket"], correct: 1 },
            { type: "mcq", prompt: "Pick the natural response", source: "\"Where are you flying to?\"",
              options: ["For three days.", "I'm flying to Seoul.", "By plane.", "Around 7 p.m."], correct: 1 },
            { type: "match", prompt: "Match airport terms", pairs: [
              { k: "탑승권", e: "boarding pass" },
              { k: "탑승구", e: "gate" },
              { k: "출발", e: "departure" },
              { k: "도착", e: "arrival" },
            ]},
            { type: "listen", prompt: "Type what you hear",
              audio: "The flight leaves at seven thirty." },
            { type: "fill", prompt: "Complete the sentence",
              sentence: "Please ___ your passport at the counter.",
              options: ["show", "tell", "speak", "play"], correct: 0 },
          ],
        },
        {
          id: "l3",
          title: "Hotel check-in",
          titleKo: "호텔 체크인",
          exercises: [
            { type: "mcq", prompt: "Translate to English", source: "방을 예약하다",
              options: ["cancel a room", "clean a room", "reserve a room", "rent a house"], correct: 2 },
            { type: "fill", prompt: "Complete the sentence",
              sentence: "I have a reservation ___ the name of Kim.",
              options: ["under", "over", "at", "from"], correct: 0 },
            { type: "match", prompt: "Match hotel terms", pairs: [
              { k: "로비", e: "lobby" },
              { k: "프런트", e: "reception" },
              { k: "카드키", e: "key card" },
              { k: "객실 청소", e: "housekeeping" },
            ]},
            { type: "listen", prompt: "Type what you hear",
              audio: "Could I have your passport please?" },
            { type: "write", prompt: "Write a polite message asking the hotel for a late check-out.", minWords: 20 },
          ],
        },
      ],
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════
// Design tokens
// ═══════════════════════════════════════════════════════════════════

const STYLES = `
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.css');
@import url('https://cdn.jsdelivr.net/npm/@fontsource-variable/fraunces@5.0.20/index.min.css');

:root {
  --bg: #F5EFE0;
  --bg-grain: #F1EAD7;
  --surface: #FBF7EB;
  --surface-2: #FFFFFF;
  --ink: #26201A;
  --ink-soft: #5C5143;
  --ink-mute: #8A7E6B;
  --line: #D9CFB6;
  --line-soft: #E8DFC7;
  --brick: #B2532B;
  --brick-soft: #F0D9C9;
  --brick-deep: #6B3017;
  --moss: #45634E;
  --moss-soft: #DFEADB;
  --moss-deep: #263829;
  --rust: #9B3F3F;
  --rust-soft: #F3D9D4;
  --rust-deep: #5E1F1F;
  --amber: #B27826;
  --amber-soft: #F4E4C1;
  --amber-deep: #5E3B0D;
}
* { box-sizing: border-box; }
.app-root {
  background: var(--bg);
  min-height: 100vh;
  font-family: 'Pretendard Variable', -apple-system, sans-serif;
  color: var(--ink);
  background-image: radial-gradient(circle at 30% 20%, var(--bg-grain) 0%, transparent 50%),
                    radial-gradient(circle at 70% 80%, var(--bg-grain) 0%, transparent 50%);
}
.app-wrap { max-width: 560px; margin: 0 auto; padding: 0 20px 60px; }
.serif { font-family: 'Fraunces Variable', 'Times New Roman', serif; font-feature-settings: 'ss01'; font-variation-settings: 'opsz' 48; letter-spacing: -0.01em; }
.hair { border: 0; border-top: 0.5px solid var(--line); }
.btn { font-family: inherit; font-weight: 500; border-radius: 10px; cursor: pointer; transition: transform 0.12s, background 0.15s; border: 1px solid var(--line); background: var(--surface-2); color: var(--ink); padding: 11px 16px; font-size: 14px; }
.btn:hover:not(:disabled) { background: var(--bg-grain); }
.btn:active:not(:disabled) { transform: translateY(1px); }
.btn:disabled { opacity: 0.5; cursor: not-allowed; }
.btn-primary { background: var(--brick); color: #FBF7EB; border-color: var(--brick); }
.btn-primary:hover:not(:disabled) { background: var(--brick-deep); }
.btn-primary:disabled { background: var(--line); border-color: var(--line); color: var(--ink-mute); }
.btn-ghost { background: transparent; border: none; color: var(--ink-soft); padding: 6px 10px; }
.btn-ghost:hover:not(:disabled) { background: var(--bg-grain); }
.card { background: var(--surface); border: 0.5px solid var(--line); border-radius: 14px; padding: 20px; }
.opt {
  display: block; width: 100%; text-align: left; padding: 13px 16px; margin-bottom: 8px;
  border: 1px solid var(--line); background: var(--surface-2);
  border-radius: 10px; font-size: 15px; font-family: inherit; cursor: pointer; color: var(--ink);
  transition: all 0.12s;
}
.opt:hover:not(:disabled) { border-color: var(--ink-mute); }
.opt.sel { border-color: var(--brick); background: var(--brick-soft); color: var(--brick-deep); border-width: 2px; padding: 12px 15px; }
.opt.correct { border-color: var(--moss); background: var(--moss-soft); color: var(--moss-deep); border-width: 2px; padding: 12px 15px; }
.opt.wrong { border-color: var(--rust); background: var(--rust-soft); color: var(--rust-deep); border-width: 2px; padding: 12px 15px; }
.opt:disabled { cursor: default; }
.prompt-label { font-family: 'Fraunces Variable', serif; font-variation-settings: 'opsz' 14, 'ital' 1; font-style: italic; font-size: 13px; color: var(--ink-mute); margin: 0 0 10px; }
.exercise-sentence { font-family: 'Fraunces Variable', serif; font-variation-settings: 'opsz' 48; font-size: 22px; font-weight: 500; line-height: 1.35; margin-bottom: 20px; color: var(--ink); letter-spacing: -0.015em; }
.fill-blank { display: inline-block; min-width: 60px; padding: 0 6px; border-bottom: 2px solid var(--brick); color: var(--brick); font-style: italic; }
.fill-blank.filled { color: var(--ink); font-style: normal; }
@keyframes shake { 0%,100%{transform:translateX(0);} 25%{transform:translateX(-4px);} 75%{transform:translateX(4px);} }
.shake { animation: shake 0.35s; }
@keyframes fadein { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }
.fadein { animation: fadein 0.3s ease-out; }
@keyframes pulse-ring { 0% { transform: scale(1); opacity: 0.7; } 100% { transform: scale(1.6); opacity: 0; } }
.pulse-ring { position: absolute; inset: 0; border-radius: 50%; background: var(--brick); animation: pulse-ring 1.4s ease-out infinite; }
.input-text { width: 100%; padding: 12px 14px; border: 1px solid var(--line); border-radius: 10px; font-size: 15px; font-family: inherit; background: var(--surface-2); color: var(--ink); }
.input-text:focus { outline: none; border-color: var(--brick); box-shadow: 0 0 0 3px var(--brick-soft); }
.textarea { width: 100%; min-height: 100px; padding: 12px 14px; border: 1px solid var(--line); border-radius: 10px; font-size: 15px; font-family: inherit; background: var(--surface-2); color: var(--ink); resize: vertical; line-height: 1.55; }
.textarea:focus { outline: none; border-color: var(--moss); box-shadow: 0 0 0 3px var(--moss-soft); }
.feedback { padding: 14px 16px; border-radius: 10px; font-size: 14px; line-height: 1.55; }
.feedback-good { background: var(--moss-soft); color: var(--moss-deep); }
.feedback-bad { background: var(--rust-soft); color: var(--rust-deep); }
.feedback-neutral { background: var(--amber-soft); color: var(--amber-deep); }
@keyframes spin { to { transform: rotate(360deg); } }
.spinner { width: 16px; height: 16px; border: 2px solid var(--line); border-top-color: var(--brick); border-radius: 50%; animation: spin 0.8s linear infinite; display: inline-block; vertical-align: middle; }
.match-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
.match-item { padding: 14px 10px; background: var(--surface-2); border: 1px solid var(--line); border-radius: 10px; font-size: 15px; font-family: inherit; cursor: pointer; text-align: center; color: var(--ink); min-height: 52px; }
.match-item:hover:not(.matched):not(.selected) { border-color: var(--ink-mute); }
.match-item.selected { border-color: var(--brick); background: var(--brick-soft); color: var(--brick-deep); border-width: 2px; padding: 13px 9px; }
.match-item.matched { border-color: var(--moss); background: var(--moss-soft); color: var(--moss-deep); pointer-events: none; opacity: 0.7; }
.match-item.wrong { border-color: var(--rust); background: var(--rust-soft); color: var(--rust-deep); border-width: 2px; padding: 13px 9px; }
.lesson-row { display: flex; align-items: center; gap: 14px; padding: 16px; border: 0.5px solid var(--line); border-radius: 12px; background: var(--surface-2); cursor: pointer; transition: all 0.15s; }
.lesson-row:hover { border-color: var(--brick); }
.lesson-row.locked { opacity: 0.5; cursor: not-allowed; background: var(--bg-grain); }
.lesson-row.done { background: var(--moss-soft); border-color: var(--moss); }
.lesson-dot { width: 40px; height: 40px; border-radius: 50%; background: var(--bg-grain); display: flex; align-items: center; justify-content: center; flex-shrink: 0; border: 1px solid var(--line); }
.lesson-row.done .lesson-dot { background: var(--moss); border-color: var(--moss); color: var(--surface-2); }
.stat-pill { display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px; border-radius: 20px; font-size: 13px; font-weight: 500; background: var(--surface-2); border: 0.5px solid var(--line); }
.progress-track { height: 8px; background: var(--line-soft); border-radius: 4px; overflow: hidden; }
.progress-fill { height: 100%; background: var(--brick); transition: width 0.35s ease; }
.audio-btn { display: flex; align-items: center; gap: 14px; padding: 16px; background: var(--amber-soft); border: 1px solid var(--amber); border-radius: 12px; width: 100%; cursor: pointer; font-family: inherit; text-align: left; margin-bottom: 14px; transition: all 0.15s; }
.audio-btn:hover { background: var(--amber-soft); transform: translateY(-1px); }
.audio-circle { width: 44px; height: 44px; border-radius: 50%; background: var(--amber); display: flex; align-items: center; justify-content: center; flex-shrink: 0; position: relative; }
.audio-btn.playing .audio-circle::before { content: ''; position: absolute; inset: 0; border-radius: 50%; background: var(--amber); animation: pulse-ring 1.4s ease-out infinite; }
.hero-title { font-family: 'Fraunces Variable', serif; font-variation-settings: 'opsz' 72, 'wght' 400; font-size: 42px; letter-spacing: -0.025em; line-height: 1.05; margin: 0 0 6px; color: var(--ink); }
.hero-kicker { font-family: 'Fraunces Variable', serif; font-style: italic; font-variation-settings: 'opsz' 14, 'ital' 1; font-size: 13px; color: var(--ink-mute); letter-spacing: 0.04em; text-transform: uppercase; margin-bottom: 10px; }
.unit-title { font-family: 'Fraunces Variable', serif; font-size: 22px; font-variation-settings: 'opsz' 48; letter-spacing: -0.015em; margin: 0; }
.eyebrow { font-size: 12px; color: var(--ink-mute); letter-spacing: 0.08em; text-transform: uppercase; font-weight: 500; }
`;

// ═══════════════════════════════════════════════════════════════════
// Persistence
// ═══════════════════════════════════════════════════════════════════

const STORAGE_KEY = "english-trips:progress:v1";
const DEFAULT_PROGRESS = { xp: 0, streak: 0, hearts: 5, completedLessons: [], lastDate: null };

async function loadProgress() {
  try {
    const result = await window.storage.get(STORAGE_KEY);
    if (result?.value) {
      const parsed = JSON.parse(result.value);
      return { ...DEFAULT_PROGRESS, ...parsed, completedLessons: parsed.completedLessons || [] };
    }
  } catch (e) { /* key doesn't exist yet */ }
  return { ...DEFAULT_PROGRESS };
}

async function saveProgress(p) {
  try { await window.storage.set(STORAGE_KEY, JSON.stringify(p)); } catch (e) { console.error(e); }
}

// ═══════════════════════════════════════════════════════════════════
// Audio — Web Speech API
// ═══════════════════════════════════════════════════════════════════

function speak(text, onEnd) {
  if (!("speechSynthesis" in window)) { onEnd?.(); return false; }
  try {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "en-US";
    u.rate = 0.9;
    u.pitch = 1.0;
    const voices = window.speechSynthesis.getVoices();
    const en = voices.find(v => v.lang.startsWith("en")) || voices[0];
    if (en) u.voice = en;
    u.onend = () => onEnd?.();
    u.onerror = () => onEnd?.();
    window.speechSynthesis.speak(u);
    return true;
  } catch (e) { onEnd?.(); return false; }
}

// ═══════════════════════════════════════════════════════════════════
// Claude API — writing feedback
// ═══════════════════════════════════════════════════════════════════

async function getWritingFeedback(prompt, text) {
  const systemPrompt = `You are an encouraging English writing tutor for Korean university students. Respond in this exact JSON format with no other text:
{"praise": "one sentence in Korean praising something specific about the writing", "suggestions": ["specific suggestion 1 in Korean", "specific suggestion 2 in Korean"], "corrected": "a polished English version of the student's text"}
Keep each Korean sentence under 25 words. Be warm but specific.`;

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 600,
      system: systemPrompt,
      messages: [{ role: "user", content: `Prompt given to student: "${prompt}"\n\nStudent wrote:\n"${text}"` }],
    }),
  });
  if (!res.ok) throw new Error("API error");
  const data = await res.json();
  const raw = data.content.filter(b => b.type === "text").map(b => b.text).join("").trim();
  const clean = raw.replace(/```json\s*/g, "").replace(/```/g, "").trim();
  return JSON.parse(clean);
}

// ═══════════════════════════════════════════════════════════════════
// Exercise components
// ═══════════════════════════════════════════════════════════════════

function McqExercise({ ex, onAnswer, answered, selected, onSelect }) {
  return (
    <div className="fadein">
      <p className="prompt-label">{ex.prompt}</p>
      <div className="exercise-sentence">{ex.source}</div>
      {ex.options.map((o, i) => {
        let cls = "opt";
        if (answered) { if (i === ex.correct) cls += " correct"; else if (i === selected) cls += " wrong"; }
        else if (selected === i) cls += " sel";
        return <button key={i} className={cls} disabled={answered} onClick={() => onSelect(i)}>{o}</button>;
      })}
    </div>
  );
}

function FillExercise({ ex, answered, selected, onSelect }) {
  const parts = ex.sentence.split("___");
  const filled = selected !== null ? ex.options[selected] : null;
  return (
    <div className="fadein">
      <p className="prompt-label">{ex.prompt}</p>
      <div className="exercise-sentence">
        {parts[0]}
        <span className={`fill-blank ${filled ? "filled" : ""}`}>{filled || "___"}</span>
        {parts[1]}
      </div>
      {ex.options.map((o, i) => {
        let cls = "opt";
        if (answered) { if (i === ex.correct) cls += " correct"; else if (i === selected) cls += " wrong"; }
        else if (selected === i) cls += " sel";
        return <button key={i} className={cls} disabled={answered} onClick={() => onSelect(i)}>{o}</button>;
      })}
    </div>
  );
}

function MatchExercise({ ex, onComplete }) {
  const [selectedLeft, setSelectedLeft] = useState(null);
  const [selectedRight, setSelectedRight] = useState(null);
  const [matched, setMatched] = useState(new Set());
  const [wrongPair, setWrongPair] = useState(null);
  const [rightOrder] = useState(() => {
    const indices = ex.pairs.map((_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return indices;
  });

  useEffect(() => {
    if (selectedLeft !== null && selectedRight !== null) {
      if (selectedLeft === selectedRight) {
        const next = new Set(matched); next.add(selectedLeft);
        setMatched(next);
        setSelectedLeft(null); setSelectedRight(null);
        if (next.size === ex.pairs.length) setTimeout(() => onComplete(true), 400);
      } else {
        setWrongPair([selectedLeft, selectedRight]);
        setTimeout(() => { setSelectedLeft(null); setSelectedRight(null); setWrongPair(null); }, 650);
      }
    }
  }, [selectedLeft, selectedRight]);

  const cls = (idx, side) => {
    if (matched.has(idx)) return "match-item matched";
    if (wrongPair) {
      if ((side === "L" && wrongPair[0] === idx) || (side === "R" && wrongPair[1] === idx)) return "match-item wrong shake";
    }
    if (side === "L" && selectedLeft === idx) return "match-item selected";
    if (side === "R" && selectedRight === idx) return "match-item selected";
    return "match-item";
  };

  const rows = [];
  for (let i = 0; i < ex.pairs.length; i++) {
    rows.push(
      <button key={`l${i}`} className={cls(i, "L")} disabled={wrongPair !== null}
        onClick={() => { if (!matched.has(i)) setSelectedLeft(i); }}>{ex.pairs[i].k}</button>
    );
    const rIdx = rightOrder[i];
    rows.push(
      <button key={`r${rIdx}`} className={cls(rIdx, "R")} disabled={wrongPair !== null}
        onClick={() => { if (!matched.has(rIdx)) setSelectedRight(rIdx); }}>{ex.pairs[rIdx].e}</button>
    );
  }

  return (
    <div className="fadein">
      <p className="prompt-label">{ex.prompt}</p>
      <div className="match-grid">{rows}</div>
      <p style={{ fontSize: 12, color: "var(--ink-mute)", textAlign: "center", marginTop: 14 }}>
        {matched.size} / {ex.pairs.length} matched
      </p>
    </div>
  );
}

function ListenExercise({ ex, answered, onAnswer, input, setInput }) {
  const [playing, setPlaying] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const handlePlay = () => {
    setPlaying(true); setHasPlayed(true);
    speak(ex.audio, () => setPlaying(false));
  };
  const normalize = (s) => s.toLowerCase().replace(/[.,!?'"]/g, "").trim().split(/\s+/);
  const targetWords = normalize(ex.audio);
  const inputWords = input ? normalize(input) : [];
  return (
    <div className="fadein">
      <p className="prompt-label">{ex.prompt}</p>
      <button className={`audio-btn ${playing ? "playing" : ""}`} onClick={handlePlay} disabled={answered}>
        <div className="audio-circle"><Volume2 size={20} color="#FBF7EB" strokeWidth={2.5} /></div>
        <div>
          <div style={{ fontWeight: 500, fontSize: 14, color: "var(--amber-deep)" }}>
            {playing ? "Playing..." : hasPlayed ? "Tap to replay" : "Tap to play audio"}
          </div>
          <div style={{ fontSize: 12, color: "var(--amber-deep)", opacity: 0.75, marginTop: 2 }}>
            English audio · Web Speech
          </div>
        </div>
      </button>
      <input
        type="text" className="input-text" placeholder="Type the sentence..."
        value={input} onChange={(e) => setInput(e.target.value)} disabled={answered}
        onKeyDown={(e) => { if (e.key === "Enter" && input.trim()) onAnswer(); }}
      />
      {answered && (
        <div className="feedback feedback-neutral" style={{ marginTop: 12 }}>
          <div style={{ fontWeight: 500, marginBottom: 6 }}>Correct sentence</div>
          <div style={{ fontFamily: "'Fraunces Variable', serif" }}>
            {targetWords.map((w, i) => {
              const iw = inputWords[i];
              const ok = iw === w;
              return (
                <span key={i} style={{ color: ok ? "var(--moss-deep)" : "var(--rust-deep)", fontWeight: ok ? 500 : 400, textDecoration: !ok && iw ? "underline" : "none" }}>
                  {w}{" "}
                </span>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

function WriteExercise({ ex, answered, text, setText, feedback, loading }) {
  const words = text.trim() ? text.trim().split(/\s+/).filter(w => w.length > 0) : [];
  return (
    <div className="fadein">
      <p className="prompt-label">Writing with AI feedback</p>
      <div className="exercise-sentence" style={{ fontSize: 19 }}>{ex.prompt}</div>
      <textarea className="textarea" value={text} onChange={(e) => setText(e.target.value)}
        placeholder="Start writing in English..." disabled={answered || loading} />
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "var(--ink-mute)", marginTop: 6 }}>
        <span>{words.length} {words.length === 1 ? "word" : "words"}</span>
        <span>{ex.minWords}+ words suggested</span>
      </div>
      {loading && (
        <div className="feedback feedback-neutral fadein" style={{ marginTop: 14 }}>
          <span className="spinner" /> <span style={{ marginLeft: 10 }}>Claude가 피드백을 작성하고 있어요...</span>
        </div>
      )}
      {feedback && !loading && (
        <div style={{ marginTop: 14 }}>
          <div className="feedback feedback-good fadein">
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 500, marginBottom: 6 }}>
              <Sparkles size={16} /> 칭찬
            </div>
            <div>{feedback.praise}</div>
          </div>
          <div className="feedback feedback-neutral fadein" style={{ marginTop: 10 }}>
            <div style={{ fontWeight: 500, marginBottom: 6 }}>제안</div>
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              {feedback.suggestions.map((s, i) => <li key={i} style={{ marginBottom: 4 }}>{s}</li>)}
            </ul>
          </div>
          {feedback.corrected && (
            <div className="feedback feedback-neutral fadein" style={{ marginTop: 10, background: "var(--surface)", border: "0.5px solid var(--line)", color: "var(--ink)" }}>
              <div style={{ fontSize: 12, color: "var(--ink-mute)", marginBottom: 6, letterSpacing: "0.06em", textTransform: "uppercase" }}>Polished version</div>
              <div style={{ fontFamily: "'Fraunces Variable', serif", fontStyle: "italic", fontSize: 15 }}>
                "{feedback.corrected}"
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// Lesson runner
// ═══════════════════════════════════════════════════════════════════

function LessonRunner({ lesson, progress, setProgress, onExit, onComplete }) {
  const [idx, setIdx] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [selected, setSelected] = useState(null);
  const [listenInput, setListenInput] = useState("");
  const [writeText, setWriteText] = useState("");
  const [writeFeedback, setWriteFeedback] = useState(null);
  const [writeLoading, setWriteLoading] = useState(false);
  const [writeError, setWriteError] = useState(null);
  const [matchDone, setMatchDone] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [startXp] = useState(progress.xp);

  const ex = lesson.exercises[idx];
  const total = lesson.exercises.length;

  const reset = () => {
    setAnswered(false); setCorrect(false); setSelected(null);
    setListenInput(""); setWriteText(""); setWriteFeedback(null); setWriteLoading(false); setWriteError(null);
    setMatchDone(false);
  };

  const handleCheck = async () => {
    let ok = false;
    if (ex.type === "mcq" || ex.type === "fill") ok = selected === ex.correct;
    else if (ex.type === "listen") {
      const norm = (s) => s.toLowerCase().replace(/[.,!?'"]/g, "").trim().replace(/\s+/g, " ");
      ok = norm(listenInput) === norm(ex.audio);
    } else if (ex.type === "write") {
      setWriteLoading(true); setWriteError(null);
      try {
        const fb = await getWritingFeedback(ex.prompt, writeText);
        setWriteFeedback(fb);
        ok = true;
      } catch (e) {
        setWriteError("피드백 생성에 실패했습니다. 다시 시도해 주세요.");
        setWriteLoading(false);
        return;
      }
      setWriteLoading(false);
    }
    setAnswered(true); setCorrect(ok);
    if (ok) {
      setCorrectCount(c => c + 1);
      setProgress(p => ({ ...p, xp: p.xp + 10 }));
    } else {
      setProgress(p => ({ ...p, hearts: Math.max(0, p.hearts - 1) }));
    }
  };

  const handleMatchComplete = () => {
    setMatchDone(true); setAnswered(true); setCorrect(true);
    setCorrectCount(c => c + 1);
    setProgress(p => ({ ...p, xp: p.xp + 10 }));
  };

  const handleNext = () => {
    if (idx + 1 >= total) {
      onComplete({ correctCount, xpGained: progress.xp - startXp + (correct ? 0 : 0) });
    } else {
      setIdx(idx + 1); reset();
    }
  };

  const canCheck = () => {
    if (answered) return true;
    if (ex.type === "mcq" || ex.type === "fill") return selected !== null;
    if (ex.type === "listen") return listenInput.trim().length > 0;
    if (ex.type === "write") {
      const w = writeText.trim().split(/\s+/).filter(x => x).length;
      return w >= (ex.minWords || 10);
    }
    return false;
  };

  return (
    <div className="app-wrap" style={{ paddingTop: 16 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
        <button className="btn-ghost btn" onClick={onExit}><ArrowLeft size={16} /></button>
        <div className="progress-track" style={{ flex: 1 }}>
          <div className="progress-fill" style={{ width: `${(idx / total) * 100}%` }} />
        </div>
        <div className="stat-pill" style={{ color: "var(--brick-deep)" }}>
          <Heart size={14} fill="var(--brick)" color="var(--brick)" /> {progress.hearts}
        </div>
      </div>

      <div className="card" style={{ padding: 24, minHeight: 320 }}>
        {ex.type === "mcq" && <McqExercise ex={ex} answered={answered} selected={selected} onSelect={setSelected} />}
        {ex.type === "fill" && <FillExercise ex={ex} answered={answered} selected={selected} onSelect={setSelected} />}
        {ex.type === "match" && <MatchExercise ex={ex} onComplete={handleMatchComplete} />}
        {ex.type === "listen" && <ListenExercise ex={ex} answered={answered} onAnswer={handleCheck} input={listenInput} setInput={setListenInput} />}
        {ex.type === "write" && <WriteExercise ex={ex} answered={answered} text={writeText} setText={setWriteText} feedback={writeFeedback} loading={writeLoading} />}
      </div>

      {ex.type !== "match" && answered && (ex.type === "mcq" || ex.type === "fill") && (
        <div className={`feedback ${correct ? "feedback-good" : "feedback-bad"} fadein`} style={{ marginTop: 14 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 500 }}>
            {correct ? <><Check size={16} /> 정답입니다</> : <><X size={16} /> 정답: {ex.options[ex.correct]}</>}
          </div>
        </div>
      )}
      {writeError && <div className="feedback feedback-bad" style={{ marginTop: 14 }}>{writeError}</div>}

      <div style={{ marginTop: 20 }}>
        {ex.type !== "match" ? (
          <button
            className="btn btn-primary"
            style={{ width: "100%", padding: "14px", fontSize: 15 }}
            disabled={!canCheck() || writeLoading}
            onClick={answered ? handleNext : handleCheck}
          >
            {writeLoading ? <><span className="spinner" /> <span style={{ marginLeft: 8 }}>Checking...</span></> : answered ? (idx + 1 >= total ? "Complete lesson" : "Continue") : "Check"}
          </button>
        ) : (
          matchDone && (
            <button className="btn btn-primary" style={{ width: "100%", padding: "14px", fontSize: 15 }} onClick={handleNext}>
              {idx + 1 >= total ? "Complete lesson" : "Continue"}
            </button>
          )
        )}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// Screens
// ═══════════════════════════════════════════════════════════════════

function HomeScreen({ progress, onStart }) {
  const unit = CONTENT.units[0];
  const completedInUnit = unit.lessons.filter(l => progress.completedLessons.includes(l.id)).length;
  return (
    <div className="app-wrap" style={{ paddingTop: 40 }}>
      <div className="hero-kicker">{CONTENT.course.subtitle}</div>
      <h1 className="hero-title serif">{CONTENT.course.titleKo}</h1>
      <p style={{ color: "var(--ink-mute)", fontSize: 14, margin: "0 0 28px" }}>
        {CONTENT.course.titleEn}
      </p>

      <div style={{ display: "flex", gap: 10, marginBottom: 32, flexWrap: "wrap" }}>
        <div className="stat-pill" style={{ color: "var(--amber-deep)" }}>
          <Flame size={14} fill="var(--amber)" color="var(--amber)" /> {progress.streak}일 연속
        </div>
        <div className="stat-pill" style={{ color: "var(--brick-deep)" }}>
          <Zap size={14} fill="var(--brick)" color="var(--brick)" /> {progress.xp} XP
        </div>
        <div className="stat-pill" style={{ color: "var(--moss-deep)" }}>
          <Check size={14} color="var(--moss)" /> {completedInUnit}/{unit.lessons.length} lessons
        </div>
      </div>

      <hr className="hair" style={{ marginBottom: 20 }} />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 16 }}>
        <div>
          <div className="eyebrow">Unit 01</div>
          <h2 className="unit-title serif">{unit.title}</h2>
        </div>
        <div style={{ fontSize: 13, color: "var(--ink-mute)", fontStyle: "italic", fontFamily: "'Fraunces Variable', serif" }}>
          {unit.titleKo}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {unit.lessons.map((lesson, i) => {
          const done = progress.completedLessons.includes(lesson.id);
          const prevDone = i === 0 || progress.completedLessons.includes(unit.lessons[i - 1].id);
          const locked = !done && !prevDone;
          return (
            <div
              key={lesson.id}
              className={`lesson-row ${locked ? "locked" : ""} ${done ? "done" : ""}`}
              onClick={() => !locked && onStart(lesson)}
            >
              <div className="lesson-dot">
                {locked ? <Lock size={16} color="var(--ink-mute)" /> : done ? <Check size={18} color="#FBF7EB" /> : <span style={{ fontFamily: "'Fraunces Variable', serif", fontStyle: "italic", fontSize: 15, color: "var(--ink-soft)" }}>{i + 1}</span>}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 500, fontSize: 15 }}>{lesson.title}</div>
                <div style={{ fontSize: 13, color: "var(--ink-mute)", marginTop: 2 }}>
                  {lesson.titleKo} · {lesson.exercises.length}개 문제
                </div>
              </div>
              {!locked && !done && <div style={{ fontSize: 12, color: "var(--brick)", fontWeight: 500 }}>시작 →</div>}
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: 40, fontSize: 12, color: "var(--ink-mute)", textAlign: "center", fontStyle: "italic", fontFamily: "'Fraunces Variable', serif" }}>
        Content is editable in the CONTENT constant at the top of this file.
      </div>
    </div>
  );
}

function CompleteScreen({ lessonTitle, xpGained, accuracy, onHome }) {
  return (
    <div className="app-wrap" style={{ paddingTop: 80, textAlign: "center" }}>
      <div style={{ marginBottom: 20 }}>
        <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 80, height: 80, borderRadius: "50%", background: "var(--moss-soft)", border: "1px solid var(--moss)" }}>
          <Sparkles size={36} color="var(--moss)" />
        </div>
      </div>
      <div className="hero-kicker">Lesson complete</div>
      <h1 className="hero-title serif" style={{ fontSize: 34, marginBottom: 8 }}>{lessonTitle}</h1>
      <p style={{ color: "var(--ink-mute)", margin: "0 0 36px" }}>완벽하진 않아도 한 걸음 더 나아갔어요.</p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 36, textAlign: "left" }}>
        <div className="card" style={{ padding: 18 }}>
          <div className="eyebrow">XP earned</div>
          <div className="serif" style={{ fontSize: 32, fontWeight: 500, color: "var(--brick)", marginTop: 4 }}>+{xpGained}</div>
        </div>
        <div className="card" style={{ padding: 18 }}>
          <div className="eyebrow">Accuracy</div>
          <div className="serif" style={{ fontSize: 32, fontWeight: 500, color: "var(--moss-deep)", marginTop: 4 }}>{accuracy}%</div>
        </div>
      </div>

      <button className="btn btn-primary" style={{ padding: "14px 32px", fontSize: 15 }} onClick={onHome}>
        Continue
      </button>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// Main
// ═══════════════════════════════════════════════════════════════════

export default function App() {
  const [progress, setProgress] = useState(DEFAULT_PROGRESS);
  const [loaded, setLoaded] = useState(false);
  const [screen, setScreen] = useState("home");
  const [activeLesson, setActiveLesson] = useState(null);
  const [completeData, setCompleteData] = useState(null);

  useEffect(() => {
    loadProgress().then(p => {
      const today = new Date().toDateString();
      if (p.lastDate !== today) {
        const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
        const yDate = yesterday.toDateString();
        p.streak = p.lastDate === yDate ? (p.streak || 0) + 1 : 1;
        p.lastDate = today;
      }
      setProgress(p); setLoaded(true);
    });
    // warm up voices
    if ("speechSynthesis" in window) window.speechSynthesis.getVoices();
  }, []);

  useEffect(() => {
    if (loaded) saveProgress(progress);
  }, [progress, loaded]);

  const handleStart = (lesson) => { setActiveLesson(lesson); setScreen("lesson"); };
  const handleExit = () => setScreen("home");
  const handleComplete = ({ correctCount }) => {
    const acc = Math.round((correctCount / activeLesson.exercises.length) * 100);
    const xpGained = correctCount * 10;
    setProgress(p => ({
      ...p,
      completedLessons: p.completedLessons.includes(activeLesson.id) ? p.completedLessons : [...p.completedLessons, activeLesson.id],
    }));
    setCompleteData({ lessonTitle: activeLesson.title, xpGained, accuracy: acc });
    setScreen("complete");
  };

  if (!loaded) {
    return (
      <div className="app-root">
        <style>{STYLES}</style>
        <div className="app-wrap" style={{ paddingTop: 120, textAlign: "center", color: "var(--ink-mute)" }}>
          <span className="spinner" /> <span style={{ marginLeft: 10, fontSize: 14 }}>Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="app-root">
      <style>{STYLES}</style>
      {screen === "home" && <HomeScreen progress={progress} onStart={handleStart} />}
      {screen === "lesson" && activeLesson && (
        <LessonRunner
          lesson={activeLesson}
          progress={progress}
          setProgress={setProgress}
          onExit={handleExit}
          onComplete={handleComplete}
        />
      )}
      {screen === "complete" && completeData && (
        <CompleteScreen {...completeData} onHome={() => setScreen("home")} />
      )}
    </div>
  );
}
