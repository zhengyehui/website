# Contentful 配置完整指南

## 🎯 目标

在 Contentful 中创建内容类型，让非技术人员也能轻松更新网站内容。

## 📋 需要创建的内容类型

1. **Post** - 新闻/文章
2. **Page** - 页面内容（可选）
3. **Service** - 服务项目（可选）

---

## 第一步：创建 Post 内容类型（新闻/文章）

### 1.1 进入 Content Model

1. 登录 Contentful 后台
2. 点击左侧菜单 **Content model**
3. 点击右上角 **Add content type**

### 1.2 设置基本信息

- **Name**: `Post`
- **API Identifier**: `post`（自动生成，确保是 `post`）
- **Description**: `新闻和文章内容`

点击 **Create**

### 1.3 添加字段

点击 **Add field**，依次添加以下字段：

#### 字段 1：title（标题）

- **Name**: `Title`
- **Field ID**: `title`（自动生成）
- **Type**: 选择 **Short text**
- **Required**: ✅ 勾选
- **Help text**: `文章标题`
- 点击 **Create and configure**

#### 字段 2：slug（URL 标识）

- **Name**: `Slug`
- **Field ID**: `slug`
- **Type**: 选择 **Short text**
- **Required**: ✅ 勾选
- **Unique**: ✅ 勾选（重要！）
- **Help text**: `URL 友好标识，如：first-news`
- 点击 **Create and configure**

#### 字段 3：excerpt（摘要）

- **Name**: `Excerpt`
- **Field ID**: `excerpt`
- **Type**: 选择 **Long text**
- **Required**: ❌ 不勾选
- **Help text**: `文章摘要，显示在列表页`
- 点击 **Create and configure**

#### 字段 4：content（内容）

- **Name**: `Content`
- **Field ID**: `content`
- **Type**: 选择 **Rich text**
- **Required**: ❌ 不勾选
- **Help text**: `文章正文内容`
- 点击 **Create and configure**

#### 字段 5：publishedAt（发布时间）

- **Name**: `Published At`
- **Field ID**: `publishedAt`
- **Type**: 选择 **Date & time**
- **Required**: ❌ 不勾选
- **Help text**: `文章发布时间`
- 点击 **Create and configure**

#### 字段 6：author（作者，可选）

- **Name**: `Author`
- **Field ID**: `author`
- **Type**: 选择 **Short text**
- **Required**: ❌ 不勾选
- **Help text**: `文章作者`
- 点击 **Create and configure**

#### 字段 7：featuredImage（封面图，可选）

- **Name**: `Featured Image`
- **Field ID**: `featuredImage`
- **Type**: 选择 **Media**
- **Allowed media types**: 只选择 **Images**
- **Required**: ❌ 不勾选
- **Help text**: `文章封面图片`
- 点击 **Create and configure**

### 1.4 保存内容类型

点击右上角 **Save**

---

## 第二步：创建 Page 内容类型（可选）

如果你想让页面内容也通过 Contentful 管理：

### 2.1 创建内容类型

- **Name**: `Page`
- **API Identifier**: `page`

### 2.2 添加字段

#### 字段 1：title
- **Type**: Short text
- **Required**: ✅

#### 字段 2：slug
- **Type**: Short text
- **Required**: ✅
- **Unique**: ✅

#### 字段 3：content
- **Type**: Rich text
- **Required**: ❌

#### 字段 4：order（排序）
- **Type**: Number
- **Required**: ❌
- **Help text**: `页面显示顺序`

点击 **Save**

---

## 第三步：创建 Service 内容类型（可选）

如果你想让服务内容也通过 Contentful 管理：

### 3.1 创建内容类型

- **Name**: `Service`
- **API Identifier**: `service`

### 3.2 添加字段

#### 字段 1：title
- **Type**: Short text
- **Required**: ✅

#### 字段 2：description
- **Type**: Long text
- **Required**: ❌

#### 字段 3：icon（图标）
- **Type**: Short text
- **Required**: ❌
- **Help text**: `图标 emoji，如：🎯`

#### 字段 4：order
- **Type**: Number
- **Required**: ❌

点击 **Save**

---

## 第四步：添加内容

### 4.1 添加新闻（Post）

1. 点击左侧菜单 **Content**
2. 点击 **Add entry**
3. 选择 **Post**
4. 填写内容：
   - **Title**: `公司成立`
   - **Slug**: `company-established`（注意：不能有空格，使用连字符）
   - **Excerpt**: `我们公司正式成立了！感谢大家的支持。`
   - **Content**: 输入文章正文（可以使用富文本编辑器）
   - **Published At**: 选择发布日期
   - **Author**: `管理员`（可选）
5. 点击右上角 **Publish**

### 4.2 添加更多新闻

重复步骤 4.1，添加更多新闻。

---

## 📝 字段命名对照表

| Contentful 字段 | 代码中使用 | 说明 |
|----------------|-----------|------|
| `title` | `post.fields.title` | 标题 |
| `slug` | `post.fields.slug` | URL 标识 |
| `excerpt` | `post.fields.excerpt` | 摘要 |
| `content` | `post.fields.content` | 正文 |
| `publishedAt` | `post.fields.publishedAt` | 发布时间 |
| `author` | `post.fields.author` | 作者（可选） |
| `featuredImage` | `post.fields.featuredImage` | 封面图（可选） |

---

## ✅ 验证配置

### 检查 API Identifier

确保内容类型的 API Identifier 是：
- `post`（不是 `Post` 或 `POST`）
- `page`（如果创建了）
- `service`（如果创建了）

### 测试获取数据

在代码中测试：

```typescript
import { getPosts } from '@/lib/contentful';

// 测试
const posts = await getPosts(3);
console.log('获取到的文章:', posts);
```

---

## 🎨 内容示例

### 示例新闻 1

- **Title**: `公司成立`
- **Slug**: `company-established`
- **Excerpt**: `我们公司正式成立了！感谢大家的支持。`
- **Content**: 
  ```
  我们很高兴地宣布，公司于 2024 年 1 月 1 日正式成立。
  
  公司致力于为客户提供优质的服务，我们拥有一支经验丰富的团队。
  
  感谢大家的支持！
  ```
- **Published At**: `2024-01-01`

### 示例新闻 2

- **Title**: `新产品发布`
- **Slug**: `new-product-launch`
- **Excerpt**: `我们发布了全新的产品，欢迎大家体验。`
- **Content**: `产品详细介绍...`
- **Published At**: `2024-01-15`

---

## 🔧 常见问题

### Q: Slug 应该怎么写？

**A**: 
- ✅ 正确：`company-established`、`new-product`
- ❌ 错误：`Company Established`、`new product`、`new_product`

规则：小写字母，用连字符 `-` 分隔单词。

### Q: 为什么需要 Unique？

**A**: Slug 用于生成 URL，必须是唯一的。例如：
- `/news/company-established`
- `/news/new-product`

如果重复，会导致冲突。

### Q: Rich text 和 Long text 的区别？

**A**:
- **Long text**: 纯文本，不支持格式
- **Rich text**: 富文本，支持加粗、链接、列表等格式

### Q: 如何添加图片？

**A**:
1. 在 Contentful 中点击 **Media**
2. 上传图片
3. 在文章中选择 **Featured Image** 字段
4. 选择上传的图片

---

## 📚 下一步

配置完成后：

1. 在代码中恢复 Contentful 调用
2. 测试获取数据
3. 推送到 GitHub
4. Vercel 自动部署

详细步骤请查看 `快速添加新闻.md`

