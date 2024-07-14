
import { Button } from "@/components/atoms/button"
import { Input } from "@/components/atoms/input"
import { Label } from "@/components/atoms/label"
import { useNavigate } from "react-router-dom"

export function Login() {

  const navigation = useNavigate();

  return (
    <div className="w-full min-h-screen lg:mt-0 lg:grid lg:grid-cols-2">
      <div className="flex items-center justify-center  py-12 h-screen">
        <div className="mx-auto grid w-[350px] xl:w-[450px] gap-6">
          <div className="flex flex-col gap-2 justify-center text-center items-center">
              <img
              className="lg:hidden invert  w-44 xl:w-64 dark:brightness-[0.2] dark:grayscale"
              src="https://vest.einsteinfloripa.com.br/images/logoEinstein.png"
            />
            <h1 className="text-4xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Digite seu email abaixo para realizar o login na sua conta
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@einsteinfloripa.com.br"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Senha</Label>
              </div>
              <Input id="password" placeholder="......" type="password" required />
            </div>
            <Button type="submit" onClick={()=> navigation('/home')} className="w-full bg-black lg:bg-primary">
              Login
            </Button>
          </div>
          
        </div>
      </div>
      <div className="h-screen bg-primary w-full items-center justify-center hidden lg:flex">
        <img
          className="w-44 xl:w-64 dark:brightness-[0.2] dark:grayscale"
          src="https://vest.einsteinfloripa.com.br/images/logoEinstein.png"
        />
        <img
          className="w-64 dark:brightness-[0.2] dark:grayscale"
          src="https://vest.einsteinfloripa.com.br/images/logo.png"
        />
      </div>
    </div>
  )
}
