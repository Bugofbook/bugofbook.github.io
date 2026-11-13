# 專案交接指南

## 專案結構

這是 BugofBook 的個人網站。Nx 工作區的 `website` 專案使用 Docusaurus 產生靜態網站，發布到 https://bugofbook.github.io/。

- `apps/website/docusaurus.config.ts` 管理網站設定、導覽、文件與部落格。
- `apps/website/src/pages/` 放首頁與自訂頁面。共用 UI 位於 `src/components/`、`src/entities/`、`src/features/` 和 `src/widgets/`，皆相對於 `apps/website/`。
- `apps/website/blog/`、`apps/website/docs/` 分別放部落格和站內文件。`apps/website/static/` 放靜態資源。
- `software-docs/` 是私有 Git 子模組，其中的 `react-docs/` 對應網站的 `/react-docs`。更新子模組指標時，確認鎖定的 commit 已推到文件 repo，讓 CI 可以取得同一版內容。
- `package.json` 和 `package-lock.json` 管理工作區的 npm 依賴。Nx 的網站目標定義在 `apps/website/project.json`。

## 本機開發與驗證

使用 Node.js 24.15.0 以上的 24.x 版本，以及有權讀取 `Bugofbook/software-docs` 的 GitHub 帳號。從主 repo 根目錄執行：

```sh
git submodule update --init
npm ci --legacy-peer-deps
npx nx serve website
```

開發伺服器預設使用 `http://localhost:3000`。提交前依變更範圍執行：

```sh
npx tsc --noEmit -p apps/website/tsconfig.json
npm run build -- --skip-nx-cache
git diff --check
```

正式建置輸出到 `dist/apps/website/`。變更依賴時一起更新 `package-lock.json`，並以 CI 使用的 `npm ci --legacy-peer-deps` 驗證乾淨安裝。

## 提交與發布

日常變更在 `develop` 提交。準備發布時，先確認工作樹狀態與遠端分支，再將 `develop` 以 `--no-ff` 合併進 `master`：

```sh
git switch develop
git pull --ff-only origin develop
git add <changed-files>
git commit -m "<commit-message>"
git push origin develop

git switch master
git pull --ff-only origin master
git merge --no-ff develop
git push origin master
```

推送 `master` 會觸發 `.github/workflows/deploy.yml` 的 `Deploy to GitHub Pages`。GitHub Pages 的發布來源設為 **GitHub Actions**。Workflow 使用 `SOFTWARE_DOCS_DEPLOY_KEY` 唯讀金鑰取得子模組鎖定的 commit，再用 Node.js 24 安裝依賴、建置並部署 `dist/apps/website/`。

手動重跑時執行 `gh workflow run deploy.yml --ref master`。發布後，確認 workflow 對應本次的 `master` merge commit、建置與部署皆成功，並檢查線上受影響的頁面和靜態資源。

```sh
gh run list --workflow deploy.yml --branch master --commit "$(git rev-parse master)"
gh run watch <run-id> --exit-status
curl -fLsS -o /dev/null https://bugofbook.github.io/
```
