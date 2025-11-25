# 网易云风格音乐播放器

一个纯前端的迷你播放器，包含播放控制、进度/音量调节、歌词同步与动效。适合用作课程实验或 GitHub Pages 静态部署。

## 效果预览
![播放界面预览](./效果图.jpg)

## 功能特点
- 单曲播放：上一曲/下一曲、播放/暂停，自动切换状态文案与唱片旋转动画
- 进度与音量：滑杆调整进度/音量，时间标签实时更新
- 歌词同步：解析 `.lrc`，随时间高亮当前行，加载状态有骨架效果
- 学号姓名展示：在 `app.js` 中快速填写个人信息
- 纯静态：HTML + CSS + JS，无需后端，可直接托管到 GitHub Pages

## 目录结构
- `index.html`：页面骨架，`data-*` 挂载点
- `styles.css`：毛玻璃渐变、旋转动画、歌词样式
- `app.js`：播放逻辑、歌词解析与状态管理
- `static/七友/*`、`static/吴哥窟/*`：两首示例曲目的封面、音频与歌词资源

## 本地运行
在项目根目录执行任一命令，然后浏览器打开提示的地址（默认同一局域网可访问）。
```bash
# 方案一：Python
python3 -m http.server 8000

# 方案二：Node（需安装 Node.js）
npx serve .
```
若端口被占用，改用其他端口（3000/5000/8080 等）。

## GitHub Pages 部署
1) 初始化并推送到你的仓库（仓库名可用 `netease-player`）：
```bash
cd netease-player
git init
git add .
git commit -m "init player"
git branch -M main
git remote add origin https://github.com/<你的用户名>/netease-player.git
git push -u origin main
```
2) 打开 GitHub 仓库：`Settings → Pages`  
   - Source 选 `Deploy from a branch`  
   - Branch 选 `main`，Folder 选 `/ (root)`  
   - 保存后等待几分钟
3) 访问 `https://<你的用户名>.github.io/netease-player/`

## 常见问题
- **自动播放被拦截**：首次需手动点击播放按钮。
- **端口/权限问题**：换其他端口或使用 `npx serve .`；在受限环境使用 GitHub Pages 直接预览。
- **资源 404 或无歌词**：确认文件名与路径保持相对引用（当前已使用 `./文件名`），大小写一致。
- **歌词加载失败提示**：检查 `.lrc` 文件是否存在、编码为 UTF-8，必要时刷新或重新上传资源。

## 自定义
- 修改学号/姓名：`app.js` 顶部的 `studentInfo`
- 换曲目：在 `playlist` 中新增或替换 `url`、`cover`、`lyricsFile`
- 主题色：调整 `styles.css` 的 `:root` 色彩变量

祝使用愉快！ 🎵
