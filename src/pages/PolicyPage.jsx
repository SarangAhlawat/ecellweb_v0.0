import Navbar from "../components/Navbar";

export default function PolicyPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#080808] via-[#101010] to-[#111111] text-white">
            <Navbar />

            <main className="mx-auto max-w-5xl px-5 pb-16 pt-24 sm:px-6 sm:pt-32">
                <section className="rounded-[32px] border border-white/5 bg-white/[0.03] p-6 shadow-[0_0_40px_rgba(255,255,255,.04)] backdrop-blur-xl sm:p-10">
                    <p className="metal-violet text-xs tracking-[4px]">E-CELL CGC</p>
                    <h1 className="metal mt-3 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
                        Privacy Policy
                    </h1>
                    <p className="mt-4 max-w-3xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                        We respect your privacy and are committed to protecting the information you share with us when you register for our sessions and events.
                    </p>
                </section>

                <section className="mt-8 grid gap-5 md:grid-cols-2">
                    <article className="rounded-[28px] border border-white/5 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8">
                        <h2 className="text-2xl font-bold">Information We Collect</h2>
                        <p className="mt-3 text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                            When you register, we may collect your name, email address, phone number, city, designation, and other form details you choose to submit.
                        </p>
                    </article>

                    <article className="rounded-[28px] border border-white/5 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8">
                        <h2 className="text-2xl font-bold">How We Use It</h2>
                        <p className="mt-3 text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                            We use the information to process your registration, send session confirmations, share event updates, and improve our programs and communication.
                        </p>
                    </article>

                    <article className="rounded-[28px] border border-white/5 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8">
                        <h2 className="text-2xl font-bold">Sharing & Security</h2>
                        <p className="mt-3 text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                            Your information is not sold. We only share it when required to operate the event, communicate with attendees, or comply with legal obligations.
                        </p>
                    </article>

                    <article className="rounded-[28px] border border-white/5 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8">
                        <h2 className="text-2xl font-bold">Retention & Contact</h2>
                        <p className="mt-3 text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                            We keep registration data only as long as needed for event operations and follow-up. If you have privacy questions, contact the E-Cell team through our official communication channels.
                        </p>
                    </article>
                </section>

                <section className="mt-8 rounded-[28px] border border-violet-500/20 bg-gradient-to-r from-white/[0.03] to-violet-500/10 p-6 sm:p-8">
                    <h2 className="text-2xl font-bold">Questions?</h2>
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                        If you need us to delete or update your registration details, or want to know how your data is handled, please reach out to the E-Cell team.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                        <a
                            href="/registerevent"
                            className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:border-violet-400/60 hover:bg-white/[0.07]"
                        >
                            Back to Registration
                        </a>
                        <a
                            href="ecellcgc@gmail.com"
                            className="rounded-xl bg-gradient-to-r from-violet-500 to-violet-300 px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.01]"
                        >
                            Contact Us
                        </a>
                    </div>
                </section>
            </main>
        </div>
    );
}