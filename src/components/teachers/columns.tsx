import { ColumnDef } from "@tanstack/react-table"

import { Button } from "@/components/atoms/button"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"

export type professores = {
    id: string
    name: string
    subject: string
}

export const columns: ColumnDef<professores>[] = [
    {
        accessorKey: "name",
        header: "Nome",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "subject",
        header: "Matéria",
    },
    {
        id: "actions",
        cell: ({ row }) => {
          const Professores = row.original
     
          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Ações</DropdownMenuLabel>
                <DropdownMenuItem
                  onClick={() => navigator.clipboard.writeText(Professores.id)}
                >
                  Editar Professor
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Ver detalhes do professor</DropdownMenuItem>
                <DropdownMenuItem>Excluir</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )
        },
      },
]
