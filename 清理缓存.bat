@echo off
chcp 65001 >nul
echo ========================================
echo 清理 Next.js 构建缓存
echo ========================================
echo.

cd /d "%~dp0"

echo 正在清理缓存...
echo.

REM 删除 .next 文件夹
if exist ".next" (
    echo 删除 .next 文件夹...
    rmdir /s /q .next 2>nul
    if errorlevel 1 (
        echo ⚠️  无法删除 .next，可能正在被使用
        echo 请关闭开发服务器后重试
    ) else (
        echo ✅ .next 已删除
    )
)

REM 删除 node_modules/.cache
if exist "node_modules\.cache" (
    echo 删除 node_modules\.cache...
    rmdir /s /q "node_modules\.cache" 2>nul
    echo ✅ 缓存已清理
)

echo.
echo ========================================
echo ✅ 清理完成！
echo ========================================
echo.
echo 现在可以重新构建:
echo   npm run build
echo.
pause

