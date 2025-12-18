# Vercel 故障排查指南

## 🔍 如果 Vercel 还在报错

### 问题 1：类型错误仍然存在

**可能原因**：
- 代码没有正确推送到 GitHub
- Vercel 使用了缓存的旧代码

**解决方法**：

#### 步骤 1：确认代码已推送

```bash
cd D:\project\website

# 检查 Git 状态
git status

# 如果有未提交的更改
git add .
git commit -m "修复类型错误"
git push origin main
```

#### 步骤 2：在 GitHub 上验证

1. 打开你的 GitHub 仓库
2. 查看 `app/page.tsx` 文件
3. 确认代码是：
   ```typescript
   const posts: Post[] = [];
   ```
   而不是：
   ```typescript
   const posts = await getPosts(3);
   ```

#### 步骤 3：清除 Vercel 缓存

1. 登录 Vercel
2. 进入你的项目
3. 点击 **Settings** → **General**
4. 找到 **Build & Development Settings**
5. 点击 **Clear Build Cache**
6. 等待清除完成

#### 步骤 4：重新部署

**方法一：自动触发**
- 推送一个空提交：
  ```bash
  git commit --allow-empty -m "触发重新部署"
  git push origin main
  ```

**方法二：手动触发**
1. 在 Vercel 项目页面
2. 点击 **Deployments**
3. 点击 **Create Deployment**
4. 选择 `main` 分支
5. 点击 **Deploy**

---

### 问题 2：构建日志显示其他错误

**查看构建日志**：

1. 在 Vercel 项目页面
2. 点击失败的部署
3. 查看 **Build Logs**
4. 找到具体的错误信息

**常见错误及解决方法**：

#### 错误：找不到模块

```
Error: Cannot find module 'xxx'
```

**解决方法**：
- 检查 `package.json` 中是否有该依赖
- 在 Vercel 中清除缓存并重新部署

#### 错误：环境变量未设置

```
Error: CONTENTFUL_SPACE_ID is not set
```

**解决方法**：
- 代码已经处理了这种情况，应该不会报错
- 如果还是报错，检查 `lib/contentful.ts` 是否正确

#### 错误：构建超时

**解决方法**：
- 在 Vercel 设置中增加构建超时时间
- 或者优化构建过程

---

### 问题 3：部署成功但网站不显示

**可能原因**：
- 路由配置问题
- 环境变量问题

**解决方法**：

1. 检查 Vercel 部署日志
2. 访问网站，查看浏览器控制台错误
3. 检查路由是否正确

---

## 🛠️ Vercel 设置检查清单

### 基本设置

- [ ] **Framework Preset**: Next.js
- [ ] **Root Directory**: `.` 或留空
- [ ] **Build Command**: `npm run build` 或留空
- [ ] **Output Directory**: `.next` 或留空
- [ ] **Install Command**: `npm install` 或留空

### 环境变量

- [ ] 如果使用 Contentful，已设置 `CONTENTFUL_SPACE_ID`
- [ ] 如果使用 Contentful，已设置 `CONTENTFUL_ACCESS_TOKEN`
- [ ] 环境变量已应用到所有环境（Production, Preview, Development）

### 构建设置

- [ ] Node.js 版本正确（通常自动检测）
- [ ] 构建缓存已清除（如果有问题）

---

## 🔄 强制重新部署

### 方法一：推送空提交

```bash
cd D:\project\website
git commit --allow-empty -m "触发重新部署"
git push origin main
```

### 方法二：修改文件触发

```bash
cd D:\project\website

# 创建一个临时文件
echo. > .vercel-trigger

# 提交并推送
git add .vercel-trigger
git commit -m "触发重新部署"
git push origin main

# 删除临时文件
git rm .vercel-trigger
git commit -m "清理临时文件"
git push origin main
```

### 方法三：在 Vercel 中手动触发

1. 登录 Vercel
2. 进入项目
3. 点击 **Deployments**
4. 点击 **Create Deployment**
5. 选择分支和设置
6. 点击 **Deploy**

---

## 📊 检查部署状态

### 在 Vercel 中查看

1. 进入项目页面
2. 点击 **Deployments** 标签
3. 查看部署列表：
   - ✅ **Ready** - 部署成功
   - ⏳ **Building** - 正在构建
   - ❌ **Error** - 部署失败

### 查看构建日志

1. 点击失败的部署
2. 查看 **Build Logs**
3. 找到错误信息
4. 根据错误信息修复

---

## ✅ 成功标志

部署成功后：

1. ✅ Vercel 显示 **Ready**（绿色）
2. ✅ 可以访问网站 URL
3. ✅ 网站正常显示
4. ✅ 没有控制台错误

---

## 🆘 如果所有方法都失败

### 终极方案：重新连接项目

1. 在 Vercel 中删除当前项目（不会删除代码）
2. 重新导入 GitHub 仓库
3. 重新配置设置
4. 重新部署

**注意**：这会重置所有设置，需要重新配置。

---

## 📝 联系支持

如果问题仍然存在：

1. 收集错误信息（构建日志）
2. 检查代码是否正确
3. 联系 Vercel 支持：https://vercel.com/support

---

**按照以上步骤排查，应该可以解决问题！**

