# Git 推送指南

## 问题说明

如果遇到 "Permission denied (publickey)" 错误，说明你使用了 SSH 方式连接 GitHub，但没有配置 SSH 密钥。

## 解决方案：使用 HTTPS（推荐，最简单）

### 方法一：修改远程仓库地址为 HTTPS

```bash
# 查看当前远程地址
git remote -v

# 如果显示 git@github.com:...，需要改为 HTTPS
# 删除旧的远程地址
git remote remove origin

# 添加 HTTPS 地址（替换为你的仓库地址）
git remote add origin https://github.com/你的用户名/仓库名.git

# 重新推送
git push -u origin main
```

### 方法二：直接使用 HTTPS 创建仓库

如果你还没有创建仓库，在 GitHub 创建时选择 HTTPS 地址。

---

## 完整操作步骤（HTTPS 方式）

### 1. 在 GitHub 创建仓库

1. 访问 https://github.com/new
2. 仓库名称：`website` 或 `company-website`
3. 选择 Public 或 Private
4. **不要**勾选任何初始化选项
5. 点击 "Create repository"

### 2. 在项目目录初始化 Git

```bash
cd D:\project\website

# 初始化 Git
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit"
```

### 3. 添加远程仓库（使用 HTTPS）

```bash
# 替换为你的实际仓库地址
git remote add origin https://github.com/你的用户名/仓库名.git
```

**示例**：
```bash
git remote add origin https://github.com/zhangsan/website.git
```

### 4. 推送到 GitHub

```bash
# 推送到 main 分支
git push -u origin main
```

如果提示输入用户名和密码：
- **用户名**：你的 GitHub 用户名
- **密码**：使用 Personal Access Token（不是 GitHub 密码）

---

## 获取 Personal Access Token

如果 GitHub 要求输入密码，需要使用 Personal Access Token：

### 步骤 1：创建 Token

1. 访问：https://github.com/settings/tokens
2. 点击 "Generate new token" → "Generate new token (classic)"
3. 填写信息：
   - Note: `website-deploy`（随便写）
   - Expiration: 选择过期时间（建议 90 天或 No expiration）
   - 勾选 `repo` 权限
4. 点击 "Generate token"
5. **立即复制 Token**（只显示一次！）

### 步骤 2：使用 Token

推送时：
- 用户名：你的 GitHub 用户名
- 密码：粘贴刚才复制的 Token

---

## 如果仍然失败

### 检查仓库地址是否正确

```bash
# 查看远程地址
git remote -v

# 如果不对，删除后重新添加
git remote remove origin
git remote add origin https://github.com/你的用户名/仓库名.git
```

### 检查分支名称

GitHub 默认使用 `main`，如果本地是 `master`：

```bash
# 重命名分支
git branch -M main

# 然后推送
git push -u origin main
```

---

## 配置 SSH 密钥（可选，如果坚持使用 SSH）

如果你确实想使用 SSH，需要配置密钥：

### 1. 检查是否已有 SSH 密钥

```bash
ls ~/.ssh
```

### 2. 生成新密钥（如果没有）

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

按 Enter 使用默认路径，设置密码（可选）

### 3. 复制公钥

```bash
cat ~/.ssh/id_ed25519.pub
```

复制输出的内容

### 4. 添加到 GitHub

1. 访问：https://github.com/settings/keys
2. 点击 "New SSH key"
3. Title: 随便写（如：My Computer）
4. Key: 粘贴刚才复制的公钥
5. 点击 "Add SSH key"

### 5. 测试连接

```bash
ssh -T git@github.com
```

如果显示 "Hi 用户名! You've successfully authenticated"，说明成功。

---

## 推荐方案

**对于小公司和个人开发者，强烈推荐使用 HTTPS 方式**：
- ✅ 更简单
- ✅ 不需要配置密钥
- ✅ 使用 Personal Access Token 即可
- ✅ 适合偶尔推送代码的场景

---

## 快速命令总结

```bash
# 进入项目目录
cd D:\project\website

# 初始化 Git（如果还没初始化）
git init
git add .
git commit -m "Initial commit"

# 添加远程仓库（使用 HTTPS，替换为你的地址）
git remote add origin https://github.com/你的用户名/仓库名.git

# 推送到 GitHub
git push -u origin main
```

如果提示输入密码，使用 Personal Access Token。

