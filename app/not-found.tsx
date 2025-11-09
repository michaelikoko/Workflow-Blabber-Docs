import { OctagonAlert } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-row justify-center items-center min-h-screen">
      <div className="flex flex-col justify-center items-center">
        <OctagonAlert className="h-12 w-12 text-red-500" />
        <h1 className="text-4xl font-bold">404</h1>
        <div className="ml-4">The page does not exist</div>
        <Link href="/">
          <button className="mt-4 px-4 py-2 btn btn-accent">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  )
}
