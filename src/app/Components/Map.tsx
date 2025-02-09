'use client';

export default function Map() {

  return (
    <div className="flex justify-center w-full mt-4">
      <div className="w-full max-w-4xl">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.671536040701!2d7.132677676529923!3d43.634194953659375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdd48824b3221b%3A0x4718600ae4990672!2s1000%20Av.%20de%20la%20Batterie%2C%2006270%20Villeneuve-Loubet!5e0!3m2!1sfr!2sfr!4v1739124319460!5m2!1sfr!2sfr"          height="450" 
          className="w-full h-[400px] md:h-[450px] rounded-lg"
          style={{ border: 0 }} 
          allowFullScreen={true}  
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
          </iframe>
          </div>
    </div>
  );
}
