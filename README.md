# Интерактивный урок

Демо можно посмотреть тут: [https://alx2das.github.io/highlightSB/demo/](https://alx2das.github.io/highlightSB/demo/)

## Сборка и отладка

```cli
yarn start      // Запуск Storybook в DEV режиме
yarn build      // Сборка библиотеки в PROD режиме
yarn demo       // Сборка Storybook для демонстрации
yarn prettier   // Нормализация и форматирование кода
```

## Интеграция
Смотри файл index.html в корне.

## Документация

### Подсветка кода:
По умолчанию может определить только язык Swift. Дополнительные языки нужно подключать вручную.

Открываем файл `src/ViewCode/utils.ts`. Ищем импорт swift языка и делаем также:

```js
import swift from "highlight.js/lib/languages/swift";
import java from "highlight.js/lib/languages/java";

hljs.registerLanguage("swift", swift);
hljs.registerLanguage("java", java);
```

Так же изменить стили подсветки можно подключив необходимые из доступных или создать кастомные.

Открываем файл `src/ViewCode/ViewCode.tsx`.

```js
import "highlight.js/styles/github.css";
```

### Пример использования:

```jsx
import React from "react";
import { LessonSection, ViewCode } from "lesson-swiftbook";

const ExampleReactComponent = () => {
    // Секции уроков
    const sections = [
        { id: 1, title: "Section 1", ... },
        { id: 1, title: "Section 1", ... },
    ];

    return (
        <ExampleLayout>
            {sections.map(({ id, ...section }) => (
                <LessonSection key={id} { ...section } />
            ))}
        </ExampleLayout>
    );
};
```

### Модель секции `<LessonSection />`

```typescript
import { ReactNode } from "react";

interface LessonSection {
    // Заголовки и описание секции
    title: string;
    subtitle: string;
    description?: string | ReactNode;

    // Картинка или видео секции
    // `sourceNode` - имеет высший приоритет
    sourceUrl?: string;
    sourceType?: string;
    sourceNode?: ReactNode;

    // Шаги секции
    steps?: {
        title: string;
        description?: string | ReactNode;
        comment?: string | ReactNode;

        sourceUrl?: string;
        sourceType?: string;
        sourceNode?: ReactNode;

        // Сравнение кода происходит для шагов с одинаковым `fileName`
        fileName?: string;
        fileContent?: string;
    }[];
}
```

### Сравнение `fileContent`

Шаги перебираются в цикле, шаг проверяет наличие `fileName` и `fileContent`.
Текущий шаг пытается найти предыдущий с таким же `fileName` для того что бы сравнить 2 `fileContent`.
Поэтому `fileContent` для первого шага будет без подсветки изменненных строк.

Например:

```json
{
  "steps": [
    {
      "fileName": "example.swift",
      "fileContent": "import Meta;\nimport Data;"
    }
  ]
}
```

### Подсветка и сравнение кода `<ViewCode />`

Поддерживает только SWIFT-код.

- Для поддержки дополнительных языков необходимо подгрузить язык как указано в [файле с утилитами](https://github.com/alx2das/highlightSB/blob/main/src/ViewCode/utils.ts#L59).

Сравнение строк происходит построчно.

```typescript
interface ViewCode {
    nextValue: string; // Отображаемый код
    prevValue?: string; // Предыдущий код для сравнения
    startNumber?: number; // С какого номера строки начать нумерацию
    hideNumber?: boolean; // Скрыть нумерацию строк
    minify?: boolean; // Выводить только измененный код
    minifyCountSpace?: number; // Свободное пространство при минификации
}
```
