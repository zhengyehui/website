# 删除 Git 仓库中的所有文件

## ⚠️ 警告

删除 Git 文件是不可逆的操作，请确保你真的需要这样做。

## 🎯 三种删除方式

### 方式一：删除所有文件但保留 Git 历史（推荐）

如果你想保留 Git 历史，只删除文件：

```bash
cd D:\project\website

# 删除所有文件（除了 .git 文件夹）
git rm -rf .

# 提交删除
git commit -m "Remove all files"

# 推送到远程
git push -u origin main
```

### 方式二：完全删除 Git 仓库（重新开始）

如果你想完全删除 Git 历史，重新开始：

```bash
cd D:\project\website

# 删除 .git 文件夹（这会删除所有 Git 历史）
Remove-Item -Recurse -Force .git

# 删除所有文件（可选）
Remove-Item -Recurse -Force * -Exclude .gitignore
```

### 方式三：只删除远程仓库的文件

如果你想保留本地文件，只删除远程仓库的文件：

```bash
cd D:\project\website

# 删除所有文件
git rm -rf .

# 提交
git commit -m "Remove all files"

# 强制推送到远程（覆盖远程历史）
git push -u origin main --force
```

---

## 🚀 快速操作脚本

### 脚本 1：删除所有文件但保留 Git

```bash
cd D:\project\website
git rm -rf .
git commit -m "Remove all files"
git push -u origin main
```

### 脚本 2：完全删除 Git 并重新初始化

```bash
cd D:\project\website
Remove-Item -Recurse -Force .git
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/zhengyehui/website.git
git push -u origin main --force
```

---

## 📝 详细步骤

### 如果你想重新开始（推荐）

1. **删除本地 Git 历史**：
   ```powershell
   cd D:\project\website
   Remove-Item -Recurse -Force .git
   ```

2. **重新初始化 Git**：
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

3. **重新添加远程仓库**：
   ```bash
   git remote add origin https://github.com/zhengyehui/website.git
   ```

4. **强制推送**（覆盖远程）：
   ```bash
   git push -u origin main --force
   ```

---

## ⚠️ 注意事项

1. **备份重要文件**：删除前确保重要文件已备份
2. **强制推送**：使用 `--force` 会覆盖远程历史，谨慎使用
3. **团队协作**：如果其他人也在使用这个仓库，删除会影响他们

---

## 🔄 如果你想保留文件，只清理 Git 历史

如果你想保留所有文件，只删除 Git 历史：

```bash
cd D:\project\website

# 删除 .git 文件夹
Remove-Item -Recurse -Force .git

# 重新初始化
git init
git add .
git commit -m "Initial commit"
```

---

## ✅ 验证

删除后验证：

```bash
# 检查 Git 状态
git status

# 查看远程仓库
git remote -v

# 查看文件列表
ls
```

