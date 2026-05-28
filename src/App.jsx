import { useEffect } from "react";
import huntmaps from "./assets/screenshots/huntmaps.PNG";
import heroVideo from "./assets/video/hero.mp4";
import windtool from "./assets/screenshots/windtool.PNG";
import rackintel from "./assets/screenshots/rackintel.PNG";
import buckbrain1 from "./assets/screenshots/buckbrain1.PNG";
import buckbrain2 from "./assets/screenshots/buckbrain2.PNG";
import genetic1 from "./assets/screenshots/genetic1.jpeg";
import genetic2 from "./assets/screenshots/genetic2.jpeg";
import trophyroom1 from "./assets/screenshots/trophyroom1.jpeg";
import trophyroom2 from "./assets/screenshots/trophyroom2.jpeg";
import homepage1 from "./assets/screenshots/homepage1.jpeg";
import homepage2 from "./assets/screenshots/homepage2.jpeg";
import leaderboard1 from "./assets/screenshots/leaderboard1.jpeg";
import leaderboard2 from "./assets/screenshots/leaderboard2.jpeg";
import bucktracker3 from "./assets/screenshots/bucktracker3.jpeg";
import bucktracker4 from "./assets/screenshots/bucktracker4.jpeg";
import { FaInstagram, FaTiktok } from "react-icons/fa";

const racklogLogo = "/racklog-logo2.png";
const GOLD = "#D4A017";
const GOLD_LIGHT = "#F5D68D";
const PANEL = "rgba(6,6,6,.82)";
const GOLD_LINE = "rgba(212,160,23,.36)";

const features = [
  {
    icon: "🗺️",
    title: "HuntMaps",
    text: "Scout stands, cameras, routes, habitat, parcels, public land, terrain, wind, thermals, terrain-driven scent pull, and drift.",
  },
  {
    icon: "🧠",
    title: "Buck Brain",
    text: "Feed it hunts, cameras, sightings, wind, and pressure — then watch the prediction model sharpen.",
  },
  {
    icon: "🔎",
    title: "Rack Intel",
    text: "Read bedding zones, travel corridors, pressure edges, and confidence directly on the property map.",
  },
  {
    icon: "🎯",
    title: "Buck Profiles",
    text: "Lock in on one buck with photos, sightings, notes, locations, patterns, and timeline history.",
  },
  {
    icon: "📈",
    title: "Target Buck Patterns",
    text: "Find the winds, moon phases, temperatures, and sit times that keep getting your buck on his feet.",
  },
  {
    icon: "📸",
    title: "Trail Cam Intel",
    text: "Turn camera pulls into daylight trends, movement clues, and better reads on hit-list bucks.",
  },
  {
    icon: "🧬",
    title: "Buck Potential",
    text: "Estimate age class, current rack size, genetic upside, and what that deer could become next season.",
  },
  {
    icon: "🦌",
    title: "RackScan",
    text: "Score bucks, estimate class, save measurements, and build polished RackLog trophy cards.",
  },
  {
    icon: "🏆",
    title: "Trophy Room",
    text: "Save every buck with score, rarity, county, hunter, story, and the season behind it.",
  },
  {
    icon: "🥇",
    title: "Verified Leaderboards",
    text: "Compete for county, state, season, and all-time trophy board spots with verified RackLog cards.",
  },
  {
    icon: "📡",
    title: "RackCast",
    text: "Read hunt conditions, stand timing, and movement windows before you ever climb in.",
  },
  {
    icon: "📝",
    title: "Log Hunt",
    text: "Log wind, sightings, weather, pressure, field notes, and outcomes after every sit.",
  },
  {
    icon: "🍂",
    title: "Today’s Hunt",
    text: "Plan the sit, track the day, and keep your season organized around real conditions.",
  },
  {
    icon: "🩸",
    title: "RackRecovery",
    text: "Analyze shot placement, blood sign, wait time, and recovery risk before taking up the track.",
  },
  {
    icon: "⭐",
    title: "Badges & Ranks",
    text: "Earn XP, unlock achievements, climb ranks, and build your RackLog legacy.",
  },
];

const story = [
  {
    label: "COMMAND CENTER",
    title: "Your Entire Hunting Season. One Ecosystem.",
    copy:
      "Open RackLog and everything connects — maps, target bucks, trail cam history, hunt logs, trophy cards, recovery tools, rankings, and the decisions that shape your season.",
    images: [homepage1, homepage2],
    reverse: false,
    mode: "double",
  },
  {
    label: "HUNTMAPS",
    title: "Wind, Thermals, Terrain, And Property Intel In One Map.",
    copy:
      "Build your property before the hunt. Mark stands, cameras, habitat, routes, private parcels, public land, wind direction, thermal pull, terrain-driven thermals, scent drift, and bedding reads in one tactical view.",
    images: [huntmaps, windtool],
    reverse: true,
    mode: "double",
  },
  {
    label: "BUCK BRAIN + RACK INTEL",
    title: "The More You Feed It, The Smarter It Hunts.",
    copy:
      "Buck Brain improves as you add trail cam photos, hunt logs, sightings, stands, wind, pressure, and target buck history. RackLog turns your data into a living prediction model for when and where that buck is most killable.",
    images: [buckbrain1, rackintel, buckbrain2],
    reverse: false,
    mode: "largeTriple",
  },
  {
    label: "TARGET BUCK PATTERNING",
    title: "Find The Conditions That Move Your Buck.",
    copy:
      "Stop guessing. RackLog studies your target buck’s wind, moon, temperature, movement window, location, and sighting history so you can pick the stand that gives you the best chance when it matters.",
    images: [bucktracker3, bucktracker4],
    reverse: true,
    mode: "doubleFeature",
  },
  {
    label: "BUCK POTENTIAL",
    title: "Score, Age, And Read Future Potential.",
    copy:
      "Trail cam photos become more than pictures. RackLog helps estimate current rack size, age class, genetic potential, and next-year ceiling so you know what kind of deer you’re watching.",
    images: [genetic1, genetic2],
    reverse: false,
    mode: "double",
  },
  {
    label: "TROPHY ROOM",
    title: "Make Every Buck Share-Worthy.",
    copy:
      "Save polished trophy cards with score, age read, hunter, county, season details, rarity tiers, and the story behind the deer.",
    images: [trophyroom1, trophyroom2],
    reverse: true,
    mode: "double",
  },
  {
    label: "VERIFIED LEADERBOARDS",
    title: "Compete For County Bragging Rights.",
    copy:
      "Only verified RackLog trophy cards make the board. Chase county rankings, state status, and all-time trophy spots with bucks worth showing off.",
    images: [leaderboard1, leaderboard2],
    reverse: false,
    mode: "double",
  },
];

