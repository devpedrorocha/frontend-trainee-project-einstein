import { Card, CardContent, CardHeader, CardFooter } from '@/components/atoms/card';
import { ArrowRightFromLine } from 'lucide-react';
import { BarChart, Bar, ResponsiveContainer, Tooltip, YAxis, XAxis } from 'recharts';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Pagination } from '@/components/molecules/pagination';

// const SIZE = 8


type Question = {
    analysis_description: string
    content: string
    correct_answer: string
    difficulty_level: string
    id: string
    number_question: number
    data: Array<{letter: string, count: number}>
    selected_correct_answer_quantity : number
    selected_letter_a_quantity: number
    selected_letter_b_quantity: number
    selected_letter_c_quantity: number
    selected_letter_d_quantity: number
    selected_letter_e_quantity: number
    selected_wrong_answer_quantity : number
}


export function QuestionCharts() {

    const navigate = useNavigate();

    const [ questions, setQuestions ] = useState<Array<Question>>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [ questionsPerPage] = useState(8);

    const indexOfLastQuestion = currentPage * questionsPerPage;
    const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
    const currentQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion);

    const { id } = useParams();
    // const [report, setReport] = useState(null);
  
    useEffect(() => {
      // Fazer a requisição para obter os dados do relatório usando o ID
      fetch(`http://127.0.0.1:8000/reports/${id}?`)
        .then(response => response.json())
        .then(data => {
            const formattedData = data.map((question: Question) => ({
                ...question,
                data: [
                    { letter: 'A', count: question.selected_letter_a_quantity },
                    { letter: 'B', count: question.selected_letter_b_quantity },
                    { letter: 'C', count: question.selected_letter_c_quantity },
                    { letter: 'D', count: question.selected_letter_d_quantity },
                    { letter: 'E', count: question.selected_letter_e_quantity }
                ]
            }));

            // Sort formatted data by question number if needed
            formattedData.sort((a: Question, b: Question) => a.number_question - b.number_question);
            
            setQuestions(formattedData);
        })
        .catch(error => console.error('Erro na requisição:', error));
    }, [id]);


    const handleGoToQuestion = (question: object) => {
        navigate(`individual-question`, {state: {questionInformations: question}});
    }

    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    }

    return (
        <main>
            <h1 className="font-bold mb-8 mt-12 text-2xl">
                Questões - Simulinho 2024 
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2 items-center justify-center py-8 px-6' >
                
            { currentQuestions.map((question) => (
                    <Card key={question.id}>
                        <CardHeader>
                            <div className='flex justify-between'>
                                <p className='font-bold'>
                                Questão {question.number_question}
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
                            Resposta correta
                            </p>
                            : {question.correct_answer}
                        </CardFooter>

                    </Card>
                ))}
            </div>
            <Pagination  questionsPerPage={questionsPerPage} totalQuestions={questions.length} paginate={paginate}/>
        </main>
    );
}
