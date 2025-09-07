# JSON ↔ Excel Конвертер

Профессиональный веб-инструмент для быстрой и безопасной конвертации данных между JSON и Excel форматами.

![JSON Excel Converter](https://img.shields.io/badge/JSON-Excel-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=for-the-badge&logo=vite)

## 🚀 Особенности

- **100% безопасность** - все операции выполняются локально в браузере
- **Без лимитов** - конвертируйте файлы любого размера бесплатно
- **Мгновенная обработка** - результат за секунды
- **Современный дизайн** - адаптивный интерфейс для всех устройств
- **Поддержка форматов** - JSON, XLSX, XLS

## 🎯 Функциональность

### JSON → Excel
- ✅ Простые массивы объектов
- ✅ Вложенные структуры данных
- ✅ Множественные листы Excel
- ✅ Автоматическое определение колонок
- ✅ Валидация JSON

### Excel → JSON
- ✅ Форматы .xlsx и .xls
- ✅ Drag & drop загрузка
- ✅ Обработка множественных листов
- ✅ Предварительный просмотр
- ✅ Скачивание результатов

## 🛠 Технологии

- **Frontend:** React 19.1.0
- **Стилизация:** Tailwind CSS + shadcn/ui
- **Иконки:** Lucide React
- **Конвертация:** xlsx.js + file-saver
- **Сборка:** Vite
- **Развертывание:** Статический хостинг

## 📦 Установка и запуск

### Требования
- Node.js 18+ 
- pnpm (рекомендуется) или npm

### Локальная разработка

```bash
# Клонирование репозитория
git clone https://github.com/imaxlazarenko1/Jsontoxml.git
cd Jsontoxml

# Установка зависимостей
pnpm install

# Запуск dev сервера
pnpm run dev
```

Откройте [http://localhost:5173](http://localhost:5173) в браузере.

### Production сборка

```bash
# Создание production build
pnpm run build

# Предварительный просмотр build
pnpm run preview
```

Готовые файлы будут в папке `dist/`.

## 🌐 Развертывание

Проект готов к развертыванию на любом статическом хостинге:

- **Netlify:** Перетащите папку `dist/` в Netlify
- **Vercel:** Подключите GitHub репозиторий
- **GitHub Pages:** Используйте GitHub Actions
- **Cloudflare Pages:** Подключите репозиторий

### Пример для Netlify

```bash
# После сборки
pnpm run build

# Загрузите содержимое папки dist/ на Netlify
```

## 📁 Структура проекта

```
json-excel-converter/
├── public/                 # Статические файлы
├── src/
│   ├── components/        # React компоненты
│   │   ├── ui/           # UI компоненты (shadcn/ui)
│   │   ├── Converter.jsx # Основной конвертер
│   │   ├── FileUploader.jsx
│   │   ├── DataPreview.jsx
│   │   ├── HeroSection.jsx
│   │   ├── FeaturesSection.jsx
│   │   ├── DemoSection.jsx
│   │   ├── Footer.jsx
│   │   ├── Navigation.jsx
│   │   └── LandingPage.jsx
│   ├── lib/
│   │   └── converter.js   # Логика конвертации
│   ├── App.jsx           # Главный компонент
│   ├── App.css          # Стили
│   └── main.jsx         # Точка входа
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Дизайн

Проект использует современный дизайн с:
- Градиентными фонами
- Плавными анимациями
- Адаптивной версткой
- Темной/светлой темой
- Микро-взаимодействиями

## 🔧 API конвертации

### JSON → Excel

```javascript
import { jsonToExcel } from './src/lib/converter';

const data = [
  { name: "Иван", age: 30, city: "Москва" },
  { name: "Мария", age: 25, city: "СПб" }
];

jsonToExcel(data, 'my-data.xlsx');
```

### Excel → JSON

```javascript
import { excelToJson } from './src/lib/converter';

const file = // File object
const result = await excelToJson(file);
console.log(result.data);
```

## 🤝 Вклад в проект

1. Форкните репозиторий
2. Создайте ветку для новой функции (`git checkout -b feature/amazing-feature`)
3. Зафиксируйте изменения (`git commit -m 'Add amazing feature'`)
4. Отправьте в ветку (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

## 📄 Лицензия

Этот проект распространяется под лицензией MIT. См. файл `LICENSE` для подробностей.

## 🐛 Сообщить об ошибке

Если вы нашли ошибку, пожалуйста, создайте [Issue](https://github.com/imaxlazarenko1/Jsontoxml/issues) с подробным описанием.

## 📞 Поддержка

- 📧 Email: support@jsonexcelconverter.com
- 🐛 Issues: [GitHub Issues](https://github.com/imaxlazarenko1/Jsontoxml/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/imaxlazarenko1/Jsontoxml/discussions)

## ⭐ Поставьте звезду

Если проект был полезен, поставьте ⭐ на GitHub!

---

**Сделано с ❤️ для разработчиков**

