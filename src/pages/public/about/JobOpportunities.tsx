import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight, Award, Mail, TrendingUp, Users, Phone, CheckCircle2, ChevronRight, User, GraduationCap, Briefcase, MapPin, UploadCloud, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useUploadFileMutation } from "@/store/api/authApi";
import { useCreateJobApplicationMutation } from "@/store/api/jobApplicationApi";
import { toast } from "sonner";
import careerHero from "@/assets/images/career-hero.png";

const perks = [
  {
    icon: Users,
    title: "Dynamic Team",
    desc: "Work alongside passionate professionals in a collaborative, growth-focused environment.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    desc: "We invest heavily in training and development to help you reach your full potential.",
  },
  {
    icon: Award,
    title: "Rewarding Culture",
    desc: "Your caliber is recognized and correctly rewarded in our merit-driven work culture.",
  },
];

const responsibilities = [
  "Identify and connect with Indian exporters, manufacturers and MSMEs.",
  "Generate leads through calls, emails and outreach channels.",
  "Build strong relationships and convert leads into registrations.",
  "Follow up consistently and achieve sales targets.",
  "Coordinate with marketing and event teams to maximize participation."
];

const requirements = [
  "2+ years in Event Sales, B2B Sales or Corporate Marketing.",
  "Familiarity with India's export ecosystem is an added advantage.",
  "Strong communication and relationship-building skills.",
  "Ability to influence decisions and drive event participation."
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const listContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const listItemVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function JobOpportunities() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    basicQualification: "",
    positionAppliedFor: "",
    address: "",
    phoneNumber: "",
  });
  const [cvFile, setCvFile] = useState<File | null>(null);

  const [uploadFile, { isLoading: isUploading }] = useUploadFileMutation();
  const [createJobApplication, { isLoading: isSubmitting }] = useCreateJobApplicationMutation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCvFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!cvFile) {
      toast.error("Please attach your CV");
      return;
    }

    try {
      // 1. Upload CV
      const uploadRes = await uploadFile({ file: cvFile, folder: "cvs" }).unwrap();
      const cvUrl = uploadRes.data.url;

      // 2. Submit application
      await createJobApplication({
        ...formData,
        cvUrl,
      }).unwrap();

      toast.success("Job application submitted successfully!");
      setOpen(false);
      setFormData({
        name: "",
        email: "",
        basicQualification: "",
        positionAppliedFor: "",
        address: "",
        phoneNumber: "",
      });
      setCvFile(null);
    } catch (error: any) {
      toast.error(error.data?.message || "Failed to submit application");
    }
  };

  return (
    <div className="w-full bg-background text-foreground">
      {/* Hero Banner */}
      <section className="relative w-full py-8 md:py-12 bg-[#0a1628] overflow-hidden flex items-center border-b border-gray-800">
        {/* Glow backdrop */}
        <div className="absolute right-0 top-0 w-1/2 h-full bg-primary/20 blur-[100px] pointer-events-none rounded-full translate-x-1/3 -translate-y-1/4 z-0" />
        <div className="absolute left-0 bottom-0 w-1/3 h-1/2 bg-primary/10 blur-[120px] pointer-events-none rounded-full -translate-x-1/4 translate-y-1/4 z-0" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center text-left">
            {/* Left Column Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-7 relative z-20 pointer-events-auto max-w-xl lg:max-w-2xl"
            >
              <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
                Careers
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-white">
                Job <span className="text-primary">Opportunities</span>
              </h1>
              <p className="text-white/70 text-sm md:text-base lg:text-lg leading-relaxed mb-6">
                AECCI offers a world of opportunities to educated, talented and
                confident youngsters. Our work culture allows you to enhance your
                skills, explore your talent and get correctly rewarded for your
                caliber.
              </p>
            </motion.div>

            {/* Right Column Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="md:col-span-5 relative z-10 flex justify-center"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative w-full aspect-[4/3] max-w-md md:max-w-none rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900/50 p-2 backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-50" />
                <img
                  src={careerHero}
                  alt="Careers at AECCI"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Perks / Benefits */}
      <section className="py-12 md:py-16 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-2 block">
              Why Join Us
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Life at AECCI
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-xs md:text-sm leading-relaxed">
              Be a part of a dynamic team of professionals and see your career
              soar with one of the biggest Chambers in the world.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12"
          >
            {perks.map((perk, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                className="h-full"
              >
                <Card className="h-full border border-gray-100 hover:border-primary/30 transition-all duration-300 bg-white shadow-sm hover:shadow-md group">
                  <CardContent className="p-6 flex flex-col gap-3">
                    <div className="p-2.5 bg-primary/10 rounded-lg text-primary w-fit group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <perk.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900 group-hover:text-primary transition-colors">
                      {perk.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {perk.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Current Job Openings */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Card className="border border-gray-100 shadow-lg overflow-hidden bg-white hover:border-primary/20 transition-all duration-300">
              <CardContent className="p-0">
                {/* Header */}
                <div className="bg-gradient-to-r from-[#0b1424] to-[#0d1f38] px-6 py-6 md:px-8 text-white">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="bg-primary/20 text-primary border border-primary/30 px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                      Full-Time
                    </span>
                    <span className="bg-white/10 text-white/90 px-3 py-0.5 rounded-full text-[10px] font-medium uppercase tracking-wider">
                      Mumbai / Hybrid
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                    Event Sales & Marketing Executive
                  </h2>
                </div>

                {/* Content Body */}
                <div className="p-6 md:p-8 space-y-6">
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Are you passionate about sales and skilled at convincing people?
                    We're looking for a dynamic professional to maximize participation
                    in business events and connect Indian businesses with global
                    opportunities.
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
                    {/* Responsibilities */}
                    <div className="space-y-4">
                      <h3 className="font-bold text-gray-900 text-base flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        Key Responsibilities
                      </h3>
                      <motion.ul
                        variants={listContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-3"
                      >
                        {responsibilities.map((resp, i) => (
                          <motion.li
                            key={i}
                            variants={listItemVariants}
                            className="flex items-start gap-2 text-xs text-gray-500 leading-relaxed"
                          >
                            <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </div>

                    {/* Requirements */}
                    <div className="space-y-4">
                      <h3 className="font-bold text-gray-900 text-base flex items-center gap-2">
                        <Award className="w-5 h-5 text-primary shrink-0" />
                        Preferred Experience
                      </h3>
                      <motion.ul
                        variants={listContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-3"
                      >
                        {requirements.map((req, i) => (
                          <motion.li
                            key={i}
                            variants={listItemVariants}
                            className="flex items-start gap-2 text-xs text-gray-500 leading-relaxed"
                          >
                            <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span>{req}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </div>
                  </div>

                  {/* Quick Action Footer */}
                  <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-gray-500 font-medium text-center sm:text-left max-w-md">
                      If you have the ability to build relationships, influence decisions
                      and drive event participation, we'd be glad to hear from you.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
                      <Dialog open={open} onOpenChange={setOpen}>
                        <DialogTrigger asChild>
                          <Button className="bg-primary text-white hover:bg-primary/95 px-6 py-2.5 h-10 rounded-full font-semibold text-xs shadow-md shadow-primary/20 hover:scale-105 transition-all">
                            Apply Now
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[620px] rounded-3xl p-6 border-none shadow-2xl overflow-hidden bg-white">
                          <DialogHeader className="pb-3 border-b border-gray-100 text-left">
                            <DialogTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
                              <Briefcase className="w-5 h-5 text-primary" />
                              Apply for Position
                            </DialogTitle>
                            <p className="text-xs text-gray-500 leading-normal">
                              Join a dynamic, growth-focused team. Provide your details and upload your resume.
                            </p>
                          </DialogHeader>

                          <form onSubmit={handleSubmit} className="space-y-4 py-3 text-left">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {/* Name */}
                              <div className="grid gap-1">
                                <Label htmlFor="name" className="text-xs font-semibold text-gray-700">Full Name</Label>
                                <div className="relative">
                                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                                  <Input
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Your Full Name"
                                    className="pl-9 h-10 bg-gray-50/50 border-gray-200 focus-visible:ring-primary focus-visible:border-primary rounded-xl text-sm"
                                  />
                                </div>
                              </div>

                              {/* Email */}
                              <div className="grid gap-1">
                                <Label htmlFor="email" className="text-xs font-semibold text-gray-700">Email ID</Label>
                                <div className="relative">
                                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                                  <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Your Email ID"
                                    className="pl-9 h-10 bg-gray-50/50 border-gray-200 focus-visible:ring-primary focus-visible:border-primary rounded-xl text-sm"
                                  />
                                </div>
                              </div>

                              {/* Basic Qualification */}
                              <div className="grid gap-1">
                                <Label htmlFor="basicQualification" className="text-xs font-semibold text-gray-700">Basic Qualification</Label>
                                <div className="relative">
                                  <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                                  <Input
                                    id="basicQualification"
                                    name="basicQualification"
                                    required
                                    value={formData.basicQualification}
                                    onChange={handleInputChange}
                                    placeholder="e.g. B.Sc, MBA"
                                    className="pl-9 h-10 bg-gray-50/50 border-gray-200 focus-visible:ring-primary focus-visible:border-primary rounded-xl text-sm"
                                  />
                                </div>
                              </div>

                              {/* Position Applied For */}
                              <div className="grid gap-1">
                                <Label htmlFor="positionAppliedFor" className="text-xs font-semibold text-gray-700">Position Applied For</Label>
                                <div className="relative">
                                  <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                                  <Input
                                    id="positionAppliedFor"
                                    name="positionAppliedFor"
                                    required
                                    value={formData.positionAppliedFor}
                                    onChange={handleInputChange}
                                    placeholder="e.g. Sales Executive"
                                    className="pl-9 h-10 bg-gray-50/50 border-gray-200 focus-visible:ring-primary focus-visible:border-primary rounded-xl text-sm"
                                  />
                                </div>
                              </div>

                              {/* Phone Number */}
                              <div className="grid gap-1">
                                <Label htmlFor="phoneNumber" className="text-xs font-semibold text-gray-700">Phone Number</Label>
                                <div className="relative">
                                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                                  <Input
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    required
                                    value={formData.phoneNumber}
                                    onChange={handleInputChange}
                                    placeholder="Your Phone Number"
                                    className="pl-9 h-10 bg-gray-50/50 border-gray-200 focus-visible:ring-primary focus-visible:border-primary rounded-xl text-sm"
                                  />
                                </div>
                              </div>

                              {/* Address */}
                              <div className="grid gap-1">
                                <Label htmlFor="address" className="text-xs font-semibold text-gray-700">Address</Label>
                                <div className="relative">
                                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                                  <Input
                                    id="address"
                                    name="address"
                                    required
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    placeholder="Your Address"
                                    className="pl-9 h-10 bg-gray-50/50 border-gray-200 focus-visible:ring-primary focus-visible:border-primary rounded-xl text-sm"
                                  />
                                </div>
                              </div>
                            </div>

                            {/* Attach CV - Premium Upload Area */}
                            <div className="grid gap-1.5 pt-2">
                              <Label className="text-xs font-semibold text-gray-700">Attach CV</Label>
                              <div className="relative">
                                <input
                                  id="cv"
                                  name="cv"
                                  type="file"
                                  accept=".pdf,.doc,.docx"
                                  required
                                  onChange={handleFileChange}
                                  className="sr-only"
                                />
                                <label
                                  htmlFor="cv"
                                  className={`flex flex-col items-center justify-center border-2 border-dashed rounded-2xl p-5 cursor-pointer transition-all duration-300 ${cvFile
                                    ? "border-emerald-500 bg-emerald-500/5 hover:bg-emerald-500/10 text-emerald-700"
                                    : "border-gray-200 bg-gray-50/50 hover:bg-gray-50 hover:border-primary/50"
                                    }`}
                                >
                                  {cvFile ? (
                                    <div className="flex flex-col items-center text-center gap-2">
                                      <div className="p-2.5 bg-emerald-500/10 rounded-full text-emerald-600">
                                        <FileText className="w-6 h-6" />
                                      </div>
                                      <div className="text-sm font-semibold truncate max-w-[280px]">
                                        {cvFile.name}
                                      </div>
                                      <div className="text-xs text-emerald-600/80">
                                        {(cvFile.size / 1024 / 1024).toFixed(2)} MB • Ready to Upload
                                      </div>
                                    </div>
                                  ) : (
                                    <div className="flex flex-col items-center text-center gap-1.5">
                                      <div className="p-2.5 bg-primary/10 rounded-full text-primary mb-1">
                                        <UploadCloud className="w-5 h-5 animate-pulse" />
                                      </div>
                                      <div className="text-sm font-bold text-gray-800">
                                        Upload your CV
                                      </div>
                                      <div className="text-xs text-gray-500">
                                        Drag & drop or click to choose file
                                      </div>
                                      <div className="text-[10px] text-gray-400 font-medium uppercase mt-1">
                                        PDF, DOC, DOCX up to 5MB
                                      </div>
                                    </div>
                                  )}
                                </label>
                              </div>
                            </div>

                            {/* Actions Footer */}
                            <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
                              <Button
                                type="button"
                                variant="outline"
                                onClick={() => setOpen(false)}
                                className="h-10 px-5 rounded-full text-xs font-semibold hover:bg-gray-50 text-gray-700 border-gray-200 transition-colors"
                              >
                                Cancel
                              </Button>
                              <Button
                                type="submit"
                                disabled={isUploading || isSubmitting}
                                className="h-10 px-6 rounded-full text-xs font-semibold bg-primary text-white hover:bg-primary/95 transition-all shadow-md shadow-primary/10"
                              >
                                {isUploading || isSubmitting ? (
                                  <span className="flex items-center gap-2">
                                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                    Submitting...
                                  </span>
                                ) : (
                                  "Submit Application"
                                )}
                              </Button>
                            </div>
                          </form>
                        </DialogContent>
                      </Dialog>

                      <a
                        href="tel:8433720996"
                        className="inline-flex items-center justify-center gap-1.5 border border-gray-200 text-gray-700 font-semibold px-5 py-2.5 h-10 rounded-full text-xs hover:bg-gray-50 hover:border-gray-300 transition-all cursor-pointer"
                      >
                        <Phone className="w-3.5 h-3.5 text-primary" />
                        <span>+91 8433720996</span>
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Submit Resume Sidebar / Callout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.1 }}
          >
            <Card className="border border-gray-100 shadow-sm max-w-3xl mx-auto bg-white">
              <CardContent className="p-6 md:p-8 flex flex-col gap-6 pb-1">
                <div>
                  <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                    Submit Your CV
                  </h2>
                  <p className="text-gray-500 leading-relaxed text-xs">
                    At AECCI we invest heavily into our employee's training and
                    development. Be a part of a dynamic team of professionals
                    and see your career soar with one of the biggest Chambers in
                    the world.
                  </p>
                  <p className="text-gray-500 leading-relaxed mt-2 text-xs">
                    If you don't find any position available of your interest,
                    you can mail your resume at{" "}
                    <a
                      href="mailto:hraecci@gmail.com"
                      className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
                    >
                      hraecci@gmail.com
                    </a>{" "}
                    or{" "}
                    <a
                      href="mailto:info@aecci.org.in"
                      className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
                    >
                      info@aecci.org.in
                    </a>
                  </p>
                </div>
                <Separator className="bg-gray-100" />
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="mailto:hraecci@gmail.com"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-6 py-2 h-9 rounded-full text-xs hover:bg-primary/90 transition-colors shadow-md shadow-primary/10"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    Mail HR
                  </a>
                  <a
                    href="mailto:info@aecci.org.in"
                    className="inline-flex items-center justify-center gap-2 border border-gray-200 text-gray-700 font-semibold px-6 py-2 h-9 rounded-full text-xs hover:bg-gray-50 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    General Enquiry
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-8 md:py-12 bg-slate-50 overflow-hidden border-t border-slate-200/60">
        <div className="absolute inset-0 bg-primary/5 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className="flex flex-col items-center text-center"
          >
            <img
              src="/arccilogoWithText.png"
              alt="AECCI Logo"
              className="w-28 h-auto object-contain mb-5"
            />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 uppercase tracking-wide">
              Come Grow With Us!
            </h2>
            <p className="text-gray-500 text-xs max-w-xl mb-6">
              Join AECCI's team and be part of a global chamber shaping
              international trade and business growth.
            </p>
            <Link
              to="/about/about-chamber"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-semibold text-xs hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20 hover:scale-105"
            >
              About AECCI <ArrowRight className="size-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
