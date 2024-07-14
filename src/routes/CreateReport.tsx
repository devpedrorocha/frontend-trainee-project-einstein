import { SendFilesSection } from "@/components/molecules/send-files-section";

export const CreateReport = () => {
    return (
        <div className="pt-20 w-full">
            <h1 className="font-bold mb-16 pb-18 text-2xl">
                Relatórios
            </h1>
            <SendFilesSection/>
        </div>
    );
}