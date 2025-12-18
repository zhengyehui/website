# Contentful 快速配置（5分钟）

## 🚀 最简配置（只创建 Post）

### 第1步：创建 Post 内容类型（2分钟）

1. 登录 Contentful：https://www.contentful.com/
2. 点击 **Content model** → **Add content type**
3. 填写：
   - **Name**: `Post`
   - **API Identifier**: `post`（确保是小写）
4. 点击 **Create**

### 第2步：添加必需字段（2分钟）

点击 **Add field**，添加以下字段：

#### 1. Title（标题）
- **Type**: Short text
- **Required**: ✅ 勾选
- **Field ID**: `title`

#### 2. Slug（URL标识）
- **Type**: Short text
- **Required**: ✅ 勾选
- **Unique**: ✅ 勾选
- **Field ID**: `slug`

#### 3. Excerpt（摘要）
- **Type**: Long text
- **Required**: ❌ 不勾选
- **Field ID**: `excerpt`

#### 4. Published At（发布时间）
- **Type**: Date & time
- **Required**: ❌ 不勾选
- **Field ID**: `publishedAt`

点击 **Save**

### 第3步：添加第一条新闻（1分钟）

1. 点击 **Content** → **Add entry**
2. 选择 **Post**
3. 填写：
   - **Title**: `欢迎来到我们的网站`
   - **Slug**: `welcome`
   - **Excerpt**: `这是第一条新闻`
   - **Published At**: 选择今天
4. 点击 **Publish**

完成！

---

## 📋 字段清单（复制粘贴用）

创建 Post 内容类型时，需要这些字段：

```
字段 1: Title (Short text, Required)
字段 2: Slug (Short text, Required, Unique)
字段 3: Excerpt (Long text, Optional)
字段 4: Published At (Date & time, Optional)
```

---

## ✅ 验证

配置完成后，在代码中测试：

```typescript
// 在 app/page.tsx 中取消注释
import { getPosts } from '@/lib/contentful';
const posts: Post[] = await getPosts(3);
```

如果能看到新闻，说明配置成功！

