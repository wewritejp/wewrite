import { useRouter } from "next/router"
import Layout from "src/core/layouts/Layout"
import { SignupForm } from "src/auth/components/SignupForm"
import { BlitzPage, Routes } from "@blitzjs/next"

const SignupPage: BlitzPage = () => {
  const router = useRouter()

  return (
    <Layout title="Sign Up">
      <div className="w-full max-w-md mx-auto">
        <SignupForm onSuccess={() => router.push(Routes.Home())} />
      </div>
    </Layout>
  )
}

export default SignupPage
