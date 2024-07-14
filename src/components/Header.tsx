import { useNavigate } from "react-router-dom";
import { AvatarDropDownMenu } from "./molecules/avatar-drop-down-menu";



export function Header(){

    const navigate = useNavigate()

    return(
        <header className='w-full h-18 fixed bg-white shadow-md z-30'>
            <div className='flex justify-between items-center py-4 px-6'>
                <div className='flex items-center gap-2'>
                    <div className='flex items-center gap-2 cursor-pointer'>
                        <img
                        className="w-16 invert dark:brightness-[0.2] dark:grayscale"
                        src="https://vest.einsteinfloripa.com.br/images/logoEinstein.png"
                        />
                        <img
                        className="w-16 invert dark:brightness-[0.2] dark:grayscale"
                        src="https://vest.einsteinfloripa.com.br/images/logo.png"
                        />
                    </div>
                    <div className="ml-6 flex gap-8">
                        <p className="font-bold" onClick={() => navigate('/home')}>
                            <a href="">
                                Início
                            </a>
                        </p>
                        <p className="font-bold" onClick={() => navigate('/create-report')}>
                            <a href="">
                                Relatórios
                            </a>
                        </p>
                        <p className="font-bold" onClick={() => navigate('/teachers')}>
                            <a href="">
                                Professores
                            </a>
                        </p>
                        
                    </div>
                </div>
                <div className="mr-12">
                    
                    <AvatarDropDownMenu />
                </div>
            </div>
        </header>
    )
}