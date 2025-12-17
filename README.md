# 公司官网 - Next.js + Contentful

这是一个完整的公司官网项目，**完全免费**，内容更新简单，适合小公司使用。

## ✨ 特点

- ✅ **完全免费**：Vercel + Contentful 免费额度足够使用
- ✅ **内容更新简单**：非技术人员可在 Contentful 后台更新
- ✅ **SEO 优化**：服务端渲染，搜索引擎友好
- ✅ **性能优秀**：静态生成 + CDN 加速
- ✅ **响应式设计**：完美适配手机、平板、电脑
- ✅ **表单功能**：内置联系表单（可连接 Formspree 等）

## 🚀 快速开始（5分钟）

### 第一步：准备 Contentful（2分钟）

1. 访问 https://www.contentful.com/ 注册账号（免费）
2. 创建新空间（Space）
3. 获取 Space ID 和 Access Token：
   - 进入 Settings → API keys
   - 复制 Space ID 和 Content delivery API - access token

### 第二步：配置项目（1分钟）

1. 复制 `env.local.example` 为 `.env.local`

```bash
# Windows 命令提示符
copy env.local.example .env.local

# PowerShell
Copy-Item env.local.example .env.local
```
2. 填入你的 Contentful 配置：

```env
CONTENTFUL_SPACE_ID=你的-space-id
CONTENTFUL_ACCESS_TOKEN=你的-access-token
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=你的公司名称
```

### 第三步：安装并运行（2分钟）

```bash
# 安装依赖
npm install

# 运行开发服务器
npm run dev
```

访问：http://localhost:3000

### 第四步：在 Contentful 中创建内容（可选）

1. 进入 Contentful 后台
2. 创建内容类型（Content Model）：
   - **Page**：页面内容
   - **Post**：新闻/文章
   - **Service**：服务项目
3. 添加内容

## 📁 项目结构

```
website/
├── app/              # Next.js 页面
│   ├── page.tsx     # 首页
│   ├── about/       # 关于我们
│   ├── services/    # 服务
│   ├── news/        # 新闻
│   └── contact/     # 联系我们
├── components/      # 组件
├── lib/            # 工具函数
│   └── contentful.ts # Contentful 客户端
└── .env.local      # 环境变量（不提交到 Git）
```

## 🎨 自定义

### 修改公司名称

1. 编辑 `components/Header.tsx` 和 `components/Footer.tsx`
2. 修改 "公司名称" 为你的公司名

### 修改颜色主题

编辑 `tailwind.config.js` 中的 `primary` 颜色

### 修改内容

- **方式一**：直接在代码中修改组件内容
- **方式二**：在 Contentful 中创建内容模型，然后连接 API

## 📧 配置表单提交

### 使用 Formspree（推荐，免费）

1. 访问 https://formspree.io/ 注册
2. 创建表单，获取表单 ID
3. 编辑 `app/contact/page.tsx`，取消注释 Formspree 代码
4. 替换 `YOUR_FORM_ID` 为你的表单 ID

### 使用 EmailJS（免费）

1. 访问 https://www.emailjs.com/ 注册
2. 配置邮件服务
3. 在表单提交时调用 EmailJS API

## 🚀 部署到 Vercel（免费）

### 方法一：通过 GitHub（推荐）

1. 将代码推送到 GitHub
2. 访问 https://vercel.com/
3. 导入 GitHub 仓库
4. 添加环境变量（CONTENTFUL_SPACE_ID 等）
5. 点击部署

### 方法二：通过 Vercel CLI

```bash
# 安装 Vercel CLI
npm install -g vercel

# 登录
vercel login

# 部署
vercel

# 添加环境变量
vercel env add CONTENTFUL_SPACE_ID
vercel env add CONTENTFUL_ACCESS_TOKEN
```

## 💰 成本

- **Vercel**：免费（100GB 带宽/月，足够小公司使用）
- **Contentful**：免费（25,000 条内容/月）
- **总计**：$0/月

## 📝 内容更新流程

1. 登录 Contentful 后台
2. 编辑或添加内容
3. 发布内容
4. 网站自动更新（Vercel 会自动重新构建）

## 🔧 常见问题

### Q: 如何添加新页面？

A: 在 `app/` 目录下创建新文件夹和 `page.tsx` 文件

### Q: 如何修改导航菜单？

A: 编辑 `components/Header.tsx` 中的 `navItems` 数组

### Q: 表单提交后如何接收邮件？

A: 使用 Formspree 或 EmailJS（见上方配置说明）

## 📚 更多资源

- [Next.js 文档](https://nextjs.org/docs)
- [Contentful 文档](https://www.contentful.com/developers/docs/)
- [Vercel 部署指南](https://vercel.com/docs)

## 🆘 需要帮助？

如果遇到问题，可以：
1. 查看代码注释
2. 参考 Next.js 和 Contentful 官方文档
3. 使用 AI 助手（如 Cursor）帮助调试

---

**祝你搭建顺利！** 🎉
