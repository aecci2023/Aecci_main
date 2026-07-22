import {
    ArrowRight,
    Building2,
    ChevronDown,
    ChevronUp,
    FileText,
    Globe,
    Headphones,
    Info,
    Play,
    ShieldCheck,
    X,
    Zap,
    Factory,
    Users,
    Briefcase,
    Clock,
    Lock,
    Loader2,
    CheckCircle2
} from 'lucide-react';
import { Controller } from "react-hook-form";
import { PhoneInput } from "@/components/ui/phone-input";
import { parsePhoneNumber, type Country } from "react-phone-number-input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useSubmitInterestFormMutation } from "@/store/api/interestApi";
import { toast } from "sonner";
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { COUNTRIES } from '@/lib/countries';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { COUNTRY_OPTIONS, SECTOR_OPTIONS } from "@/components/data/form-options";
import { MultiSelect } from "@/components/ui/multi-select";


const interestFormSchema = z.object({
    category: z.string().optional(),
    userType: z.string().optional(),
    companyName: z.string().optional(),
    email: z.string().email("Valid email is required"),
    country: z.string().optional(),
    sector: z.string().optional(),
    contactPerson: z.string().optional(),
    fullName: z.string().optional(),
    cityState: z.string().optional(),
    emailAddress: z.string().optional(),
    countryCode: z.string().optional(),
    phoneWhatsapp: z.string().optional(),
    yourCountry: z.string().optional(),
    objectives: z.array(z.string()).optional(),
    infoAccurate: z.boolean().optional(),
    agreeTerms: z.boolean().optional(),
    understandFacilitation: z.boolean().optional(),
    shareInfo: z.boolean().optional(),
    sourcingRequirements: z.string().optional(),
    targetMarkets: z.array(z.string()).optional(),
    expertiseAreas: z.string().optional(),
    professionalTitle: z.string().optional(),
    yearsOfExperience: z.string().optional(),
    products: z.string().optional(),
    targetSourcingMarkets: z.array(z.string()).optional(),
    otherSector: z.string().optional(),
    sectorsOfInterest: z.string().optional(),
}).superRefine((data, ctx) => {
    if ((data.category === "Exporter" || data.category === "Importer") && data.userType === "business") {
        if (!data.companyName || data.companyName.trim() === "") {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Company name is required",
                path: ["companyName"],
            });
        }
    }
    
    if (data.email && data.emailAddress && data.email.toLowerCase() === data.emailAddress.toLowerCase()) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Business email and personal email cannot be the same",
            path: ["emailAddress"],
        });
    }

    if (data.phoneWhatsapp && data.contactPerson && data.phoneWhatsapp === data.contactPerson) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Phone / WhatsApp and Phone No cannot be the same",
            path: ["contactPerson"],
        });
    }
});

