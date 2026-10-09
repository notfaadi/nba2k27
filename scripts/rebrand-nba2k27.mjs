/**
 * One-time rebrand: DayZ Cheats → NBA 2K27 Cheats
 */
import { readFileSync, writeFileSync, readdirSync, statSync, renameSync, existsSync } from 'fs'
import { join, extname } from 'path'

const root = join(import.meta.dirname, '..')
const TEXT_EXT = new Set([
  '.ts',
  '.tsx',
  '.astro',
  '.js',
  '.mjs',
  '.json',
  '.md',
  '.toml',
  '.txt',
  '.css',
  '.svg',
])

/** Longest-first replacements (content + paths + identifiers). */
const REPLACEMENTS = [
  ['https://dayzcheats.io', 'http://localhost:5174'],
  ['dayzcheats.io', 'localhost:5174'],
  ['OFFICIAL_DAYZ_LINKS', 'OFFICIAL_NBA2K27_LINKS'],
  ['DAYZ_PRODUCT_HERO', 'NBA2K27_PRODUCT_HERO'],
  ['DAYZ_PRODUCT_COVER', 'NBA2K27_PRODUCT_COVER'],
  ['DAYZ_HOME_VIDEO', 'NBA2K27_HOME_VIDEO'],
  ['DAYZ_VIDEO_THUMB', 'NBA2K27_VIDEO_THUMB'],
  ['DAYZ_HOME_ART', 'NBA2K27_HOME_ART'],
  ['DAYZ_CONTROL', 'NBA2K27_CONTROL'],
  ['DAYZ_TACTICAL', 'NBA2K27_TACTICAL'],
  ['DAYZ_GAMEPLAY', 'NBA2K27_GAMEPLAY'],
  ['DAYZ_ESP', 'NBA2K27_ESP'],
  ['DAYZ_MENU', 'NBA2K27_MENU'],
  ['DAYZ_BOX', 'NBA2K27_BOX'],
  ['DAYZ_COVER', 'NBA2K27_COVER'],
  ['DAYZ_SOLDIER', 'NBA2K27_SOLDIER'],
  ['DAYZ_HERO', 'NBA2K27_HERO'],
  ['DAYZ_OG', 'NBA2K27_OG'],
  ['DayZPreview', 'NBA2K27Preview'],
  ['DayZPreviewProps', 'NBA2K27PreviewProps'],
  ['/dayz-cheats', '/nba2k27-cheats'],
  ['dayz-cheats', 'nba2k27-cheats'],
  ['/dayz-hacks', '/nba2k27-cheats'],
  ['dayz-hacks', 'nba2k27-hacks'],
  ['dayz-hack', 'nba2k27-hack'],
  ['dayz-cheat', 'nba2k27-cheat'],
  ['dayz-standalone-cheats', 'nba2k27-cheats'],
  ['dayz-aimbot', 'nba2k27-auto-green'],
  ['dayz-esp', 'nba2k27-court-vision'],
  ['dayz-wallhack', 'nba2k27-player-highlight'],
  ['dayz-radar-hack', 'nba2k27-radar'],
  ['dayz-radar', 'nba2k27-radar'],
  ['dayz-loot-esp', 'nba2k27-myteam-esp'],
  ['dayz-spoofer', 'nba2k27-spoofer'],
  ['undetected-dayz-cheats', 'undetected-nba2k27-cheats'],
  ['undetected-dayz-hacks', 'undetected-nba2k27-hacks'],
  ['battleye-dayz-cheats', 'nba2k27-anti-cheat-cheats'],
  ['buy-dayz-cheats', 'buy-nba2k27-cheats'],
  ['buy-dayz-hacks', 'buy-nba2k27-hacks'],
  ['dayz-setup', 'nba2k27-setup'],
  ['/media/dayz-', '/media/nba2k27-'],
  ['/og/dayz-', '/og/nba2k27-'],
  ['/videos/dayz-', '/videos/nba2k27-'],
  ['dayz-preview.mp4', 'nba2k27-preview.mp4'],
  ['dayz-video-thumb.jpg', 'nba2k27-video-thumb.jpg'],
  ['Bohemia Interactive', '2K Sports'],
  ['Bohemia', '2K'],
  ['battleye-status', 'anti-cheat-status'],
  ['BattlEye status', '2K Anti-Cheat status'],
  ['BattlEye updates', '2K Anti-Cheat updates'],
  ['BattlEye and DayZ patches', '2K patches and anti-cheat updates'],
  ['BattlEye and DayZ', '2K Anti-Cheat and NBA 2K27'],
  ['BattlEye rebuilds', 'anti-cheat rebuilds'],
  ['BattlEye risk', '2K Anti-Cheat risk'],
  ['BattlEye', '2K Anti-Cheat'],
  ['battleye', 'anti-cheat'],
  ['DayZ Standalone', 'NBA 2K27'],
  ['DayZ Cheats', 'NBA 2K27 Cheats'],
  ['DayZ Cheat', 'NBA 2K27 Cheat'],
  ['DayZ cheats', 'NBA 2K27 cheats'],
  ['DayZ cheat', 'NBA 2K27 cheat'],
  ['DayZ Hacks', 'NBA 2K27 Hacks'],
  ['DayZ hacks', 'NBA 2K27 hacks'],
  ['DayZ hack', 'NBA 2K27 hack'],
  ['DayZ Aimbot', 'NBA 2K27 Auto Green'],
  ['DayZ aimbot', 'NBA 2K27 auto green'],
  ['DayZ ESP', 'NBA 2K27 Court Vision'],
  ['DayZ esp', 'NBA 2K27 court vision'],
  ['DayZ Wallhack', 'NBA 2K27 Player Highlight'],
  ['DayZ wallhack', 'NBA 2K27 player highlight'],
  ['DayZ Radar Hack', 'NBA 2K27 Court Radar'],
  ['DayZ radar hack', 'NBA 2K27 court radar'],
  ['DayZ radar', 'NBA 2K27 radar'],
  ['DayZ-only', 'NBA 2K27-only'],
  ['DayZ player', 'NBA 2K27 player'],
  ['DayZ survivor', 'MyCareer player'],
  ['DayZ server', 'NBA 2K27 online'],
  ['DayZ servers', 'NBA 2K27 online modes'],
  ['DayZ on', 'NBA 2K27 on'],
  ['DayZ SA', 'NBA 2K27'],
  ['DayZ ·', 'NBA 2K27 ·'],
  ['DayZ,', 'NBA 2K27,'],
  ['DayZ.', 'NBA 2K27.'],
  ['DayZ ', 'NBA 2K27 '],
  ['DayZ', 'NBA 2K27'],
  ['silent-aim Aimbot', 'Auto Green & perfect shot timing'],
  ['silent aim Aimbot', 'Auto Green & perfect shot timing'],
  ['silent aim', 'perfect shot timing'],
  ['Silent aim', 'Perfect shot timing'],
  ['Aimbot settings', 'Auto Green settings'],
  ['Aimbot Settings', 'Auto Green Settings'],
  ['Aimbot,', 'Auto Green,'],
  ['Aimbot ', 'Auto Green '],
  ['Aimbot', 'Auto Green'],
  ['aimbot', 'auto green'],
  ['player ESP', 'Court Vision player overlay'],
  ['Player ESP', 'Court Vision player overlay'],
  ['loot ESP', 'MyTeam card & badge overlay'],
  ['Loot ESP', 'MyTeam card & badge overlay'],
  ['wallhack', 'player highlight'],
  ['Wallhack', 'Player highlight'],
  ['radar hack', 'court radar'],
  ['Radar hack', 'Court radar'],
  ['Radar Hack', 'Court Radar'],
  ['Infected ESP', 'Defender read overlay'],
  ['infected ESP', 'defender read overlay'],
  ['Chernarus and Livonia', 'Rec and Park'],
  ['Chernarus or Livonia', 'Rec Center or Park'],
  ['Chernarus', 'Rec Center'],
  ['Livonia', 'Park'],
  ['survivor', 'opponent'],
  ['survivors', 'opponents'],
  ['infected', 'defenders'],
  ['loot run', 'MyCareer grind'],
  ['private server', 'private Pro-Am lobby'],
  ['private servers', 'private Pro-Am lobbies'],
  ['official DayZ servers', 'NBA 2K27 online modes'],
  ['Official DayZ servers', 'NBA 2K27 online modes'],
  ['official and private servers', 'Park, Rec and MyCareer'],
  ['Base & Stash Intel', 'MyTeam & VC Intel'],
  ['base and stash intel', 'MyTeam and VC intel'],
  ['Spoofer + Cleaner', 'HWID Spoofer + Cleaner'],
  ['dayz.com', 'nba.2k.com'],
  ['https://store.steampowered.com/app/221100/DayZ/', 'https://store.steampowered.com/app/2338770/NBA_2K25/'],
  ["slug: 'dayz'", "slug: 'nba2k27'"],
  ["getGame('dayz')", "getGame('nba2k27')"],
  ["guideSlug=\"dayz-cheats\"", 'guideSlug="nba2k27-cheats"'],
  ["guidePath('dayz')", "guidePath('nba2k27')"],
  ['  dayz:', '  nba2k27:'],
  ['dayzcheats', 'nba2k27cheats'],
  ['dayzqrh', 'nba2k27cheats'],
  ['/products/dayz-cheats', '/products/nba2k27-cheats'],
  ['raid-play-guide', 'mycareer-play-guide'],
  ['Survival & loot', 'MyCareer & Park'],
  ['Survival & Loot', 'MyCareer & Park'],
  ['raid-play', 'mycareer-play'],
  ['esp-wallhack-guide', 'court-vision-guide'],
  ['radar-hack-guide', 'court-radar-guide'],
  ['ESP & wallhack', 'Court Vision guide'],
  ['Radar hack', 'Court radar'],
]

function walk(dir, files = []) {
  for (const name of readdirSync(dir)) {
    if (name === 'node_modules' || name === 'dist' || name === '.git') continue
    const p = join(dir, name)
    if (statSync(p).isDirectory()) walk(p, files)
    else files.push(p)
  }
  return files
}

const files = walk(root).filter((f) => TEXT_EXT.has(extname(f).toLowerCase()))
for (const file of files) {
  if (file.includes('rebrand-nba2k27.mjs')) continue
  let text = readFileSync(file, 'utf8')
  let next = text
  for (const [from, to] of REPLACEMENTS) {
    next = next.split(from).join(to)
  }
  if (next !== text) writeFileSync(file, next, 'utf8')
}

const renames = [
  ['src/pages/dayz-cheats.astro', 'src/pages/nba2k27-cheats.astro'],
  ['src/components/DayZPreview.tsx', 'src/components/NBA2K27Preview.tsx'],
]
for (const [from, to] of renames) {
  const a = join(root, from)
  const b = join(root, to)
  if (existsSync(a) && !existsSync(b)) renameSync(a, b)
}

console.log(`Rebranded ${files.length} files.`)
