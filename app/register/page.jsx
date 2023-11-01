import Link from "next/link";
import Image from "next/image";
export default function register() {
  return (
    <>
      <div className="">
        <div className="bg-breadcump">
          <div className="py-3 text-gray-500 text-sm font-medium m-auto px-2 md:max-w-3xl md:px-0 lg:max-w-pc-width lg:px-0">
            <Link className="mx-2" href="">
              Trang Chủ
            </Link>
            <span className="mx-2">/</span>
            <Link className="mx-2" href="">
              Đăng ký
            </Link>
          </div>
        </div>
        <div className="bg-main-gray p-10">
          <div className="max-w-xs m-auto  md:max-w-3xl lg:max-w-pc-width">
            <h4 className="text-lg py-3 px-3 font-semibold">
              Đăng ký tài khoản
            </h4>
            <div className="w-full mg:full lg:w-2/3">
              <div className="block mb-3 lg:flex">
                <div className="w-1/3 mb-2 px-3">
                  <label className="font-bold  text-sm" htmlFor="">
                    Tên đăng nhập
                  </label>
                </div>
                <div className="px-3 w-full lg:w-2/3">
                  <input
                    className="w-full px-3 py-1 rounded-lg border shadow-md focus:outline-none text-sm"
                    type="text"
                    placeholder="Tên đăng nhập"
                  />
                </div>
              </div>
              <div className="block mb-3 lg:flex">
                <div className="px-3 mb-2 w-full lg:w-1/3">
                  <label className="font-bold text-sm" htmlFor="">
                    Địa chỉ email
                  </label>
                </div>
                <div className="px-3 w-full lg:w-2/3">
                  <input
                    className="w-full px-3 py-1 rounded-lg border shadow-md focus:outline-none text-sm"
                    type="text"
                    placeholder="Địa chỉ email"
                  />
                </div>
              </div>
              <div className="block mb-3 lg:flex">
                <div className="w-1/3 mb-2 px-3">
                  <label className="font-bold text-sm" htmlFor="">
                    Mật khẩu
                  </label>
                </div>
                <div className="px-3 w-full lg:w-2/3">
                  <input
                    className="w-full px-3 py-1 rounded-lg border shadow-md focus:outline-none text-sm"
                    type="password"
                    placeholder="Mật khẩu"
                  />
                </div>
              </div>
              <div className="block mb-3 lg:flex">
                <div className="w-1/3 mb-2 px-3">
                  <label className="font-bold text-sm" htmlFor="">
                    Xác minh
                  </label>
                </div>
                <div className="px-3 w-full lg:w-2/3">
                  <input
                    className="w-full px-3 py-1 mb-3 rounded-lg border shadow-sm focus:outline-none text-sm"
                    type="text"
                    placeholder="Tên đăng nhập"
                  />
                  <div>
                    <img
                      src="/images/Authenticator/download.jpg"
                      alt=""
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="px-3">
                <button className="px-3 py-2 text-sm font-semibold bg-emerald-500 text-white rounded-md">
                  Đăng ký tài khoản
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
