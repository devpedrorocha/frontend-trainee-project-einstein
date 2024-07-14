
import { DataTable } from "@/components/teachers/data-table"
import { columns } from "@/components/teachers/columns"
import { Button } from "@/components/atoms/button"
import { getCoreRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table"

const data = [
    {
        id: 1,
        name: "Davi",
        email: "davi@eisteinfloripa.com.br",
        subject: "Matemática",
    },
    {
        id: 2,
        name: "Everlin",
        email: "everlin@eisteinfloripa.com.br",
        subject: "Português",
    },
    {
        id: 3,
        name: "João",
        email: "joao@einsteinfloripa.com.br",
        subject: "Física",
    },
    {
        id: 4,
        name: "Ana",
        email: "ana@einsteinfloripa.com.br",

        subject: "Geografia",
    },
    {
        id: 5,
        name: "Gabriela",
        email: "gabriela@einsteinfloripa.com.br",
        subject: "História",
    },
    {
        id: 5,
        name: "Maba",
        email: "maba@einsteinfloripa.com.br",
        subject: "Português",
    },
    {
        id: 6,
        name: "Vinicius",
        email: "vinicius@einsteinfloripa.com.br",
        subject: "Filosofia",
    },
]
export function Teachers(){

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
      })

    return(
        <div className="pt-12 w-full">
            <h1 className="font-bold mb-16 pb-18 text-2xl">
                Gerenciar Professores
            </h1>

            <DataTable columns={columns} data={data} />
            <div className="flex items-center justify-end space-x-2 py-4">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                    >
                Anterior
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                Próxima
                </Button>
            </div>
        </div>
    )
}

 