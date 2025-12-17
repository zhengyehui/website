@echo off
chcp 65001 >nul
echo ========================================
echo 修复 Git 推送问题
echo ========================================
echo.

cd /d "%~dp0"

REM 刷新环境变量
set "PATH=C:\Program Files\Git\bin;C:\Program Files (x86)\Git\bin;%PATH%"

echo [1/3] 检查 Git...
where git >nul 2>&1
if errorlevel 1 (
    echo ❌ 未找到 Git
    echo.
    echo 请先安装 Git:
    echo 1. 访问 https://git-scm.com/download/win
    echo 2. 下载并安装 Git for Windows
    echo 3. 安装完成后重启终端
    echo.
    pause
    exit /b 1
)

git --version
echo ✅ Git 已安装
echo.

echo [2/3] 检查当前远程地址...
git remote -v
echo.

echo [3/3] 修复远程地址...
echo.
echo 如果显示 git@github.com:...，需要改为 HTTPS
echo.
set /p github_url="请输入你的 GitHub 仓库 HTTPS 地址（如：https://github.com/用户名/仓库名.git）: "

if "%github_url%"=="" (
    echo ❌ 未输入地址
    pause
    exit /b 1
)

echo.
echo 正在更新远程地址...
git remote remove origin 2>nul
git remote add origin %github_url%

echo.
echo ✅ 远程地址已更新
echo.
git remote -v
echo.

echo ========================================
echo 下一步操作
echo ========================================
echo.
echo 1. 确保已提交所有更改:
echo    git add .
echo    git commit -m "Initial commit"
echo.
echo 2. 推送到 GitHub:
echo    git push -u origin main
echo.
echo 如果提示输入密码，使用 Personal Access Token
echo （不是 GitHub 密码）
echo.
echo 获取 Token: https://github.com/settings/tokens
echo.
pause

