import Link from "next/link";
import Image from "next/image";
export default function forgotPassword() {
  return (
    <div>
      {/* Breadcump */}
      <div className="bg-breadcump">
        <div className="py-3 text-gray-500 text-sm font-medium m-auto px-2 md:max-w-3xl md:px-0 lg:max-w-pc-width lg:px-0">
          <Link className="mx-2" href="">
            Trang Chủ
          </Link>
          <span className="mx-2">/</span>
          <Link className="mx-2" href="">
            Quên mật khẩu
          </Link>
        </div>
      </div>
      <div className="bg-main-gray pb-10">
        <div className="max-w-xs m-auto  md:max-w-3xl lg:max-w-pc-width">
          <h4 className="text-lg py-3 px-3 font-semibold">Quên mật khẩu</h4>
          <div className="w-full md:w-full lg:w-2/3">
            <div className="block mb-3 lg:flex">
              <div className="w-full mb-2 px-3 lg:w-1/3">
                <label className="font-bold text-sm" htmlFor="">
                  Địa chỉ email
                </label>
              </div>
              <div className="px-3 w-full lg:w-3/6">
                <input
                  className="w-full px-3 py-1 rounded-lg border shadow-md focus:outline-none text-sm"
                  type="email"
                  placeholder="Nhập địa chỉ email"
                />
              </div>
            </div>
            <div className="px-3 flex items-center md:flex">
              <button className="px-3 py-2 text-sm font-semibold bg-emerald-500 text-white rounded-md">
                Xác minh ngay
              </button>
              <div>
                <Link
                  href=""
                  className=" px-3 text-sky-600 text-sm hover:underline"
                >
                  Quay lại
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
