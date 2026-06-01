import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  BriefcaseBusiness,
  Check,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Compass,
  ExternalLink,
  FileCheck2,
  FileText,
  Flag,
  FolderSearch2,
  GraduationCap,
  Landmark,
  Library,
  ListChecks,
  Menu,
  NotebookPen,
  PlayCircle,
  Search,
  ShieldAlert,
  Sparkles,
  Timer,
  UserRound,
  X,
} from "lucide-react";
import WorkflowDiagram from "./components/WorkflowDiagram";
import { caseLawAnchors, caseLawById } from "./data/caseLaw";
import {
  buyerSegments,
  chapter5Demo,
  practiceModuleReady,
  productPaths,
  renewalReasons,
} from "./data/commercialContent";
import {
  chapters,
  entryPaths,
  groupOrder,
  nativeModules,
  reviewerPrompts,
  sources,
} from "./data/courseData";
import { terminology } from "./data/terminology";

const basePath = import.meta.env.BASE_URL;
const legacyCourseUrl = `${basePath}legacy-course/index.html`;
const backgroundUrl = `${basePath}assets/course-workflow-background.bmp`;
const demoVideoUrl = `${basePath}assets/video/bankruptcy-workflow-demo.mp4`;
const demoVideoPosterUrl = `${basePath}assets/video/bankruptcy-workflow-demo-poster.png`;
const demoVideoCaptionsUrl = `${basePath}assets/video/bankruptcy-workflow-demo-captions.vtt`;

const pathIcons = {
  new: Compass,
  workflow: BriefcaseBusiness,
  review: ClipboardCheck,
  demo: PlayCircle,
};

const groupIcons = {
  Foundations: Compass,
  "Consumer workflow": FileCheck2,
  "Business and disputes": BriefcaseBusiness,
  "Operations and ethics": ShieldAlert,
  "System and local practice": Landmark,
};

function usePersistentState(key, initialValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

function chapterUrl(chapter) {
  return `${legacyCourseUrl}#${chapter.id}`;
}

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function Header({ nextChapter }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const continueUrl = chapterUrl(nextChapter);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-5 px-5 sm:px-8">
          <a className="flex items-center gap-3" href="#home" aria-label="Bankruptcy Workflow Readiness Lab home">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-[#113845] text-sm font-extrabold text-white">
              BW
            </span>
            <span className="hidden leading-tight sm:block">
              <strong className="block text-sm text-slate-900">Bankruptcy Workflow Readiness Lab</strong>
              <span className="block text-xs font-bold uppercase tracking-[0.16em] text-teal-700">B2B training platform</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
            <a className="nav-link" href="#home">Home</a>
            <a className="nav-link" href="#paths">Paths</a>
            <a className="nav-link" href="#demo">Demo</a>
            <a className="button button-dark ml-2" href={continueUrl}>
              Continue <ArrowRight size={16} aria-hidden="true" />
            </a>
          </nav>

          <div className="mobile-header-actions">
            <a className="icon-button mobile-continue-link" href={continueUrl} aria-label="Continue course" title="Continue course">
              <ArrowRight size={19} />
            </a>
            <button
              className="icon-button mobile-menu-button"
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="grid border-t border-slate-200 bg-white px-5 py-4 md:hidden" aria-label="Mobile navigation">
            <a className="mobile-nav-link" href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a className="mobile-nav-link" href="#paths" onClick={() => setMenuOpen(false)}>Paths</a>
            <a className="mobile-nav-link" href="#demo" onClick={() => setMenuOpen(false)}>Demo</a>
            <a className="button button-dark mt-3 justify-center" href={continueUrl}>Continue <ArrowRight size={16} /></a>
          </nav>
        )}
      </header>

      <div className="role-strip">
        <div className="mx-auto flex max-w-7xl items-start gap-3 px-5 py-3 sm:px-8">
          <ShieldAlert className="mt-0.5 shrink-0" size={18} aria-hidden="true" />
          <p>
            <strong>Role boundary:</strong> {terminology.roleBoundaryShort} They cannot give legal advice, select chapters,
            choose exemptions, predict discharge, or decide legal strategy.
          </p>
        </div>
      </div>
    </>
  );
}

