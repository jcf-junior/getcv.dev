import Image from 'next/image';

export default function Logo({width, height, ...rest}: {width: number, height: number}) {

    const logoWidth = width ? width : 48;
    const logoHeight = height ? height : 48;

    return (
            <Image className='' src="/logo.png" alt='a white icon of a resume in a dark blue background' width={logoWidth} height={logoHeight}/>
    )
}