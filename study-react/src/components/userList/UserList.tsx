import * as React from "react";
export const UserList: React.FC = () => {
  return (
    <div className="flex items-center border-t-2 border-#ccc-500 pt-5 pb-5 ">
      <div className="w-10 rounded-full">
        <img
          alt="Tailwind CSS Navbar component"
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
        />
      </div>
      <div className="ml-5">
        <h1>代码片段里面空的呀。没有软件</h1>
        <p className="flex text-sm mt-1">
          <strong>用户丽娜</strong>
          <p>
            更新于 <span>8</span> 小时前
          </p>
        </p>
      </div>
    </div>
  );
};
