const PricingPage = () => {
    return (
        <section
            id="pricing"
            className="h-[calc(100vh-130px)] bg-cover bg-center"
        >
            <div className="container mx-auto flex h-full items-center justify-center">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    <div className="rounded-lg p-6 shadow-lg">
                        <h2 className="mb-4 text-xl font-bold">
                            Базовый тариф
                        </h2>
                        <p className="mb-4 text-gray-600">
                            Идеально подходит для старта.
                        </p>
                        <p className="mb-4 text-2xl font-bold">₽ 1,000</p>
                        <ul className="mb-4 list-inside list-disc">
                            <li>Услуга 1</li>
                            <li>Услуга 2</li>
                            <li>Услуга 3</li>
                        </ul>
                        <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
                            Выбрать
                        </button>
                    </div>

                    <div className="rounded-lg p-6 shadow-lg">
                        <h2 className="mb-4 text-xl font-bold">
                            Стандартный тариф
                        </h2>
                        <p className="mb-4 text-gray-600">
                            Для растущих компаний.
                        </p>
                        <p className="mb-4 text-2xl font-bold">₽ 2,500</p>
                        <ul className="mb-4 list-inside list-disc">
                            <li>Услуга 1</li>
                            <li>Услуга 2</li>
                            <li>Услуга 3</li>
                            <li>Услуга 4</li>
                        </ul>
                        <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
                            Выбрать
                        </button>
                    </div>

                    <div className="rounded-lg p-6 shadow-lg">
                        <h2 className="mb-4 text-xl font-bold">
                            Премиум тариф
                        </h2>
                        <p className="mb-4 text-gray-600">
                            Для крупных бизнесов.
                        </p>
                        <p className="mb-4 text-2xl font-bold">₽ 5,000</p>
                        <ul className="mb-4 list-inside list-disc">
                            <li>Услуга 1</li>
                            <li>Услуга 2</li>
                            <li>Услуга 3</li>
                            <li>Услуга 4</li>
                            <li>Услуга 5</li>
                        </ul>
                        <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
                            Выбрать
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingPage;
