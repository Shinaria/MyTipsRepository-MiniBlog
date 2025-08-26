console.log('=======绝龙诗自用.js=======');
Options.Triggers.push({
    zoneId: ZoneId.DragonsongsRepriseUltimate,
    timeline: [
        '81.2 "抗死->天火" duration 7',
        '95.2 "昏乱->至圣" duration 7',
        '606.0 "昏乱->古代爆震" duration 6',
        '696.1 "昏乱->万物终结" duration 10',
        '1033.9 "第一次钢铁/月环" Ability {"id":"671[56]","source":"尼德霍格"}',
        '1037.0 "第一次月环/钢铁" Ability {"id":"671[56]","source":"尼德霍格"}',
        '1042.0 "抗死->暴君之瞳" duration 10',
        '1055.4 "第二次钢铁/月环" Ability {"id":"671[56]","source":"尼德霍格"}',
        '1058.5 "第二次月环/钢铁" Ability {"id":"671[56]","source":"尼德霍格"}',
        '2028.5 "昏乱->纯洁心灵" duration 1',
        '3049.0 "抗死->古代爆震" duration 5',
        '3202.2 "昏乱->古代爆震" duration 5',
        '4005.8 "抗死->异史终结" duration 10',
        '4076.9 "昏乱->第一次十亿核爆" duration 7',
        '4128.6 "抗死->第二次死亡轮回" duration 7',
        '4208.5 "昏乱->第三次死亡轮回" duration 7',
    ],
    triggers: [
        {
        id: '牙尾连旋',
        type: 'StartsUsing',
        netRegex: {
          id: '6712',
          source: 'Nidhogg'
        },
        durationSeconds: 5,
        alertText: { cn: '牙尾·先钢铁↓↓ 后月环↑↑' },
      },
      {
      id: '尾牙连旋',
      type: 'StartsUsing',
      netRegex: {
        id: '6713',
        source: 'Nidhogg'
      },
      durationSeconds: 5,
      alertText: { cn: '尾牙·先月环↑↑  后钢铁↓↓' },
    },{
      id: 'P3一运增补',
      type: 'GainsEffect',
      // AC3 = High Jump Target
      // AC4 = Spineshatter Dive Target
      // AC5 = Elusive Jump Target
      netRegex: {
        effectId: ['AC3', 'AC4', 'AC5']
      },
      condition: Conditions.targetIsYou(),
      delaySeconds: 0.5,
      durationSeconds: 30,
      alertText: (data, _matches, output) => {
        const num = data.diveFromGraceNum[data.me];
        if(num === 3) return output.dotThree();
        if(num === 2) return output.dotTwo();
        if(num === 1) 
        {
          if(data.diveFromGraceDir[data.me] === 'up'||data.diveFromGraceDir[data.me] === 'down')
            return output.dotOneSides();
          if(data.diveFromGraceHasArrow[num])
            return output.dotOneMiddle();
          return output.dotOneAllCircles();
        }
      },
      outputStrings: {
        dotThree: {
          cn: '踩1塔，放3塔',
        },
        dotTwo: {
          cn: '放2塔，踩3塔',
        },
        dotOneSides: {
          cn: '放1塔，踩2塔',
        },
        dotOneMiddle: {
          cn: '放1塔，踩3塔',
        },
        dotOneAllCircles: {
          cn: '放1塔，踩2或3塔',
        }
      }
    }, 
    ],
});