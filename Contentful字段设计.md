# Contentful 字段设计说明

## 📋 Post 内容类型字段设计

### 必需字段（必须创建）

| 字段名 | 类型 | 必填 | 唯一 | Field ID | 说明 |
|--------|------|------|------|----------|------|
| **Title** | Short text | ✅ | ❌ | `title` | 文章标题 |
| **Slug** | Short text | ✅ | ✅ | `slug` | URL 标识（如：first-news） |

### 推荐字段（建议创建）

| 字段名 | 类型 | 必填 | 唯一 | Field ID | 说明 |
|--------|------|------|------|----------|------|
| **Excerpt** | Long text | ❌ | ❌ | `excerpt` | 文章摘要 |
| **Published At** | Date & time | ❌ | ❌ | `publishedAt` | 发布时间 |
| **Content** | Rich text | ❌ | ❌ | `content` | 文章正文 |

### 可选字段（根据需要）

| 字段名 | 类型 | 必填 | Field ID | 说明 |
|--------|------|------|----------|------|
| **Author** | Short text | ❌ | `author` | 作者 |
| **Featured Image** | Media (Images) | ❌ | `featuredImage` | 封面图 |
| **Category** | Reference | ❌ | `category` | 分类（需要先创建 Category） |

---

## 🎯 最小配置（快速开始）

如果只想快速开始，最少需要：

1. **Title** (Short text, Required)
2. **Slug** (Short text, Required, Unique)

其他字段可以后续添加。

---

## 📝 字段详细说明

### Title（标题）

- **用途**: 文章标题
- **示例**: `公司成立`、`新产品发布`
- **限制**: 建议不超过 100 字符

### Slug（URL标识）

- **用途**: 生成 URL，如 `/news/company-established`
- **规则**: 
  - 只能包含小写字母、数字、连字符
  - 不能有空格
  - 必须唯一
- **示例**: 
  - ✅ `company-established`
  - ✅ `new-product-2024`
  - ❌ `Company Established`（有大写）
  - ❌ `new product`（有空格）

### Excerpt（摘要）

- **用途**: 显示在新闻列表页
- **建议长度**: 50-200 字符
- **示例**: `我们公司正式成立了！感谢大家的支持。`

### Published At（发布时间）

- **用途**: 文章发布日期
- **格式**: Date & time
- **用途**: 用于排序和显示

### Content（正文）

- **用途**: 文章详细内容
- **类型**: Rich text（支持格式）
- **可以包含**: 文字、链接、列表、加粗等

---

## 🔄 字段与代码的对应关系

```typescript
// Contentful 中的字段
{
  title: "公司成立",
  slug: "company-established",
  excerpt: "这是摘要",
  publishedAt: "2024-01-01T00:00:00Z"
}

// 代码中访问
post.fields.title        // "公司成立"
post.fields.slug         // "company-established"
post.fields.excerpt       // "这是摘要"
post.fields.publishedAt   // "2024-01-01T00:00:00Z"
```

---

## 💡 最佳实践

### Slug 命名建议

- 使用小写字母
- 用连字符分隔单词
- 保持简短（建议 3-5 个单词）
- 使用有意义的名称

**示例**:
- ✅ `company-news`
- ✅ `product-launch-2024`
- ❌ `news1`（不够描述性）
- ❌ `this-is-a-very-long-slug-name`（太长）

### 内容组织建议

1. **标题**: 简洁明了，吸引人
2. **摘要**: 概括全文，50-200 字
3. **正文**: 结构清晰，使用段落和列表

---

## 🎨 示例内容

### 示例 1：公司新闻

```
Title: 公司成立
Slug: company-established
Excerpt: 我们很高兴地宣布，公司于 2024 年正式成立。
Published At: 2024-01-01
Content: 
  我们很高兴地宣布，公司于 2024 年 1 月 1 日正式成立。
  
  公司致力于为客户提供优质的服务...
```

### 示例 2：产品发布

```
Title: 新产品发布
Slug: new-product-launch
Excerpt: 我们发布了全新的产品，欢迎大家体验。
Published At: 2024-01-15
Content: 
  我们很高兴地发布我们的新产品...
```

---

## ✅ 检查清单

创建内容类型后，检查：

- [ ] API Identifier 是 `post`（小写）
- [ ] `title` 字段已创建且必填
- [ ] `slug` 字段已创建、必填且唯一
- [ ] `excerpt` 字段已创建（可选）
- [ ] `publishedAt` 字段已创建（可选）
- [ ] 已添加至少一条测试内容
- [ ] 内容已发布（Published）

---

## 🆘 常见问题

### Q: Field ID 可以改吗？

**A**: 可以，但建议使用推荐的 Field ID，因为代码中已经使用了这些名称。

### Q: 字段顺序重要吗？

**A**: 不重要，但建议按使用频率排序（Title 和 Slug 放在最前面）。

### Q: 可以添加自定义字段吗？

**A**: 可以！只要在代码中相应处理即可。

---

**配置完成后，就可以在 Contentful 后台轻松添加和管理新闻了！**

