/* jxjyStyle.css - Tailwind配置和基础样式 */

/* 引入 Tailwind CSS */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* 自定义字体 */
@layer utilities {
  .content-auto {
    content-visibility: auto;
  }
  
  .text-shadow {
    text-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  
  .card-hover {
    @apply transition-all duration-300 hover:shadow-lg hover:-translate-y-1;
  }
  
  .btn-primary {
    @apply bg-primary text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1;
  }
  
  .btn-secondary {
    @apply bg-secondary text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1;
  }
}

/* 自定义颜色 */
:root {
  --primary: #2563eb;     /* 主色调：深蓝色 */
  --secondary: #f97316;   /* 辅助色：橙色 */
  --neutral: #f8fafc;     /* 中性色：浅灰背景 */
  --dark: #0f172a;        /* 深色文本 */
}

/* 全局样式 */
@layer utilities {
  .content-auto {
    content-visibility: auto;
  }
  
  .text-responsive {
    @apply text-[clamp(1rem,2vw,1.25rem)];
  }
  
  .heading-responsive {
    @apply text-[clamp(1.5rem,3vw,2.5rem)];
  }
}

/* 平滑滚动 */
html {
  scroll-behavior: smooth;
}    