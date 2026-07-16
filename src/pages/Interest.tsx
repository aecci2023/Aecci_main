import {
    ArrowRight,
    Building2,
    Check,
    ChevronDown,
    ChevronUp,
    Globe,
    Headphones,
    Play,
    ShieldCheck,
    Star,
    Zap
} from 'lucide-react';
import { useState } from 'react';

const Interest = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        email: '',
        yearEstablished: '',
        country: '',
        sector: '',
        contactPerson: '',
        fullName: '',
        cityState: '',
        emailAddress: '',
        phoneWhatsapp: '',
        yourCountry: '',
        objective: ''
    });

    const [activeFaq, setActiveFaq] = useState<number | null>(null);
    const [activeSection, setActiveSection] = useState<number | null>(1); // Section 1 open by default
    const [legalAcceptance, setLegalAcceptance] = useState({
        infoAccurate: false,
        agreeTerms: false,
        understandFacilitation: false
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleLegalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setLegalAcceptance(prev => ({ ...prev, [name]: checked }));
    };

    const toggleFaq = (index: number) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const toggleSection = (sectionId: number) => {
        setActiveSection(activeSection === sectionId ? null : sectionId);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        console.log('Legal Acceptance:', legalAcceptance);
    };

    // Section configuration - Reordered
    const sections = [
        {
            id: 1,
            title: "HOW AECCI GLOBAL DEAL ROOM WORKS",
            icon: Zap,
            content: (
                <>
                    <p className="text-gray-600 text-sm mb-6">A simple, structured process to connect you with the right opportunities.</p>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {[
                            { step: '1', title: 'Register', desc: 'Submit your profile and requirements' },
                            { step: '2', title: 'Review', desc: 'AECCI Reviews Business Requirements' },
                            { step: '3', title: 'Match', desc: 'Country Matching & Deal Room Scheduling' },
                            { step: '4', title: 'Connect', desc: 'Structured Business Interaction' },
                            { step: '5', title: 'Grow', desc: 'Post Meeting Support & Follow-up' },
                        ].map((item, idx) => (
                            <div key={idx} className="text-center p-4 bg-gray-50 rounded-xl hover:shadow-md transition">
                                <div className="w-10 h-10 bg-amber-400 text-[#0A1A3A] rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-2">
                                    {item.step}
                                </div>
                                <h4 className="font-bold text-[#0A1A3A] text-sm">{item.title}</h4>
                                <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </>
            )
        },
        {
            id: 2,
            title: "TELL US ABOUT YOUR BUSINESS",
            icon: Building2,
            content: (
                <>
                    <p className="text-gray-600 text-sm mb-6">Help us understand your objectives to serve you better.</p>
                    {/* Business Information */}
                    <h3 className="font-bold text-[#0A1A3A] text-sm mb-4">Business Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Company / Business Name <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition"
                                placeholder="Enter company name"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Email or mobile number</label>
                            <input
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition"
                                placeholder="Enter email or mobile"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Year of establishment</label>
                            <input
                                type="text"
                                name="yearEstablished"
                                value={formData.yearEstablished}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition"
                                placeholder="YYYY"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Country / Region</label>
                            <select
                                name="country"
                                value={formData.country}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition"
                            >
                                <option value="">Select country</option>
                                <option value="usa">USA</option>
                                <option value="uae">UAE</option>
                                <option value="africa">Africa</option>
                                <option value="europe">Europe</option>
                                <option value="asia">Asia</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Sector / Industry</label>
                            <input
                                type="text"
                                name="sector"
                                value={formData.sector}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition"
                                placeholder="Enter sector"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Contact Person</label>
                            <input
                                type="text"
                                name="contactPerson"
                                value={formData.contactPerson}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition"
                                placeholder="Enter contact person"
                            />
                        </div>
                    </div>
                    {/* Contact Person */}
                    <h3 className="font-bold text-[#0A1A3A] text-sm mb-4">Contact Person</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Full Name <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition"
                                placeholder="Enter full name"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">City / State / Country</label>
                            <input
                                type="text"
                                name="cityState"
                                value={formData.cityState}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition"
                                placeholder="Enter city, state, country"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Email Address <span className="text-red-500">*</span></label>
                            <input
                                type="email"
                                name="emailAddress"
                                value={formData.emailAddress}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition"
                                placeholder="Enter email address"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Phone / WhatsApp</label>
                            <input
                                type="text"
                                name="phoneWhatsapp"
                                value={formData.phoneWhatsapp}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition"
                                placeholder="Enter phone number"
                            />
                        </div>
                    </div>
                    {/* Country Information */}
                    <h3 className="font-bold text-[#0A1A3A] text-sm mb-4">Your Objective <span className="text-red-500">*</span></h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {['Find International Buyers', 'Find Suppliers', 'Market Expansion', 'Distribution Partnership', 'Import Opportunities', 'Strategic Collaboration', 'Other'].map((objective) => (
                            <label key={objective} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                                <input
                                    type="radio"
                                    name="objective"
                                    value={objective}
                                    checked={formData.objective === objective}
                                    onChange={handleInputChange}
                                    className="w-4 h-4 text-amber-400 focus:ring-amber-400"
                                    required
                                />
                                {objective}
                            </label>
                        ))}
                    </div>
                    {/* Share & Contribute */}
                    <div className="mt-6 pt-4 border-t border-gray-100">
                        <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                            <input
                                type="checkbox"
                                className="w-4 h-4 text-amber-400 focus:ring-amber-400 rounded"
                                required
                            />
                            <ShieldCheck size={16} className="text-emerald-500" />
                            I agree to share my information securely and confidentially
                        </label>
                        {/* Submit Button */}
                        <div className="flex justify-start mt-6">
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-amber-400 to-amber-500 text-[#0A1A3A] font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
                            >
                                Submit Interest & Continue
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </>
            )
        },
        {
            id: 3,
            title: "DEAL ROOM PARTICIPATION POLICY",
            icon: ShieldCheck,
            content: (
                <>
                    <p className="text-gray-600 text-sm mb-6">Important Information Before Joining</p>
                    
                    {/* Section 1: Business Matching */}
                    <div className="mb-6">
                        <h3 className="font-bold text-[#0A1A3A] text-sm mb-2">1. Business Matching</h3>
                        <p className="text-gray-600 text-sm mb-2">
                            AECCI Global Deal Room facilitates structured introductions between registered businesses, collaborators and trade professionals.
                        </p>
                        <p className="text-gray-600 text-sm">
                            AECCI does not guarantee any business transaction, order, investment, partnership or commercial outcome.
                        </p>
                    </div>

                    {/* Section 2: Meeting Structure */}
                    <div className="mb-6">
                        <h3 className="font-bold text-[#0A1A3A] text-sm mb-2">2. Meeting Structure</h3>
                        <p className="text-gray-600 text-sm mb-2">All Deal Room interactions are:</p>
                        <div className="grid grid-cols-2 gap-2 mb-2">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Check size={16} className="text-emerald-500" />
                                Time scheduled
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Check size={16} className="text-emerald-500" />
                                Professionally moderated
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Check size={16} className="text-emerald-500" />
                                Business focused
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Check size={16} className="text-emerald-500" />
                                Based on submitted requirements
                            </div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3 mt-2">
                            <p className="text-sm text-gray-700">
                                <span className="font-semibold">Meeting duration:</span> 30 Minutes
                            </p>
                            <p className="text-xs text-gray-500 mt-1">(Unless customized package applies)</p>
                        </div>
                    </div>

                    {/* Section 3: Participant Responsibility */}
                    <div className="mb-6">
                        <h3 className="font-bold text-[#0A1A3A] text-sm mb-2">3. Participant Responsibility</h3>
                        <p className="text-gray-600 text-sm mb-2">Participants must provide:</p>
                        <ul className="space-y-1 ml-4">
                            <li className="text-sm text-gray-600 flex items-start gap-2">
                                <Check size={14} className="text-emerald-500 mt-0.5" />
                                Accurate business information
                            </li>
                            <li className="text-sm text-gray-600 flex items-start gap-2">
                                <Check size={14} className="text-emerald-500 mt-0.5" />
                                Valid company details
                            </li>
                            <li className="text-sm text-gray-600 flex items-start gap-2">
                                <Check size={14} className="text-emerald-500 mt-0.5" />
                                Genuine business requirements
                            </li>
                            <li className="text-sm text-gray-600 flex items-start gap-2">
                                <Check size={14} className="text-emerald-500 mt-0.5" />
                                Professional communication
                            </li>
                        </ul>
                    </div>

                    {/* Section 4: Confidentiality */}
                    <div className="mb-6">
                        <h3 className="font-bold text-[#0A1A3A] text-sm mb-2">4. Confidentiality</h3>
                        <p className="text-gray-600 text-sm mb-2">
                            Participants are responsible for protecting their own confidential information.
                        </p>
                        <p className="text-gray-600 text-sm">
                            AECCI recommends appropriate confidentiality agreements where required.
                        </p>
                    </div>

                    {/* Section 5: Commercial Decisions */}
                    <div className="mb-6">
                        <h3 className="font-bold text-[#0A1A3A] text-sm mb-2">5. Commercial Decisions</h3>
                        <p className="text-gray-600 text-sm">
                            All negotiations, contracts, payments and business agreements are directly between participating parties.
                        </p>
                        <p className="text-gray-600 text-sm mt-2">
                            AECCI acts as a business facilitation platform.
                        </p>
                    </div>
                </>
            )
        },
        {
            id: 4,
            title: "FREQUENTLY ASKED QUESTIONS",
            icon: Headphones,
            content: (
                <div className="space-y-3">
                    {[
                        { 
                            q: 'Is AECCI Global Deal Room a marketplace?', 
                            a: 'AECCI Global Deal Room is a structured B2B business connection and facilitation platform designed to connect verified participants through focused interactions.' 
                        },
                        { 
                            q: 'Are meetings guaranteed to create business?', 
                            a: 'AECCI provides access, introductions and structured opportunities. Business decisions depend on participating companies.' 
                        },
                        { 
                            q: 'Who can join?', 
                            a: 'Eligible: Exporters, Importers, Manufacturers, International Collaborators, Trade Agents, Business Service Providers.' 
                        },
                        { 
                            q: 'Can individuals register as Importers?', 
                            a: 'Importer registration is only available for registered companies/business entities.' 
                        },
                        { 
                            q: 'How are meetings scheduled?', 
                            a: 'After profile verification and requirement submission, suitable Deal Room opportunities are shared based on availability.' 
                        },
                        { 
                            q: 'Can I upgrade my plan?', 
                            a: 'Yes. Users may upgrade according to available packages and applicable terms.' 
                        },
                        { 
                            q: 'Are payments refundable?', 
                            a: 'Payments are subject to AECCI Global Deal Room refund policy. Services already delivered, scheduled meetings or completed facilitation activities may not qualify for refund.' 
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-amber-200">
                            <button
                                type="button"
                                onClick={() => toggleFaq(idx)}
                                className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors duration-300"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-amber-400 font-bold text-sm">Q{idx + 1}:</span>
                                    <span className="text-sm text-gray-700 font-medium">{item.q}</span>
                                </div>
                                <ChevronDown size={18} className={`text-gray-400 transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`} />
                            </button>
                            {activeFaq === idx && (
                                <div className="p-4 bg-gray-50 border-t border-gray-200 animate-fadeIn">
                                    <div className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-1.5 flex-shrink-0" />
                                        <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )
        },
        {
            id: 5,
            title: "LEGAL ACCEPTANCE",
            icon: Check,
            content: (
                <div className="space-y-4">
                    <p className="text-gray-600 text-sm">Before proceeding:</p>
                    
                    <div className="space-y-3">
                        <label className="flex items-start gap-3 text-sm text-gray-700 cursor-pointer">
                            <input
                                type="checkbox"
                                name="infoAccurate"
                                checked={legalAcceptance.infoAccurate}
                                onChange={handleLegalChange}
                                className="w-4 h-4 text-amber-400 focus:ring-amber-400 rounded mt-0.5"
                                required
                            />
                            <span>I confirm that the information provided is accurate.</span>
                        </label>

                        <label className="flex items-start gap-3 text-sm text-gray-700 cursor-pointer">
                            <input
                                type="checkbox"
                                name="agreeTerms"
                                checked={legalAcceptance.agreeTerms}
                                onChange={handleLegalChange}
                                className="w-4 h-4 text-amber-400 focus:ring-amber-400 rounded mt-0.5"
                                required
                            />
                            <span>I agree to AECCI Global Deal Room Terms &amp; Conditions.</span>
                        </label>

                        <label className="flex items-start gap-3 text-sm text-gray-700 cursor-pointer">
                            <input
                                type="checkbox"
                                name="understandFacilitation"
                                checked={legalAcceptance.understandFacilitation}
                                onChange={handleLegalChange}
                                className="w-4 h-4 text-amber-400 focus:ring-amber-400 rounded mt-0.5"
                                required
                            />
                            <span>I understand AECCI provides facilitation and networking opportunities and does not guarantee commercial outcomes.</span>
                        </label>
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                        <p className="text-xs text-gray-500 mb-2">Links:</p>
                        <div className="flex flex-wrap gap-4">
                            <a href="#" className="text-xs text-amber-600 hover:text-amber-700 hover:underline transition-colors">
                                Terms &amp; Conditions
                            </a>
                            <a href="#" className="text-xs text-amber-600 hover:text-amber-700 hover:underline transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-xs text-amber-600 hover:text-amber-700 hover:underline transition-colors">
                                Refund Policy
                            </a>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    return (
        <div className="min-h-screen bg-white font-sans antialiased">
            {/* Header */}
            <div className="bg-gradient-to-br from-[#0A1A3A] via-[#0F204A] to-[#1a2d5c] text-white overflow-hidden relative">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-[-50%] right-[-20%] w-[800px] h-[800px] rounded-full bg-blue-500/20 blur-3xl" />
                    <div className="absolute bottom-[-30%] left-[-10%] w-[600px] h-[600px] rounded-full bg-amber-500/10 blur-3xl" />
                </div>
                <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
                    <div className="text-center">
                        <span className="inline-block text-amber-400 font-semibold text-sm tracking-wider uppercase mb-2">
                            AECCI Global Deal Room
                        </span>
                        <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                            Your Gateway to <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-300">Global Business Opportunities</span>
                        </h1>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto mt-4">
                            Complete the form below to express your interest. Our team will review your details and connect you with the right global opportunities.
                        </p>
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Form - Left & Center */}
                        <div className="lg:col-span-2 space-y-4">
                            {/* Accordion Sections */}
                            {sections.map((section) => {
                                const Icon = section.icon;
                                const isOpen = activeSection === section.id;

                                return (
                                    <div 
                                        key={section.id} 
                                        className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-300"
                                    >
                                        {/* Section Header - Clickable */}
                                        <button
                                            type="button"
                                            onClick={() => toggleSection(section.id)}
                                            className="w-full text-left"
                                        >
                                            <div className="bg-gradient-to-r from-[#0A1A3A] to-[#1a2d5c] px-6 py-4 flex items-center justify-between group hover:bg-gradient-to-r hover:from-[#0F204A] hover:to-[#1a2d6c] transition-all duration-300">
                                                <h2 className="text-white font-bold text-lg flex items-center gap-2">
                                                    <Icon size={20} className="text-amber-400" />
                                                    {section.id}. {section.title}
                                                </h2>
                                                <div className="text-white/70 group-hover:text-white transition-colors">
                                                    {isOpen ? (
                                                        <ChevronUp size={20} />
                                                    ) : (
                                                        <ChevronDown size={20} />
                                                    )}
                                                </div>
                                            </div>
                                        </button>

                                        {/* Section Content - Collapsible */}
                                        <div 
                                            className={`
                                                overflow-hidden transition-all duration-300 ease-in-out
                                                ${isOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}
                                            `}
                                        >
                                            <div className="p-6">
                                                {section.content}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Right Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="space-y-6 sticky top-6">
                                {/* Selected Plan */}
                                <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-6 text-white shadow-xl">
                                    <div className="flex items-center gap-2 mb-4">
                                        <Star size={18} className="text-amber-400" />
                                        <span className="text-sm font-semibold text-amber-400">YOUR SELECTED PLAN</span>
                                    </div>
                                    <h3 className="text-xl font-bold">Explorer</h3>
                                    <p className="text-amber-300 text-sm font-medium mt-1">₹2,999</p>
                                    <p className="text-white/80 text-xs mt-2">Designed for businesses seeking structured international market expansion.</p>
                                    <ul className="mt-4 space-y-2 text-sm">
                                        {[
                                            '4 Private Global Deal Room Access',
                                            'Country Market Intelligence',
                                            'Premium Business Profile',
                                            'International Networking Opportunities'
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-white/90">
                                                <Check size={14} className="text-amber-400 mt-0.5 flex-shrink-0" />
                                                <span className="text-xs">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Trust Badges */}
                                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                                    <h3 className="font-bold text-[#0A1A3A] text-sm mb-4 flex items-center gap-2">
                                        <Globe size={16} className="text-amber-400" />
                                        Trusted by Businesses Worldwide
                                    </h3>
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-[#0A1A3A]">50+</div>
                                            <div className="text-[10px] text-gray-500">Countries</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-[#0A1A3A]">10K+</div>
                                            <div className="text-[10px] text-gray-500">Trade Partners</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-[#0A1A3A]">24/7</div>
                                            <div className="text-[10px] text-gray-500">Support</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Video Section */}
                                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                                    <h3 className="font-bold text-[#0A1A3A] text-sm mb-3">How AECCI Creates Global Opportunities</h3>
                                    <div className="bg-gray-200 rounded-xl h-40 flex items-center justify-center relative cursor-pointer group overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1A3A]/70 to-[#1a2d5c]/70 rounded-xl flex items-center justify-center">
                                            <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                                                <Play size={24} className="text-[#0A1A3A] ml-1" />
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-center text-xs text-gray-500 mt-2">Watch 60+ videos</p>
                                </div>

                                {/* Security Note */}
                                <div className="text-center">
                                    <p className="text-xs text-gray-400 flex items-center justify-center gap-1">
                                        <ShieldCheck size={12} /> Secure & Confidential
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

            {/* Add custom animation */}
            <style>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }
            `}</style>
        </div>
    );
};

export default Interest;