import { Inter } from 'next/font/google'
import {Button} from 'ui';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="bg-blue-200">
      <Button/>
     </div>
  )
}
