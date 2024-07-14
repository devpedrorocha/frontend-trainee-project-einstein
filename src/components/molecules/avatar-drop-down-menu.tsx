import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { FaUser } from "react-icons/fa";



export function AvatarDropDownMenu(){
    const navigation = useNavigate()

    return(
            <DropdownMenu modal={false} >
                <DropdownMenuTrigger>
                <Avatar>
                    <AvatarFallback>
                        <FaUser size={26} color="#286B9F" />
                    </AvatarFallback>
                </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Perfil</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigation('/login')}>Sair</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
    )
}