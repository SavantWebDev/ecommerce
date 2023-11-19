import Link from 'next/link'

export default function RedirectLoginCadastro({fraseLink ,link, href}){
    return(
        <div className='flex items-center justify-center gap-2'>
            <p className='text-[14px] text-[#A6A4A4]'>{fraseLink}</p>
            <Link className='text-primary text-[14px] font-semibold' href={href}>{link}</Link>
        </div>
    )
}