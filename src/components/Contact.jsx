import { useState } from "react";
import FadeIn from "./FadeIn";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit() {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <section id="contact" className="bg-[#fcecd6] px-8 md:px-16 lg:px-24 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <FadeIn>
          <p className="font-inter text-[11px] font-bold uppercase tracking-widest text-[#d9542d] mb-3">
            Get in touch
          </p>
          <h2 className="font-playfair font-bold text-[clamp(2rem,4vw,3rem)] text-[#2b2118] mb-4">
            Come say hello
          </h2>
          <p className="font-inter text-[14px] text-[#6b5a45] leading-relaxed mb-10">
            Questions about our menu? Want to place a bulk order? We'd love to
            hear from you.
          </p>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <span className="w-10 h-10 bg-[#fffaf2] rounded-full flex items-center justify-center text-[16px] flex-shrink-0">
                📍
              </span>
              <span className="font-inter text-[14px] text-[#6b5a45]">
                42 Nostrand Ave, Brooklyn, NY 11205
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-10 h-10 bg-[#fffaf2] rounded-full flex items-center justify-center text-[16px] flex-shrink-0">
                🕐
              </span>
              <span className="font-inter text-[14px] text-[#6b5a45]">
                Tue–Sun, 7am–6pm
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-10 h-10 bg-[#fffaf2] rounded-full flex items-center justify-center text-[16px] flex-shrink-0">
                📞
              </span>
              <span className="font-inter text-[14px] text-[#6b5a45]">
                +1 (718) 555-0134
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-10 h-10 bg-[#fffaf2] rounded-full flex items-center justify-center text-[16px] flex-shrink-0">
                ✉️
              </span>
              <span className="font-inter text-[14px] text-[#6b5a45]">
                hello@sweetcrumb.com
              </span>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={150}>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="font-inter text-[11px] font-bold uppercase tracking-widest text-[#2b2118]">
                  First name
                </label>
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Jane"
                  className="font-inter text-[13px] text-[#2b2118] bg-[#fffaf2] border-2 border-[#e8d5b7] rounded-xl px-4 py-3 outline-none focus:border-[#d9542d] transition-colors duration-150"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-inter text-[11px] font-bold uppercase tracking-widest text-[#2b2118]">
                  Last name
                </label>
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Smith"
                  className="font-inter text-[13px] text-[#2b2118] bg-[#fffaf2] border-2 border-[#e8d5b7] rounded-xl px-4 py-3 outline-none focus:border-[#d9542d] transition-colors duration-150"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-inter text-[11px] font-bold uppercase tracking-widest text-[#2b2118]">
                Email
              </label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="jane@example.com"
                className="font-inter text-[13px] text-[#2b2118] bg-[#fffaf2] border-2 border-[#e8d5b7] rounded-xl px-4 py-3 outline-none focus:border-[#d9542d] transition-colors duration-150"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-inter text-[11px] font-bold uppercase tracking-widest text-[#2b2118]">
                Phone
              </label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (718) 555-0000"
                className="font-inter text-[13px] text-[#2b2118] bg-[#fffaf2] border-2 border-[#e8d5b7] rounded-xl px-4 py-3 outline-none focus:border-[#d9542d] transition-colors duration-150"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-inter text-[11px] font-bold uppercase tracking-widest text-[#2b2118]">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Any questions or special requests?"
                rows={4}
                className="font-inter text-[13px] text-[#2b2118] bg-[#fffaf2] border-2 border-[#e8d5b7] rounded-xl px-4 py-3 outline-none focus:border-[#d9542d] transition-colors duration-150 resize-none"
              />
            </div>
            <button
              onClick={handleSubmit}
              className={`font-inter text-[13px] font-bold py-4 rounded-full transition-all duration-300 ${
                submitted
                  ? "bg-green-600 text-white"
                  : "bg-[#d9542d] text-[#fffaf2] hover:opacity-90"
              }`}
            >
              {submitted ? "Message sent ✓" : "Send message"}
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default Contact;
