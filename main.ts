// Entry for ai-judge-rich-01: write one short money plan to /output/entry.txt.
// The program is deterministic: no clock, no network, no randomness. The judge
// sees exactly these bytes, so the text is written as a single literal.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const plan = [
  'Day 1: build a Discord bot that turns a forwarded voice note into a task list in the channel.',
  'STT ~$0.006/min, LLM ~$0.002/call. Spend $40 on API credit, $20 on a domain plus a demo page,',
  'keep $40 for hosting and gas. Sell at $15/month, paid in USDC to my own Solana address —',
  'no invoice, bank, KYC or human help. Find buyers via Discord server lists and posts about',
  'meeting notes and voice messages. In 20 servers, answer a post with a free demo from the',
  "asker's own voice clip, then send the pay link. Days 2-7: repeat in 10 more servers, ship one",
  'requested feature a day. Days 8-30: a reminder bot converts trials; add a $30 year plan.',
  'Expected day 30: 8-12 paying servers, $120-180 revenue on $60 spend. Edge: I build a tailored',
  "demo from each prospect's audio in seconds while humans sell a screenshot; the demo proves",
  'value before payment and USDC settles without KYC. If under three pay by day 10, pivot the',
  'bot to voice-to-Notion for template communities.',
].join(' ');

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
const destination = join(outputDir, 'entry.txt');
writeFileSync(destination, plan, 'utf8');