export default function App() {
  useRackLogHead();

  return (
    <main className="racklog-page">
      <video className="site-bg-video" autoPlay muted loop playsInline>
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="site-bg-shade" />
      <div className="gold-atmosphere" />
      <SiteStyles />
      <Hero />
      <ProofBar />
      <EcosystemRibbon />
      <Features />
      <SignalEngine />
      <HypeStrip />
      {story.map((section) => (
        <StorySection key={section.label} {...section} />
      ))}
      <WallOfGiants />
      <HuntersEdge />
      <FutureManifesto />
      <LaunchCTA />
    </main>
  );
}


function useRackLogHead() {
  useEffect(() => {
    const title = "RackLog | Whitetail Hunting Intelligence";
    const description =
      "RackLog brings HuntMaps, wind and thermal tools, Buck Brain prediction modeling, Rack Intel, verified leaderboards, trophy cards, hunt logs, and target buck history into one premium whitetail platform.";

    document.title = title;

    const upsertMeta = (selector, attrs) => {
      let tag = document.head.querySelector(selector);
      if (!tag) {
        tag = document.createElement("meta");
        document.head.appendChild(tag);
      }

      Object.entries(attrs).forEach(([key, value]) => {
        tag.setAttribute(key, value);
      });
    };

    const upsertLink = (selector, attrs) => {
      let tag = document.head.querySelector(selector);
      if (!tag) {
        tag = document.createElement("link");
        document.head.appendChild(tag);
      }

      Object.entries(attrs).forEach(([key, value]) => {
        tag.setAttribute(key, value);
      });
    };

    upsertMeta('meta[name="description"]', {
      name: "description",
      content: description,
    });

    upsertMeta('meta[property="og:title"]', {
      property: "og:title",
      content: title,
    });

    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: description,
    });

    upsertMeta('meta[property="og:type"]', {
      property: "og:type",
      content: "website",
    });

    upsertMeta('meta[property="og:url"]', {
      property: "og:url",
      content: "https://racklogapp.com",
    });

    upsertMeta('meta[property="og:image"]', {
      property: "og:image",
      content: "https://racklogapp.com/racklog-logo2.png",
    });

    upsertMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });

    upsertMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: title,
    });

    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: description,
    });

    upsertMeta('meta[name="twitter:image"]', {
      name: "twitter:image",
      content: "https://racklogapp.com/racklog-logo2.png",
    });

    upsertLink('link[rel="icon"]', {
      rel: "icon",
      href: "/racklog-logo2.png",
      type: "image/png",
    });

    upsertLink('link[rel="apple-touch-icon"]', {
      rel: "apple-touch-icon",
      href: "/racklog-logo2.png",
    });
  }, []);
}


