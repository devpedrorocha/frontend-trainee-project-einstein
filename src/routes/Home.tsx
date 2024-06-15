import { SendFilesSection } from "@/components/send-files-section";



export function Home(){
    return(
        <div className="pt-20 w-full">
            <h1 className="font-bold mb-16 pb-18 text-2xl">
                Criar relatório
            </h1>
            <SendFilesSection />
        </div>
    )
}