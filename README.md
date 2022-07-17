# Интерактивный урок

Демо можно посмотреть тут: [https://alx2das.github.io/highlightSB/demo/](https://alx2das.github.io/highlightSB/demo/)

## Сборка и отладка

```cli
yarn start      // Запуск Storybook в DEV режиме
yarn build      // Сборка библиотеки в PROD режиме
yarn demo       // Сборка Storybook для демонстрации
yarn prettier   // Нормальзиция и форматирование кода 
```

## Документация

### Пример использования:
```jsx
import React from "react";
import { LessonSection, ViewCode } from "highlightSB";

const ExampleReactComponent = () => {
    // Секции уроков
    const sections = [
        { id: 1, title: "Section 1", ... },
        { id: 1, title: "Section 1", ... },
    ];
    
    return (
        <ExampleLayout>
            {sections.map(({ id, ...section }) => (
                <LessonSection key={id} {...section} />
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
    description: string | ReactNode;
    
    // Картинка или видео секции
    // `sourceNode` - имеет высший приоритет
    sourceUrl?: string;
    sourceType?: "image" | "video";
    sourceNode?: ReactNode;

    // Шаги секции
    steps?: {
        id: string;
        title: string;
        description?: string | ReactNode;
        comment?: string | ReactNode;
        
        // Данные для отображения кода
        fileName?: string;
        fileContent?: string;
        fileMarkers?: number[];
        fileLanguage?: string; // default `swift`

        // Картинка или видео шага
        sourceUrl?: string;
        sourceType?: "image" | "video";
        sourceNode?: ReactNode;
    }[];
}
```

### Сравнение `fileContent` 

Шаги перебираются в цикле, шаг проверяет наличие `fileName` и `fileContent`. 
Текущий шаг пытается найти предыдущий с таким же `fileName` для того что бы сравнить 2 `fileContent`.
По этому `fileContent` для первого шага будет без подсветки изменненных строк.

Так же есть дополнительное свойство `fileMarkers`, в него можно передать массив номеров для подсветки строк. 
Нумерация начинается с `1`. 

Например:
```json
{
  "steps": [
    {
      "fileName": "example.swift",
      "fileContent": "import Meta;\nimport Data;",
      "fileMarkers": [1, 2]
    }
  ]
}
```

### Посветка и сравнение кода `<ViewCode />`

```typescript
interface ViewCode {
    nextValue: string;              // Отображаемый код
    prevValue?: string;             // Предыдущий код для сравнения изменений
    language?: string | string[];   // Какой язык используется
    startNumber?: number;           // С какого номера строки начать нумерацию
    hideNumber?: boolean;           // Выводить или нет номера строк
    markers?: number[];             // Номера строк которые нужно подсветить
}
```