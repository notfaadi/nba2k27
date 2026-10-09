export type BlogSection = {
  heading: string
  body: string[]
}

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  metaTitle: string
  metaDescription: string
  searchTerms: string
  date: string
  readMinutes: number
  tag: string
  sections: BlogSection[]
  /** Emit HowTo JSON-LD when true (setup / how-to guides). */
  howTo?: boolean
}

/**
 * Commercial NBA 2K27 cheat guides — unique intents, keyword-targeted meta.
 * Primary SERP targets: nba 2k27 cheats, nba 2k27 cheat, nba 2k27 hacks, auto green, esp, player highlight, radar.
 */
export const BLOGS: BlogPost[] = [
  {
    slug: 'features-list',
    title: 'NBA 2K27 Cheat Features Checklist',
    excerpt:
      'Checklist of every NBA 2K27 cheat module on nba2k27hack.org — perfect shot timing, Court Vision player overlay, MyTeam card & badge overlay, player highlight, court radar and spoofer — before you open checkout from $35.',
    metaTitle: 'NBA 2K27 Cheat Features Checklist | Auto Green ESP Radar',
    metaDescription:
      'NBA 2K27 cheat features checklist: Auto Green & perfect shot timing, Court Vision player overlay, MyTeam card & badge overlay, player highlight, court radar and spoofer on nba2k27hack.org from $35. Compare modules before you buy.',
    searchTerms: 'nba 2k27 cheat features checklist nba 2k27 cheats auto green esp player highlight court radar',
    date: '2026-09-17',
    readMinutes: 8,
    tag: 'Features',
    sections: [
      {
        heading: 'Use this checklist before checkout',
        body: [
          'Searching “nba 2k27 cheats” or “nba 2k27 cheat” usually means one question: what is actually included? This guide is the module checklist — not the price page. Open Product details for live 2K Anti-Cheat status and checkout from $35.',
          'NBA 2K27 Cheats on nba2k27hack.org is a single NBA 2K27 product for Windows PC: one loader, one license, clear-to-load or Updating against 2K Anti-Cheat. Official and many modded private Pro-Am lobbys are supported when the build allows it.',
        ],
      },
      {
        heading: 'Auto Green and perfect shot timing',
        body: [
          'NBA 2K27 Auto Green / perfect shot timing — FOV, smoothing, hitbox and visible-check options so shots near a opponent still connect without a robotic snap that private-server admins notice on spectate.',
        ],
      },
      {
        heading: 'ESP, player highlight and loot highlighting',
        body: [
          'Court Vision player overlay / player highlight — boxes, skeletons, distance and health through walls and treelines on Rec and Park.',
          'Defender read overlay — spot zombies before they aggro so a quiet MyCareer grind stays quiet.',
          'MyTeam card & badge overlay — highlight guns, ammo, medical supplies and rare gear so empty houses stop wasting your time.',
        ],
      },
      {
        heading: 'Radar, bases and extras',
        body: [
          'Court radar — 2D radar for off-screen opponents and third parties around towns and military loot.',
          'Base and stash intel — tents, barrels and buried stashes on private Pro-Am lobbys before you commit a raid.',
          'Spoofer — hardware identifier protection when the current build includes it.',
          'Stream-proof — keep supported overlays out of OBS and common capture tools.',
        ],
      },
      {
        heading: 'Next reads',
        body: [
          'Tune Auto Green in the Auto Green settings guide, dial ESP in the ESP & player highlight guide, then confirm live 2K Anti-Cheat status in the status guides before you buy NBA 2K27 cheats.',
        ],
      },
    ],
  },
  {
    slug: 'auto-green-settings',
    title: 'NBA 2K27 Auto Green Settings for Silent Aim',
    excerpt:
      'Tune NBA 2K27 Auto Green FOV, smoothing, hitbox and perfect shot timing so opponent tracking stays effective without looking robotic to spectating admins.',
    metaTitle: 'NBA 2K27 Auto Green Settings | Silent Aim FOV & Smoothing',
    metaDescription:
      'NBA 2K27 Auto Green settings for PC: perfect shot timing, FOV, smoothing and visible-check so your NBA 2K27 cheat looks legit on official and private Pro-Am lobbys. Start conservative, then save configs.',
    searchTerms: 'nba 2k27 auto green settings perfect shot timing fov smoothing nba 2k27 cheat nba 2k27 cheats',
    date: '2026-09-17',
    readMinutes: 10,
    tag: 'Auto Green',
    howTo: true,
    sections: [
      {
        heading: 'Start conservative',
        body: [
          'Blatant Auto Green is the fastest report on a NBA 2K27 online — private admins spectate more often than 2K Anti-Cheat alone catches. Start with a tight FOV, heavy smoothing and chest or nearest-bone targeting before head-only snap.',
          'Confirm live 2K Anti-Cheat status first. Auto Green settings cannot save a detected build after a 2K or 2K Anti-Cheat update.',
        ],
      },
      {
        heading: 'Perfect shot timing, FOV and distance',
        body: [
          'Perfect shot timing is the NBA 2K27 cheat players search for: fire near a opponent and the round still lands while your crosshair never snaps.',
          'FOV is the assist cone. Small FOV reads as tracking; huge FOV reads as a magnet in Elektro apartments.',
          'Smoothing is stealth. Higher = slower human corrections. Lower = snappier and riskier.',
          'Cap aim distance so airfield long shots do not look impossible.',
        ],
      },
      {
        heading: 'Visible-check and hitbox',
        body: [
          'Enable visibility checks so Auto Green does not lock through solid cover — easy for admins and squad mates to spot.',
          'Chest or body hitboxes are safer than permanent head lock. Body shots are usually enough in NBA 2K27.',
        ],
      },
      {
        heading: 'Save loot-run and PvP configs',
        body: [
          'For quiet gearing, keep Auto Green mild or off and lean on Court Vision player overlay, MyTeam card & badge overlay and radar. For contested military loot, add slight assist without snap behaviour.',
          'Save a “MyCareer grind” and a “PvP” config. Licenses for NBA 2K27 cheats start from $35 on nba2k27hack.org.',
        ],
      },
    ],
  },
  {
    slug: 'court-vision-guide',
    title: 'NBA 2K27 Court Vision and Player highlight Setup',
    excerpt:
      'Configure NBA 2K27 Court Vision and player highlight for opponent boxes, defenders tracking and loot highlighting without flooding your HUD.',
    metaTitle: 'NBA 2K27 Court Vision Player highlight Setup | Player Loot & Infected',
    metaDescription:
      'NBA 2K27 Court Vision and player highlight setup: opponent boxes, skeletons, distance, health, defender read overlay and loot highlighting. Clean HUD defaults for NBA 2K27 cheats on PC.',
    searchTerms: 'nba 2k27 esp player highlight nba 2k27 cheats loot esp player boxes defenders nba 2k27 cheat',
    date: '2026-09-17',
    readMinutes: 9,
    tag: 'ESP',
    howTo: true,
    sections: [
      {
        heading: 'What NBA 2K27 Court Vision actually does',
        body: [
          'NBA 2K27 Court Vision draws opponents, defenders and high-value loot through walls, fences and treelines before you expose yourself. It does not pull the trigger.',
          'Most searches for “nba 2k27 player highlight” or “nba 2k27 esp” want this awareness layer — in a game where a kit takes hours to build, information beats loud Auto Green.',
        ],
      },
      {
        heading: 'Player and defender read overlay',
        body: [
          'Enable boxes or skeletons, distance and health. Colour-code hostiles clearly and keep friendlies distinct.',
          'Defender read overlay is underrated — see the zombie behind the barn before it ruins a quiet house clear.',
          'Limit max distance so the HUD is not flooded with 500m contacts you cannot fight yet.',
        ],
      },
      {
        heading: 'MyTeam card & badge overlay filters',
        body: [
          'Filter by category: weapons, ammo, medical and rare gear. Showing every rag and can creates tunnel vision.',
          'On private Pro-Am lobbys, pair MyTeam card & badge overlay with base and stash markers so raids hit full storage.',
        ],
      },
      {
        heading: 'Stream and report risk',
        body: [
          'Use stream-proof if you clip or go live. Short ranges and clean colours look far less suspicious than neon skeletons across the whole map.',
        ],
      },
    ],
  },
  {
    slug: 'court-radar-guide',
    title: 'NBA 2K27 Court Radar Overlay Guide',
    excerpt:
      'Use the NBA 2K27 court radar 2D overlay to track off-screen opponents, avoid third parties and approach military loot safer.',
    metaTitle: 'NBA 2K27 Court Radar Guide | 2D Overlay for Survivors',
    metaDescription:
      'NBA 2K27 court radar guide for PC: 2D radar overlay, off-screen opponent tracking and safer military loot approaches. Pair with ESP for NBA 2K27 cheats that stay readable.',
    searchTerms: 'nba 2k27 court radar nba 2k27 cheats 2d radar overlay off screen nba 2k27 cheat',
    date: '2026-09-17',
    readMinutes: 8,
    tag: 'Radar',
    howTo: true,
    sections: [
      {
        heading: 'Why radar matters in NBA 2K27',
        body: [
          'Most NBA 2K27 deaths are information gaps — the sniper above Elektro, the duo already in the airfield, the third party that heard your gunfight. A court radar closes that gap without forcing Auto Green.',
          'Buyers searching “nba 2k27 court radar” want macro awareness for rotations between towns, military zones and base.',
        ],
      },
      {
        heading: 'Recommended radar setup',
        body: [
          'Keep radar small and readable so it does not cover your crosshair. Show hostile opponents clearly; dim defenders if the overlay gets noisy.',
          'Combine radar with ESP distance so you know whether a contact is a fight worth taking before you cross open ground.',
        ],
      },
      {
        heading: 'Radar + ESP + MyTeam card & badge overlay',
        body: [
          'Radar for macro movement, ESP for the building you are about to clear, MyTeam card & badge overlay for whether the risk is worth it. That split is how NBA 2K27 cheats setups feel smart instead of chaotic.',
        ],
      },
    ],
  },
  {
    slug: 'hotkeys',
    title: 'NBA 2K27 Cheats Hotkeys After Load',
    excerpt:
      'Menu and toggle hotkeys for NBA 2K27 cheats after a clean load — Auto Green, ESP, MyTeam card & badge overlay, radar and panic binds.',
    metaTitle: 'NBA 2K27 Cheats Hotkeys | Menu ESP Auto Green Toggles',
    metaDescription:
      'NBA 2K27 cheats hotkeys after checkout: open menu, Auto Green toggle, Court Vision player overlay, MyTeam card & badge overlay, court radar and stream-proof binds. Keep panic keys minimal for field use.',
    searchTerms: 'nba 2k27 cheats hotkeys menu esp auto green radar toggles nba 2k27 cheat',
    date: '2026-09-17',
    readMinutes: 8,
    tag: 'Hotkeys',
    howTo: true,
    sections: [
      {
        heading: 'After a clean load',
        body: [
          'Buy NBA 2K27 Cheats on nba2k27hack.org (from $35), confirm live 2K Anti-Cheat status, launch NBA 2K27, run the loader, then open the menu with the key in your delivery notes.',
          'If the menu does not open, do not spam keys — contact support with your order ID.',
        ],
      },
      {
        heading: 'Typical binds',
        body: [
          'Menu open/close, Court Vision player overlay master toggle, Auto Green toggle, MyTeam card & badge overlay toggle, radar toggle, stream-proof toggle.',
          'Bind only what you use. Extra panic binds get pressed mid-fight and look obvious.',
        ],
      },
      {
        heading: 'Session habits',
        body: [
          'Keep a quick ESP-off bind for screenshots or squad clips. Re-check hotkeys after every build update on the product page.',
        ],
      },
    ],
  },
  {
    slug: 'complete-setup',
    title: 'Complete NBA 2K27 Cheats Setup',
    excerpt:
      'Step-by-step NBA 2K27 cheats setup: buy from $35, antivirus exclusions, load order, enable ESP and Auto Green, save configs, re-check 2K Anti-Cheat.',
    metaTitle: 'NBA 2K27 Cheats Setup Guide | Complete Loader Steps',
    metaDescription:
      'Complete NBA 2K27 cheats setup for Windows PC: buy when status is clear, antivirus exclusions, load order, first-run ESP and Auto Green config, then re-check 2K Anti-Cheat after every patch.',
    searchTerms: 'nba 2k27 cheats setup load order windows complete guide nba 2k27 cheat',
    date: '2026-09-17',
    readMinutes: 11,
    tag: 'Setup',
    howTo: true,
    sections: [
      {
        heading: '1) Buy and confirm status',
        body: [
          'Open nba2k27hack.org. If status is Updating after a 2K Anti-Cheat patch, wait. If status is clear, checkout from $35 and use only the official delivery link.',
        ],
      },
      {
        heading: '2) Prep Windows',
        body: [
          'Close Discord overlay, GeForce overlay and RGB hooks that fight loaders.',
          'Follow the antivirus exclusion guide for the delivery folder before first launch. Spoofer steps belong in delivery notes when the build includes them.',
        ],
      },
      {
        heading: '3) Load order',
        body: [
          'Start NBA 2K27 from Steam or the NBA 2K27 launcher and reach the server browser.',
          'Run the NBA 2K27 Cheats loader as delivered.',
          'Wait for a successful load, open the menu, enable Court Vision player overlay, MyTeam card & badge overlay and radar, then Auto Green only if you want it.',
        ],
      },
      {
        heading: '4) Save configs and re-check patches',
        body: [
          'Save a loot-run config and a PvP config. After any NBA 2K27 or 2K Anti-Cheat update, check status again before you join a server.',
          'On a modded private Pro-Am lobby, do one short test session before a long night.',
        ],
      },
    ],
  },
  {
    slug: 'windows-setup',
    title: 'NBA 2K27 Cheats on Windows 10 and 11',
    excerpt:
      'Windows 10/11 prep for NBA 2K27 cheats — overlays, Defender exclusions, admin rights and a clean first launch against 2K Anti-Cheat.',
    metaTitle: 'NBA 2K27 Cheats Windows 10/11 Setup | PC Guide',
    metaDescription:
      'Windows 10 and 11 setup for NBA 2K27 cheats: close overlays, add Defender exclusions, launch with correct permissions and run a clean first load against 2K Anti-Cheat.',
    searchTerms: 'nba 2k27 cheats windows 11 setup defender overlay admin nba 2k27 cheat',
    date: '2026-09-17',
    readMinutes: 8,
    tag: 'Windows',
    howTo: true,
    sections: [
      {
        heading: 'Supported systems',
        body: [
          'NBA 2K27 Cheats targets NBA 2K27 on Windows 10 and Windows 11 (Intel and AMD). Keep Windows stable enough that the NBA 2K27 launcher starts cleanly, then freeze major changes mid-session.',
        ],
      },
      {
        heading: 'Overlays and background apps',
        body: [
          'Disable Discord overlay, NVIDIA/AMD overlays and aggressive RGB suites before load. They commonly cause “loader opened but menu never appeared”.',
        ],
      },
      {
        heading: 'Permissions and launcher',
        body: [
          'Run the delivered loader with the permissions in your order email. Do not move files out of the excluded folder after setup.',
          'Use the official Steam or NBA 2K27 launcher only — unofficial clients are unsupported.',
        ],
      },
    ],
  },
  {
    slug: 'disable-antivirus',
    title: 'Antivirus Exclusions for NBA 2K27 Cheats',
    excerpt:
      'Allowlist NBA 2K27 cheats in Windows Defender and common antivirus so the loader is not quarantined before first run.',
    metaTitle: 'NBA 2K27 Cheats Antivirus Exclusions | Defender',
    metaDescription:
      'Allowlist NBA 2K27 cheats loaders in Windows Defender and third-party antivirus before you load. Restore quarantines, exclude the delivery folder, then continue setup when status is clear.',
    searchTerms: 'nba 2k27 cheats antivirus defender exclusion quarantine loader nba 2k27 cheat',
    date: '2026-09-17',
    readMinutes: 8,
    tag: 'Antivirus',
    howTo: true,
    sections: [
      {
        heading: 'Why loaders get flagged',
        body: [
          'Cheat loaders often trip generic heuristics even from a legitimate nba2k27hack.org purchase. Exclusion comes before you spam launch into NBA 2K27.',
        ],
      },
      {
        heading: 'Windows Defender steps',
        body: [
          'Windows Security → Virus and threat protection → Manage settings → add an exclusion for the delivery folder.',
          'Restore from Protection history if the file was quarantined, then exclude the folder permanently.',
        ],
      },
      {
        heading: 'Then continue setup',
        body: [
          'Return to Complete Setup for load order. Open support with your order ID if a clear-to-load NBA 2K27 build still fails after exclusion.',
        ],
      },
    ],
  },
  {
    slug: 'stream-proof-setup',
    title: 'Stream-Proof NBA 2K27 Cheats for OBS',
    excerpt:
      'Hide NBA 2K27 Court Vision, loot highlighting and Auto Green overlays from OBS and capture tools with stream-proof mode.',
    metaTitle: 'Stream-Proof NBA 2K27 Cheats | OBS Safe Overlay',
    metaDescription:
      'Stream-proof NBA 2K27 cheats for OBS and clips: keep ESP, player highlight and Auto Green overlays off recordings while you still see them locally. Test with a private capture first.',
    searchTerms: 'nba 2k27 stream proof cheats esp obs hide overlay clips nba 2k27 cheat',
    date: '2026-09-17',
    readMinutes: 8,
    tag: 'Stream',
    howTo: true,
    sections: [
      {
        heading: 'Why stream-proof exists',
        body: [
          'ESP and loot overlays on stream are an instant report magnet. Private NBA 2K27 admins watch clips closely. Stream-proof keeps supported overlays out of common capture paths while you still see them locally.',
        ],
      },
      {
        heading: 'OBS checklist',
        body: [
          'Enable stream-proof in the NBA 2K27 Cheats menu before starting OBS.',
          'Prefer game capture over display capture when possible, then verify with a private test recording before you go live.',
        ],
      },
      {
        heading: 'Clips and report risk',
        body: [
          'Stream-proof does not hide blatant Auto Green on a squad clip or admin spectator feed. Conservative perfect shot timing still matters.',
        ],
      },
    ],
  },
    {
    slug: 'anti-cheat-status',
    title: 'NBA 2K27 2K Anti-Cheat Status: Clear to Load vs Updating',
    excerpt:
      'What clear-to-load and Updating mean for NBA 2K27 cheats after 2K Anti-Cheat and game patches — and why admin bans are a separate risk.',
    metaTitle: 'NBA 2K27 2K Anti-Cheat Status | Clear to Load vs Updating',
    metaDescription:
      'NBA 2K27 2K Anti-Cheat status explained for NBA 2K27 cheats: clear-to-load vs Updating after patches, why you wait, and how admin bans differ from anti-cheat detections.',
    searchTerms: 'nba 2k27 anti-cheat status clear to load updating nba 2k27 cheats explained',
    date: '2026-09-17',
    readMinutes: 8,
    tag: 'Status',
    sections: [
      {
        heading: 'Status is part of the product',
        body: [
          '2K Anti-Cheat updates can invalidate a build overnight. nba2k27hack.org shows clear-to-load or Updating so you are not buying a dead loader from a Discord screenshot.',
          'Licenses start from $35 — honest status beats fake always-safe marketing against 2K Anti-Cheat.',
        ],
      },
      {
        heading: 'Clear to load vs Updating',
        body: [
          'Clear to load (product label: Undetected) — ready for the current NBA 2K27 build.',
          'Updating — wait. Do not force yesterday’s loader into today’s 2K Anti-Cheat.',
        ],
      },
      {
        heading: 'Admin bans are separate',
        body: [
          'On private NBA 2K27 onlines most bans come from admins reviewing reports, not from 2K Anti-Cheat alone. Play conservatively even while status is green.',
        ],
      },
      {
        heading: 'After every patch',
        body: [
          'Re-read status after every NBA 2K27 or 2K Anti-Cheat patch before you join a server. Use the status checklist guide for the pre-buy / pre-load habit.',
        ],
      },
    ],
  },
  {
    slug: 'undetected-status',
    title: '2K Anti-Cheat Status Checklist Before You Buy or Load',
    excerpt:
      'Short 2K Anti-Cheat status checklist for NBA 2K27 cheats — confirm clear-to-load before checkout and before every post-patch session.',
    metaTitle: '2K Anti-Cheat Status Checklist | Before You Buy NBA 2K27 Cheats',
    metaDescription:
      '2K Anti-Cheat status checklist for NBA 2K27 cheats: confirm clear-to-load before checkout and before every post-patch session. Wait when Updating; buy from $35 when status is live.',
    searchTerms: 'nba 2k27 cheats status checklist before buy load anti-cheat undetected nba 2k27 cheats',
    date: '2026-09-17',
    readMinutes: 8,
    tag: 'Status',
    sections: [
      {
        heading: 'Before checkout',
        body: [
          'Confirm clear-to-load status on the homepage or product page. If Updating, wait or read Refunds for extended downtime. Prices start from $35 when status is live.',
        ],
      },
      {
        heading: 'Before every session',
        body: [
          'Re-check 2K Anti-Cheat status after NBA 2K27 patches. Load once cleanly — do not spam inject into a failed state before you join a server.',
        ],
      },
      {
        heading: 'Spoofer note',
        body: [
          'If delivery includes a spoofer, follow those steps only when status is clear to load. Spoofing does not replace waiting out an Updating window.',
        ],
      },
    ],
  },
{
    slug: 'mycareer-play-guide',
    title: 'Safer NBA 2K27 Cheat Settings for Loot Runs',
    excerpt:
      'Safer NBA 2K27 cheat defaults for survival and MyCareer grinds — ESP-first play, mild perfect shot timing, radar awareness and report-conscious habits.',
    metaTitle: 'Safer NBA 2K27 Cheat Settings | Loot Run Defaults',
    metaDescription:
      'Safer NBA 2K27 cheat settings for MyCareer grinds and survival: ESP-first play, mild perfect shot timing, loot highlighting, court radar and 2K Anti-Cheat habits that reduce report risk on private Pro-Am lobbys.',
    searchTerms: 'nba 2k27 cheat settings MyCareer grind survival safer defaults esp auto green nba 2k27 cheats',
    date: '2026-09-17',
    readMinutes: 9,
    tag: 'Survival',
    sections: [
      {
        heading: 'NBA 2K27 is a report environment',
        body: [
          '2K Anti-Cheat is not the only risk. Private admins spectate reports, and a opponent who lost a two-week kit will write that report. Conservative visuals beat loud Auto Green.',
        ],
      },
      {
        heading: 'Recommended survival stack',
        body: [
          'Court Vision player overlay, defender read overlay, MyTeam card & badge overlay and radar on; Auto Green off or heavily smoothed; short ESP range; stream-proof on if you clip.',
          'Save this as a loot-run config. A geared PvP config can be slightly more aggressive, but perfect shot timing should still look natural.',
        ],
      },
      {
        heading: 'Map habits that pay',
        body: [
          'Coast towns (Elektro, Cherno): short-range ESP and defenders tracking while you gear. Military zones and NW airfield: radar first, MyTeam card & badge overlay second, mild perfect shot timing only if you must fight.',
          'Base raids on private Pro-Am lobbys: confirm stash and tent markers before you open a wall.',
          'If 2K Anti-Cheat flips to Updating mid-session, stop. Waiting is cheaper than forcing a rebuild window.',
        ],
      },
    ],
  },
  {
    slug: 'loader-errors',
    title: 'Fix NBA 2K27 Cheats Loader Errors',
    excerpt:
      'Troubleshoot NBA 2K27 cheats loader errors — menu not opening, instant close, antivirus quarantine and failed inject.',
    metaTitle: 'Fix NBA 2K27 Cheats Loader Errors | Inject & Menu',
    metaDescription:
      'Fix NBA 2K27 cheats loader errors on Windows: antivirus quarantine, overlays, failed inject and menu not opening. Confirm 2K Anti-Cheat status is clear first, then escalate with your order ID.',
    searchTerms: 'nba 2k27 cheats loader error inject failed menu not opening fix',
    date: '2026-09-17',
    readMinutes: 8,
    tag: 'Support',
    howTo: true,
    sections: [
      {
        heading: 'Stop and check status',
        body: [
          'First question: is the product clear to load against 2K Anti-Cheat? Updating builds fail for reasons no setting can fix.',
        ],
      },
      {
        heading: 'Common fixes',
        body: [
          'Restore quarantined files, confirm folder exclusion, close overlays, reboot once, then try one clean load with NBA 2K27 running from the official launcher.',
          'Do not run random “fix DLL” downloads elsewhere — support only covers official delivery from nba2k27hack.org.',
        ],
      },
      {
        heading: 'Escalate with order ID',
        body: [
          'Contact Support with your order ID, Windows version, server type, and a short error description. Screenshots of 2K Anti-Cheat status and the loader window help.',
        ],
      },
    ],
  },
]

export function getBlog(slug: string) {
  return BLOGS.find((b) => b.slug === slug)
}

export { blogPath } from './blog-paths'
