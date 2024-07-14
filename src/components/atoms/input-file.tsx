import { Input } from "@/components/atoms/input"
import { Label } from "@/components/atoms/label"

interface InputFileProps {
    id: string
    label: string
    name: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    register: any
}

export function InputFile({ id, label, register, name }: InputFileProps) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      <Input accept=".xlsx, .csv" id={id} type="file" {...register(name)}/>
    </div>
  )
}
