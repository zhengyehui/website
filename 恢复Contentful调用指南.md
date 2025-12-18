# 恢复 Contentful 调用指南

## 🎯 问题

Contentful 中已经创建了内容，但网站上看不到，因为代码中还在使用空数组。

## ✅ 解决方案

我已经恢复了所有 Contentful 调用，现在需要：

### 第一步：确保 Vercel 环境变量已配置

1. 登录 Vercel：https://vercel.com/
2. 进入你的项目
3. 点击 **Settings** → **Environment Variables**
4. 检查是否有以下环境变量：
   - `CONTENTFUL_SPACE_ID` - 你的 Contentful Space ID
   - `CONTENTFUL_ACCESS_TOKEN` - 你的 Contentful Access Token

5. **如果没有，添加它们**：
   - 点击 **Add New**
   - 输入变量名和值
   - 选择环境：Production, Preview, Development（全部勾选）
   - 点击 **Save**

### 第二步：推送代码到 GitHub

```bash
cd D:\project\website

# 添加所有更改
git add .

# 提交
git commit -m "恢复 Contentful 调用，显示新闻内容"

# 推送
git push origin master
```

### 第三步：等待 Vercel 自动部署

推送后，Vercel 会自动：
- 检测到代码更新
- 重新构建
- 部署新版本

等待 2-3 分钟。

### 第四步：验证

1. 访问你的网站
2. 检查首页的新闻部分，应该能看到 Contentful 中的内容
3. 访问 `/news` 页面，应该能看到所有新闻列表
4. 点击新闻，应该能看到详情页

---

## 🔍 如果还是看不到内容

### 检查 1：环境变量是否正确

在 Vercel 中检查：
- `CONTENTFUL_SPACE_ID` 是否正确
- `CONTENTFUL_ACCESS_TOKEN` 是否正确
- 是否应用到所有环境（Production, Preview, Development）

### 检查 2：Contentful 内容是否已发布

1. 登录 Contentful
2. 进入 **Content** 标签
3. 检查你的内容是否显示 **Published**（已发布）
4. 如果没有，点击 **Publish** 按钮

### 检查 3：Contentful 内容类型是否正确

确保：
- 内容类型的 API Identifier 是 `post`（小写）
- 字段名正确：
  - `title` (Short text)
  - `slug` (Short text, unique)
  - `excerpt` (Long text, 可选)
  - `publishedAt` (Date & time, 可选)
  - `content` (Rich text, 可选)

### 检查 4：查看 Vercel 构建日志

1. 在 Vercel 项目页面
2. 点击最新的部署
3. 查看 **Build Logs**
4. 检查是否有错误信息

### 检查 5：本地测试

```bash
cd D:\project\website

# 确保 .env.local 文件存在并配置正确
# CONTENTFUL_SPACE_ID=你的-space-id
# CONTENTFUL_ACCESS_TOKEN=你的-access-token

# 启动开发服务器
npm run dev
```

访问 http://localhost:3000，检查是否能显示内容。

---

## 📝 已恢复的文件

1. ✅ `app/page.tsx` - 恢复 `getPosts(3)` 调用
2. ✅ `app/news/page.tsx` - 恢复 `getPosts(10)` 调用
3. ✅ `app/news/[slug]/page.tsx` - 恢复 `getPostBySlug()` 调用

---

## 🎯 完成后的效果

- ✅ 首页显示最新 3 条新闻
- ✅ `/news` 页面显示所有新闻列表
- ✅ 点击新闻可以查看详情
- ✅ 内容从 Contentful 动态获取

---

## 🆘 如果还有问题

### 调试方法

在 `lib/contentful.ts` 中添加日志：

```typescript
export async function getPosts(limit = 10): Promise<Post[]> {
  const client = getContentfulClient();
  if (!client) {
    console.log('❌ Contentful 客户端未创建，检查环境变量');
    return [];
  }
  
  try {
    const res = await client.getEntries({
      content_type: 'post',
      order: ['-fields.publishedAt'],
      limit,
    });
    
    console.log('✅ 获取到文章数量:', res.items.length);
    console.log('文章列表:', res.items.map(item => item.fields.title));
    
    // ... 其余代码
  } catch (error) {
    console.error('❌ 获取文章失败:', error);
    return [];
  }
}
```

然后查看 Vercel 的构建日志或本地控制台输出。

---

**按照以上步骤操作，应该能看到 Contentful 的内容了！**

