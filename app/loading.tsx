import Image from "next/image";

const loading = () => {
  return (
    <div className="h-screen flex items-center justify-center backdrop-blur-sm bg-white/70 dark:bg-black/30">
      <Image
        alt="company-logo"
        width={180}
        height={180}
        src="/images/Logo_JDTech_red.png"
      />
    </div>
  );
};

export default loading;
