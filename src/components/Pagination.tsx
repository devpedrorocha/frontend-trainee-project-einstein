
interface PaginationProps {
    questionsPerPage: number;
    totalQuestions: number;
    paginate: (number: number) => void;
}
export const Pagination = ({questionsPerPage, totalQuestions, paginate}: PaginationProps) => {


    const questionNumbers = [];
    for (let i = 1; i <= Math.ceil(totalQuestions / questionsPerPage); i++) {
        questionNumbers.push(i);
    }

  return (
    <nav className="w-full px-6">
      <ul className="flex gap-2 justify-end">
        {
            questionNumbers.map(number => (
                <li onClick={() => paginate(number)} key={number} className="cursor-pointer border text-lg rounded px-4 py-2 hover:opacity-80">
                    <a onClick={() => paginate(number)} className="">
                        {number}
                    </a>
                </li>
            ))
        }
      </ul>
    </nav>
  );
}