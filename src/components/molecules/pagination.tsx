
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
      <ul className="flex justify-end gap-2">
        {
            questionNumbers.map(number => (
                <li onClick={() => paginate(number)} key={number} className="px-4 py-2 text-lg border rounded cursor-pointer hover:opacity-80">
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