import { Metadata } from "next";
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';
import Logo from "@/app/components/logo";
import Link from "next/link";
import Image from 'next/image';


export const metadata: Metadata = {
  title: 'GETCV.DEV',
  description: 'Use getcv.dev to easily create your ATS-approved resume',
};



export default async function HomePage() {

  const hero ='https://placehold.co/1200x700/png'
  
  return (
    <> 
      <Header />
      
      <main className="">
        <div className="mt-8 text-center text-black">
          <h1 className="font-bold text-[3rem]">Create your developer CV for free</h1>
          <p className="text-xl">Our simple editor allows you to quickly create a recruiter-approved CV</p>

          <Link href='/editor'>
            <button className="mt-8 bg-blue-500 py-[10px] px-[20px] rounded-xl text-white font-bold cursor-pointer">Let's Build</button>
          </Link>

          <div className="h-[350px]"></div>
        </div>

      </main>
        <div className="bg-gray-800 h-[450px] relative">
          <div className="flex justify-center mt-8 absolute top-[-350px] right-0 left-0">
            <Image src={hero} alt='hero image' width={1200} height={700}/>
          </div>
        </div>

      <Footer />
    </>
  );
}