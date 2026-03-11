'use client'

import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'
import Image from 'next/image'
import Link from 'next/link'

export default function SignInPage() {
  return (
    <div className="min-h-screen grid w-full place-items-center bg-white px-4 font-game">
      <SignIn.Root>
        <SignIn.Step
          name="start"
          className="mx-auto w-full sm:w-96 space-y-6 bg-white px-6 py-8 border-4 border-black shadow-[8px_8px_0_0_#000]"
        >
          {/* Header */}
          <header className="flex flex-col items-center gap-2">
            <Image src="/logo.png" alt="CodeBox logo" width={48} height={48} />
            <h1 className="text-2xl font-bold tracking-wide text-black uppercase">
              CodeBox
            </h1>
            <p className="text-xs text-black/60 uppercase tracking-widest">
              Sign in to continue your adventure
            </p>
          </header>

          <Clerk.GlobalError className="block text-sm text-red-500 font-bold" />

          {/* Google Login */}
          <Clerk.Connection
            name="google"
            className="flex w-full items-center justify-center gap-3 px-4 py-2 bg-black text-yellow-400 border-2 border-black shadow-[4px_4px_0_0_#fbbf24] hover:bg-yellow-400 hover:text-black active:translate-y-[2px] active:shadow-none font-bold uppercase transition-colors"
          >
            <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" aria-hidden>
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Continue with Google
          </Clerk.Connection>

          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-black/20" />
            <span className="text-xs text-black/40 uppercase font-bold">or</span>
            <div className="h-px flex-1 bg-black/20" />
          </div>

          {/* Email & Password */}
          <div className="space-y-4">
            <Clerk.Field name="identifier" className="space-y-1">
              <Clerk.Label className="block font-bold text-black uppercase text-xs tracking-widest">
                Email
              </Clerk.Label>
              <Clerk.Input
                type="email"
                required
                placeholder="you@example.com"
                className="w-full px-3 py-2 bg-white border-2 border-black shadow-[3px_3px_0_0_#000] outline-none focus:border-yellow-400 focus:shadow-[3px_3px_0_0_#fbbf24] placeholder:text-black/30 transition-all"
              />
              <Clerk.FieldError className="text-xs text-red-500 font-bold" />
            </Clerk.Field>

            <Clerk.Field name="password" className="space-y-1">
              <Clerk.Label className="block font-bold text-black uppercase text-xs tracking-widest">
                Password
              </Clerk.Label>
              <Clerk.Input
                type="password"
                required
                placeholder="••••••••"
                className="w-full px-3 py-2 bg-white border-2 border-black shadow-[3px_3px_0_0_#000] outline-none focus:border-yellow-400 focus:shadow-[3px_3px_0_0_#fbbf24] placeholder:text-black/30 transition-all"
              />
              <Clerk.FieldError className="text-xs text-red-500 font-bold" />
            </Clerk.Field>
          </div>

          {/* Submit */}
          <SignIn.Action
            submit
            className="w-full px-4 py-2 bg-yellow-400 border-2 border-black shadow-[4px_4px_0_0_#000] active:translate-y-[2px] active:shadow-none text-black font-bold uppercase hover:bg-yellow-300 transition-colors"
          >
            Sign In
          </SignIn.Action>

          <p className="text-center text-xs text-black/60 uppercase">
            No account?{' '}
            <Clerk.Link
              navigate="sign-up"
              className="font-bold text-black underline underline-offset-2 hover:text-yellow-600"
            >
              Create one
            </Clerk.Link>
          </p>
        </SignIn.Step>
      </SignIn.Root>
    </div>
  )
}

