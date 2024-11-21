import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div>
      <div className=" text-center p-20 bg-zinc-300">
        <p className="text-3xl pb-6 font-semibold">Contact Us!</p>
        <div className="flex gap-10 text-xl justify-center">
          <Link className="hover:text-[#e19a12]">Chat-App@gmail.com</Link>
          <p className="hover:text-[#e19a12]">+123-345-5678</p>
          <p className="hover:text-[#e19a12]">Pokuase-WhiteHouse</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;