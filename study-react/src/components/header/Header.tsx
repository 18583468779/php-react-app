import * as React from "react";
export const Header: React.FC = () => {
  return (
    <div className="navbar bg-base-100 shadow-lg px-8">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
        <a className="btn btn-ghost text-xl">H5源码</a>
        <a className="btn btn-ghost text-xl">系统课程</a>
        <a className="btn btn-ghost text-xl">实战项目</a>
        <a className="btn btn-ghost text-xl">最近更新</a>
        <a className="btn btn-ghost text-xl">在线文档</a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>设置</a>
            </li>
            <li>
              <a>退出登录</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
