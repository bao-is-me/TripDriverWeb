import { motion } from 'framer-motion';
import {
    ChevronRight,
    ShieldCheck,
    CarFront,
    FileText,
    Smartphone,
    Users,
    Route,
    Briefcase,
    Download,
    Menu,
    X,
    Check,
} from 'lucide-react';
import { useMemo, useState } from 'react';

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
};

function SectionTitle({ eyebrow, title, desc }) {
    return (
        <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                {eyebrow}
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                {title}
            </h2>
            {desc ? (
                <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{desc}</p>
            ) : null}
        </div>
    );
}

function BenefitCard({ icon, title, desc }) {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                {icon}
            </div>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
        </div>
    );
}

function StoreBadge({ label }) {
    return (
        <button className="inline-flex items-center gap-3 rounded-xl border border-slate-300 bg-white px-4 py-3 text-left transition duration-200 hover:border-slate-400 hover:bg-slate-50">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
                <Download size={18} />
            </div>
            <div>
                <div className="text-xs text-slate-500">Tải trên</div>
                <div className="text-sm font-semibold text-slate-900">{label}</div>
            </div>
        </button>
    );
}

export default function TripDriverLandingPage() {
    const [tab, setTab] = useState('user');
    const [openMenu, setOpenMenu] = useState(false);

    const tabContent = useMemo(
        () => ({
            user: {
                title: 'Dành cho người cần một chuyến đi chủ động hơn',
                desc:
                    'TripDriver giúp bạn dễ dàng tìm kiếm xe tự lái phù hợp với nhu cầu di chuyển, từ những chuyến đi ngắn trong thành phố đến các hành trình dài ngày.',
                cta: 'Tải ứng dụng để bắt đầu hành trình của bạn',
                items: [
                    'Tìm xe nhanh theo nhu cầu sử dụng',
                    'Xem thông tin xe rõ ràng và trực quan',
                    'Gửi yêu cầu thuê dễ dàng trên ứng dụng',
                    'Theo dõi trạng thái đơn thuê thuận tiện',
                    'Chủ động hơn trong lịch trình cá nhân',
                    'Trải nghiệm thuê xe hiện đại, gọn gàng, dễ hiểu',
                ],
            },
            partner: {
                title: 'Dành cho chủ xe muốn khai thác phương tiện hiệu quả hơn',
                desc:
                    'TripDriver đồng hành cùng đối tác trong việc đưa xe tiếp cận đúng khách hàng, quản lý hoạt động cho thuê thuận tiện hơn và nâng cao tính chuyên nghiệp trên nền tảng số.',
                cta: 'Trở thành đối tác cùng TripDriver',
                items: [
                    'Tiếp cận thêm khách hàng có nhu cầu thuê xe',
                    'Tận dụng xe nhàn rỗi để gia tăng cơ hội khai thác',
                    'Đăng tải thông tin xe rõ ràng, chuyên nghiệp',
                    'Theo dõi yêu cầu thuê xe thuận tiện',
                    'Quản lý quy trình cho thuê tập trung hơn',
                    'Xây dựng hình ảnh đối tác đáng tin cậy trên nền tảng',
                ],
            },
            app: {
                title: 'Một ứng dụng cho trải nghiệm thuê xe rõ ràng hơn',
                desc:
                    'TripDriver được xây dựng để kết nối người thuê xe và chủ xe trên một nền tảng thống nhất. Mọi trải nghiệm đều hướng tới sự minh bạch, dễ dùng và phù hợp với nhu cầu di chuyển hiện đại.',
                cta: 'Khám phá cách TripDriver hoạt động',
                items: [
                    'Giao diện dễ tiếp cận',
                    'Thông tin xe trực quan',
                    'Luồng sử dụng rõ ràng',
                    'Tập trung vào trải nghiệm thuê xe tự lái',
                    'Phù hợp cho cá nhân, gia đình và các chuyến đi linh hoạt',
                    'Thiết kế cho nhu cầu di chuyển hiện đại',
                ],
            },
        }),
        []
    );

    const values = [
        {
            title: 'Chủ động lựa chọn',
            desc: 'Tìm chiếc xe phù hợp với lịch trình và nhu cầu di chuyển của bạn.',
            icon: <CarFront size={20} />,
        },
        {
            title: 'Thông tin minh bạch',
            desc: 'Xem thông tin xe trực quan để đưa ra lựa chọn dễ dàng hơn.',
            icon: <FileText size={20} />,
        },
        {
            title: 'Kết nối thuận tiện',
            desc: 'Đưa người thuê và đối tác đến gần nhau hơn trên cùng một nền tảng.',
            icon: <Users size={20} />,
        },
        {
            title: 'Trải nghiệm hiện đại',
            desc: 'Thiết kế quy trình gọn gàng, dễ hiểu, phù hợp thói quen dùng app hiện nay.',
            icon: <Smartphone size={20} />,
        },
        {
            title: 'Tối ưu cho đối tác',
            desc: 'Hỗ trợ đối tác quản lý hoạt động cho thuê thuận tiện hơn.',
            icon: <Briefcase size={20} />,
        },
        {
            title: 'Xây dựng niềm tin',
            desc: 'Hướng tới trải nghiệm thuê xe chuyên nghiệp, rõ ràng và đáng tin cậy.',
            icon: <ShieldCheck size={20} />,
        },
    ];

    const appPreview = [
        'Tìm xe phù hợp',
        'Xem thông tin xe rõ ràng',
        'Gửi yêu cầu thuê',
        'Theo dõi trạng thái đơn',
    ];

    const tabs = [
        { key: 'user', label: 'Người dùng' },
        { key: 'partner', label: 'Đối tác' },
        { key: 'app', label: 'Về ứng dụng' },
    ];

    const mobileLinks = [
        ['Người dùng', '#nguoi-dung'],
        ['Đối tác', '#doi-tac'],
        ['Về TripDriver', '#ve-tripdriver'],
        ['An toàn & Tin cậy', '#an-toan'],
        ['Hỗ trợ', '#ho-tro'],
    ];

    return (
        <div className="min-h-screen bg-white text-slate-900">
            <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                    <a href="#home" className="flex items-center gap-3">
                        <img
                            src="/TripDriverLogo.jpg"
                            alt="TripDriver logo"
                            className="h-11 w-11 rounded-full object-cover ring-1 ring-slate-200"
                        />
                        <div>
                            <div className="text-base font-bold text-slate-900">TripDriver</div>
                            <div className="text-xs text-slate-500">Nền tảng thuê xe tự lái</div>
                        </div>
                    </a>

                    <nav className="hidden items-center gap-7 lg:flex">
                        <a
                            href="#nguoi-dung"
                            className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
                        >
                            Người dùng
                        </a>
                        <a
                            href="#doi-tac"
                            className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
                        >
                            Đối tác
                        </a>
                        <a
                            href="#ve-tripdriver"
                            className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
                        >
                            Về TripDriver
                        </a>
                        <a
                            href="#an-toan"
                            className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
                        >
                            An toàn & Tin cậy
                        </a>
                        <a
                            href="#ho-tro"
                            className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
                        >
                            Hỗ trợ
                        </a>
                    </nav>

                    <div className="flex items-center gap-3">
                        <button className="hidden rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-blue-800 lg:inline-flex">
                            Tải ứng dụng
                        </button>
                        <button
                            onClick={() => setOpenMenu((v) => !v)}
                            className="inline-flex rounded-xl border border-slate-300 p-2 text-slate-700 lg:hidden"
                        >
                            {openMenu ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

                {openMenu ? (
                    <div className="border-t border-slate-200 bg-white lg:hidden">
                        <div className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
                            {mobileLinks.map(([label, href]) => (
                                <a
                                    key={label}
                                    href={href}
                                    onClick={() => setOpenMenu(false)}
                                    className="border-b border-slate-100 py-3 text-sm font-medium text-slate-700 last:border-b-0"
                                >
                                    {label}
                                </a>
                            ))}
                        </div>
                    </div>
                ) : null}
            </header>

            <main>
                <section
                    id="home"
                    className="scroll-mt-24 border-b border-blue-100 bg-gradient-to-b from-blue-50 to-white"
                >
                    <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.45 }}
                        >
                            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700">
                                <Route size={16} /> Nền tảng kết nối người thuê xe và chủ xe
                            </div>

                            <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-[56px] lg:leading-[1.08]">
                                Thuê xe tự lái dễ dàng hơn cùng TripDriver
                            </h1>

                            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                                TripDriver là nền tảng kết nối người cần thuê xe với chủ xe cho thuê,
                                giúp hành trình trở nên chủ động, rõ ràng và thuận tiện hơn ngay trên
                                một ứng dụng.
                            </p>

                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-3.5 text-sm font-semibold text-white transition duration-200 hover:bg-blue-800">
                                    Tải ứng dụng <ChevronRight size={18} />
                                </button>
                                {/*<button className="rounded-xl border border-slate-300 px-6 py-3.5 text-sm font-semibold text-slate-800 transition duration-200 hover:bg-slate-50">*/}
                                {/*    Tìm hiểu quyền lợi*/}
                                {/*</button>*/} 
                            </div>

                            <p className="mt-5 text-sm leading-6 text-slate-500">
                                Dành cho người dùng cần thuê xe linh hoạt và đối tác muốn khai thác xe
                                hiệu quả hơn.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <StoreBadge label="App Store" />
                                <StoreBadge label="Google Play" />
                            </div>
                        </motion.div>

                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.45, delay: 0.08 }}
                            className="relative"
                        >
                            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-4 sm:p-5">
                                <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
                                    <div className="rounded-[24px] bg-white p-4 shadow-sm">
                                        <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                                            <img
                                                src="/TripDriverLogo.jpg"
                                                alt="TripDriver"
                                                className="h-10 w-10 rounded-full object-cover"
                                            />
                                            <div>
                                                <div className="text-sm font-semibold text-slate-900">
                                                    TripDriver App
                                                </div>
                                                <div className="text-xs text-slate-500">
                                                    Thuê xe tự lái thuận tiện
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-4 space-y-3">
                                            {appPreview.map((item) => (
                                                <div
                                                    key={item}
                                                    className="flex items-center gap-3 rounded-xl bg-slate-50 px-3 py-3 text-sm text-slate-700"
                                                >
                                                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-700 text-white">
                                                        <Check size={15} />
                                                    </div>
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm">
                                        <div className="h-full">
                                            <img
                                                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
                                                alt="Xe tự lái"
                                                className="h-full min-h-[320px] w-full object-cover transition duration-300 hover:scale-[1.02]"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <section
                    id="nguoi-dung"
                    className="scroll-mt-24 border-y border-slate-200 bg-slate-50 py-16 sm:py-20"
                >
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{ duration: 0.45 }}
                        >
                            <SectionTitle
                                eyebrow="Giới thiệu dịch vụ"
                                title="TripDriver mang đến trải nghiệm thuê xe tự lái hiện đại hơn"
                                desc="Chúng tôi xây dựng TripDriver để việc thuê xe trở nên dễ tiếp cận hơn với người dùng và hiệu quả hơn với đối tác. Từ khâu tìm xe đến theo dõi yêu cầu thuê, mọi thứ đều được sắp xếp theo hướng rõ ràng và thuận tiện."
                            />
                        </motion.div>

                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.45, delay: 0.05 }}
                            className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
                        >
                            {values.map((item) => (
                                <BenefitCard
                                    key={item.title}
                                    icon={item.icon}
                                    title={item.title}
                                    desc={item.desc}
                                />
                            ))}
                        </motion.div>
                    </div>
                </section>

                <section
                    id="ve-tripdriver"
                    className="scroll-mt-24 border-b border-slate-200 bg-white"
                >
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <div className="flex flex-wrap gap-3">
                            {tabs.map((item) => {
                                const active = tab === item.key;
                                return (
                                    <button
                                        key={item.key}
                                        onClick={() => setTab(item.key)}
                                        className={`rounded-full px-5 py-2.5 text-sm font-semibold transition duration-200 ${active
                                                ? 'bg-blue-700 text-white'
                                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                            }`}
                                    >
                                        {item.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <section className="bg-white py-16 sm:py-20">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.45 }}
                        className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8"
                    >
                        <SectionTitle
                            eyebrow={
                                tab === 'user'
                                    ? 'Người dùng'
                                    : tab === 'partner'
                                        ? 'Đối tác'
                                        : 'Về ứng dụng'
                            }
                            title={tabContent[tab].title}
                            desc={tabContent[tab].desc}
                        />

                        <div className="grid gap-4 sm:grid-cols-2">
                            {tabContent[tab].items.map((item) => (
                                <div
                                    key={item}
                                    className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4 transition duration-300 hover:shadow-sm"
                                >
                                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                                        <Check size={16} />
                                    </div>
                                    <div className="text-sm leading-6 text-slate-700">{item}</div>
                                </div>
                            ))}
                            <div className="sm:col-span-2 pt-2 text-sm font-semibold text-blue-700">
                                {tabContent[tab].cta}
                            </div>
                        </div>
                    </motion.div>
                </section>

                <section id="doi-tac" className="scroll-mt-24 bg-white py-16 sm:py-20">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.45 }}
                            className="grid gap-8 lg:grid-cols-2"
                        >
                            <div className="rounded-[28px] border border-slate-200 bg-white p-7">
                                <div className="flex items-center gap-3 text-blue-700">
                                    <CarFront size={20} />
                                    <div className="text-sm font-semibold uppercase tracking-[0.18em]">
                                        Cho người dùng
                                    </div>
                                </div>
                                <h3 className="mt-4 text-2xl font-bold text-slate-900">
                                    TripDriver hoạt động như thế nào?
                                </h3>
                                <div className="mt-6 space-y-4">
                                    {[
                                        'Tìm xe phù hợp với nhu cầu',
                                        'Gửi yêu cầu thuê nhanh chóng',
                                        'Theo dõi trạng thái và chuẩn bị nhận xe',
                                    ].map((item, index) => (
                                        <div key={item} className="flex gap-4 rounded-2xl bg-slate-50 p-4">
                                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-700 text-sm font-semibold text-white">
                                                {index + 1}
                                            </div>
                                            <div className="pt-1 text-sm leading-6 text-slate-700">{item}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-[28px] border border-slate-200 bg-white p-7">
                                <div className="flex items-center gap-3 text-blue-700">
                                    <Briefcase size={20} />
                                    <div className="text-sm font-semibold uppercase tracking-[0.18em]">
                                        Cho đối tác
                                    </div>
                                </div>
                                <h3 className="mt-4 text-2xl font-bold text-slate-900">
                                    Đồng hành cùng chủ xe trên một nền tảng thống nhất
                                </h3>
                                <div className="mt-6 space-y-4">
                                    {[
                                        'Đăng thông tin xe lên nền tảng',
                                        'Tiếp nhận yêu cầu từ khách thuê',
                                        'Theo dõi và quản lý quá trình cho thuê',
                                    ].map((item, index) => (
                                        <div key={item} className="flex gap-4 rounded-2xl bg-slate-50 p-4">
                                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                                                {index + 1}
                                            </div>
                                            <div className="pt-1 text-sm leading-6 text-slate-700">{item}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <section
                    id="an-toan"
                    className="scroll-mt-24 border-y border-slate-200 bg-slate-50 py-16 sm:py-20"
                >
                    <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{ duration: 0.45 }}
                        >
                            <SectionTitle
                                eyebrow="An toàn & Tin cậy"
                                title="Thiết kế để rõ ràng và đáng tin cậy hơn"
                                desc="TripDriver tập trung vào trải nghiệm minh bạch, dễ theo dõi và thuận tiện cho cả hai bên. Chúng tôi hướng đến một nền tảng nơi người dùng có thể tìm xe tự tin hơn, còn đối tác có thể quản lý hoạt động cho thuê chuyên nghiệp hơn."
                            />
                        </motion.div>

                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{ duration: 0.45, delay: 0.05 }}
                            className="grid gap-4 sm:grid-cols-2"
                        >
                            {[
                                'Trải nghiệm rõ ràng',
                                'Quy trình dễ theo dõi',
                                'Kết nối hiệu quả giữa người thuê và chủ xe',
                                'Tối ưu cho hành trình thuê xe hiện đại',
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="rounded-2xl border border-slate-200 bg-white p-5"
                                >
                                    <div className="flex items-start gap-3">
                                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                                            <ShieldCheck size={18} />
                                        </div>
                                        <div className="text-sm font-medium leading-6 text-slate-800">
                                            {item}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                <section className="bg-white py-16 sm:py-20">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.45 }}
                            className="overflow-hidden rounded-[32px] bg-slate-900 px-6 py-10 text-white sm:px-10 sm:py-12"
                        >
                            <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-center">
                                <div>
                                    <div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
                                        Tải ứng dụng
                                    </div>
                                    <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                                        Tải TripDriver và bắt đầu hành trình chủ động hơn
                                    </h2>
                                    <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                                        Khám phá cách thuê xe tự lái thuận tiện hơn trên một nền tảng được
                                        thiết kế cho người dùng hiện đại và đối tác chuyên nghiệp.
                                    </p>
                                    <div className="mt-7 flex flex-wrap gap-3">
                                        <StoreBadge label="App Store" />
                                        <StoreBadge label="Google Play" />
                                    </div>
                                </div>

                                <div className="grid gap-4 sm:grid-cols-[0.9fr_1.1fr]">
                                    <div className="rounded-[24px] bg-white p-4 text-slate-900">
                                        <div className="aspect-square rounded-[20px] border border-dashed border-slate-300 bg-slate-50 p-4">
                                            <div className="flex h-full items-center justify-center rounded-[16px] border border-slate-200 bg-white text-center text-sm text-slate-500">
                                                QR tải ứng dụng
                                            </div>
                                        </div>
                                    </div>

                                    <div className="overflow-hidden rounded-[24px] border border-white/10 bg-slate-800">
                                        <img
                                            src="/TripDriverLogo.jpg"
                                            alt="TripDriver mobile app"
                                            className="h-full min-h-[280px] w-full object-cover transition duration-300 hover:scale-[1.02]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>

            <footer
                id="ho-tro"
                className="scroll-mt-24 border-t border-blue-100 bg-gradient-to-b from-blue-50 to-white"
            >
                <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
                    <div>
                        <div className="flex items-center gap-3">
                            <img
                                src="/TripDriverLogo.jpg"
                                alt="TripDriver logo"
                                className="h-10 w-10 rounded-full object-cover"
                            />
                            <div>
                                <div className="font-bold text-slate-900">TripDriver</div>
                                <div className="text-sm text-slate-500">Nền tảng thuê xe tự lái</div>
                            </div>
                        </div>
                        <p className="mt-4 text-sm leading-7 text-slate-600">
                            Nền tảng kết nối người thuê xe và chủ xe cho trải nghiệm thuê xe tự lái
                            rõ ràng, thuận tiện và hiện đại hơn.
                        </p>
                    </div>

                    <div>
                        <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-900">
                            Khám phá
                        </div>
                        <div className="mt-4 space-y-3 text-sm text-slate-600">
                            <div>Về TripDriver</div>
                            <div>Người dùng</div>
                            <div>Đối tác</div>
                            <div>Tải ứng dụng</div>
                        </div>
                    </div>

                    <div>
                        <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-900">
                            Hỗ trợ
                        </div>
                        <div className="mt-4 space-y-3 text-sm text-slate-600">
                            <div>Trung tâm hỗ trợ</div>
                            <div>Câu hỏi thường gặp</div>
                            <div>Điều khoản sử dụng</div>
                            <div>Chính sách bảo mật</div>
                        </div>
                    </div>

                    <div>
                        <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-900">
                            Kết nối
                        </div>
                        <div className="mt-4 space-y-3 text-sm text-slate-600">
                            <a
                                href="https://www.facebook.com/profile.php?id=61587796650900"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block hover:text-blue-700 transition"
                            >
                                Facebook
                            </a>
                            <div>TikTok</div>
                            <div>Email</div>
                            <div> </div>
                        </div>
                        <div className="mt-5">
                            <button className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-blue-800">
                                Tải ứng dụng
                            </button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}