@echo off
chcp 65001 >nul
echo ========================================
echo 启动公司官网开发服务器
echo ========================================
echo.

cd /d "%~dp0"

REM 刷新环境变量
set "PATH=C:\Program Files\nodejs;C:\Program Files (x86)\nodejs;%LOCALAPPDATA%\Programs\nodejs;%PATH%"

if not exist "node_modules" (
    echo 正在安装依赖...
    call npm install
    if errorlevel 1 (
        echo ❌ 依赖安装失败
        echo 请检查 Node.js 是否已安装
        pause
        exit /b 1
    )
)

if not exist ".env.local" (
    echo ⚠️  警告: 未找到 .env.local 文件
    echo.
    echo 正在从 env.local.example 创建 .env.local...
    if exist "env.local.example" (
        copy env.local.example .env.local >nul
        echo ✅ 已创建 .env.local 文件
        echo.
        echo 请编辑 .env.local 文件，填入你的 Contentful 配置:
        echo 1. CONTENTFUL_SPACE_ID=你的-space-id
        echo 2. CONTENTFUL_ACCESS_TOKEN=你的-access-token
        echo.
        echo 详细步骤请查看: 配置说明.md
        echo.
        echo 配置完成后，重新运行此脚本
        pause
        exit /b 0
    ) else (
        echo ❌ 未找到 env.local.example 文件
        echo 请查看 配置说明.md 了解如何配置
        pause
        exit /b 1
    )
)

echo 正在启动开发服务器...
echo.
echo 访问地址: http://localhost:3000
echo.
echo 按 Ctrl+C 停止服务器
echo.

npm run dev

pause

