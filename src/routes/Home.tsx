import { SendFilesSection } from "@/components/molecules/send-files-section";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


interface Report {
    date_test_carried_out : string
    id: string
    name: string
}

export function Home(){

    const [reports, setReports] = useState<Array<Report>>([])

    const navigate = useNavigate();

    const fetchReports = () => {
        fetch("http://127.0.0.1:8000/reports",{
            
             method: 'GET',
             headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => setReports(data))
        .catch(error => {
            console.error('Erro na requisição:', error);
        });
    
    }

    useEffect(() => {
        fetchReports()
    }, [])

    return(
        <div className="pt-20 w-full">
            <h1 className="font-bold mb-16 pb-18 text-2xl">
                Relatórios
            </h1>
            <div className="grid grid-cols-3 gap-4">
                {reports.length > 0 ? reports.map(report => (
                    <div onClick={() => navigate(`/question-charts/${report.id}`)} key={report.id} className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md cursor-pointer hover:opacity-70">
                        <div className="flex flex-col">
                            <h2 className="font-bold text-lg text-primary">{report.name}</h2>
                            <p>{report.date_test_carried_out}</p>
                        </div>
                        <ArrowRight size={24} color="#286B9F" />
                    </div>
                )) : <p>Nenhum relatório encontrado</p>}
              </div>  

            {/* <SendFilesSection /> */}
        </div>
    )
}