
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image";
import {useState} from "react";
import {useRouter} from "next/navigation";
import axiosInstance from "@/utils/axiosInstance";
import {NOTIFICATION_TYPES, RESPONSE_STATUS} from "@/utils/enums";
import {CircularProgress} from "@mui/material";
import { Input } from 'antd';
import {showHide} from "@/redux/notification";
import {useAppDispatch} from "@/redux/hooks";

interface ICredentials {
  email: string
  password: string
}

interface IInputFieldError {
  status:"" | "warning" | "error" | undefined,
  message:string|undefined,
}



export function V0Signin() {

  const [credentials, setCredentials] = useState<ICredentials>({
    email : '',
    password : ''
  });

  const [isSigning, setIsSigning] = useState(false);
  const [passwordError, setPasswordError] = useState<IInputFieldError>({
    status:undefined,
    message:undefined
  });
  const [emailError, setEmailError] = useState<IInputFieldError>({
    status:undefined,
    message:undefined
  });
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogin = () => {
    setIsSigning(true);
    const emailValidationErrors = validateEmail(credentials.email);
    if (emailValidationErrors.status !== undefined) {
      setEmailError(emailValidationErrors)
      setIsSigning(false);
      dispatch(showHide({
        type:NOTIFICATION_TYPES.ERROR,
        message:emailValidationErrors.message??'',
        show:true
      }))
      return;
    }
    const passwordValidationErrors = validatePassword(credentials.password);
    if (passwordValidationErrors.status !== undefined) {
      setPasswordError(passwordValidationErrors)
      setIsSigning(false);
      dispatch(showHide({
        type:NOTIFICATION_TYPES.ERROR,
        message:passwordValidationErrors.message??'',
        show:true
      }))
      return;
    }
    axiosInstance.post('/auth/login', credentials)
        .then((response)=>{
          if (response.status === RESPONSE_STATUS.SUCCESS){
            router.push('/home')
          }
          setIsSigning(false);
        })

  }

  return (
        <div className="flex h-fit items-center justify-center bg-gray-100 dark:bg-gray-950">
          <div className="grid md:grid-cols-2 w-full max-w-6xl">
            <div className="hidden md:block">
              <Image style={{
                aspectRatio: "800/600",
                objectFit: "cover",
              }} className={'hover:scale-105 transition-all duration-150 w-full mx-auto mt-[50px]'} width={100}
                     height={50} src={'/images/signup.svg'}
                     alt={'About us'}></Image>
            </div>
            <Card className="w-full">
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
                <CardDescription>Enter your email and password to sign in to your account.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input status={emailError.status} id="email" placeholder="m@example.com" required type="email" onChange={(event) => {
                    setEmailError({
                      status:undefined,
                      message:undefined
                    })
                    setCredentials({...credentials, email: event.target.value});
                  }}/>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link className="text-sm font-medium text-gray-900 hover:underline dark:text-gray-400" href="/auth/forgot-password">
                      Forgot password?
                    </Link>
                  </div>
                  <Input status={passwordError.status} id="password" placeholder={'Enter the password'} required type="password" onChange={(event) => {
                    setPasswordError({
                      status:undefined,
                      message:undefined
                    })
                    setCredentials({...credentials, password: event.target.value});
                  }}/>
                </div>
                <Button className="w-full" type="submit" onClick={handleLogin}>
                  {isSigning?                  <CircularProgress size={30} sx={{color:'white'}}/>: <>Sign in</>}
                </Button>
              </CardContent>
              <CardFooter className="text-center text-sm">
                {'   Don\'t have an account?'}
                <Link className="font-medium text-gray-900 hover:underline dark:text-gray-400" href="#">
                  Sign up
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
  )
}

const validatePassword = (value: string):IInputFieldError  => {
  // if (value.length<8){
  //   return {
  //     status: "error",
  //     message: "Password must contain minimum of 8 characters"
  //   }
  // }
  return {
    status: undefined,
    message: undefined
  }
}

const validateEmail = (value: string):IInputFieldError  => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value)){
    return {
      status: "error",
      message: "Invalid email format"
    }
  }
  return {
    status: undefined,
    message: undefined
  }
}
