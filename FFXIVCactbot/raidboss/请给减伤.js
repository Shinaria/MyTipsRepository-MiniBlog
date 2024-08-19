console.log('=======通用触发器.js=======');
Options.Triggers.push({
    zoneId: ZoneId.MatchAll,
    timelineTriggers: [
        {
          id: 'MatchAll Addle',
          regex: /^昏乱/,
          condition: function (data) { return data.job === 'RDM'||data.job === 'SMN'||data.job === 'PCT' },
          tts: '昏乱',
          alertText: '昏乱',
        },
        {
          id: 'MatchAll Magick Barrier',
          regex: /^抗死/,
          condition: function (data) { return data.job === 'RDM'||data.job === 'PCT' },
          alertText: '抗死',
          tts: '抗死',
        },
        {
          id: 'MatchAll Tactician',
          regex: /^策动/,
          condition: function (data) { return data.job === 'MCH'||data.job === 'DNC'||data.job === 'BRD' },
          alertText: '策动',
          tts: '策动',
        },
        {
          id: 'MatchAll Dismantle',
          regex: /^武装解除/,
          condition: function (data) { return data.job === 'MCH'||data.job === 'DNC'||data.job === 'BRD' },
          alertText: '武装解除',
          tts: '扳手',
        },
        {
          id: 'MatchAll DPS2',
          regex: /^D2减伤/,
          alertText: 'D2·减伤',
        },
        {
          id: 'MatchAll DPS4',
          regex: /^D4减伤/,
          alertText: 'D4·减伤',
        },
    ],
  });