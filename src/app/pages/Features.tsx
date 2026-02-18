import {
  BookOpen, CreditCard, FileText, Users, School, Shield,
  Calendar, MessageSquare, BarChart3, Settings, Lock, GraduationCap, Check,
  Award, Calculator
} from 'lucide-react';
import { Link } from 'react-router';
import Seo from '../components/Seo';

export default function Features() {
  const features = [
    {
      icon: BookOpen,
      category: 'Student Management',
      items: [
        'Complete student directory',
        'Online admissions',
        'Attendance tracking',
        'Discipline records',
        'Class assignment & promotion',
        'Document management',
      ],
    },
    {
      icon: GraduationCap,
      category: 'Academic Management',
      items: [
        'Results with Nigerian grading (A1-F9)',
        'Digital report cards',
        'CA1, CA2, Exam scoring',
        'Position calculation',
        'Curriculum management',
        'Lesson plans & assignments',
      ],
    },
    {
      icon: CreditCard,
      category: 'Finance',
      items: [
        'Online fee payment',
        'Automated billing',
        'Payment receipts',
        'Outstanding fees tracking',
        'Revenue reports',
        'Installment plans',
      ],
    },
    {
      icon: Shield,
      category: 'Staff Management',
      items: [
        'Staff directory',
        'Attendance tracking',
        'Leave management',
        'Payroll with PAYE',
        'Documents & credentials',
        'Salary slip generation',
      ],
    },
    {
      icon: School,
      category: 'Teacher Portal',
      items: [
        'Class & subject assignments',
        'Mark attendance',
        'Enter scores',
        'Create assignments',
        'Submit lesson plans',
        'View timetable',
      ],
    },
    {
      icon: Users,
      category: 'Parent Portal',
      items: [
        'View academic performance',
        'Access report cards',
        'Track attendance',
        'Pay fees online',
        'Communicate with teachers',
        'Receive announcements',
      ],
    },
    {
      icon: FileText,
      category: 'Student Portal',
      items: [
        'View results',
        'Class timetable',
        'Download materials',
        'Submit assignments',
        'Check fee status',
        'Attendance records',
      ],
    },
    {
      icon: Calendar,
      category: 'Timetable',
      items: [
        'Class timetables',
        'Teacher schedules',
        'Exam timetable',
        'Conflict detection',
        'Room allocation',
        'Print & export',
      ],
    },
    {
      icon: MessageSquare,
      category: 'Communication',
      items: [
        'School announcements',
        'Internal messaging',
        'Email notifications',
        'Parent-teacher communication',
        'Targeted messaging',
        'Communication logs',
      ],
    },
    {
      icon: BarChart3,
      category: 'Reports & Analytics',
      items: [
        'Performance reports',
        'Financial reports',
        'Attendance analytics',
        'Class comparisons',
        'Export to Excel/PDF',
        'Visual dashboards',
      ],
    },
    {
      icon: Settings,
      category: 'School Setup',
      items: [
        'School profile & branding',
        '3-term system',
        'JSS/SSS class levels',
        'Subject management',
        'Nigerian grading setup',
        'Fee structure config',
      ],
    },
    {
      icon: Lock,
      category: 'Security',
      items: [
        'Role-based access',
        'Activity logs',
        'Login tracking',
        'Data backup',
        'Portal controls',
        'SSL encryption',
      ],
    },
  ];

  return (
    <div>
      <Seo
        title="Features | EduManage Pro by SableBoxx"
        description="Explore EduManage Pro features: student management, results, finance, staff management, portals, timetables, communication, and analytics."
        canonicalPath="/features"
      />
      {/* Hero */}
      <section className="px-6 lg:px-8 pt-32 pb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-semibold text-black mb-6 text-center">
          Features
        </h1>
        <p className="text-xl text-black/60 max-w-2xl mx-auto text-center">
          95+ features designed for Nigerian schools. JSS/SSS, 3-term system, and Nigerian grading.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/request-demo"
            className="px-8 py-4 bg-[#2979FF] text-white hover:bg-[#2979FF]/90 transition-colors"
          >
            Request Demo
          </Link>
          <Link
            to="/pricing"
            className="px-8 py-4 border border-black text-black hover:bg-black hover:text-white transition-colors"
          >
            View Pricing
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 lg:px-8 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[260px_1fr] gap-12 items-start">
            {/* Sidebar */}
            <aside className="hidden lg:block sticky top-24 self-start">
              <div className="border border-black/10 bg-white">
                <div className="px-5 py-4 border-b border-black/10">
                  <div className="text-sm font-medium text-black">Categories</div>
                  <div className="text-xs text-black/50 mt-1">Jump to a section</div>
                </div>
                <nav className="p-3" aria-label="Feature categories">
                  <ul className="space-y-1">
                    {features.map((section) => (
                      <li key={section.category}>
                        <a
                          href={`#${section.category.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block px-3 py-2 text-sm text-black/70 hover:text-black hover:bg-black/5 transition-colors"
                        >
                          {section.category}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </aside>

            {/* Content */}
            <div className="space-y-8">
              {features.map((section) => {
                const Icon = section.icon;
                const id = section.category.toLowerCase().replace(/\s+/g, '-');

                return (
                  <div
                    key={section.category}
                    id={id}
                    className="border border-black/10 p-8 hover:border-black/20 transition-colors scroll-mt-28"
                  >
                    <div className="flex items-start gap-4">
                      <div className="shrink-0">
                        <Icon className="size-8 text-[#2979FF]" />
                      </div>
                      <div className="min-w-0">
                        <h2 className="text-xl font-semibold text-black">{section.category}</h2>
                        <p className="text-sm text-black/60 mt-1">
                          Included tools and workflows for your school.
                        </p>
                      </div>
                    </div>

                    <ul className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-3">
                      {section.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-black/70 text-sm">
                          <Check className="size-4 text-[#2979FF] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Nigerian Standards */}
      <section className="px-6 lg:px-8 py-24 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-white text-left">
            Nigerian Educational Standards
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <School className="size-6 text-[#2979FF] mb-3" />
              <h3 className="font-medium mb-2 text-white">JSS/SSS Terminology</h3>
              <p className="text-white/60 text-[16px]">
                Junior Secondary (JSS 1-3) and Senior Secondary (SSS 1-3)
              </p>
            </div>
            <div>
              <Calendar className="size-6 text-[#2979FF] mb-3" />
              <h3 className="font-medium mb-2 text-white">3-Term System</h3>
              <p className="text-white/60 text-[16px]">
                First, Second, and Third terms aligned with Nigerian calendar
              </p>
            </div>
            <div>
              <Award className="size-6 text-[#2979FF] mb-3" />
              <h3 className="font-medium mb-2 text-white">Nigerian Grading</h3>
              <p className="text-white/60 text-[16px]">
                A1, B2, B3, C4, C5, C6, D7, E8, F9 with proper score ranges
              </p>
            </div>
            <div>
              <Calculator className="size-6 text-[#2979FF] mb-3" />
              <h3 className="font-medium mb-2 text-white">PAYE Calculations</h3>
              <p className="text-white/60 text-[16px]">
                Automated Nigerian tax calculations for staff payroll
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="border border-black/10 p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-black mb-4">
              Want to see these features working for your school?
            </h2>
            <p className="text-black/60 max-w-2xl mx-auto mb-8">
              Request a demo and we’ll walk you through student records, fees, results, portals, and reporting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-demo"
                className="px-8 py-4 bg-[#2979FF] text-white hover:bg-[#2979FF]/90 transition-colors"
              >
                Request Demo
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-black text-black hover:bg-black hover:text-white transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}