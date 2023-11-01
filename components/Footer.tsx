import Link from "next/link"
export default function Footer() {
    return (
        <div className="bg-main-primary">
            <div className="m-auto border-b border-white max-w-xs md:max-w-3xl lg:max-w-pc-width lg:flex">
                <div className="py-4 lg:w-3/6">
                    <h4 className="text-lg font-semibold text-white mb-2">CARD</h4>
                    <p className="text-white text-sm mb-2">
                        Hệ thống đổi thẻ cào sang tiền mặt phí tốt nhất thị trường - tự động xử lý thẻ trong vài giây
                    </p>
                    <p className="text-white text-sm mb-2" >Hotline: <span className="text-white text-sm font-semibold">0947838128</span></p>
                    <p className="text-white text-sm ">Email:</p>
                </div>
                <div className="py-4 lg:w-3/6">
                    <h4 className="text-lg font-semibold text-white mb-2">THÔNG TIN</h4>
                    <div>
                        <ul style={{ listStyle: "inside" }}>
                            <li className="text-white p-1"><Link className="text-white text-sm hover:decoration-1 hover:underline" href='https://www.facebook.com/ntgtanetwork/'>https://www.facebook.com/ntgtanetwork/</Link></li>
                            <li className="text-white p-1"><Link className="text-white text-sm hover:decoration-1 hover:underline" href=''>Điều khoản</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="m-auto block py-2 justify-between max-w-xs md:max-w-3xl md:flex lg:flex lg:max-w-pc-width">
                <div><span className="text-white text-xs">Bản quyền © CARRD</span></div>
                <div> <span className="text-white text-xs">Version <b className="text-yellow-300 text-xs">2.1.0</b>  - Developer by <Link className="text-xs hover:underline hover:decoration-white" href=''>CMSNT.CO</Link></span></div>
            </div>
        </div>
    )
}