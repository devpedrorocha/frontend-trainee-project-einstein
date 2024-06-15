import { Card, CardContent, CardHeader, CardFooter } from '@/components/card';
import { ArrowRightFromLine } from 'lucide-react';
import { BarChart, Bar, ResponsiveContainer, Tooltip, YAxis, XAxis } from 'recharts';
import { questionData } from '@/mocks/questionsData';
import { useNavigate } from 'react-router-dom';
export function QuestionCharts() {

    const navigate = useNavigate();

    const handleGoToQuestion = (question: object) => {
        navigate(`individual-question`, {state: {questionInformations: question}});
    }

    return (
        <main className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-2 items-center justify-center py-24 px-6' >
           { questionData.map((question, index) => (
                <Card key={index}>
                    <CardHeader>
                        <div className='flex justify-between'>
                            <p className='font-bold'>
                            {question.questionLabel}
                            </p>
                            <ArrowRightFromLine onClick={() => {
                                handleGoToQuestion(question)
                            }} className='cursor-pointer'/>
                        </div>
                    </CardHeader>
                    <CardContent className='h-64 w-96'>
                        <ResponsiveContainer width='100%' height='100%'>
                            <BarChart  width={64} height={64} data={question.data}>
                            <Tooltip
                            content={({ payload }) => (
                            <div>
                                {payload?.map((item) => (
                                    <div className='bg-white text-black py-2 px-4 rounded-md shadow-xl border border-zinc-200'>
                                        <p>Letra: {item.payload.letter}</p>
                                        <p>Quantidade selecionadas: {item.value}</p>
                                    </div>
                                ))}
                            </div>
                            )}
                            />

                                <YAxis dataKey='count' />
                                <XAxis dataKey='letter' />
                                <Bar dataKey='count' fill='#2563EB' />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>            
                    <CardFooter>
                        <p className='font-bold'>
                        Discplina
                        </p>
                        : {question.subject}
                    </CardFooter>

                </Card>
            ))}
        </main>
    );
}
