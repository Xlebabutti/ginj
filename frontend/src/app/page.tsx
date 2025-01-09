import AboutPage from '@/entities/about-page/about-page';
import ContactPage from '@/entities/contact-page/contact-page';
import PricingPage from '@/entities/pricing-page/pricing-page';
import UserList from './user';

export default async function Home() {
    return (
        <main>
            <section
                className="h-[calc(100vh-130px)] bg-cover bg-center"
                id="home"
            >
                <div className="container mx-auto flex h-full items-center justify-center">
                    <div className="flex-1 text-left">
                        <h1 className="mb-4 text-6xl font-bold text-blue-500">
                            Организация и проведение онлайн-трансляций
                        </h1>
                        <p className="mb-8 text-2xl text-white">
                            За 2024 год мы провели около 200 онлайн-мероприятий
                            с посещаемостью до 30000 зрителей. И это не предел
                            наших возможностей.
                        </p>
                        <div className="flex gap-5">
                            <button className="animate-pulse rounded-lg bg-blue-300 px-4 py-2 text-black hover:bg-gray-300">
                                Начать эфир!
                            </button>
                            <button className="rounded-lg bg-blue-300 px-4 py-2 text-black hover:bg-gray-300">
                                TG
                            </button>
                            <button className="rounded-lg bg-blue-300 px-4 py-2 text-black hover:bg-gray-300">
                                WB
                            </button>
                        </div>
                    </div>
                    <div className="flex-1 text-center">asdfsadasdas</div>
                </div>
            </section>
            <section
                id="services"
                className="h-[calc(100vh-130px)] bg-cover bg-center"
            >
                <div className="container mx-auto flex h-full items-center justify-center">
                    <div className="text-left">услуги</div>
                </div>
            </section>
            <AboutPage />
            <PricingPage />
            <ContactPage />
            <section
                id="faq"
                className="h-[calc(100vh-130px)] bg-cover bg-center"
            >
                <div className="container mx-auto flex h-full items-center justify-center">
                    <div className="text-left">faq</div>
                </div>
            </section>
            <UserList></UserList>
        </main>
    );
}
