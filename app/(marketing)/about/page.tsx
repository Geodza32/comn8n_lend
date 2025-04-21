import React from "react";

export default function AboutPage() {
  return (
    <div className="py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">О нас</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Краткое описание вашей компании и миссии
        </p>
      </section>

      {/* История компании */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Наша история</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="mb-4">
              Здесь разместите историю создания компании, ключевые этапы развития.
              Расскажите о том, как появилась идея, первые шаги и достижения.
            </p>
            <p>
              Продолжение истории, важные моменты и переломные точки в развитии компании.
            </p>
          </div>
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
            Фото команды или основателя
          </div>
        </div>
      </section>

      {/* Команда */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Наша команда</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Повторите этот блок для каждого члена команды */}
          <div className="text-center">
            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
            <h3 className="font-medium text-lg">Имя Фамилия</h3>
            <p className="text-muted-foreground">Должность</p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
            <h3 className="font-medium text-lg">Имя Фамилия</h3>
            <p className="text-muted-foreground">Должность</p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
            <h3 className="font-medium text-lg">Имя Фамилия</h3>
            <p className="text-muted-foreground">Должность</p>
          </div>
        </div>
      </section>

      {/* Ценности */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Наши ценности</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-medium mb-2">Качество</h3>
            <p>Описание того, как компания обеспечивает высокое качество продуктов или услуг.</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-medium mb-2">Инновации</h3>
            <p>Информация о том, как компания внедряет инновации и развивается.</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-medium mb-2">Клиентоориентированность</h3>
            <p>Описание подхода к работе с клиентами и обеспечению их удовлетворенности.</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-medium mb-2">Прозрачность</h3>
            <p>Информация о прозрачности бизнес-процессов и коммуникации с клиентами.</p>
          </div>
        </div>
      </section>
    </div>
  );
} 