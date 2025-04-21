import React from "react";

export default function PricingPage() {
  return (
    <div className="py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Тарифы</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Выберите подходящий тариф для ваших потребностей
        </p>
      </section>

      {/* Тарифные планы */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Базовый тариф */}
        <div className="border rounded-lg p-8 flex flex-col">
          <h3 className="text-lg font-medium mb-2">Базовый</h3>
          <div className="text-3xl font-bold mb-4">0 ₽</div>
          <p className="text-muted-foreground mb-6">Для личного использования</p>
          <ul className="space-y-3 mb-8 flex-grow">
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-green-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Функция 1
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-green-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Функция 2
            </li>
            <li className="flex items-center text-muted-foreground">
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Функция 3
            </li>
          </ul>
          <button className="w-full py-2 border border-primary text-primary font-medium rounded-md">Выбрать</button>
        </div>

        {/* Стандартный тариф */}
        <div className="border rounded-lg p-8 flex flex-col bg-primary text-white">
          <div className="absolute top-0 right-0 bg-yellow-500 text-xs px-3 py-1 rounded-bl-lg rounded-tr-lg">Популярный</div>
          <h3 className="text-lg font-medium mb-2">Стандартный</h3>
          <div className="text-3xl font-bold mb-4">990 ₽</div>
          <p className="opacity-80 mb-6">В месяц</p>
          <ul className="space-y-3 mb-8 flex-grow">
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Функция 1
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Функция 2
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Функция 3
            </li>
          </ul>
          <button className="w-full py-2 bg-white text-primary font-medium rounded-md">Выбрать</button>
        </div>

        {/* Премиум тариф */}
        <div className="border rounded-lg p-8 flex flex-col">
          <h3 className="text-lg font-medium mb-2">Премиум</h3>
          <div className="text-3xl font-bold mb-4">1990 ₽</div>
          <p className="text-muted-foreground mb-6">В месяц</p>
          <ul className="space-y-3 mb-8 flex-grow">
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-green-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Функция 1
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-green-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Функция 2
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-green-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Функция 3
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-green-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Функция 4
            </li>
          </ul>
          <button className="w-full py-2 border border-primary text-primary font-medium rounded-md">Выбрать</button>
        </div>
      </section>

      {/* Дополнительная информация */}
      <section className="mt-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">Часто задаваемые вопросы</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-medium text-lg mb-2">Как выбрать подходящий тариф?</h3>
            <p>Опишите, как пользователь может выбрать подходящий тариф в зависимости от своих потребностей.</p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-medium text-lg mb-2">Можно ли сменить тариф?</h3>
            <p>Информация о возможности и процедуре смены тарифа.</p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-medium text-lg mb-2">Как оплатить подписку?</h3>
            <p>Перечень доступных способов оплаты и информация о процессе оплаты.</p>
          </div>
        </div>
      </section>
    </div>
  );
} 