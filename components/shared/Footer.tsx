import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href='/'>
          <Image 
            src="/assets/icons/smiling-face.svg"
            alt="logo"
            width={60}
            height={38}
            className="m-2"
          />
        </Link>

        <p>2023 Smile. All Rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer