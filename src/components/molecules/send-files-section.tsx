import z from 'zod'
import { useState } from "react"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MdVerifiedUser } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import { InputFile } from '../atoms/input-file';
import { Button } from '../atoms/button';
import { Input } from '../atoms/input';
import { Label } from '../atoms/label';
import { GrDocumentText } from 'react-icons/gr';
import { Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MAX_FILE_SIZE = 500000;
const ACCEPTED_FILE_TYPES = [".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"];

type FormSchema = {
    reportName: string
    correctAnswers: File[]
    studentAnswers: File[]
}

const FileSchema = z.object({
    reportName: z.string({message: "Nome da prova é necessário."}),
    correctAnswers: z
    .any()
    .refine((files) => files?.length == 1, "Arquivo de correção é necessário")
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `O tamanho máximo é de 5MB.`),
    // .refine(
    //     (files) => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type),
    //     "Apenas .xlsx são permitidos."
    // ),
    studentAnswers: z
        .any()
        .refine((files) => files?.length == 1, "Arquivo com respostas dos alunos necessário.")
        .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `O tamanho máximo é de 5MB.`),
        // .refine(
        // (files) => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type),
        // "Apenas .xlsx são permitidos."
        // ),
    
});

export function SendFilesSection(){
    
    const navigate = useNavigate();

    
    const [correctFile] = useState('');
    const [studentFile] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    
    const {register, handleSubmit, formState: {errors}} = useForm<FormSchema>({
        resolver: zodResolver(FileSchema)
    });

    const handleSendFile = (data: FormSchema) => {
        setIsLoading(true);
        const formData = new FormData()
        formData.append('reportName', data.reportName)
        formData.append('correctFile',data.correctAnswers[0])
        formData.append('studentFile',data.studentAnswers[0])


        fetch("http://127.0.0.1:8000/reports/",{
            method: 'POST',
            body: formData
        }).then(response => {
            const data = response.json()
            return data
        }).then(data => {
            console.log(data);
            if(data.message == 'Report created successfully'){
                navigate('/home')
            }
        }).catch(error => {
        });

        setIsLoading(false);
    }

    return (
        <form onSubmit={handleSubmit(handleSendFile)} className='flex flex-col gap-8 w-full'>
            <section className='flex flex-col gap-6'>
                <div className='flex items-end justify-center gap-4'>
                    <div className='grid w-full max-w-sm items-center gap-1.5'>
                        <Label htmlFor='name' >
                            Nome da Prova
                        </Label>
                        <Input className='max-w-sm' id='name' placeholder='Simulinho UFSC - 2034' {...register('reportName')} />
                        {errors.reportName ? <p className='text-red-500 text-center'>{errors.reportName.message}</p> : null}
                    </div>
                    <GrDocumentText size={38} color="#286B9F" />
                </div>
                <div>
                    <div className='flex items-end justify-center gap-4'>
                        <InputFile id='correct-file' label='Importar Gabarito' name='correctAnswers' register={register} />

                        {correctFile ? (<p>{correctFile}</p>) : (<MdVerifiedUser  size={40} color="#286B9F" />)}
                    </div>
                    
                    {errors.correctAnswers ? <p className='text-red-500 text-center'>{errors.correctAnswers.message}</p> : null}
                </div>

                <div>
                    <div className='flex items-end justify-center gap-4'>

                        <InputFile id='student-file' label='Importar Respostas dos Alunos' name='studentAnswers' register={register} />

                        {studentFile ? (<p>{studentFile}</p>) : (<PiStudent size={40} color="#286B9F" />)}
                    </div>

                    {errors.studentAnswers ? <p className='text-red-500 text-center'>{errors.studentAnswers.message}</p> : null}
                </div>
            </section>


            <Button className='border self-center rounded p-2 text-white w-2/3' type='submit'> 
            {isLoading ? (
                <Loader2 size={24} color="#fff" />
            ): (
                <>
                    Enviar arquivos
                </>
            )}
                
            
            </Button>

        </form>
    )
}