# BugofBook 的個人網站

網站是 Nx 工作區中的 Docusaurus 靜態站。首頁與自訂頁面位於 `apps/website/src/pages`，文章和站內文件分別位於 `apps/website/blog` 與 `apps/website/docs`。React 筆記由私有 Git 子模組 `software-docs` 提供，路由前綴為 `/react-docs`。

## 本機開發

使用 Node.js 24.15 以上的 24.x 版本，以及可讀取 `software-docs` 的 GitHub 帳號。

```sh
git submodule update --init
npm ci --legacy-peer-deps
npx nx serve website
npm run build
```

正式建置輸出到 `dist/apps/website`。

## 發布

在 `develop` 提交變更，再用 `git merge --no-ff develop` 合併進 `master`。推送 `master` 會觸發 `Deploy to GitHub Pages`。workflow 使用 `PRIVATE_REPO_TOKEN` 讀取子模組，GitHub Pages 的發布來源需設為 GitHub Actions。

需要手動重跑時，從 repo 目錄執行：

```sh
gh workflow run deploy.yml --ref master
gh run list --workflow deploy.yml --branch master
```
