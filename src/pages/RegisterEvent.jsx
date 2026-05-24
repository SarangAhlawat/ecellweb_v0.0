import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const designationOptions = ["Student", "Founder", "Working Professional"];
const interestOptions = [
    "AI & Technology",
    "Product & Design",
    "Marketing",
    "Social Impact",
    "Innovation",
    "Still exploring",
];
const startupOptions = [
    "A great idea",
    "A real problem",
    "Funding",
    "A strong team",
];
const motivationOptions = [
    "Learning",
    "Networking",
    "Certificates 😄",
    "Curiosity",
    "Startup exposure",
];

export default function RegisterEvent() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone:"",
        city: "",
        designation: "",
        college: "",
        year: "",
        course: "",
        companyName: "",
        companyWork: "",
        organization: "",
        role: "",
        experience: "",
        interest: "",
        startupBelief: "",
        sessionMotivation: "",
    });

    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);
    const [registrationInfo, setRegistrationInfo] = useState(null);

    const validateForm = () => {
        const newErrors = {};

        // Always required
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        if (!formData.city.trim()) newErrors.city = "City is required";
        if (!formData.designation) newErrors.designation = "Designation is required";
        if (!formData.interest) newErrors.interest = "Please select what excites you";
        if (!formData.startupBelief)
            newErrors.startupBelief = "Please answer the startup question";
        if (!formData.sessionMotivation)
            newErrors.sessionMotivation = "Please select your motivation";

        // Conditional required fields
        if (formData.designation === "Student") {
            if (!formData.college.trim()) newErrors.college = "College name is required";
            if (!formData.year) newErrors.year = "Year is required";
            if (!formData.course.trim()) newErrors.course = "Course is required";
        }

        if (formData.designation === "Founder") {
            if (!formData.companyName.trim())
                newErrors.companyName = "Company name is required";
            if (!formData.companyWork.trim())
                newErrors.companyWork = "Please describe your company";
        }

        if (formData.designation === "Working Professional") {
            if (!formData.organization.trim())
                newErrors.organization = "Organization is required";
            if (!formData.role.trim()) newErrors.role = "Role is required";
            if (!formData.experience.trim())
                newErrors.experience = "Experience is required";
        }

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = validateForm();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);

            // Find first error field and scroll to it
            const errorFields = Object.keys(newErrors);
            const firstErrorField = document.querySelector(
                `[data-field="${errorFields[0]}"]`
            );

            if (firstErrorField) {
                firstErrorField.scrollIntoView({ behavior: "smooth", block: "center" });
                firstErrorField.focus();
            }

            return;
        }

        setErrors({});
        setIsLoading(true);

        try {
            setIsLoading(true);
            const response = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                }),
            });

            const data = await response.json();

            if (data.success) {
                // Save registration info and show instructions instead of alert
                setRegistrationInfo({
                    message: data.message || "Registration successful!",
                    joinLink: data.joinLink || "https://ecellcgc.in/live",
                    emailSent: typeof data.emailSent === 'boolean' ? data.emailSent : true,
                    email: formData.email,
                    phone: formData.phone,
                });
                setIsRegistered(true);
                setFormData({
                    name: "",
                    email: "",
                    city: "",
                    designation: "",
                    college: "",
                    year: "",
                    course: "",
                    companyName: "",
                    companyWork: "",
                    organization: "",
                    role: "",
                    experience: "",
                    interest: "",
                    startupBelief: "",
                    sessionMotivation: "",
                });
            } else {
                alert(data.message || "Registration failed. Please try again.");
            }
        } catch (error) {
            console.error("Registration error:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#080808] to-[#111]">
            <Navbar />

            {isRegistered ? (
                        <div className="p-6 rounded-[20px] bg-white/[0.04] border border-white/6">
                            <h3 className="text-2xl font-bold mb-2">You're registered!</h3>
                            <p className="text-white/80">{registrationInfo?.message}</p>

                            <p className="mt-2 text-sm text-white/70">
                                A confirmation email has been sent to <span className="font-medium text-white">{registrationInfo?.email}</span>. Please check your inbox and spam folders.
                            </p>

                            {registrationInfo?.emailSent === false && (
                                <p className="mt-2 text-sm text-yellow-300">We couldn't deliver the confirmation email. If you don't receive it, contact us at <a href="mailto:ecell@cgc.edu.in" className="underline">ecell@cgc.edu.in</a>.</p>
                            )}

                            <div className="mt-4 text-white/70">
                                <p className="mb-2">Important instructions:</p>
                                <ul className="list-disc ml-5 space-y-1 text-sm">
                                    <li>Join the session at: <a href={registrationInfo?.joinLink} target="_blank" rel="noreferrer" className="text-violet-300">ecellcgc.in/live</a> at 3:00 PM.</li>
                                    <li>Certificates will be shared with attendees.</li>
                                </ul>
                            </div>

                            <div className="mt-4 flex gap-3">
                                <button
                                    onClick={() => navigator.clipboard.writeText(registrationInfo?.joinLink || 'https://ecellcgc.in/live')}
                                    className="px-4 py-2 rounded-md bg-violet-600 text-black font-semibold"
                                >
                                    Copy join link
                                </button>

                                <a
                                    href={registrationInfo?.joinLink || 'https://ecellcgc.in/live'}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-4 py-2 rounded-md bg-white/5 text-white"
                                >
                                    Open link 
                                </a>
                            </div>
                        </div>
                    ) : (

            <main className="mx-auto max-w-5xl px-6 py-4">
                <div className="mb-8 overflow-hidden rounded-[28px] border border-white/10 bg-[#111] shadow-[0_0_40px_rgba(255,255,255,.04)]">
                    <img
                        src="/poster.png"
                        alt="Design Thinking Event"
                        className="h-[100px] w-full object-cover md:h-[260px]"
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8 text-center"
                >
                    <div className="metal-violet text-sm tracking-[4px]">
                        E-CELL CGC LANDRAN PRESENTS
                    </div>

                    <h1 className="metal mt-3 text-4xl font-extrabold md:text-6xl">
                        Design Thinking
                    </h1>

                    <p className="mt-4 text-lg text-white/60">with Anuj Sharma</p>

                    <p className="mx-auto mt-2 max-w-4xl leading-8 text-white/60">
                        Learn how innovators and founders discover opportunities where
                        others see ordinary problems.
                    </p>
                </motion.div>

                <section className="rounded-[30px] border border-white/50 bg-white/[0.03] p-6 backdrop-blur-xl md:p-6">
                    <h2 className="mb-2 text-2xl text-violet-500 font-bold">Reserve Your Seat</h2>

                    <p className="mb-8 text-white/60">
                        29 May 2026 • 3:00 - 4:00 PM <br />
                        Session portal activates at 3 PM
                    </p>

                    
                        <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
                        <div>
                            <input
                                type="text"
                                placeholder="Full Name"
                                data-field="name"
                                className={`field ${
                                    errors.name ? "border-red-500 border-2" : ""
                                }`}
                                value={formData.name}
                                onChange={(e) =>
                                    setFormData({ ...formData, name: e.target.value })
                                }
                            />
                            {errors.name && (
                                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                            )}
                        </div>

                        <div>
                            <input
                                type="email"
                                placeholder="Email Address"
                                data-field="email"
                                className={`field ${
                                    errors.email ? "border-red-500 border-2" : ""
                                }`}
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({ ...formData, email: e.target.value })
                                }
                            />
                            {errors.email && (
                                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                            )}
                        </div>

                        <div>
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="field"

                                pattern="[6-9]{1}[0-9]{9}"
                                maxLength={10}

                                value={formData.phone}

                                onChange={(e)=>
                                    setFormData({
                                        ...formData,
                                        phone:e.target.value.replace(/\D/g,'')
                                    })
                                }

                                required
                            />
                        </div>

                        <div>
                            <input
                                type="text"
                                placeholder="City"
                                data-field="city"
                                className={`field ${
                                    errors.city ? "border-red-500 border-2" : ""
                                }`}
                                value={formData.city}
                                onChange={(e) =>
                                    setFormData({ ...formData, city: e.target.value })
                                }
                            />
                            {errors.city && (
                                <p className="mt-1 text-sm text-red-500">{errors.city}</p>
                            )}
                        </div>

                        <div>
                            <select
                                data-field="designation"
                                className={`field ${
                                    errors.designation
                                        ? "border-red-500 border-2"
                                        : ""
                                }`}
                                value={formData.designation}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        designation: e.target.value,
                                    })
                                }
                            >
                            <option value="" className="text-gray-500">
                                Choose Designation
                            </option>

                            {designationOptions.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                            </select>
                            {errors.designation && (
                                <p className="mt-1 text-sm text-red-500">
                                    {errors.designation}
                                </p>
                            )}
                        </div>

                        {formData.designation === "Student" && (
                            <>
                                <div>
                                    <input
                                        placeholder="College Name"
                                        data-field="college"
                                        className={`field ${
                                            errors.college ? "border-red-500 border-2" : ""
                                        }`}
                                        value={formData.college}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                college: e.target.value,
                                            })
                                        }
                                    />
                                    {errors.college && (
                                        <p className="mt-1 text-sm text-red-500">
                                            {errors.college}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <select
                                        data-field="year"
                                        className={`field ${
                                            errors.year ? "border-red-500 border-2" : ""
                                        }`}
                                        value={formData.year}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                year: e.target.value,
                                            })
                                        }
                                    >
                                        <option value="" className="text-gray-500">
                                            Current Year
                                        </option>

                                        <option value="1st Year">1st Year</option>
                                        <option value="2nd Year">2nd Year</option>
                                        <option value="3rd Year">3rd Year</option>
                                        <option value="4th Year">4th Year</option>
                                    </select>
                                    {errors.year && (
                                        <p className="mt-1 text-sm text-red-500">
                                            {errors.year}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <input
                                        placeholder="Course"
                                        data-field="course"
                                        className={`field ${
                                            errors.course ? "border-red-500 border-2" : ""
                                        }`}
                                        value={formData.course}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                course: e.target.value,
                                            })
                                        }
                                    />
                                    {errors.course && (
                                        <p className="mt-1 text-sm text-red-500">
                                            {errors.course}
                                        </p>
                                    )}
                                </div>
                            </>
                        )}

                        {formData.designation === "Founder" && (
                            <>
                                <div>
                                    <input
                                        placeholder="Company Name"
                                        data-field="companyName"
                                        className={`field ${
                                            errors.companyName
                                                ? "border-red-500 border-2"
                                                : ""
                                        }`}
                                        value={formData.companyName}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                companyName: e.target.value,
                                            })
                                        }
                                    />
                                    {errors.companyName && (
                                        <p className="mt-1 text-sm text-red-500">
                                            {errors.companyName}
                                        </p>
                                    )}
                                </div>

                                <div className="md:col-span-2">
                                    <textarea
                                        placeholder="What does your company do?"
                                        data-field="companyWork"
                                        className={`field min-h-[120px] ${
                                            errors.companyWork
                                                ? "border-red-500 border-2"
                                                : ""
                                        }`}
                                        value={formData.companyWork}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                companyWork: e.target.value,
                                            })
                                        }
                                    />
                                    {errors.companyWork && (
                                        <p className="mt-1 text-sm text-red-500">
                                            {errors.companyWork}
                                        </p>
                                    )}
                                </div>
                            </>
                        )}

                        {formData.designation === "Working Professional" && (
                            <>
                                <div>
                                    <input
                                        placeholder="Company / Organization"
                                        data-field="organization"
                                        className={`field ${
                                            errors.organization
                                                ? "border-red-500 border-2"
                                                : ""
                                        }`}
                                        value={formData.organization}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                organization: e.target.value,
                                            })
                                        }
                                    />
                                    {errors.organization && (
                                        <p className="mt-1 text-sm text-red-500">
                                            {errors.organization}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <input
                                        placeholder="Role"
                                        data-field="role"
                                        className={`field ${
                                            errors.role ? "border-red-500 border-2" : ""
                                        }`}
                                        value={formData.role}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                role: e.target.value,
                                            })
                                        }
                                    />
                                    {errors.role && (
                                        <p className="mt-1 text-sm text-red-500">
                                            {errors.role}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <input
                                        placeholder="Experience"
                                        data-field="experience"
                                        className={`field ${
                                            errors.experience ? "border-red-500 border-2" : ""
                                        }`}
                                        value={formData.experience}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                experience: e.target.value,
                                            })
                                        }
                                    />
                                    {errors.experience && (
                                        <p className="mt-1 text-sm text-red-500">
                                            {errors.experience}
                                        </p>
                                    )}
                                </div>
                            </>
                        )}

                        <div className="md:col-span-2">
                            <select
                                data-field="interest"
                                className={`field ${
                                    errors.interest ? "border-red-500 border-2" : ""
                                }`}
                                value={formData.interest}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        interest: e.target.value,
                                    })
                                }
                            >
                                <option value="" className="text-gray-500">
                                    Choose that excites you most
                                </option>

                                {interestOptions.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                            {errors.interest && (
                                <p className="mt-1 text-sm text-red-500">
                                    {errors.interest}
                                </p>
                            )}
                        </div>

                        <div className="md:col-span-2 mt-8" data-field="startupBelief">
                            <p className="mb-4 font-medium text-white">
                                What do you think comes first in building a startup?
                            </p>

                            <div className={`grid gap-2 md:grid-cols-2 rounded-lg p-3 ${
                                errors.startupBelief
                                    ? "border-2 border-red-500 bg-red-500/5"
                                    : ""
                            }`}>
                                {startupOptions.map((option) => (
                                    <label
                                        key={option}
                                        className="field flex cursor-pointer items-center gap-3 p-3 hover:border-violet-400/60"
                                    >
                                        <input
                                            type="radio"
                                            name="startup-belief"
                                            checked={
                                                formData.startupBelief === option
                                            }
                                            onChange={() =>
                                                setFormData({
                                                    ...formData,
                                                    startupBelief: option,
                                                })
                                            }
                                            className="accent-violet-400"
                                        />

                                        {option}
                                    </label>
                                ))}
                            </div>
                            {errors.startupBelief && (
                                <p className="mt-2 text-sm text-red-500">
                                    {errors.startupBelief}
                                </p>
                            )}
                        </div>

                        <div className="md:col-span-2 mt-8" data-field="sessionMotivation">
                            <p className="mb-2 font-medium text-white">
                                Complete this in one click:
                            </p>

                            <p className="mb-2 text-lg text-violet-300">
                                "I join sessions mostly for..."
                            </p>

                            <div className={`grid gap-2 md:grid-cols-2 rounded-lg p-3 ${
                                errors.sessionMotivation
                                    ? "border-2 border-red-500 bg-red-500/5"
                                    : ""
                            }`}>
                                {motivationOptions.map((option) => (
                                    <label
                                        key={option}
                                        className="field flex cursor-pointer items-center gap-3 p-3 hover:border-violet-400/60"
                                    >
                                        <input
                                            type="radio"
                                            name="session-motivation"
                                            checked={
                                                formData.sessionMotivation ===
                                                option
                                            }
                                            onChange={() =>
                                                setFormData({
                                                    ...formData,
                                                    sessionMotivation: option,
                                                })
                                            }
                                            className="accent-violet-400"
                                        />

                                        {option}
                                    </label>
                                ))}
                            </div>
                            {errors.sessionMotivation && (
                                <p className="mt-2 text-sm text-red-500">
                                    {errors.sessionMotivation}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="md:col-span-2 mt-10 w-full rounded-xl bg-gradient-to-r from-violet-500 to-violet-300 py-4 font-bold text-black transition hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? "Registering..." : "Complete Registration"}
                        </button>
                    </form>
                    

                    <p className="mt-4 text-sm text-gray-400">
                        Most successful startups begin with understanding people, their
                        frustrations, habits, and needs. Certificates will be shared with
                        attendees.
                    </p>
                </section>
            </main>
    )}
            <a
                href="/privacy-policy"
                className="right-4 bottom-4 text-xs text-white/70 hover:text-white bg-white/5 px-2 py-1 rounded"
                rel="noreferrer"
            >
                Privacy Policy
            </a>
        </div>
    );
}