function Hero({ nextChapter }) {
  return (
    <section id="home" className="hero-section scroll-mt-28" style={{ "--hero-image": `url(${backgroundUrl})` }}>
      <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.12fr_0.88fr] lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="relative z-10 max-w-3xl"
        >
          <p className="eyebrow text-[#9ce2d6]"><Sparkles size={15} /> Bankruptcy workflow-readiness training</p>
          <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            Train bankruptcy support teams to move from intake to attorney review with more confidence, structure, and safety.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            Learn bankruptcy support work the way real files move. Build practical workflow readiness through guided
            paths, realistic file missions, quality checks, official-source anchors, and attorney-review escalation habits.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="button button-accent" href="#paths">
              Explore training paths <ArrowRight size={17} />
            </a>
            <a className="button button-ghost-light" href="#request-demo">
              Request a workflow demo <BriefcaseBusiness size={17} />
            </a>
            <a className="button button-ghost-light" href="#video-tour">
              <PlayCircle size={17} /> Watch the 25-second tour
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-200">
            <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#9ce2d6]" /> 19 guided chapters</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#9ce2d6]" /> 95 quiz questions</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#9ce2d6]" /> Statewise practice explorer</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#9ce2d6]" /> Supervised-support boundaries</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="relative z-10"
        >
          <div className="mission-preview">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9ce2d6]">Next mission</p>
                <h2 className="mt-1 text-xl font-semibold text-white">Build the first file map</h2>
              </div>
              <span className="grid h-11 w-11 place-items-center rounded-md bg-white/10 text-[#9ce2d6]">
                <FolderSearch2 size={21} />
              </span>
            </div>
            <div className="grid gap-4 p-5">
              <div className="mission-step is-active">
                <span>01</span>
                <div>
                  <strong>Collect neutral intake facts</strong>
                  <p>Names, assets, debts, prior filings, and urgent dates.</p>
                </div>
              </div>
              <div className="mission-step">
                <span>02</span>
                <div>
                  <strong>Organize missing documents</strong>
                  <p>Turn gaps into a clean follow-up list.</p>
                </div>
              </div>
              <div className="mission-step">
                <span>03</span>
                <div>
                  <strong>Escalate legal judgment</strong>
                  <p>Route chapter, exemption, and strategy questions to counsel.</p>
                </div>
              </div>
              <a className="button button-light mt-2 justify-between" href={chapterUrl(nextChapter)}>
                Open chapter {nextChapter.number} <ChevronRight size={17} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const journeySteps = [
  ["01", "Landing", "Understand the promise"],
  ["02", "Choose path", "Start from your goal"],
  ["03", "Demo mode", "Practice one handoff"],
  ["04", "Chapter map", "Pick the right depth"],
  ["05", "Module", "Read the full lesson"],
  ["06", "Practice", "Work the scenario"],
  ["07", "Notes and progress", "Track the learning file"],
  ["08", "Feedback", "Shape the next simulation"],
];

