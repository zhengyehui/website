@echo off
chcp 65001 >nul
echo ========================================
echo GitHub 和 Vercel 部署修复
echo ========================================
echo.

cd /d "%~dp0"

REM 刷新环境变量
set "PATH=C:\Program Files\nodejs;C:\Program Files (x86)\nodejs;%LOCALAPPDATA%\Programs\nodejs;%PATH%"

echo [1/5] 检查 Git 状态...
git status
echo.

echo [2/5] 检查是否有未提交的更改...
git diff --quiet
if errorlevel 1 (
    echo ⚠️  发现未提交的更改
    echo.
    echo 是否要提交并推送？(Y/N)
    set /p choice=
    if /i "%choice%"=="Y" (
        echo.
        echo 正在提交更改...
        git add .
        git commit -m "修复类型错误，可以正常部署"
        echo ✅ 已提交
    ) else (
        echo 跳过提交
    )
) else (
    echo ✅ 没有未提交的更改
)
echo.

echo [3/5] 检查是否已推送到 GitHub...
git fetch origin >nul 2>&1
git diff HEAD origin/master --quiet
if errorlevel 1 (
    echo ⚠️  本地代码与远程不一致
    echo.
    echo 是否要推送到 GitHub？(Y/N)
    set /p choice=
    if /i "%choice%"=="Y" (
        echo.
        echo 正在推送到 GitHub...
        git push origin master
        if errorlevel 1 (
            echo ❌ 推送失败，请检查网络或权限
        ) else (
            echo ✅ 已推送到 GitHub
        )
    ) else (
        echo 跳过推送
    )
) else (
    echo ✅ 代码已是最新
)
echo.

echo [4/5] 清理本地构建缓存...
if exist ".next" (
    rmdir /s /q .next 2>nul
    echo ✅ 缓存已清理
) else (
    echo ✅ 没有缓存需要清理
)
echo.

echo [5/5] 本地构建测试...
echo.
call npm run build

if errorlevel 1 (
    echo.
    echo ❌ 本地构建失败
    echo.
    echo 请检查错误信息，修复后再推送
    echo.
) else (
    echo.
    echo ========================================
    echo ✅ 本地构建成功！
    echo ========================================
    echo.
    echo 下一步操作：
    echo 1. 代码已推送到 GitHub
    echo 2. Vercel 会自动检测并重新部署
    echo 3. 如果 Vercel 还在报错，请：
    echo    - 在 Vercel 中清除构建缓存
    echo    - 手动触发重新部署
    echo.
    echo 详细步骤请查看：GitHub和Vercel操作指南.md
    echo.
)

pause

