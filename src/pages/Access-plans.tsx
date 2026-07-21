import {
    ArrowRight,
    Award,
    BarChart4,
    Briefcase,
    Building2,
    Calendar,
    Check,
    Clock,
    FileText,
    Globe,
    Handshake,
    Headphones,
    LineChart,
    ShieldCheck,
    Sparkles,
    Star,
    Target,
    UserPlus,
    Users
} from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingComparison = () => {
    const plans = [
        {
            name: 'Explorer',
            price: '₹2,999',    
            priceRange: 'per session',
            icon: '🌱',
            color: 'from-emerald-500 to-emerald-600',
            hoverColor: 'hover:shadow-emerald-500/20',
            bgColor: 'bg-emerald-50',
            borderColor: 'border-emerald-200',
            tag: 'Basic', 
            features: [
                { icon: Users, label: 'Deal Room Sessions', value: '1 Group' },
                { icon: Globe, label: 'Countries Covered', value: '1' },
                { icon: Calendar, label: 'Session Type', value: 'Group' },
                { icon: Clock, label: 'Duration each Session', value: '30 min' },
                { icon: FileText, label: 'Country Opportunity Brief', value: 'Basic' },
                { icon: FileText, label: 'Country Intelligence Reports', value: 'Basic' },
                { icon: BarChart4, label: 'Market Intelligence Snapshot', value: 'Basic' },
                { icon: Calendar, label: 'Business Listing', value: '30 Days' },
                { icon: UserPlus, label: 'Premium Business Profile', value: '—' },
                { icon: Check, label: 'Business Requirement Submission', value: '✓' },
                { icon: Target, label: 'Country/Market Readiness Score', value: 'Basic' },
                { icon: Check, label: 'Personalized Roadmap', value: '✓' },
                { icon: FileText, label: 'Opportunity Report', value: 'Session Summary' },
                { icon: Handshake, label: 'International Business Matching', value: '—' },
                { icon: UserPlus, label: 'Introductions to Collaborators', value: '—' },
                { icon: Headphones, label: 'Dedicated Coordinator', value: '—' },
                { icon: Clock, label: 'Follow-up Support', value: '7 Days' },
                { icon: Calendar, label: 'Priority Invitations', value: '—' },
                { icon: Building2, label: 'Corporate Dashboard', value: '—' },
                { icon: Briefcase, label: 'Industry-specific Sessions', value: '—' },
                { icon: Users, label: 'Private Roundtables', value: '—' },
                { icon: Award, label: 'Corporate Training', value: '—' },
            ]
        },
        {
            name: 'Global Growth',
            price: '₹14,999', 
            priceRange: 'per 4 sessions',
            icon: '📈',
            color: 'from-blue-500 to-blue-600',
            hoverColor: 'hover:shadow-blue-500/20',
            bgColor: 'bg-blue-50',
            borderColor: 'border-blue-200',
            tag: 'Advanced', 
            features: [
                { icon: Users, label: 'Deal Room Sessions', value: '4 Private' },
                { icon: Globe, label: 'Countries Covered', value: 'Up to 4' },
                { icon: Calendar, label: 'Session Type', value: 'One-to-One' },
                { icon: Clock, label: 'Duration each Session', value: '30 min' },
                { icon: FileText, label: 'Country Opportunity Brief', value: 'Advanced' },
                { icon: FileText, label: 'Country Intelligence Reports', value: 'Detailed' },
                { icon: BarChart4, label: 'Market Intelligence Snapshot', value: 'Detailed' },
                { icon: Calendar, label: 'Business Listing', value: '90 Days' },
                { icon: UserPlus, label: 'Premium Business Profile', value: '✓' },
                { icon: Check, label: 'Business Requirement Submission', value: '✓' },
                { icon: Target, label: 'Country/Market Readiness Score', value: 'Detailed' },
                { icon: Check, label: 'Personalized Roadmap', value: '✓' },
                { icon: FileText, label: 'Opportunity Report', value: 'After Every Session' },
                { icon: Handshake, label: 'International Business Matching', value: 'Limited' },
                { icon: UserPlus, label: 'Introductions to Collaborators', value: 'Relevant Collaborators + 3 Exporters' },
                { icon: Headphones, label: 'Dedicated Coordinator', value: 'Email/Phone Support' },
                { icon: Clock, label: 'Follow-up Support', value: '90 Days' },
                { icon: Calendar, label: 'Priority Invitations', value: '—' },
                { icon: Building2, label: 'Corporate Dashboard', value: '—' },
                { icon: Briefcase, label: 'Industry-specific Sessions', value: '—' },
                { icon: Users, label: 'Private Roundtables', value: '—' },
                { icon: Award, label: 'Corporate Training', value: '—' },
            ]
        },
        {
            name: 'Market Entry Elite',
            price: '₹49,999',
            priceRange: 'per 10 sessions',
            icon: '🏆',
            color: 'from-purple-500 to-purple-600',
            hoverColor: 'hover:shadow-purple-500/20',
            bgColor: 'bg-purple-50',
            borderColor: 'border-purple-200',
            tag: 'Popular',
            isPopular: true, 
            features: [
                { icon: Users, label: 'Deal Room Sessions', value: '10 (Private + Group)' },
                { icon: Globe, label: 'Countries Covered', value: 'Multiple' },
                { icon: Calendar, label: 'Session Type', value: 'Group + One-to-One' },
                { icon: Clock, label: 'Duration each Session', value: 'May vary' },
                { icon: FileText, label: 'Country Opportunity Brief', value: 'Advanced' },
                { icon: FileText, label: 'Country Intelligence Reports', value: 'Advanced' },
                { icon: BarChart4, label: 'Market Intelligence Snapshot', value: 'Advanced' },
                { icon: Calendar, label: 'Business Listing', value: '1 Year' },
                { icon: UserPlus, label: 'Premium Business Profile', value: '✓' },
                { icon: Check, label: 'Business Requirement Submission', value: '✓' },
                { icon: Target, label: 'Country/Market Readiness Score', value: 'Expert Review' },
                { icon: Check, label: 'Personalized Roadmap', value: '✓' },
                { icon: FileText, label: 'Opportunity Report', value: 'After Every Session' },
                { icon: Handshake, label: 'International Business Matching', value: '✓' },
                { icon: UserPlus, label: 'Introductions to Collaborators', value: 'Priority Matching' },
                { icon: Headphones, label: 'Dedicated Coordinator', value: 'Dedicated Coordinator' },
                { icon: Clock, label: 'Follow-up Support', value: '6 Months' },
                { icon: Calendar, label: 'Priority Invitations', value: '✓' },
                { icon: Building2, label: 'Corporate Dashboard', value: '—' },
                { icon: Briefcase, label: 'Industry-specific Sessions', value: '—' },
                { icon: Users, label: 'Private Roundtables', value: '—' },
                { icon: Award, label: 'Corporate Training', value: '—' },
            ]
        },
        {
            name: 'Global Enterprise',
            price: 'Custom', 
            priceRange: 'tailored pricing',
            icon: '💼',
            color: 'from-amber-500 to-amber-600',
            hoverColor: 'hover:shadow-amber-500/20',
            bgColor: 'bg-amber-50',
            borderColor: 'border-amber-200',
            tag: 'Premium', 
            features: [
                { icon: Users, label: 'Deal Room Sessions', value: 'Priority / Unlimited Access' },
                { icon: Globe, label: 'Countries Covered', value: 'Unlimited / Customized' },
                { icon: Calendar, label: 'Session Type', value: 'Customized' },
                { icon: Clock, label: 'Duration each Session', value: 'Customized' },
                { icon: FileText, label: 'Country Opportunity Brief', value: 'Customized' },
                { icon: FileText, label: 'Country Intelligence Reports', value: 'Customized' },
                { icon: BarChart4, label: 'Market Intelligence Snapshot', value: 'Customized' },
                { icon: Calendar, label: 'Business Listing', value: 'Customized' },
                { icon: UserPlus, label: 'Premium Business Profile', value: '✓' },
                { icon: Check, label: 'Business Requirement Submission', value: '✓' },
                { icon: Target, label: 'Country/Market Readiness Score', value: 'Enterprise Assessment' },
                { icon: Check, label: 'Personalized Roadmap', value: 'Customized Expansion Strategy' },
                { icon: FileText, label: 'Opportunity Report', value: 'After Every Session' },
                { icon: Handshake, label: 'International Business Matching', value: 'Priority' },
                { icon: UserPlus, label: 'Introductions to Collaborators', value: 'Customized Global Introductions' },
                { icon: Headphones, label: 'Dedicated Coordinator', value: 'Enterprise Manager' },
                { icon: Clock, label: 'Follow-up Support', value: 'Annual' },
                { icon: Calendar, label: 'Priority Invitations', value: '✓' },
                { icon: Building2, label: 'Corporate Dashboard', value: 'Multi-user' },
                { icon: Briefcase, label: 'Industry-specific Sessions', value: '✓' },
                { icon: Users, label: 'Private Roundtables', value: '✓' },
                { icon: Award, label: 'Corporate Training', value: '✓' },
            ]
        }
    ];

    const allFeatureLabels = plans[0].features.map(f => f.label);

    return (
        <div className="min-h-screen bg-gray-50 font-sans antialiased">
            {/* Header with Animation */}
            <div className="bg-gradient-to-br from-[#0A1A3A] via-[#0F204A] to-[#1a2d5c] text-white overflow-hidden relative">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-[-50%] right-[-20%] w-[800px] h-[800px] rounded-full bg-blue-500/20 blur-3xl animate-pulse" />
                    <div className="absolute bottom-[-30%] left-[-10%] w-[600px] h-[600px] rounded-full bg-amber-500/10 blur-3xl animate-pulse delay-1000" />
                </div>
                <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
                        <div className="space-y-4">
                            <span className="inline-block text-amber-400 font-semibold text-sm tracking-wider uppercase animate-pulse">
                                AECCI Global Deal Room
                            </span>
                            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                                Choose the Plan That <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-300 animate-gradient">
                                    Unlocks Global Opportunities
                                </span>
                            </h1>
                            <p className="text-gray-300 text-lg max-w-2xl">
                                Select the plan that fits your goals—access vetted deals, market intelligence,
                                verified partners and support to grow your business globally.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Role Selector - Without Sticky */}
            <div className="bg-[#0A1A3A] py-4 border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <span className="text-white font-semibold text-sm flex items-center gap-2">
                            <Users size={16} className="text-amber-400 animate-pulse" /> I am a...
                        </span>
                        {['Collaboration Partner', 'Participant', 'Importer', 'Exporter', 'Intending Agent'].map((role, i) => (
                            <button
                                key={i}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 border transform hover:scale-105 ${
                                    i === 4
                                        ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-[#0A1A3A] border-amber-400 shadow-lg shadow-amber-400/20 hover:shadow-amber-400/40'
                                        : 'bg-white/5 hover:bg-white/10 text-white border-white/10 hover:border-white/20'
                                }`}
                            >
                                {i === 0 && <Briefcase size={14} className="text-purple-400" />}
                                {i === 1 && <Users size={14} className="text-amber-400" />}
                                {i === 2 && <Target size={14} className="text-blue-400" />}
                                {i === 3 && <Globe size={14} className="text-green-400" />}
                                {i === 4 && <Star size={14} />}
                                {role}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Comparison Table with Animations */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden transform transition-all duration-700 hover:shadow-2xl">
                    {/* Mobile: Card View with Animation */}
                    <div className="lg:hidden space-y-6 p-4">
                        {plans.map((plan, idx) => (
                            <div
                                key={idx}
                                className={`rounded-xl border-2 p-5 ${plan.borderColor} ${plan.bgColor} relative transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${plan.hoverColor}`}
                                style={{
                                    animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`
                                }}
                            > 
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <div className="text-2xl mb-1">{plan.icon}</div>
                                        <h3 className="text-xl font-bold text-[#0A1A3A]">{plan.name}</h3>
                                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full text-white bg-gradient-to-r ${plan.color}`}>
                                            {plan.tag}
                                        </span>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-xs text-gray-500">Starting from</div>
                                        <div className="text-2xl font-bold text-[#0A1A3A]">{plan.price}</div>
                                        <div className="text-[10px] text-gray-400">{plan.priceRange}</div>
                                    </div>
                                </div>
                                <div className="space-y-2 max-h-[400px] overflow-y-auto">
                                    {plan.features.map((feature, fi) => (
                                        <div key={fi} className="flex items-start gap-2 text-sm py-1 border-b border-gray-100/50 last:border-0">
                                            <feature.icon size={14} className="text-gray-400 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-600 text-xs flex-1">{feature.label}</span>
                                            <span className={`text-xs font-medium text-right ${
                                                feature.value === '—' ? 'text-gray-400' :
                                                feature.value.includes('✓') ? 'text-emerald-600' : 'text-[#0A1A3A]'
                                            }`}>
                                                {feature.value}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                <Link to="/interest-form">
                                    <button className={`w-full mt-4 py-3 rounded-lg font-bold text-sm transition-all duration-300 bg-gradient-to-r ${plan.color} text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transform`}>
                                        Choose Plan →
                                    </button>
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* Desktop: Table View with Animation */}
                    <div className="hidden lg:block overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="bg-gray-50/80 border-b border-gray-200">
                                    <th className="text-left py-4 px-4 font-bold text-gray-700 text-xs uppercase tracking-wider sticky left-0 bg-gray-50/80 z-10 min-w-[200px]">
                                        Features
                                    </th>
                                    {plans.map((plan, idx) => (
                                        <th key={idx} className="text-center py-4 px-4 min-w-[180px] relative group">
                                            <div className="flex flex-col items-center transform transition-all duration-300 group-hover:scale-105">
                                                <div className="text-3xl mb-1">{plan.icon}</div>
                                                <div className={`text-xs font-medium px-2 py-0.5 rounded-full text-white bg-gradient-to-r ${plan.color} mb-1`}>
                                                    {plan.tag}
                                                </div>
                                                <div className="font-bold text-[#0A1A3A] text-base">{plan.name}</div>
                                                <div className="text-xs text-gray-500">Starting from</div>
                                                <div className="font-bold text-[#0A1A3A] text-lg">{plan.price}</div>
                                                <div className="text-[10px] text-gray-400">{plan.priceRange}</div>
                                             </div>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {allFeatureLabels.map((label, idx) => {
                                    const featureRow = plans.map(plan =>
                                        plan.features.find(f => f.label === label)
                                    );
                                    const FeatureIcon = featureRow[0]?.icon;
                                    return (
                                        <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50/50 transition-all duration-300">
                                            <td className="py-3 px-4 font-medium text-gray-700 text-xs sticky left-0 bg-white hover:bg-gray-50/50 z-10 flex items-center gap-2">
                                                {FeatureIcon && <FeatureIcon size={14} className="text-gray-400" />}
                                                {label}
                                            </td>
                                            {featureRow.map((feature, fi) => (
                                                <td key={fi} className="text-center py-3 px-4">
                                                    <span className={`text-xs ${
                                                        feature?.value === '—' ? 'text-gray-300' :
                                                        feature?.value.includes('✓') ? 'text-emerald-600 font-semibold' :
                                                        'text-[#0A1A3A]'
                                                    }`}>
                                                        {feature?.value || '—'}
                                                    </span>
                                                </td>
                                            ))}
                                        </tr>
                                    );
                                })}
                                {/* CTA Row */}
                                <tr className="bg-gray-50/50">
                                    <td className="py-4 px-4 sticky left-0 bg-gray-50/50 font-bold text-gray-700 text-xs">
                                        Choose Plan
                                    </td>
                                    {plans.map((plan, idx) => (
                                        <td key={idx} className="text-center py-4 px-4">
                                            <Link to="/interest-form">
                                                <button className={`w-full py-2.5 rounded-lg font-bold text-sm transition-all duration-300 bg-gradient-to-r ${plan.color} text-white shadow-md hover:shadow-lg hover:scale-[1.02] transform`}>
                                                    Get Started →
                                                </button>
                                            </Link>
                                        </td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Bottom Trust Section with Animation */}
                <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-1 bg-gradient-to-br from-[#0A1A3A] to-[#1a2d5c] rounded-2xl p-8 text-white relative overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                        <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl animate-pulse"></div>
                        <div className="absolute -left-8 -top-8 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-4">
                                <Sparkles size={20} className="text-amber-400 animate-spin-slow" />
                                <span className="text-amber-400 font-semibold text-sm">Premium Network</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Be part of a trusted global business ecosystem.</h3>
                            <p className="text-gray-300 text-sm mb-6">Connect with verified partners and grow beyond borders.</p>
                            <Link to="/interest-form">
                                <button className="bg-amber-400 text-[#0A1A3A] font-bold px-6 py-3 rounded-lg hover:bg-amber-300 transition-all duration-300 flex items-center gap-2 group transform hover:scale-105">
                                    Get Started <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-4">
                        {[
                            { icon: Globe, label: 'Partnerships', color: 'blue' },
                            { icon: Users, label: 'Grow Your Network', color: 'emerald' },
                            { icon: Target, label: 'Explore New Markets', color: 'purple' },
                            { icon: Star, label: 'Trusted Network', color: 'pink' },
                            { icon: Award, label: 'Expert Network', color: 'indigo' },
                            { icon: LineChart, label: 'Business Support', color: 'teal' }
                        ].map((item, index) => (
                            <div key={index} className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center hover:shadow-lg hover:border-gray-200 transition-all duration-300 group cursor-pointer transform hover:scale-105">
                                <div className={`w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-3 bg-${item.color}-100 text-${item.color}-600 group-hover:scale-110 transition-transform duration-300`}>
                                    <item.icon size={20} />
                                </div>
                                <div className="text-xs font-bold text-[#0A1A3A]">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats Bar with Animation */}
                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { icon: Users, label: 'Verified Members', value: '85,000+', color: 'blue' },
                        { icon: ShieldCheck, label: 'Secure', value: 'SSL & Data Protection', color: 'emerald' },
                        { icon: Award, label: 'Compliant', value: 'Global Standards', color: 'purple' },
                        { icon: Globe, label: '24/7 Support', value: 'Dedicated Assistance', color: 'amber' }
                    ].map((stat, idx) => (
                        <div key={idx} className="bg-white p-4 rounded-xl border border-gray-200 flex items-center gap-4 hover:shadow-md hover:border-gray-300 transition-all duration-300 transform hover:scale-105 group">
                            <div className={`w-10 h-10 bg-${stat.color}-100 rounded-xl flex items-center justify-center text-${stat.color}-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                <stat.icon size={18} />
                            </div>
                            <div>
                                <div className="font-bold text-[#0A1A3A] text-sm">{stat.value}</div>
                                <div className="text-xs text-gray-500">{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Add custom animations */}
            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes gradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }

                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 3s ease infinite;
                }

                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                .animate-spin-slow {
                    animation: spin-slow 8s linear infinite;
                }

                .delay-1000 {
                    animation-delay: 1000ms;
                }

                .hover\\:scale-105:hover {
                    transform: scale(1.05);
                }

                .hover\\:shadow-2xl:hover {
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
                }
            `}</style>
        </div>
    );
};

export default PricingComparison;