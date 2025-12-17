@echo off
chcp 65001 >nul
echo ========================================
echo 删除 Git 仓库中的所有文件
echo ========================================
echo.
echo ⚠️  警告：此操作不可逆！
echo.

cd /d "%~dp0"

echo 请选择操作：
echo.
echo 1. 删除所有文件但保留 Git 历史
echo 2. 完全删除 Git 并重新初始化
echo 3. 只删除 .git 文件夹（保留文件）
echo 4. 取消
echo.
set /p choice="请选择 (1-4): "

if "%choice%"=="1" goto option1
if "%choice%"=="2" goto option2
if "%choice%"=="3" goto option3
if "%choice%"=="4" goto cancel
goto invalid

:option1
echo.
echo 正在删除所有文件（保留 Git 历史）...
call git rm -rf . 2>nul
if errorlevel 1 (
    echo ⚠️  Git 命令失败，可能没有初始化 Git
    goto end
)
call git commit -m "Remove all files" 2>nul
echo ✅ 文件已删除并提交
echo.
echo 要推送到远程，运行: git push -u origin main
goto end

:option2
echo.
echo ⚠️  这将完全删除 Git 历史！
set /p confirm="确认删除？(yes/no): "
if /i not "%confirm%"=="yes" (
    echo 已取消
    goto end
)
echo.
echo 正在删除 .git 文件夹...
if exist ".git" (
    rmdir /s /q .git
    echo ✅ .git 文件夹已删除
) else (
    echo ⚠️  未找到 .git 文件夹
)
echo.
echo 要重新初始化 Git，运行:
echo   git init
echo   git add .
echo   git commit -m "Initial commit"
goto end

:option3
echo.
echo 正在删除 .git 文件夹（保留所有文件）...
if exist ".git" (
    rmdir /s /q .git
    echo ✅ .git 文件夹已删除
    echo.
    echo 文件已保留，Git 历史已删除
) else (
    echo ⚠️  未找到 .git 文件夹
)
goto end

:cancel
echo.
echo 操作已取消
goto end

:invalid
echo.
echo ❌ 无效的选择
goto end

:end
echo.
pause

