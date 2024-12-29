import { Mail, Phone } from 'lucide-react';
import React from 'react';

const ContactPage = () => {
    return (
        <section id="contact" className="h-[calc(100vh-130px)]">
            <div className="container mx-auto flex h-full items-center justify-center">
                <div className="w-full max-w-md rounded px-8 pb-8 pt-6">
                    <h1 className="mb-6 text-center text-[2vw] font-bold">
                        Контактная информация
                    </h1>
                    <div className="mb-4">
                        <p className="text-sm font-bold text-gray-700">
                            Телефон:
                        </p>
                        <p className="text-gray-600">+7 (999) 806-21-77</p>
                    </div>
                    <div className="mb-4">
                        <p className="text-sm font-bold text-gray-700">
                            Email:
                        </p>
                        <p className="text-gray-600">ginj.help@yandex.ru</p>
                    </div>
                    <div className="mb-4">
                        <p className="text-sm font-bold text-gray-700">
                            Часы работы:
                        </p>
                        <p className="text-gray-600">пн-пт с 10:00 до 18:00</p>
                    </div>
                    <div className="mt-6 flex justify-center">
                        <a
                            href="https://t.me/yourtelegram"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mx-2 text-blue-500 hover:text-blue-700"
                        >
                            <Phone size={30} />
                        </a>
                        <a
                            href="mailto:sale@myinvision.ru"
                            className="mx-2 text-blue-500 hover:text-blue-700"
                        >
                            <Mail size={30} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;
