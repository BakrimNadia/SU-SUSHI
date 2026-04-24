'use client';

export default function Map() {
  return (
    <div className="mt-14 w-full">
      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-3 shadow-2xl backdrop-blur-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.671536040701!2d7.132677676529923!3d43.634194953659375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdd48824b3221b%3A0x4718600ae4990672!2s1000%20Av.%20de%20la%20Batterie%2C%2006270%20Villeneuve-Loubet!5e0!3m2!1sfr!2sfr!4v1739124319460!5m2!1sfr!2sfr"
          className="h-[360px] w-full rounded-[1.5rem] grayscale transition duration-700 hover:grayscale-0 md:h-[480px]"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}