function SiteStyles() {
  return (
    <style>{`
      * { box-sizing: border-box; }

      html { scroll-behavior: smooth; }

      body { margin: 0; background: #030303; }

      .racklog-page {
        min-height: 100vh;
        overflow-x: hidden;
        background: transparent;
        color: #fff;
        font-family: Arial, Helvetica, sans-serif;
      }


      .site-bg-video {
        position: fixed;
        inset: 0;
        z-index: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        opacity: 1;
        filter:
          brightness(1.05)
          contrast(1.02)
          saturate(.9);
        transform: scale(1.04);
        pointer-events: none;
      }

      .site-bg-shade {
        position: fixed;
        inset: 0;
        z-index: 1;
        pointer-events: none;
        background:
          linear-gradient(90deg, rgba(0,0,0,.42) 0%, rgba(0,0,0,.18) 42%, rgba(0,0,0,.24) 100%),
          radial-gradient(circle at 76% 20%, rgba(212,160,23,.20), transparent 26%),
          radial-gradient(circle at 20% 80%, rgba(212,160,23,.12), transparent 34%),
          linear-gradient(180deg, rgba(0,0,0,.12), rgba(0,0,0,.52));
      }

      .gold-atmosphere {
        position: fixed;
        inset: 0;
        z-index: 1;
        pointer-events: none;
        opacity: .78;
        background:
          radial-gradient(circle at 72% 18%, rgba(212,160,23,.24), transparent 22%),
          radial-gradient(circle at 8% 26%, rgba(245,214,141,.12), transparent 20%),
          radial-gradient(circle at 62% 72%, rgba(212,160,23,.18), transparent 28%),
          linear-gradient(115deg, transparent 0%, rgba(212,160,23,.06) 46%, transparent 72%);
        mix-blend-mode: screen;
        animation: goldBreath 8s ease-in-out infinite alternate;
      }

      @keyframes goldBreath {
        from { opacity: .46; transform: scale(1); }
        to { opacity: .82; transform: scale(1.03); }
      }

      .racklog-page > section,
      .racklog-page > div:not(.site-bg-shade):not(.gold-atmosphere):not(.noise):not(.fog),
      .racklog-page .container {
        position: relative;
        z-index: 2;
      }

      .container {
        width: min(1260px, calc(100% - 48px));
        margin: 0 auto;
      }

      @keyframes revealUp {
        from {
          opacity: .92;
          transform: translateY(22px) scale(.995);
        }
        to {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }

      @keyframes revealSlideLeft {
        from {
          opacity: .92;
          transform: translateX(-22px) scale(.995);
        }
        to {
          opacity: 1;
          transform: translateX(0) scale(1);
        }
      }

      @keyframes revealSlideRight {
        from {
          opacity: .92;
          transform: translateX(22px) scale(.995);
        }
        to {
          opacity: 1;
          transform: translateX(0) scale(1);
        }
      }

      .features,
      .story,
      .signal-section,
      .hype-section,
      .wall-section,
      .edge-section,
      .manifesto,
      .waitlist,
      .proof,
      .ribbon {
        animation: revealUp .9s ease both;
        animation-timeline: view();
        animation-range: entry 0% cover 16%;
      }

      .story-copy,
      .signal-grid > div:first-child {
        animation: revealSlideLeft .9s ease both;
        animation-timeline: view();
        animation-range: entry 0% cover 18%;
      }

      .device-cluster,
      .signal-card,
      .giant-wall {
        animation: revealSlideRight .9s ease both;
        animation-timeline: view();
        animation-range: entry 0% cover 18%;
      }



      .hero {
        position: relative;
        min-height: 100vh;
        padding: 24px 0 56px;
        overflow: hidden;
        background: transparent;
      }

      .hero::before {
        content: "";
        position: absolute;
        inset: 0;
        z-index: 1;
        pointer-events: none;
        background:
          linear-gradient(90deg, rgba(0,0,0,.92) 0%, rgba(0,0,0,.72) 38%, rgba(0,0,0,.38) 64%, rgba(0,0,0,.68) 100%),
          linear-gradient(180deg, rgba(0,0,0,.70), rgba(0,0,0,.34), rgba(0,0,0,.94)),
          radial-gradient(circle at 76% 36%, rgba(212,160,23,.22), transparent 28%),
          radial-gradient(circle at 18% 78%, rgba(212,160,23,.14), transparent 34%);
      }

      .hero::after {
        content: "";
        position: absolute;
        inset: 0;
        z-index: 2;
        pointer-events: none;
        opacity: .13;
        background-image:
          linear-gradient(rgba(245,214,141,.16) 1px, transparent 1px),
          linear-gradient(90deg, rgba(245,214,141,.16) 1px, transparent 1px);
        background-size: 72px 72px;
        mask-image: radial-gradient(circle at 70% 30%, black, transparent 58%);
      }

      .noise {
        position: absolute;
        inset: 0;
        z-index: 3;
        opacity: .10;
        pointer-events: none;
        background-image:
          radial-gradient(circle at 15% 25%, rgba(255,255,255,.35) 0 1px, transparent 1px),
          radial-gradient(circle at 65% 75%, rgba(255,255,255,.24) 0 1px, transparent 1px);
        background-size: 19px 19px, 31px 31px;
        mix-blend-mode: screen;
      }

      .fog {
        position: absolute;
        z-index: 3;
        left: -20%;
        right: -20%;
        height: 240px;
        bottom: 0;
        pointer-events: none;
        background: radial-gradient(ellipse at center, rgba(255,255,255,.16), transparent 68%);
        filter: blur(34px);
        animation: fogDrift 18s ease-in-out infinite alternate;
      }

      @keyframes fogDrift {
        from { transform: translateX(-4%) translateY(10px); opacity: .28; }
        to { transform: translateX(4%) translateY(-4px); opacity: .46; }
      }

      .nav {
        position: relative;
        z-index: 5;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 58px;
        padding: 14px 0;
      }

      .brand { display: flex; align-items: center; gap: 12px; }
      .racklog-brand-logo {
        width: 52px;
        height: 52px;
        object-fit: contain;
        filter:
          drop-shadow(0 0 18px rgba(212,160,23,.24));
      }

      .logo-word {
        font-size: 28px;
        font-weight: 1000;
        letter-spacing: 1px;
      }

      .nav-links { display: flex; align-items: center; gap: 20px; }


      .nav-social {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 36px;
        height: 36px;
        border-radius: 999px;
        border: 1px solid rgba(245,214,141,.32);
        color: #fff;
        text-decoration: none;
        font-size: 11px;
        font-weight: 1000;
        letter-spacing: 1px;
        background: rgba(255,255,255,.04);
        transition: all .25s ease;
      }

      .nav-social:hover {
        border-color: rgba(245,214,141,.68);
        color: ${GOLD_LIGHT};
        box-shadow: 0 0 22px rgba(212,160,23,.22);
      }

      .footer-socials {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 14px;
        margin-top: 28px;
      }

      .footer-social {
        color: ${GOLD_LIGHT};
        text-decoration: none;
        border: 1px solid rgba(245,214,141,.26);
        background: rgba(255,255,255,.04);
        padding: 12px 16px;
        border-radius: 999px;
        font-size: 13px;
        font-weight: 700;
        transition: all .25s ease;
      }

      .footer-social:hover {
        transform: translateY(-2px);
        border-color: rgba(245,214,141,.56);
        box-shadow: 0 0 24px rgba(212,160,23,.18);
      }

      .nav-link {
        color: rgba(255,255,255,.72);
        text-decoration: none;
        font-size: 12px;
        font-weight: 1000;
        letter-spacing: 1.8px;
      }

      .hero-grid {
        position: relative;
        z-index: 4;
        display: grid;
        grid-template-columns: minmax(0, .94fr) minmax(320px, .86fr);
        gap: 42px;
        align-items: center;
      }

      .kicker {
        display: inline-flex;
        gap: 8px;
        align-items: center;
        padding: 10px 16px;
        border: 1px solid rgba(212,160,23,.46);
        border-radius: 999px;
        color: ${GOLD_LIGHT};
        background: rgba(0,0,0,.58);
        font-size: 13px;
        font-weight: 1000;
        letter-spacing: 1px;
        box-shadow: 0 0 28px rgba(212,160,23,.16);
      }

      .kicker-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: #70ff9a;
        box-shadow: 0 0 16px #70ff9a;
      }

      .hero-title {
        margin: 24px 0 0;
        max-width: 760px;
        font-size: clamp(46px, 6.55vw, 88px);
        line-height: .91;
        text-transform: uppercase;
        letter-spacing: -1.9px;
        font-weight: 1000;
      }

      .hero-title span {
        display: block;
        color: ${GOLD};
        text-shadow: 0 0 36px rgba(212,160,23,.56);
      }

      .hero-lead {
        max-width: 650px;
        margin: 26px 0 0;
        color: #fff;
        font-size: 25px;
        line-height: 1.22;
        font-weight: 1000;
      }

      .hero-copy {
        max-width: 675px;
        color: #dedede;
        font-size: 17px;
        line-height: 1.74;
      }

      .tag-row { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 24px; }

      .tag {
        padding: 10px 13px;
        border-radius: 999px;
        border: 1px solid rgba(245,214,141,.24);
        color: ${GOLD_LIGHT};
        background: rgba(0,0,0,.36);
        font-size: 12px;
        font-weight: 1000;
        letter-spacing: 1px;
      }

      .hero-actions { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 34px; }

      .primary-button,
      .secondary-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 56px;
        padding: 0 24px;
        border-radius: 18px;
        text-decoration: none;
        font-weight: 1000;
        letter-spacing: 1px;
        transition: transform .25s ease, box-shadow .25s ease;
      }

      .primary-button {
        color: #050505;
        background: ${GOLD};
        box-shadow: 0 0 38px rgba(212,160,23,.44);
      }

      .secondary-button {
        color: ${GOLD_LIGHT};
        border: 1px solid rgba(245,214,141,.54);
        background: rgba(0,0,0,.38);
      }

      .primary-button:hover,
      .secondary-button:hover,
      .feature-card:hover,
      .edge-card:hover,
      .giant-card:hover {
        transform: translateY(-3px);
      }

      .phone-stage {
        position: relative;
        min-height: 690px;
        display: grid;
        place-items: center;
      }

      .gold-orb {
        position: absolute;
        width: 540px;
        height: 540px;
        border-radius: 999px;
        background: rgba(212,160,23,.20);
        filter: blur(88px);
        animation: glowPulse 4.8s ease-in-out infinite alternate;
      }

      @keyframes glowPulse {
        from { transform: scale(.94); opacity: .72; }
        to { transform: scale(1.06); opacity: 1; }
      }

      .hero-phone-main {
        position: relative;
        z-index: 2;
        animation: floatMain 7s ease-in-out infinite;
      }

      .hero-phone-mini {
        position: absolute;
        z-index: 3;
        right: -2%;
        bottom: 2%;
        width: 44%;
        min-width: 170px;
        max-width: 260px;
        animation: floatMini 6.5s ease-in-out infinite;
      }

      @keyframes floatMain {
        0%, 100% { transform: translateY(0) rotate(-1deg); }
        50% { transform: translateY(-14px) rotate(1deg); }
      }

      @keyframes floatMini {
        0%, 100% { transform: translateY(0) rotate(3deg); }
        50% { transform: translateY(-18px) rotate(0deg); }
      }

      .device {
        position: relative;
        width: 100%;
        max-width: 348px;
        margin: 0 auto;
        padding: 8px;
        border-radius: 34px;
        border: 1px solid rgba(255,255,255,.18);
        background: ${PANEL};
        box-shadow:
          0 0 58px rgba(212,160,23,.18),
          0 32px 92px rgba(0,0,0,.82);
        transition: transform .3s ease, box-shadow .3s ease;
        animation: phoneFloat 7.5s ease-in-out infinite;
      }

      .device:nth-child(2n) {
        animation-delay: -2.4s;
      }

      .device:nth-child(3n) {
        animation-delay: -4.1s;
      }

      @keyframes phoneFloat {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-10px) rotate(.55deg); }
      }

      .device:hover {
        box-shadow:
          0 0 78px rgba(212,160,23,.28),
          0 40px 115px rgba(0,0,0,.88);
      }

      .device.hero-device {
        max-width: 418px;
        padding: 10px;
        border-radius: 46px;
        box-shadow:
          0 0 88px rgba(212,160,23,.28),
          0 44px 120px rgba(0,0,0,.92);
      }

      .device.mini-device { max-width: 260px; padding: 6px; border-radius: 26px; }

      .device.large-device { max-width: 382px; }

      .device.feature-large {
        max-width: 452px;
        padding: 10px;
        border-radius: 40px;
        box-shadow:
          0 0 82px rgba(212,160,23,.25),
          0 40px 112px rgba(0,0,0,.90);
      }

      .device.extra-large {
        max-width: 470px;
        padding: 10px;
        border-radius: 40px;
      }

      .device::before {
        content: "";
        position: absolute;
        inset: -1px;
        border-radius: inherit;
        pointer-events: none;
        background: linear-gradient(135deg, rgba(245,214,141,.34), transparent 38%, rgba(212,160,23,.16));
        opacity: .65;
        mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
        -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
        padding: 1px;
        -webkit-mask-composite: xor;
        mask-composite: exclude;
      }

      .device img {
        display: block;
        width: 100%;
        border-radius: 28px;
        border: 1px solid rgba(212,160,23,.30);
      }

      .proof {
        padding: 34px 0;
        background: rgba(0,0,0,.76);
        border-top: 1px solid rgba(255,255,255,.06);
        border-bottom: 1px solid rgba(255,255,255,.06);
      }

      .proof-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 16px;
      }

      .stat {
        padding: 22px;
        text-align: center;
        border: 1px solid ${GOLD_LINE};
        border-radius: 24px;
        background: rgba(255,255,255,.04);
      }

      .stat-value {
        color: ${GOLD_LIGHT};
        font-size: 42px;
        font-weight: 1000;
      }

      .stat-label {
        margin-top: 6px;
        color: ${GOLD};
        font-size: 12px;
        font-weight: 1000;
        letter-spacing: 2px;
      }

      .ribbon {
        position: relative;
        overflow: hidden;
        padding: 24px 0;
        background: linear-gradient(90deg, rgba(212,160,23,.12), rgba(255,255,255,.03), rgba(212,160,23,.12));
        border-bottom: 1px solid rgba(255,255,255,.06);
      }

      .ribbon-track {
        display: flex;
        gap: 28px;
        white-space: nowrap;
        animation: ribbonMove 28s linear infinite;
        color: rgba(245,214,141,.88);
        font-weight: 1000;
        letter-spacing: 2px;
        text-transform: uppercase;
        font-size: 12px;
      }

      @keyframes ribbonMove {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
      }

      .features,
      .story,
      .signal-section,
      .hype-section,
      .wall-section,
      .edge-section,
      .manifesto,
      .waitlist {
        padding: 118px 0;
      }

      .features { background: rgba(0,0,0,.76); }

      .center { text-align: center; }

      .eyebrow {
        color: ${GOLD};
        font-weight: 1000;
        letter-spacing: 4px;
        font-size: 13px;
      }

      .section-title {
        margin: 18px 0;
        font-size: clamp(40px, 5vw, 70px);
        line-height: 1.02;
        font-weight: 1000;
        text-transform: uppercase;
      }

      .center-copy,
      .body-copy {
        color: #cfcfcf;
        font-size: 19px;
        line-height: 1.66;
      }

      .center-copy {
        max-width: 820px;
        margin: 0 auto;
      }

      .body-copy { max-width: 720px; }

      .feature-grid {
        margin-top: 56px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(218px, 1fr));
        gap: 18px;
      }

      .feature-card {
        position: relative;
        min-height: 196px;
        padding: 24px;
        border: 1px solid ${GOLD_LINE};
        border-radius: 28px;
        background:
          radial-gradient(circle at top left, rgba(212,160,23,.10), transparent 45%),
          rgba(255,255,255,.045);
        box-shadow: 0 18px 48px rgba(0,0,0,.48);
        overflow: hidden;
        transition: transform .25s ease, border-color .25s ease, box-shadow .25s ease;
      }

      .feature-card:hover {
        border-color: rgba(245,214,141,.58);
        box-shadow: 0 22px 70px rgba(212,160,23,.13);
      }

      .feature-card::after {
        content: "";
        position: absolute;
        inset: auto -30% -50% -30%;
        height: 72px;
        background: rgba(212,160,23,.10);
        filter: blur(24px);
      }

      .feature-icon { font-size: 34px; }

      .feature-card h3 {
        margin: 14px 0 9px;
        font-size: 23px;
        line-height: 1.08;
      }

      .feature-card p {
        margin: 0;
        color: #bdbdbd;
        line-height: 1.5;
      }

      .signal-section {
        position: relative;
        overflow: hidden;
        background:
          radial-gradient(circle at 82% 50%, rgba(112,255,154,.10), transparent 28%),
          radial-gradient(circle at 18% 20%, rgba(212,160,23,.16), transparent 32%),
          #050505;
        border-top: 1px solid rgba(255,255,255,.06);
      }

      .signal-grid {
        display: grid;
        grid-template-columns: minmax(320px, .9fr) minmax(320px, 1.1fr);
        gap: 58px;
        align-items: center;
      }

      .signal-card {
        position: relative;
        border: 1px solid rgba(112,255,154,.32);
        border-radius: 34px;
        padding: 34px;
        background:
          radial-gradient(circle at 80% 20%, rgba(112,255,154,.16), transparent 32%),
          rgba(0,0,0,.72);
        box-shadow: 0 0 80px rgba(112,255,154,.10), 0 36px 95px rgba(0,0,0,.82);
        overflow: hidden;
      }

      .signal-card::after {
        content: "";
        position: absolute;
        inset: -60% -20%;
        opacity: .12;
        background: conic-gradient(from 180deg, transparent, rgba(112,255,154,.8), transparent, rgba(212,160,23,.9), transparent);
        animation: radarSweep 7s linear infinite;
      }

      @keyframes radarSweep {
        to { transform: rotate(360deg); }
      }

      .signal-content {
        position: relative;
        z-index: 2;
      }

      .signal-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #70ff9a;
        font-weight: 1000;
        letter-spacing: 2px;
        font-size: 12px;
      }

      .signal-percent {
        margin: 24px 0 10px;
        font-size: clamp(72px, 9vw, 128px);
        line-height: .88;
        font-weight: 1000;
        color: #70ff9a;
        text-shadow: 0 0 34px rgba(112,255,154,.26);
      }

      .signal-sub {
        color: #fff;
        font-size: 25px;
        font-weight: 1000;
      }

      .signal-metrics {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
        margin-top: 28px;
      }

      .metric {
        border: 1px solid rgba(245,214,141,.22);
        border-radius: 18px;
        padding: 15px;
        background: rgba(255,255,255,.04);
      }

      .metric strong {
        display: block;
        font-size: 20px;
        color: ${GOLD_LIGHT};
      }

      .metric span {
        display: block;
        margin-top: 4px;
        color: ${GOLD};
        font-size: 11px;
        letter-spacing: 1.5px;
        font-weight: 1000;
      }

      .bars {
        margin-top: 26px;
        display: grid;
        gap: 12px;
      }

      .bar-label {
        display: flex;
        justify-content: space-between;
        margin-bottom: 7px;
        color: #dedede;
        font-weight: 900;
        font-size: 13px;
      }

      .bar-shell {
        height: 10px;
        overflow: hidden;
        border-radius: 999px;
        background: rgba(255,255,255,.10);
      }

      .bar-fill {
        height: 100%;
        border-radius: 999px;
        background: linear-gradient(90deg, ${GOLD}, #70ff9a);
        box-shadow: 0 0 18px rgba(112,255,154,.32);
      }

      .hype-section {
        background:
          linear-gradient(90deg, rgba(0,0,0,.95), rgba(212,160,23,.10), rgba(0,0,0,.95)),
          #050505;
        border-top: 1px solid rgba(255,255,255,.06);
        border-bottom: 1px solid rgba(255,255,255,.06);
      }

      .hype-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(235px, 1fr));
        gap: 18px;
      }

      .hype-card {
        padding: 28px;
        border-radius: 30px;
        border: 1px solid rgba(245,214,141,.25);
        background: rgba(0,0,0,.58);
        text-align: center;
      }

      .hype-card strong {
        display: block;
        font-size: clamp(38px, 5vw, 64px);
        color: ${GOLD_LIGHT};
        line-height: 1;
      }

      .hype-card span {
        display: block;
        margin-top: 10px;
        color: ${GOLD};
        font-size: 12px;
        font-weight: 1000;
        letter-spacing: 2px;
      }

      .story {
        position: relative;
        border-top: 1px solid rgba(255,255,255,.06);
        background: rgba(5,5,5,.78);
      }

      .story.reverse { background: rgba(0,0,0,.76); }

      .story::before {
        content: "";
        position: absolute;
        inset: 0;
        pointer-events: none;
        background: radial-gradient(circle at 18% 18%, rgba(212,160,23,.14), transparent 34%);
      }

      .story.reverse::before {
        background: radial-gradient(circle at 82% 18%, rgba(212,160,23,.16), transparent 34%);
      }

      .story-grid {
        position: relative;
        z-index: 2;
        display: grid;
        grid-template-columns: minmax(320px, .9fr) minmax(360px, 1.1fr);
        gap: 58px;
        align-items: center;
      }

      .story-grid.reverse .story-copy { order: 2; }
      .story-grid.reverse .device-cluster { order: 1; }

      .device-cluster {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(154px, 1fr));
        gap: 22px;
        align-items: center;
      }

      .device-cluster.feature-large {
        grid-template-columns: repeat(3, minmax(190px, 1fr));
        gap: 28px;
      }

      .device-cluster.double-feature {
        grid-template-columns: repeat(2, minmax(230px, 1fr));
        gap: 34px;
      }

      .lift { margin-top: -32px; }

      .wall-section {
        position: relative;
        overflow: hidden;
        background:
          radial-gradient(circle at 50% 0%, rgba(212,160,23,.18), transparent 34%),
          #030303;
        border-top: 1px solid rgba(255,255,255,.06);
      }

      .giant-wall {
        margin-top: 52px;
        display: grid;
        grid-template-columns: 1.15fr .85fr;
        gap: 20px;
        align-items: stretch;
      }

      .giant-card {
        position: relative;
        min-height: 500px;
        overflow: hidden;
        border-radius: 36px;
        border: 1px solid rgba(245,214,141,.34);
        background: rgba(0,0,0,.76);
        box-shadow: 0 34px 100px rgba(0,0,0,.72);
        transition: transform .25s ease;
      }

      .giant-card.small {
        min-height: 240px;
      }

      .giant-stack {
        display: grid;
        gap: 20px;
      }

      .giant-card img {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: .72;
      }

      .giant-card::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(to top, rgba(0,0,0,.92), rgba(0,0,0,.15));
      }

      .giant-overlay {
        position: absolute;
        z-index: 2;
        left: 28px;
        right: 28px;
        bottom: 28px;
      }

      .verified-pill {
        display: inline-flex;
        padding: 9px 13px;
        border-radius: 999px;
        background: rgba(212,160,23,.22);
        border: 1px solid rgba(245,214,141,.42);
        color: ${GOLD_LIGHT};
        font-size: 12px;
        letter-spacing: 1.5px;
        font-weight: 1000;
      }

      .giant-overlay h3 {
        margin: 18px 0 6px;
        font-size: clamp(32px, 5vw, 64px);
        line-height: .96;
      }

      .giant-card.small .giant-overlay h3 {
        font-size: 32px;
      }

      .score {
        font-size: clamp(44px, 6vw, 78px);
        color: ${GOLD_LIGHT};
        font-weight: 1000;
        line-height: 1;
      }

      .edge-section {
        background:
          radial-gradient(circle at 50% 10%, rgba(212,160,23,.14), transparent 30%),
          #000;
        border-top: 1px solid rgba(255,255,255,.06);
      }

      .edge-grid {
        margin-top: 48px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(245px, 1fr));
        gap: 18px;
      }

      .edge-card {
        min-height: 190px;
        border: 1px solid ${GOLD_LINE};
        border-radius: 30px;
        padding: 26px;
        background:
          linear-gradient(180deg, rgba(212,160,23,.08), rgba(255,255,255,.03)),
          rgba(0,0,0,.66);
        transition: transform .25s ease, border-color .25s ease;
      }

      .edge-card:hover { border-color: rgba(245,214,141,.60); }

      .edge-number {
        color: ${GOLD};
        font-size: 13px;
        font-weight: 1000;
        letter-spacing: 3px;
      }

      .edge-card h3 {
        margin: 16px 0 10px;
        font-size: 27px;
        line-height: 1.08;
      }

      .edge-card p {
        margin: 0;
        color: #cfcfcf;
        line-height: 1.56;
      }

      .manifesto {
        position: relative;
        overflow: hidden;
        text-align: center;
        background:
          radial-gradient(circle at 50% 18%, rgba(212,160,23,.16), transparent 34%),
          linear-gradient(180deg, rgba(0,0,0,.82), rgba(0,0,0,.92));
        border-top: 1px solid rgba(255,255,255,.06);
      }

      .manifesto-title {
        max-width: 1080px;
        margin: 18px auto;
        font-size: clamp(46px, 7vw, 96px);
        line-height: .94;
        font-weight: 1000;
        text-transform: uppercase;
      }

      .manifesto-title span {
        color: ${GOLD};
        text-shadow: 0 0 30px rgba(212,160,23,.42);
      }

      .waitlist {
        text-align: center;
        background:
          radial-gradient(circle at center, rgba(212,160,23,.18), transparent 38%),
          linear-gradient(180deg, rgba(0,0,0,.86), rgba(0,0,0,.96));
        border-top: 1px solid rgba(255,255,255,.06);
      }

      .waitlist-panel {
        position: relative;
        max-width: 940px;
        margin: 0 auto;
        border: 1px solid rgba(245,214,141,.42);
        border-radius: 42px;
        padding: 60px 38px;
        background:
          radial-gradient(circle at top, rgba(212,160,23,.18), transparent 42%),
          rgba(0,0,0,.84);
        box-shadow:
          0 0 90px rgba(212,160,23,.16),
          0 34px 110px rgba(0,0,0,.78);
        backdrop-filter: blur(10px);
      }

      .waitlist-title {
        margin: 18px 0;
        font-size: clamp(48px, 7vw, 88px);
        line-height: .95;
        text-transform: uppercase;
        font-weight: 1000;
      }


      .section-title,
      .hero-title span,
      .waitlist-title,
      .manifesto-title span {
        text-shadow:
          0 0 18px rgba(212,160,23,.24),
          0 0 54px rgba(212,160,23,.16);
      }

      .story::after,
      .signal-section::after,
      .wall-section::after,
      .edge-section::after {
        content: "";
        position: absolute;
        inset: 0;
        pointer-events: none;
        background:
          radial-gradient(circle at 78% 22%, rgba(212,160,23,.12), transparent 25%),
          linear-gradient(115deg, transparent 0%, rgba(245,214,141,.035) 48%, transparent 68%);
        mix-blend-mode: screen;
      }

      .device {
        will-change: transform;
      }


      .manifesto .container,
      .waitlist .container,
      .waitlist-panel {
        opacity: 1 !important;
        filter: none !important;
      }

      .manifesto-title,
      .waitlist-title,
      .waitlist .center-copy,
      .manifesto .center-copy {
        color: #fff;
        text-shadow:
          0 2px 18px rgba(0,0,0,.85),
          0 0 32px rgba(212,160,23,.16);
      }

      @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
          animation-duration: .001ms !important;
          animation-iteration-count: 1 !important;
          scroll-behavior: auto !important;
        }
      }

      @media (max-width: 860px) {
        .container {
          width: min(100% - 28px, 1260px);
        }

        .nav {
          align-items: center;
          gap: 14px;
          margin-bottom: 46px;
        }

        .brand {
          min-width: 0;
          gap: 10px;
        }

        .racklog-brand-logo {
          width: 44px;
          height: 44px;
          flex: 0 0 auto;
        }

        .logo-word {
          font-size: 24px;
          white-space: nowrap;
        }

        .nav-links {
          display: none;
        }

        .secondary-button {
          min-height: 50px;
          padding: 0 18px;
          border-radius: 17px;
          font-size: 13px;
          white-space: nowrap;
          flex: 0 0 auto;
        }

        .hero {
          min-height: auto;
          padding-top: 22px;
          padding-bottom: 70px;
          overflow: hidden;
        }

        .hero-grid,
        .story-grid,
        .story-grid.reverse,
        .signal-grid,
        .giant-wall {
          grid-template-columns: 1fr;
          gap: 38px;
        }

        .story-grid.reverse .story-copy,
        .story-grid.reverse .device-cluster {
          order: initial;
        }

        .hero-copy,
        .hero-lead,
        .hero-title {
          max-width: 100%;
        }

        .hero-title {
          font-size: clamp(43px, 14.2vw, 72px);
          line-height: .92;
          letter-spacing: -1.5px;
          overflow-wrap: anywhere;
          word-break: normal;
        }

        .hero-title span {
          display: block;
          max-width: 100%;
        }

        .hero-lead {
          font-size: 22px;
          line-height: 1.18;
        }

        .hero-copy {
          font-size: 16px;
          line-height: 1.62;
        }

        .tag-row {
          gap: 10px;
        }

        .tag {
          font-size: 11px;
          padding: 9px 11px;
        }

        .phone-stage {
          min-height: auto;
          padding-top: 18px;
          place-items: center;
          overflow: hidden;
        }

        .hero-phone-main {
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .hero-phone-main .device {
          width: min(88vw, 420px);
          max-width: 100%;
        }

        .hero-phone-mini {
          display: none;
        }

        .proof-grid {
          grid-template-columns: 1fr;
        }

        .features,
        .story,
        .signal-section,
        .hype-section,
        .wall-section,
        .edge-section,
        .manifesto,
        .waitlist {
          padding: 82px 0;
        }

        .device-cluster,
        .device-cluster.feature-large,
        .device-cluster.double-feature {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .feature-large,
        .extra-large {
          max-width: 100%;
        }

        .lift {
          margin-top: -14px;
        }
      }

      @media (max-width: 520px) {
        .hero-title {
          font-size: clamp(40px, 13.5vw, 58px);
          line-height: .93;
          letter-spacing: -1.15px;
        }

        .hero-actions { display: grid; }
        .primary-button, .secondary-button { width: 100%; }

        .device-cluster,
        .device-cluster.feature-large,
        .device-cluster.double-feature {
          grid-template-columns: 1fr;
        }

        .lift { margin-top: 0; }
        .hero-phone-mini { display: none; }
        .phone-stage { min-height: auto; padding-top: 18px; }
        .signal-metrics { grid-template-columns: 1fr; }
      }
    `}</style>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="noise" />
      <div className="fog" />

      <div className="container">
        <nav className="nav">
          <div className="brand">
            <img
              src={racklogLogo}
              alt="RackLog Logo"
              className="racklog-brand-logo"
            />

            <div className="logo-word">
              RACK<span style={{ color: GOLD }}>LOG</span>
            </div>
          </div>

          <div className="nav-links">
            <a className="nav-link" href="#features">FEATURES</a>
            <a className="nav-link" href="#intel">INTEL</a>
            <a className="nav-link" href="#waitlist">BETA</a>

            <a
              className="nav-social"
              href="https://instagram.com/racklogapp"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              className="nav-social"
              href="https://tiktok.com/@racklogapp"
              target="_blank"
              rel="noreferrer"
            >
              <FaTiktok />
            </a>
          </div>

          <a className="secondary-button" href="#waitlist">
            JOIN BETA
          </a>
        </nav>

        <div className="hero-grid">
          <div>
            <div className="kicker">
              <span className="kicker-dot" />
              V2 BETA TESTING NOW
            </div>

            <h1 className="hero-title">
              The Future of
              <span>Whitetail Hunting Intelligence</span>
            </h1>

            <p className="hero-lead">
              Pattern your target buck. Pick the right stand. Hunt with a plan.
            </p>

            <p className="hero-copy">
              RackLog brings HuntMaps, wind and thermal tools, Buck Brain prediction modeling,
              Rack Intel, verified leaderboards, trophy cards, hunt logs, and target buck history
              into one premium whitetail platform.
            </p>

            <div className="tag-row">
              <span className="tag">🧠 Buck Brain</span>
              <span className="tag">🌬️ Wind + Thermals</span>
              <span className="tag">📈 Target Buck Patterns</span>
              <span className="tag">🥇 Verified Leaderboards</span>
            </div>

            <div className="hero-actions">
              <a className="primary-button" href="#waitlist">JOIN THE BETA WAITLIST →</a>
              <a className="secondary-button" href="#features">EXPLORE FEATURES</a>
            </div>
          </div>

          <div className="phone-stage">
            <div className="gold-orb" />
            <div className="hero-phone-main">
              <Device src={huntmaps} alt="RackLog HuntMaps" variant="hero" />
            </div>
            <div className="hero-phone-mini">
              <Device src={buckbrain1} alt="Buck Brain" variant="mini" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProofBar() {
  return (
    <section className="proof">
      <div className="container">
        <div className="proof-grid">
          <Stat value="15" label="CORE HUNTING TOOLS" />
          <Stat value="1" label="TARGET BUCK SYSTEM" />
          <Stat value="2026" label="BETA LAUNCH SEASON" />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div className="stat">
      <div className="stat-value">{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

function EcosystemRibbon() {
  const items = [
    "HUNTMAPS",
    "BUCK BRAIN",
    "RACK INTEL",
    "TARGET BUCK PATTERNS",
    "WIND + THERMALS",
    "VERIFIED LEADERBOARDS",
    "TROPHY ROOM",
    "RACKRECOVERY",
  ];

  return (
    <section className="ribbon">
      <div className="ribbon-track">
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`}>• {item}</span>
        ))}
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="features">
      <div className="container">
        <div className="center">
          <div className="eyebrow">BUILT FOR HUNTERS</div>
          <h2 className="section-title">Every Tool. One App.</h2>
          <p className="center-copy">
            RackLog is built to become the command center for serious whitetail hunters —
            scouting, strategy, target buck patterning, logging, recovery, competition, and the story of the season in one place.
          </p>
        </div>

        <div className="feature-grid">
          {features.map((item) => (
            <article className="feature-card" key={item.title}>
              <div className="feature-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SignalEngine() {
  return (
    <section className="signal-section">
      <div className="container">
        <div className="signal-grid">
          <div>
            <div className="eyebrow">LIVE BUCK BRAIN READ</div>
            <h2 className="section-title">Know When The Sit Is Worth It.</h2>
            <p className="body-copy">
              RackLog turns your history into a hunt signal — wind, pressure, daylight movement,
              camera activity, stand history, and target buck tendencies working together.
            </p>
          </div>

          <div className="signal-card">
            <div className="signal-content">
              <div className="signal-header">
                <span>TARGET BUCK SIGNAL</span>
                <span>LIVE READ</span>
              </div>

              <div className="signal-percent">78%</div>
              <div className="signal-sub">High Opportunity Window</div>

              <div className="signal-metrics">
                <div className="metric">
                  <strong>W Wind</strong>
                  <span>PRIME WIND</span>
                </div>
                <div className="metric">
                  <strong>Last Light</strong>
                  <span>BEST WINDOW</span>
                </div>
                <div className="metric">
                  <strong>Thermal Pull</strong>
                  <span>SCENT FACTOR</span>
                </div>
                <div className="metric">
                  <strong>Backside Stand</strong>
                  <span>TOP SIT</span>
                </div>
              </div>

              <div className="bars">
                <SignalBar label="Camera Momentum" value="84%" width="84%" />
                <SignalBar label="Wind Match" value="78%" width="78%" />
                <SignalBar label="Pressure Risk" value="31%" width="31%" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SignalBar({ label, value, width }) {
  return (
    <div>
      <div className="bar-label">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="bar-shell">
        <div className="bar-fill" style={{ width }} />
      </div>
    </div>
  );
}

function HypeStrip() {
  return (
    <section className="hype-section">
      <div className="container">
        <div className="hype-grid">
          <div className="hype-card">
            <strong>V2</strong>
            <span>BETA LIVE NOW</span>
          </div>
          <div className="hype-card">
            <strong>15</strong>
            <span>CONNECTED TOOLS</span>
          </div>
          <div className="hype-card">
            <strong>5</strong>
            <span>LAUNCH STATES STARTING CORE</span>
          </div>
          <div className="hype-card">
            <strong>1</strong>
            <span>WHITETAIL COMMAND CENTER</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function StorySection({ label, title, copy, images, reverse, mode }) {
  const large = mode === "largeTriple";
  const doubleFeature = mode === "doubleFeature";

  return (
    <section id={label.includes("BUCK BRAIN") ? "intel" : undefined} className={`story ${reverse ? "reverse" : ""}`}>
      <div className="container">
        <div className={`story-grid ${reverse ? "reverse" : ""}`}>
          <div className="story-copy">
            <div className="eyebrow">{label}</div>
            <h2 className="section-title">{title}</h2>
            <p className="body-copy">{copy}</p>
          </div>

          <div className={`device-cluster ${large ? "feature-large" : ""} ${doubleFeature ? "double-feature" : ""}`}>
            {images.map((image, index) => (
              <Device
                key={`${label}-${index}`}
                src={image}
                alt={`${label} screenshot ${index + 1}`}
                variant={large ? "featureLarge" : doubleFeature ? "extraLarge" : images.length === 2 ? "large" : "standard"}
                lift={index === 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Device({ src, alt, variant, lift }) {
  const classes = [
    "device",
    variant === "hero" ? "hero-device" : "",
    variant === "mini" ? "mini-device" : "",
    variant === "large" ? "large-device" : "",
    variant === "featureLarge" ? "feature-large" : "",
    variant === "extraLarge" ? "extra-large" : "",
    lift ? "lift" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      <img src={src} alt={alt} />
    </div>
  );
}

function WallOfGiants() {
  return (
    <section className="wall-section">
      <div className="container">
        <div className="center">
          <div className="eyebrow">WALL OF GIANTS</div>
          <h2 className="section-title">Every Verified Buck Becomes Part Of The Chase.</h2>
          <p className="center-copy">
            Verified trophy cards turn into leaderboard heat, county bragging rights, and a season-long reason to keep hunters coming back.
          </p>
        </div>

        <div className="giant-wall">
          <div className="giant-card">
            <img src={leaderboard2} alt="Verified leaderboard trophy preview" />
            <div className="giant-overlay">
              <span className="verified-pill">✓ VERIFIED • TROPHY</span>
              <h3>Huey’s Giant</h3>
              <div className="score">157&quot;</div>
            </div>
          </div>

          <div className="giant-stack">
            <div className="giant-card small">
              <img src={trophyroom1} alt="Trophy room buck card" />
              <div className="giant-overlay">
                <span className="verified-pill">TROPHY ROOM</span>
                <h3>Share The Story</h3>
              </div>
            </div>

            <div className="giant-card small">
              <img src={leaderboard1} alt="Leaderboard filters" />
              <div className="giant-overlay">
                <span className="verified-pill">STATE • COUNTY • ALL-TIME</span>
                <h3>Own The Board</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HuntersEdge() {
  const edges = [
    {
      number: "01",
      title: "Stop Burning Stands.",
      text: "Know when the wind, thermals, pressure, and target buck history say to stay out."
    },
    {
      number: "02",
      title: "Hunt The Pattern.",
      text: "Find the conditions your buck keeps choosing and stack the odds before you climb in."
    },
    {
      number: "03",
      title: "Feed The System.",
      text: "Every hunt log, camera pull, sighting, and stand choice makes Buck Brain sharper."
    },
    {
      number: "04",
      title: "Build The Legacy.",
      text: "Save the story, compete on verified boards, and turn every season into better intel."
    }
  ];

  return (
    <section className="edge-section">
      <div className="container">
        <div className="center">
          <div className="eyebrow">THE HUNTER’S EDGE</div>
          <h2 className="section-title">Make Better Decisions Before The Sit.</h2>
          <p className="center-copy">
            RackLog is built around the decisions that actually matter — when to hunt, where to sit,
            when to stay out, and how to make every season smarter than the last.
          </p>
        </div>

        <div className="edge-grid">
          {edges.map((edge) => (
            <article className="edge-card" key={edge.number}>
              <div className="edge-number">{edge.number}</div>
              <h3>{edge.title}</h3>
              <p>{edge.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FutureManifesto() {
  return (
    <section className="manifesto">
      <div className="container">
        <div className="eyebrow">THE NEXT ERA</div>
        <h2 className="manifesto-title">
          Your season should get <span>smarter</span> every time you hunt.
        </h2>
        <p className="center-copy">
          RackLog is not just a place to store hunting data. It is a whitetail intelligence system designed to learn your properties,
          your target bucks, your sits, and the conditions that turn history into opportunity.
        </p>
      </div>
    </section>
  );
}

function LaunchCTA() {
  return (
    <section id="waitlist" className="waitlist">
      <div className="container">
        <div className="waitlist-panel">
          <div className="eyebrow">BE THE FIRST</div>
          <h2 className="waitlist-title">Join The Beta Waitlist</h2>
          <p className="center-copy">
            Be first to experience the future of whitetail hunting intelligence.
            Early access. Exclusive updates. Built for hunters who live the season year-round.
          </p>

          <div className="footer-socials">
            <a
              className="footer-social"
              href="https://instagram.com/racklogapp"
              target="_blank"
              rel="noreferrer"
            >
              Instagram • @racklogapp
            </a>

            <a
              className="footer-social"
              href="https://tiktok.com/@racklogapp"
              target="_blank"
              rel="noreferrer"
            >
              TikTok • @racklogapp
            </a>
          </div>

          <div style={{ marginTop: 34 }}>
            <a className="primary-button" href="mailto:hello@racklogapp.com?subject=RackLog Beta Waitlist">
              REQUEST BETA ACCESS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