function JourneyRail() {
  return (
    <section className="journey-rail" aria-label="Learning product journey">
      <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8">
        <div className="flex items-center justify-between gap-5">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-teal-700">Workflow-readiness journey</p>
            <p className="mt-1 text-sm font-bold text-slate-600">A practical route from guided learning into supervised support habits</p>
          </div>
          <Flag className="hidden text-teal-700 sm:block" size={21} aria-hidden="true" />
        </div>
        <ol className="journey-steps mt-5">
          {journeySteps.map(([number, title, description]) => (
            <li key={number}>
              <span>{number}</span>
              <strong>{title}</strong>
              <small>{description}</small>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function VideoTour() {
  return (
    <section id="video-tour" className="section scroll-mt-28 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="video-tour-grid">
          <div>
            <p className="kicker">Quick product tour</p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight text-slate-900">See the learning route in 25 seconds.</h2>
            <p className="mt-4 max-w-xl leading-7 text-slate-600">
              Watch the short walkthrough for a fast orientation, then open the interactive demo to practice the
              attorney-review handoff yourself.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a className="button button-dark" href="#demo">
                <PlayCircle size={17} /> Try the interactive demo
              </a>
              <a className="button button-light" href={legacyCourseUrl}>
                <BookOpen size={17} /> Open full course
              </a>
            </div>
            <p className="mt-5 flex items-center gap-2 text-sm font-bold text-slate-500">
              <BadgeCheck size={16} className="text-teal-700" /> Silent walkthrough with on-screen captions
            </p>
          </div>
          <div className="video-frame">
            <video
              aria-label="Bankruptcy Workflow Readiness Lab product tour"
              className="block w-full"
              controls
              muted
              playsInline
              poster={demoVideoPosterUrl}
              preload="metadata"
            >
              <source src={demoVideoUrl} type="video/mp4" />
              <track kind="captions" src={demoVideoCaptionsUrl} srcLang="en" label="English" default />
              Your browser does not support the embedded video. Open the interactive demo below for the guided
              experience.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

function EntryPaths({ selectedPath, setSelectedPath }) {
  const handlePath = (id) => {
    setSelectedPath(id);
    window.setTimeout(() => scrollToSection("path-launchpad"), 0);
  };

  return (
    <section id="paths" className="section scroll-mt-28 bg-[#f4f8f7]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="section-heading">
          <div>
            <p className="kicker">Four ways in</p>
            <h2>Start where the work feels most useful.</h2>
          </div>
          <p>Use a guided path for the first step. The full course remains available underneath every route.</p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {entryPaths.map((path, index) => {
            const Icon = pathIcons[path.id];
            return (
              <motion.article
                key={path.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.06 }}
                className={`path-card ${selectedPath === path.id ? "is-selected" : ""}`}
              >
                <span className="path-icon"><Icon size={20} /></span>
                <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.16em] text-teal-700">{path.eyebrow}</p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900">{path.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{path.description}</p>
                <button className="mt-5 flex items-center gap-2 text-sm font-extrabold text-[#0c6770]" type="button" onClick={() => handlePath(path.id)}>
                  {path.action} <ChevronRight size={16} />
                </button>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PathLaunchpad({ selectedPath }) {
  const path = entryPaths.find((item) => item.id === selectedPath) ?? entryPaths[0];
  const recommendedChapter = chapters.find((chapter) => chapter.number === path.chapter) ?? chapters[0];
  const PathIcon = pathIcons[path.id];

  return (
    <section id="path-launchpad" className="scroll-mt-28 bg-[#f4f8f7] pb-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          key={path.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="launchpad"
        >
          <div className="launchpad-intro">
            <span className="path-icon"><PathIcon size={20} /></span>
            <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.16em] text-teal-700">Selected path</p>
            <h2 className="mt-2 text-3xl font-semibold leading-tight text-slate-900">{path.title}</h2>
            <p className="mt-3 max-w-xl leading-7 text-slate-600">{path.mission}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="button button-dark" href={`#${path.destination}`}>
                {path.destinationLabel} <ArrowRight size={16} />
              </a>
              <a className="button button-light" href={chapterUrl(recommendedChapter)}>
                Open recommended module <ExternalLink size={15} />
              </a>
            </div>
          </div>
          <div className="launchpad-plan">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-teal-700">Your first mission</p>
            <h3 className="mt-2 text-xl font-semibold text-slate-900">{path.focus}</h3>
            <ol className="mt-5 grid gap-3">
              {path.steps.map((step, index) => (
                <li className="launchpad-step" key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{step}</strong>
                </li>
              ))}
            </ol>
            <p className="mt-5 text-sm font-bold text-slate-500">Recommended start: Chapter {recommendedChapter.number}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Dashboard({ learnerName, setLearnerName, completed, toggleCompleted, nextChapter }) {
  const progress = Math.round((completed.length / chapters.length) * 100);

  return (
    <section id="dashboard" className="section scroll-mt-28 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="kicker">Learner dashboard</p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight text-slate-900">Keep the next useful task in view.</h2>
            <p className="mt-4 max-w-xl leading-7 text-slate-600">
              Progress is stored in this browser. Use the chapter dashboard below for the full learning map.
            </p>
            <label className="mt-7 block max-w-md">
              <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-slate-500">Learner name</span>
              <span className="mt-2 flex items-center gap-3 border-b-2 border-slate-300 pb-3 focus-within:border-teal-700">
                <UserRound className="text-slate-400" size={19} />
                <input
                  className="w-full bg-transparent text-lg text-slate-900 outline-none placeholder:text-slate-400"
                  value={learnerName}
                  onChange={(event) => setLearnerName(event.target.value)}
                  placeholder="Enter your name"
                />
              </span>
            </label>
          </div>

          <div className="dashboard-panel">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 px-6 py-5">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-teal-700">Current route</p>
                <h3 className="mt-1 text-2xl font-semibold text-slate-900">{learnerName ? `${learnerName}'s learning file` : "Your learning file"}</h3>
              </div>
              <span className="progress-badge">{progress}% complete</span>
            </div>
            <div className="grid gap-5 p-6 md:grid-cols-[1fr_auto]">
              <div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                  <div className="h-full rounded-full bg-teal-700 transition-all" style={{ width: `${progress}%` }} />
                </div>
                <p className="mt-2 text-sm text-slate-500">{completed.length} of {chapters.length} chapters marked complete</p>
              </div>
              <a className="button button-dark md:self-start" href={chapterUrl(nextChapter)}>
                Continue <ArrowRight size={16} />
              </a>
            </div>
            <div className="grid border-t border-slate-200 sm:grid-cols-2">
              <div className="p-6">
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-slate-500">Next mission</p>
                <p className="mt-3 text-lg font-semibold text-slate-900">Chapter {nextChapter.number}: {nextChapter.title}</p>
              </div>
              <div className="border-t border-slate-200 p-6 sm:border-l sm:border-t-0">
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-slate-500">Skill focus</p>
                <p className="mt-3 text-lg font-semibold text-slate-900">{nextChapter.skill}</p>
              </div>
            </div>
            {completed.length > 0 && (
              <button className="flex items-center gap-2 border-t border-slate-200 px-6 py-4 text-sm font-bold text-teal-700" type="button" onClick={() => toggleCompleted(nextChapter.number)}>
                <Check size={16} /> Update next chapter status
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseLawCard({ caseItem }) {
  return (
    <article className="case-law-card">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-teal-700">Official case-law anchor</p>
          <h4 className="mt-2 text-xl font-semibold text-slate-900">{caseItem.caseName}</h4>
          <p className="mt-1 text-sm font-bold text-slate-500">{caseItem.citation}</p>
        </div>
        <a className="button button-light" href={caseItem.sourceUrl} target="_blank" rel="noreferrer">
          Official source <ExternalLink size={15} />
        </a>
      </div>
      <div className="case-law-grid mt-5">
        <div>
          <strong>Why it matters</strong>
          <p>{caseItem.whyItMatters}</p>
        </div>
        <div>
          <strong>In plain English</strong>
          <p>{caseItem.courtSaid}</p>
        </div>
        <div>
          <strong>Support-work impact</strong>
          <p>{caseItem.supportImpact}</p>
        </div>
        <div>
          <strong>Attorney-review boundary</strong>
          <p>{caseItem.attorneyReview}</p>
        </div>
      </div>
    </article>
  );
}

function Demo() {
  const [answer, setAnswer] = useState("");
  const [showNote, setShowNote] = useState(false);
  const isCorrect = answer === "escalate";

  return (
    <section id="demo" className="section scroll-mt-28 bg-[#102f3a] text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="eyebrow text-[#9ce2d6]"><Timer size={15} /> {chapter5Demo.duration}</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight">Bankruptcy Support Workflow Demo</h2>
            <p className="mt-4 leading-7 text-slate-200">
              Review one urgent-intake workflow from caller facts to an attorney-review packet. The point is disciplined
              support work, not a legal conclusion.
            </p>
            <div className="mt-7 grid gap-3 text-sm text-slate-200">
              <span className="flex items-center gap-3"><CheckCircle2 size={17} className="text-[#9ce2d6]" /> Intake facts</span>
              <span className="flex items-center gap-3"><CheckCircle2 size={17} className="text-[#9ce2d6]" /> Decision discipline</span>
              <span className="flex items-center gap-3"><CheckCircle2 size={17} className="text-[#9ce2d6]" /> Attorney-review note</span>
            </div>
          </div>

          <div className="demo-panel">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#9ce2d6]">Flagship intake simulation</p>
                <h3 className="mt-1 text-xl font-semibold">{chapter5Demo.title}</h3>
              </div>
              <span className="rounded-md border border-white/15 px-3 py-2 text-xs font-bold text-slate-200">Step 1 of 3</span>
            </div>
            <div className="p-5 sm:p-6">
              <p className="leading-7 text-slate-100">
                Elena calls at 3:00 p.m. She says her home foreclosure sale is tomorrow at 10:00 a.m. She filed a
                Chapter 13 case last year that was dismissed. She asks whether filing again will stop the sale.
              </p>
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="font-semibold">What is the best support-team response?</p>
                <div className="mt-4 grid gap-3">
                  {[
                    ["promise", "Tell Elena a new filing will stop the sale."],
                    ["select", "Recommend the chapter that seems most likely to help."],
                    ["escalate", "Collect the facts, flag the urgent deadline, and route the stay question to attorney review."],
                  ].map(([value, label]) => (
                    <label className={`demo-choice ${answer === value ? "is-selected" : ""}`} key={value}>
                      <input type="radio" name="demo-answer" value={value} checked={answer === value} onChange={(event) => setAnswer(event.target.value)} />
                      <span>{label}</span>
                    </label>
                  ))}
                </div>
                {answer && (
                  <p className={`mt-4 text-sm font-bold ${isCorrect ? "text-[#9ce2d6]" : "text-[#ffd2b8]"}`}>
                    {isCorrect
                      ? "Correct. The support team documents facts and urgency, then escalates legal judgment."
                      : "Try again. The response needs to preserve attorney review for the legal conclusion."}
                  </p>
                )}
              </div>
              <button className="button button-accent mt-6" type="button" disabled={!isCorrect} onClick={() => setShowNote(true)}>
                Reveal escalation note <ArrowRight size={16} />
              </button>
              {showNote && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-6 rounded-md border border-[#9ce2d6]/35 bg-[#9ce2d6]/10 p-4">
                  <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#9ce2d6]">Attorney-review escalation note</p>
                  <p className="mt-2 text-sm leading-6 text-slate-100">
                    Client reports foreclosure sale tomorrow at 10:00 a.m. and a prior Chapter 13 dismissal last year.
                    Please review filing options, repeat-filing facts, and stay timing urgently. The support team has
                    not advised whether a new filing will stop the sale.
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        <div className="buyer-demo-workbench">
          <div className="buyer-demo-workbench__intro">
            <div>
              <p className="eyebrow text-teal-700"><ListChecks size={15} /> Clickable workflow map</p>
              <h3>See how an urgent intake packet moves.</h3>
            </div>
            <p>{chapter5Demo.task}</p>
          </div>
          <WorkflowDiagram nodes={chapter5Demo.workflowNodes} />

          <div className="work-product-grid">
            <article>
              <p className="module-label">Missing-document list</p>
              <ul>
                {chapter5Demo.documents.map((item) => <li key={item}><Check size={15} /> {item}</li>)}
              </ul>
            </article>
            <article>
              <p className="module-label">Support professionals can</p>
              <ul>
                {chapter5Demo.canDo.map((item) => <li key={item}><Check size={15} /> {item}</li>)}
              </ul>
            </article>
            <article className="work-product-grid__warning">
              <p className="module-label">Support professionals must not</p>
              <ul>
                {chapter5Demo.mustNot.map((item) => <li key={item}><ShieldAlert size={15} /> {item}</li>)}
              </ul>
            </article>
            <article>
              <p className="module-label">Urgent-intake QC checklist</p>
              <ul>
                {chapter5Demo.qcChecklist.map((item) => <li key={item}><ClipboardCheck size={15} /> {item}</li>)}
              </ul>
            </article>
          </div>

          <div className="escalation-note-example">
            <p className="module-label">Attorney-review escalation note example</p>
            <p>{chapter5Demo.escalationNote}</p>
          </div>

          <CaseLawCard caseItem={caseLawById.fulton} />
        </div>
      </div>
    </section>
  );
}

function ChapterDashboard({ completed, toggleCompleted }) {
  const [group, setGroup] = useState("All chapters");
  const [query, setQuery] = useState("");
  const filteredChapters = useMemo(() => {
    return chapters.filter((chapter) => {
      const matchesGroup = group === "All chapters" || chapter.group === group;
      const matchesQuery = `${chapter.title} ${chapter.description} ${chapter.skill}`.toLowerCase().includes(query.toLowerCase());
      return matchesGroup && matchesQuery;
    });
  }, [group, query]);

  return (
    <section id="chapters" className="section scroll-mt-28 bg-[#f7f8f6]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="section-heading">
          <div>
            <p className="kicker">19-chapter course</p>
            <h2>Choose a native module or open the full reader.</h2>
          </div>
          <p>Five priority chapters now open as training-platform modules. Every chapter remains available in the Full Course Reader.</p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_340px]">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Chapter group filters">
            {groupOrder.map((item) => (
              <button className={`filter-button ${group === item ? "is-active" : ""}`} type="button" key={item} onClick={() => setGroup(item)}>
                {item}
              </button>
            ))}
          </div>
          <label className="search-box">
            <Search size={17} className="text-slate-400" />
            <span className="sr-only">Search chapters</span>
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search chapters or skills" />
          </label>
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredChapters.map((chapter) => {
            const complete = completed.includes(chapter.number);
            const hasNativeModule = nativeModules.some((module) => module.chapter === chapter.number);
            const isPracticeReady = practiceModuleReady.includes(chapter.number);
            const GroupIcon = groupIcons[chapter.group];
            return (
              <article className="chapter-card" key={chapter.id}>
                <div className="flex items-start justify-between gap-4">
                  <span className="chapter-number">{String(chapter.number).padStart(2, "0")}</span>
                  <button
                    className={`chapter-check ${complete ? "is-complete" : ""}`}
                    type="button"
                    onClick={() => toggleCompleted(chapter.number)}
                    aria-label={complete ? `Mark chapter ${chapter.number} incomplete` : `Mark chapter ${chapter.number} complete`}
                    title={complete ? "Mark incomplete" : "Mark complete"}
                  >
                    <Check size={16} />
                  </button>
                </div>
                <p className="mt-5 flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.14em] text-teal-700">
                  <GroupIcon size={15} /> {chapter.group}
                </p>
                {isPracticeReady && (
                  <p className="practice-ready-badge">
                    <BadgeCheck size={14} /> {chapter.number === 5 ? "Flagship practice sample" : "Practice-module ready"}
                  </p>
                )}
                <h3 className="mt-2 text-xl font-semibold leading-snug text-slate-900">{chapter.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{chapter.description}</p>
                <div className="mt-auto border-t border-slate-200 pt-4">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">Skill focus</p>
                  <p className="mt-1 text-sm font-bold text-slate-700">{chapter.skill}</p>
                  {hasNativeModule ? (
                    <a className="mt-4 flex items-center gap-2 text-sm font-extrabold text-[#0c6770]" href={`#native-module-${chapter.number}`}>
                      Open native module <ArrowRight size={15} />
                    </a>
                  ) : (
                    <a className="mt-4 flex items-center gap-2 text-sm font-extrabold text-[#0c6770]" href={chapterUrl(chapter)}>
                      Open in Full Course Reader <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhoBuiltFor() {
  return (
    <section className="section bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="section-heading">
          <div>
            <p className="kicker">Who this is built for</p>
            <h2>A practical learning layer for teams supporting bankruptcy workflows.</h2>
          </div>
          <p>
            Use the platform to support onboarding, workflow refreshers, quality conversations, and supervised
            practice. It is a training aid, not a substitute for attorney instruction or firm procedures.
          </p>
        </div>
        <div className="buyer-grid mt-8">
          {buyerSegments.map((segment) => (
            <article className="buyer-card" key={segment.title}>
              <BriefcaseBusiness size={19} aria-hidden="true" />
              <h3>{segment.title}</h3>
              <p>{segment.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnswerSet({ legend, options, selected, setSelected }) {
  return (
    <fieldset className="mt-4 grid gap-3">
      <legend className="font-semibold text-slate-900">{legend}</legend>
      {options.map((option, index) => (
        <label className={`module-choice ${selected === index ? "is-selected" : ""}`} key={option}>
          <input
            type="radio"
            name={legend}
            checked={selected === index}
            onChange={() => setSelected(index)}
          />
          <span>{option}</span>
        </label>
      ))}
    </fieldset>
  );
}

function NativeModuleWorkspace({ completed, toggleCompleted }) {
  const [activeChapter, setActiveChapter] = usePersistentState("bwl-native-module", 1);
  const [boundaryChoice, setBoundaryChoice] = useState(null);
  const [knowledgeChoice, setKnowledgeChoice] = useState(null);
  const [notes, setNotes] = usePersistentState("bwl-native-module-notes", {});
  const module = nativeModules.find((item) => item.chapter === activeChapter) ?? nativeModules[0];
  const chapter = chapters.find((item) => item.number === module.chapter);
  const moduleSources = sources.filter((source) => module.sources.includes(source.title));
  const isComplete = completed.includes(module.chapter);

  const selectModule = (chapterNumber) => {
    setActiveChapter(chapterNumber);
    setBoundaryChoice(null);
    setKnowledgeChoice(null);
    window.setTimeout(() => scrollToSection(`native-module-${chapterNumber}`), 0);
  };

  return (
    <section id="native-modules" className="section scroll-mt-28 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="section-heading">
          <div>
            <p className="kicker">Native training modules</p>
            <h2>Work inside the platform before opening the reader.</h2>
          </div>
          <p>Start with the five priority modules. The Full Course Reader remains available for the complete chapter experience.</p>
        </div>

        <div className="mt-8 flex gap-2 overflow-x-auto pb-2" aria-label="Priority native modules">
          {nativeModules.map((item) => (
            <button
              className={`module-tab ${module.chapter === item.chapter ? "is-active" : ""}`}
              key={item.chapter}
              type="button"
              onClick={() => selectModule(item.chapter)}
            >
              <span>{String(item.chapter).padStart(2, "0")}</span>
              {item.shortTitle}
            </button>
          ))}
        </div>

        <article id={`native-module-${module.chapter}`} className="module-workspace scroll-mt-28">
          <header className="module-header">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#9ce2d6]">Native module · Chapter {module.chapter}</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">{chapter.title}</h2>
              <p className="mt-3 max-w-3xl leading-7 text-slate-200">{module.summary}</p>
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-slate-300">Last reviewed: [month/year]</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className={`button ${isComplete ? "button-accent" : "button-light"}`} type="button" onClick={() => toggleCompleted(module.chapter)}>
                <CheckCircle2 size={17} /> {isComplete ? "Marked complete" : "Mark module complete"}
              </button>
              <a className="button button-ghost-light" href={chapterUrl(chapter)}>
                <BookOpen size={17} /> Full Course Reader
              </a>
            </div>
          </header>

          <div className="module-grid">
            <section className="module-section">
              <p className="module-label">Why this matters in support work</p>
              <p className="mt-3 leading-7 text-slate-700">{module.whyItMatters}</p>
            </section>
            <section className="module-section">
              <p className="module-label">Key learning outcomes</p>
              <ul className="mt-3 grid gap-2">
                {module.outcomes.map((outcome) => <li className="module-list-item" key={outcome}><Check size={15} /> {outcome}</li>)}
              </ul>
            </section>
          </div>

          <section className="module-section border-t border-slate-200">
            <p className="module-label">Terminology coach</p>
            <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {module.terminology.map(([term, meaning, example]) => (
                <article className="term-card-native" key={term}>
                  <strong>{term}</strong>
                  <p>{meaning}</p>
                  <small>{example}</small>
                </article>
              ))}
            </div>
          </section>

          <section className="module-section border-t border-slate-200">
            <p className="module-label">Practical workflow map</p>
            {module.chapter === 5 ? (
              <div className="mt-4">
                <WorkflowDiagram nodes={chapter5Demo.workflowNodes} />
              </div>
            ) : (
              <ol className="workflow-map mt-4">
                {module.workflow.map((step, index) => (
                  <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong></li>
                ))}
              </ol>
            )}
          </section>

          <div className="module-grid border-t border-slate-200">
            <section className="module-section">
              <p className="module-label">Realistic support-task scenario</p>
              <p className="mt-3 leading-7 text-slate-700">{module.scenario}</p>
              <div className="mt-5 rounded-md bg-[#fff4f4] p-4 text-sm leading-6 text-[#7d2639]">
                <strong>Role reminder:</strong> collect facts, preserve urgency, and route legal judgment to attorney review.
              </div>
            </section>
            <section className="module-section">
              <p className="module-label">Decision-boundary checkpoint</p>
              <AnswerSet legend={module.boundaryQuestion} options={module.boundaryOptions} selected={boundaryChoice} setSelected={setBoundaryChoice} />
              {boundaryChoice !== null && (
                <p className={`module-feedback ${boundaryChoice === module.boundaryAnswer ? "is-correct" : "is-review"}`}>
                  {boundaryChoice === module.boundaryAnswer ? module.boundaryFeedback : "Review the role boundary. The legal conclusion belongs with supervising counsel."}
                </p>
              )}
            </section>
          </div>

          <div className="module-grid border-t border-slate-200">
            <section className="module-section">
              <p className="module-label">Knowledge check</p>
              <AnswerSet legend={module.knowledgeQuestion} options={module.knowledgeOptions} selected={knowledgeChoice} setSelected={setKnowledgeChoice} />
              {knowledgeChoice !== null && (
                <p className={`module-feedback ${knowledgeChoice === module.knowledgeAnswer ? "is-correct" : "is-review"}`}>
                  {knowledgeChoice === module.knowledgeAnswer ? module.knowledgeFeedback : "Take another look at the workflow goal and try again."}
                </p>
              )}
            </section>
            <section className="module-section bg-[#eef7f5]">
              <p className="module-label">Attorney-review escalation note example</p>
              <p className="mt-3 text-sm leading-7 text-slate-700">{module.escalationNote}</p>
            </section>
          </div>

          <div className="module-grid border-t border-slate-200">
            <section className="module-section">
              <p className="module-label">Official source anchors</p>
              <div className="mt-4 grid gap-2">
                {moduleSources.map((source) => (
                  <a className="module-source" href={source.url} target="_blank" rel="noreferrer" key={source.title}>
                    <Library size={16} /> {source.title} <ExternalLink className="ml-auto" size={14} />
                  </a>
                ))}
              </div>
            </section>
            <section className="module-section">
              <p className="module-label">My module notes</p>
              <label>
                <span className="sr-only">Notes for chapter {module.chapter}</span>
                <textarea
                  className="module-notes mt-4"
                  value={notes[module.chapter] ?? ""}
                  onChange={(event) => setNotes((current) => ({ ...current, [module.chapter]: event.target.value }))}
                  placeholder="Capture questions, follow-up items, and attorney-review reminders."
                />
              </label>
            </section>
          </div>
          {module.chapter === 5 && (
            <section className="module-section border-t border-slate-200 bg-[#f7faf9]">
              <CaseLawCard caseItem={caseLawById.fulton} />
            </section>
          )}
        </article>
      </div>
    </section>
  );
}

function ProductModel() {
  return (
    <section className="section bg-[#eff4f3]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="section-heading">
          <div>
            <p className="kicker">Commercial training model</p>
            <h2>Start with foundations, then build repeatable workflow habits.</h2>
          </div>
          <p>
            These product paths support buyer review and supervised implementation planning. Scope, pricing,
            integrations, and reporting can be defined after a workflow conversation.
          </p>
        </div>
        <div className="product-path-grid mt-8">
          {productPaths.map((path, index) => (
            <article className="product-path-card" key={path.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{path.label}</p>
              <h3>{path.title}</h3>
              <small>{path.copy}</small>
            </article>
          ))}
        </div>
        <div className="renewal-panel mt-8">
          <div>
            <p className="kicker">Why teams may keep using it</p>
            <h3>Workflow readiness is reinforced through repetition, review, and expansion.</h3>
          </div>
          <ul>
            {renewalReasons.map((reason) => <li key={reason}><CheckCircle2 size={17} /> {reason}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

function RequestDemo() {
  return (
    <section id="request-demo" className="scroll-mt-28 bg-[#113845] py-14 text-white">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 px-5 sm:px-8 lg:flex-row lg:items-center">
        <div>
          <p className="eyebrow text-[#9ce2d6]"><BriefcaseBusiness size={15} /> Buyer conversation</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight">Request a workflow demo for your team.</h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-200">
            Review the urgent-intake sample, discuss your supervised workflows, and identify which practice task should
            become the next simulation.
          </p>
        </div>
        <a className="button button-accent shrink-0" href="mailto:?subject=Bankruptcy%20Workflow%20Readiness%20Lab%20demo%20request">
          Request a workflow demo <ArrowRight size={17} />
        </a>
      </div>
    </section>
  );
}

function SourceLocker() {
  return (
    <section className="section bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="section-heading">
          <div>
            <p className="kicker">Official source locker</p>
            <h2>Train with authority anchors in reach.</h2>
          </div>
          <p>Bankruptcy law, rules, forms, and data change. Use these official sources as verification points before live work.</p>
        </div>
        <div className="mt-8 grid border-x border-t border-slate-200 md:grid-cols-2 xl:grid-cols-3">
          {sources.map((source) => (
            <a className="source-row" href={source.url} target="_blank" rel="noreferrer" key={source.title}>
              <span className="source-icon"><Library size={18} /></span>
              <span>
                <small>{source.type}</small>
                <strong>{source.title}</strong>
              </span>
              <ExternalLink className="ml-auto shrink-0 text-slate-400" size={16} />
            </a>
          ))}
        </div>
        <div className="mt-12">
          <p className="kicker">Case-law anchor library</p>
          <h3 className="mt-3 text-2xl font-semibold text-slate-900">Official case links for supervised discussion.</h3>
          <p className="mt-3 max-w-3xl leading-7 text-slate-600">
            These anchors help teams connect workflow habits to legal context. They are discussion starting points, not
            legal conclusions for a live matter.
          </p>
          <div className="mt-6 grid border-x border-t border-slate-200 md:grid-cols-2 xl:grid-cols-3">
            {caseLawAnchors.map((caseItem) => (
              <a className="source-row" href={caseItem.sourceUrl} target="_blank" rel="noreferrer" key={caseItem.id}>
                <span className="source-icon"><Landmark size={18} /></span>
                <span>
                  <small>{caseItem.citation}</small>
                  <strong>{caseItem.caseName}</strong>
                </span>
                <ExternalLink className="ml-auto shrink-0 text-slate-400" size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewSection() {
  const [copied, setCopied] = useState(false);

  const copyPrompts = async () => {
    await navigator.clipboard.writeText(reviewerPrompts.map((prompt) => `- ${prompt}`).join("\n"));
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="review" className="section scroll-mt-28 bg-[#eff4f3]">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr]">
        <div>
          <p className="kicker">Reviewer room</p>
          <h2 className="mt-3 text-4xl font-semibold leading-tight text-slate-900">Help shape the next simulation.</h2>
          <p className="mt-4 max-w-xl leading-7 text-slate-600">
            This platform is designed for supervised workflow-readiness training. Licensed U.S. bankruptcy attorney
            review remains appropriate before commercial use, certification use, or client-facing training.
          </p>
          <a className="button button-dark mt-7" href={legacyCourseUrl}>
            <BookOpen size={17} /> Open Full Course Reader
          </a>
        </div>
        <div className="review-panel">
          <div className="flex items-center justify-between gap-4 border-b border-slate-200 px-5 py-4">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-teal-700">Feedback prompts</p>
              <h3 className="mt-1 text-xl font-semibold text-slate-900">Review the learner journey</h3>
            </div>
            <button className="icon-button" type="button" onClick={copyPrompts} title="Copy feedback prompts" aria-label="Copy feedback prompts">
              {copied ? <Check size={18} /> : <ClipboardCheck size={18} />}
            </button>
          </div>
          <ol className="grid gap-0">
            {reviewerPrompts.map((prompt, index) => (
              <li className="flex gap-4 border-b border-slate-200 px-5 py-4 last:border-b-0" key={prompt}>
                <span className="text-sm font-extrabold text-teal-700">{String(index + 1).padStart(2, "0")}</span>
                <span className="text-sm font-semibold leading-6 text-slate-700">{prompt}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function LegalNotice() {
  return (
    <section className="bg-[#7d2639] py-8 text-white">
      <div className="mx-auto flex max-w-7xl items-start gap-4 px-5 sm:px-8">
        <ShieldAlert className="mt-1 shrink-0" size={24} />
        <div>
          <h2 className="text-xl font-semibold">Training notice and role boundary</h2>
          <p className="mt-2 max-w-5xl text-sm leading-6 text-rose-50">
            This resource is educational material for supervised legal-support training. It is not legal advice and
            does not create an attorney-client relationship. {terminology.roleBoundaryFull} Bankruptcy forms, dollar
            amounts, means-test data, state exemption law, domicile questions, local rules, court procedures, ethics
            rules, and firm policies can change or vary by matter. Verify current official sources and
            supervising-attorney instructions before applying a concept to live work.
          </p>
        </div>
      </div>
    </section>
  );
}

function App() {
  const [learnerName, setLearnerName] = usePersistentState("bwl-learner-name", "");
  const [completed, setCompleted] = usePersistentState("bwl-completed-chapters", []);
  const [selectedPath, setSelectedPath] = usePersistentState("bwl-selected-path", "new");
  const nextChapter = chapters.find((chapter) => !completed.includes(chapter.number)) ?? chapters[0];

  const toggleCompleted = (number) => {
    setCompleted((current) => current.includes(number) ? current.filter((item) => item !== number) : [...current, number]);
  };

  return (
    <>
      <Header nextChapter={nextChapter} />
      <main>
        <Hero nextChapter={nextChapter} />
        <JourneyRail />
        <WhoBuiltFor />
        <EntryPaths selectedPath={selectedPath} setSelectedPath={setSelectedPath} />
        <PathLaunchpad selectedPath={selectedPath} />
        <Dashboard learnerName={learnerName} setLearnerName={setLearnerName} completed={completed} toggleCompleted={toggleCompleted} nextChapter={nextChapter} />
        <VideoTour />
        <Demo />
        <ChapterDashboard completed={completed} toggleCompleted={toggleCompleted} />
        <NativeModuleWorkspace completed={completed} toggleCompleted={toggleCompleted} />
        <ProductModel />
        <RequestDemo />
        <SourceLocker />
        <ReviewSection />
        <LegalNotice />
      </main>
      <footer className="bg-[#0c252e] py-7 text-sm text-slate-300">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 sm:px-8">
          <span className="font-bold text-white">Bankruptcy Workflow Readiness Lab</span>
          <span>Supervised workflow-readiness training platform</span>
        </div>
      </footer>
    </>
  );
}

export default App;
