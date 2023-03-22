export const setting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  password: "",
  systemRule: ""
}

export const message = `Powered by OpenAI Vercel
- 输入框
  - 开头输入 [[/]] 或者 [[空格]] 查看预设提示（Prompt）。
  - [[↑]] 可编辑最近一次提问。
  - 点击顶部名称滚动到顶部，点击输入框滚动到底部。
  - [[Shift]] + [[Enter]] 换行。
- 左下角有更多设置：
  - 思维发散程度：越高 ChatGPT 思维就越发散。根据不同的问题可以调节这个选项，追求创意性的就可以调高。
  - 开启连续对话：实现上下文功能，每次把全部对话传过去，有最大上文 2048 token 的限制。
  - 系统角色指令：会在每次提问时添加，一定用加句号。主要用于对 ChatGPT 的语气，口头禅这些进行定制。
- 输入框右边的四个按钮：
  - 对话生成图片，电脑上复制到剪贴板，手机上下载。
  - 对话生成 Markdown，复制到剪贴板。
  - 重新回答最近的一个问题。
  - 清空对话。
- 查询余额
  - 发送 sk- 开头的 key，可以直接查询余额。换行查询多个。
  - 使用预设提示第一个，发送“查询填写的 Key 的余额”来直接查询填写的 key 的余额。
`

export type Setting = typeof setting

export const resetContinuousDialogue = false
