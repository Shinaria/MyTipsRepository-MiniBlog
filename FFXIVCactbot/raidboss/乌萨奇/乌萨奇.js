// flags
// 月光/花车 连击背       4471X003
// 月光/花车 连击侧       3F71X003
// 月光/花车 真北连击背   4471X003
// 月光/花车 真北连击侧   4471X003
// 月光/花车 真北明镜背   4471X003
// 月光/花车 真北明镜侧   4471X003
// 月光/花车 裸打背       1D71X003
// 月光/花车 真北裸打背   1D71X003
// 月光/花车 真北裸打侧   1D71X003
// 月光/花车 裸打侧         71X003

// 侧 龙牙龙爪 D720003
// 侧 龙牙龙爪 D720003
// 背 龙牙龙爪 720003
// 背 龙牙龙爪 724003
// 背 龙尾大回旋 A720003
// 背 龙尾大回旋 A720003
// 侧 龙尾大回旋 720003
// 侧 龙尾大回旋 720003

const soundPath = [
  "../../user/raidboss/乌萨奇/usagi_yaha.mp3",
  "../../user/raidboss/乌萨奇/usagi_ura.mp3",
  "../../user/raidboss/乌萨奇/usagi_bru.mp3",
  "../../user/raidboss/乌萨奇/usagi_ha.mp3",
  "../../user/raidboss/乌萨奇/usagi_haa.mp3",
  "../../user/raidboss/乌萨奇/usagi_ha^.mp3",
  "../../user/raidboss/乌萨奇/usagi_yahha.mp3",
];
const soundVolume = 0.5;

Options.Triggers.push({
  zoneId: ZoneId.MatchAll, // 任意地图
  triggers: [
    {
      id: "乌萨奇 - 武士", // 独一无二的ID
      type: "Ability", // 能力命中
      netRegex: { id: ["1D39", "1D3A"] }, // 利用Cactbot内置的NetRegexes构造正则 匹配月光与花车
      delaySeconds: (_data, matches) => {
        // 添加延迟 配合动作一起打出 听起来比较帅
        if (matches.id === "1D3A") return 0.3; // 花车
        if (matches.id === "1D39") return 0.38; // 月光
      },
      condition: (data, matches) => {
        return matches.source === data.me && /^3F71\d003$/.test(matches.flags); // 判断是否为玩家释放且身位错误
      },
      sound: (data) => {
        const randomIndex = Math.floor(Math.random() * soundPath.length);
        return soundPath[randomIndex];
      },
      soundVolume: soundVolume, // 音量
    },
    {
      id: "乌萨奇 - 龙骑_龙5", // 独一无二的ID
      type: "Ability", // 能力命中
      netRegex: { id: ["DE2"] }, // 利用Cactbot内置的NetRegexes构造正则 匹配龙牙龙爪与龙尾大回旋
      condition: (data, matches) => {
        return matches.source === data.me && /^72\d003$/.test(matches.flags); // 判断是否为玩家释放且身位错误
      },
      sound: "../../user/raidboss/乌萨奇/usagi_ha^.mp3", // 音频文件对于 ui/raidboss/ 文件夹的相对路径。
      soundVolume: soundVolume, // 音量
    },
    {
      id: "乌萨奇 - 龙骑_龙4", // 独一无二的ID
      type: "Ability", // 能力命中
      netRegex: { id: ["DE4"] }, // 利用Cactbot内置的NetRegexes构造正则 匹配龙牙龙爪与龙尾大回旋
      condition: (data, matches) => {
        return matches.source === data.me && /^72\d003$/.test(matches.flags); // 判断是否为玩家释放且身位错误
      },
      sound: "../../user/raidboss/乌萨奇/usagi_haa.mp3", // 音频文件对于 ui/raidboss/ 文件夹的相对路径。
      soundVolume: soundVolume, // 音量
    },
    {
      id: "乌萨奇 - 龙骑_樱花", // 独一无二的ID
      type: "Ability", // 能力命中
      netRegex: { id: ["64AC"] }, // 利用Cactbot内置的NetRegexes构造正则 匹配龙牙龙爪与龙尾大回旋
      condition: (data, matches) => {
        return matches.source === data.me && /^3D72\d003$/.test(matches.flags); // 判断是否为玩家释放且身位错误
      },
      sound: "../../user/raidboss/乌萨奇/usagi_ha.mp3", // 音频文件对于 ui/raidboss/ 文件夹的相对路径。
      soundVolume: soundVolume, // 音量
    },
    {
      id: "乌萨奇 - 钐镰客", // 独一无二的ID,
      type: "Ability", // 能力命中
      netRegex: { id: ["5F3E", "5F3F"] }, // 利用Cactbot内置的NetRegexes构造正则 匹配[绞决、缢杀]
      condition: (data, matches) => {
        return matches.source === data.me && /^71\d003$/.test(matches.flags); // 判断是否为玩家释放且身位错误
      },
      sound: (data) => {
        const randomIndex = Math.floor(Math.random() * soundPath.length);
        return soundPath[randomIndex];
      },
      soundVolume: soundVolume, // 音量
    },
 
    {
        id: "乌萨奇 - 忍者—背刺", // 独一无二的ID,
        type: "Ability", // 能力命中
        netRegex: { id: "8D2" }, // 攻其不备
        condition: (data, matches) => {
          return matches.source === data.me && /^71\d003$/.test(matches.flags); // 判断是否为玩家释放且身位错误
        },
        sound: (data) => {
          const randomIndex = Math.floor(Math.random() * soundPath.length);
          return soundPath[randomIndex];
        },
        soundVolume: soundVolume, // 音量
    },
    
    {
        id: "乌萨奇 - 忍者", // 独一无二的ID,
        type: "Ability", // 能力命中
        netRegex: { id: ["8CF", "DEB"] },// 利用Cactbot内置的NetRegexes构造正则 匹配[旋风刃、强甲破点突、攻其不备]
        condition: (data, matches) => {
          return matches.source === data.me && /^(46|3F|3D|1E)71\d003$/.test(matches.flags)  // 判断是否为玩家释放且身位错误
        },
        sound: (data) => {
          const randomIndex = Math.floor(Math.random() * soundPath.length);
          return soundPath[randomIndex];
        },
        soundVolume: soundVolume, // 音量
      },
    
    {
      id: "乌萨奇 - 武僧", // 独一无二的ID,
      type: "Ability", // 能力命中
      netRegex: { id: ["38", "42"] }, // 利用Cactbot内置的NetRegexes构造正则 匹配[崩拳、破碎拳]
      condition: (data, matches) => {
        return matches.source === data.me && /^73\d003$/.test(matches.flags); // 判断是否为玩家释放且身位错误
      },
      sound: (data) => {
        const randomIndex = Math.floor(Math.random() * soundPath.length);
        return soundPath[randomIndex];
      },
      soundVolume: soundVolume, // 音量
    },
  ],
});
