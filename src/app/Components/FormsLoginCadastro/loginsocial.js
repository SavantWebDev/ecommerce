import Image from 'next/image'

export default function LoginSocial() {
  return (
    <div className="w-full flex flex-col justify-center my-[29px] items-center">
      <div className="flex items-center justify-between gap-2">
        <span className=" w-[161px] h-[1px] flex-shrink-0 bg-[#D9D9D9]"></span>
        <p className="text-[#A6A4A4]">ou continue com</p>
        <span className=" w-[161px] h-[1px] flex-shrink-0 bg-[#D9D9D9]"></span>
      </div>

      <div className='mt-[30px]'>
        <div className='flex items-center gap-3'>
            <Image
            className='cursor-pointer'
            src="/images/google.svg"
            width={45}
            height={45}
            alt='Logo Google'

            />
            <Image
            className='cursor-pointer'
            src="/images/apple.svg"
            width={45}
            height={45}
            alt='Logo Apple'

            />
            <Image
            className='cursor-pointer'
            src="/images/facebook.svg"
            width={45}
            height={45}
            alt='Logo Facebook'

            />
        </div>
      </div>
    </div>
  );
}
