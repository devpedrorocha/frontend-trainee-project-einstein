import { Avatar, AvatarFallback } from "./ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuSubTrigger, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { FaUser } from "react-icons/fa";

interface ComponentNameProps {

}
export function AvatarDropDownMenu(props : ComponentNameProps){
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
                    <DropdownMenuItem>Sair</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
    )
}