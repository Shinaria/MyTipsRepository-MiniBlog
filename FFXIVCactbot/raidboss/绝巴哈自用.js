console.log('=======绝巴哈自用.js=======');
Options.Triggers.push({
  zoneId: ZoneId.TheUnendingCoilOfBahamutUltimate,
  timeline: [
    '586.0 "D4减伤->十亿核爆1·黑炎" duration 10',
    '636.1 "D2减伤->十亿核爆2·灾厄" duration 10',
    '698.5 "D4减伤->十亿核爆3·天地" duration 10',
    '757.4 "D2减伤->十亿核爆4·连击" duration 10',
    '1241.1 "D4减伤->无尽顿悟1" duration 10',
    '1296.9 "D2减伤->无尽顿悟2" duration 10',
    '1330.5 "D4减伤->无尽顿悟3" duration 10',
    '1380.6 "D2减伤->无尽顿悟4" duration 10',
    '1431.6 "D4减伤->无尽顿悟5" duration 10',
  ],
  triggers: [  
    {
    // https://xivapi.com/NpcYell/6497?pretty=true
    // en: From on high I descend, the hallowed moon to call!
    id: 'UCU Nael Quote 1',
    type: 'NpcYell',
    netRegex: {
      npcYellId: '1961',
      capture: false
    },
    durationSeconds: 6,
    infoText: (_data, _matches, output) => output.text(),
    tts: { cn: '先分散 · 后月环' },
    outputStrings: {
      text: {cn: '分散←→ => 月环↑↑'}
    }
  },
    {
      // https://xivapi.com/NpcYell/6496?pretty=true
      // en: From on high I descend, the iron path to walk!
      id: 'UCU Nael Quote 2',
      type: 'NpcYell',
      netRegex: {
        npcYellId: '1960',
        capture: false
      },
      durationSeconds: 6,
      infoText: (_data, _matches, output) => output.text(),
      tts: { cn: '先分散 · 后钢铁' },
      outputStrings: {
        text: { cn: '分散←→ => 钢铁↓↓' }
      }
    },
    {
      // https://xivapi.com/NpcYell/6495?pretty=true
      // en: Take fire, O hallowed moon!
      id: 'UCU Nael Quote 3',
      type: 'NpcYell',
      netRegex: {
        npcYellId: '195F',
        capture: false
      },
      durationSeconds: 6,
      infoText: (_data, _matches, output) => output.text(),
      tts: { cn: '先分摊 · 后月环' },
      outputStrings: {
        text: { cn: '分摊→← => 月环↑↑' }
      }
    },
    {
      // https://xivapi.com/NpcYell/6494?pretty=true
      // en: Blazing path, lead me to iron rule!
      id: 'UCU Nael Quote 4',
      type: 'NpcYell',
      netRegex: {
        npcYellId: '195E',
        capture: false
      },
      infoText: (_data, _matches, output) => output.text(),
      tts: { cn: '先分摊 · 后钢铁' },
      outputStrings: {
        text: { cn: '分摊→← => 钢铁↓↓' }
      }
    },
    {
      // https://xivapi.com/NpcYell/6493?pretty=true
      // en: O hallowed moon, take fire and scorch my foes!
      id: 'UCU Nael Quote 5',
      type: 'NpcYell',
      netRegex: {
        npcYellId: '195D',
        capture: false
      },
      infoText: (_data, _matches, output) => output.text(),
      tts: { cn: '先月环 · 后分摊' },
      outputStrings: {
        text: { cn: '月环↑↑ => 分摊→←' }
      }
    },
    {
      // https://xivapi.com/NpcYell/6492?pretty=true
      // en: O hallowed moon, shine you the iron path!
      id: 'UCU Nael Quote 6',
      type: 'NpcYell',
      netRegex: {
        npcYellId: '195C',
        capture: false
      },
      infoText: (_data, _matches, output) => output.text(),
      tts: { cn: '先月环 · 后钢铁' },
      outputStrings: {
        text: { cn: '月环↑↑ => 钢铁↓↓' }
      }
    },
    {
      // https://xivapi.com/NpcYell/6501?pretty=true
      // en: Fleeting light! 'Neath the red moon, scorch you the earth!
      id: 'UCU Nael Quote 7',
      type: 'NpcYell',
      netRegex: {
        npcYellId: '1965',
        capture: false
      },
      delaySeconds: 4,
      durationSeconds: 6,
      // Make this alert so it doesn't overlap with the dive infoText occuring here.
      alertText: (_data, _matches, output) => output.text(),
      tts: { cn: '先跳T · 后分摊' },
      outputStrings: {
        text: { cn: '跳T => 分摊→←' }
      }
    },
    {
      // https://xivapi.com/NpcYell/6500?pretty=true
      // en: Fleeting light! Amid a rain of stars, exalt you the red moon!
      id: 'UCU Nael Quote 8',
      type: 'NpcYell',
      netRegex: {
        npcYellId: '1964',
        capture: false
      },
      delaySeconds: 4,
      durationSeconds: 6,
      // Make this alert so it doesn't overlap with the dive infoText occuring here.
      alertText: (_data, _matches, output) => output.text(),
      tts: { cn: '先分散 · 后跳T' },
      outputStrings: {
        text: { cn: '分散←→ => 跳T' }
      }
    },
    {
      // https://xivapi.com/NpcYell/6502?pretty=true
      // en: From on high I descend, the moon and stars to bring!
      id: 'UCU Nael Quote 9',
      type: 'NpcYell',
      netRegex: {
        npcYellId: '1966',
        capture: false
      },
      durationSeconds: 9,
      infoText: (_data, _matches, output) => output.text(),
      tts: { cn: '先分散 · 后月环' },
      outputStrings: {
        text: { cn: '分散←→ => 月环↑↑' }
      }
    },
    {
      // https://xivapi.com/NpcYell/6503?pretty=true
      // en: From hallowed moon I descend, a rain of stars to bring!
      id: 'UCU Nael Quote 10',
      type: 'NpcYell',
      netRegex: {
        npcYellId: '1967',
        capture: false
      },
      durationSeconds: 9,
      infoText: (_data, _matches, output) => output.text(),
      tts: { cn: '先月环 · 后分散' },
      outputStrings: {
        text: { cn: '月环↑↑ => 分散←→' }
      }
    },
    {
      // https://xivapi.com/NpcYell/6507?pretty=true
      // en: From hallowed moon I bare iron, in my descent to wield!
      id: 'UCU Nael Quote 11',
      type: 'NpcYell',
      netRegex: {
        npcYellId: '196B',
        capture: false
      },
      durationSeconds: 9,
      infoText: (_data, _matches, output) => output.text(),
      tts: { cn: '月环 · 钢铁 · 分散' },
      outputStrings: {
        text: { cn: '月环↑↑ => 钢铁↓↓ => 分散←→' }
      }
    },
    {
      // https://xivapi.com/NpcYell/6506?pretty=true
      // en: From hallowed moon I descend, upon burning earth to tread!
      id: 'UCU Nael Quote 12',
      type: 'NpcYell',
      netRegex: {
        npcYellId: '196A',
        capture: false
      },
      durationSeconds: 9,
      infoText: (_data, _matches, output) => output.text(),
      tts: { cn: '月环 · 分散 · 分摊' },
      outputStrings: {
        text: { cn: '月环↑↑ => 分散←→ => 分摊→←' }
      }
    },
    {
      // https://xivapi.com/NpcYell/6504?pretty=true
      // en: Unbending iron, take fire and descend!
      id: 'UCU Nael Quote 13',
      type: 'NpcYell',
      netRegex: {
        npcYellId: '1968',
        capture: false
      },
      durationSeconds: 9,
      infoText: (_data, _matches, output) => output.text(),
      tts: { cn: '钢铁 · 分摊 · 分散' },
      outputStrings: {
        text: { cn: '钢铁↓↓ => 分摊→← => 分散←→' }
      }
    },
    {
      // https://xivapi.com/NpcYell/6505?pretty=true
      // en: Unbending iron, descend with fiery edge!
      id: 'UCU Nael Quote 14',
      type: 'NpcYell',
      netRegex: {
        npcYellId: '1969',
        capture: false
      },
      durationSeconds: 9,
      infoText: (_data, _matches, output) => output.text(),
      tts: { cn: '钢铁 · 分散 · 分摊' },
      outputStrings: {
        text: { cn: '钢铁↓↓ => 分散←→ => 分摊→←' }
      }
    },
    {
      id: 'UCU Nael Your Doom',
      type: 'GainsEffect',
      netRegex: {
        effectId: 'D2'
      },
      condition: (data, matches) => {
        return data.me === matches.target;
      },
      durationSeconds: (_data, matches) => {
        if (parseFloat(matches.duration) <= 6) return 3;
        if (parseFloat(matches.duration) <= 10) return 6;
        return 9;
      },
      suppressSeconds: 20,
      alarmText: (_data, matches, output) => {
        if (parseFloat(matches.duration) <= 6) return output.doom1();
        if (parseFloat(matches.duration) <= 10) return output.doom2();
        return output.doom3();
      },
      tts: (_data, matches, output) => {
        if (parseFloat(matches.duration) <= 6) return output.justNumber({
          num: '1'
        });
        if (parseFloat(matches.duration) <= 10) return output.justNumber({
          num: '2'
        });
        return output.justNumber({
          num: '3'
        });
      },
      outputStrings: {
        doom1: { cn: '死宣 · 一' },
        doom2: { cn: '死宣 · 二' },
        doom3: { cn: '死宣 · 三' },
        justNumber: { cn: '${num}${num}${num}' }
      }
    },
    {
      id: 'UCU Nael Dragon Dive Marker Me Number',
      type: 'HeadMarker',
      netRegex: {
        id: '0014'
      },
      condition: data => !data.trio,
      alarmText: (data, matches, output) => {
        if (matches.target !== data.me) return;
        const num =data.naelDiveMarkerCount;
        return output.text({
          num : num
        });
      },
      outputStrings: {
        text: {cn: '${num}号龙'},
      }
    }, 
    {
      id: 'UCU Nael Dragon Dive Marker Others',
      type: 'HeadMarker',
      netRegex: {
        id: '0014'
      },
      condition: data => !data.trio,
      infoText: (data, matches, output) => {
        if (matches.target === data.me) return;
        const num = data.naelDiveMarkerCount + 1;
        return output.text({
          num: num,
          player: data.party.member(matches.target)
        });
      },
      outputStrings: {
        text: {cn: '冲 #${num}: ${player}'}
      }
    }, 
  ],
});