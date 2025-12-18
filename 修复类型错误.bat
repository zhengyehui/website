@echo off
chcp 65001 >nul
echo ========================================
echo 修复 TypeScript 类型错误
echo ========================================
echo.

cd /d "%~dp0"

REM 刷新环境变量
set "PATH=C:\Program Files\nodejs;C:\Program Files (x86)\nodejs;%LOCALAPPDATA%\Programs\nodejs;%PATH%"

echo [1/3] 清理构建缓存...
if exist ".next" (
    echo 正在删除 .next 文件夹...
    taskkill /F /IM node.exe >nul 2>&1
    timeout /t 2 >nul
    rmdir /s /q .next 2>nul
    echo ✅ 缓存已清理
)
echo.

echo [2/3] 清理 TypeScript 缓存...
if exist "node_modules\.cache" (
    rmdir /s /q "node_modules\.cache" 2>nul
)
if exist "*.tsbuildinfo" (
    del /q *.tsbuildinfo 2>nul
)
echo ✅ TypeScript 缓存已清理
echo.

echo [3/3] 重新构建...
echo.
call npm run build

if errorlevel 1 (
    echo.
    echo ❌ 构建失败
    echo.
    echo 如果类型错误仍然存在，请：
    echo 1. 在 Cursor 中重启 TypeScript 服务器
    echo    (Ctrl+Shift+P → "TypeScript: Restart TS Server")
    echo 2. 检查 types/contentful.ts 文件是否存在
    echo 3. 检查 lib/contentful.ts 中的导入路径
    echo.
) else (
    echo.
    echo ========================================
    echo ✅ 构建成功！
    echo ========================================
    echo.
)

pause