const Interest = () => {
    
    const { register, control, handleSubmit: hookFormSubmit, watch, setValue } = useForm<z.infer<typeof interestFormSchema>>({
        resolver: zodResolver(interestFormSchema),
        defaultValues: { category: "Exporter", userType: "business", objectives: [], infoAccurate: false, agreeTerms: false, understandFacilitation: false, shareInfo: false }
    });
    const [submitInterest, { isLoading: isSubmitting }] = useSubmitInterestFormMutation();
    const [isSubmitted, setIsSubmitted] = useState(false);

    
    const onSubmit = async (data: z.infer<typeof interestFormSchema>) => {
        try {
            // Extract country code from phoneWhatsapp
            if (data.phoneWhatsapp) {
                const parsed = parsePhoneNumber(data.phoneWhatsapp);
                if (parsed) {
                    data.countryCode = `+${parsed.countryCallingCode}`;
                    // We no longer strip the country code from phoneWhatsapp 
                }
            }

            if (data.sector === 'Other' && data.otherSector) {
                data.sector = data.otherSector;
            }
            await submitInterest(data).unwrap();
            setIsSubmitted(true);
            toast.success("Interest submitted successfully! We will notify you when Global Connect is open.");
        } catch (error: any) {
            const errorMessage = error?.data?.message || "Failed to submit interest. Please try again.";
            toast.error(errorMessage);
            console.error("Submit error:", error);
        }
    };
    
    const phoneWhatsapp = watch('phoneWhatsapp');
    useEffect(() => {
        if (phoneWhatsapp) {
            try {
                const parsed = parsePhoneNumber(phoneWhatsapp);
                if (parsed?.country) {
                    const countryObj = COUNTRIES.find(c => c.code === parsed.country);
                    if (countryObj) {
                        setValue('country', countryObj.name, { shouldValidate: true });
                    }
                }
            } catch (e) {
                console.error(e);
                // Ignore parse errors while typing
            }
        }
    }, [phoneWhatsapp, setValue]);

    const selectedCountryName = watch('country');
    const selectedCountryObj = COUNTRIES.find(c => c.name === selectedCountryName);
    const defaultCountryCode = (selectedCountryObj?.code || 'IN') as Country;

    const [activeFaq, setActiveFaq] = useState<number | null>(null);
    const [activeSection, setActiveSection] = useState<number | null>(null);

    const toggleSection = (id: number) => {
        setActiveSection(prev => prev === id ? null : id);
    };

    const toggleFaq = (idx: number) => {
        setActiveFaq(prev => prev === idx ? null : idx);
    };

    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isVideoPlaying2, setIsVideoPlaying2] = useState(false);
    const videoRef2 = useRef<HTMLVideoElement>(null);

    const [showTermsModal, setShowTermsModal] = useState(false);
    const [showRefundModal, setShowRefundModal] = useState(false);

    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const slides = [
        {
            id: "exporter",
            title: "Indian Exporters / Manufacturers",
            description: "Expand your business and reach new global markets.",
            linkText: "Join as Exporter →",
            image: "/images/exporter.png",
            iconBg: "bg-amber-100 text-amber-600",
            icon: Factory,
        },
        {
            id: "collaborator",
            title: "International Collaborators",
            description: "Bring expertise, process, market insight and know-how.",
            linkText: "Join as Collaborator →",
            image: "/images/collaborator.png",
            iconBg: "bg-purple-100 text-purple-600",
            icon: Users,
        },
        {
            id: "agent",
            title: "Intending Agents / Representatives",
            description: "Representing your customers and suppliers.",
            linkText: "Join as Agent →",
            image: "/images/agent.png",
            iconBg: "bg-emerald-100 text-emerald-600",
            icon: Globe,
        },
        {
            id: "buyer",
            title: "Global Buyers / Importers",
            description: "Supply chain risk reduction and compliance.",
            linkText: "Join as Buyer →",
            image: "/images/buyer.png",
            iconBg: "bg-blue-100 text-blue-600",
            icon: Briefcase,
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlideIndex((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);


    
    const handleObjectiveChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        const currentObjectives = watch('objectives') || [];
        if (checked) {
            if (currentObjectives.length >= 3) return;
            setValue('objectives', [...currentObjectives, value]);
        } else {
            setValue('objectives', currentObjectives.filter(item => item !== value));
        }
    };


    const toggleVideo = () => {
        if (videoRef.current) {
            if (isVideoPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsVideoPlaying(!isVideoPlaying);
        }
    };

    const toggleVideo2 = () => {
        if (videoRef2.current) {
            if (isVideoPlaying2) {
                videoRef2.current.pause();
            } else {
                videoRef2.current.play();
            }
            setIsVideoPlaying2(!isVideoPlaying2);
        }
    };

    // Section configuration
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
                    <h3 className="font-bold text-[#0A1A3A] text-sm mb-4">Select Role</h3>
                    <div className="mb-6">
                        <Select
                            value={watch('category')}
                            onValueChange={(value) => setValue('category', value, { shouldValidate: true })}
                        >
                            <SelectTrigger className="w-full !h-[42px] px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition flex items-center justify-between text-sm text-gray-700">
                                <SelectValue placeholder="Select role category" />
                            </SelectTrigger>
                            <SelectContent position="popper" className="bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                                <SelectItem value="Exporter" className="hover:bg-amber-50 cursor-pointer py-2 px-3 text-sm text-gray-700">Exporter / Manufacturer</SelectItem>
                                <SelectItem value="Importer" className="hover:bg-amber-50 cursor-pointer py-2 px-3 text-sm text-gray-700">Importer / Buyer</SelectItem>
                                <SelectItem value="Agent" className="hover:bg-amber-50 cursor-pointer py-2 px-3 text-sm text-gray-700">Agent / Representative</SelectItem>
                                <SelectItem value="Partner" className="hover:bg-amber-50 cursor-pointer py-2 px-3 text-sm text-gray-700">Partner / Collaborator</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {['Exporter', 'Importer'].includes(watch('category') || 'Exporter') && (
                        <>
                            <h3 className="font-bold text-[#0A1A3A] text-sm mb-4">Profile Type</h3>
                            <div className="mb-6 flex gap-4">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        value="business"
                                        {...register('userType')}
                                        className="w-4 h-4 text-amber-400 focus:ring-amber-400 border-gray-300"
                                    />
                                    <span className="text-sm text-gray-700">Business</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        value="individual"
                                        {...register('userType')}
                                        className="w-4 h-4 text-amber-400 focus:ring-amber-400 border-gray-300"
                                    />
                                    <span className="text-sm text-gray-700">Individual</span>
                                </label>
                            </div>
                        </>
                    )}

                    {/* Business / Professional Information */}
                    <h3 className="font-bold text-[#0A1A3A] text-sm mb-4">
                        {['Exporter', 'Importer'].includes(watch('category') || 'Exporter') && watch('userType') === 'business' ? 'Business Information' : 'Professional Information'}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        {['Exporter', 'Importer'].includes(watch('category') || 'Exporter') && watch('userType') === 'business' && (
                            <div>
                                <label className="block text-xs font-medium text-gray-700 mb-1">Company / Business Name <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    {...register('companyName')}
                                    className="w-full h-[42px] px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition"
                                    placeholder="Enter company name"
                                    required={['Exporter', 'Importer'].includes(watch('category') || 'Exporter') && watch('userType') === 'business'}
                                />
                            </div>
                        )}
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
                            <input
                                type="email"
                                {...register('email')}
                                className="w-full h-[42px] px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition"
                                placeholder="Enter email"
                                required
                            />
                        </div>
                        {['Exporter', 'Importer'].includes(watch('category') || 'Exporter') && (
                            <div>
                                <label className="block text-xs font-medium text-gray-700 mb-1">Sector / Industry</label>
                                <Select
                                    value={watch('sector')}
                                    onValueChange={(value) => setValue('sector', value, { shouldValidate: true })}
                                >
                                    <SelectTrigger className="w-full !h-[42px] px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition flex items-center justify-between text-sm text-gray-700">
                                        <SelectValue placeholder="Select sector" />
                                    </SelectTrigger>
                                    <SelectContent position="popper" className="max-h-60 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                                        {SECTOR_OPTIONS.map((s) => (
                                            <SelectItem key={s.value} value={s.value} className="hover:bg-amber-50 cursor-pointer py-2 px-3 text-sm text-gray-700">
                                                {s.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                {watch('sector') === 'Other' && (
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            {...register('otherSector')}
                                            className="w-full h-[42px] px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition"
                                            placeholder="Please specify your sector"
                                            required
                                        />
                                    </div>
                                )}
                            </div>
                        )}

                        {watch('category') === 'Exporter' && (
                            <>
                                <div>
                                    <label className="block text-xs font-medium text-gray-700 mb-1">Products / Services Offered</label>
                                    <input
                                        type="text"
                                        {...register('products')}
                                        className="w-full h-[42px] px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition"
                                        placeholder="Enter products"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-gray-700 mb-1">Target Markets</label>
                                    <Controller
                                        name="targetMarkets"
                                        control={control}
                                        render={({ field }) => (
                                            <MultiSelect
                                                options={COUNTRY_OPTIONS}
                                                selected={field.value || []}
                                                onChange={field.onChange}
                                                placeholder="Select target countries..."
                                            />
                                        )}
                                    />
                                </div>
                            </>
                        )}
                        
                        {watch('category') === 'Importer' && (
                            <>
                                <div>
                                    <label className="block text-xs font-medium text-gray-700 mb-1">Sourcing Requirements</label>
                                    <input
                                        type="text"
                                        {...register('sourcingRequirements')}
                                        className="w-full h-[42px] px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition"
                                        placeholder="What are you looking to import?"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-gray-700 mb-1">Target Sourcing Markets</label>
                                    <Controller
                                        name="targetSourcingMarkets"
                                        control={control}
                                        render={({ field }) => (
                                            <MultiSelect
                                                options={COUNTRY_OPTIONS}
                                                selected={field.value || []}
                                                onChange={field.onChange}
                                                placeholder="Select target countries..."
                                            />
                                        )}
                                    />
                                </div>
                            </>
                        )}

                        {['Agent', 'Partner'].includes(watch('category') || '') && (
                            <div>
                                <label className="block text-xs font-medium text-gray-700 mb-1">Professional Title</label>
                                <input
                                    type="text"
                                    {...register('professionalTitle')}
                                    className="w-full h-[42px] px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition"
                                    placeholder="Enter title"
                                />
                            </div>
                        )}
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Country / Region</label>
                            <Select
                                value={watch('country')}
                                onValueChange={(value) => setValue('country', value)}
                            >
                                <SelectTrigger className="w-full !h-[42px] px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition flex items-center justify-between text-sm text-gray-700">
                                    <SelectValue placeholder="Select country" />
                                </SelectTrigger>
                                <SelectContent position="popper" className="max-h-60 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                                    {COUNTRIES.map((c) => (
                                        <SelectItem key={c.code} value={c.name} className="hover:bg-amber-50 cursor-pointer py-2 px-3 text-sm text-gray-700">
                                            {c.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>


                        {watch('category') === 'Agent' && (
                            <>
                                <div>
                                    <label className="block text-xs font-medium text-gray-700 mb-1">Expertise Areas</label>
                                    <input
                                        type="text"
                                        {...register('expertiseAreas')}
                                        className="w-full h-[42px] px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition"
                                        placeholder="e.g. Logistics, Clearance"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-gray-700 mb-1">Sectors of Interest</label>
                                    <input
                                        type="text"
                                        {...register('sectorsOfInterest')}
                                        className="w-full h-[42px] px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition"
                                        placeholder="e.g. Agriculture, Tech"
                                    />
                                </div>
                            </>
                        )}

                        {watch('category') === 'Partner' && (
                            <>
                                <div>
                                    <label className="block text-xs font-medium text-gray-700 mb-1">Company / Organization Name</label>
                                    <input
                                        type="text"
                                        {...register('companyName')}
                                        className="w-full h-[42px] px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition"
                                        placeholder="Enter company or organization name (optional)"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-gray-700 mb-1">Expertise Areas</label>
                                    <input
                                        type="text"
                                        {...register('expertiseAreas')}
                                        className="w-full h-[42px] px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition"
                                        placeholder="Enter areas of expertise"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-gray-700 mb-1">Years of Experience</label>
                                    <input
                                        type="text"
                                        {...register('yearsOfExperience')}
                                        className="w-full h-[42px] px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition"
                                        placeholder="e.g. 5 years"
                                    />
                                </div>
                            </>
                        )}
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Phone No</label>
                            
                            <Controller
                                name="contactPerson"
                                control={control}
                                render={({ field }) => (
                                    <PhoneInput
                                        placeholder="Enter phone number"
                                        defaultCountry={defaultCountryCode}
                                        className="h-[42px] rounded-lg border-gray-300 bg-transparent focus-within:ring-2 focus-within:ring-amber-400 focus-within:border-transparent"
                                        {...field}
                                    />
                                )}
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
                                {...register('fullName')}
                                className="w-full h-[42px] px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition"
                                placeholder="Enter full name"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">City / State / Country</label>
                            <input
                                type="text"
                                {...register('cityState')}
                                className="w-full h-[42px] px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition"
                                placeholder="Enter city, state, country"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Email Address <span className="text-red-500">*</span></label>
                            <input
                                type="email"
                                {...register('emailAddress')}
                                className="w-full h-[42px] px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition"
                                placeholder="Enter email address"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Phone / WhatsApp</label>
                            
                            <Controller
                                name="phoneWhatsapp"
                                control={control}
                                render={({ field }) => (
                                    <PhoneInput
                                        placeholder="Enter phone number"
                                        defaultCountry={defaultCountryCode}
                                        className="h-[42px] rounded-lg border-gray-300 bg-transparent focus-within:ring-2 focus-within:ring-amber-400 focus-within:border-transparent"
                                        {...field}
                                    />
                                )}
                            />

                        </div>
                    </div>
                    {/* Your Objective Section */}
                    <h3 className="font-bold text-[#0A1A3A] text-sm mb-2">
                        Your Objective <span className="text-red-500">*</span>
                        <span className="text-xs text-gray-500 font-normal ml-2">(Select up to 3 options)</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {(() => {
                            const category = watch('category');
                            if (category === 'Exporter') {
                                return [
                                    'Find International Buyers',
                                    'Market Expansion',
                                    'Distribution Partnership',
                                    'Strategic Collaboration',
                                    'Other'
                                ];
                            } else if (category === 'Importer') {
                                return [
                                    'Find Suppliers',
                                    'Import Opportunities',
                                    'Distribution Partnership',
                                    'Strategic Collaboration',
                                    'Other'
                                ];
                            } else if (category === 'Agent' || category === 'Partner') {
                                return [
                                    'Offer Professional Services',
                                    'Network with Industry Leaders',
                                    'Find Consulting Projects',
                                    'Join Advisory Boards',
                                    'Strategic Collaboration',
                                    'Other'
                                ];
                            }
                            return [
                                'Find International Buyers',
                                'Find Suppliers',
                                'Market Expansion',
                                'Distribution Partnership',
                                'Import Opportunities',
                                'Strategic Collaboration',
                                'Other'
                            ];
                        })().map((objective) => {
                            const isChecked = watch('objectives')?.includes(objective);
                            const isMaxReached = (watch('objectives')?.length || 0) >= 3;
                            const isDisabled = isMaxReached && !isChecked;

                            return (
                                <label
                                    key={objective}
                                    className={`flex items-center gap-2 text-sm text-gray-700 cursor-pointer transition-opacity ${isDisabled ? 'opacity-40 cursor-not-allowed' : ''}`}
                                >
                                    <input
                                        type="checkbox"
                                        name="objectives"
                                        value={objective}
                                        checked={isChecked}
                                        onChange={handleObjectiveChange}
                                        disabled={isDisabled}
                                        className="w-4 h-4 text-amber-400 focus:ring-amber-400 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                                        required={watch('objectives')?.length === 0}
                                    />
                                    {objective}
                                </label>
                            );
                        })}
                    </div>
                    {/* Legal Acceptance & Share Information */}
                    <div className="mt-6 pt-4 border-t border-gray-100 space-y-6">
                        <div className="space-y-4">
                            <p className="text-gray-600 text-sm font-semibold">Before proceeding:</p>

                            <div className="space-y-3">
                                <label className="flex items-start gap-3 text-sm text-gray-700 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        {...register('infoAccurate')}
                                        className="w-4 h-4 text-amber-400 focus:ring-amber-400 rounded mt-0.5 flex-shrink-0"
                                        required
                                    />
                                    <span>I confirm that the information provided is accurate.</span>
                                </label>

                                <label className="flex items-start gap-3 text-sm text-gray-700 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        {...register('agreeTerms')}
                                        className="w-4 h-4 text-amber-400 focus:ring-amber-400 rounded mt-0.5 flex-shrink-0"
                                        required
                                    />
                                    <span>I agree to AECCI Global Deal Room Terms &amp; Conditions.</span>
                                </label>

                                <label className="flex items-start gap-3 text-sm text-gray-700 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        {...register('understandFacilitation')}
                                        className="w-4 h-4 text-amber-400 focus:ring-amber-400 rounded mt-0.5 flex-shrink-0"
                                        required
                                    />
                                    <span>I understand AECCI provides facilitation and networking opportunities and does not guarantee commercial outcomes.</span>
                                </label>

                                <label className="flex items-start gap-3 text-sm text-gray-700 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        {...register('shareInfo')}
                                        className="w-4 h-4 text-amber-400 focus:ring-amber-400 rounded mt-0.5 flex-shrink-0"
                                        required
                                    />
                                    <span>I agree to share my information securely and confidentially</span>
                                </label>
                            </div>
                        </div>

                        <p className="text-[11.5px] text-gray-400 mt-2.5 leading-relaxed text-left max-w-3xl">
                            <span className="font-semibold text-gray-500">Description:</span>{' '}
                            AECCI Global Deal Room acts solely as a business facilitation platform. Participation in Deal Room sessions, introductions, meetings, or business discussions does not constitute a guarantee of commercial transactions, partnerships, investments, orders, or business outcomes. All negotiations, agreements, and commercial decisions remain the sole responsibility of the participating parties.
                        </p>

                        <div className="flex flex-wrap items-center gap-4 text-xs">
                            <span className="text-gray-500">By submitting interest form, You agree to our</span>
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setShowTermsModal(true);
                                }}
                                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors font-medium cursor-pointer"
                            >
                                Terms & Conditions
                            </button>
                            <span className="text-gray-400">|</span>
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setShowRefundModal(true);
                                }}
                                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors font-medium cursor-pointer"
                            >
                                Refund Policy
                            </button>

                        </div>



                        {/* Submit Button with Terms & Refund Policy Links */}
                        <div className="flex flex-col items-start gap-4 mt-6">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-gradient-to-r from-amber-400 to-amber-500 text-[#0A1A3A] font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 size={18} className="animate-spin" />
                                        Submitting...
                                    </>
                                ) : (
                                    <>
                                        Submit Interest & Continue
                                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
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
                <div className="space-y-4">
                    <div className="bg-[#f0f6fc] border border-[#e1eefc] rounded-2xl p-4 flex items-center gap-3 mb-2 text-left">
                        <div className="text-blue-600 bg-blue-50 p-2 rounded-xl flex-shrink-0">
                            <Info size={18} />
                        </div>
                        <div>
                            <h5 className="font-bold text-slate-800 text-xs">Important Information Before Joining</h5>
                            <p className="text-[10px] text-slate-500 mt-0.5">Please review the participation rules and platform guidelines below.</p>
                        </div>
                    </div>

                    {/* Timeline of Cards */}
                    <div className="space-y-3.5 text-left">
                        {/* 1. Business Matching */}
                        <motion.div
                            whileHover={{ y: -2, scale: 1.005 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="border border-slate-100 hover:border-amber-500/20 rounded-2xl p-4 flex items-start gap-3.5 bg-gradient-to-r from-slate-50/50 to-white hover:bg-slate-50/80 transition-all duration-300 shadow-sm group cursor-default"
                        >
                            <div className="text-amber-500 bg-amber-500/10 p-2.5 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                <Users size={18} />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#0A1A3A] text-sm">
                                    1. Business Matching
                                </h4>
                                <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                                    AECCI Global Deal Room facilitates structured introductions between registered businesses, collaborators and trade professionals.
                                </p>
                                <span className="text-[10px] text-amber-600 font-semibold mt-2 bg-amber-500/5 px-2.5 py-1 rounded-lg border border-amber-500/10 block">
                                    ⚠️ AECCI does not guarantee any business transaction, order, investment, partnership or commercial outcome.
                                </span>
                            </div>
                        </motion.div>

                        {/* 2. Meeting Structure */}
                        <motion.div
                            whileHover={{ y: -2, scale: 1.005 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="border border-slate-100 hover:border-amber-500/20 rounded-2xl p-4 flex items-start gap-3.5 bg-gradient-to-r from-slate-50/50 to-white hover:bg-slate-50/80 transition-all duration-300 shadow-sm group cursor-default"
                        >
                            <div className="text-amber-500 bg-amber-500/10 p-2.5 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                <Clock size={18} />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#0A1A3A] text-sm flex items-center gap-2">
                                    2. Meeting Structure
                                    <span className="bg-blue-500/10 text-blue-600 text-[9px] px-2 py-0.5 rounded-full border border-blue-500/20 font-bold">
                                        30 Min Duration
                                    </span>
                                </h4>
                                <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                                    All Deal Room interactions are time-scheduled, professionally moderated, business-focused, and based strictly on submitted requirements.
                                </p>
                                <p className="text-[10px] text-gray-400 mt-1.5 italic">
                                    (Unless customized package applies)
                                </p>
                            </div>
                        </motion.div>

                        {/* 3. Participant Responsibility */}
                        <motion.div
                            whileHover={{ y: -2, scale: 1.005 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="border border-slate-100 hover:border-amber-500/20 rounded-2xl p-4 flex items-start gap-3.5 bg-gradient-to-r from-slate-50/50 to-white hover:bg-slate-50/80 transition-all duration-300 shadow-sm group cursor-default"
                        >
                            <div className="text-amber-500 bg-amber-500/10 p-2.5 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                <FileText size={18} />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#0A1A3A] text-sm">
                                    3. Participant Responsibility
                                </h4>
                                <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                                    Participants must provide accurate business information, valid company details, genuine requirements, and maintain professional communication at all times.
                                </p>
                            </div>
                        </motion.div>

                        {/* 4. Confidentiality */}
                        <motion.div
                            whileHover={{ y: -2, scale: 1.005 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="border border-slate-100 hover:border-amber-500/20 rounded-2xl p-4 flex items-start gap-3.5 bg-gradient-to-r from-slate-50/50 to-white hover:bg-slate-50/80 transition-all duration-300 shadow-sm group cursor-default"
                        >
                            <div className="text-amber-500 bg-amber-500/10 p-2.5 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                <Lock size={18} />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#0A1A3A] text-sm">
                                    4. Confidentiality
                                </h4>
                                <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                                    Participants are responsible for protecting their own confidential information. AECCI strongly recommends establishing appropriate confidentiality agreements where required.
                                </p>
                            </div>
                        </motion.div>

                        {/* 5. Commercial Decisions */}
                        <motion.div
                            whileHover={{ y: -2, scale: 1.005 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="border border-slate-100 hover:border-amber-500/20 rounded-2xl p-4 flex items-start gap-3.5 bg-gradient-to-r from-slate-50/50 to-white hover:bg-slate-50/80 transition-all duration-300 shadow-sm group cursor-default"
                        >
                            <div className="text-amber-500 bg-amber-500/10 p-2.5 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                <ShieldCheck size={18} />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#0A1A3A] text-sm">
                                    5. Commercial Decisions
                                </h4>
                                <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                                    All negotiations, contracts, payments and business agreements are directly between participating parties. AECCI acts solely as a business facilitation platform.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
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
        }
    ];

    return (
        <div className="min-h-screen bg-white font-sans antialiased">
            {/* Hero Header */}
            <div
                className="relative text-white overflow-hidden bg-[#040D1A] py-6 md:py-8"
                style={{
                    backgroundImage: `url('/login_earth_background.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-[#040d1a]/80 z-0" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    {/* Left Column - Heading and Stats */}
                    <div className="space-y-4 text-left max-w-5xl">
                        <div>
                            <span className="text-amber-400 font-bold text-xs uppercase tracking-widest block mb-1">
                                AECCI GLOBAL DEAL ROOM
                            </span>
                            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-white">
                                Your Gateway to <br />
                                <span className="text-[#FFC629]">Global Business Growth!</span>
                            </h1>
                            <p className="text-slate-300 text-xs md:text-sm max-w-2xl mt-2 leading-relaxed font-medium">
                                Connect. Collaborate. Grow globally with verified businesses, structured meetings and trusted trade opportunities.
                            </p>
                        </div>

                        {/* Stats Row with 3D Hover Animations */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-white/10">
                            {/* Stat 1 */}
                            <motion.div
                                whileHover={{ y: -5, scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-3.5 flex items-center gap-3 shadow-lg hover:border-amber-400/30 hover:bg-white/10 transition-all duration-300 cursor-default group"
                            >
                                <div className="text-slate-300 group-hover:text-amber-400 group-hover:scale-110 transition-all duration-300">
                                    <Globe size={22} className="stroke-[1.5]" />
                                </div>
                                <div>
                                    <div className="text-lg font-extrabold text-white leading-none">50+</div>
                                    <div className="text-[10px] text-slate-400 mt-1 font-semibold uppercase tracking-wider">Countries</div>
                                </div>
                            </motion.div>

                            {/* Stat 2 */}
                            <motion.div
                                whileHover={{ y: -5, scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-3.5 flex items-center gap-3 shadow-lg hover:border-amber-400/30 hover:bg-white/10 transition-all duration-300 cursor-default group"
                            >
                                <div className="text-slate-300 group-hover:text-amber-400 group-hover:scale-110 transition-all duration-300">
                                    <Building2 size={22} className="stroke-[1.5]" />
                                </div>
                                <div>
                                    <div className="text-lg font-extrabold text-white leading-none">10K+</div>
                                    <div className="text-[10px] text-slate-400 mt-1 font-semibold uppercase tracking-wider">Businesses</div>
                                </div>
                            </motion.div>

                            {/* Stat 3 */}
                            <motion.div
                                whileHover={{ y: -5, scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-3.5 flex items-center gap-3 shadow-lg hover:border-amber-400/30 hover:bg-white/10 transition-all duration-300 cursor-default group"
                            >
                                <div className="text-slate-300 group-hover:text-amber-400 group-hover:scale-110 transition-all duration-300">
                                    <Users size={22} className="stroke-[1.5]" />
                                </div>
                                <div>
                                    <div className="text-lg font-extrabold text-white leading-none">500+</div>
                                    <div className="text-[10px] text-slate-400 mt-1 font-semibold uppercase tracking-wider">Trade Experts</div>
                                </div>
                            </motion.div>

                            {/* Stat 4 */}
                            <motion.div
                                whileHover={{ y: -5, scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-3.5 flex items-center gap-3 shadow-lg hover:border-amber-400/30 hover:bg-white/10 transition-all duration-300 cursor-default group"
                            >
                                <div className="text-slate-300 group-hover:text-amber-400 group-hover:scale-110 transition-all duration-300">
                                    <Headphones size={22} className="stroke-[1.5]" />
                                </div>
                                <div>
                                    <div className="text-lg font-extrabold text-white leading-none">24/7</div>
                                    <div className="text-[10px] text-slate-400 mt-1 font-semibold uppercase tracking-wider">Support</div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            <form onSubmit={hookFormSubmit(onSubmit)}>
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Form - Left & Center */}
                        <div className="lg:col-span-2 space-y-4">
                            {isSubmitted ? (
                                <div className="py-20 text-center">
                                    <motion.div 
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="bg-white rounded-3xl shadow-xl p-10 max-w-2xl mx-auto border border-gray-100 flex flex-col items-center justify-center space-y-6"
                                    >
                                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-2">
                                            <CheckCircle2 size={40} className="text-green-600" />
                                        </div>
                                        <h2 className="text-3xl font-extrabold text-[#0A1A3A]">Interest Submitted Successfully!</h2>
                                        <p className="text-gray-600">
                                            Thank you for your interest in AECCI Global Deal Room. We have received your details and will notify you when Global Connect is open.
                                        </p>
                                        <button
                                            type="button"
                                            onClick={() => window.location.reload()}
                                            className="mt-4 px-8 py-3 bg-[#0A1A3A] text-white rounded-xl font-bold hover:bg-[#1a2d5c] transition-colors"
                                        >
                                            Return to Home
                                        </button>
                                    </motion.div>
                                </div>
                            ) : (
                                <>
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

                            {/* Video Section Box to cover left-side white space */}
                            {!(activeSection === 2 || activeSection === 3 || activeSection === 4) && (
                                <div className="bg-white rounded-3xl border border-slate-200/80 shadow-lg p-6 mt-6">
                                    <div className="w-full max-w-3xl mx-auto">
                                        <div
                                            className="relative rounded-2xl overflow-hidden cursor-pointer group bg-black aspect-video w-full shadow-md border border-slate-100"
                                            onClick={toggleVideo}
                                        >
                                            <video
                                                ref={videoRef}
                                                src="/src/assets/videos/globalroomwork_v2.mp4"
                                                className="w-full h-full object-cover"
                                                playsInline
                                                onEnded={() => setIsVideoPlaying(false)}
                                                onPause={() => setIsVideoPlaying(false)}
                                                onPlay={() => setIsVideoPlaying(true)}
                                            />
                                            {!isVideoPlaying && (
                                                <div className="absolute inset-0 bg-gradient-to-br from-[#0A1A3A]/40 to-[#1a2d5c]/40 flex items-center justify-center transition-opacity group-hover:opacity-60">
                                                    <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl z-10">
                                                        <Play size={24} className="text-[#0A1A3A] ml-1 fill-[#0A1A3A]" />
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}
                                </>
                            )}
                        </div>

                        {/* Right Sidebar - Info & Video */}
                        <div className="lg:col-span-1">
                            <div className="space-y-6 sticky top-6">
                                {/* Video Section in Sidebar */}
                                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                                    <h3 className="font-bold text-[#0A1A3A] text-sm mb-3">How AECCI Creates Global Opportunities</h3>
                                    <div
                                        className="relative rounded-xl overflow-hidden cursor-pointer group bg-black"
                                        onClick={toggleVideo2}
                                    >
                                        <video
                                            ref={videoRef2}
                                            src="/src/assets/videos/globalroomwork_v2.mp4"
                                            className="w-full h-auto max-h-48 object-cover"
                                            playsInline
                                            onEnded={() => setIsVideoPlaying2(false)}
                                            onPause={() => setIsVideoPlaying2(false)}
                                            onPlay={() => setIsVideoPlaying2(true)}
                                        />
                                        {!isVideoPlaying2 && (
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#0A1A3A]/70 to-[#1a2d5c]/70 flex items-center justify-center transition-opacity group-hover:opacity-90">
                                                <div className="w-14 h-14 bg-amber-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                                                    <Play size={22} className="text-[#0A1A3A] ml-1 fill-[#0A1A3A]" />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <p className="text-center text-xs text-gray-500 mt-2">
                                        {isVideoPlaying2 ? 'Click video to pause' : 'Click to watch'} Global Deal Room
                                    </p>
                                </div>

                                {/* Role Carousel Slider */}
                                <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-6 relative overflow-hidden h-[240px] flex flex-col justify-between">
                                    {/* Active Slide Content */}
                                    {slides.map((slide, index) => {
                                        const Icon = slide.icon;
                                        const isActive = index === activeSlideIndex;
                                        return (
                                            <div
                                                key={slide.id}
                                                className={`absolute inset-0 p-6 flex transition-all duration-700 ease-in-out ${isActive
                                                    ? 'opacity-100 translate-x-0 pointer-events-auto'
                                                    : 'opacity-0 translate-x-8 pointer-events-none'
                                                    }`}
                                            >
                                                {/* Left Text details */}
                                                <div className="w-7/12 flex flex-col justify-between text-left h-full z-10 pr-2">
                                                    <div className="space-y-2">
                                                        {/* Icon Circle */}
                                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${slide.iconBg} flex-shrink-0 shadow-sm`}>
                                                            <Icon size={16} />
                                                        </div>
                                                        <h4 className="font-bold text-[#0A1A3A] text-sm leading-snug">
                                                            {slide.title}
                                                        </h4>
                                                        <p className="text-gray-500 text-[11px] leading-normal">
                                                            {slide.description}
                                                        </p>
                                                    </div>
                                                    <a
                                                        href="#"
                                                        className="text-[#2563eb] hover:text-[#1d4ed8] font-bold text-xs inline-flex items-center gap-0.5 hover:underline"
                                                    >
                                                        {slide.linkText}
                                                    </a>
                                                </div>

                                                {/* Right Image */}
                                                <div className="w-5/12 relative flex items-end justify-end h-full">
                                                    <img
                                                        src={slide.image}
                                                        alt={slide.title}
                                                        className="h-[95%] w-auto object-contain object-bottom select-none pointer-events-none z-0"
                                                    />
                                                </div>
                                            </div>
                                        );
                                    })}

                                    {/* Dots Indicators at top right */}
                                    <div className="absolute top-6 right-6 flex gap-1 z-20">
                                        {slides.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setActiveSlideIndex(index)}
                                                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${index === activeSlideIndex
                                                    ? 'bg-[#2563eb] w-3'
                                                    : 'bg-slate-300'
                                                    }`}
                                                type="button"
                                            />
                                        ))}
                                    </div>
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

                            </div>
                        </div>
                    </div>
                </div>
            </form>

            {/* Terms and Conditions Modal */}
            {showTermsModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn" onClick={() => setShowTermsModal(false)}>
                    <div
                        className="bg-white rounded-2xl w-full max-w-2xl max-h-[85vh] shadow-2xl flex flex-col overflow-hidden border border-gray-100"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="bg-gradient-to-r from-[#0A1A3A] to-[#1a2d5c] p-6 text-white flex justify-between items-center">
                            <h3 className="text-lg font-bold flex items-center gap-2">
                                <FileText size={20} className="text-amber-400" />
                                Terms of Use - AECCI Global Deal Room
                            </h3>
                            <button
                                type="button"
                                onClick={() => setShowTermsModal(false)}
                                className="text-white/80 hover:text-white hover:bg-white/10 p-1.5 rounded-lg transition-colors duration-200"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="p-6 overflow-y-auto space-y-6 text-gray-600 text-sm leading-relaxed max-h-[calc(85vh-140px)]">
                            <div className="border-b border-gray-100 pb-4">
                                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">
                                    Terms of Use
                                </p>
                                <p className="text-xs text-amber-600 font-medium">
                                    Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                </p>
                            </div>

                            <p className="font-medium text-gray-700">
                                Welcome to AECCI Global Deal Room, an initiative of the Asian Exporters Chamber of Commerce &amp; Industry (AECCI). By accessing, registering for or participating in the AECCI Global Deal Room platform, you agree to comply with and be bound by these Terms of Use.
                            </p>

                            <div>
                                <h4 className="font-bold text-[#0A1A3A] text-base mb-2">1. Acceptance of Terms</h4>
                                <p>
                                    By using the AECCI Global Deal Room platform, you confirm that you have read, understood, and accepted these Terms of Use, together with the Privacy Policy, Refund Policy, and any other applicable guidelines issued by AECCI.
                                </p>
                                <p className="mt-2 text-red-500 font-medium">
                                    If you do not agree with these terms, you should not use the platform or participate in any Deal Room activities.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-bold text-[#0A1A3A] text-base mb-2">2. Purpose of the Platform</h4>
                                <p>
                                    AECCI Global Deal Room is a structured business facilitation platform designed to promote business matching, collaboration and international business opportunities among registered participants.
                                </p>
                                <p className="mt-2">
                                    AECCI provides access to business meetings, business sessions, introductions and related services. AECCI does not act as an agent, broker, investment advisor, or contracting party in any commercial arrangement.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-bold text-[#0A1A3A] text-base mb-2">3. Eligibility</h4>
                                <p className="mb-2">Participation is available to:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Registered companies and business entities.</li>
                                    <li>Exporters and importers.</li>
                                    <li>Indenting Agents.</li>
                                    <li>Manufacturers and distributors.</li>
                                    <li>Consultants, trade agents and service providers.</li>
                                    <li>Other organizations approved by AECCI.</li>
                                </ul>
                                <p className="mt-2 font-medium">
                                    AECCI reserves the right to accept, reject, suspend or terminate any registration at its sole discretion.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-bold text-[#0A1A3A] text-base mb-2">4. User Responsibilities</h4>
                                <p className="font-semibold text-gray-700 mb-1">Participants agree to:</p>
                                <ul className="list-disc pl-5 space-y-1 mb-3">
                                    <li>Provide accurate and complete information.</li>
                                    <li>Maintain updated company details.</li>
                                    <li>Use the platform only for lawful business purposes.</li>
                                    <li>Conduct themselves professionally during meetings and interactions.</li>
                                    <li>Respect the rights and confidentiality of other participants.</li>
                                </ul>
                                <p className="font-semibold text-gray-700 mb-1">Users shall not:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Misrepresent their business or identity.</li>
                                    <li>Share false, misleading or fraudulent information.</li>
                                    <li>Use the platform for unlawful, unethical or prohibited activities.</li>
                                    <li>Interfere with the operation or security of the platform.</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-bold text-[#0A1A3A] text-base mb-2">5. Business Matching and Introductions</h4>
                                <p className="mb-2">
                                    AECCI facilitates introductions and meeting opportunities based on participant requirements, available experts and business compatibility.
                                </p>
                                <p className="font-semibold text-gray-700 mb-1">Participation in AECCI Global Deal Room does not guarantee:</p>
                                <ul className="list-disc pl-5 space-y-1 mb-2">
                                    <li>Orders or sales.</li>
                                    <li>Investments or funding.</li>
                                    <li>Partnerships or distributorships.</li>
                                    <li>Commercial contracts.</li>
                                    <li>Business success or market access.</li>
                                </ul>
                                <p className="font-medium text-gray-700">
                                    All commercial decisions remain solely between participating parties.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-bold text-[#0A1A3A] text-base mb-2">6. Meetings and Participation</h4>
                                <p>
                                    Deal Room meetings may be conducted online or offline.
                                </p>
                                <p className="mt-2">
                                    Meeting schedules, durations, formats and participant eligibility are determined by AECCI and may be modified without prior notice.
                                </p>
                                <p className="mt-2">
                                    AECCI reserves the right to postpone, reschedule, cancel or refuse participation where necessary.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-bold text-[#0A1A3A] text-base mb-2">7. Fees and Payments</h4>
                                <p>
                                    Services, plans, events or Deal Room sessions may require payment.
                                </p>
                                <p className="mt-2">
                                    Participants agree to pay all applicable fees associated with their selected plan.
                                </p>
                                <p className="mt-2">
                                    Payments are governed by the AECCI Refund Policy and applicable laws.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-bold text-[#0A1A3A] text-base mb-2">8. Confidentiality</h4>
                                <p>
                                    Participants are responsible for protecting their own confidential and proprietary information.
                                </p>
                                <p className="mt-2">
                                    AECCI encourages participants to use appropriate confidentiality agreements where required.
                                </p>
                                <p className="mt-2">
                                    AECCI shall not be responsible for any disclosure, misuse or unauthorized sharing of information by third parties.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-bold text-[#0A1A3A] text-base mb-2">9. Intellectual Property</h4>
                                <p>
                                    All content, trademarks, logos, graphics, documents and materials associated with AECCI Global Deal Room remain the property of AECCI or their respective owners.
                                </p>
                                <p className="mt-2">
                                    No content may be copied, reproduced, distributed or used without prior written permission.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-bold text-[#0A1A3A] text-base mb-2">10. Disclaimer of Warranties</h4>
                                <p className="mb-2 font-medium text-gray-700">The platform and all related services are provided on an "as is" and "as available" basis. AECCI makes no representations or warranties regarding:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>The accuracy or completeness of participant information.</li>
                                    <li>The suitability of business opportunities.</li>
                                    <li>The outcome of meetings or introductions.</li>
                                    <li>The availability or uninterrupted operation of the platform.</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-bold text-[#0A1A3A] text-base mb-2">11. Limitation of Liability</h4>
                                <p className="mb-2 font-medium text-gray-700">To the maximum extent permitted by law, AECCI shall not be liable for:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Loss of profits or revenue.</li>
                                    <li>Business interruption.</li>
                                    <li>Loss of data or information.</li>
                                    <li>Contractual disputes between participants.</li>
                                    <li>Indirect, incidental or consequential damages arising from participation in the platform.</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-bold text-[#0A1A3A] text-base mb-2">12. Suspension and Termination</h4>
                                <p className="mb-2">AECCI may suspend or terminate access to the platform if a participant:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Violates these Terms of Use.</li>
                                    <li>Provides false information.</li>
                                    <li>Engages in unlawful or unethical conduct.</li>
                                    <li>Misuses the platform or disrupts other participants.</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-bold text-[#0A1A3A] text-base mb-2">13. Amendments</h4>
                                <p>
                                    AECCI reserves the right to modify these Terms of Use at any time.
                                </p>
                                <p className="mt-2">
                                    Updated terms shall become effective upon publication on the platform.
                                </p>
                                <p className="mt-2 font-medium">
                                    Continued use of the platform constitutes acceptance of the revised terms.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-bold text-[#0A1A3A] text-base mb-2">14. Governing Law</h4>
                                <p>
                                    These Terms of Use shall be governed by and interpreted in accordance with the laws of India.
                                </p>
                                <p className="mt-2">
                                    Any disputes arising from the use of AECCI Global Deal Room shall be subject to the jurisdiction of the competent courts in Mumbai, Maharashtra, India.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-bold text-[#0A1A3A] text-base mb-2">15. Contact Information</h4>
                                <p className="mb-2 font-semibold text-gray-700">For questions regarding these Terms of Use, please contact:</p>
                                <p className="text-gray-600 font-medium">Asian Exporters Chamber of Commerce &amp; Industry (AECCI)</p>
                                <p className="text-gray-500">AECCI Global Deal Room</p>
                                <p className="text-gray-500">Email: <a href="mailto:globaldealroom@aecci.org.in" className="text-blue-600 hover:underline">globaldealroom@aecci.org.in</a></p>
                                <p className="text-gray-500">Website: <a href="https://www.aecci.org.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.aecci.org.in</a></p>
                            </div>

                            <p className="border-t border-gray-100 pt-4 font-semibold text-[#0A1A3A] text-center">
                                By registering for or participating in AECCI Global Deal Room, you acknowledge that you have read, understood, and agreed to these Terms of Use.
                            </p>
                        </div>

                        {/* Modal Footer */}
                        <div className="border-t border-gray-100 p-4 bg-gray-50 flex justify-end">
                            <button
                                type="button"
                                onClick={() => setShowTermsModal(false)}
                                className="bg-[#0A1A3A] hover:bg-[#15294e] text-white font-semibold px-6 py-2.5 rounded-lg shadow transition-all duration-200 text-sm"
                            >
                                I Understand &amp; Agree
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Refund Policy Modal */}
            {showRefundModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn" onClick={() => setShowRefundModal(false)}>
                    <div
                        className="bg-white rounded-2xl w-full max-w-2xl max-h-[85vh] shadow-2xl flex flex-col overflow-hidden border border-gray-100"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="bg-gradient-to-r from-[#0A1A3A] to-[#1a2d5c] p-6 text-white flex justify-between items-center">
                            <h3 className="text-lg font-bold flex items-center gap-2">
                                <ShieldCheck size={20} className="text-amber-400" />
                                Refund Policy - AECCI Global Deal Room
                            </h3>
                            <button
                                type="button"
                                onClick={() => setShowRefundModal(false)}
                                className="text-white/80 hover:text-white hover:bg-white/10 p-1.5 rounded-lg transition-colors duration-200"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="p-6 overflow-y-auto space-y-6 text-gray-600 text-sm leading-relaxed max-h-[calc(85vh-140px)]">
                            <div className="border-b border-gray-100 pb-4">
                                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">
                                    Refund Policy
                                </p>
                                <p className="text-xs text-amber-600 font-medium">
                                    Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                </p>
                            </div>

                            <div>
                                <h4 className="font-bold text-[#0A1A3A] text-base mb-2">1. Registration Fee</h4>
                                <p className="text-red-500 font-medium bg-red-50 p-3 rounded-lg border border-red-100">
                                    The Registration Fee is strictly non-refundable once the business profile screening and verification process begins.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-bold text-[#0A1A3A] text-base mb-2">2. Approved Meetings Fee</h4>
                                <div className="space-y-4">
                                    <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
                                        <h5 className="font-semibold text-emerald-800 text-xs uppercase tracking-wider mb-2">Refund Applicable (100% Refund):</h5>
                                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                            <li>100% refund if AECCI cancels the scheduled B2B session and cannot provide an alternative scheduling/matching slot.</li>
                                            <li>100% refund if the payment is verified to be duplicated.</li>
                                        </ul>
                                    </div>

                                    <div className="bg-rose-50/50 p-4 rounded-xl border border-rose-100">
                                        <h5 className="font-semibold text-rose-800 text-xs uppercase tracking-wider mb-2">No Refund (0% Refund):</h5>
                                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                            <li>User misses the scheduled session.</li>
                                            <li>User joins the session late.</li>
                                            <li>User lacks proper internet access or required audio/video setup.</li>
                                            <li>User changes their business plans, schedules, or availability.</li>
                                            <li>User fails the business screening/verification after providing inaccurate or falsified information.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-bold text-[#0A1A3A] text-base mb-2">3. Collaboration Partner No-Show Policy</h4>
                                <p className="mb-3">
                                    In the event that the assigned international collaboration partner or buyer fails to appear for the scheduled Deal Room session:
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="border border-gray-200 p-4 rounded-xl hover:border-amber-200 transition-colors">
                                        <h5 className="font-bold text-[#0A1A3A] text-xs uppercase mb-1">Option A (Standard Remedy)</h5>
                                        <p className="text-gray-600 text-xs">
                                            Reschedule the meeting within 30 days. No refund will be issued under this option.
                                        </p>
                                    </div>
                                    <div className="border border-gray-200 p-4 rounded-xl hover:border-amber-200 transition-colors">
                                        <h5 className="font-bold text-[#0A1A3A] text-xs uppercase mb-1">Option B (Alternative Remedy)</h5>
                                        <p className="text-gray-600 text-xs">
                                            Participant may request a full refund of the session fee, OR a credit note valid for a future AECCI Deal Room session.
                                        </p>
                                    </div>
                                </div>
                                <p className="mt-3 text-xs text-gray-500 italic">
                                    * AECCI reserves the right to choose and implement the appropriate remedy from the options stated above.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-bold text-[#0A1A3A] text-base mb-2">4. Technical Failure Policy</h4>
                                <p className="mb-2">
                                    If a session cannot be successfully conducted due to:
                                </p>
                                <ul className="list-disc pl-5 space-y-1 mb-3">
                                    <li>Platform crashes or unexpected software outages.</li>
                                    <li>AECCI server-side failures.</li>
                                    <li>Moderator connectivity or attendance failure.</li>
                                </ul>
                                <p className="mb-2 font-medium">
                                    The session will be paused and rescheduled at no additional cost.
                                </p>
                                <p className="text-xs text-red-500 font-semibold bg-red-50/50 p-2.5 rounded-lg border border-red-100/50">
                                    No consequential damages, losses, or compensation of any kind shall be payable to the participant in case of technical failures.
                                </p>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="border-t border-gray-100 p-4 bg-gray-50 flex justify-end">
                            <button
                                type="button"
                                onClick={() => setShowRefundModal(false)}
                                className="bg-[#0A1A3A] hover:bg-[#15294e] text-white font-semibold px-6 py-2.5 rounded-lg shadow transition-all duration-200 text-sm"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

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