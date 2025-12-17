@echo off
chcp 65001 >nul
echo ========================================
echo Git 一键推送脚本
echo ========================================
echo.

cd /d "%~dp0"

REM 刷新环境变量
set "PATH=C:\Program Files\Git\bin;C:\Program Files (x86)\Git\bin;%PATH%"

echo [1/5] 检查 Git...
where git >nul 2>&1
if errorlevel 1 (
    echo ❌ 未找到 Git
    echo 请先安装 Git: https://git-scm.com/download/win
    pause
    exit /b 1
)
echo ✅ Git 已安装
echo.

echo [2/5] 初始化 Git（如果需要）...
if not exist ".git" (
    echo 正在初始化 Git...
    call git init
)
echo ✅ Git 已初始化
echo.

echo [3/5] 添加文件...
call git add .
echo ✅ 文件已添加
echo.

echo [4/5] 提交更改...
call git commit -m "Initial commit" 2>nul
if errorlevel 1 (
    echo ⚠️  没有新更改需要提交，或已经提交过了
) else (
    echo ✅ 已提交
)
echo.

echo [5/5] 设置分支并推送...
call git branch -M main 2>nul

REM 检查远程仓库
call git remote get-url origin >nul 2>&1
if errorlevel 1 (
    echo 未找到远程仓库，正在添加...
    call git remote add origin https://github.com/zhengyehui/website.git
    echo ✅ 远程仓库已添加
) else (
    echo ✅ 远程仓库已配置
)
echo.

echo 正在推送到 GitHub...
echo 如果提示输入密码，使用 Personal Access Token
echo.
call git push -u origin main

if errorlevel 1 (
    echo.
    echo ❌ 推送失败
    echo.
    echo 可能的原因:
    echo 1. 还没有提交任何文件
    echo 2. 需要输入用户名和密码（使用 Personal Access Token）
    echo 3. 远程仓库地址不正确
    echo.
    echo 请查看 修复分支问题.md 获取详细帮助
    echo.
) else (
    echo.
    echo ========================================
    echo ✅ 推送成功！
    echo ========================================
    echo.
    echo 你的代码已推送到 GitHub
    echo 访问: https://github.com/zhengyehui/website
    echo.
)

pause

