
import React from 'react';
import { MapPinIcon, PhoneIcon, ClockIcon, InstagramIcon, FacebookIcon } from './icons';

interface InfoSectionProps {
  t: {
    title: string;
    address: string;
    addressValue: string;
    phone: string;
    workingHours: string;
    workingHoursValue1: string;
    workingHoursValue2: string;
    socialMedia: string;
    location: string;
  };
}

const SectionHeader: React.FC<{ title: string; }> = ({ title }) => (
  <div className="text-center mb-8">
    <h2 className="font-display text-4xl sm:text-5xl font-bold text-amber-400">{title}</h2>
  </div>
);

const InfoSection: React.FC<InfoSectionProps> = ({ t }) => {
  const socialLinks = {
    instagram: "https://www.instagram.com/caffe_pizzeria_city/?hl=en",
    facebook: "https://www.facebook.com/CaffePizzeriaCity/",
  };
  const mapLink = "https://www.google.com/maps/place/Caffe+Pizzeria+%22City%22/@44.8093369,15.8724567,17z/data=!3m1!4b1!4m6!3m5!1s0x47614012ca520b37:0x6207fc3abc382ddf!8m2!3d44.8093369!4d15.8724567!16s%2Fg%2F11dybg2yhc?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D";

  return (
    <section id="contact" className="py-12">
      <SectionHeader title={t.title} />
      <div className="bg-gray-800/50 rounded-lg p-6 sm:p-8 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="space-y-6">
            <InfoItem icon={<MapPinIcon />} title={t.address} value={t.addressValue} />
            <InfoItem icon={<PhoneIcon />} title={t.phone} value="+387 37 223-565" />
            <InfoItem icon={<ClockIcon />} title={t.workingHours} value={t.workingHoursValue} />

            <div>
              <h3 className="text-lg font-semibold text-amber-400 mb-2">{t.socialMedia}</h3>
              <div className="flex space-x-4">
                <SocialLink href={socialLinks.instagram} icon={<InstagramIcon />} label="Instagram" />
                <SocialLink href={socialLinks.facebook} icon={<FacebookIcon />} label="Facebook" />
              </div>
            </div>
          </div>

          <div className="h-64 md:h-full w-full rounded-lg overflow-hidden">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.098864705001!2d15.8724567!3d44.8093369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47614012ca520b37%3A0x6207fc3abc382ddf!2sCaffe%20Pizzeria%20%22City%22!5e0!3m2!1sen!2sba!4v1700000000000!5m2!1sen!2sba"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Pizzeria City Location">
              </iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

const InfoItem: React.FC<{ icon: React.ReactNode; title: string; value: string }> = ({ icon, title, value }) => (
  <div>
    <div className="flex items-center space-x-3 rtl:space-x-reverse">
      <div className="text-amber-400">{icon}</div>
      <h3 className="text-lg font-semibold text-amber-400">{title}</h3>
    </div>
    <p className="mt-1 ltr:ml-9 rtl:mr-9 text-gray-300">{value}</p>
  </div>
);

const SocialLink: React.FC<{ href: string; icon: React.ReactNode; label: string; }> = ({ href, icon, label }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
       className="text-gray-400 hover:text-amber-400 transition-transform duration-300 transform hover:scale-110">
        {icon}
    </a>
);


export default InfoSection;
