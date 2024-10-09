import { useNavigate } from "react-router-dom";
import { AvatarDropDownMenu } from "./avatar-drop-down-menu";



export function Header(){

    const navigate = useNavigate()

    return(
        <header className='fixed z-30 w-full bg-white shadow-md h-18'>
            <div className='flex items-center justify-between px-6 py-4'>
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
                    <div className="flex gap-8 ml-6">
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